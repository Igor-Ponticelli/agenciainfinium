import type { ImageMetadata } from 'astro';

/**
 * Fotos de produto que a Linetex e a Lumaj usam (são os mesmos arquivos nos dois sites), com o
 * aval do Igor. Origem: a página de produtos de cada site, na maior versão publicada.
 */
const arquivos = import.meta.glob<{ default: ImageMetadata }>(
  '../../assets/previas/fotos/catalogo/*.webp',
  {
    eager: true,
  },
);

export const fotoCatalogo = (nome: string): ImageMetadata => {
  const foto = arquivos[`../../assets/previas/fotos/catalogo/${nome}.webp`];
  if (!foto) throw new Error(`Foto de catálogo não encontrada: ${nome}`);
  return foto.default;
};
