/**
 * Banner de cookies (LGPD), no padrão dos sites de clientes: aparece só quando há tags e a
 * pessoa ainda não escolheu. Aceitar, recusar ou personalizar. A escolha fica no localStorage e
 * é reaplicada por rastreamento.ts. Qualquer elemento com [data-abrir-cookies] reabre as
 * preferências (o link no rodapé).
 */
import { aplicar, CHAVE, ler, type Preferencias } from './rastreamento';

function iniciar() {
  const banner = document.querySelector<HTMLElement>('[data-consentimento]');
  if (!banner || banner.dataset.pronto) return;
  banner.dataset.pronto = '1';

  const opcoes = banner.querySelector<HTMLFieldSetElement>('[data-consentimento-opcoes]')!;
  const botao = (acao: string) => banner.querySelector<HTMLButtonElement>(`[data-acao="${acao}"]`)!;
  const caixa = (nome: string) => banner.querySelector<HTMLInputElement>(`input[name="${nome}"]`);

  const salvar = (p: Preferencias) => {
    const anterior = ler();
    try {
      localStorage.setItem(CHAVE, JSON.stringify({ ...p, data: new Date().toISOString() }));
    } catch {
      // Sem localStorage, a escolha vale só nesta página
    }
    banner.hidden = true;
    // A tag já carregada não "descarrega": se a pessoa retirou o consentimento, recarrega.
    const retirou = anterior?.analytics && !p.analytics;
    if (retirou) location.reload();
    else aplicar(p);
  };

  const abrir = (personalizar = false) => {
    const atual = ler();
    const analytics = caixa('analytics');
    if (analytics) analytics.checked = Boolean(atual?.analytics);
    opcoes.hidden = !personalizar;
    botao('personalizar').hidden = personalizar;
    botao('salvar').hidden = !personalizar;
    banner.hidden = false;
  };

  botao('aceitar').addEventListener('click', () => salvar({ analytics: true }));
  botao('recusar').addEventListener('click', () => salvar({ analytics: false }));
  botao('personalizar').addEventListener('click', () => abrir(true));
  botao('salvar').addEventListener('click', () =>
    salvar({ analytics: Boolean(caixa('analytics')?.checked) }),
  );

  if (!ler()) abrir();
}

document.addEventListener('click', (e) => {
  const el = e.target instanceof Element ? e.target.closest('[data-abrir-cookies]') : null;
  if (!el) return;
  e.preventDefault();
  const banner = document.querySelector<HTMLElement>('[data-consentimento]');
  if (!banner) return;
  banner.querySelector<HTMLButtonElement>('[data-acao="personalizar"]')?.click();
  if (banner.hidden) {
    // Sem tags não há banner; nada a abrir
  }
});

document.addEventListener('astro:page-load', iniciar);
iniciar();
