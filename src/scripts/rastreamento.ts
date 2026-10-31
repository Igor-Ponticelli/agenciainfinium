/**
 * Rastreamento com consentimento (arquitetura.md, seção 4; padrão dos sites de clientes, com
 * Consent Mode v2 em modo básico). Nenhuma tag do GA4 ou do Meta Pixel é baixada antes de a
 * pessoa aceitar. As preferências salvas são reaplicadas a cada página. Os IDs vêm do
 * `data-*` do elemento `[data-rastreamento]` (Rastreamento.astro), nunca de script inline.
 * Depois do aceite, os eventos de metricas.ts passam a ir para as tags.
 */
import { conectar, type Evento } from './metricas';

export type Preferencias = { analytics: boolean; marketing: boolean; data?: string };
type Gtag = (...args: unknown[]) => void;
type Fbq = ((...args: unknown[]) => void) & {
  callMethod?: unknown;
  queue?: unknown[];
  loaded?: boolean;
  version?: string;
  push?: unknown;
};

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: Gtag;
    fbq?: Fbq;
    _fbq?: Fbq;
    infiniumConsentimento?: {
      chave: string;
      aplicar: (p: Preferencias) => void;
      ler: () => Preferencias | null;
    };
  }
}

export const CHAVE = 'infinium-consentimento';

const raiz = document.querySelector<HTMLElement>('[data-rastreamento]');
const ids = { ga4: raiz?.dataset.ga4 || '', metaPixel: raiz?.dataset.metaPixel || '' };
const carregado = { ga4: false, pixel: false };
let preferencias: Preferencias = { analytics: false, marketing: false };

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
  const marketing = p.marketing ? 'granted' : 'denied';
  window.gtag!('consent', 'update', {
    analytics_storage: p.analytics ? 'granted' : 'denied',
    ad_storage: marketing,
    ad_user_data: marketing,
    ad_personalization: marketing,
  });

  if (ids.ga4 && p.analytics && !carregado.ga4) {
    carregado.ga4 = true;
    carregar(`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(ids.ga4)}`);
    window.gtag!('js', new Date());
    window.gtag!('config', ids.ga4);
  }

  if (ids.metaPixel && p.marketing && !carregado.pixel) {
    carregado.pixel = true;
    const fbq: Fbq = function (...args: unknown[]) {
      if (fbq.callMethod) (fbq.callMethod as (...a: unknown[]) => void).apply(fbq, args);
      else fbq.queue!.push(args);
    };
    if (!window._fbq) window._fbq = fbq;
    fbq.push = fbq;
    fbq.loaded = true;
    fbq.version = '2.0';
    fbq.queue = [];
    window.fbq = fbq;
    carregar('https://connect.facebook.net/en_US/fbevents.js');
    window.fbq('init', ids.metaPixel);
    window.fbq('track', 'PageView');
  }
}

/** Cada evento do site vai para as tags que a pessoa aceitou. */
function entregar(evento: Evento) {
  if (ids.ga4 && preferencias.analytics && window.gtag) {
    window.gtag('event', evento.nome, evento.dados);
  }
  if (ids.metaPixel && preferencias.marketing && window.fbq) {
    window.fbq('trackCustom', evento.nome, evento.dados);
  }
}

window.infiniumConsentimento = { chave: CHAVE, aplicar, ler };

if (ids.ga4 || ids.metaPixel) {
  conectar(entregar);
  const salvo = ler();
  if (salvo) aplicar(salvo);
}

// Troca de página pelo ClientRouter: a tag já carregada registra a nova página
document.addEventListener('astro:page-load', () => {
  if (carregado.ga4 && window.gtag) {
    window.gtag('event', 'page_view', { page_location: location.href, page_title: document.title });
  }
  if (carregado.pixel && window.fbq) window.fbq('track', 'PageView');
});
