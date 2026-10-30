/**
 * Dados públicos da empresa. Fonte: .claude/docs/identidade/EMPRESA.md e o Igor (30/10/2026:
 * WhatsApp, domínio e e-mail).
 */

/** Nome visível (o logo usa sempre o arquivo SVG; este texto é só para `alt` e metadados). */
export const nome = 'Infinium';
/** Nome completo: metadados, JSON-LD e rodapé. */
export const nomeCompleto = 'Agência Infinium';
export const cnpj = '49.893.185/0001-08';
export const dominio = 'infinium.app.br';
export const email = 'agenciainfinium@gmail.com';

export const instagram = {
  usuario: '@agencia_infinium',
  url: 'https://www.instagram.com/agencia_infinium',
} as const;

/** Número público do WhatsApp (+55 47 99273-5089), só dígitos. Confirmado pelo Igor em 30/10/2026. */
export const numeroWhatsapp = '5547992735089';

export type AssuntoWhatsapp = 'geral' | 'site' | 'sistema';

/**
 * Mensagens prontas, na voz do cliente (conteudo.md, seção 6). A de sistemas leva as três
 * perguntas do filtro, com espaços para a pessoa preencher.
 */
export const mensagensWhatsapp: Record<AssuntoWhatsapp, string> = {
  geral: 'Oi! Vi o site da Infinium e quero conversar sobre a minha empresa.',
  site: 'Oi! Quero um site para a minha empresa.',
  sistema: [
    'Oi! Quero automatizar os processos da minha empresa.',
    'Somos ___ pessoas.',
    'Hoje usamos ___ (ferramentas e planilhas).',
    'Perdemos mais tempo com ___.',
  ].join('\n'),
};

export function linkWhatsapp(assunto: AssuntoWhatsapp = 'geral'): string {
  const texto = encodeURIComponent(mensagensWhatsapp[assunto]);
  return `https://wa.me/${numeroWhatsapp}?text=${texto}`;
}
