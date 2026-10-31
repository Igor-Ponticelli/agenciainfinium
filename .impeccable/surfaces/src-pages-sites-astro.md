---
version: 1
slug: "src-pages-sites-astro"
primary_target: "src/pages/sites.astro"
related_targets: ["src/pages/sistemas.astro","src/pages/servicos.astro"]
---

# Página de serviço (`/sites/` e `/sistemas/`)

Modo: **Persuade**. Mesmo mundo da home (ver o brief da home); esta página é uma planilha só
daquele serviço. O hub `/servicos/` segue as mesmas regras, em versão curta.

## Brief

- **Quem chega:** quem clicou no serviço na home ou no menu, e quem buscou "criação de sites" ou
  "automação de processos" no Google.
- **O que precisa fazer:** entender o que o serviço entrega, como funciona e o que custa saber,
  ver a prova e chamar no WhatsApp com a mensagem daquele serviço.
- **Conteúdo:** `src/i18n/paginas/sites.ts` e `sistemas.ts`, a collection `projetos` filtrada
  por tipo e `textos.ts`. A tabela "antes e depois" e as etapas numeradas entram inteiras.
- **Fora de escopo:** abertura escura (é assinatura da home), preço, prazo, case de automação
  de cliente (não existe ainda; a página diz isso), tabela como imagem.

## Direction contract

THESIS: a página de serviço é a planilha daquele serviço, aberta na primeira linha. Clara desde
o topo. Em sistemas, a tabela "antes manual, depois automático" é o momento da direção: a coluna
"antes" tem células com borda, uma por linha; a coluna "depois" é uma célula mesclada só, um
bloco Primary com texto branco. Em sites, a lista "todo site inclui" são linhas da planilha com a
fita marcando cada uma, e a prova são os três sites fora da grade. Recusa a página de serviço
padrão: ícone, título, três benefícios em cards e um botão.

OWN-WORLD: o mesmo da home. Fundo Body com a grade em Line, letras de coluna e números de linha
no estilo rótulo, Roboto em tudo, fita de 2 px em Primary, botões Primary com texto branco,
células mescladas como blocos White ou Primary. O degradê só na chamada final e no rodapé, com
botão Lilás e texto branco.

STORY: o visitante lê o problema na própria linguagem, vê o que recebe e como funciona, confere
os sites (ou o RetroDash) funcionando e chama no WhatsApp já sabendo o que pedir.

FIRST VIEWPORT: cabeçalho igual ao da home, em versão clara (logo Primary, fita Primary). Grade
com as letras de coluna e os números de linha. O nome do serviço em Roboto 700, `clamp(2.5rem,
6vw, 5rem)`, -1,5%, nas linhas 2 a 3, colunas A a H; a frase-chave ("Seja encontrado. Seja
escolhido." ou "Do Excel, do Trello e do ERP para um sistema só.") na linha 4 em Roboto 500
20/1,3, Text, com a fita por baixo como linha selecionada; o parágrafo de abertura na linha 6,
até 56ch; o botão do serviço na linha 8 ("Quero um site" ou "Quero automatizar minha empresa",
Primary, texto branco). Nos últimos 15% da tela, o título "Quando o site não existe, ou não
ajuda" (sites) ou as primeiras células "Pedidos e clientes" | "Excel" (sistemas).

FORM: planilha que vira sistema, a mesma direção da home, aplicada a uma planilha de um serviço
só. Raise mantido: a fita se desenha como traço; o laço das etapas com a luz que o percorre.
seed:5ee14c7614ee9655

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Composição e comportamento

- **Sites:** problema (texto em coluna de 65ch); "o que a gente faz" em três linhas da planilha
  (título na célula da esquerda, texto na da direita, nunca três cards); "todo site inclui" em
  seis linhas com a fita marcando a linha sob o ponteiro; etapas numeradas (1 a 6) com o laço;
  prova com as três prévias fora da grade (Brisa grande, Linetex e Lumaj médias, desencontradas)
  e a ficha nas células ao lado; FAQ em `details`; chamada final no degradê.
- **Sistemas:** problema como quatro linhas de células ("Pedidos e clientes" | "Excel" etc.) e o
  parágrafo de resultado; "um sistema só" com as quatro células (Centraliza, Automatiza, Integra,
  Mostra) se fundindo num bloco; a tabela antes e depois como descrito na THESIS, com
  `font-variant-numeric: tabular-nums` onde houver número; benefícios em cinco células; "como
  funciona" em nove linhas numeradas, com o passo do diagnóstico marcado pela fita e o valor em
  `[PENDENTE]` visível até o Igor decidir; prova com o RetroDash grande fora da grade e, ao lado,
  em traço solto da fita, a frase de que o case de automação de cliente ainda não existe; FAQ;
  chamada final.
- **Hub `/servicos/`:** uma planilha de duas colunas (Sites | Sistemas) com a pergunta "qual é o
  seu problema hoje?" em três linhas acima e a conexão em uma linha de largura inteira abaixo.
- **Movimento:** igual ao da home, incluindo movimento reduzido e sem JS.

## Revisão de 31/10/2026 (pedidos do Igor depois de ver o site)

Vale sobre o contrato acima onde houver conflito (ver também o brief da home):
- Sem letras de coluna nem números de linha.
- A cabeça abre com uma foto do Unsplash numa célula mesclada à direita, ocupando as quatro
  linhas (`/sites/`: placa "Open"; `/sistemas/`: quadro de notas adesivas; Raio-X: a lupa).
- Seções como bandas alternadas (Body, White), cada uma uma coisa só.
- "O que a gente faz" e "todo site inclui" viram cartões com ícone (três por linha, seis
  cartões em duas linhas). Em `/sistemas/`, as quatro células de "um sistema só" ganham ícone, os
  benefícios viram cartões e a lista do problema leva o ícone da ferramenta. No hub, a pergunta
  "qual é o seu problema hoje?" vira três cartões com botão.
- Os ícones se desenham pela fita conforme a rolagem, com brilho; uma luz segue o ponteiro.
- Mais tarde no mesmo dia: sem linhas verticais de grade nem borda na folha ("não gostei mais
  dos quadradinhos"); filete só nas listas; toda seção com pelo menos 85svh e conteúdo centrado.
