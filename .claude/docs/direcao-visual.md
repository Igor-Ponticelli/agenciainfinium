# Direção visual

Diferente do portfólio, onde a direção saiu de um laboratório de estilo, aqui a maior parte já
vem **fixada pela identidade da empresa** (pacote v2, outubro de 2026, em
[identidade/](identidade/README.md)). Este arquivo separa o que está decidido do que ainda falta,
e registra a decisão quando ela vier.

## 1. Fixado pela identidade (não se discute)

| | escolha |
|---|---|
| Logo e símbolo | arquivos prontos em `identidade/assets/`. Nome sempre pelo arquivo, nunca redigitado |
| Primary | Violeta 700 `#39135F` (hover `#280D40`) |
| Apoio claro | Lilás `#E9D5FE` |
| Base clara | fundo Body `#F1EFF4`, superfícies White, texto `#625F68`, títulos Ink `#211F26`, bordas Line `#D9D6DE` |
| Base escura | Ink `#211F26` ou o degradê 135° de `#39135F` a `#200A34`. Sobre escuro, só White e Lilás |
| Escala violeta | 50 a 900, em `identidade/tokens/tokens.css` |
| Tipografia | só **Roboto**: display 700 56/1,0 com -2,5%; título 700 32/1,15; subtítulo 500 20/1,3; texto 400 16/1,6; rótulo 500 12/1,4 em caixa-alta com +8% |
| Contraste | branco sobre Primary 14,7:1; Text sobre Body 5,5:1. **Primary nunca sobre fundo escuro** |
| Regras | área de proteção, tamanho mínimo e os "não" de `identidade/MARCA.md` |

Consequências para o site:
- **O site é claro** (fundo Body), e o escuro entra por seção, no degradê da marca, onde a
  composição pedir (abertura, chamada final, capas). Sem seletor de tema. `color-scheme: light`.
- O acento é o Primary e fica num token único (`--color-accent`), como no portfólio, mas a
  paleta inteira entra como tokens, porque a identidade é maior que um acento só.
- Roboto no display e no texto. Para dados (etapas numeradas, números tabulares em tabelas de
  "antes e depois"), `font-variant-numeric: tabular-nums` na própria Roboto. Não entra mono.

## 2. Tokens iniciais

Vêm de `identidade/tokens/tokens.css`, renomeados para o padrão do código:

```css
:root {
  --color-bg: #f1eff4;        /* Body */
  --color-surface: #ffffff;
  --color-text: #625f68;      /* Text, 5,5:1 sobre o fundo */
  --color-heading: #211f26;   /* Ink */
  --color-line: #d9d6de;
  --color-accent: #39135f;    /* Primary */
  --color-accent-hover: #280d40;
  --color-on-accent: #ffffff; /* 14,7:1 */
  --color-lilac: #e9d5fe;
  --color-dark: #211f26;      /* seções escuras */
  --gradient-brand: linear-gradient(135deg, #39135f 0%, #200a34 100%);

  --font-sans: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
```

A escala violeta completa (`--violet-50` a `--violet-900`) entra no mesmo arquivo.

## 3. O que falta decidir: o material e o movimento

No portfólio, um único material (o Bloco) é cursor, marca-texto, logo e troca de página, e isso
é o que faz o site parecer desenhado e não montado. A Infinium precisa do seu próprio material,
derivado da identidade e não copiado do portfólio.

Candidatos para o Igor escolher no TODO 3 (brief da home), com o `/impeccable shape` e o
"Design Read" da taste-skill. Nenhum está decidido:

1. **A fita.** O símbolo é uma fita dupla que troca de lado no cruzamento (Möbius). A fita
   vira o material: um traço em Primary que sublinha links no hover, desenha as divisórias e,
   na troca de página, cruza a tela e vira o degradê que cobre tudo. Cursor nativo mantido.
   É o candidato mais fiel à marca e o mais barato de executar bem.
2. **O degradê como cortina.** Sem cursor customizado. O hover é só cor (Primary → hover) e a
   troca de página é o degradê da marca crescendo a partir do símbolo no cabeçalho, com o título
   da próxima página em branco, exatamente o mecanismo da cortina do portfólio com outra pele.
3. **O símbolo como cursor.** O símbolo micro segue o ponteiro em `pointer: fine`. Fica fora
   por padrão: a taste-skill proíbe cursor customizado, e aqui o público é dono de empresa, não
   designer. Só entra se o Igor pedir.

Movimento: **moderado**, mais curto que o "calmo" do portfólio. Troca de página abaixo de 1,2 s.
Dials de partida para a taste-skill: VARIANCE 5, MOTION 4, DENSITY 4.

## 4. Requisitos que já ficam definidos

Iguais aos do portfólio, porque são regras de qualidade e não de estilo:
- **Toque (`pointer: coarse`)**: nenhum efeito de cursor. O hover vira estado de toque curto.
- **`prefers-reduced-motion`**: nada segue o ponteiro, o hover vira só troca de cor e a troca de
  página vira um fade curto.
- **Sem JS**: o conteúdo aparece inteiro e o site é navegável com links normais.
- O foco do teclado tem estilo visível próprio (anel em Primary sobre claro, em Lilás sobre
  escuro) e não depende do material.
- Animar só `transform`, `opacity` e `clip-path`, num único loop de `requestAnimationFrame`
  baseado em tempo.

## 5. Registro das decisões

Formato: data, o que foi decidido, por quê.

- **30/10/2026, material: a fita** (candidato 1). Um traço contínuo derivado do símbolo, em
  Primary sobre claro e em Lilás sobre escuro. Sai do símbolo no cabeçalho e vira a régua do
  cabeçalho; no hover, sublinha links e contorna botões, desenhando-se como traço (não como
  fade); sobre uma prévia, vira moldura fina e libera o cursor nativo dentro; na troca de
  página, cruza a tela e vira o degradê da marca com o título da próxima página em branco.
  Cursor nativo sempre. Por quê: é o próprio símbolo (a fita que troca de lado), funciona no
  toque e custa pouco para executar bem. O símbolo como cursor ficou fora.
- **30/10/2026, movimento: moderado.** Troca de página abaixo de 1,2 s (cobrir 320 ms, título
  200 ms, pausa 100 ms, descobrir 320 ms). Um loop só de `requestAnimationFrame`. Com movimento
  reduzido, nada se desenha nem percorre, e a troca vira fade curto. Dials: VARIANCE 5, MOTION 4,
  DENSITY 4.
- **30/10/2026, direção estrutural da home: "planilha que vira sistema"**, a direção que o
  sorteio da impeccable atribuiu (posição 7 da lista própria; o Igor escolheu a sorteada em vez
  da "linha contínua", posição 1). A home nasce como a planilha que o cliente usa hoje (grade de
  células, colunas com letra, linhas numeradas) e, conforme desce, as células se fundem num
  bloco só: o sistema. A fita é o cursor de seleção da planilha. As prévias dos sites ficam fora
  da grade. Contrato completo em `.impeccable/surfaces/src-pages-index-astro.md`.
- **30/10/2026, abertura escura.** A primeira tela da home é inteira no degradê da marca: logo
  branco, assinatura em branco, botão em Lilás com texto Ink. O claro começa na segunda tela e
  o degradê volta na chamada final e nas capas de projeto. Primary nunca sobre o escuro. As
  páginas de serviço abrem claras: o escuro é assinatura da home e da chamada final.
