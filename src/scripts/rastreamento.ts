/**
 * Rastreamento com consentimento (arquitetura.md, seção 4; padrão dos sites de clientes, com
 * Consent Mode v2 em modo básico). A tag do GA4 só é baixada depois de a pessoa aceitar. As
 * preferências salvas são reaplicadas a cada página. O ID vem do `data-*` do elemento
 * `[data-rastreamento]` (Consentimento.astro), nunca de script inline. Depois do aceite, os
 * eventos de metricas.ts passam a ir para o GA4. Sem anúncios: os sinais de anúncio ficam negados.
 */
import { conectar, type Evento } from './metricas';

export type Preferencias = { analytics: boolean; data?: string };
type Gtag = (...args: unknown[]) => void;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: Gtag;
    infiniumConsentimento?: {
      chave: string;
      aplicar: (p: Preferencias) => void;
      ler: () => Preferencias | null;
    };
  }
}

export const CHAVE = 'infinium-consentimento';

const raiz = document.querySelector<HTMLElement>('[data-rastreamento]');
const ga4 = raiz?.dataset.ga4 || '';
let carregado = false;
let preferencias: Preferencias = { analytics: false };

window.dataLayer = window.dataLayer || [];
if (!window.gtag) {
  window.gtag = function () {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer!.push(arguments);
  };
  window.gtag('consent', 'default', {
    analytics_storage: 'denied',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
  });
}

function carregar(src: string) {
  const s = document.createElement('script');
  s.async = true;
  s.src = src;
  document.head.appendChild(s);
}

export function ler(): Preferencias | null {
  try {
    return JSON.parse(localStorage.getItem(CHAVE) ?? 'null');
  } catch {
    return null;
  }
}

export function aplicar(p: Preferencias) {
  preferencias = p;
  window.gtag!('consent', 'update', { analytics_storage: p.analytics ? 'granted' : 'denied' });

  if (ga4 && p.analytics && !carregado) {
    carregado = true;
    carregar(`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(ga4)}`);
    window.gtag!('js', new Date());
    window.gtag!('config', ga4);
  }
}

/** Cada evento do site vai para o GA4, se a pessoa aceitou. */
function entregar(evento: Evento) {
  if (ga4 && preferencias.analytics && window.gtag) {
    window.gtag('event', evento.nome, evento.dados);
  }
}

window.infiniumConsentimento = { chave: CHAVE, aplicar, ler };

// A troca de página pelo ClientRouter não precisa de `page_view` manual: a medição otimizada do
// GA4 (ligada por padrão no stream) conta as mudanças pelo histórico do navegador. Mandar os dois
// contava cada troca duas vezes.
if (ga4) {
  conectar(entregar);
  const salvo = ler();
  if (salvo) aplicar(salvo);
}
