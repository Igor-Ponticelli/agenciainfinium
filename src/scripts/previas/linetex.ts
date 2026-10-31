/**
 * Interações da prévia da Linetex: índice e trilho levam ao departamento, "Cotar" monta a lista
 * (com o contador e a barra de baixo, como no site) e a "Lista" abre a folha de cotação. Tudo só
 * na memória da página: o envio pelo WhatsApp não existe na prévia.
 */

const svgRemover =
  '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M5 5l14 14M19 5L5 19"></path></svg>';

export function iniciar(raiz: HTMLElement) {
  const lx = raiz.querySelector<HTMLElement>('.lx');
  if (!lx) return;
  const $ = <T extends HTMLElement = HTMLElement>(seletor: string) => lx.querySelector<T>(seletor)!;

  const lista = $('[data-lx-lista]');
  const fundo = $('[data-lx-fundo]');
  const itensLista = $('[data-lx-itens]');
  const aviso = $('[data-lx-aviso]');
  const quantidades = new Map<string, string>();
  let itens: string[] = [];
  let abriuCom: HTMLElement | null = null;

  $('[data-lx-data]').textContent = new Date().toLocaleDateString('pt-BR');

  function mostrar(vista: string) {
    lx!.dataset.vista = vista;
    for (const v of lx!.querySelectorAll<HTMLElement>('[data-lx-vista]'))
      v.hidden = v.dataset.lxVista !== vista;
    for (const b of lx!.querySelectorAll<HTMLElement>('.lx-trilho [data-lx-dep]')) {
      b.setAttribute('aria-current', String(b.dataset.lxDep === vista));
    }
    $('[data-lx-barra]').hidden = vista === 'inicio' || !itens.length;
  }

  function atualizar() {
    const total = itens.length;
    lx!.toggleAttribute('data-itens', total > 0);
    $('[data-lx-contador]').textContent = String(total);
    $('[data-lx-contador-leitor]').textContent = `Lista de cotação, ${
      total ? `${total} ${total === 1 ? 'item' : 'itens'}` : 'nenhum item'
    }`;
    $('[data-lx-barra-n]').textContent = String(total);
    $('[data-lx-barra-rotulo]').textContent = total === 1 ? 'item' : 'itens';
    $('[data-lx-barra]').hidden = lx!.dataset.vista === 'inicio' || !total;

    for (const b of lx!.querySelectorAll<HTMLElement>('[data-lx-cotar]')) {
      const naLista = itens.includes(b.dataset.lxCotar!);
      b.setAttribute('aria-pressed', String(naLista));
      b.querySelector('[data-lx-rotulo]')!.textContent = naLista ? 'Na lista' : 'Cotar';
    }

    $('[data-lx-vazia]').hidden = total > 0;
    $('[data-lx-folha]').hidden = total === 0;
    itensLista!.replaceChildren(
      ...itens.map((nome, i) => {
        const li = document.createElement('li');
        li.className = 'lx-item';
        li.innerHTML = `<span class="lx-item-n lx-numero">${String(i + 1).padStart(2, '0')}</span><span></span><input class="lx-qtd" type="text" autocomplete="off" placeholder="ex.: 10 rolos"><button class="lx-remover" type="button">${svgRemover}<span class="lx-sr"></span></button>`;
        li.children[1].textContent = nome;
        const qtd = li.querySelector('input')!;
        qtd.value = quantidades.get(nome) ?? '';
        qtd.setAttribute('aria-label', `Quantidade de ${nome}`);
        qtd.addEventListener('input', () => quantidades.set(nome, qtd.value));
        const remover = li.querySelector('button')!;
        remover.dataset.lxRemover = nome;
        remover.lastElementChild!.textContent = `Remover ${nome}`;
        return li;
      }),
    );
  }

  function abrirLista(origem: HTMLElement) {
    abriuCom = origem;
    lista!.hidden = false;
    fundo!.hidden = false;
    $('#lx-lista-titulo').focus();
  }

  function fecharLista() {
    lista!.hidden = true;
    fundo!.hidden = true;
    abriuCom?.focus();
  }

  lx.addEventListener('click', (e) => {
    const el = e.target instanceof Element ? e.target : null;
    if (!el) return;

    const cotar = el.closest<HTMLElement>('[data-lx-cotar]');
    if (cotar) {
      const nome = cotar.dataset.lxCotar!;
      const estava = itens.includes(nome);
      itens = estava ? itens.filter((i) => i !== nome) : [...itens, nome];
      aviso!.textContent = estava
        ? `${nome} saiu da lista.`
        : `${nome} entrou na lista de cotação.`;
      atualizar();
      return;
    }

    const remover = el.closest<HTMLElement>('[data-lx-remover]');
    if (remover) {
      itens = itens.filter((i) => i !== remover.dataset.lxRemover);
      atualizar();
      $('#lx-lista-titulo').focus();
      return;
    }

    const dep = el.closest<HTMLElement>('[data-lx-dep]');
    if (dep) {
      if (!lista!.hidden) fecharLista();
      mostrar(dep.dataset.lxDep!);
      if (!dep.closest('.lx-trilho'))
        $(`[data-lx-vista="${dep.dataset.lxDep}"] .lx-dep-titulo`).focus();
      return;
    }

    if (el.closest('[data-lx-inicio]')) return mostrar('inicio');
    const abrir = el.closest<HTMLElement>('[data-lx-abrir]');
    if (abrir) return abrirLista(abrir);
    if (el.closest('[data-lx-fechar], [data-lx-fundo]')) return fecharLista();

    if (el.closest('[data-lx-limpar]')) {
      itens = [];
      quantidades.clear();
      atualizar();
      $('#lx-lista-titulo').focus();
    }
  });

  lista.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      e.stopPropagation();
      fecharLista();
    }
  });

  atualizar();
}
