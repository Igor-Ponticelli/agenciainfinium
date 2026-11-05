---
name: Agência Infinium
description: O infinito. Violeta profundo com faixas claras, tipo em caixa grande, um tópico por ideia com o ícone desenhado pela fita.
colors:
  primary: "#39135f"
  primary-hover: "#280d40"
  violet-900: "#200a34"
  deep: "#16081f"
  lilac: "#e9d5fe"
  violet-300: "#b292e3"
  body: "#f1eff4"
  white: "#ffffff"
  ink: "#211f26"
  text: "#625f68"
  line: "#d9d6de"
typography:
  hero:
    fontFamily: "Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(3rem, 1rem + 9.4vw, 9rem)"
    fontWeight: 700
    lineHeight: 0.95
    letterSpacing: "-0.04em"
  giant:
    fontFamily: "Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(3.5rem, 1rem + 12vw, 11rem)"
    fontWeight: 700
    lineHeight: 0.95
    letterSpacing: "-0.045em"
  headline:
    fontFamily: "Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.5rem, 1.5rem + 4.6vw, 5.5rem)"
    fontWeight: 700
    lineHeight: 0.98
    letterSpacing: "-0.04em"
  title:
    fontFamily: "Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2rem, 1.3rem + 3vw, 3.75rem)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.03em"
  subtitle:
    fontFamily: "Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: "normal"
  body:
    fontFamily: "Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  small:
    fontFamily: "Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  label:
    fontFamily: "Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.08em"
rounded:
  s: "0.5rem"
  m: "1rem"
  l: "1.5rem"
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
  faixa: "clamp(4rem, 9vw, 7.5rem)"
components:
  button-dark:
    backgroundColor: "{colors.lilac}"
    textColor: "{colors.violet-900}"
    typography: "{typography.body}"
    rounded: "{rounded.full}"
    padding: "0.85rem 1.75rem"
    height: "3.25rem"
  button-dark-hover:
    backgroundColor: "{colors.white}"
    textColor: "{colors.violet-900}"
  button-light:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.white}"
    typography: "{typography.body}"
    rounded: "{rounded.full}"
    padding: "0.85rem 1.75rem"
    height: "3.25rem"
  button-light-hover:
    backgroundColor: "{colors.primary-hover}"
    textColor: "{colors.white}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.white}"
    rounded: "{rounded.full}"
    padding: "0.85rem 1.75rem"
    height: "3.25rem"
  button-large:
    backgroundColor: "{colors.lilac}"
    textColor: "{colors.violet-900}"
    typography: "{typography.subtitle}"
    rounded: "{rounded.full}"
    padding: "0.85rem 2.25rem"
    height: "4rem"
  topic-dark:
    backgroundColor: "rgb(255 255 255 / 0.045)"
    textColor: "rgb(255 255 255 / 0.78)"
    rounded: "{rounded.m}"
    padding: "1.5rem"
  topic-light:
    backgroundColor: "{colors.white}"
    textColor: "{colors.text}"
    rounded: "{rounded.m}"
    padding: "1.5rem"
  input:
    backgroundColor: "{colors.body}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.s}"
    padding: "0.75rem 1rem"
    height: "3rem"
  chip-option:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    padding: "0.5rem 1rem"
    height: "2.75rem"
  chip-option-selected:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.white}"
    rounded: "{rounded.full}"
  vitrine:
    backgroundColor: "{colors.white}"
    textColor: "{colors.text}"
    rounded: "{rounded.m}"
  cookie-banner:
    backgroundColor: "{colors.white}"
    textColor: "{colors.text}"
    typography: "{typography.small}"
    rounded: "{rounded.m}"
    padding: "1.5rem"
    width: "26rem"
---

# Design System: Agência Infinium

Registrado em 05/11/2026 a partir do site construído (`src/styles/tokens.css`, `src/styles/site.css`, `src/styles/base.css`, componentes em `src/components/`, scripts em `src/scripts/`). Os tokens do frontmatter são normativos; a prosa explica onde e por que cada um aparece. A identidade de marca (paleta, Roboto, logo pelo arquivo) vem de `.claude/docs/identidade/MARCA.md` e não se discute aqui. A direção anterior ("a planilha que vira sistema", 30 e 31/10/2026) foi substituída por decisão do Igor em 05/11/2026 (`.claude/docs/direcao-visual.md`, seção 5).

## Overview

**Creative North Star: "O infinito"**

A Infinium como estúdio: o site é escuro, no violeta profundo da marca, com o tipo em caixa grande e o símbolo (a fita de Möbius) como motivo que se desenha. Cada ideia é um tópico com o seu ícone, nunca um parágrafo; o que precisa ser lido com calma (serviços, resultados, blog, o case, o formulário) vai para faixas claras no Body da identidade. A prova é a prévia real dos sites dos clientes, em janelas de navegador numa galeria. Toda página termina em "Vamos conversar?" gigante sobre o degradê e no rodapé no violeta mais profundo.

