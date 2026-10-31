import type { ImageMetadata } from 'astro';
import aberto from '../assets/fotos/aberto.jpg';
import cadeado from '../assets/fotos/cadeado.jpg';
import celular from '../assets/fotos/celular.jpg';
import entre from '../assets/fotos/entre.jpg';
import estoque from '../assets/fotos/estoque.jpg';
import lupa from '../assets/fotos/lupa.jpg';
import lupaGlobo from '../assets/fotos/lupa-globo.jpg';
import notebook from '../assets/fotos/notebook.jpg';
import pastas from '../assets/fotos/pastas.jpg';
import planilha from '../assets/fotos/planilha.jpg';
import postIts from '../assets/fotos/post-its.jpg';
import redes from '../assets/fotos/redes.jpg';

/**
 * Fotos do site (pedido do Igor, 31/10/2026): do Unsplash, licença Unsplash License (uso livre,
 * sem atribuição obrigatória; os créditos ficam em .claude/docs/fotos.md e no README).
 * Baixadas em 31/10/2026 a 1800 px; o Astro gera AVIF e WebP nos tamanhos usados.
 */
export type Foto = {
  imagem: ImageMetadata;
  alt: string;
  autor: string;
  url: string;
};

export const nomesFotos = [
  'celular',
  'planilha',
  'entre',
  'aberto',
  'estoque',
  'postIts',
  'notebook',
  'lupaGlobo',
  'lupa',
  'cadeado',
  'pastas',
  'redes',
] as const;

export type NomeFoto = (typeof nomesFotos)[number];

export const fotos: Record<NomeFoto, Foto> = {
  celular: {
    imagem: celular,
    alt: 'Mãos de uma mulher segurando um celular, digitando uma mensagem.',
    autor: 'Ruan Richard Rodrigues',
    url: 'https://unsplash.com/photos/pK3ozoRgQGc',
  },
  planilha: {
    imagem: planilha,
    alt: 'Mãos digitando num notebook que mostra uma planilha cheia de linhas.',
    autor: 'Gorilla ROI',
    url: 'https://unsplash.com/photos/9fZuqBYlV1w',
  },
  entre: {
    imagem: entre,
    alt: 'Placa pendurada na porta de vidro de uma loja: "Come in, we are open".',
    autor: 'Tim Mossholder',
    url: 'https://unsplash.com/photos/75zhsltk6VE',
  },
  aberto: {
    imagem: aberto,
    alt: 'Placa azul "Open" na vitrine de uma loja.',
    autor: 'Mike Petrucci',
    url: 'https://unsplash.com/photos/c9FQyqIECds',
  },
  estoque: {
    imagem: estoque,
    alt: 'Prateleira de loja cheia de caixas e produtos.',
    autor: 'Huy Lộc',
    url: 'https://unsplash.com/photos/QbhtgEoVJcU',
  },
  postIts: {
    imagem: postIts,
    alt: 'Quadro branco com notas adesivas laranja e azuis organizadas em colunas.',
    autor: 'Paymo',
    url: 'https://unsplash.com/photos/AmhxmYXwbZM',
  },
  notebook: {
    imagem: notebook,
    alt: 'Homem concentrado num notebook, numa mesa de café.',
    autor: 'Case Classico',
    url: 'https://unsplash.com/photos/XLwnQaB0sEg',
  },
  lupaGlobo: {
    imagem: lupaGlobo,
    alt: 'Mão segurando uma lupa sobre um globo terrestre.',
    autor: 'Clay Banks',
    url: 'https://unsplash.com/photos/b5S4FrJb7yQ',
  },
  lupa: {
    imagem: lupa,
    alt: 'Mão segurando uma lupa sobre uma bancada de trabalho.',
    autor: 'ThisisEngineering',
    url: 'https://unsplash.com/photos/ZJUG912sIW4',
  },
  cadeado: {
    imagem: cadeado,
    alt: 'Cadeado fechado num portão de metal.',
    autor: 'smallbox',
    url: 'https://unsplash.com/photos/pCnsAvfbetw',
  },
  pastas: {
    imagem: pastas,
    alt: 'Duas pastas de papel antigas, com etiquetas de arquivo.',
    autor: 'Cht Gsml',
    url: 'https://unsplash.com/photos/qf9L-0nvLkw',
  },
  redes: {
    imagem: redes,
    alt: 'Mão segurando um celular com os ícones das redes sociais na tela.',
    autor: 'Julian',
    url: 'https://unsplash.com/photos/0I21xHfgw0E',
  },
};
