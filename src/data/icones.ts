/**
 * Ícones do site (pedido do Igor, 31/10/2026): traço de 2 px em `--color-fita`, desenhados pela
 * própria fita conforme a rolagem (Icone.astro e site.css). Grade de 24 x 24, pontas e cantos
 * redondos, nenhum preenchimento. Cada forma leva `pathLength="1"` para a animação do traço.
 * Desenhados aqui, sem biblioteca; só os dois logotipos (Instagram e WhatsApp) vêm do Tabler
 * Icons (MIT), porque marca se reconhece pelo desenho oficial.
 */
const formas = {
  telas:
    '<rect x="2" y="4" width="14" height="10" rx="1.5"/><path d="M6 18h6M9 14v4"/><rect x="17" y="8" width="5" height="10" rx="1.2"/><path d="M19 16h1"/>',
  raio: '<path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z"/>',
  lupa: '<circle cx="10.5" cy="10.5" r="6.5"/><path d="M15.5 15.5 21 21"/>',
  balao:
    '<path d="M4 4h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-9.5L6 20v-4H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z"/>',
  grafico: '<path d="M3 20h18M7 16V9M12 16V4M17 16v-4"/>',
  cadeado: '<rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
  globo:
    '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c5 3.5 5 14.5 0 18M12 3c-5 3.5-5 14.5 0 18"/>',
  alvo: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
  etiqueta:
    '<path d="M20.6 13.4l-7.2 7.2a2 2 0 0 1-2.8 0L3 13V3h10l7.6 7.6a2 2 0 0 1 0 2.8z"/><circle cx="7.5" cy="7.5" r="1"/>',
  janela:
    '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 9h20M5.5 6.5h1M8.5 6.5h1"/>',
  relogio: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/>',
  certo: '<circle cx="12" cy="12" r="9"/><path d="M8 12.5l2.5 2.5L16 9.5"/>',
  usuarios:
    '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0M16 4.6a3.5 3.5 0 0 1 0 6.8M17.5 13.6a6.5 6.5 0 0 1 4 6.4"/>',
  olho: '<path d="M2 12s3.5-6.5 10-6.5S22 12 22 12s-3.5 6.5-10 6.5S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
  crescimento: '<path d="M3 17l6-6 4 4 8-8M14 7h7v7"/>',
  banco:
    '<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/>',
  ciclo:
    '<path d="M20.5 9A9 9 0 0 0 5.3 6.3L3 8.5M3 3.5v5h5M3.5 15a9 9 0 0 0 15.2 2.7L21 15.5M21 20.5v-5h-5"/>',
  conexoes:
    '<circle cx="5" cy="12" r="2.5"/><circle cx="19" cy="5" r="2.5"/><circle cx="19" cy="19" r="2.5"/><path d="M7.2 10.9l9.6-4.8M7.2 13.1l9.6 4.8"/>',
  painel: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M8 16v-4M12 16V8M16 16v-2"/>',
  documento:
    '<path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><path d="M14 3v6h6M9 13h6M9 17h6"/>',
  escudo: '<path d="M12 3l8 3v6c0 5-3.4 8.6-8 10-4.6-1.4-8-5-8-10V6z"/><path d="M9 12l2 2 4-4"/>',
  velocimetro:
    '<path d="M4 17a8.5 8.5 0 1 1 16 0"/><path d="M12 17l4-5"/><circle cx="12" cy="17" r="1.5"/>',
  video: '<rect x="2.5" y="6" width="13" height="12" rx="2"/><path d="M15.5 10.5l6-3v9l-6-3z"/>',
  planilha: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 10h18M3 15h18M9 10v10"/>',
  quadro: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7.5 7v10M12 7v6M16.5 7v8"/>',
  nota: '<path d="M6 2h12v20l-3-2-3 2-3-2-3 2z"/><path d="M9 8h6M9 12h6M9 16h3"/>',
  envelope: '<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2.5 7.5 12 14l9.5-6.5"/>',
  /** Instagram e WhatsApp vêm do Tabler Icons (MIT, Paweł Kuna), no mesmo traço dos nossos. */
  instagram:
    '<path d="M3 7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4z"/><path d="M8.5 12a3.5 3.5 0 1 0 7 0 3.5 3.5 0 0 0-7 0"/><path d="M17 7v.01"/>',
  whatsapp:
    '<path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9z"/><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"/>',
  copyright: '<circle cx="12" cy="12" r="9"/><path d="M14.5 9.8a3.3 3.3 0 1 0 0 4.4"/>',
} as const;

export type NomeIcone = keyof typeof formas;

/** O markup de cada ícone, com `pathLength="1"` em toda forma, para a fita desenhar de 0 a 1. */
export const icones: Record<NomeIcone, string> = Object.fromEntries(
  Object.entries(formas).map(([nome, svg]) => [
    nome,
    svg.replace(/<(path|circle|rect|ellipse) /g, '<$1 pathLength="1" '),
  ]),
) as Record<NomeIcone, string>;

export const nomesIcones = Object.keys(formas) as NomeIcone[];
