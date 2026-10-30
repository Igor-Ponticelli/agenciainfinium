// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { rotas } from './src/i18n/rotas';

const site = 'https://infinium.app.br';

// Roboto self-hosted a partir do Fontsource (Apache 2.0), só o eixo de peso (wght), nos subsets
// latin e latin-ext. Um arquivo cobre os pesos 400, 500 e 700 da identidade.
const roboto = './node_modules/@fontsource-variable/roboto/files';
const unicodeLatin =
  'U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD';
const unicodeLatinExt =
  'U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF';

// Fora do sitemap: a 404 e a página de links da bio (noindex).
const foraDoSitemap: string[] = [rotas.naoEncontrada, rotas.acessos];

export default defineConfig({
  site,
  output: 'static',
  trailingSlash: 'always',

  // Sem aspas curvas nem conversão de "--" em travessão: regra do projeto (nada de travessão).
  markdown: { smartypants: false },

  fonts: [
    {
      provider: fontProviders.local(),
      name: 'Roboto',
      cssVariable: '--fonte-roboto',
      fallbacks: ['Helvetica Neue', 'Arial', 'sans-serif'],
      options: {
        variants: [
          {
            // Latin primeiro: é o arquivo que o layout pré-carrega (ver Base.astro)
            src: [`${roboto}/roboto-latin-wght-normal.woff2`],
            weight: '100 900',
            style: 'normal',
            unicodeRange: [unicodeLatin],
          },
          {
            src: [`${roboto}/roboto-latin-ext-wght-normal.woff2`],
            weight: '100 900',
            style: 'normal',
            unicodeRange: [unicodeLatinExt],
          },
        ],
      },
    },
  ],

  integrations: [
    sitemap({
      filter: (pagina) => !foraDoSitemap.includes(new URL(pagina).pathname),
    }),
  ],
});
