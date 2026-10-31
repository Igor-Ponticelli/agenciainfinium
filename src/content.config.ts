import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { statusProjeto, tiposProjeto } from './i18n/textos';

/** Um arquivo por projeto: `projetos/<slug>.md`. O id da entrada é o slug. */
const projetos = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/projetos' }),
  schema: z.object({
    titulo: z.string(),
    slug: z.string().regex(/^[a-z0-9-]+$/),
    tipo: z.enum(tiposProjeto),
    /** Ano de publicação ou de lançamento. */
    ano: z.number().int(),
    status: z.enum(statusProjeto),
    /** Sem `url`, a página do projeto não mostra o link para o site. */
    url: z.url().optional(),
    resumo: z.string(),
    ordem: z.number().int().positive(),
    /** Última vez que a prévia e os fatos foram conferidos com o site original. */
    revisadoEm: z.coerce.date(),
    /** Data em que o `status` foi confirmado. */
    atualizadoEm: z.coerce.date(),
  }),
});

/**
 * Posts do blog: `blog/<slug>.md`. A data efetiva sai de `src/data/blog.ts`: `data` fixa, ou a
 * data de publicação do site menos `diasAntes` (decisão do Igor: o último post com a data da
 * publicação do site, os anteriores escalonados). Rascunhos ficam fora do build.
 */
const blog = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/blog' }),
  schema: z.object({
    titulo: z.string(),
    descricao: z.string().max(160),
    data: z.coerce.date().optional(),
    diasAntes: z.number().int().min(0).default(0),
    atualizadoEm: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    rascunho: z.boolean().default(false),
    /** Para onde o post leva no fim: um serviço ou o Raio-X. */
    chamada: z.enum(['sites', 'sistemas', 'raioX']),
  }),
});

export const collections = { projetos, blog };
