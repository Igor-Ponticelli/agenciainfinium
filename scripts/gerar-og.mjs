// Imagens Open Graph das páginas de projeto (TODO 6): 1200x630, no degradê da marca, com o logo
// branco, o nome do projeto e a prévia em HTML/CSS do site (a nossa, não uma captura do original).
// Precisa do dist/ pronto. Uso: node scripts/gerar-og.mjs   (escreve em public/og/<slug>.png)
import { chromium } from 'playwright';
import { mkdirSync, readFileSync } from 'node:fs';
import { servidor } from './servir.mjs';

const porta = 4398;
const base = `http://localhost:${porta}`;
const saida = new URL('../public/og/', import.meta.url).pathname;
mkdirSync(saida, { recursive: true });

const projetos = ['brisa-cafe', 'linetex', 'lumaj', 'retrodash'];
const logo = readFileSync(
  new URL('../src/assets/marca/logo-horizontal-white.svg', import.meta.url),
  'utf8',
);

await new Promise((r) => servidor.listen(porta, r));
const browser = await chromium.launch();

for (const slug of projetos) {
  // 1. A prévia ativa, como aparece na página do projeto, numa moldura de 16:10
  const p = await browser.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 });
  await p.goto(`${base}/projetos/${slug}/`, { waitUntil: 'networkidle' });
  await p.waitForSelector(`.previa[data-previa="${slug}"][data-ativa]`);
  await p.evaluate(() => document.fonts.ready);
  await p.waitForTimeout(300);
  const titulo = (await p.textContent('h1'))?.trim() ?? slug;
  const previa = await p.locator('.obra-moldura').first().screenshot({ type: 'png' });
  await p.close();

  // 2. A composição: degradê, logo, título e a prévia como uma janela
  const composicao = await browser.newPage({
    viewport: { width: 1200, height: 630 },
    deviceScaleFactor: 1,
  });
  await composicao.setContent(`<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><style>
    html, body { margin: 0; }
    body { width: 1200px; height: 630px; overflow: hidden; background: linear-gradient(135deg, #39135F 0%, #200A34 100%); color: #fff; font-family: Roboto, 'Helvetica Neue', Arial, sans-serif; position: relative; }
    .logo { position: absolute; left: 72px; top: 64px; height: 44px; }
    .logo svg { height: 44px; width: auto; }
    .texto { position: absolute; left: 72px; top: 170px; width: 460px; }
    h1 { margin: 0; font-size: 60px; line-height: 1.02; letter-spacing: -0.025em; font-weight: 700; }
    p { margin: 24px 0 0; font-size: 24px; line-height: 1.3; color: #E9D5FE; }
    .janela { position: absolute; right: -40px; top: 110px; width: 640px; height: 400px; border-radius: 12px; overflow: hidden; background: #fff; box-shadow: 0 30px 60px -30px rgba(0,0,0,.6); }
    .janela img { display: block; width: 100%; height: 100%; object-fit: cover; object-position: top left; }
  </style></head><body>
    <div class="logo">${logo}</div>
    <div class="texto"><h1>${titulo}</h1><p>Projeto da Agência Infinium</p></div>
    <div class="janela"><img src="data:image/png;base64,${previa.toString('base64')}" alt=""></div>
  </body></html>`);
  await composicao.waitForTimeout(200);
  await composicao.screenshot({ path: `${saida}${slug}.png`, type: 'png' });
  await composicao.close();
  console.log(`og/${slug}.png`);
}

await browser.close();
await new Promise((r) => servidor.close(r));
