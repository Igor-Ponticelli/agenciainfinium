import type { NomeRota } from './rotas';

/**
 * Textos de interface (menu, botões, rótulos). O texto das páginas fica em `paginas/` (TODO 2).
 * Regra do projeto: nada de travessão em texto visível.
 */

export const tiposProjeto = ['site', 'produto'] as const;
export type TipoProjeto = (typeof tiposProjeto)[number];

export const statusProjeto = ['publicado', 'em-producao', 'em-desenvolvimento'] as const;
export type StatusProjeto = (typeof statusProjeto)[number];

export const textos = {
  pularParaConteudo: 'Pular para o conteúdo',
  /** Texto alternativo do logo no cabeçalho. O nome aparece sempre pelo arquivo SVG. */
  logo: 'Infinium, página inicial',
  menu: {
    rotulo: 'Menu principal',
    abrir: 'Abrir menu',
    fechar: 'Fechar menu',
    servicos: 'Serviços',
    sites: 'Sites',
    sistemas: 'Sistemas',
    projetos: 'Projetos',
    blog: 'Blog',
    contato: 'Contato',
  },
  acoes: {
    falarWhatsapp: 'Falar no WhatsApp',
    queroSite: 'Quero um site',
    queroSistema: 'Quero automatizar minha empresa',
    enviarWhatsapp: 'Enviar pelo WhatsApp',
    enviarEmail: 'Enviar por e-mail',
    verServico: 'Ver o serviço',
    verProjeto: 'Ver projeto',
    visitarSite: 'Visitar o site',
    proximoProjeto: 'Próximo projeto',
    voltarInicio: 'Voltar para o início',
  },
  contato: { whatsapp: 'WhatsApp', instagram: 'Instagram', email: 'E-mail' },
  rodape: {
    assinatura: 'Sites e sistemas que trabalham por você.',
    privacidade: 'Política de privacidade',
  },
  /** Aviso para leitor de tela nos links que abrem em nova aba. */
  linkExterno: '(abre em nova aba)',
  projeto: {
    rotulos: { tipo: 'Tipo', ano: 'Ano', status: 'Status', site: 'Site' },
    tipo: { site: 'Site', produto: 'Produto' } satisfies Record<TipoProjeto, string>,
    status: {
      publicado: 'Publicado',
      'em-producao': 'Em produção',
      'em-desenvolvimento': 'Em desenvolvimento',
    } satisfies Record<StatusProjeto, string>,
  },
  previa: {
    /** Rótulo da região da prévia, para leitor de tela. */
    rotulo: (titulo: string, tipo: TipoProjeto) =>
      tipo === 'site' ? `Prévia interativa do site da ${titulo}` : `Prévia interativa do ${titulo}`,
    aviso: 'Prévia em HTML e CSS. Nada do que você fizer aqui é enviado ou salvo.',
    emPreparacao: 'Prévia em preparação',
  },
  naoEncontrada: {
    titulo: 'Página não encontrada',
    texto: 'O endereço pode ter mudado, ou o link veio com algum erro.',
    voltar: 'Voltar para o início',
  },
  enviado: {
    titulo: 'Mensagem enviada',
    texto: 'Recebemos a sua mensagem. A gente responde pelo contato que você informou.',
    voltar: 'Voltar para o início',
  },
} as const;

/**
 * Title e description de cada página, com foco em busca. As de projeto saem da collection.
 * [PENDENTE: cidades do SEO local. Quando o Igor confirmar, os titles de sites e sistemas
 * ganham "em <cidade> e região".]
 */
export const metasPaginas: Record<NomeRota, { titulo: string; descricao: string }> = {
  inicio: {
    titulo: 'Agência Infinium, sites e automação de processos para empresas',
    descricao:
      'A Infinium cria sites e sistemas que trabalham pela sua empresa: tira o negócio do papel e da planilha e coloca no online e no automático.',
  },
  servicos: {
    titulo: 'Serviços: sites e sistemas para empresas',
    descricao:
      'Dois serviços que se completam: o site traz o cliente e o sistema cuida dele depois. Veja qual resolve o problema da sua empresa.',
  },
  sites: {
    titulo: 'Criação de sites para empresas',
    descricao:
      'Sites institucionais, landing pages e páginas de venda, rápidos, responsivos e prontos para receber clientes. Fale com a Infinium pelo WhatsApp.',
  },
  sistemas: {
    titulo: 'Sistemas sob medida e automação de processos',
    descricao:
      'Um sistema único no lugar de Excel, Trello, ERP e WhatsApp soltos, com os processos manuais rodando sozinhos. Fale com a Infinium pelo WhatsApp.',
  },
  projetos: {
    titulo: 'Projetos',
    descricao:
      'Sites publicados e sistemas construídos pela Infinium, com prévias interativas e as decisões de cada projeto.',
  },
  blog: {
    titulo: 'Blog',
    descricao:
      'Textos curtos sobre sites, Google, segurança e automação, escritos para quem é dono de empresa.',
  },
  contato: {
    titulo: 'Contato',
    descricao:
      'Fale com a Agência Infinium pelo WhatsApp, por e-mail ou pelo formulário de orçamento.',
  },
  contatoEnviado: {
    titulo: 'Mensagem enviada',
    descricao: 'Recebemos a sua mensagem.',
  },
  raioX: {
    titulo: 'Raio-X do site: análise de SEO, velocidade e segurança',
    descricao:
      'Descubra por que o site da sua empresa não aparece no Google, está lento ou inseguro, com um relatório curto e uma conversa.',
  },
  privacidade: {
    titulo: 'Política de privacidade',
    descricao: 'Como a Agência Infinium trata os dados de quem visita o site e entra em contato.',
  },
  acessos: {
    titulo: 'Acessos',
    descricao: 'Links da Agência Infinium: WhatsApp, sites e automação de processos.',
  },
  naoEncontrada: {
    titulo: 'Página não encontrada',
    descricao: 'Esta página não existe.',
  },
};
