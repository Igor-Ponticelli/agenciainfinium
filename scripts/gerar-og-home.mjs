// Imagem Open Graph padrão do site (public/og.png), 1200x630: um cartão com a aurora da marca
// (as duas luzes dos tópicos, paradas num quadro), o logo, a frase de abertura da home e o
// domínio. Não precisa do dist/. Uso: node scripts/gerar-og-home.mjs [saida.png]
import { chromium } from 'playwright';
import { readFileSync } from 'node:fs';
import { inicio } from '../src/i18n/paginas/inicio.ts';
import { dominio } from '../src/data/empresa.ts';

const saida = process.argv[2] ?? new URL('../public/og.png', import.meta.url).pathname;
const marca = new URL('../src/assets/marca/', import.meta.url);
const logo = readFileSync(new URL('logo-horizontal-white.svg', marca), 'utf8');
const simbolo = readFileSync(new URL('simbolo-white.svg', marca), 'utf8');
const roboto = readFileSync(
  new URL(
    '../node_modules/@fontsource-variable/roboto/files/roboto-latin-wght-normal.woff2',
    import.meta.url,
  ),
).toString('base64');

const { titulo, texto } = inicio.abertura;

const browser = await chromium.launch(
  process.env.PW_CHROMIUM ? { executablePath: process.env.PW_CHROMIUM } : {},
);
const page = await browser.newPage({
  viewport: { width: 1200, height: 630 },
  deviceScaleFactor: 1,
});
await page.setContent(`<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><style>
  @font-face { font-family: Roboto; font-weight: 100 900; src: url(data:font/woff2;base64,${roboto}) format('woff2'); }
  html, body { margin: 0; }
  body {
    position: relative; width: 1200px; height: 630px; overflow: hidden;
    background: #200A34; color: #fff;
    font-family: Roboto, 'Helvetica Neue', Arial, sans-serif;
  }
  /* A aurora dos cartões (site.css, .topico::before), num quadro do meio da animação */
  .aurora {
    position: absolute; inset: -40%; z-index: 0;
    background:
      radial-gradient(closest-side, rgb(117 70 174 / 0.7), transparent 70%) 20% 30% / 70% 70% no-repeat,
      radial-gradient(closest-side, rgb(233 213 254 / 0.35), transparent 70%) 80% 80% / 60% 60% no-repeat;
    transform: translate(2%, 2%) rotate(12deg);
  }
  .borda { position: absolute; inset: 0; z-index: 1; border: 1px solid rgb(233 213 254 / 0.18); border-radius: 0; pointer-events: none; }
  .logo { position: absolute; left: 80px; top: 72px; z-index: 2; height: 44px; }
  .logo svg { height: 44px; width: auto; display: block; }
  .texto { position: absolute; left: 80px; top: 196px; z-index: 2; width: 720px; }
  h1 { margin: 0; font-size: 68px; line-height: 1.02; letter-spacing: -0.025em; font-weight: 700; color: #fff; }
  p { margin: 28px 0 0; width: 600px; font-size: 26px; line-height: 1.3; font-weight: 400; color: rgb(233 213 254 / 0.72); }
  .dominio {
    position: absolute; left: 80px; bottom: 64px; z-index: 2;
    font-size: 18px; font-weight: 500; letter-spacing: 0.08em; text-transform: uppercase; color: rgb(233 213 254 / 0.72);
  }
  /* O símbolo, grande, como o número no canto do cartão: presente, mas atrás do texto */
  .simbolo { position: absolute; right: -90px; top: 128px; z-index: 1; width: 540px; opacity: 0.16; }
  .simbolo svg { width: 100%; height: auto; display: block; }
</style></head><body>
  <div class="aurora"></div>
  <div class="borda"></div>
  <div class="simbolo">${simbolo}</div>
  <div class="logo">${logo}</div>
  <div class="texto"><h1>${titulo}</h1><p>${texto}</p></div>
  <div class="dominio">${dominio}</div>
</body></html>`);
await page.evaluate(() => document.fonts.ready);
await page.waitForTimeout(200);
await page.screenshot({ path: saida, type: 'png' });
await browser.close();
console.log(saida);
