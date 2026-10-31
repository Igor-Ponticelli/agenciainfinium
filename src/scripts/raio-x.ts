/**
 * Landing page do Raio-X: espelha o ângulo do anúncio na abertura (`?angulo=google` ou
 * `?angulo=seguranca`), preserva os parâmetros UTM no link de pagamento e registra, uma vez
 * cada, as seções que a pessoa viu (metricas.ts). Nada é enviado nem salvo.
 */
import { registrar } from './metricas';

function espelharAngulo() {
  const angulo = new URLSearchParams(location.search).get('angulo');
  const h1 = document.querySelector<HTMLElement>('[data-angulo-google]');
  if (!angulo || !h1) return;
  const texto =
    angulo === 'google'
      ? h1.dataset.anguloGoogle
      : angulo === 'seguranca'
        ? h1.dataset.anguloSeguranca
        : null;
  if (texto) h1.textContent = texto;
}

function preservarUtm() {
  const utm = new URLSearchParams(
    Array.from(new URLSearchParams(location.search)).filter(([chave]) => chave.startsWith('utm_')),
  );
  if (!utm.toString()) return;
  for (const link of document.querySelectorAll<HTMLAnchorElement>('[data-raio-x-pagamento]')) {
    const url = new URL(link.href);
    utm.forEach((valor, chave) => url.searchParams.set(chave, valor));
    link.href = url.href;
  }
}

function observarSecoes() {
  const secoes = document.querySelectorAll<HTMLElement>('[data-secao]');
  if (!secoes.length || !('IntersectionObserver' in window)) return;
  const io = new IntersectionObserver(
    (entradas) => {
      for (const e of entradas) {
        if (!e.isIntersecting) continue;
        io.unobserve(e.target);
        registrar('raio_x_secao_vista', { secao: (e.target as HTMLElement).dataset.secao ?? '' });
      }
    },
    { threshold: 0.5 },
  );
  secoes.forEach((s) => io.observe(s));
}

function iniciar() {
  if (!document.querySelector('[data-raio-x]')) return;
  espelharAngulo();
  preservarUtm();
  observarSecoes();
}

document.addEventListener('astro:page-load', iniciar);
iniciar();
