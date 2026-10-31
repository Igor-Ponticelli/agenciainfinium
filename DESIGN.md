---
name: Agência Infinium
description: A planilha que vira sistema. Grade de células em Roboto e violeta, com a fita de 2 px como único material.
colors:
  primary: "#39135f"
  primary-hover: "#280d40"
  violet-900: "#200a34"
  lilac: "#e9d5fe"
  violet-300: "#b292e3"
  body: "#f1eff4"
  white: "#ffffff"
  ink: "#211f26"
  text: "#625f68"
  line: "#d9d6de"
typography:
  display:
    fontFamily: "Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.75rem, 8vw, 7.5rem)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.5rem, 1.5rem + 4vw, 5rem)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.75rem, 1.25rem + 1.8vw, 2.75rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.015em"
  subtitle:
    fontFamily: "Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: "normal"
  body:
    fontFamily: "Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  small:
    fontFamily: "Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.08em"
rounded:
  none: "0"
  s: "0.25rem"
  m: "0.5rem"
  l: "1rem"
  full: "999px"
spacing:
  3xs: "0.25rem"
  2xs: "0.5rem"
  xs: "0.75rem"
  s: "1rem"
  m: "1.5rem"
  l: "2rem"
  xl: "3rem"
  2xl: "4rem"
  3xl: "6rem"
  4xl: "8rem"
  celula: "0.875rem"
  celula-tablet: "1rem"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.white}"
    typography: "{typography.body}"
    rounded: "{rounded.m}"
    padding: "0.75rem 1.5rem"
    height: "3rem"
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
    textColor: "{colors.white}"
  button-lilac:
    backgroundColor: "{colors.lilac}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.m}"
    padding: "0.75rem 1.5rem"
    height: "3rem"
  button-lilac-hover:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.small}"
    rounded: "{rounded.m}"
    padding: "0.5rem 0.9rem"
    height: "2.5rem"
  button-large:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.white}"
    typography: "{typography.subtitle}"
    rounded: "{rounded.m}"
    padding: "0.75rem 1.5rem"
    height: "3.75rem"
  button-whatsapp-floating:
    backgroundColor: "{colors.lilac}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.full}"
    padding: "0.75rem 1.25rem"
    height: "3rem"
  input:
    backgroundColor: "{colors.body}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.m}"
    padding: "0.75rem 1rem"
    height: "3rem"
  chip-option:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.full}"
    padding: "0.5rem 1rem"
    height: "2.75rem"
  chip-option-selected:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.white}"
    rounded: "{rounded.full}"
  cell-merged:
    backgroundColor: "{colors.white}"
    textColor: "{colors.text}"
    rounded: "{rounded.none}"
    padding: "2rem 0.875rem 3rem"
  cell-merged-dark:
    backgroundColor: "{colors.violet-900}"
    textColor: "{colors.white}"
    rounded: "{rounded.none}"
  cell-merged-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.white}"
    rounded: "{rounded.none}"
    padding: "0.875rem"
  cookie-banner:
    backgroundColor: "{colors.white}"
    textColor: "{colors.text}"
    typography: "{typography.small}"
    rounded: "{rounded.m}"
    padding: "1.5rem"
    width: "26rem"
---

# Design System: Agência Infinium

Registrado em 31/10/2026 a partir do site construído (`src/styles/tokens.css`, `src/styles/site.css`, `src/styles/base.css`, componentes em `src/components/`, scripts em `src/scripts/`) e das capturas em `.impeccable/review/`. Os tokens do frontmatter são normativos; a prosa explica onde e por que cada um aparece. A identidade de marca (paleta, Roboto, logo pelo arquivo) vem de `.claude/docs/identidade/MARCA.md` e não se discute aqui.

## Overview

**Creative North Star: "A planilha que vira sistema"**

