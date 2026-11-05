# Versões de estudo da home (05/11/2026)

O Igor viu o site pronto e não gostou. Pediu uma revisão do site inteiro, com foco na identidade
(o roxo), olhando os grandes players de agência e os dois sites que ele considera referência,
Apple e Microsoft. Pediu três versões novas para analisar, em `/site1/`, `/site2/` e `/site3/`.

Este arquivo registra a pesquisa, o que cada versão tira dela, como as três foram construídas e o
que acontece depois da escolha. As três páginas são **estudos de home**: a página completa, com
cabeçalho, todas as seções e rodapé, cada uma com a própria pele. Não estão no sitemap, levam
`noindex` e têm um alternador fixo no canto inferior esquerdo para pular entre "Atual", 1, 2 e 3.

## 1. O que a pesquisa mostrou

Pesquisa feita em 05/11/2026 por dois agentes, com os limites registrados no fim deste arquivo.

### Apple (apple.com)

- A home é feita de **faixas inteiras**: heroes de uma tela e promos aos pares (2-up), 7 a 9
  faixas, fundos alternando preto, branco e cinza claro. Cada faixa tem **uma ideia só**: título,
  uma linha de apoio e duas ações ("Learn more" e "Buy"), raramente mais de 15 palavras.
- **Tipo**: headline-super de 80 px, altura de linha 1,05, peso 600, tracking -0,015em (64 px até
  1068 px, 48 px até 734 px); headline 48 px; intro 21 px/1,38; corpo reduzido 14 px. Tudo
  centrado, texto dentro de um miolo de 980 px (692 px até 1068 px, 87,5 % da largura no celular).
- **Cor**: base neutra absoluta; cor só no produto e nas ações; botões em pílula; faixas escuras
  em preto puro ou #1d1d1f.
- **Imagem**: o produto é o herói, sem gente nem cenário, texto centrado em cima e a imagem
  ocupando o resto da faixa, ancorada na base.
- **Nav** de 44 a 48 px, preta translúcida com `backdrop-filter: blur(20px) saturate(180%)`, logo
  pequeno, links de 12 px; no celular, menu em tela cheia.
- **Movimento** quase parado na home; nas páginas de produto, sequências sticky e revelações
  curtas (perto de 300 ms); com movimento reduzido, quadro estático.

### Microsoft (microsoft.com)

- Home em cerca de 9 faixas **claras**, nenhuma escura: hero com imagem e um botão, barra de
  atalhos, linha de 4 cards de produto, banner de largura total, bloco "Para negócios" com 4
  cards, histórias, rodapé com 3 a 5 listas de links. Tudo **alinhado à esquerda**.
- **Tipo** (tokens do Fluent 2, onde Roboto é o fallback oficial): display 68/92, largeTitle
  40/52, title1 32/40, title2 28/36, title3 24/32, subtitle1 20/28, body 16/22, caption 12/16;
  títulos semibold, corpo regular, sem tracking negativo. Card: título de 2 a 8 palavras, uma
  frase de 8 a 25 palavras, um CTA de 1 a 4 palavras.
- **Cor**: fundo branco, superfícies #fafafa e #f5f5f5, um botão sólido por bloco com canto de 4
  a 8 px, links "Saiba mais" com seta. A cor vem das fotos (gente e contexto) e de fundos pastel.
- **Cards** 4 por linha no desktop, 2 no tablet, 1 no celular; raio 8 a 12 px, sombra leve no
  hover; 48 a 96 px entre blocos. Muitos CTAs com verbos variados; FAQ em acordeão.
- **Movimento** de 100 a 300 ms, curva `cubic-bezier(0, 0, 0, 1)`; carrossel com pausa; nada de
  scroll scrubbing.

### Grandes agências (Huge, R/GA, AKQA, Instrument, Metalab, Clay, Ramotion, Locomotive, BASIC/DEPT, Pentagram, Fantasy, Dogstudio, Active Theory)

