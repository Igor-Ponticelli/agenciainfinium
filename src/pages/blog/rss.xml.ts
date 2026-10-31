import type { APIRoute } from 'astro';
import { dataDoPost, postsPublicados } from '../../data/blog';
import { nomeCompleto } from '../../data/empresa';
import { rotaPost, rotas } from '../../i18n/rotas';
import { blog } from '../../i18n/paginas/blog';

/** Feed RSS do blog, gerado no build, sem dependência. */
const escapar = (texto: string) =>
  texto.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export const GET: APIRoute = async ({ site }) => {
  const base = site!;
  const posts = await postsPublicados();
  const itens = posts
    .map((post) => {
      const url = new URL(rotaPost(post.id), base).href;
      return `    <item>
      <title>${escapar(post.data.titulo)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${escapar(post.data.descricao)}</description>
      <pubDate>${dataDoPost(post).toUTCString()}</pubDate>
      <author>${escapar(blog.autor)}</author>
    </item>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapar(`Blog da ${nomeCompleto}`)}</title>
    <link>${new URL(rotas.blog, base).href}</link>
    <description>${escapar(blog.texto)}</description>
    <language>pt-BR</language>
    <atom:link href="${new URL('/blog/rss.xml', base).href}" rel="self" type="application/rss+xml" />
${itens}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' },
  });
};
