/**
 * Textos das três versões de estudo da home (/site1/, /site2/, /site3/), 05/11/2026. Os fatos
 * são os de EMPRESA.md e SERVICOS.md; o que já existe em inicio.ts, sites.ts e sistemas.ts é
 * reaproveitado de lá. Cada versão fala no mesmo tom, mas com o ritmo da direção dela: frases
 * curtas e centradas na 1, informativa e em blocos na 2, editorial e em caixa grande na 3.
 * Regra do projeto: nada de travessão.
 */
import { inicio } from './inicio';
import { sistemas } from './sistemas';
import { sites } from './sites';

/** Versão 1: a vitrine (direção Apple). Uma ideia por tela, texto centrado, o site do cliente como produto. */
export const versao1 = {
  meta: {
    titulo: 'Versão 1: vitrine',
    descricao: 'Estudo de nova home da Agência Infinium: a vitrine, uma ideia por tela.',
  },
  abertura: {
    titulo: 'Sites e sistemas que trabalham por você.',
    frase: 'O site traz o cliente. O sistema cuida dele depois.',
    acao: 'Falar no WhatsApp',
    link: 'Ver os projetos',
  },
  cena: {
    titulo: 'Reconhece essa cena?',
    ferramentas: ['WhatsApp', 'Excel', 'Trello', 'ERP'],
    resultado: 'Um sistema só',
    paragrafos: inicio.problema.paragrafos,
  },
  servicos: {
    titulo: 'Dois serviços. Um parceiro só.',
    sites: {
      titulo: 'Sites',
      frase: 'Seja encontrado. Seja escolhido.',
      texto:
        'Site institucional, landing page ou página de vendas. Rápido, bom no celular e pronto para transformar visita em contato.',
      ver: 'Ver o serviço',
      whatsapp: 'Quero um site',
    },
    sistemas: {
      titulo: 'Sistemas',
      frase: 'Do Excel, do Trello e do ERP para um sistema só.',
      texto:
        'Um sistema único, feito do jeito que a sua empresa trabalha. O que era manual passa a acontecer sozinho.',
      ver: 'Ver o serviço',
      whatsapp: 'Quero automatizar minha empresa',
    },
  },
  conexao: {
    titulo: 'O site traz o cliente. O sistema cuida dele depois.',
    texto: inicio.conexao.texto,
    rotulos: { site: 'Site', sistema: 'Sistema' },
  },
  projetos: {
    titulo: 'Trabalho que você pode abrir agora.',
    texto: 'Três sites publicados e um sistema em produção. Cada prévia é o site de verdade.',
    acao: 'Ver todos os projetos',
    anterior: 'Projeto anterior',
    proximo: 'Próximo projeto',
  },
  comoFunciona: {
    titulo: 'Como funciona.',
    texto: inicio.comoFunciona.texto,
    passos: inicio.comoFunciona.passos,
  },
  resultados: {
    titulo: 'O que muda para a sua empresa.',
    itens: inicio.resultados.itens,
  },
  blog: { titulo: 'Do blog.', acao: 'Ver todos os textos' },
  faq: inicio.faq,
  chamada: {
    titulo: 'Menos trabalho manual, mais crescimento.',
    texto: inicio.chamadaFinal.texto,
    acao: 'Falar no WhatsApp',
    link: 'Pedir um orçamento pelo formulário',
  },
} as const;