1. **Uma frase** dizendo quem a agência é ou no que acredita, não um menu de serviços.
2. **Trabalho acima da dobra** ("show, don't tell"): grade sangrada (Pentagram), fluxo de projetos
   (Instrument), carrossel de cases (Huge, Fantasy).
3. Card de case = cliente, tipo de entrega e **uma imagem**.
4. Nav curta (4 a 6 itens), trabalho primeiro, contato como botão.
5. **Uma família tipográfica** fazendo tudo, com tipo grande e contraste de peso.
6. Paleta contida: base preta ou branca e **um acento só**. Base escura nos estúdios de produto e
   tecnologia (Metalab, Fantasy, Huge).
7. Movimento ligado à rolagem e ao hover (inércia, títulos que escalam, Lottie), não decorativo;
   WebGL e 3D só em quem vende isso.
8. Contato que qualifica (produto, prazo, origem) e páginas de serviço como landing pages de busca.

### Agências brasileiras voltadas a PME (Jüssi, Agência Mestre, V4 Company, GhFly, UpSites, Agência Colors, Apiki, ciaweb)

- CTA é **WhatsApp e telefone**, não só formulário; promessa de tempo de resposta.
- "Como funciona" em passos (4 a 6), **FAQ na home**, prova social em números e depoimentos com
  nome, preço público e parcelamento, páginas por cidade e nicho. Os globais não fazem nada disso.
- Ressalva: números que mudam de página para página e depoimentos genéricos são o que mais
  parece template. A Infinium não tem números confirmados, então não entra nenhum.

### Anti-padrões (o que faz um site parecer modelo ou gerado por IA)

1. Hero com degradê roxo para azul brilhante, cards de vidro, partículas e tudo com fade no
   scroll. Como a marca é roxa, o risco dobra: violeta chapado, degradê só como banda.
2. Grade de 3 colunas de "features" com ícones misturados, bento boxes, card com borda colorida
   de um lado.
3. Seções que parecem sites diferentes; slider no hero.
4. Números sem fonte, depoimentos genéricos, logos de empresas que não são clientes.

## 2. O que as três versões têm em comum

- A **identidade fixa**: paleta violeta, só Roboto (400, 500 e 700), logo e símbolo pelos arquivos
  SVG, Primary nunca sobre fundo escuro (sobre o escuro, só White e Lilás).
- Os **mesmos fatos** (EMPRESA.md, SERVICOS.md) e, quase sempre, os mesmos textos de
  `src/i18n/paginas/inicio.ts`; o que muda de uma versão para outra está em
  `src/i18n/paginas/versoes.ts`. Nenhum número, depoimento, prazo ou preço.
- A **mesma prova**: as prévias reais em HTML e CSS dos três sites e do RetroDash
  (`src/components/previas/`), em molduras de navegador, de celular ou nuas
  (`src/components/versoes/Vitrine.astro`). A prévia é desenhada num palco de 1100 px (o site no
  computador) ou de 400 px (no celular) e escalada para caber na moldura.
- Cabeçalho, rodapé e menu do celular com a mesma estrutura (`src/components/versoes/`,
  `menu.ts` do site) e a pele de cada versão; o alternador das versões; o banner de cookies e as
  métricas do site; `noindex`; fora do sitemap; sem o ClientRouter (links normais).
- As regras de qualidade do site: funciona sem JS, só com teclado, no toque e com
  `prefers-reduced-motion` (tudo parado); animação só de `transform`, `opacity`, `clip-path` e
  do traço dos SVGs; revelação por rolagem em CSS (`animation-timeline: view()`), com o conteúdo
  visível por padrão onde não há suporte.
- Nada de vidro, partículas, degradê em texto, ícones de biblioteca ou slider.

