/**
 * Texto da home, seção por seção (conteudo.md, seção 2, revista em 05/11/2026: menos texto, um
 * tópico com ícone no lugar de cada parágrafo). Persuasiva como uma landing page. Fatos:
 * EMPRESA.md e SERVICOS.md. Os projetos vêm da collection; aqui ficam só os textos em volta
 * deles. Regra do projeto: nada de travessão.
 */
import type { NomeIcone } from '../../data/icones';

export type Passo = { titulo: string; texto: string };
export type Pergunta = { pergunta: string; resposta: string };
export type Topico = { icone: NomeIcone; titulo: string; texto?: string };

export const inicio = {
  abertura: {
    titulo: 'Sites e sistemas que trabalham por você',
    texto:
      'A Infinium tira o seu negócio do papel e da planilha e coloca no online e no automático.',
    acaoPrincipal: 'Falar no WhatsApp',
    acaoSecundaria: 'Ver projetos',
    ancoraProjetos: 'projetos',
    ancoraComoFunciona: 'como-funciona',
  },

  /** A faixa rolante: o que a Infinium faz e onde atende (EMPRESA.md, PRODUCT.md). */
  faixa: [
    'Sites',
    'Landing pages',
    'Páginas de vendas',
    'Sistemas sob medida',
    'Automação de processos',
    'Brusque e Vale do Itajaí',
    'Atendimento remoto para todo o Brasil',
  ],

  problema: {
    titulo: 'Reconhece essa cena?',
    itens: [
      { icone: 'balao', titulo: 'Pedidos', texto: 'chegam pelo WhatsApp' },
      { icone: 'planilha', titulo: 'Controle', texto: 'fica no Excel' },
      { icone: 'quadro', titulo: 'Tarefas', texto: 'ficam no Trello' },
      { icone: 'nota', titulo: 'Financeiro', texto: 'fica no ERP' },
    ] satisfies Topico[],
    frase: 'E alguém passa o dia copiando informação de um lugar para outro.',
    resultado: {
      icone: 'painel',
      titulo: 'Um sistema só',
      texto: 'Tudo no mesmo lugar, e o que era manual acontece sozinho.',
    } satisfies Topico,
  },

  servicos: {
    titulo: 'Dois serviços, um parceiro só',
    sites: {
      titulo: 'Sites',
      frase: 'Seja encontrado. Seja escolhido.',
      texto: 'Rápido, bom no celular e pronto para transformar visita em contato.',
      topicos: [
        { icone: 'janela', titulo: 'Site institucional' },
        { icone: 'alvo', titulo: 'Landing page' },
        { icone: 'etiqueta', titulo: 'Página de vendas' },
      ] satisfies Topico[],
      verServico: 'Ver o serviço de sites',
      whatsapp: 'Quero um site',
    },
    sistemas: {
      titulo: 'Sistemas',
      frase: 'Do Excel, do Trello e do ERP para um sistema só.',
      texto:
        'Feito do jeito que a sua empresa trabalha. O que era manual passa a acontecer sozinho.',
      topicos: [
        { icone: 'banco', titulo: 'Centraliza' },
        { icone: 'ciclo', titulo: 'Automatiza' },
        { icone: 'conexoes', titulo: 'Integra' },
        { icone: 'painel', titulo: 'Mostra os números' },
      ] satisfies Topico[],
      verServico: 'Ver o serviço de sistemas',
      whatsapp: 'Quero automatizar minha empresa',
    },
  },

  conexao: {
    antes: 'O site traz o cliente.',
    depois: 'O sistema cuida dele depois.',
    texto:
      'Um contato que chega pelo site vira pedido, gera as tarefas da equipe e recebe retorno automático. Um parceiro só, do primeiro clique à operação.',
  },

  projetos: {
    titulo: 'Trabalho que você pode abrir agora',
    texto: 'Três sites publicados e um sistema em produção. Cada prévia é o site de verdade.',
    acao: 'Ver todos os projetos',
    anterior: 'Projeto anterior',
    proximo: 'Próximo projeto',
  },

  comoFunciona: {
    titulo: 'Como funciona',
    texto: 'As etapas mudam um pouco de um serviço para o outro, mas o caminho é o mesmo.',
    passos: [
      {
        icone: 'balao',
        titulo: 'Conversa',
        texto: 'Você conta o que a empresa faz, o que atrapalha hoje e o que quer resolver.',
      },
      {
        icone: 'documento',
        titulo: 'Proposta',
        texto: 'Escopo, prazo e investimento por escrito. Sem surpresa no meio do caminho.',
      },
      {
        icone: 'quadro',
        titulo: 'Construção em etapas',
        texto: 'Você acompanha e dá retorno enquanto o trabalho acontece, não só no fim.',
      },
      {
        icone: 'globo',
        titulo: 'Publicação',
        texto: 'O site vai ao ar, ou o sistema entra em uso, com orientação para a sua equipe.',
      },
      {
        icone: 'ciclo',
        titulo: 'Acompanhamento',
        texto: 'Ajustes e melhorias conforme a empresa cresce. O trabalho não termina na entrega.',
      },
    ] satisfies Topico[],
  },

  resultados: {
    titulo: 'O que muda na sua empresa',
    itens: [
      { icone: 'relogio', titulo: 'Tempo', texto: 'Horas de trabalho manual devolvidas à equipe.' },
      {
        icone: 'certo',
        titulo: 'Menos erros',
        texto: 'A informação é digitada uma vez e aparece onde precisa.',
      },
      {
        icone: 'usuarios',
        titulo: 'Clientes que ficam',
        texto: 'Retorno no prazo, sem depender da memória de alguém.',
      },
      {
        icone: 'olho',
        titulo: 'Visão',
        texto: 'Os números do negócio num painel, sem montar planilha.',
      },
      {
        icone: 'crescimento',
        titulo: 'Crescimento',
        texto: 'Dá para atender mais sem contratar na mesma proporção.',
      },
    ] satisfies Topico[],
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
    titulo: 'Vamos conversar?',
    texto:
      'Conta o que a sua empresa precisa. A conversa inicial é pelo WhatsApp e não tem compromisso.',
    acao: 'Falar no WhatsApp',
  },
} as const;
