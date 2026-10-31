---
version: 1
slug: "src-pages-index-astro"
primary_target: "src/pages/index.astro"
related_targets: []
---

# Home (`/`)

Modo: **Persuade**. A página precisa convencer um dono de empresa e levar ao WhatsApp.

## Brief

- **Quem chega:** donos e gestores de empresas pequenas, a maioria no celular, vindos do
  Instagram, do WhatsApp ou de uma busca local; e quem já conversa com a Infinium e veio
  conferir. Querem entender em segundos o que a empresa faz, ver prova e falar com alguém.
- **O que precisam fazer:** reconhecer o próprio problema (não ser encontrado, ou trabalho
  manual entre ferramentas soltas), escolher o serviço e chamar no WhatsApp.
- **Prova:** as prévias em HTML/CSS reais dos três sites e do RetroDash, com a identidade de
  cada um. Nada de screenshot, número inventado, depoimento ou foto de banco.
- **Design Read (taste-skill):** lendo como site de empresa pequena de software para donos de
  empresa, claro e direto, fundo claro com o violeta da marca, apoiado num único material
  derivado do símbolo (a fita). Dials: VARIANCE 5, MOTION 4, DENSITY 4.
- **Conteúdo:** `src/i18n/paginas/inicio.ts`, a collection `projetos` e `textos.ts`. Ordem de
  conteudo.md, seção 2.
