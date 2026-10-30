/**
 * Texto do hub de serviços (conteudo.md, seção 1): curto, para quem não sabe por qual começar.
 */

export const servicos = {
  titulo: 'Serviços',
  texto:
    'Dois serviços que se completam. Se você não sabe por qual começar, a pergunta abaixo ajuda.',

  qual: {
    titulo: 'Qual é o seu problema hoje?',
    opcoes: [
      {
        problema:
          'Ninguém encontra a minha empresa na internet, ou o meu site não passa confiança.',
        resposta: 'Você precisa de um site.',
        acao: 'Ver o serviço de sites',
        destino: 'sites',
      },
      {
        problema:
          'A empresa funciona, mas espalhada em planilha, Trello, ERP e WhatsApp. Alguém vive copiando dado.',
        resposta: 'Você precisa de um sistema.',
        acao: 'Ver o serviço de sistemas',
        destino: 'sistemas',
      },
      {
        problema: 'Os dois.',
        resposta:
          'Então começa pelo que dói mais. O site e o sistema são feitos para trabalhar juntos.',
        acao: 'Falar no WhatsApp',
        destino: 'whatsapp',
      },
    ],
  },

  sites: {
    titulo: 'Sites',
    frase: 'Seja encontrado. Seja escolhido.',
    texto:
      'Sites institucionais, landing pages e páginas de venda. Rápidos, responsivos e prontos para receber clientes.',
    entrega: ['Site institucional', 'Landing page', 'Página de vendas'],
    acao: 'Ver o serviço de sites',
  },

  sistemas: {
    titulo: 'Sistemas',
    frase: 'Do Excel, do Trello e do ERP para um sistema só.',
    texto:
      'Um sistema único que substitui planilhas, quadros e ferramentas soltas, com os processos manuais rodando sozinhos.',
    entrega: ['Centraliza', 'Automatiza', 'Integra', 'Mostra os números'],
    acao: 'Ver o serviço de sistemas',
  },

  conexao: {
    titulo: 'Como os dois se conectam',
    texto:
      'O site traz o cliente, o sistema cuida dele depois. Um contato que chega pelo site pode cair direto no sistema, virar um pedido, gerar tarefas para a equipe e receber retorno automático. É o ciclo completo, sem trabalho manual no meio.',
  },

  chamada: {
    titulo: 'Ainda em dúvida?',
    texto:
      'Manda uma mensagem contando o que a empresa faz e o que atrapalha hoje. A gente te diz por onde começar.',
    acao: 'Falar no WhatsApp',
  },
} as const;
