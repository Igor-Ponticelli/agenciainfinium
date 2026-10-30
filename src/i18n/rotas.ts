/**
 * Tabela única de rotas do site. Alimenta o menu, o sitemap e os links internos, para nunca
 * divergirem. Um idioma só (PT-BR, na raiz); a organização segue a do portfólio para, se um dia
 * entrar EN, o método bilíngue já ter onde encaixar.
 * Não importa nada de `astro:*`, porque também é usada pelo astro.config.
 */

export const idioma = 'pt-br' as const;

/** Código BCP 47 usado em `lang`. */
export const codigoIdioma = 'pt-BR';

/** Código usado em `og:locale`. */
export const localeOg = 'pt_BR';

/** Mapa do site decidido com o Igor em 30/10/2026 (conteudo.md, seção 1). */
export const rotas = {
  inicio: '/',
  servicos: '/servicos/',
  sites: '/sites/',
  sistemas: '/sistemas/',
  projetos: '/projetos/',
  blog: '/blog/',
  contato: '/contato/',
  /** Landing page do produto de entrada, sem menu (TODO 8). */
  raioX: '/raio-x-do-site/',
  privacidade: '/privacidade/',
  acessos: '/acessos/',
  naoEncontrada: '/404/',
} as const;

export type NomeRota = keyof typeof rotas;

export function rotaProjeto(slug: string): string {
  return `${rotas.projetos}${slug}/`;
}

export function rotaPost(slug: string): string {
  return `${rotas.blog}${slug}/`;
}

/** Garante a barra no início e no fim (o site usa `trailingSlash: 'always'`). */
export function normalizar(caminho: string): string {
  let c = caminho.split(/[?#]/)[0] || '/';
  if (!c.startsWith('/')) c = `/${c}`;
  if (!c.endsWith('/')) c = `${c}/`;
  return c;
}
