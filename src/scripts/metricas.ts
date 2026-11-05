/**
 * Base de métricas (arquitetura.md, seção 4). Uma função só de evento. Enquanto o GA4 não está
 * ligado (sem ID no .env ou sem consentimento), os eventos ficam numa fila em memória e nada sai
 * do navegador. Os CTAs levam `data-evento`; o clique neles é registrado por delegação.
 */

export type Evento = {
  nome: string;
  dados: Record<string, string>;
  quando: number;
};

type Destino = (evento: Evento) => void;

const fila: Evento[] = [];
let destino: Destino | null = null;

export function registrar(nome: string, dados: Record<string, string> = {}) {
  const evento: Evento = { nome, dados, quando: Date.now() };
  if (destino) destino(evento);
  else fila.push(evento);
}

/** Liga um destino (o GA4). Os eventos já enfileirados são entregues na hora. */
export function conectar(novoDestino: Destino) {
  destino = novoDestino;
  for (const evento of fila.splice(0)) destino(evento);
}

document.addEventListener('click', (e) => {
  const el = e.target instanceof Element ? e.target.closest<HTMLElement>('[data-evento]') : null;
  if (!el?.dataset.evento) return;
  registrar(el.dataset.evento, {
    rotulo: (el.textContent ?? '').replace(/\s+/g, ' ').trim().slice(0, 80),
    destino: el instanceof HTMLAnchorElement ? el.href : '',
    pagina: location.pathname,
  });
});

declare global {
  interface Window {
    infinium?: { registrar: typeof registrar; conectar: typeof conectar };
  }
}

window.infinium = { registrar, conectar };