O site nasce como a planilha que o cliente usa hoje: uma grade de células com filetes finos (sem letras de coluna nem números de linha, por decisão do Igor em 31/10/2026). Conforme a página desce, as células se mesclam em blocos sólidos (o sistema) e, na chamada final, a grade some. O único material além da grade é a fita, um traço de 2 px derivado do símbolo da marca (a fita de Möbius): é a régua do cabeçalho, o sublinhado de links e frases-chave, o cursor de seleção da planilha, o laço que percorre as etapas, a moldura das prévias e a cortina da troca de página.

A superfície é plana e clara (Body), com o escuro entrando por seção no degradê da marca. Nada tem sombra, vidro ou gradiente em texto; os únicos "desenhos" fora de texto e fita são os traços em CSS do menu e do FAQ e os ícones de traço, que a própria fita desenha conforme a rolagem e que carregam o único brilho do site (31/10/2026). A hierarquia vem só de escala e peso da Roboto. As prévias dos sites de clientes ficam fora da grade porque são o que a Infinium entrega, não o que ela tira; cada uma carrega a identidade do próprio cliente e não faz parte deste sistema.

O site recusa o padrão de agência: abertura centralizada sobre degradê e cards flutuantes com sombra. Cartões existem desde 31/10/2026, mas como células mescladas da mesma linha, separadas por 1 px da grade; e cada seção é uma banda de largura inteira com fundo próprio.

**Key Characteristics:**
- Doze colunas (6 no tablet, 4 no celular) como layout invisível: nenhuma linha vertical, filete só nas listas
- Seções em bandas de largura inteira (Body, White, o degradê) de pelo menos 85svh, com o conteúdo centrado
- Fotos do Unsplash como células mescladas; sobre o degradê, só a luz da foto nas cores da marca
- Cartões como células em grade com ícones de traço desenhados pela fita, com brilho; uma luz segue o ponteiro
- Células mescladas como blocos sólidos: White sobre Body, Violeta 900 sobre o degradê, Primary para a coluna "depois"
- A fita de 2 px como material único: Primary sobre claro, Lilás sobre escuro
- Só Roboto, variável, em sete papéis; hierarquia só por escala e peso
- Claro por padrão; o degradê 135° da marca abre a home e fecha toda página (chamada final e rodapé)
- Movimento moderado: traço que se desenha, laço, cortina abaixo de 1,2 s; tudo parado com movimento reduzido

## Colors

Paleta violeta da identidade, usada como tema claro com seções escuras no degradê; sobre o escuro, só White e Lilás.

### Primary
- **Primary, Violeta 700** (`primary`): o acento do site sobre fundo claro. Botões principais, fita, ícones, logo sobre claro, seleção de texto, anel de foco, marcadores de lista, cursor de texto dos campos. Vira a célula mesclada "depois" da tabela antes e depois. Nunca aparece sobre o degradê nem sobre Ink.
- **Primary hover, Violeta 800** (`primary-hover`): só o fundo do botão Primary no hover.
- **Violeta 900** (`violet-900`): fim do degradê e a cor da célula mesclada sobre o escuro (`.escuro .mesclada`, o submenu quando aberto na abertura escura).

### Secondary
- **Lilás, Violeta 100** (`lilac`): o Primary do mundo escuro. Fita, botões (com texto Ink), foco, seleção de texto e, misturado com transparente, as linhas da grade (14 %) e os rótulos (72 %) sobre o degradê. No claro aparece só no botão flutuante do WhatsApp.
- **Violeta 300** (`violet-300`): só a borda de 1 px do botão flutuante do WhatsApp, para a pílula Lilás não sumir sobre o Body.

### Neutral
- **Body** (`body`): fundo de página, fundo dos campos do formulário e do painel do menu no celular.
- **White** (`white`): a célula mesclada sobre claro (dois serviços, formulário, as quatro células que se fundem, o submenu, o banner de cookies), o texto sobre o degradê e o hover do botão Lilás.
- **Ink** (`ink`): títulos, rótulos de campo, texto de botão Lilás, chaves dos pares chave e valor, texto do menu no celular.
- **Text** (`text`): texto corrido (5,5:1 sobre Body), rótulos da planilha sobre claro (cabeçalho da tabela), placeholders, textos de apoio.
- **Line** (`line`): as linhas da grade, bordas de campo, do submenu e do botão de contorno, fundo do botão desativado.