Arquivos: `src/layouts/Versao.astro`, `src/pages/site1.astro`, `site2.astro`, `site3.astro`,
`src/styles/versoes/comum.css`, `site1.css`, `site2.css`, `site3.css`,
`src/scripts/versoes/galeria.ts`.

## 3. Versão 1, a vitrine (`/site1/`): direção Apple

**Tese:** o site do cliente é o produto. Uma ideia por tela, texto centrado, faixas inteiras.

- **Faixas**, nesta ordem: abertura escura com a assinatura e a prévia da Brisa numa janela de
  navegador com o celular da Lumaj sobreposto; a cena (as quatro ferramentas soltas viram "um
  sistema só"); os dois serviços como dupla de blocos (claro e escuro, foto ancorada na base);
  a conexão, com o símbolo da marca se desenhando entre "Site" e "Sistema"; os projetos numa
  galeria horizontal de janelas; como funciona em cinco passos numerados em linha; o que muda,
  com os ícones do site; três capas do blog; perguntas numa coluna estreita; chamada final escura;
  rodapé claro, denso e em 12 px.
- **Pele:** miolo de 980 px; h1 `clamp(2.5rem, 1.5rem + 5vw, 5rem)` 700, altura 1,05, -0,02em;
  títulos de faixa até 56 px; apoio 21 px; corpo 17 px; faixas alternando o degradê da marca
  (180°, Violeta 700 a 900), o Body e o White; pílulas (Lilás sobre escuro, branca na chamada);
  links com seta; nav de 48 px em Violeta 900 a 72 % com blur, logo de 20 px, links de 12 px.
- **Movimento:** o palco da abertura sobe ao carregar; uma revelação por faixa; o símbolo se
  desenha ao rolar; a galeria rola com os botões (`galeria.ts`) ou com o dedo.
- **Vem de onde:** faixas, 2-up, miolo, nav, tipo e dupla de ações da Apple; a prévia como
  produto e o "show, don't tell" das agências; FAQ, passos e WhatsApp das agências de PME.

## 4. Versão 2, o painel (`/site2/`): direção Microsoft

**Tese:** o site como um painel claro e organizado, que explica e deixa a pessoa escolher por
onde começar. Mais informação por tela, tudo alinhado à esquerda.

- **Faixas:** abertura clara em lilás com o título à esquerda (o verbo em Primary), a foto à
  direita e um cartão sobre ela com o ciclo prometido (pedido chegou pelo site, tarefa criada,
  cliente avisado: é ilustração do serviço, não um dado); quatro portas de entrada (Sites,
  Sistemas, Projetos, Raio-X) em cartões; a cena (foto e lista de ferramentas); Sites (texto,
  "todo site inclui" em duas colunas, foto); Sistemas em faixa escura com a tabela de antes e
  depois num cartão; como os dois se conectam, em três etapas; projetos em grade 2 x 2 de cartões
  com a prévia no topo; como funciona em cinco passos; blog em três cartões; perguntas em
  acordeão; chamada final escura com dois botões; rodapé cinza e denso.
- **Pele:** cabeçalho branco de 56 px com o menu colado ao logo e um botão sólido; h1
  `clamp(2.25rem, 1.4rem + 3.4vw, 3.75rem)` 700 sem tracking; h2 de 28 a 40 px; cartões brancos
  com borda Line, raio 8 a 12 px, sombra só no hover (sobem 2 px); botões de canto 4 px, um
  sólido por bloco; links com seta; ícones do site em círculos Lilás; curva
  `cubic-bezier(0, 0, 0, 1)`.
- **Movimento:** hover de elevação nos cartões, uma revelação por bloco, nada mais.
- **Vem de onde:** grade de cards, alinhamento, escala, botões, links e rodapé da Microsoft e do
  Fluent 2; as portas de entrada e o FAQ das agências de PME; a prévia como imagem do card.

## 5. Versão 3, o infinito (`/site3/`): direção de agência

**Tese:** a Infinium como estúdio: escura, editorial, uma frase gigante e o trabalho logo abaixo.
O símbolo da marca é o motivo.

- **Faixas:** abertura no violeta profundo com a assinatura em tipo gigante, o símbolo se
  desenhando ao fundo e uma faixa rolante com o que a Infinium faz e onde atende; a cena como
  parágrafo editorial com as ferramentas em pílulas Lilás; os dois serviços como lista de obras
  (número, título enorme, frase, texto, foto em luz violeta que ganha cor no hover); a conexão com
  a frase partida pelo símbolo; projetos em linhas largas sobre fundo claro, alternando lado, com
  a prévia crescendo no hover; como funciona com a cabeça fixa e as etapas numeradas; o que muda
  em grade de frases; perguntas; chamada final gigante ("Vamos conversar?") com WhatsApp, e-mail
  e Instagram; rodapé no violeta mais profundo.
- **Pele:** fundo Violeta 900, texto branco a 78 %, apoio em Lilás a 62 %, linhas em Lilás a
  18 %; h1 `clamp(3rem, 1rem + 9.4vw, 9rem)` 700, altura 0,95, -0,04em; títulos de 36 a 64 px;
  serviços até 80 px; pílulas Lilás; links brancos com a linha que se desenha; cabeçalho de 72 px
  quase transparente com blur. A única faixa clara é a dos projetos, para as prévias aparecerem
  limpas.
- **Movimento:** o símbolo se desenha ao carregar e ao rolar; a faixa rolante (parada com
  movimento reduzido e ao passar o ponteiro); a prévia cresce 1,5 % no hover; a cabeça fixa das
  etapas; uma revelação por bloco.
- **Vem de onde:** a frase única, a lista de obras, a tipografia em caixa grande, a base escura
  com um acento e o rodapé grande das agências globais (Pentagram, BASIC, Locomotive, Metalab); a
  faixa escura e o produto como herói da Apple; o FAQ e o WhatsApp das agências de PME.

## 6. Como avaliar

Abrir cada versão **no celular primeiro** (é por onde o cliente chega), depois no computador, e
responder: em cinco segundos dá para saber o que a Infinium faz? O roxo está forte sem parecer
modelo pronto? A prova (as prévias) convence? O caminho até o WhatsApp é óbvio? Dá para imaginar
as outras páginas (serviço, projeto, blog, contato) com essa pele?

As três podem se misturar: a estrutura de uma com a pele de outra, ou uma seção de uma dentro da
outra. O que não muda é a identidade e o que o pacote fixa.

## 7. Depois da escolha

Quando o Igor escolher (uma versão ou uma mistura), entra o TODO 10 em [TODO.md](../../TODO.md):
levar a direção escolhida para o site inteiro (home, serviços, sites, sistemas, projetos e
página de projeto, blog e post, contato, Raio-X, acessos, privacidade, 404), gravar a decisão em
[direcao-visual.md](direcao-visual.md), refazer o contrato da home, atualizar `DESIGN.md` e
apagar as versões que não entraram.

## 8. Limites da pesquisa

- A rede desta sessão bloqueou o acesso direto a apple.com e aos sites das agências. Os fatos da
  Apple vêm das folhas de estilo públicas da própria Apple indexadas na busca (nav, tipo,
  larguras) e de notícias datadas; os das agências vêm de trechos indexados das páginas e de
  galerias e análises de terceiros (Awwwards, Lapa Ninja, Siteinspire, Fonts In Use, KrishaWeb,
  Muffin Group). O que é dedução está marcado como tal nos relatórios originais.
- A Microsoft foi lida diretamente (home pt-br e en-us, Surface, Windows) e os tokens do Fluent 2
  vieram do pacote oficial `@fluentui/tokens`.
- Quase nenhuma fonte descreve o comportamento no celular; o que está nas versões é a adaptação
  mais comum (coluna única, menu em tela cheia, botão de largura inteira).