- **Decisões do Igor (30/10/2026):** material é a fita; direção é a sorteada ("planilha que
  vira sistema"); a primeira tela é escura, no degradê da marca.
- **Caminho de build:** code-led (sem geração de imagem nesta máquina). A ambição fica no FIRST
  VIEWPORT e na interação da fita.
- **Fora de escopo:** seletor de tema, cursor customizado, foto, números de resultado, preço,
  prazo, a palavra "grátis" fora da conversa inicial, qualquer dado fora de EMPRESA.md e
  SERVICOS.md.

## Direction contract

THESIS: a home começa como a planilha que a empresa usa hoje e termina como um sistema só. A
grade de células é o layout: colunas com letra, linhas numeradas, filetes finos. Conforme a
página desce, as células se mesclam em blocos inteiros, e no fim a grade some. As prévias dos
sites ficam fora da grade, porque são o que a Infinium entrega, não o que ela tira. Recusa o
site de agência padrão: abertura centralizada sobre degradê e três cards iguais em fila.

OWN-WORLD: fundo Body `#F1EFF4` com a grade em Line `#D9D6DE`; nas seções escuras, o degradê 135°
de Violeta 700 a 900 com a grade em Lilás a 12%. Letras de coluna e números de linha no estilo
rótulo (Roboto 500, 12 px, caixa-alta, +8%), em Text sobre claro e Lilás a 40% sobre escuro.
Roboto em tudo: display 700 com -2,5%, títulos 700 com -1,5%, texto 400 16/1,6. A fita é um
traço de 2 px (Primary sobre claro, Lilás sobre escuro): sai do símbolo no cabeçalho, vira a
régua do cabeçalho e, dentro da planilha, é o cursor de seleção (a linha ou a faixa de células
"selecionada"). Botões: fundo Primary com texto branco sobre claro; fundo Lilás com texto Ink
sobre escuro; cantos `--radius-m`. Sem sombra, sem vidro, sem gradiente em texto, sem ícone
decorativo. Células mescladas são blocos sólidos (White sobre Body, Violeta 900 sobre o degradê).
Nunca Primary sobre escuro.

STORY: o visitante reconhece a própria empresa na planilha da segunda tela, entende que a Infinium
faz o site que traz o cliente e o sistema que cuida dele depois, acredita porque mexe nas prévias
dos sites de verdade, e sai pelo WhatsApp sabendo qual dos dois serviços resolve o problema dele.

FIRST VIEWPORT: inteiro no degradê da marca. Cabeçalho de 72 px (56 no celular): logo horizontal
branco à esquerda; à direita Serviços (com Sites e Sistemas), Projetos, Blog, Contato e o botão
"Falar no WhatsApp" em Lilás. A fita sai da ponta direita do símbolo e corre até a borda direita
como régua do cabeçalho. Abaixo, a grade: doze colunas (quatro no celular) com as letras A a L
logo sob a régua, e os números de linha na margem esquerda, em Lilás apagado. A assinatura
"Sites e sistemas que trabalham por você" ocupa as linhas 3 a 7, em Roboto 700 branco,
`clamp(2.75rem, 8vw, 7.5rem)`, altura de linha 1, -2,5%, alinhada à esquerda nas colunas A a I.
A fita sublinha a última linha da assinatura como a linha selecionada da planilha e segue para
baixo. Na linha 9, a frase da abertura em Roboto 400, 20/1,3, branco a 80%, até 48ch, colunas A
a F. Na linha 11, "Falar no WhatsApp" (botão Lilás, texto Ink, a ação principal) e "Ver como
funciona" (link branco com a fita por baixo). Nos últimos 10% da tela aparecem as primeiras
células da cena do problema ("Pedidos", "WhatsApp"), ainda sobre o escuro, chamando para rolar.
No celular a assinatura ocupa quatro linhas e o botão tem a largura das colunas.

FORM: planilha que vira sistema, posição 7 da minha lista ordenada, atribuída pelo sorteio; o
pick (linha contínua, posição 1) e a desafiante competitiva (fita de proveniência) foram
oferecidos e o Igor escolheu a sorteada. Raises gravados a partir das desafiantes recusadas: a
fita se desenha como traço, não como fade (página de secessão); as prévias mostram um estado vivo
em repouso, uma por vez no celular (fileira de fliperama); as seções são faixas de largura
inteira com ritmo vertical constante (torre de argila); a primeira tela faz hierarquia só por
escala (espécime de fonte variável); as etapas de "como funciona" são um laço com uma luz que o
percorre (sequenciador). Linha mantida da desafiante competitiva: onde ainda não há case de
automação de cliente, a fita vira traço solto, e a página diz isso.
seed:5ee14c7614ee9655

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Composição e comportamento

- **Do escuro ao claro:** a grade atravessa a fronteira. As linhas da planilha continuam da
  abertura escura para a seção clara sem quebrar; só a cor muda (Lilás a 12% para Line).
- **Cena do problema (linha 12 em diante, clara):** a planilha de verdade. Quatro linhas com
  duas células cada: "Pedidos" | "WhatsApp", "Controle" | "Excel", "Tarefas" | "Trello",
  "Financeiro" | "ERP", em texto Ink, e os dois parágrafos de EMPRESA.md ao lado, nas colunas H
  a L. A fita é o cursor de seleção: desce uma linha por vez conforme a rolagem (animação
  dirigida por rolagem em CSS, sem `scroll` cru; com movimento reduzido, fica parada na primeira).
- **Dois serviços:** duas faixas de células mescladas, lado a lado e do mesmo tamanho (colunas A
  a F e G a L). "Sites" é um bloco White com título, frase-chave, texto e as duas ações.
  "Sistemas" é o mesmo bloco, mas as células em volta ainda aparecem se fundindo nele (as
  bordas internas somem): é a imagem da promessa. Nunca cards iguais em fila: são duas colunas
  da mesma planilha com peso igual, sem sombra nem borda arredondada.
- **Conexão:** uma linha só da planilha, de largura inteira, com o ciclo em uma frase e a fita
  fazendo o laço (sai pela direita e volta pela esquerda, como a fita de Möbius do símbolo).
- **Projetos, fora da grade:** as quatro prévias rompem as células. Brisa grande (colunas A a H,
  sobe uns 6vh sobre a seção anterior), Linetex média (colunas G a L, descida 12vh), Lumaj
  média (A a F), RetroDash grande (E a L). A ficha de cada uma fica dentro das células ao lado
  (tipo, ano, status, link), como dados da planilha. No celular, uma prévia por vez, largura
  inteira, ficha embaixo. Sobre a prévia, a fita vira moldura fina em Primary e libera o cursor
  nativo; no toque, a moldura aparece por 450 ms. Em repouso, cada prévia mostra um estado vivo
  (status aberto/fechado da Brisa, contador da Linetex, LIVE do RetroDash).
- **Como funciona:** cinco linhas numeradas da planilha (a numeração é a ordem real), e a fita
  percorre as cinco e volta à primeira, em laço, num passo do motor; parada com movimento
  reduzido.
- **Resultados e FAQ:** resultados em cinco células de uma linha só (desktop) ou cinco linhas
  (celular). FAQ em `details`, uma pergunta por linha, a fita sublinha a aberta.
- **Chamada final:** o degradê volta, e a grade some: nenhuma célula, só "Menos trabalho manual,
  mais crescimento" em branco, a frase e o botão Lilás. A planilha foi fechada.
- **Rodapé:** sobre o degradê, logo branco, e-mail, Instagram, WhatsApp, "Agência Infinium",
  CNPJ (se o Igor confirmar) e Privacidade.
- **Troca de página:** a fita cruza a tela a partir do símbolo e vira o degradê com o título da
  próxima página em branco; total abaixo de 1,2 s; fade curto com movimento reduzido.
- **Sem JS:** tudo visível, grade e textos incluídos; só a seleção da fita e o laço não existem.
- **Botão flutuante do WhatsApp** (celular e tablet, pedido do TODO 4: "botão de WhatsApp sempre
  visível"): pílula Lilás com texto Ink e borda Violeta 300, sem sombra, fixa no canto inferior
  direito; escondida enquanto a abertura escura está na tela (o cabeçalho já tem a ação) e com
  o menu aberto. No desktop não existe: o botão fica no cabeçalho. Registrado em 31/10/2026,
  depois da revisão de acabamento.

## Revisão de 31/10/2026 (pedidos do Igor depois de ver o site)

Vale sobre o contrato acima onde houver conflito:
- **Sem letras de coluna nem números de linha.** A grade é só linhas, células e fita.
- **Fotos** do Unsplash como células mescladas: à direita da abertura (tinta violeta, ocupa as
  três linhas; no celular fecha a primeira tela por baixo), na cena do problema (à direita da
  tabela, da altura das linhas e do texto), no alto dos dois blocos de serviço e como capa dos
  três posts. Créditos em `.claude/docs/fotos.md`.
- **Seções como bandas** (`Secao.astro`): cada seção é uma faixa de largura inteira com fundo
  próprio e respiro, alternando Body com a grade, White e o degradê (abertura, conexão, chamada
  final). A folha fica fechada dentro, como um retângulo. É a separação "tipo Apple ou
  Microsoft" que o Igor pediu, sem mudar o mundo.
- **Cartões** (`.cartoes`, `Cartao.astro`): células mescladas em grade, três por linha no desktop,
  separadas por 1 px da própria grade; sem sombra nem canto. Substituem os pares chave e valor
  dos resultados. A regra "nunca três cards iguais em fila" sai; o que não existe é card
  flutuante.
- **Ícones desenhados pela fita** (`Icone.astro`): traço de 2 px em `--color-fita`, 24 x 24, que
  se desenha conforme a rolagem, com um brilho na cor da fita por trás. Nos cartões e nas
  células da cena (a ferramenta de cada linha).
- **Holofote** (`holofote.ts`): sobre a folha, uma luz na cor da fita segue o ponteiro. Só
  ponteiro fino.
- **Mais tarde no mesmo dia:** "não gostei mais dos quadradinhos": saem as linhas verticais da
  grade, as bordas da folha e a célula ativa; o filete fica só nas listas; a seleção da cena vira
  a fita por baixo da linha. E toda seção passa a ter pelo menos 85svh, com o conteúdo centrado.