### Degradê da marca
`linear-gradient(135deg, #39135f 0%, #200a34 100%)`. É o fundo da abertura da home, da chamada final e do rodapé de toda página, da página de acessos e da cortina da troca de página. Sobre ele o texto é branco; o texto de apoio é branco a 84 % (`color-mix(in oklab, #fff 84%, transparent)`); a grade é Lilás a 14 %; os rótulos, Lilás a 72 %.

### Named Rules
**A Regra do Primary Nunca Sobre Escuro.** Sobre o degradê, Ink ou Violeta 900, o acento é o Lilás e o texto é branco. Primary sobre escuro dá 1,1:1 e não existe no site: a classe `.escuro` troca `--color-fita`, `--color-grade`, `--color-rotulo` e `--color-celula` de uma vez.

**A Regra da Fita Que Muda de Cor.** Tudo que é fita lê `--color-fita` (Primary no claro, Lilás no escuro) e nunca uma cor fixa. Um elemento novo que usa a fita não decide a cor: herda do fundo em que está.

**A Regra do Bloco Sólido.** Célula mesclada é um bloco opaco (White, Violeta 900 ou Primary) que cobre a grade. Sem transparência, sem borda arredondada, sem sombra.

## Typography

**Display Font:** Roboto (variável, eixo wght 100 a 900), com fallback Helvetica Neue, Arial, sans-serif
**Body Font:** a mesma Roboto
**Label Font:** a mesma Roboto, Medium em caixa-alta

**Character:** uma fonte só, neutra e de sistema, que faz hierarquia só por tamanho e peso. Dois pesos de leitura (400 e 500) e um de título (700). Roboto é self-hosted pela API de fontes do Astro (`@fontsource-variable/roboto`, subsets latin e latin-ext, preload só do latin, fallback com métricas ajustadas). Não entra mono: números tabulares vêm de `font-variant-numeric: tabular-nums` na própria Roboto (cabeças de linha, etapas, datas, tabela antes e depois, preço do Raio-X).

### Hierarchy
- **Display** (700, `clamp(2.75rem, 8vw, 7.5rem)`, 1, -2,5 %): só a assinatura da abertura da home, em branco, `text-wrap: balance`.
- **Headline** (700, `clamp(2.5rem, 1.5rem + 4vw, 5rem)`, 1, -2,5 %): título de página (`.pagina-titulo`), título da chamada final, título da cortina, "próximo projeto" e o preço do Raio-X.
- **Title** (700, `clamp(1.75rem, 1.25rem + 1.8vw, 2.75rem)`, 1,15, -1,5 %): título de seção na linha da planilha, título dos blocos de serviço, do formulário, do menu no celular e o número das etapas.
- **Subtitle** (500, 20 px, 1,3): frase-chave sublinhada pela fita, título de ficha, de etapa e de post (700 nesses três), frase da abertura e da chamada final (400, branco a 84 %), parágrafo de abertura das páginas internas.
- **Body** (400, 16 px, 1,6): texto corrido, com medida de 65ch (`--texto-medida`) e máximos locais de 46 a 60ch. Botões e menu usam o corpo em 500.
- **Small** (400, 15 px): menu do desktop, botão do WhatsApp do cabeçalho, dados da ficha, datas, textos de apoio e avisos, banner de cookies.
- **Label** (500, 12 px, 1,4, +8 %, caixa-alta, tabular): o cabeçalho da tabela antes e depois. Em Text sobre claro, Lilás a 72 % sobre escuro.

### Named Rules
**A Regra da Fonte Única.** Só Roboto, em 400, 500 e 700. As fontes dos clientes (Plus Jakarta Sans, Young Serif, Figtree, Lexend, Lexend Exa) existem só dentro das prévias, só depois de `[data-ativa]`, e nunca saem de lá.

**A Regra da Escala Sem Adjetivo.** Títulos não ganham cor, gradiente, kicker ou eyebrow: a hierarquia é tamanho e peso, e a ênfase é a fita por baixo da frase-chave.

