/**
 * Interações da prévia da Brisa Café: o status aberto/fechado, com o horário real da Brisa e o
 * relógio do visitante no fuso de Brasília (a mesma conta do site), e a troca de tema.
 */

// Minutos desde a meia-noite, por dia da semana (0 = domingo), como no site
const HORARIO: Record<number, [number, number]> = {
  1: [480, 1080],
  2: [480, 1080],
  3: [480, 1080],
  4: [480, 1080],
  5: [480, 1020],
};
const DIAS = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'];
const hora = (min: number) =>
  `${Math.floor(min / 60)}h${min % 60 ? String(min % 60).padStart(2, '0') : ''}`;

export function statusBrisa(agora = new Date()): { aberto: boolean; texto: string } {
  const partes = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Sao_Paulo',
    weekday: 'short',
    hour: 'numeric',
    minute: 'numeric',
    hourCycle: 'h23',
  }).formatToParts(agora);
  const parte = (tipo: string) => partes.find((p) => p.type === tipo)!.value;
  const dia = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(parte('weekday'));
  const min = Number(parte('hour')) * 60 + Number(parte('minute'));

  const hoje = HORARIO[dia];
  if (hoje && min >= hoje[0] && min < hoje[1]) {
    return { aberto: true, texto: `Aberto agora, até as ${hora(hoje[1])}` };
  }
  if (hoje && min < hoje[0])
    return { aberto: false, texto: `Fechado agora. Abre hoje às ${hora(hoje[0])}` };
  for (let n = 1; n <= 7; n++) {
    const outro = (dia + n) % 7;
    if (HORARIO[outro]) {
      const quando = n === 1 ? 'amanhã' : DIAS[outro];
      return {
        aberto: false,
        texto: `Fechado agora. Abre ${quando} às ${hora(HORARIO[outro][0])}`,
      };
    }
  }
  return { aberto: false, texto: '' };
}

export function iniciar(raiz: HTMLElement) {
  const br = raiz.querySelector<HTMLElement>('.br');
  const status = raiz.querySelector<HTMLElement>('[data-br-status]');
  const tema = raiz.querySelector<HTMLButtonElement>('[data-br-tema]');
  if (!br || !status || !tema) return;

  const atualizar = () => {
    const { aberto, texto } = statusBrisa();
    status.dataset.estado = aberto ? 'aberto' : 'fechado';
    status.lastElementChild!.textContent = texto;
  };
  atualizar();
  const relogio = window.setInterval(() => {
    if (raiz.isConnected) atualizar();
    else clearInterval(relogio);
  }, 60_000);

  // Como o site, começa seguindo o sistema; o botão troca só dentro da prévia
  const definir = (escuro: boolean) => {
    br.dataset.tema = escuro ? 'escuro' : 'claro';
    tema.setAttribute('aria-pressed', String(escuro));
  };
  definir(matchMedia('(prefers-color-scheme: dark)').matches);
  tema.addEventListener('click', () => definir(br.dataset.tema !== 'escuro'));
}
