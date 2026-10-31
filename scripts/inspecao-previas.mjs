// Inspeção das prévias (TODO 5): captura de cada prévia ativa na página do projeto, captura do
// site original para a comparação lado a lado, as interações que existem e erros de console.
// Uso: node scripts/inspecao-previas.mjs <pasta-saida> [--sem-originais]
import { chromium } from 'playwright';
import { mkdirSync } from 'node:fs';
import { servidor } from './servir.mjs';

// Serve o dist/ aqui mesmo, com os cabeçalhos do .htaccess (scripts/servir.mjs)
const porta = 4395;
const base = `http://localhost:${porta}`;
await new Promise((r) => servidor.listen(porta, r));
const saida = process.argv[2] ?? './capturas';
const semOriginais = process.argv.includes('--sem-originais');
mkdirSync(saida, { recursive: true });

const projetos = [
  { slug: 'brisa-cafe', url: 'https://brisacafeteria.com.br' },
  { slug: 'linetex', url: 'https://linetexembalagens.com.br' },
  { slug: 'lumaj', url: 'https://lumajdistribuidora.com.br' },
  { slug: 'retrodash', url: 'https://retrodash.com.br/pt-BR' },
];

const browser = await chromium.launch();
const relatorio = [];

for (const vp of [
  { nome: 'desktop', width: 1440, height: 900 },
  { nome: 'mobile', width: 390, height: 844 },
]) {
  const contexto = await browser.newContext({
    viewport: { width: vp.width, height: vp.height },
    locale: 'pt-BR',
    timezoneId: 'America/Sao_Paulo',
  });
  const pagina = await contexto.newPage();
  const erros = [];
  pagina.on('console', (m) => {
    if (m.type() === 'error') erros.push(`${pagina.url()}: ${m.text()}`);
  });
  pagina.on('pageerror', (e) => erros.push(`${pagina.url()}: ${e.message}`));

  for (const { slug } of projetos) {
    await pagina.goto(`${base}/projetos/${slug}/`, { waitUntil: 'networkidle' });
    await pagina.waitForSelector(`.previa[data-previa="${slug}"][data-ativa]`);
    await pagina.evaluate(() => document.fonts.ready);
    await pagina.waitForTimeout(300);
    const moldura = pagina.locator('.obra-moldura').first();
    await moldura.screenshot({ path: `${saida}/${vp.nome}-previa-${slug}.png` });

    // Fonte do projeto carregada?
    const fontes = await pagina.evaluate(() =>
      Array.from(document.fonts)
        .filter((f) => f.status === 'loaded')
        .map((f) => f.family)
        .filter((v, i, a) => a.indexOf(v) === i),
    );
    relatorio.push(`${vp.nome} ${slug}: fontes carregadas ${fontes.join(', ')}`);

    // Controles da prévia acessíveis por teclado?
    const controles = await pagina.evaluate(() => {
      const els = Array.from(document.querySelectorAll('.previa button, .previa a, .previa input'));
      return { total: els.length, focaveis: els.filter((el) => el.tabIndex >= 0).length };
    });
    relatorio.push(
      `${vp.nome} ${slug}: ${controles.focaveis}/${controles.total} controles focáveis`,
    );
  }

  // Interações que existem (só no desktop, uma vez)
  if (vp.nome === 'desktop') {
    await pagina.goto(`${base}/projetos/brisa-cafe/`, { waitUntil: 'networkidle' });
    await pagina.waitForSelector('.previa[data-ativa]');
    const antes = await pagina.getAttribute('.br', 'data-tema');
    await pagina.click('[data-br-tema]');
    const depois = await pagina.getAttribute('.br', 'data-tema');
    const status = await pagina.textContent('[data-br-status]');
    relatorio.push(`brisa: tema ${antes} -> ${depois}; status "${status?.trim()}"`);

    // Linetex: como no site, "Cotar" fica na lista do departamento; o índice leva até ela
    await pagina.goto(`${base}/projetos/linetex/`, { waitUntil: 'networkidle' });
    await pagina.waitForSelector('.previa[data-ativa]');
    const contadorAntes = await pagina.locator('.previa [data-lx-contador]').first().textContent();
    await pagina.locator('.previa .lx-linha[data-lx-dep]').first().click();
    await pagina.locator('.previa [data-lx-cotar]:visible').first().click();
    const contadorDepois = await pagina.locator('.previa [data-lx-contador]').first().textContent();
    relatorio.push(`linetex: contador ${contadorAntes?.trim()} -> ${contadorDepois?.trim()}`);

    // Lumaj: "Adicionar" fica na lista do departamento e vira o seletor de quantidade
    await pagina.goto(`${base}/projetos/lumaj/`, { waitUntil: 'networkidle' });
    await pagina.waitForSelector('.previa[data-ativa]');
    const pedidoAntes = await pagina.locator('.previa [data-lm-contador]').first().textContent();
    await pagina.locator('.previa .lm-linha[data-lm-dep]').first().click();
    await pagina.locator('.previa [data-lm-add]:visible').first().click();
    const pedidoDepois = await pagina.locator('.previa [data-lm-contador]').first().textContent();
    relatorio.push(`lumaj: pedido ${pedidoAntes?.trim()} -> ${pedidoDepois?.trim()}`);

    await pagina.goto(`${base}/projetos/retrodash/`, { waitUntil: 'networkidle' });
    await pagina.waitForSelector('.previa[data-ativa]');
    const voto = pagina.locator('.previa button[aria-label*="Votar"]').first();
    const rotuloAntes = await voto.getAttribute('aria-label');
    await voto.click();
    const rotuloDepois = await voto.getAttribute('aria-label');
    relatorio.push(`retrodash: ${rotuloAntes} -> ${rotuloDepois}`);

    // Home: as prévias ativam quando a seção de projetos chega perto da tela (600 px de margem)
    await pagina.goto(`${base}/`, { waitUntil: 'networkidle' });
    await pagina.evaluate(() => document.getElementById('projetos')?.scrollIntoView());
    await pagina.waitForTimeout(800);
    const ativas = await pagina.evaluate(
      () => document.querySelectorAll('.previa[data-ativa]').length,
    );
    relatorio.push(`home: ${ativas} prévias ativas com a seção de projetos na tela`);
  }

  if (erros.length) relatorio.push(...erros.map((e) => `console ${vp.nome}: ${e}`));
  await contexto.close();
}

// Originais, para a comparação lado a lado
if (!semOriginais) {
  const contexto = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    locale: 'pt-BR',
    timezoneId: 'America/Sao_Paulo',
    colorScheme: 'light',
  });
  const pagina = await contexto.newPage();
  for (const { slug, url } of projetos) {
    try {
      await pagina.goto(url, { waitUntil: 'networkidle', timeout: 45000 });
      await pagina.waitForTimeout(1000);
      await pagina.screenshot({ path: `${saida}/original-${slug}.png` });
    } catch (e) {
      relatorio.push(`original ${slug}: ${e.message.split('\n')[0]}`);
    }
  }
  await contexto.close();
}

await browser.close();
await new Promise((r) => servidor.close(r));
console.log(relatorio.join('\n'));
