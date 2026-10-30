# Mike Wilcock — mikewilcockdesign.com

Desenvolvedor criativo de Manchester. Faz sites, lojas Shopify, Webflow e apps. O site inteiro
gira em torno de **uma ideia**: uma fonte variável que reage ao cursor, ao scroll e à troca de
página.

## Stack

- **Next.js com Turbopack** [confirmado]: chunks em `/_next/static/immutable/`,
  `turbopack-*.js`.
- **Tailwind v4** [confirmado]: variáveis `--tw-*` e `--default-transition-*` no CSS.
- **Payload CMS + Postgres + Vercel** [declarado].
- **Lenis** é a única dependência de motion [declarado]. O resto é um único loop de frame com
  `requestAnimationFrame` e a Web Animations API.
- 329 testes automatizados, inclusive um teste de que a animação roda igual em 60 Hz e 120 Hz
  [declarado].
- `llms.txt` e `llms-full.txt` publicados para IA [confirmado]. É um detalhe raro e bom para SEO
  e para ser encontrado por IA.

## Visual e identidade

**Tipografia** [confirmado]
- **Archivo**, variável, com eixos `wdth` e `wght`, para tudo que é display e texto.
  **Geist Mono** para rótulos, metadados e numeração (`font-family: var(--font-mono)` aparece
  51 vezes no CSS).
- Os estilos de tipo são *configurações de eixo*, não fontes diferentes:
  - `--fvs-display: "wdth" 70, "wght" 800`: títulos estreitos e pesados;
  - `--fvs-italic: "wdth" 115, "wght" 250`: "itálico" falso, largo e leve;
  - `--fvs-row: "wdth" 88, "wght" 700`: linhas da lista de trabalhos;
  - `--stretch-to: "wdth" 118, "wght" 400/500`: estado esticado no hover.
- Títulos de página se ajustam à largura do container com
  `--page-title-fit: calc(100cqi / var(--page-title-ems))` (container queries).
- Rótulos entre parênteses: "Selected work (04)", "(Up close)".

**Cor** [confirmado]: escuro quente com um único acento.
| token | valor |
|---|---|
| `--color-bg` | `#111010` |
| `--color-surface` | `#1a1918` |
| `--color-text` | `#edeae4` (off-white quente) |
| `--color-muted` / `subtle` / `faint` | `#b9b4ac` / `#a8a39b` / `#86817a` |
| `--color-hairline` | `#edeae4` com 12% de opacidade |
| `--color-accent` | `#7fa8ff` (azul) |

O acento muda no site todo por um easter egg (5 cliques no logo: azul → rosa → laranja → lima)
[declarado]. Isso só funciona porque o acento é **um único token**.

**Espaço e forma** [confirmado]
- `--spacing-gutter: clamp(20px, 4vw, 56px)` e `--spacing-page-top: clamp(120px, 18vh, 180px)`.
- Raios pequenos: imagem 6px, card 8px, badge 4px, pill 100px.
- Breakpoints em 600, 700, 900 e 1100px.

## Animações e interações [declarado, salvo indicação]

- **Fonte que estica com o cursor**: os títulos ficam em `wdth 70 / wght 800` e, perto do cursor,
  vão até `wdth 125 / wght 260`, depois voltam. No hero, o raio de influência é de 420px. As
  quebras de linha são medidas em repouso e **travadas**, para o texto não pular de linha quando
  estica.
- **Revelação no scroll e títulos de troca de página** usam o mesmo movimento: começam largos e
  leves e assentam estreitos e pesados. A linguagem de motion é coerente porque vem de um gesto só.
- **Primeiro carregamento** (~2,7 s, uma vez por visita, um clique acelera): um contador vai até
  100 e a caixa de acento em volta do "w" do nome cresce até cobrir a tela e pousa no logo.
- **Troca de página** (~1,7 s, reduzida de 2,8 s): barras na cor de acento cobrem a tela enquanto
  o título da próxima página se monta letra por letra.
- **Cursor**: um anel que se preenche com uma palavra ("View", "Open", "Next") sobre links, e vira
  só contorno em botões pequenos para não cobrir o texto. No CSS ele fica sob
  `(pointer:fine) and (prefers-reduced-motion:no-preference)` [confirmado].
- **Card de hover na lista de trabalhos**: segue o ponteiro, inclina conforme a velocidade e faz
  cross-fade entre as capas.
- **Texto fixo na tela que acende palavra por palavra** com o scroll. O leitor de tela recebe o
  texto inteiro.
- **Tiles de serviço** que se enchem de acento de baixo para cima com o hover.
- **Easter eggs**: digitar "tea"; 5 cliques no logo.
- A lista de trabalhos alterna entre **lista e grade**.

## Acessibilidade e performance [declarado]

- Com `prefers-reduced-motion`, o design continua e só o movimento sai: sem smooth scroll, sem
  intro, sem esticar, o texto já aparece aceso e os vídeos esperam um clique. No CSS há 9 regras
  com `prefers-reduced-motion` [confirmado].
- Títulos divididos em letras mantêm uma cópia em texto puro para leitores de tela.
- Nada fica escondido se o JS não rodar.
- Números: Lighthouse 100 no desktop, CLS 0,02, 19,5 KB de motion + consentimento, menos de
  180 KB de JS. No celular com throttling: 85–94.
- O loop de animação nunca lê layout no meio do frame, escreve só transform, opacity e
  `font-variation-settings`, e pula letras fora da tela. A velocidade é calculada pelo tempo
  decorrido, não por contagem de frames.
- Fica de fora de propósito: a fonte "respirando" no toque, porque o esticar pode empurrar uma
  palavra para a linha de baixo.

## Navegação e conteúdo

- Home: nome → "Selected work (04)" → "(Up close)" → "What I do" → contato.
- Páginas: Work (+ case studies), Services (4 subpáginas), About, Contact. Menu em tela cheia no
  celular.
- Os case studies são feitos de seções reutilizáveis no CMS: 34 tipos de seção, 19 só para case
  study. Cada um tem números concretos ("1422 produtos", "500+ downloads").
- Tom de voz: primeira pessoa, seco, com humor ("Writing up your own site is a bit like reviewing
  your own cooking").
- Formulário de contato com chips para o tipo de projeto e o orçamento.

## O que torna o site único

Um **sistema** inteiro (intro, transições, hover, reveal) sai de **um único material**: os eixos
de uma fonte variável. Ele não empilha efeitos. Ainda assim, é leve e acessível.

## Para estudar

- O case study [This Site](https://mikewilcockdesign.com/work/portfolio) e o
  [`llms-full.txt`](https://mikewilcockdesign.com/llms-full.txt).
- [Archivo](https://fonts.google.com/specimen/Archivo), com eixos de largura e peso.
- Técnica de travar as quebras de linha durante a animação de largura.
