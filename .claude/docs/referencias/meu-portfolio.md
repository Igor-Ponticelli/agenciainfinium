# O portfólio do Igor como referência de método

`~/Projects/meu-portfolio` (repositório `Igor-Ponticelli/meu-portfolio`), construído em outubro
de 2026 com o mesmo processo que este repositório repete. Este arquivo diz **o que** vale
reaproveitar de lá, **onde** está e **como** adaptar. Registrado em 30/10/2026.

Regra: reaproveitar o método e o código genérico; nunca a pele. O portfólio é escuro quente com
Ametista, Bricolage e Plex Mono, e um Bloco como cursor. A Infinium é clara, violeta, Roboto, e
o material dela ainda vai ser escolhido ([direcao-visual.md](../direcao-visual.md)).

## 1. O método (documentação antes do código)

| no portfólio | aqui | o que é |
|---|---|---|
| `AGENTS.md` + `CLAUDE.md` | iguais | instruções para qualquer agente; o CLAUDE.md só importa o AGENTS.md |
| `PRODUCT.md` | igual | contexto de produto no formato da impeccable |
| `TODO.md` | igual | cada etapa como um prompt completo ("faça o TODO N"), com Leia antes, Passos, Não fazer, Pronto quando, Commits sugeridos, Precisa do Igor, Notas |
| `COMMITS.md` | igual | Conventional Commits em português, sem coautoria |
| `.claude/docs/processo.md` | adaptado | roteiro, precedência, conflitos resolvidos |
| `.claude/docs/direcao-visual.md` | adaptado | direção fixada pelo usuário, com tokens |
| `.claude/docs/arquitetura.md` | adaptado | stack, SEO, prévias |
| `.claude/docs/conteudo.md` | adaptado | mapa do site, seções, CTAs, o que nunca entra |
| `.claude/docs/projetos/` | copiado | fatos e tokens de cada site de cliente |
| `.claude/docs/referencias/` | copiado | análise de três sites de referência |
| `.claude/skills/`, `.claude/agents/`, `settings.local.json` | copiados | impeccable 4.6.0 (motor 0.1.15), taste-skill, humanize-text, fixing-metadata, agentes da impeccable e o hook do detector |
| `.impeccable/surfaces/*.md` | gerado no TODO 3 | surface brief com o contrato de direção, escrito por `impeccable surface-brief write` |

O que o portfólio tem e aqui não entra: `Igor_Ponticelli_Perfil.md` (dados pessoais), i18n com
EN, o workflow mensal de rebuild (só fazia sentido para "anos de carreira" calculados no build).

## 2. O código genérico que pode ser copiado como está

Todos em `~/Projects/meu-portfolio/src/`. São independentes da pele do portfólio.

- **`scripts/motor.ts`**: um único loop de `requestAnimationFrame` baseado em tempo. Tarefas
  recebem `dt` em segundos e devolvem `true` enquanto precisam de quadros; sem tarefas, o loop
  dorme até `acordar()`. `aproximar()` é a suavização exponencial independente da taxa de
  quadros. Copiar inteiro.
- **`scripts/rolagem.ts`**: Lenis movido pelo motor (`autoRaf: false`), âncoras da própria
  página com viagem de 1,6 s e curva própria, foco levado junto, reinício em `astro:after-swap`,
  desligado com movimento reduzido. Copiar inteiro se a rolagem suave ficar.
- **`scripts/menu.ts`**: menu do celular com `aria-expanded`, `inert` no resto da página,
  Escape fecha, fecha ao navegar e ao alargar a tela. Copiar inteiro.
- **`scripts/previas.ts`**: ativa cada prévia quando chega perto da tela (`IntersectionObserver`
  com `rootMargin` de 600 px), liga a fonte do projeto e carrega o script de interação por
  `import.meta.glob`. Copiar inteiro.
- **`components/previas/*.astro` e `scripts/previas/*.ts`**: as prévias de Brisa Café,
  Linetex e Lumaj. São a reprodução do site do cliente, então podem ser copiadas e ajustadas
  (rótulos de ícone no idioma, `--u` por container, layout largo de 1100 px e estreito de 400
  px). As fontes com subset estão em `src/assets/fontes-previas/` com o script
  `scripts/subsetar-fontes-previas.py`.
- **`styles/base.css`**: reset, foco visível, `::selection`, scrollbar, `.pular-conteudo`,
  `.visualmente-oculto`, `prefers-reduced-motion`. Copiar e trocar `color-scheme` para `light`
  e os tokens de cor.
- **`layouts/Base.astro`**: estrutura do layout com `<ClientRouter />`, preload da fonte
  display via `fontData`, classe `js` no `<html>`, link de pular conteúdo, `<main
  id="conteudo" tabindex="-1">`. Copiar e tirar a faixa de idioma.
- **`components/Seo.astro`**: head completo (canonical, Open Graph, Twitter, theme-color,
  JSON-LD). Copiar e trocar `Person` por `Organization`, tirar hreflang.
