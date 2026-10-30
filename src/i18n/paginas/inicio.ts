/**
 * Texto da home, seção por seção (conteudo.md, seção 2). Persuasiva como uma landing page.
 * Fatos: EMPRESA.md e SERVICOS.md. Os projetos vêm da collection; aqui ficam só os textos em
 * volta deles. Regra do projeto: nada de travessão.
 */

export type Passo = { titulo: string; texto: string };
export type Pergunta = { pergunta: string; resposta: string };

export const inicio = {
  abertura: {
    titulo: 'Sites e sistemas que trabalham por você',
    texto:
      'A Infinium tira o seu negócio do papel e da planilha e coloca no online e no automático. Um site que traz o cliente e um sistema que cuida dele depois.',
    acaoPrincipal: 'Falar no WhatsApp',
    acaoSecundaria: 'Ver como funciona',
    ancoraComoFunciona: 'como-funciona',
  },

  problema: {
    titulo: 'Reconhece essa cena?',
    paragrafos: [
      'Os pedidos chegam pelo WhatsApp. O controle fica no Excel, as tarefas no Trello, o financeiro no ERP. Alguém passa o dia copiando informação de um lugar para outro, erros aparecem, clientes ficam sem retorno e ninguém tem uma visão clara do negócio.',
      'Do lado de fora, a empresa também não aparece. Sem site, ou com um site lento e desatualizado, ela perde para o concorrente que foi encontrado primeiro.',
    ],
  },

  servicos: {
    titulo: 'Dois serviços, um parceiro só',
    sites: {
      titulo: 'Sites',
      frase: 'Seja encontrado. Seja escolhido.',
      texto:
        'Site institucional, landing page ou página de vendas. Rápido, bom no celular e pronto para transformar visita em contato.',
      paraQuem:
        'Para empresas e profissionais que precisam ser encontrados e passar confiança na internet.',
      verServico: 'Ver o serviço de sites',
      whatsapp: 'Quero um site',
    },
    sistemas: {
      titulo: 'Sistemas',
      frase: 'Do Excel, do Trello e do ERP para um sistema só.',
      texto:
        'Um sistema único, feito do jeito que a sua empresa trabalha. O que era manual passa a acontecer sozinho: avisos, cobranças, relatórios, status e follow-up.',
      paraQuem:
        'Para empresas que perdem tempo copiando dados entre Excel, Trello, ERP e WhatsApp.',
      verServico: 'Ver o serviço de sistemas',
      whatsapp: 'Quero automatizar minha empresa',
    },
  },

  conexao: {
    titulo: 'O site traz o cliente. O sistema cuida dele depois.',
    texto:
      'Um contato que chega pelo site pode cair direto no sistema, virar um pedido, gerar as tarefas da equipe e receber retorno automático. É o ciclo completo, sem trabalho manual no meio. E você fala com um parceiro só, do primeiro clique à operação.',
  },

  projetos: {
    titulo: 'Trabalho que você pode abrir agora',
    texto:
      'Três sites publicados e um sistema em produção. Cada prévia é o site de verdade, reproduzido aqui para você clicar.',
    acao: 'Ver todos os projetos',
  },

  comoFunciona: {
    titulo: 'Como funciona',
    texto: 'As etapas mudam um pouco de um serviço para o outro, mas o caminho é o mesmo.',
    passos: [
      {
        titulo: 'Conversa',
        texto: 'Você conta o que a empresa faz, o que atrapalha hoje e o que quer resolver.',
      },
      {
        titulo: 'Proposta',
        texto: 'Escopo, prazo e investimento por escrito. Sem surpresa no meio do caminho.',
      },
      {
        titulo: 'Construção em etapas',
        texto: 'Você acompanha e dá retorno enquanto o trabalho acontece, não só no fim.',
      },
      {
        titulo: 'Publicação',
        texto: 'O site vai ao ar, ou o sistema entra em uso, com orientação para a sua equipe.',
      },
      {
        titulo: 'Acompanhamento',
        texto:
          'Ajustes, manutenção e melhorias conforme a empresa cresce. O trabalho não termina na entrega.',
      },
    ] satisfies Passo[],
  },

  resultados: {
    titulo: 'O que a gente busca para a sua empresa',
    itens: [
      { titulo: 'Tempo', texto: 'Horas de trabalho manual devolvidas à equipe toda semana.' },
      { titulo: 'Menos erros', texto: 'A informação é digitada uma vez e aparece onde precisa.' },
      {
        titulo: 'Clientes que ficam',
        texto: 'Retorno no prazo, sem depender da memória de alguém.',
      },
      { titulo: 'Visão', texto: 'Os números do negócio num painel, sem montar planilha.' },
      {
        titulo: 'Crescimento',
        texto: 'Dá para atender mais sem contratar na mesma proporção.',
      },
    ] satisfies Passo[],
  },

  faq: {
    titulo: 'Perguntas que sempre chegam',
    itens: [
      {
        pergunta: 'Já tenho Instagram. Preciso de um site?',
        resposta:
          'O Instagram é ótimo para ser visto, mas quem procura no Google não encontra o seu perfil. O site é onde a pessoa confirma que a empresa existe, entende o que você faz e entra em contato. Os dois trabalham juntos.',
      },
      {
        pergunta: 'Minha empresa é pequena. Automação faz sentido?',
        resposta:
          'Faz, principalmente quando alguém passa horas por semana copiando dado de um lugar para outro. O sistema é feito sob medida para o seu processo, no tamanho que a empresa tem hoje, e cresce junto.',
      },
      {
        pergunta: 'Vou ter que trocar o ERP ou parar de usar o WhatsApp?',
        resposta:
          'Não. O que precisa continuar existindo a gente integra. O sistema se conecta ao ERP, ao WhatsApp e ao e-mail e centraliza o resto.',
      },
      {
        pergunta: 'Quanto custa e quanto tempo leva?',
        resposta:
          'Depende do que a sua empresa precisa. Depois da conversa inicial você recebe uma proposta com escopo, prazo e investimento por escrito.',
      },
      {
        pergunta: 'Por onde eu começo?',
        resposta: 'Pelo WhatsApp. Conta o que você precisa e a gente marca uma conversa.',
      },
    ] satisfies Pergunta[],
  },

  chamadaFinal: {
    titulo: 'Menos trabalho manual, mais crescimento',
    texto:
      'Conta para a gente o que a sua empresa precisa. A conversa inicial é pelo WhatsApp e não tem compromisso.',
    acao: 'Falar no WhatsApp',
  },
} as const;
