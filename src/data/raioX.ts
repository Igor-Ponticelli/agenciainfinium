/**
 * O Raio-X do site: produto de entrada (conteudo.md, seção 11). Preço, prazo e link de
 * pagamento são do Igor. Enquanto não vierem, a página mostra `[PENDENTE]` no preço e o botão
 * leva ao WhatsApp com a mensagem do Raio-X, para a LP funcionar antes do pagamento existir.
 */
import { numeroWhatsapp } from './empresa';

/** Preço em reais, só números (por exemplo, 97). `null` até o Igor decidir. */
export const preco: number | null = null; // [PENDENTE: preço do Raio-X]

/** Prazo de entrega do relatório, em dias úteis. `null` até o Igor decidir. */
export const prazoDias: number | null = null; // [PENDENTE: prazo do Raio-X]

/** Link de pagamento (Mercado Pago ou Stripe). `null` até o Igor criar. */
export const linkPagamento: string | null = null; // [PENDENTE: link de pagamento]

export const mensagemWhatsapp = 'Oi! Quero o Raio-X do site da minha empresa. O site é: ';

export const precoFormatado = (valor: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor);

/** O destino do botão: o pagamento, ou o WhatsApp enquanto ele não existe. */
export function linkRaioX(): { href: string; externo: boolean; pagamento: boolean } {
  if (linkPagamento) return { href: linkPagamento, externo: true, pagamento: true };
  return {
    href: `https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(mensagemWhatsapp)}`,
    externo: true,
    pagamento: false,
  };
}
