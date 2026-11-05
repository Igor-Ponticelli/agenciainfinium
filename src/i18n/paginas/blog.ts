/** Textos do blog (conteudo.md, seção 9): lista, post e as chamadas no fim de cada texto. */

export const blog = {
  titulo: 'Blog',
  texto:
    'Textos curtos sobre sites, Google, segurança e automação, escritos para quem é dono de empresa.',
  autor: 'Igor Ponticelli',
  rotulos: {
    escritoPor: 'Por',
    leitura: (min: number) => `${min} min de leitura`,
    atualizado: 'Atualizado em',
    anterior: 'Post anterior',
    proximo: 'Próximo post',
    todos: 'Todos os posts',
    naHome: 'Do blog',
    verBlog: 'Ver o blog',
  },
  chamadas: {
    sites: {
      titulo: 'Quer um site que apareça e passe confiança?',
      texto: 'A Infinium faz sites rápidos, bons no celular e prontos para o Google.',
      acao: 'Ver o serviço de sites',
    },
    sistemas: {
      titulo: 'Cansou de copiar planilha?',
      texto: 'A Infinium cria um sistema só, do jeito que a sua empresa trabalha.',
      acao: 'Ver o serviço de sistemas',
    },
  },
} as const;