**Key Characteristics:**
- Escuro por padrão (Violeta 900), com faixas claras (Body) para leitura; o contexto `.claro` troca os tokens semânticos
- Sobre o escuro, só White e Lilás; Primary só aparece sobre o claro
- Só Roboto, em 400, 500 e 700; hierarquia por escala (da abertura gigante ao rótulo) e tracking negativo nos títulos
- Um tópico por ideia, com o ícone desenhado pela fita conforme a rolagem e um brilho atrás
- Imagem de um lado e texto do outro; fotos do Unsplash, na luz violeta sobre o escuro e em cor natural sobre o claro
- Movimento ligado à rolagem e ao hover: o símbolo que se desenha, a faixa rolante, a revelação por faixa, a cabeça fixa das etapas, a prévia que cresce; nada segue o ponteiro
- Rolagem suave contida (Lenis, `lerp` 0,22) e a cortina da troca de página abaixo de 1,2 s

## Colors

### Contexto escuro (padrão)
- **Fundo** `violet-900` (`#200a34`); **profundo** `#16081f` nas faixas das vitrines e no rodapé; o **degradê da marca** (135°, Violeta 700 a 900) na conexão e na chamada final; a abertura e as cabeças de página usam um degradê a 170° de Violeta 700 ao fundo.
- **Texto** branco a 78 %; **títulos** brancos; **apagado** Lilás a 62 % (apoios, datas, textos de tópico); **linhas** Lilás a 18 %; **superfície** branco a 4,5 % (tópicos, cartões), 8 % quando em destaque.
- **Acento** Lilás (`#e9d5fe`): botões (com texto Violeta 900), fita dos links, ícones, foco, seleção, números das etapas.

### Contexto claro (`.claro`)
- **Fundo** Body; **texto** Text; **títulos** Ink; **linhas** Line; **superfície** White.
- **Acento** Primary (`#39135f`): botões (texto branco, hover Violeta 800), fita dos links, ícones, foco, seleção.

### Named Rules
**A Regra do Primary Nunca Sobre Escuro.** Vale desde a identidade: sobre o violeta e o degradê, o acento é o Lilás e o texto é branco. Nenhum componente usa uma cor fixa: todos leem `--cor-acento`, `--cor-texto`, `--cor-titulo`, `--cor-linha`, `--cor-superficie`, `--botao-fundo` e `--botao-texto`, e a classe `.claro` troca os sete de uma vez.

**A Regra do Tópico.** Uma ideia é um tópico (`Topicos.astro`): ícone, título e, se precisar, uma linha. Parágrafo só em texto corrido (post, case, privacidade) e em no máximo duas linhas de apoio por seção.

## Typography

**Font:** Roboto variável (self-hosted pelo Astro, subsets latin e latin-ext), fallback Helvetica Neue, Arial. Só 400, 500 e 700.

### Hierarchy
- **Hero** (700, `clamp(3rem, 1rem + 9.4vw, 9rem)`, 0,95, -4 %): só a assinatura na abertura da home.
- **Gigante** (700, `clamp(3.5rem, 1rem + 12vw, 11rem)`, 0,95, -4,5 %): o título da chamada final.
- **Headline** (700, `clamp(2.5rem, 1.5rem + 4.6vw, 5.5rem)`, 0,98, -4 %): título das cabeças de página e da cortina.
- **Title** (700, `clamp(2rem, 1.3rem + 3vw, 3.75rem)`, 1,02, -3 %): título de seção; nas duplas, até 4rem.
- **Subtitle** (500, 20 px, 1,3): a frase-chave em Lilás ou Primary, o apoio das seções e das cabeças (400, apagado).
- **Body** (400, 17 px, 1,5): texto corrido, medida de 65ch. **Small** (15 px): tópicos, fichas, rodapé. **Label** (500, 13 px, +8 %, caixa-alta): rótulos de seção, títulos do rodapé, tipo e ano dos projetos.

## Layout

- **Faixas** (`Secao.astro`, `.faixa`): largura inteira, fundo por tom (escuro, profundo, degradê, claro), respiro `clamp(4rem, 9vw, 7.5rem)`; dentro, o **miolo** `min(100% - 2 * gutter, 80rem)` (texto corrido em 60rem).
- **Cabeça de página** (`Cabeca.astro`): título, frase, uma linha e as ações à esquerda; foto na luz violeta à direita (1,15fr e 1fr) quando houver.
- **Abertura da home**: uma tela (`100svh` menos o cabeçalho), o título em 11ch com o símbolo atrás à direita, o apoio na coluna da direita no desktop; a faixa rolante fecha a abertura.
- **Dupla** (`Dupla.astro`): duas colunas iguais a partir de 64rem, foto no lado escolhido, uma dupla por serviço.
- **Tópicos**: grade `auto-fit` de 14rem (10rem no celular, dois por linha), ou colunas fixas `topicos-2` a `topicos-5`; compactos em linha para listas curtas.
- **Galeria** (`Galeria.astro`): trilho horizontal com encaixe, janelas de `min(84vw, 44rem)`, recuo alinhado ao miolo; **obras** em linhas largas (7fr e 4fr, alternando o lado) na página de projetos.
- **Passos** (`Passos.astro`): cabeça fixa (1fr) e lista (1,6fr), cada etapa com número, ícone e texto, filetes entre elas.
- **Cabeçalho** fixo de 64 px (72 no desktop), quase transparente com blur no desktop; menu de tela cheia no celular.
- Breakpoints: 48rem e 64rem; gutter `clamp(1rem, 4vw, 2.5rem)`.

