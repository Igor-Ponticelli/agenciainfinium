/**
 * Interações da prévia da Lumaj: os departamentos levam às listas, "Adicionar" vira o seletor de
 * quantidade (− n +) e o "Pedido" acompanha; "Meu pedido" mostra a lista, com entrega ou
 * retirada. Tudo só na memória da página: o envio pelo WhatsApp não existe na prévia.
 */

const icone = (d: string) =>
  `<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.75"><path d="${d}"></path></svg>`;
const MENOS = icone('M5 12h14');
const MAIS = icone('M12 5v14M5 12h14');
const REMOVER = icone('M5 5l14 14M19 5L5 19');

const limitar = (valor: number) => Math.max(0, Math.min(9999, Math.round(valor) || 0));

export function iniciar(raiz: HTMLElement) {
  const lm = raiz.querySelector<HTMLElement>('.lm');
  if (!lm) return;
  const $ = <T extends HTMLElement = HTMLElement>(seletor: string) => lm.querySelector<T>(seletor)!;

  const pedido = $('[data-lm-pedido]');
  const fundo = $('[data-lm-fundo]');
  const aviso = $('[data-lm-aviso]');
  const quantidades = new Map<string, number>();
  let abriuCom: HTMLElement | null = null;

  function mostrar(vista: string) {
    lm!.dataset.vista = vista;
    for (const v of lm!.querySelectorAll<HTMLElement>('[data-lm-vista]'))
      v.hidden = v.dataset.lmVista !== vista;
    $('[data-lm-barra]').hidden = vista === 'inicio' || !quantidades.size;
  }

  function definir(nome: string, qtd: number) {
    const anterior = quantidades.get(nome) ?? 0;
    qtd = limitar(qtd);
    if (qtd > 0) quantidades.set(nome, qtd);
    else quantidades.delete(nome);
    if (!anterior && qtd) aviso!.textContent = `${nome} entrou no pedido.`;
    if (anterior && !qtd) aviso!.textContent = `${nome} saiu do pedido.`;
    atualizar();
  }

  function atualizar() {
    const itens = quantidades.size;
    const unidades = [...quantidades.values()].reduce((a, b) => a + b, 0);
    const resumo = `${itens} ${itens === 1 ? 'item' : 'itens'} · ${unidades} ${unidades === 1 ? 'unidade' : 'unidades'}`;
    lm!.toggleAttribute('data-itens', itens > 0);
    $('[data-lm-contador]').textContent = String(itens);
    $('[data-lm-contador-leitor]').textContent = itens
      ? `Meu pedido, ${resumo}`
      : 'Meu pedido, vazio';
    $('[data-lm-resumo]').textContent = resumo;
    $('[data-lm-total]').textContent = resumo;
    $('[data-lm-barra]').hidden = lm!.dataset.vista === 'inicio' || !itens;
    $('[data-lm-vazio]').hidden = itens > 0;
    $('[data-lm-form]').hidden = itens === 0;

    for (const li of lm!.querySelectorAll<HTMLElement>('[data-lm-item]')) {
      const qtd = quantidades.get(li.dataset.lmItem!) ?? 0;
      li.querySelector<HTMLElement>('[data-lm-add]')!.hidden = qtd > 0;
      li.querySelector<HTMLElement>('.lm-qtd')!.hidden = qtd === 0;
      const campo = li.querySelector<HTMLInputElement>('[data-lm-campo]')!;
      if (document.activeElement !== campo) campo.value = String(qtd);
    }

    // A lista de "Meu pedido": recria só as linhas que mudaram de item, para não perder o foco
    const lista = $('[data-lm-itens]');
    const atuais = new Map(
      [...lista.children].map((li) => [(li as HTMLElement).dataset.nome!, li as HTMLElement]),
    );
    const linhas = [...quantidades.keys()].map((nome) => atuais.get(nome) ?? linhaPedido(nome));
    lista.replaceChildren(...linhas);
    for (const li of linhas) {
      const campo = li.querySelector('input')!;
      if (document.activeElement !== campo) campo.value = String(quantidades.get(li.dataset.nome!));
    }
  }

  function linhaPedido(nome: string) {
    const li = document.createElement('li');
    li.className = 'lm-linha-pedido';
    li.dataset.nome = nome;
    li.innerHTML = `<span></span><span class="lm-linha-qtd" role="group"><button type="button" data-lm-passo="-1">${MENOS}<span class="lm-sr">Diminuir</span></button><input class="lm-numero" type="number" inputmode="numeric" min="0" max="9999" data-lm-campo><button type="button" data-lm-passo="1">${MAIS}<span class="lm-sr">Aumentar</span></button></span><button class="lm-remover" type="button" data-lm-remover>${REMOVER}<span class="lm-sr"></span></button>`;
    li.firstElementChild!.textContent = nome;
    li.querySelector('.lm-linha-qtd')!.setAttribute('aria-label', `Quantidade de ${nome}`);
    li.querySelector('input')!.setAttribute('aria-label', `Quantidade de ${nome}`);
    li.querySelector('[data-lm-remover] .lm-sr')!.textContent = `Remover ${nome}`;
    return li;
  }

  // O item de uma linha, no departamento ou em "Meu pedido"
  const itemDe = (el: Element) =>
    el.closest<HTMLElement>('[data-lm-item]')?.dataset.lmItem ??
    el.closest<HTMLElement>('.lm-linha-pedido')?.dataset.nome;

  function abrirPedido(origem: HTMLElement) {
    abriuCom = origem;
    pedido!.hidden = false;
    fundo!.hidden = false;
    $('#lm-pedido-titulo').focus();
  }

  function fecharPedido() {
    pedido!.hidden = true;
    fundo!.hidden = true;
    abriuCom?.focus();
  }

  lm.addEventListener('click', (e) => {
    const el = e.target instanceof Element ? e.target : null;
    if (!el) return;

    if (el.closest('[data-lm-add]')) {
      const nome = itemDe(el)!;
      definir(nome, 1);
      el.closest('[data-lm-item]')!.querySelector<HTMLElement>('[data-lm-campo]')!.focus();
      return;
    }

    const passo = el.closest<HTMLElement>('[data-lm-passo]');
    if (passo) {
      const nome = itemDe(passo)!;
      const qtd = (quantidades.get(nome) ?? 0) + Number(passo.dataset.lmPasso);
      definir(nome, qtd);
      if (qtd <= 0) {
        // Saiu do pedido: o foco volta para o "Adicionar" (ou para o título de "Meu pedido")
        const add = lm!.querySelector<HTMLElement>(
          `[data-lm-item="${CSS.escape(nome)}"] [data-lm-add]`,
        );
        if (passo.closest('[data-lm-pedido]')) $('#lm-pedido-titulo').focus();
        else add?.focus();
      }
      return;
    }

    if (el.closest('[data-lm-remover]')) {
      definir(itemDe(el)!, 0);
      $('#lm-pedido-titulo').focus();
      return;
    }

    const dep = el.closest<HTMLElement>('[data-lm-dep]');
    if (dep) {
      if (!pedido!.hidden) fecharPedido();
      mostrar(dep.dataset.lmDep!);
      $(`[data-lm-vista="${dep.dataset.lmDep}"] .lm-dep-titulo`).focus();
      return;
    }

    if (el.closest('[data-lm-inicio]')) return mostrar('inicio');
    const abrir = el.closest<HTMLElement>('[data-lm-abrir]');
    if (abrir) return abrirPedido(abrir);
    if (el.closest('[data-lm-fechar], [data-lm-fundo]')) return fecharPedido();

    if (el.closest('[data-lm-limpar]')) {
      quantidades.clear();
      atualizar();
      $('#lm-pedido-titulo').focus();
    }
  });

  lm.addEventListener('change', (e) => {
    const el = e.target as HTMLInputElement;
    if (el.matches('[data-lm-campo]')) definir(itemDe(el)!, Number(el.value));
    if (el.matches('[data-lm-receber]')) $('[data-lm-endereco]').hidden = el.value !== 'entrega';
  });

  pedido.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      e.stopPropagation();
      fecharPedido();
    }
  });

  atualizar();
}