## Layout

**Bandas.** Toda seção é uma `.banda` (`Secao.astro`): uma faixa de largura inteira com fundo próprio (`banda-claro` é o Body; `banda-branco` é White com células em Body; `banda-escuro` é o degradê da marca), pelo menos 85svh de altura com o conteúdo centrado na vertical, e respiro de 4rem (6rem no desktop; a cabeça das páginas internas leva 1,5rem em cima). As bandas se alternam ao longo da página: é isso que separa uma seção da outra.

**A planilha.** Dentro de cada banda fica uma `.folha`: largura `min(100% - 2 * gutter, 80rem)`, gutter `clamp(1rem, 4vw, 2.5rem)`, centrada. Cada `.linha` é um grid `repeat(colunas, 1fr)`, mas nenhuma linha vertical é desenhada e a folha não tem borda (decisão do Igor em 31/10/2026, depois de ver a grade: "não gostei mais dos quadradinhos"). O filete de 1 px em `--color-grade` entre linhas existe só nas listas (`.passo`, `.post-linha`, `.home-posts-linha`, `.lista-planilha > .linha`, a linha do FAQ, `.cena-linha`). `isolation: isolate` em cada folha guarda o holofote atrás do conteúdo.

| | celular | tablet (48rem) | desktop (64rem) |
|---|---|---|---|
| colunas | 4 (A a D) | 6 (A a F) | 12 (A a L) |
| altura mínima da linha | 3,5rem | 4rem | 4rem |
| padding da célula | 0,875rem | 1rem | 1rem |
| cabeçalho | 3,5rem (56 px) | 4,5rem (72 px) | 4,5rem |

**Como as células se posicionam.** Conteúdo ocupa a linha inteira por padrão e, no desktop, pega faixas do contrato: título e texto nas 7 a 9 primeiras colunas, os dois serviços em 1 a 6 e 7 a 12, a cena do problema em 1 a 6 (tabela e texto) com a foto em 7 a 12, a abertura em 1 a 7 com a foto em 8 a 12, as cabeças com foto em 1 a 8 com a foto em 9 a 12 (`--cabeca-linhas` diz quantas linhas a foto ocupa). Cartões: `span 4` no desktop (três por linha; `span 3` quando são quatro, `span 6` nos dois últimos quando são cinco), `span 3` no tablet, a linha inteira no celular.

**Ritmo vertical.** O respiro é medido em linhas: `.linha-vazia` vale meia linha; o título de seção leva `padding: 3rem 0.875rem 1rem` e se apoia na base da própria linha. Os passos de espaço (`--space-3xs` a `--space-4xl`, 4 a 128 px) aparecem dentro das células, nunca entre linhas.

**Do escuro ao claro.** A grade atravessa a fronteira sem quebrar: só a cor dos filetes muda. A home abre com cabeçalho e abertura dentro do degradê (`aberturaEscura`); páginas de serviço, projetos, blog e contato abrem claras; a chamada final e o rodapé são sempre escuros e sem grade (`.folha-sem-grade`).

**Fora da grade.** As prévias dos projetos rompem as células: cada `.obra` ocupa a linha inteira em subgrid; a moldura grande é 4:3 (site) ou 16:10 (produto), a média é 4:5 (retrato), e a ficha fica nas células ao lado. Os pares são desencontrados (Brisa em A a H com ficha em J a L; Linetex em G a L descida 12vh com ficha à esquerda; Lumaj em A a F; RetroDash em E a L com ficha à esquerda). No celular, uma por vez, largura inteira, ficha embaixo. Na página de projeto a prévia pega 9 das 12 colunas e a ficha as outras 3.

**Páginas sem grade.** A página de acessos é só o degradê com os botões centrados em 26rem. A landing page do Raio-X (`LandingPage.astro`) usa a mesma planilha, mas sem menu e sem rodapé longo: logo sem link, régua da fita, e no fim logo, contato e privacidade.

