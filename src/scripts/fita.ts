/**
 * A fita (direcao-visual.md, seção 5, e o contrato da home): o material da marca em movimento.
 * Duas coisas acontecem aqui, num único passo do motor:
 * 1. a troca de página: a régua do cabeçalho (a fita) engrossa até cobrir a tela com o degradê,
 *    mostra o título da próxima página e volta a ser a régua. Total abaixo de 1,2 s;
 * 2. o laço: nas listas `[data-laco]`, a fita percorre os itens em sequência e volta ao primeiro,
 *    só enquanto a lista está na tela.
 * O hover, a seleção da planilha e a moldura das prévias são CSS. Com movimento reduzido, a troca
 * vira um fade curto e o laço fica parado no primeiro item. Só transform, opacity e clip-path.
 */
import type { TransitionBeforePreparationEvent } from 'astro:transitions/client';
import { acordar, adicionar } from './motor';

const mqReduzido = matchMedia('(prefers-reduced-motion: reduce)');
const cortina = document.querySelector<HTMLElement>('[data-fita-cortina]');
const titulo = document.querySelector<HTMLElement>('[data-fita-cortina-titulo]');

const curva = 'cubic-bezier(0.65, 0, 0.35, 1)';
const COBRIR = 260;
const TITULO = 160;
const PAUSA = 60;
const DESCOBRIR = 280;

let cobrindo = false;
let esmaecido = false;

// ---------- Troca de página ----------

/** A fita de onde a cortina sai: a régua do cabeçalho ou, sem ela, uma linha no meio da tela. */
function insetDaRegua() {
  const regua = document.querySelector('[data-fita-regua]');
  if (!regua) return 'inset(50% 0px 50% 0px)';
  const r = regua.getBoundingClientRect();
  const topo = Math.max(0, Math.min(innerHeight, r.top));
  const base = Math.max(0, innerHeight - Math.min(innerHeight, r.bottom));
  return `inset(${topo}px 0px ${base}px 0px)`;
}

async function cobrir() {
  if (!cortina) return;
  cobrindo = true;
  cortina.getAnimations().forEach((a) => a.cancel());
  cortina.classList.add('ativa');
  await cortina.animate([{ clipPath: insetDaRegua() }, { clipPath: 'inset(0px 0px 0px 0px)' }], {
    duration: COBRIR,
    easing: curva,
    fill: 'forwards',
  }).finished;
}

async function mostrarTitulo(texto: string) {
  if (!titulo) return;
  titulo.textContent = texto;
  await titulo.animate(
    [
      { opacity: 0, transform: 'translateY(0.2em)' },
      { opacity: 1, transform: 'none' },
    ],
    { duration: TITULO, easing: 'cubic-bezier(0.16, 1, 0.3, 1)', fill: 'forwards' },
  ).finished;
}

async function descobrir() {
  if (!cortina) return;
  await new Promise((r) => setTimeout(r, PAUSA));
  titulo?.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 140, fill: 'forwards' });
  await cortina.animate([{ clipPath: 'inset(0px 0px 0px 0px)' }, { clipPath: insetDaRegua() }], {
    duration: DESCOBRIR,
    easing: curva,
    fill: 'forwards',
  }).finished;
  cortina.classList.remove('ativa');
  cortina.getAnimations().forEach((a) => a.cancel());
  titulo?.getAnimations().forEach((a) => a.cancel());
  cobrindo = false;
}

async function esmaecer(de: number, para: number) {
  const main = document.querySelector('main');
  if (!main) return;
  await main.animate([{ opacity: de }, { opacity: para }], { duration: 150, fill: 'forwards' })
    .finished;
}

document.addEventListener('astro:before-preparation', (ev) => {
  const e = ev as TransitionBeforePreparationEvent;
  const carregar = e.loader;
  if (mqReduzido.matches) {
    // Movimento reduzido: só um fade curto
    esmaecido = true;
    e.loader = async () => {
      await Promise.all([carregar(), esmaecer(1, 0)]);
    };
    return;
  }
  e.loader = async () => {
    await Promise.all([carregar(), cobrir()]);
    const h1 = e.newDocument?.querySelector('h1')?.textContent?.replace(/\s+/g, ' ').trim() ?? '';
    await mostrarTitulo(h1);
  };
});

document.addEventListener('astro:page-load', () => {
  if (cobrindo) {
    void descobrir();
  } else if (esmaecido) {
    esmaecido = false;
    void esmaecer(0, 1);
  }
  prepararLacos();
});

// ---------- O laço ----------

const INTERVALO = 1.6; // segundos por item

type Laco = {
  lista: HTMLElement;
  itens: HTMLElement[];
  indice: number;
  tempo: number;
  visivel: boolean;
};
let lacos: Laco[] = [];
let observador: IntersectionObserver | null = null;

function marcar(laco: Laco) {
  laco.itens.forEach((item, i) => item.toggleAttribute('data-ativo', i === laco.indice));
}

function prepararLacos() {
  observador?.disconnect();
  lacos = [];
  const listas = document.querySelectorAll<HTMLElement>('[data-laco]');
  if (!listas.length) return;
  observador = new IntersectionObserver(
    (entradas) => {
      for (const entrada of entradas) {
        const laco = lacos.find((l) => l.lista === entrada.target);
        if (laco) laco.visivel = entrada.isIntersecting;
      }
      acordar();
    },
    { threshold: 0.2 },
  );
  for (const lista of listas) {
    const itens = Array.from(lista.querySelectorAll<HTMLElement>(':scope > li'));
    // Posição de repouso: o item que o contrato marca (em /sistemas/, o diagnóstico)
    const inicio = Math.min(
      Number(lista.dataset.lacoInicio ?? 0) || 0,
      Math.max(itens.length - 1, 0),
    );
    const laco: Laco = {
      lista,
      itens,
      indice: inicio,
      tempo: 0,
      visivel: false,
    };
    marcar(laco);
    lacos.push(laco);
    observador.observe(lista);
  }
}

adicionar((dt) => {
  if (mqReduzido.matches) return false;
  let rodando = false;
  for (const laco of lacos) {
    if (!laco.visivel || laco.itens.length < 2) continue;
    rodando = true;
    laco.tempo += dt;
    if (laco.tempo >= INTERVALO) {
      laco.tempo = 0;
      laco.indice = (laco.indice + 1) % laco.itens.length;
      marcar(laco);
    }
  }
  return rodando;
});

mqReduzido.addEventListener('change', () => {
  for (const laco of lacos) {
    laco.indice = Number(laco.lista.dataset.lacoInicio ?? 0) || 0;
    marcar(laco);
  }
  acordar();
});

prepararLacos();
