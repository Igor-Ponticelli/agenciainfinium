import type { AstroComponentFactory } from 'astro/runtime/server/index.js';
import BrisaCafe from './BrisaCafe.astro';
import Linetex from './Linetex.astro';
import Lumaj from './Lumaj.astro';
import Retrodash from './Retrodash.astro';

/** Uma prévia por projeto, pelo slug. Sem prévia, a moldura fica só com o fundo do projeto. */
export const previas: Record<string, AstroComponentFactory | undefined> = {
  'brisa-cafe': BrisaCafe,
  linetex: Linetex,
  lumaj: Lumaj,
  retrodash: Retrodash,
};
