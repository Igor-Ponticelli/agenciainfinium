/**
 * Galeria com rolagem horizontal (versão 1): os botões de anterior e próximo rolam o trilho uma
 * vitrine por vez. Sem JS o trilho já rola com o dedo ou a roda do mouse (scroll-snap em CSS);
 * os botões só aparecem com JS. Nada além de scrollBy, que respeita a rolagem suave do CSS.
 */
const mqReduzido = matchMedia('(prefers-reduced-motion: reduce)');

function passo(trilho: HTMLElement) {
  const primeira = trilho.querySelector<HTMLElement>(':scope > *');
  if (!primeira) return trilho.clientWidth;
  const estilo = getComputedStyle(trilho);
  const gap = parseFloat(estilo.columnGap || estilo.gap || '0') || 0;
  return primeira.getBoundingClientRect().width + gap;
}

function atualizar(galeria: HTMLElement, trilho: HTMLElement) {
  const anterior = galeria.querySelector<HTMLButtonElement>('[data-galeria-anterior]');
  const proximo = galeria.querySelector<HTMLButtonElement>('[data-galeria-proximo]');
  const fim = trilho.scrollWidth - trilho.clientWidth - 2;
  if (anterior) anterior.disabled = trilho.scrollLeft <= 2;
  if (proximo) proximo.disabled = trilho.scrollLeft >= fim;
}

for (const galeria of document.querySelectorAll<HTMLElement>('[data-galeria]')) {
  const trilho = galeria.querySelector<HTMLElement>('[data-galeria-trilho]');
  if (!trilho) continue;
  galeria.setAttribute('data-galeria-pronta', '');
  galeria.addEventListener('click', (e) => {
    const botao = e.target instanceof Element ? e.target.closest('button') : null;
    if (!botao) return;
    const sentido = botao.hasAttribute('data-galeria-proximo')
      ? 1
      : botao.hasAttribute('data-galeria-anterior')
        ? -1
        : 0;
    if (!sentido) return;
    trilho.scrollBy({
      left: sentido * passo(trilho),
      behavior: mqReduzido.matches ? 'auto' : 'smooth',
    });
  });
  trilho.addEventListener('scroll', () => atualizar(galeria, trilho), { passive: true });
  addEventListener('resize', () => atualizar(galeria, trilho));
  atualizar(galeria, trilho);
}

export {};