- **`astro.config.ts`**: fontes locais pela API `fonts` do Astro 7 (`fontProviders.local()`)
  com os arquivos do Fontsource e `unicodeRange` por subset, sitemap, `trailingSlash: 'always'`.
  Adaptar para Roboto e um idioma só.
- **`i18n/rotas.ts` e `i18n/textos.ts`**: tabela de rotas e textos de interface. Manter a
  organização com um idioma só; se EN entrar um dia, o resto já está pronto lá.

## 3. A troca de página (o que o Igor mais gostou)

Está em `scripts/bloco.ts`, seção "Troca de página", e em `components/Bloco.astro`. O mecanismo
é genérico; a pele (o quadrado Ametista saindo do logo) é do portfólio.

Como funciona:
1. Uma camada fixa com `transition:persist` no layout, `aria-hidden`, guarda a cortina e um
   `<p>` para o título da próxima página.
2. No evento `astro:before-preparation` do ClientRouter, o script envolve o `e.loader`: roda
   em paralelo o carregamento da página nova e a animação de **cobrir** (`clip-path: inset()`
   saindo do retângulo do logo até `inset(0)`, 460 ms, `cubic-bezier(0.65, 0, 0.35, 1)`).
   Depois lê o `h1` de `e.newDocument` e mostra o título na cortina (260 ms).
3. Em `astro:after-swap`, limpa estados e refaz as medidas.
4. Em `astro:page-load`, **descobre**: espera 160 ms, esmaece o título e anima o `clip-path`
   de volta até o retângulo do logo (460 ms). Total perto de 1,6 s.
5. Com `prefers-reduced-motion`, o `loader` vira só um fade do `<main>` (150 ms para cada lado).

Para a Infinium: mesma mecânica com outra cortina (o degradê da marca é o candidato natural),
título em branco sobre o degradê, e durações menores para ficar abaixo de 1,2 s (por exemplo,
cobrir 320 ms, título 200 ms, pausa 100 ms, descobrir 320 ms).

## 4. O cursor e o hover (o que é do Bloco e o que é método)

`scripts/bloco.ts` faz, num único `passo(dt)` do motor:
- **cursor**: segue o ponteiro com `aproximar()`, só em `(pointer: fine) and
  (prefers-reduced-motion: no-preference)`; `cursor: none` só nessa condição;
- **marca-texto**: em `pointerover` sobre `[data-bloco-alvo]`, o quadrado cresce até a caixa do
  elemento (com folga proporcional ao tamanho da fonte) e o elemento ganha a classe
  `bloco-sobre`, que troca a cor do texto. Rapidez diferente por estado (22 no alvo, 16 no
  ponteiro, 12 em repouso, 9 na intro);
- **contorno** sobre `[data-bloco-obra]` (as prévias): vira uma moldura fina e libera o cursor
  nativo dentro;
- **toque**: em `pointerdown` de toque, o marca-texto aparece já no lugar por 450 ms, sem cursor;
- **repouso**: pousa na âncora (`[data-bloco-ancora="titulo"]` se visível, senão `"logo"`);
- **intro**: só na primeira visita da sessão (`sessionStorage`), 900 ms, pulável com clique ou
  tecla;
- **dormir**: o passo devolve `false` quando parou e nada depende da rolagem, e o loop dorme.

Para a Infinium: a decisão do material está aberta. O que é método e vale sempre: um elemento
de marca numa camada persistente, estados por `data-*` nos alvos, medidas em cache refeitas no
resize, no `document.fonts.ready` e no `after-swap`, e o passo único no motor. O que é Bloco e
não deve ser copiado: o quadrado como cursor, a intro e o marca-texto com troca de cor do texto.

## 5. A composição em galeria

A home do portfólio mostra as prévias como obras numa parede, em tamanhos e alturas diferentes,
com a ficha técnica ao lado (`components/Obra.astro`, `components/Ficha.astro`,
`components/paginas/Inicio.astro`). É a resposta ao craft floor contra "cards iguais em fila".
A ideia estrutural serve para a seção de projetos da Infinium; a pele (molduras de filete sobre
escuro, ficha em mono) não.

## 6. Outros detalhes que valem

- `data-sugerir-en` e a faixa de idioma: só se EN entrar.
- `color-scheme: light` nos controles nativos dentro das prévias de sites claros (lá o portfólio
  é escuro; aqui o site é claro, então provavelmente nem precisa).
- O hook da impeccable em `settings.local.json` roda o detector a cada Edit/Write em arquivo de
  UI e um passe completo no Stop. Já copiado.
- O binário da impeccable (`.claude/skills/impeccable/scripts/bin/`) fica fora do git e é
  baixado por máquina; foi copiado para funcionar já.

## 7. O que ficou documentado nos TODOs do portfólio e vale ler

- TODO 1: ordem exata para montar a base técnica.
- TODO 3: como rodar `shape` e `concept-seed` com direção fixada, e como gravar o contrato.
- TODO 4: ordem do build e os problemas que apareceram (medidas depois do `after-swap`,
  classes do `<html>` trocadas pelo ClientRouter, Lenis guardando estado no `<html>`).
- TODO 5, Notas: peso real de cada prévia, decisões de fotos, bugs dos sites originais.