### Named Rules
**A Regra da Linha Inteira.** Nenhum bloco flutua: tudo nasce numa `.linha` da planilha ou, no caso das prévias, numa obra em subgrid que ocupa a linha inteira. Cartões são células mescladas da mesma linha (`.cartoes`), separadas por 1 px da própria grade, sem sombra e sem canto; card flutuante não existe.

## Elevation & Depth

Sem sombra. A profundidade é tonal e estrutural: filetes de 1 px em Line, blocos opacos (White sobre Body, Violeta 900 ou Primary) que cobrem a grade, e o degradê da marca como "fundo profundo". Hover e foco não levantam nada: a fita se desenha por baixo ou em volta. As `box-shadow: inset 0 -2px 0` do código não são sombra: são a fita como sublinhado (assinatura da abertura, frase-chave, FAQ aberto, seleção da cena). O menu no celular e o submenu no desktop são superfícies planas com borda Line, sem vidro nem blur.

A única exceção construída é o banner de cookies: `box-shadow: 0 12px 32px -12px rgb(32 10 52 / 0.45)`, uma sombra difusa em Violeta 900 que o separa do conteúdo sobre o qual flutua. Só existe com tags configuradas e não deve se espalhar para outros componentes.

### Named Rules
**A Regra do Plano.** Nada tem sombra em repouso nem em hover. Profundidade é bloco sobre grade e claro sobre escuro; se um elemento novo precisa de sombra para se destacar, o problema é a composição. As duas luzes do site são exceções pedidas pelo Igor (31/10/2026) e ficam na cor da fita: o brilho atrás dos ícones e o holofote sob o ponteiro.

## Shapes

Forma retilínea, a da planilha: células e blocos mesclados com raio 0 e filetes de 1 px. Os cantos arredondados são reservados a controles: botões, campos, submenu e banner em `--radius-m` (8 px); a moldura das prévias e `code` no blog em `--radius-s` (4 px); pílulas (opções do formulário, botão flutuante) em `--radius-full`. `--radius-l` (16 px) existe como token e não é usado. Bordas são sempre 1 px em Line; a fita é sempre 2 px. Tracejado (`2px dashed` em `--color-fita`) marca o que ainda não existe: o traço solto do case de automação e o aviso `[PENDENTE]` do formulário. Nenhum ícone: o "+" do FAQ (dois traços de 0,875rem que giram), o chevron do submenu (bordas rotacionadas) e os dois traços do botão de menu são desenhados em CSS; o único SVG além do logo é o laço da conexão.

## Components

### A fita
O material do site, sempre em `--color-fita` e 2 px. Suas formas construídas:
- **Régua do cabeçalho** (`.regua`): começa na margem do conteúdo e corre até a borda direita da tela. A cortina da troca de página parte dela.
- **Sublinhado de link** (`.link-fita`, `.menu a`, títulos de post e de "próximo projeto"): `background-size` de 0 % a 100 % da esquerda para a direita em 260 ms, `ease-out`; fica cheio em `aria-current="page"`.
- **Frase-chave** (`.pagina-frase`, `.servico-frase`): sublinhado fixo; no bloco de serviço, um traço curto de 2,5rem.
- **Linha selecionada** (`.abertura-assinatura`, `.pagina-frase`): a fita por baixo da linha ou da frase.
- **Traço dos ícones** (`.icone svg > *`): cada forma do ícone é a fita se desenhando por `stroke-dashoffset` conforme a rolagem.
- **Cursor de seleção da cena** (`.cena-linha`): a fita por baixo da linha (2 px), dirigida por rolagem com `animation-timeline: view()` (desce uma linha por vez). Sem suporte ou com movimento reduzido, a primeira linha fica selecionada.
- **Laço das etapas** (`.passo[data-ativo]`, `fita.ts`): a fita sublinha um passo por vez (`scaleX` em 420 ms), 1,6 s por item, só com a lista na tela, e volta ao primeiro; `data-laco-inicio` define o repouso (em /sistemas/, o diagnóstico). Parado com movimento reduzido.
- **Linha sob o ponteiro** (`.item-linha::after`): nas listas da planilha, a fita se desenha na linha em hover.
- **Moldura da prévia** (`.obra-moldura:hover`): o contorno de 1 px em Line vira 2 px em fita; o cursor nativo continua dentro.
- **Laço SVG da conexão** (`.conexao-laco`): um `path` com `stroke-width: 2` que atravessa a linha inteira por baixo do texto, desenhado por `stroke-dashoffset` conforme a rolagem; só no desktop.
- **Cortina** (`Fita.astro`, `fita.ts`): o degradê cobre a tela a partir da régua por `clip-path: inset()` em 320 ms (`cubic-bezier(0.65, 0, 0.35, 1)`), o `h1` da próxima página aparece em 200 ms, pausa de 100 ms, descobre em 320 ms. Com movimento reduzido vira um fade de 150 ms no `main`.

