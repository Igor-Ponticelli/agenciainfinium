import { getCollection, type CollectionEntry } from 'astro:content';

export type Projeto = CollectionEntry<'projetos'>;

/** Todos os projetos, em ordem. Falha o build se o slug não bater com o nome do arquivo. */
export async function todosProjetos(): Promise<Projeto[]> {
  const todos = await getCollection('projetos');

  for (const projeto of todos) {
    if (projeto.data.slug !== projeto.id) {
      throw new Error(`O slug "${projeto.data.slug}" não bate com o arquivo ${projeto.id}.md`);
    }
  }

  return todos.sort((a, b) => a.data.ordem - b.data.ordem);
}
