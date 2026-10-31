import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'blog'>;

/**
 * Data de publicação do site. Os posts de lançamento ficam escalonados a partir dela (o último
 * no dia da publicação, os anteriores 1, 2, 3... dias antes), como o Igor pediu em 30/10/2026.
 * [PENDENTE: o Igor troca pela data real quando o site for ao ar.]
 */
export const dataPublicacao = new Date('2026-10-30T12:00:00-03:00');

const DIA = 24 * 60 * 60 * 1000;

export function dataDoPost(post: Post): Date {
  return post.data.data ?? new Date(dataPublicacao.getTime() - post.data.diasAntes * DIA);
}

/** Posts publicados (sem rascunhos), do mais novo para o mais antigo. */
export async function postsPublicados(): Promise<Post[]> {
  const todos = await getCollection('blog', ({ data }) => !data.rascunho);
  for (const post of todos) {
    if (dataDoPost(post).getTime() > Date.now() + DIA) {
      throw new Error(`O post ${post.id} tem data futura: ${dataDoPost(post).toISOString()}`);
    }
  }
  return todos.sort((a, b) => dataDoPost(b).getTime() - dataDoPost(a).getTime());
}

/** Minutos de leitura, a 200 palavras por minuto, nunca menos de 1. */
export function tempoDeLeitura(post: Post): number {
  const palavras = (post.body ?? '').split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(palavras / 200));
}

const formatoLongo = new Intl.DateTimeFormat('pt-BR', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  timeZone: 'America/Sao_Paulo',
});

const formatoCurto = new Intl.DateTimeFormat('pt-BR', {
  day: '2-digit',
  month: '2-digit',
  year: 'numeric',
  timeZone: 'America/Sao_Paulo',
});

export const dataLonga = (d: Date) => formatoLongo.format(d);
export const dataCurta = (d: Date) => formatoCurto.format(d);
/** Para `datetime` e JSON-LD: só a data, no fuso de Brasília. */
export const dataIso = (d: Date) =>
  new Intl.DateTimeFormat('en-CA', { timeZone: 'America/Sao_Paulo' }).format(d);