### Cartões
`.cartoes` é uma `.linha` com `gap: 1px`, fundo e borda de 1 px em `--color-grade`; cada `.cartao` (`Cartao.astro`) é uma célula em `--color-celula` com o ícone, um título em Subtitle 700 e o texto (até 38ch), `padding: 1.5rem 0.875rem` (2rem 1.5rem no desktop). Sem sombra, sem canto; o hover é a célula ativa do holofote. Variantes: `.cartao-frase` (só uma frase, em Ink 500) e cartão com botão (hub de serviços).

### Ícones
`Icone.astro` com as formas de `src/data/icones.ts`: 28 ícones próprios, grade 24 x 24, traço de 2 px em `currentColor` (`--color-fita`), pontas e cantos redondos, nenhum preenchimento, `pathLength="1"` em toda forma. Tamanho 28 px numa célula de 3rem (`.icone-inline`: 22 px em 2rem, ao lado de texto). A fita desenha cada forma conforme a rolagem (`animation-timeline: --icone`, uma `view-timeline` no próprio `.icone`, `cover 0% a 30%`, as formas seguintes defasadas em 8 %) e o brilho acende atrás (`::before`, halo radial em `--color-icone-brilho`, `cover 18% a 46%`), mais um `drop-shadow` de 6 px em `--color-icone-sombra`. Sem suporte a animação por rolagem ou com movimento reduzido, o ícone aparece pronto e aceso. Decorativo: sempre acompanha texto, `aria-hidden`.

### Fotos
`Foto.astro` com as fotos de `src/data/fotos.ts` (Unsplash, créditos em `.claude/docs/fotos.md`): `<Picture>` em AVIF e WebP, `widths` e `sizes` por uso, preguiçosa (menos as das aberturas, `fetchpriority="high"`). A foto é uma célula mesclada com `aspect-ratio` fixo (`--foto-proporcao`) e `object-fit: cover`; onde ocupa várias linhas (abertura, cena, cabeças), `aspect-ratio: auto` e a altura das linhas. `tom="violeta"` sobre o degradê: fundo no degradê da marca e `mix-blend-mode: luminosity` na imagem.

### Holofote
`holofote.ts` cria um elemento na folha sob o ponteiro: `.holofote`, uma luz de 48rem (`radial-gradient` em `--color-holofote`, Primary a 12 % sobre claro e Lilás a 14 % sobre escuro) atrás do conteúdo em `z-index: -1`, movida só por `transform` com a suavização do motor (16/s). Só `(pointer: fine)` sem movimento reduzido; some ao sair da folha e na troca de página.

