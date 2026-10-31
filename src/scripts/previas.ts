/**
 * Miniprévias: cada uma é ativada quando chega perto da tela. Ativar liga a fonte do projeto
 * (o CSS da prévia só usa a fonte com [data-ativa]) e carrega o script de interação dela, se
 * houver. Estado só em memória: nada é enviado nem salvo.
 */

type ModuloPrevia = { iniciar: (raiz: HTMLElement) => void };

const modulos = import.meta.glob<ModuloPrevia>('./previas/*.ts');

async function ativar(el: HTMLElement) {
  el.setAttribute('data-ativa', '');
  if (el.dataset.iniciada) return;
  el.dataset.iniciada = '1';
  const carregar = modulos[`./previas/${el.dataset.previa}.ts`];
  if (carregar) (await carregar()).iniciar(el);
}

let observador: IntersectionObserver | null = null;

function observar() {
  observador?.disconnect();
  observador = new IntersectionObserver(
    (entradas) => {
      for (const entrada of entradas) {
        if (!entrada.isIntersecting) continue;
        observador?.unobserve(entrada.target);
        void ativar(entrada.target as HTMLElement);
      }
    },
    { rootMargin: '600px 0px' },
  );
  for (const el of document.querySelectorAll<HTMLElement>('[data-previa]')) {
    if (el.hasAttribute('data-ativa') && el.dataset.iniciada) continue;
    observador.observe(el);
  }
}

document.addEventListener('astro:page-load', observar);
observar();
