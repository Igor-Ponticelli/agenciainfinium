/**
 * Texto da página de sites (conteudo.md, seção 3). Fatos: SERVICOS.md, seção 1.
 * Os três sites de prova vêm da collection.
 */
import type { Passo, Pergunta } from './inicio';

export const sites = {
  titulo: 'Sites',
  frase: 'Seja encontrado. Seja escolhido.',
  texto:
    'Sites profissionais para empresas e profissionais que precisam ser encontrados na internet e transformar visita em contato. Rápido, bom no celular e com a cara do seu negócio.',
  acao: 'Quero um site',

  problema: {
    titulo: 'Quando o site não existe, ou não ajuda',
    texto:
      'Quem procura o seu serviço no Google acha o concorrente primeiro. Quem chega pelo Instagram não encontra onde confirmar que a empresa é séria. E um site lento, desatualizado ou que não abre direito no celular afasta em vez de aproximar.',
  },

  tipos: {
    titulo: 'O que a gente faz',
    itens: [
      {
        titulo: 'Site institucional',
        texto: 'Quem é a empresa, serviços, portfólio, depoimentos e contato.',
      },
      {
        titulo: 'Landing page',
        texto: 'Uma página focada numa oferta ou campanha, feita para converter.',
      },
      {
        titulo: 'Página de vendas',
        texto: 'Apresentação de um produto ou serviço com chamada para compra ou orçamento.',
      },
    ] satisfies Passo[],
  },

  inclui: {
    titulo: 'Todo site inclui',
    itens: [
      'Layout responsivo, que funciona no celular, no tablet e no computador',
      'Carregamento rápido',
      'Estrutura básica de SEO para aparecer no Google',
      'Botões de contato: WhatsApp, formulário e mapa',
      'Integração com Google Analytics e Meta Pixel',
      'Publicação no domínio da sua empresa, com certificado de segurança (HTTPS)',
    ],
  },

  comoFunciona: {
    titulo: 'Como funciona',
    passos: [
      {
        titulo: 'Conversa inicial',
        texto: 'Você conta o objetivo do site, quem é o seu público e mostra referências.',
      },
      { titulo: 'Proposta', texto: 'Escopo, prazo e investimento por escrito.' },
      {
        titulo: 'Layout',
        texto: 'Você aprova o design antes de qualquer linha de código.',
      },
      { titulo: 'Desenvolvimento', texto: 'O site é construído e testado.' },
      {
        titulo: 'Publicação',
        texto: 'O site vai ao ar no seu domínio, com orientação para você usar.',
      },
      {
        titulo: 'Suporte',
        texto: 'Ajustes e manutenção conforme o plano contratado.',
      },
    ] satisfies Passo[],
  },

  prova: {
    titulo: 'Sites publicados',
    texto:
      'Três empresas, três sites diferentes. Cada um tem a cara do negócio, não de um modelo pronto. Abra e veja funcionando.',
  },

  faq: {
    titulo: 'Perguntas frequentes',
    itens: [
      {
        pergunta: 'O site fica no nome da minha empresa?',
        resposta: 'Sim. Ele é publicado no domínio da sua empresa, com certificado de segurança.',
      },
      {
        pergunta: 'Preciso ter texto e fotos prontos?',
        resposta:
          'Não precisa. Na conversa inicial a gente levanta o objetivo, o público e as referências, e define junto o que falta.',
      },
      {
        pergunta: 'Vou conseguir ver o site antes de ele ficar pronto?',
        resposta:
          'Sim. O layout é aprovado por você antes do desenvolvimento, e durante a construção você acompanha o andamento.',
      },
      {
        pergunta: 'E depois que o site está no ar?',
        resposta:
          'Você recebe orientação para usar o site, e ajustes e manutenção seguem conforme o plano contratado.',
      },
    ] satisfies Pergunta[],
  },

  chamada: {
    titulo: 'Quer um site com a cara da sua empresa?',
    texto:
      'Manda uma mensagem contando o que a empresa faz. A conversa inicial não tem compromisso.',
    acao: 'Quero um site',
    formulario: 'Ou pedir um orçamento pelo formulário',
  },
} as const;
