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
- **31/10/2026, a grade sem letras nem números.** O Igor não quis as letras de coluna (A a L)
  nem os números de linha. A planilha fica só com as linhas, as células e a fita; a cabeça de
  linha saiu de todas as grades e cada célula andou uma coluna para a esquerda.
- **31/10/2026, fotos.** O Igor sentiu falta de imagem. Entram fotos do Unsplash, escolhidas uma
  a uma (registro e créditos em [fotos.md](fotos.md)), sempre como célula mesclada da planilha:
  à direita da abertura da home e das cabeças de `/sites/`, `/sistemas/` e do Raio-X, na cena
  do problema, no alto dos dois blocos de serviço e como capa de cada post (lista, home e
  cabeça do post). Sobre o degradê, a foto fica em `mix-blend-mode: luminosity`: só a luz dela,
  nas cores da marca. Sobre o claro, cor natural. Nunca pessoa posando como equipe ou cliente.
- **31/10/2026, seções como bandas.** O Igor achou a página "muito um blog" e pediu separação
  de seção no espírito de Apple e Microsoft (separação, não estética). Cada seção vira uma
  banda de largura inteira (`Secao.astro`) com fundo próprio e respiro, alternando Body com a
  grade, White e o degradê; a folha da planilha fica fechada dentro dela, como um retângulo.
- **31/10/2026, cartões.** O Igor pediu mais cards. Entram como células mescladas em grade
  (`.cartoes`, `Cartao.astro`): três por linha no desktop, duas no tablet, uma no celular,
  separadas por 1 px da própria grade, sem sombra nem canto. A regra antiga do contrato ("nunca
  três cards iguais em fila") foi substituída por esta decisão: os cartões existem, mas são
  células, e cada um carrega um ícone.
- **31/10/2026, ícones desenhados pela fita.** Ícones de traço próprios (`src/data/icones.ts`,
  `Icone.astro`), 24 x 24, traço de 2 px em `--color-fita`. A fita desenha cada forma conforme
  a rolagem (`stroke-dashoffset` com `animation-timeline: view()`), e um brilho discreto na cor
  da fita acende por trás quando o traço fecha. O Igor pediu brilho de propósito ("chama a
  atenção"): é a única luz do site além do holofote, e fica nos ícones. Com movimento reduzido
  ou sem suporte, o ícone aparece pronto e aceso.
- **31/10/2026, holofote.** Pedido de "um detalhe em algum fundo, um efeito com mouse", a partir
  do cursor spotlight do 21st.dev. Sobre uma folha, uma luz na cor da fita segue o ponteiro e
  acende as linhas da grade perto dele; e a fita contorna a célula sob o ponteiro, como o cursor
  de seleção da planilha (`holofote.ts`, um passo do motor, só `transform`). Só com ponteiro
  fino; nada no toque, nada com movimento reduzido, nada sem JS.
- **31/10/2026, mais tarde: a grade some e cada seção tem pelo menos 85svh.** Vendo o site, o
  Igor voltou atrás nos "quadradinhos": "Se eu falei que gostei desses quadradinhos, eu não
  gostei mais. Pode remover." Saem as linhas verticais da planilha, as bordas da folha, as
  células que se fundiam no bloco de sistemas e a célula ativa do holofote; fica só a luz. As
  doze colunas continuam como layout invisível; o filete entre linhas fica só nas listas (passos,
  posts, perguntas, a cena); a seleção da cena vira a fita por baixo da linha. E "sobre cada
  seção, queria que ocupasse pelo menos 85vh, acho mais elegante": toda banda tem
  `min-block-size: 85svh` com o conteúdo centrado na vertical.
- **05/11/2026, a direção "o infinito".** O Igor viu o site pronto e não gostou. Entraram três
  versões de estudo (a vitrine, o painel e o infinito; [versoes.md](versoes.md)) e ele escolheu
  juntar: a base é a terceira (o violeta profundo da marca como fundo, a frase gigante com o
  símbolo se desenhando, a faixa rolante, as etapas com a cabeça fixa, o "Vamos conversar?"
  gigante e o rodapé no violeta mais profundo), com o carrossel de projetos em janelas e o
  rodapé denso da primeira, e o par imagem e texto e as faixas claras para leitura da segunda.
  Pedidos dele: menos texto ("todo o site tem que ser tipo uma imersão"), uma frase por tópico e
  **ícones animados em todo tópico**, nada do efeito do mouse ("a animação antiga do mouse era
  muito ruim, nem ter isso") e rolagem suave sem parecer sem fim. Consequências: o site passa a
  ser **escuro por padrão**, com o claro entrando por faixa (`.claro` troca os tokens
  semânticos); sobre o escuro, só White e Lilás, Primary nunca; saem a planilha, a grade, o
  holofote e o laço da conexão em SVG; ficam a fita como traço dos ícones (desenhados pela
  rolagem, com o brilho), a cortina da troca de página (encurtada para 260, 160, 60 e 280 ms,
  porque as páginas ficaram mais pesadas) e o laço das etapas; o Lenis fica com `lerp` 0,22. O registro do sistema construído está em `DESIGN.md`.