### Buttons
- **Shape:** cantos de 8 px (`--radius-m`), altura mínima 3rem, `padding: 0.75rem 1.5rem`, peso 500, `inline-flex` centrado.
- **Primary (sobre claro):** fundo Primary, texto branco; hover em Violeta 800. Em todos os botões a fita se desenha por baixo no hover e no foco (`::after` de 2 px em `currentColor`, `scaleX` da esquerda, 260 ms).
- **Lilás (sobre escuro, `.botao-claro`):** fundo Lilás, texto Ink; hover branco. É o botão da abertura, da chamada final e da página de acessos.
- **Contorno (`.botao-contorno`):** transparente com borda 1 px Line e texto Ink; hover com borda Primary e fundo Body. Só nos secundários do banner de cookies.
- **Grande (`.botao-grande`):** 3,75rem de altura, subtítulo em 700. É o botão da landing page do Raio-X.
- **No cabeçalho (`.botao-whatsapp`):** 2,5rem, texto pequeno; no painel do celular vira Primary cheio, 3,25rem.
- **Flutuante do WhatsApp:** pílula Lilás com texto Ink em 700, borda 1 px Violeta 300, fixa a 1,5rem do canto inferior direito, `z-index: 50`. Só no celular e tablet (some a partir de 64rem); escondida enquanto a abertura escura está na tela (`data-topo-visivel`, `flutuante.ts`) e com o menu aberto.
- **Desativado:** fundo Line, texto Text, sem fita, `cursor: not-allowed`.
- **Ação secundária ao lado do botão:** nunca um segundo botão; é um `.link-fita` (branco sobre escuro).

### Navigation
- **Cabeçalho:** 72 px no desktop, 56 no celular. Logo horizontal pelo arquivo SVG (28 px de altura, Primary sobre claro, branco sobre escuro; as duas imagens alternam por CSS), menu em texto pequeno 500 com a fita por baixo, botão do WhatsApp à direita e a régua da fita abaixo. Quem está na página fica sublinhado (`aria-current`).
- **Submenu de Serviços (desktop):** abre por `:hover` e `:focus-within`, bloco em `--color-celula` com borda Line e raio 8 px, 150 ms de opacidade e `translateY(-0.25rem)`; itens com a fita recuada 1rem de cada lado.
- **Celular (com JS):** botão de dois traços de 22 px (viram um X por `transform`), painel de tela cheia em Body com os itens em título 700 e o submenu recuado em subtítulo 500; o botão do WhatsApp vai para o pé do painel; o resto da página fica `inert` (`menu.ts`) e o logo volta a Primary. Sem JS, o menu se desfaz no cabeçalho, tudo visível.
- **Rodapé:** sobre o degradê, logo branco de 24 px, assinatura em branco a 84 %, links em `.link-fita` brancos, nome da empresa em Lilás a 72 %.
- **Pular para o conteúdo:** bloco Primary no canto superior esquerdo, visível só no foco.

### Células e blocos
- **Linha (`Linha.astro`):** o número decorativo na cabeça e as células no slot; `min-block-size` de uma linha.
- **Célula mesclada (`.mesclada`):** fundo `--color-celula` (White no claro, Violeta 900 no escuro), raio 0, sem borda. Os dois serviços da home (lado a lado em A a F e G a L, divididos por um filete; o bloco de sistemas ainda mostra as células em volta se fundindo nele por uma `mask-image` radial), o formulário, as quatro células "Centraliza, Automatiza, Integra, Mostra".
- **Antes e depois (`.antes-depois`):** cabeçalho em rótulo; a coluna "antes" é uma célula por linha com filete; a coluna "depois" é um bloco Primary só, com texto branco em 500. Tabular.
- **Pares chave e valor:** chave em Ink 700, valor em Text; usados em resultados, benefícios, canais de contato e na ficha dos projetos (`dl` com filetes e rótulo em Text, dado em Ink, 15 px).
- **Etapas (`.passos`):** número em título 700 Text (Primary quando ativo), título em subtítulo 700, texto em até 60ch; no desktop, número em A, título em B a D, texto em E a L.
- **FAQ (`details`):** uma pergunta por linha em 500 Ink, o "+" em dois traços da fita à direita que vira "menos" ao abrir; a aberta ganha a fita por baixo.
- **Traço solto (`.solto`):** texto pequeno com borda esquerda tracejada em fita, para o que ainda não existe.
- **Obra (`Obra.astro`):** moldura com `aspect-ratio`, raio 4 px, contorno 1 px Line, fundo e cor do próprio cliente antes de a prévia carregar; a prévia é uma `region` rotulada, ativada a 600 px da tela (`previas.ts`), e só os controles dela recebem o ponteiro; o resto leva à página do projeto.

