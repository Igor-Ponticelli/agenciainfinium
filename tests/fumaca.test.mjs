// Testes de fumaça (TODO 6): rotas, metadados, troca de página, prévias, formulário, sem JS,
// movimento reduzido, teclado e console limpo, no dist/ servido com os cabeçalhos do .htaccess.
// Rodar depois de `npm run build`: `npm test`.
import { after, before, describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { chromium } from 'playwright';
import { servidor } from '../scripts/servir.mjs';

const porta = 4399;
const base = `http://localhost:${porta}`;
let browser;

before(async () => {
  await new Promise((r) => servidor.listen(porta, r));
  browser = await chromium.launch();
});

after(async () => {
  await browser?.close();
  await new Promise((r) => servidor.close(r));
});

async function pagina(opcoes = {}) {
  const contexto = await browser.newContext({ viewport: { width: 1440, height: 900 }, ...opcoes });
  const p = await contexto.newPage();
  const erros = [];
  p.on('console', (m) => {
    if (m.type() === 'error') erros.push(m.text());
  });
  p.on('pageerror', (e) => erros.push(e.message));
  return { p, contexto, erros };
}

/** Atributo de um elemento do <head>, ou null, sem esperar pelo seletor. */
const atributo = (p, seletor, nome) =>
  p.evaluate(([s, n]) => document.querySelector(s)?.getAttribute(n) ?? null, [seletor, nome]);

const rotas = [
  '/',
  '/servicos/',
  '/sites/',
  '/sistemas/',
  '/projetos/',
  '/projetos/brisa-cafe/',
  '/projetos/retrodash/',
  '/blog/',
  '/blog/o-que-e-um-site-seguro/',
  '/contato/',
  '/raio-x-do-site/',
  '/privacidade/',
  '/acessos/',
];

describe('rotas e metadados', () => {
  for (const rota of rotas) {
    it(`${rota} responde 200 com título, description e canonical ou noindex`, async () => {
      const { p, contexto, erros } = await pagina();
      const resposta = await p.goto(base + rota, { waitUntil: 'networkidle' });
      assert.equal(resposta.status(), 200);
      assert.ok((await p.title()).length > 0, 'title');
      assert.ok(await atributo(p, 'meta[name="description"]', 'content'), 'description');
      const canonical = await atributo(p, 'link[rel="canonical"]', 'href');
      const robots = await atributo(p, 'meta[name="robots"]', 'content');
      assert.ok(canonical || robots?.includes('noindex'), 'canonical ou noindex');
      if (canonical) assert.equal(canonical, `https://infinium.app.br${rota}`);
      const ogUrl = await atributo(p, 'meta[property="og:url"]', 'content');
      assert.equal(ogUrl, `https://infinium.app.br${rota}`);
      assert.deepEqual(erros, [], 'console sem erros');
      await contexto.close();
    });
  }

  it('endereço inexistente devolve a 404 do Astro com noindex', async () => {
    const { p, contexto } = await pagina();
    const resposta = await p.goto(base + '/nao-existe/');
    assert.equal(resposta.status(), 404);
    assert.match(await p.title(), /não encontrada/i);
    await contexto.close();
  });

  it('cabeçalhos de segurança do .htaccess chegam na resposta', async () => {
    const { p, contexto } = await pagina();
    const resposta = await p.goto(base + '/');
    const h = resposta.headers();
    assert.ok(h['content-security-policy'], 'CSP');
    assert.equal(h['x-content-type-options'], 'nosniff');
    assert.equal(h['x-frame-options'], 'DENY');
    assert.ok(h['strict-transport-security']);
    await contexto.close();
  });

  it('sitemap, robots, rss, manifest e as imagens de compartilhamento existem', async () => {
    for (const arquivo of [
      '/sitemap-index.xml',
      '/robots.txt',
      '/blog/rss.xml',
      '/site.webmanifest',
      '/og.png',
      '/og/brisa-cafe.png',
    ]) {
      const r = await fetch(base + arquivo);
      assert.equal(r.status, 200, arquivo);
    }
  });
});

describe('troca de página e movimento', () => {
  it('a troca de página usa a cortina e termina em menos de 1,2 s', async () => {
    const { p, contexto, erros } = await pagina();
    await p.goto(base + '/', { waitUntil: 'networkidle' });
    const inicio = Date.now();
    await p.click('a.botao[href="/sites/"]');
    await p.waitForFunction(
      () => location.pathname === '/sites/' && !document.querySelector('.fita-cortina.ativa'),
      null,
      { timeout: 5000 },
    );
    assert.ok(Date.now() - inicio < 1200, `demorou ${Date.now() - inicio} ms`);
    assert.equal(await p.textContent('h1'), 'Sites');
    assert.deepEqual(erros, []);
    await contexto.close();
  });

  it('com movimento reduzido a cortina não é usada', async () => {
    const { p, contexto } = await pagina({ reducedMotion: 'reduce' });
    await p.goto(base + '/', { waitUntil: 'networkidle' });
    await p.click('a.botao[href="/sites/"]');
    await p.waitForFunction(() => location.pathname === '/sites/');
    await p.waitForTimeout(300);
    assert.equal(await p.$('.fita-cortina.ativa'), null);
    await contexto.close();
  });
});

describe('prévias', () => {
  it('a prévia da página do projeto nasce ativa, com a fonte do site e controles focáveis', async () => {
    const { p, contexto, erros } = await pagina();
    await p.goto(base + '/projetos/brisa-cafe/', { waitUntil: 'networkidle' });
    await p.waitForSelector('.previa[data-previa="brisa-cafe"][data-ativa]');
    const antes = await p.getAttribute('.br', 'data-tema');
    await p.click('[data-br-tema]');
    assert.notEqual(await p.getAttribute('.br', 'data-tema'), antes);
    const fontes = await p.evaluate(() =>
      Array.from(document.fonts)
        .filter((f) => f.status === 'loaded')
        .map((f) => f.family),
    );
    assert.ok(
      fontes.some((f) => f.startsWith('Young Serif')),
      'fonte do site carregada',
    );
    assert.deepEqual(erros, []);
    await contexto.close();
  });

  it('o voto do RetroDash incrementa', async () => {
    const { p, contexto } = await pagina();
    await p.goto(base + '/projetos/retrodash/', { waitUntil: 'networkidle' });
    await p.waitForSelector('.previa[data-ativa]');
    const voto = p.locator('.previa button[aria-label*="Votar"]').first();
    const antes = await voto.getAttribute('aria-label');
    await voto.click();
    assert.notEqual(await voto.getAttribute('aria-label'), antes);
    await contexto.close();
  });
});

describe('acessibilidade básica', () => {
  it('o primeiro Tab foca "Pular para o conteúdo" e o menu do celular abre e fecha', async () => {
    const { p, contexto } = await pagina({ viewport: { width: 390, height: 844 } });
    await p.goto(base + '/', { waitUntil: 'networkidle' });
    await p.keyboard.press('Tab');
    assert.equal(
      await p.evaluate(() => document.activeElement?.textContent?.trim()),
      'Pular para o conteúdo',
    );
    await p.click('[data-menu-botao]');
    assert.ok(await p.evaluate(() => document.documentElement.hasAttribute('data-menu-aberto')));
    await p.keyboard.press('Escape');
    assert.ok(await p.evaluate(() => !document.documentElement.hasAttribute('data-menu-aberto')));
    await contexto.close();
  });

  it('sem JS, o menu e o conteúdo ficam visíveis e o botão de WhatsApp do formulário some', async () => {
    const { p, contexto } = await pagina({
      javaScriptEnabled: false,
      viewport: { width: 390, height: 844 },
    });
    await p.goto(base + '/contato/', { waitUntil: 'networkidle' });
    const links = await p.evaluate(
      () =>
        Array.from(document.querySelectorAll('.menu a')).filter(
          (a) => a.getBoundingClientRect().height > 0,
        ).length,
    );
    assert.ok(links >= 6, `${links} links do menu visíveis`);
    const whatsapp = await p.evaluate(() => {
      const b = document.querySelector('[data-enviar="whatsapp"]');
      return b ? b.getBoundingClientRect().height : 0;
    });
    assert.equal(whatsapp, 0, 'botão do WhatsApp escondido sem JS');
    await contexto.close();
  });

  it('nenhuma página tem rolagem horizontal no celular', async () => {
    const { p, contexto } = await pagina({ viewport: { width: 390, height: 844 } });
    for (const rota of rotas) {
      await p.goto(base + rota, { waitUntil: 'networkidle' });
      const overflow = await p.evaluate(
        () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
      );
      assert.equal(overflow, 0, `${rota} tem ${overflow}px de overflow`);
    }
    await contexto.close();
  });
});

describe('formulário', () => {
  it('"Enviar pelo WhatsApp" monta a mensagem com os campos e abre o wa.me', async () => {
    const { p, contexto } = await pagina();
    await p.goto(base + '/contato/', { waitUntil: 'networkidle' });
    await p.fill('#nome', 'Maria');
    await p.fill('#empresa', 'Padaria da Maria');
    await p.fill('#contato', 'maria@exemplo.com');
    // O rádio é visualmente oculto; o que recebe o clique é a pílula (label)
    await p.click('label.opcao:has-text("Um site")');
    await p.fill('#mensagem', 'Quero um site.');
    // O site abre o wa.me em janela nova; aqui o window.open é interceptado para ler a URL
    // sem sair para a internet
    await p.evaluate(() => {
      window.__aberto = null;
      window.open = (url) => {
        window.__aberto = String(url);
        return null;
      };
    });
    await p.click('[data-enviar="whatsapp"]');
    const url = decodeURIComponent(await p.evaluate(() => window.__aberto));
    assert.match(url, /^https:\/\/wa\.me\/5547992735089\?text=/);
    assert.match(url, /Maria/);
    assert.match(url, /Padaria da Maria/);
    assert.match(url, /Um site/);
    await contexto.close();
  });
});
