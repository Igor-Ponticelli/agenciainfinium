// Inspeção em lote do build: capturas em 1440 e 390, erros de console, foco por teclado,
// sem JS, movimento reduzido e o tempo da troca de página. Uso: node inspecao.mjs <pasta-saida>
import { chromium } from 'playwright';
import { mkdirSync } from 'node:fs';
import { servidor } from './servir.mjs';

// Serve o dist/ aqui mesmo, com os cabeçalhos do .htaccess (scripts/servir.mjs)
const porta = 4396;
const base = `http://localhost:${porta}`;
await new Promise((r) => servidor.listen(porta, r));
const saida = process.argv[2] ?? './capturas';
mkdirSync(saida, { recursive: true });

const paginas = [
  '/',
  '/servicos/',
  '/sites/',
  '/sistemas/',
  '/projetos/',
  '/projetos/brisa-cafe/',
  '/blog/',
  '/blog/por-que-seu-site-nao-aparece-no-google/',
  '/contato/',
  '/acessos/',
  '/nao-existe/',
];
const viewports = { desktop: { width: 1440, height: 900 }, mobile: { width: 390, height: 844 } };

const browser = await chromium.launch();
const relatorio = [];

for (const [nome, viewport] of Object.entries(viewports)) {
  const contexto = await browser.newContext({ viewport, deviceScaleFactor: 1, locale: 'pt-BR' });
  const pagina = await contexto.newPage();
  const erros = [];
  pagina.on('console', (m) => {
    if (m.type() === 'error') erros.push(`${pagina.url()}: ${m.text()}`);
  });
  pagina.on('pageerror', (e) => erros.push(`${pagina.url()}: ${e.message}`));

  for (const rota of paginas) {
    await pagina.goto(base + rota, { waitUntil: 'networkidle' });
    // Rola a página inteira como uma pessoa faria: as prévias ativam, as fontes dos sites e as
    // imagens preguiçosas carregam, e a captura mostra o que o visitante vê
    await pagina.evaluate(async () => {
      const passo = Math.round(innerHeight * 0.8);
      for (let y = 0; y < document.body.scrollHeight; y += passo) {
        scrollTo(0, y);
        await new Promise((r) => setTimeout(r, 120));
      }
      scrollTo(0, 0);
    });
    await pagina.waitForLoadState('networkidle');
    await pagina.evaluate(() => document.fonts.ready);
    await pagina.waitForTimeout(400);
    await pagina.mouse.move(0, 0);
    const arquivo = `${saida}/${nome}${rota.replace(/\//g, '_') || '_home'}.png`;
    await pagina.screenshot({ path: arquivo, fullPage: true });
    // Primeira tela separada, para o contrato
    if (rota === '/' || rota === '/sites/' || rota === '/sistemas/') {
      await pagina.screenshot({ path: arquivo.replace('.png', '-primeira-tela.png') });
    }
    // Os ícones no meio do desenho: os tópicos de "todo site inclui" entrando na tela
    if (nome === 'desktop' && rota === '/sites/') {
      await pagina.evaluate(() => {
        const alvo = document.querySelector('#inclui-titulo');
        if (alvo) scrollTo(0, alvo.getBoundingClientRect().top + scrollY - innerHeight * 0.45);
      });
      await pagina.waitForTimeout(400);
      await pagina.screenshot({ path: arquivo.replace('.png', '-icones.png') });
    }
    // Overflow horizontal?
    const overflow = await pagina.evaluate(
      () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
    );
    if (overflow > 0) relatorio.push(`${nome} ${rota}: overflow horizontal de ${overflow}px`);
    // Textos que estouram a célula (largura maior que o pai)
    const estouros = await pagina.evaluate(() => {
      const achados = [];
      for (const el of document.querySelectorAll('h1, h2, h3, p, a, li, dd, dt, span')) {
        // Um pai com display: contents não tem caixa: a medida é a do avô
        let pai = el.parentElement;
        while (pai && getComputedStyle(pai).display === 'contents') pai = pai.parentElement;
        if (!pai) continue;
        const r = el.getBoundingClientRect();
        const rp = pai.getBoundingClientRect();
        if (r.width > 0 && r.right > rp.right + 2 && getComputedStyle(pai).overflow !== 'hidden') {
          achados.push(
            `${el.tagName.toLowerCase()}.${el.className.toString().split(' ')[0]} (${Math.round(r.right - rp.right)}px)`,
          );
        }
      }
      return achados.slice(0, 5);
    });
    if (estouros.length) relatorio.push(`${nome} ${rota}: estouros ${estouros.join(', ')}`);
  }
  if (erros.length) relatorio.push(...erros.map((e) => `console ${nome}: ${e}`));

  // Teclado: o primeiro Tab abre "Pular para o conteúdo"
  await pagina.goto(base + '/', { waitUntil: 'networkidle' });
  await pagina.keyboard.press('Tab');
  const foco = await pagina.evaluate(() => document.activeElement?.textContent?.trim());
  relatorio.push(`${nome}: primeiro Tab foca "${foco}"`);

  // Troca de página: tempo entre o clique e o fim da cortina
  if (nome === 'desktop') {
    const inicio = Date.now();
    await pagina.click('a.botao[href="/sites/"]');
    await pagina.waitForFunction(
      () => location.pathname === '/sites/' && !document.querySelector('.fita-cortina.ativa'),
      null,
      { timeout: 5000 },
    );
    relatorio.push(`desktop: troca de página em ${Date.now() - inicio} ms (inclui o carregamento)`);
  }

  // Menu do celular: abre, foca o primeiro link, fecha com Escape
  if (nome === 'mobile') {
    await pagina.goto(base + '/', { waitUntil: 'networkidle' });
    await pagina.click('[data-menu-botao]');
    await pagina.waitForTimeout(400);
    await pagina.screenshot({ path: `${saida}/mobile_menu-aberto.png` });
    const aberto = await pagina.evaluate(() =>
      document.documentElement.hasAttribute('data-menu-aberto'),
    );
    const focoMenu = await pagina.evaluate(() => document.activeElement?.textContent?.trim());
    await pagina.keyboard.press('Escape');
    const fechado = await pagina.evaluate(
      () => !document.documentElement.hasAttribute('data-menu-aberto'),
    );
    relatorio.push(`mobile: menu abre=${aberto} foco="${focoMenu}" fecha com Escape=${fechado}`);
  }
  await contexto.close();
}