/** Versão 2: o painel (direção Microsoft). Blocos, alinhado à esquerda, mais informação por tela. */
export const versao2 = {
  meta: {
    titulo: 'Versão 2: painel',
    descricao: 'Estudo de nova home da Agência Infinium: o painel, blocos e informação clara.',
  },
  abertura: {
    titulo: 'Sites e sistemas que trabalham pela sua empresa',
    destaque: 'trabalham pela sua empresa',
    texto: inicio.abertura.texto,
    acao: 'Falar no WhatsApp',
    secundaria: 'Ver os serviços',
    /** A ilustração ao lado da foto: o ciclo prometido em SERVICOS.md, não um dado. */
    cartao: {
      titulo: 'Pedido recebido',
      linhas: ['Chegou pelo site', 'Tarefa criada para a equipe', 'Cliente avisado'],
    },
  },
  portas: {
    titulo: 'Por onde você quer começar?',
    itens: [
      {
        icone: 'janela',
        titulo: 'Sites',
        texto: 'Site institucional, landing page e página de vendas, rápidos e bons no celular.',
        acao: 'Ver o serviço de sites',
        destino: 'sites',
      },
      {
        icone: 'painel',
        titulo: 'Sistemas',
        texto: 'Um sistema único no lugar de Excel, Trello, ERP e WhatsApp soltos.',
        acao: 'Ver o serviço de sistemas',
        destino: 'sistemas',
      },
      {
        icone: 'olho',
        titulo: 'Projetos',
        texto: 'Sites publicados e um sistema em produção, com prévias para você clicar.',
        acao: 'Ver os projetos',
        destino: 'projetos',
      },
      {
        icone: 'lupa',
        titulo: 'Raio-X do site',
        texto: 'Uma análise curta de SEO, velocidade, segurança e LGPD do site que você já tem.',
        acao: 'Conhecer o Raio-X',
        destino: 'raioX',
      },
    ],
  },
  cena: {
    titulo: 'Reconhece essa cena?',
    itens: [
      { icone: 'balao', chave: 'Pedidos', valor: 'no WhatsApp' },
      { icone: 'planilha', chave: 'Controle', valor: 'no Excel' },
      { icone: 'quadro', chave: 'Tarefas', valor: 'no Trello' },
      { icone: 'nota', chave: 'Financeiro', valor: 'no ERP' },
    ],
    paragrafos: inicio.problema.paragrafos,
  },
  sites: {
    titulo: 'Sites',
    frase: sites.frase,
    texto: sites.texto,
    inclui: { titulo: 'Todo site inclui', itens: sites.inclui.itens },
    acao: 'Quero um site',
    ver: 'Ver o serviço',
  },
  sistemas: {
    titulo: 'Sistemas',
    frase: sistemas.frase,
    texto: sistemas.texto,
    antesDepois: sistemas.antesDepois,
    acao: 'Quero automatizar minha empresa',
    ver: 'Ver o serviço',
  },
  conexao: {
    titulo: 'Como os dois se conectam',
    texto: inicio.conexao.texto,
    etapas: [
      {
        icone: 'globo',
        titulo: 'O site traz o contato',
        texto: 'A pessoa encontra a empresa e manda uma mensagem.',
      },
      {
        icone: 'ciclo',
        titulo: 'O sistema organiza',
        texto: 'O contato vira pedido e gera as tarefas da equipe.',
      },
      {
        icone: 'certo',
        titulo: 'O cliente recebe retorno',
        texto: 'Avisos e follow-up saem sozinhos, no prazo.',
      },
    ],
  },
  projetos: {
    titulo: 'Projetos publicados',
    texto: inicio.projetos.texto,
    acao: 'Ver todos os projetos',
  },
  comoFunciona: {
    titulo: 'Como funciona',
    texto: inicio.comoFunciona.texto,
    passos: inicio.comoFunciona.passos,
  },
  blog: {
    titulo: 'Do blog',
    texto: 'Textos curtos para quem é dono de empresa.',
    acao: 'Ver todos os textos',
  },
  faq: inicio.faq,
  chamada: {
    titulo: 'Vamos conversar sobre a sua empresa?',
    texto: 'A conversa inicial é pelo WhatsApp e não tem compromisso.',
    acao: 'Falar no WhatsApp',
    secundaria: 'Pedir um orçamento pelo formulário',
  },
} as const;

/** Versão 3: o infinito (direção de agência). Escura, editorial, tipo em caixa grande. */
export const versao3 = {
  meta: {
    titulo: 'Versão 3: infinito',
    descricao: 'Estudo de nova home da Agência Infinium: o infinito, escuro e editorial.',
  },
  abertura: {
    titulo: 'Sites e sistemas que trabalham por você',
    texto: inicio.abertura.texto,
    acao: 'Falar no WhatsApp',
    link: 'Ver projetos',
    faixa: [
      'Sites',
      'Landing pages',
      'Páginas de vendas',
      'Sistemas sob medida',
      'Automação de processos',
      'Brusque e Vale do Itajaí',
      'Atendimento remoto para todo o Brasil',
    ],
  },
  cena: {
    titulo: 'Reconhece essa cena?',
    /** Cada trecho vira uma frase grande; as ferramentas ganham destaque. */
    frases: [
      ['Os pedidos chegam pelo ', 'WhatsApp', '.'],
      [
        'O controle fica no ',
        'Excel',
        ', as tarefas no ',
        'Trello',
        ', o financeiro no ',
        'ERP',
        '.',
      ],
      ['Alguém passa o dia copiando informação de um lugar para outro.'],
    ],
    texto: inicio.problema.paragrafos[1],
  },
  servicos: {
    titulo: 'O que a gente faz',
    itens: [
      {
        numero: '01',
        titulo: 'Sites',
        frase: 'Seja encontrado. Seja escolhido.',
        texto: inicio.servicos.sites.texto,
        ver: 'Ver o serviço de sites',
        whatsapp: 'Quero um site',
        foto: 'entre',
        destino: 'sites',
        assunto: 'site',
      },
      {
        numero: '02',
        titulo: 'Sistemas',
        frase: 'Do Excel, do Trello e do ERP para um sistema só.',
        texto: inicio.servicos.sistemas.texto,
        ver: 'Ver o serviço de sistemas',
        whatsapp: 'Quero automatizar minha empresa',
        foto: 'estoque',
        destino: 'sistemas',
        assunto: 'sistema',
      },
    ],
  },
  conexao: {
    antes: 'O site traz o cliente.',
    depois: 'O sistema cuida dele depois.',
    texto: inicio.conexao.texto,
  },
  projetos: {
    titulo: 'Trabalho que você pode abrir agora',
    texto: 'Cada prévia é o site de verdade, reproduzido aqui para você clicar.',
    acao: 'Ver todos os projetos',
  },
  comoFunciona: {
    titulo: 'Como funciona',
    texto: inicio.comoFunciona.texto,
    passos: inicio.comoFunciona.passos,
  },
  resultados: {
    titulo: 'O que muda',
    itens: inicio.resultados.itens,
  },
  faq: inicio.faq,
  chamada: {
    titulo: 'Vamos conversar?',
    texto:
      'Conta o que a sua empresa precisa. A conversa inicial é pelo WhatsApp e não tem compromisso.',
    acao: 'Falar no WhatsApp',
  },
} as const;
