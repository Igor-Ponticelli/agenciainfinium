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

export const collections = { projetos };