### Inputs / Fields
- **Style:** rótulo em Ink 500 acima; campo de 3rem com fundo Body, borda 1 px Line, raio 8 px, `caret-color` Primary, placeholder em Text; textarea redimensionável só na vertical.
- **Focus:** borda Primary mais o anel de foco global com offset de 2 px.
- **Opções (`.opcao`):** pílulas de 2,75rem com borda Line; a marcada vira Primary com texto branco; o input fica oculto e o foco passa para a pílula (`:has(input:focus-visible)`).
- **Pendente:** aviso em caixa tracejada de 2 px na fita.
- O formulário inteiro é uma célula mesclada White com título em Title; funciona sem JS (POST nativo).

### Banner de cookies
Fixo a 1,5rem do canto inferior direito, 26rem no máximo (largura inteira abaixo de 30rem), bloco White com raio 8 px, texto pequeno, a única sombra do site. Dois botões de contorno (recusar, personalizar) e um Primary (aceitar); as opções em checkboxes com `accent-color` Primary. Só existe quando há `PUBLIC_GA4_ID` ou `PUBLIC_META_PIXEL_ID`, e persiste na troca de página.

### Chamada final (`ChamadaFinal.astro`)
Sobre o degradê e sem grade: título em Headline branco até 18ch, frase em subtítulo branco a 84 % até 48ch, botão Lilás com texto Ink e, opcional, um `.link-fita` branco. Fecha toda página antes do rodapé.

## Do's and Don'ts

### Do:
- **Do** colocar todo conteúdo novo numa `.linha` da planilha (ou numa obra em subgrid), dentro de uma banda (`Secao.astro`) que alterna o fundo com a vizinha.
- **Do** dar a cada cartão um ícone de `src/data/icones.ts` e a cada foto um `alt` descritivo em `src/data/fotos.ts`.
- **Do** usar `--color-fita`, `--color-grade`, `--color-rotulo` e `--color-celula` em vez de cores fixas; a classe `.escuro` troca as quatro.
- **Do** fazer a fita se desenhar como traço (`background-size`, `scaleX`, `stroke-dashoffset`), da esquerda para a direita, em 260 ms (`--duration-base`) ou 420 ms (`--duration-slow`), sempre com `--ease-out`.
- **Do** animar só `transform`, `opacity` e `clip-path`, no loop único do `motor.ts`, e parar tudo com `prefers-reduced-motion`.
- **Do** manter botão Primary com texto branco sobre claro e botão Lilás com texto Ink sobre escuro, com `--radius-m` e a fita por baixo no hover.
- **Do** usar números tabulares em tudo que é número alinhado (etapas, datas, tabelas, preço).
- **Do** manter o foco visível (anel de 2 px em `--color-fita`, offset 3 px) e a seleção de texto (Primary com branco no claro, Lilás com Ink no escuro).
- **Do** usar o logo pelo arquivo SVG, Primary sobre claro e branco sobre escuro, 28 px de altura no cabeçalho e 24 no rodapé.

### Don't:
- **Don't** usar Primary sobre o degradê, Ink ou Violeta 900.
- **Don't** usar sombra, vidro, blur ou gradiente em texto; o banner de cookies é a única sombra e não serve de precedente.
- **Don't** usar ícones, glifos ou emoji como ícone; o que precisar de sinal se desenha em CSS, como o "+" do FAQ e as duas linhas do menu.
- **Don't** usar outra fonte além da Roboto fora das prévias dos clientes, nem outro peso além de 400, 500 e 700.
- **Don't** pôr kicker, eyebrow ou cor em títulos; a ênfase é a fita por baixo da frase-chave.
- **Don't** arredondar nem bordar células mescladas; bloco é bloco, raio 0.
- **Don't** fazer três cards iguais em fila nem abertura centralizada sobre degradê.
- **Don't** usar travessão (nem o longo nem o meia-risca) em texto visível.
- **Don't** mover a identidade das prévias (fontes, cores, botões dos clientes) para o resto do site; elas não pertencem a este sistema.
