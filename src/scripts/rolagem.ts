/**
 * Rolagem suave com o Lenis, movido pelo mesmo loop do motor (sem um segundo rAF).
 * Âncoras na própria página (como "Ver como funciona") viajam até a seção.
 * Com movimento reduzido, nada disso liga: a rolagem é a nativa e as âncoras pulam direto.
 * Copiado do portfólio do Igor; a viagem da âncora ficou mais curta (movimento moderado).
 */
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import { acordar, adicionar } from './motor';

const mqReduzido = matchMedia('(prefers-reduced-motion: reduce)');
let lenis: Lenis | null = null;

// Sai e chega devagar, sem tranco
const curvaAncora = (t: number) => (t < 0.5 ? 8 * t ** 4 : 1 - (-2 * t + 2) ** 4 / 2);

function iniciar() {
  lenis?.destroy();
  lenis = null;
  if (mqReduzido.matches) return;
  lenis = new Lenis({
    autoRaf: false,
    lerp: 0.12,
    wheelMultiplier: 1,
    stopInertiaOnNavigate: true,
  });
  acordar();
}

adicionar(() => {
  if (!lenis) return false;
  lenis.raf(performance.now());
  return Boolean(lenis.isScrolling);
});

// A roda do mouse acorda o loop para o Lenis animar
addEventListener('wheel', acordar, { passive: true });

document.addEventListener(
  'click',
  (e) => {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) {
      return;
    }
    const link = e.target instanceof Element ? e.target.closest('a') : null;
    if (!link || link.target || !link.hash) return;
    const url = new URL(link.href);
    if (url.origin !== location.origin || url.pathname !== location.pathname) return;
    const alvo = document.getElementById(decodeURIComponent(url.hash.slice(1)));
    if (!alvo) return;
    // Antes do ClientRouter (captura): a âncora é tratada aqui, sem troca de página
    e.preventDefault();
    history.replaceState(history.state, '', url.hash);
    if (lenis) {
      lenis.scrollTo(alvo, { duration: 1.1, easing: curvaAncora });
      acordar();
    } else {
      alvo.scrollIntoView();
    }
    // Leva o foco junto, para o teclado continuar dali
    if (!alvo.hasAttribute('tabindex')) alvo.setAttribute('tabindex', '-1');
    alvo.focus({ preventScroll: true });
  },
  true,
);

mqReduzido.addEventListener('change', iniciar);
// O ClientRouter troca os atributos do <html>, onde o Lenis guarda as classes: recomeça
document.addEventListener('astro:after-swap', iniciar);
iniciar();
