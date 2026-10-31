/**
 * Menu do celular: abre e fecha o painel, trava a rolagem e deixa o resto da página inerte
 * enquanto ele está aberto. Os elementos são buscados a cada evento, porque o cabeçalho é
 * trocado junto com a página pelo ClientRouter. Copiado do portfólio do Igor.
 */

const raiz = document.documentElement;
const mqLargo = matchMedia('(min-width: 64rem)');

function elementos() {
  return {
    botao: document.querySelector<HTMLButtonElement>('[data-menu-botao]'),
    painel: document.querySelector<HTMLElement>('[data-menu-painel]'),
  };
}

function definir(aberto: boolean, devolverFoco = false) {
  const { botao, painel } = elementos();
  if (!botao || !painel) return;
  botao.setAttribute('aria-expanded', String(aberto));
  botao.setAttribute(
    'aria-label',
    (aberto ? botao.dataset.rotuloFechar : botao.dataset.rotuloAbrir) ?? '',
  );
  raiz.toggleAttribute('data-menu-aberto', aberto);
  for (const el of document.querySelectorAll<HTMLElement>('main, footer, .fechamento')) {
    el.inert = aberto;
  }
  if (aberto) {
    painel.querySelector<HTMLElement>('a')?.focus();
  } else if (devolverFoco) {
    botao.focus();
  }
}

document.addEventListener('click', (e) => {
  const el = e.target instanceof Element ? e.target : null;
  if (el?.closest('[data-menu-botao]')) {
    definir(!raiz.hasAttribute('data-menu-aberto'));
    return;
  }
  // Um link do painel fecha o menu
  if (raiz.hasAttribute('data-menu-aberto') && el?.closest('[data-menu-painel] a')) {
    definir(false);
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && raiz.hasAttribute('data-menu-aberto')) definir(false, true);
});

mqLargo.addEventListener('change', () => definir(false));

document.addEventListener('astro:after-swap', () => {
  // O ClientRouter troca os atributos do <html>: reaplica a marca de JS e começa fechado
  raiz.classList.add('js');
  definir(false);
});

export {};