// Sem JS
{
  const contexto = await browser.newContext({
    viewport: viewports.mobile,
    javaScriptEnabled: false,
  });
  const pagina = await contexto.newPage();
  await pagina.goto(base + '/', { waitUntil: 'networkidle' });
  await pagina.screenshot({ path: `${saida}/mobile_sem-js.png`, fullPage: false });
  const links = await pagina.evaluate(() => document.querySelectorAll('.menu a').length);
  const visiveis = await pagina.evaluate(
    () =>
      Array.from(document.querySelectorAll('.menu a')).filter(
        (a) => a.getBoundingClientRect().height > 0,
      ).length,
  );
  relatorio.push(`sem JS: ${visiveis} de ${links} links do menu visíveis`);
  await contexto.close();
}

// Movimento reduzido: a troca de página vira fade
{
  const contexto = await browser.newContext({
    viewport: viewports.desktop,
    reducedMotion: 'reduce',
  });
  const pagina = await contexto.newPage();
  await pagina.goto(base + '/', { waitUntil: 'networkidle' });
  const inicio = Date.now();
  await pagina.click('a.botao[href="/sites/"]');
  await pagina.waitForFunction(() => location.pathname === '/sites/', null, { timeout: 5000 });
  await pagina.waitForTimeout(400);
  const cortinaAtiva = await pagina.evaluate(() =>
    Boolean(document.querySelector('.fita-cortina.ativa')),
  );
  relatorio.push(
    `movimento reduzido: troca em ${Date.now() - inicio} ms, cortina usada=${cortinaAtiva}`,
  );
  await contexto.close();
}

await browser.close();
await new Promise((r) => servidor.close(r));
console.log(relatorio.join('\n'));
