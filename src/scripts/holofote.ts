/**
 * O holofote (pedido do Igor, 31/10/2026; a ideia vem das superfícies "cursor spotlight" do
 * 21st.dev): sobre uma folha, uma luz suave na cor da fita acompanha o ponteiro. Um elemento só,
 * movido por `transform` num passo do motor, com a mesma suavização da fita. Só com ponteiro fino
 * e sem movimento reduzido; no toque e sem JS não existe.
 */
import { acordar, adicionar, aproximar } from './motor';

const mq = matchMedia('(pointer: fine) and (prefers-reduced-motion: no-preference)');

let folha: HTMLElement | null = null;
let luz: HTMLElement | null = null;
let alvo = { x: 0, y: 0 };
const atual = { x: 0, y: 0 };
let primeiro = true;

function criar() {
  if (luz) return luz;
  luz = document.createElement('div');
  luz.className = 'holofote';
  luz.setAttribute('aria-hidden', 'true');
  luz.innerHTML = '<div class="holofote-luz"></div>';
  return luz;
}

function sair() {
  folha?.removeAttribute('data-holofote');
  folha = null;
  primeiro = true;
}

function entrar(nova: HTMLElement) {
  sair();
  folha = nova;
  folha.append(criar());
  folha.setAttribute('data-holofote', '');
}

document.addEventListener(
  'pointermove',
  (e) => {
    if (!mq.matches || (e.pointerType !== 'mouse' && e.pointerType !== 'pen')) return;
    const el = e.target instanceof Element ? e.target : null;
    const nova = el?.closest<HTMLElement>('.folha') ?? null;
    if (nova !== folha) {
      if (nova) entrar(nova);
      else sair();
    }
    if (!folha) return;
    const base = folha.getBoundingClientRect();
    alvo = { x: e.clientX - base.left, y: e.clientY - base.top };
    if (primeiro) {
      atual.x = alvo.x;
      atual.y = alvo.y;
      primeiro = false;
    }
    acordar();
  },
  { passive: true },
);

document.documentElement.addEventListener('pointerleave', sair);
document.addEventListener('astro:before-swap', () => {
  sair();
  luz = null;
});
mq.addEventListener('change', () => {
  if (!mq.matches) sair();
});

adicionar((dt) => {
  if (!folha || !luz) return false;
  atual.x = aproximar(atual.x, alvo.x, dt, 16);
  atual.y = aproximar(atual.y, alvo.y, dt, 16);
  const interno = luz.firstElementChild as HTMLElement;
  interno.style.setProperty('--hx', `${atual.x.toFixed(1)}px`);
  interno.style.setProperty('--hy', `${atual.y.toFixed(1)}px`);
  return Math.abs(atual.x - alvo.x) > 0.2 || Math.abs(atual.y - alvo.y) > 0.2;
});
