/** Interações da prévia do RetroDash: votar, mudar o estado do item de ação e trocar o tema. */

type Estado = 'pendente' | 'concluido' | 'manter';
const proximo: Record<Estado, Estado> = {
  pendente: 'concluido',
  concluido: 'manter',
  manter: 'pendente',
};

export function iniciar(raiz: HTMLElement) {
  const rd = raiz.querySelector<HTMLElement>('.rd');
  if (!rd) return;
  const r = JSON.parse(rd.dataset.rotulos ?? '{}');

  rd.addEventListener('click', (e) => {
    const el = e.target instanceof Element ? e.target : null;

    const card = el?.closest<HTMLButtonElement>('[data-rd-voto]');
    if (card) {
      const votos = Number(card.dataset.votos) + 1;
      card.dataset.votos = String(votos);
      card.querySelector('b')!.textContent = `+${votos}`;
      card.setAttribute('aria-label', `${r.votar}: ${card.dataset.texto}, ${votos} ${r.votos}`);
      card.classList.remove('votou');
      void card.offsetWidth; // reinicia a animação do número
      card.classList.add('votou');
      return;
    }

    const acao = el?.closest<HTMLButtonElement>('[data-rd-acao]');
    if (acao) {
      const estado = proximo[(acao.dataset.estado as Estado) ?? 'pendente'];
      acao.dataset.estado = estado;
      acao.setAttribute(
        'aria-label',
        `${acao.dataset.texto}. ${r.estado}: ${r.estados[estado]} (${r.mudar})`,
      );
      return;
    }

    const tema = el?.closest<HTMLButtonElement>('[data-rd-tema]');
    if (tema) {
      const escuro = rd.dataset.tema !== 'escuro';
      rd.dataset.tema = escuro ? 'escuro' : 'claro';
      tema.setAttribute('aria-pressed', String(escuro));
    }
  });
}