## Elevation & Depth

Profundidade tonal: três escuros (profundo, fundo, degradê) e o claro. As únicas sombras são as das vitrines (janelas sobre o escuro), da tabela de antes e depois, do botão flutuante e do banner de cookies. Hover eleva 2 px e acende a borda no acento; nada de vidro. Os brilhos ficam nos ícones (halo e `drop-shadow` na cor do acento).

## Shapes

Pílulas nos controles (`--radius-full`): botões, opções do formulário, o botão flutuante. Superfícies com canto largo: tópicos e cartões 1rem, fotos e formulário 1,5rem, vitrines 1rem, campos 0,5rem. A moldura de celular tem 2,4rem. Filetes de 1 px em `--cor-linha`; a fita dos links é 1 px; a dos ícones, 2 px. Tracejado em `--cor-acento` marca o que está pendente.

## Components

- **Botões**: pílula de 3,25rem (4rem na grande), peso 500, sobe 1 px no hover; contorno com borda em `--cor-linha`. Uma ação principal por bloco, a secundária é um `.link-fita`.
- **Link com fita**: a linha de 1 px se desenha da esquerda para a direita no hover e no foco; a seta anda 3 px.
- **Ícone** (`Icone.astro`, `src/data/icones.ts`): 28 ícones de traço próprios, 24 x 24, `pathLength="1"`; a fita desenha cada forma com `animation-timeline: view()` (cover 0 a 30 %, formas seguintes defasadas) e o halo acende atrás; sem suporte ou com movimento reduzido, aparece pronto.
- **Tópico**: superfície com borda, ícone de 3rem, título de 20 px e uma linha apagada; compacto: 2,25rem de ícone e título em 17 px.
- **Vitrine** (`Vitrine.astro`): a prévia real do site num palco de 1100 px (ou 400 px no celular) escalado para a moldura (`scale(tan(atan2(100cqi, base)))`), em janela de navegador (barra com três pontos e o domínio), celular ou nua; só os controles da prévia recebem o ponteiro.
- **Galeria**: botões redondos de anterior e próximo (`galeria.ts`), escondidos sem JS.
- **Faixa rolante** (`Rolante.astro`): itens separados pelo símbolo micro, animação linear de 48 s, pausa no hover e com movimento reduzido.
- **Antes e depois**: tabela num cartão branco com a coluna "depois" em Lilás, sempre sobre o degradê.
- **Perguntas** (`Faq.astro`): `details` com o mais em dois traços no acento.
- **Formulário**: cartão branco sobre o claro, campos em Body com borda Line, opções em pílula (marcada em Primary), aviso de privacidade e, sem a chave do Web3Forms, o bloco pendente tracejado.
- **Chamada final** (`ChamadaFinal.astro`): sobre o degradê, título gigante, uma linha, botão grande em Lilás e os canais (e-mail e Instagram) ou uma secundária. Padrão de todas as páginas pelo `Base.astro`.
- **Rodapé**: no profundo, logo branco de 24 px, assinatura, três colunas com títulos em rótulo Lilás, linha da empresa.
- **Botão flutuante do WhatsApp**: pílula Lilás com sombra, só no celular e tablet, escondida enquanto a abertura da home está na tela e com o menu aberto.
- **Cortina** (`Fita.astro`, `fita.ts`): o degradê cobre a tela por `clip-path` em 320 ms, mostra o título da próxima página e descobre em 320 ms; fade curto com movimento reduzido.

## Do's and Don'ts

### Do:
- **Do** dizer uma coisa por tópico, com ícone, e deixar o parágrafo para o texto corrido.
- **Do** usar `Secao.astro` com um tom e alternar escuro e claro ao longo da página; leitura longa vai para o claro.
- **Do** ler só os tokens semânticos (`--cor-*`, `--botao-*`); nunca uma cor fixa num componente.
- **Do** pôr a prévia real do site numa `Vitrine` sempre que o projeto aparecer.
- **Do** animar só `transform`, `opacity`, `clip-path` e o traço dos SVGs, por rolagem ou no loop do `motor.ts`, e parar tudo com `prefers-reduced-motion`.
- **Do** manter o logo pelo arquivo SVG (branco sobre o escuro), 28 px no cabeçalho e 24 no rodapé.

### Don't:
- **Don't** usar Primary sobre o escuro, nem Lilás como botão sobre o claro.
- **Don't** pôr nada que siga o ponteiro (o holofote saiu a pedido do Igor), vidro, partículas, degradê em texto ou slider.
- **Don't** usar ícone de biblioteca, emoji ou glifo; o que precisar de sinal se desenha em `icones.ts` ou em CSS.
- **Don't** escrever mais de duas linhas de apoio numa seção, nem três cards iguais sem ícone.
- **Don't** usar outra fonte além da Roboto fora das prévias, nem travessão em texto visível.
- **Don't** inventar número, depoimento, prazo ou preço.
