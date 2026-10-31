/**
 * Botão flutuante do WhatsApp (celular e tablet): enquanto a abertura escura da home está na
 * tela, o cabeçalho já tem a ação e o flutuante espera, para não tapar o título da segunda
 * tela. Marca `data-topo-visivel` no <html>; o CSS esconde o botão.
 */
const raiz = document.documentElement;
let observador: IntersectionObserver | null = null;

function observar() {
  observador?.disconnect();
  raiz.removeAttribute('data-topo-visivel');
  const topo = document.querySelector('.topo-escuro');
  if (!topo || !('IntersectionObserver' in window)) return;
  observador = new IntersectionObserver(
    (entradas) => {
      for (const e of entradas) raiz.toggleAttribute('data-topo-visivel', e.isIntersecting);
    },
    { threshold: 0.2 },
  );
  observador.observe(topo);
}

document.addEventListener('astro:page-load', observar);
observar();
