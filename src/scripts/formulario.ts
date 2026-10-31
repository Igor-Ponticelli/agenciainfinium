/**
 * Formulário de contato (conteudo.md, seção 10; arquitetura.md, seção 7).
 * "Enviar por e-mail" é o envio nativo do <form> para o Web3Forms: funciona sem JS e redireciona
 * para /contato/enviado/. "Enviar pelo WhatsApp" monta a mensagem com os campos e abre o wa.me;
 * sem JS esse botão fica escondido (CSS) e o link do WhatsApp da página faz o papel.
 * Nenhum dado é guardado aqui.
 */
import { registrar } from './metricas';

function valor(form: HTMLFormElement, nome: string) {
  const campo = form.elements.namedItem(nome);
  if (campo instanceof RadioNodeList) return campo.value.trim();
  if (campo instanceof HTMLInputElement || campo instanceof HTMLTextAreaElement) {
    return campo.value.trim();
  }
  return '';
}

function rotuloDaOpcao(form: HTMLFormElement, nome: string, valorEscolhido: string) {
  const input = form.querySelector<HTMLInputElement>(
    `input[name="${nome}"][value="${valorEscolhido}"]`,
  );
  return input?.closest('label')?.textContent?.trim() ?? valorEscolhido;
}

function montarMensagem(form: HTMLFormElement) {
  const linhas = [form.dataset.assunto ?? ''];
  const nome = valor(form, 'nome');
  const empresa = valor(form, 'empresa');
  const contato = valor(form, 'contato');
  const precisa = valor(form, 'precisa');
  const mensagem = valor(form, 'mensagem');
  if (nome) linhas.push(`Nome: ${nome}`);
  if (empresa) linhas.push(`Empresa: ${empresa}`);
  if (contato) linhas.push(`Contato: ${contato}`);
  if (precisa) linhas.push(`Preciso de: ${rotuloDaOpcao(form, 'precisa', precisa)}`);
  if (mensagem) linhas.push('', mensagem);
  return linhas.filter((l, i) => l !== '' || i > 0).join('\n');
}

document.addEventListener('submit', (e) => {
  const form = e.target;
  if (!(form instanceof HTMLFormElement) || !form.hasAttribute('data-formulario-contato')) return;
  const botao = e.submitter instanceof HTMLButtonElement ? e.submitter : null;
  const porWhatsapp = botao?.value === 'whatsapp';
  const numero = form.dataset.whatsapp;

  if (porWhatsapp && numero) {
    e.preventDefault();
    if (!form.reportValidity()) return;
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(montarMensagem(form))}`;
    registrar('formulario_whatsapp', { pagina: location.pathname });
    window.open(url, '_blank', 'noopener');
    return;
  }

  // E-mail: envio nativo para o Web3Forms. Só registra o evento e deixa o navegador seguir.
  registrar('formulario_email', { pagina: location.pathname });
});

export {};
