# TODO

Próximas etapas do site da Infinium. Cada item funciona como um prompt completo: em um chat novo,
basta pedir "faça o TODO 1". O agente lê este arquivo, os documentos listados em "Leia antes" e
executa o item até os critérios de "Pronto quando".

## Regras para qualquer item

- Leia [AGENTS.md](AGENTS.md) primeiro. Ele aponta para todo o resto.
- Faça **só** o item pedido. Se descobrir algo que pertence a outro item, anote no fim do item
  atual, em "Notas", e siga em frente.
- Respeite a ordem de precedência de [processo.md](.claude/docs/processo.md#1-quem-manda-em-quê):
  pedido do Igor > identidade e direção visual > regras do repositório > impeccable > taste-skill
  > portfólio e referências.
- O portfólio do Igor (`~/Projects/meu-portfolio`) é a referência de método e de código genérico.
  O que pode ser copiado de lá está em
  [referencias/meu-portfolio.md](.claude/docs/referencias/meu-portfolio.md). Nunca copie a pele.
- Commits pequenos, em português, sem coautoria ([COMMITS.md](COMMITS.md)). Só commite quando o
  Igor pedir. Ao terminar, proponha a lista de commits.
- Ao terminar, mude o **Status** do item para `feito em <data>` e registre em "Notas" o que ficou
  diferente do planejado.
- Se um item depender de algo que só o Igor sabe, pergunte (no máximo uma rodada de perguntas) ou
  deixe um marcador visível `[PENDENTE: ...]`. Nunca invente.

---

## TODO 1: Base técnica do projeto

**Status:** feito em 30/10/2026 (a publicação mudou para a Hostinger e fica no TODO 6, ver Notas)
**Depende de:** nada

**Leia antes:** [arquitetura.md](.claude/docs/arquitetura.md) (tudo),
[direcao-visual.md](.claude/docs/direcao-visual.md) (seções 1 e 2), [PRODUCT.md](PRODUCT.md),
[referencias/meu-portfolio.md](.claude/docs/referencias/meu-portfolio.md) (seção 2) e
[identidade/MARCA.md](.claude/docs/identidade/MARCA.md).

**Objetivo:** deixar o projeto Astro montado, configurado e publicado em preview na Vercel, com
SEO técnico, tokens da identidade e Roboto prontos. **Sem design de página**: as páginas são
esqueletos sem estilo, só para provar rotas, metadados e build.

**Passos:**
1. Criar o projeto Astro na raiz do repositório, fixado na última 7.x publicada há mais de duas
   semanas. Template mínimo, TypeScript `strict`. `.nvmrc`, Prettier (com `prettier-plugin-astro`)
   e o `.prettierrc.mjs` já estão no repositório; adicionar o script `astro check`. Atualizar o
   `.gitignore` sem apagar as entradas que já existem.
2. Configurar `site: 'https://agenciainfinium.com'`, `output: 'static'` e `trailingSlash:
   'always'`. Só PT-BR, sem i18n do Astro. Nada de analytics por enquanto (pendente do Igor).
3. Criar `src/i18n/rotas.ts` (tabela única de rotas: `/`, `/sites/`, `/automacao/`,
   `/projetos/<slug>/`, `/acessos/`, `/404/`) e `src/i18n/textos.ts` para os textos de interface
   (menu, botões, rótulos), na mesma organização do portfólio, com um idioma só.
4. Criar `src/components/Seo.astro` a partir do do portfólio: title, description, canonical,
   Open Graph (imagem padrão `og-image-1200x630.png` da identidade), Twitter card,
   `theme-color` `#39135F`, `color-scheme: light`, favicon e JSON-LD (`Organization` com
   `name: "Agência Infinium"`, `url`, `logo` e `sameAs` com `https://www.instagram.com/agencia_infinium`,
   e `WebSite`). Sem hreflang.
5. Integrar `@astrojs/sitemap` (sem `/404/` e sem `/acessos/`). Criar `robots.txt`.
6. Levar os assets da identidade para `public/`: `favicon.svg` (o que troca para lilás no modo
   escuro), `apple-touch-icon.png` (180), `og.png` (1200×630) e, se fizer sentido, o manifest
   com os ícones de 192 e 512. Os SVGs de logo e símbolo vão para `src/assets/marca/`.
7. Criar a content collection `projetos` com schema tipado (Zod): `titulo`, `slug`, `tipo`
   (`site` | `produto`), `ano`, `status`, `url` (opcional), `resumo`, `ordem`, `revisadoEm`,
   `atualizadoEm`. Criar os quatro arquivos (Brisa Café, Linetex, Lumaj e RetroDash) só com
   frontmatter, a partir de [projetos/](.claude/docs/projetos/README.md). O corpo fica para o
   TODO 2.
8. Criar `src/data/empresa.ts` com os dados públicos: nome, nome fantasia, CNPJ, domínio,
   Instagram e WhatsApp (`[PENDENTE: número]`), com as três mensagens prontas (geral, site,
   automação).
9. Estilos base: `src/styles/tokens.css` com os tokens de direcao-visual.md (seção 2) mais a
   escala violeta, escala de tipo a partir de MARCA.md (display, título, subtítulo, texto,
   rótulo), espaço, raios e durações; e `src/styles/base.css` copiado do portfólio, com
   `color-scheme: light` e as cores trocadas. Roboto self-hosted pela API `fonts` do Astro
   (pesos 400, 500 e 700, ou a variável), `font-display: swap`, preload do arquivo latin.
10. Layout base com `<ClientRouter />` e o link "Pular para o conteúdo". Páginas esqueleto para
    home, sites, automação, projeto (rota dinâmica), acessos (`noindex`) e 404, cada uma só com
    um `<h1>` e o menu funcionando como links reais.
11. Configurar a Vercel (saída estática) e publicar um preview.

**Não fazer:** layout, composição, material de marca, animação, prévias, copy final.

**Pronto quando:**
- [x] `npm run build` e `astro check` passam sem erro nem warning.
- [x] Cada página esqueleto tem canonical próprio e os metadados corretos (conferir no HTML
      gerado em `dist/`).
- [x] O sitemap lista as páginas certas e o `robots.txt` aponta para ele.
- [x] A Roboto carrega self-hosted (nenhuma requisição ao Google Fonts).
- [x] Build estático pronto para a Hostinger (`public/.htaccess` com HTTPS, `www`, 404, cache e
      cabeçalhos). A publicação é do TODO 6, decisão do Igor em 30/10/2026.

**Commits sugeridos:** `build: cria projeto astro`, `build: configura rotas e sitemap`,
`feat(seo): adiciona componente de metadados e json-ld`, `feat: adiciona coleção de projetos`,
`style: adiciona tokens e estilos base`, `chore: adiciona favicon e imagem de compartilhamento`.

**Precisa do Igor:** o número de WhatsApp da empresa e a confirmação de que `agenciainfinium.com`
vai para a Vercel.

**Notas:**
- **Domínio:** `infinium.app.br`, confirmado pelo Igor em 30/10/2026 (os docs diziam
  `agenciainfinium.com` e foram atualizados). **WhatsApp:** `5547992735089`, confirmado com nove
  dígitos. **E-mail:** `agenciainfinium@gmail.com` em `empresa.ts`; entra na página de contato e
  no rodapé (TODO 2 e TODO 4).
- **Mapa revisado no mesmo dia** (conteudo.md, seção 1): o serviço de automação virou
  **Sistemas** (`/sistemas/`), e entraram `/servicos/`, `/projetos/`, `/blog/`, `/contato/`,
  `/privacidade/` e a LP `/raio-x-do-site/`. A tabela de rotas e os esqueletos já refletem isso
  (a LP e as páginas de post ficam para os TODOs 7 e 8). O menu "Projetos" deixou de ser âncora.
- Versões (todas publicadas há mais de duas semanas em 30/10/2026): Astro **7.4.0** (15/10; a
  7.4.1 em diante saiu de 19/10 a 28/10), `@astrojs/sitemap` 3.7.4, `@astrojs/check` 0.9.10
  (0.9.11 e 0.9.12 são de 19/10 e 21/10), TypeScript 6.0.3 (o `@astrojs/check` aceita `^5 ||
  ^6`, não o 7), Prettier 3.9.10, `prettier-plugin-astro` 1.1.1 (a 1.1.2 é de 23/10),
  `@fontsource-variable/roboto` 5.3.0. Node 24 no `.nvmrc` (já estava).
- `.gitignore` já tinha tudo o que o projeto precisa (dist, .astro, .vercel, node_modules, .env);
  nada foi adicionado. O `package-lock.json` é versionado (o `vercel.json` usa `npm ci`).
- Fontes: Roboto **variável só no eixo `wght`** (43 KB latin, 29 KB latin-ext), pela API
  `fonts` do Astro com `fontProviders.local()` lendo o Fontsource. Um arquivo cobre 400, 500 e
  700. O arquivo com `wdth` pesa 67 KB e a identidade não usa largura. Preload só do latin, via
  `fontData` no `Base.astro`. O Astro gera o fallback Arial com `size-adjust`. Sem itálico (a
  identidade não prevê); se precisar, é mais um arquivo no `astro.config.ts`.
- Sitemap: filtro por caminho (`/404/` e `/acessos/` fora), lendo da tabela de rotas. A 404 e a
  de acessos têm `noindex` e não têm canonical.
- `src/i18n/rotas.ts` tem um idioma só, mas mantém a organização do portfólio (constantes de
  idioma, `normalizar`, `rotaProjeto`). "Projetos" no menu é âncora na home (`/#projetos`),
  como diz conteudo.md, seção 1; o TODO 2 confirma com o Igor.
- Collection: id da entrada é o slug (`src/data/projetos.ts` derruba o build se o `slug` não
  bater com o nome do arquivo). Sem `papel` nem `stack` (não estavam no passo 7). `ordem`
  provisória: Brisa 1, Linetex 2, Lumaj 3, RetroDash 4 (sites primeiro, por serem a prova do
  serviço de sites); a composição da galeria decide no TODO 3.
- Manifest: `site.webmanifest` com os ícones 192 e 512 e `display: browser` (é um site, não um
  app). O `logo` do JSON-LD `Organization` aponta para `/icone-512.png` (o símbolo), porque o
  JSON-LD pede uma URL pública e o logo completo fica em `src/assets/marca/`. O TODO 6 revê.
- Title e description estão provisórios e factuais, sem cidade (arquitetura.md pede para
  confirmar as cidades com o Igor). O TODO 2 escreve os finais.
- A página de acessos usa o `Base.astro` com `semCabecalho`, já que conteudo.md diz que ela não
  tem menu. Rodapé ainda não existe em nenhuma página (TODO 4).
- Verificado: `astro check` e `npm run build` sem erro nem warning; Prettier limpo. Nove páginas
  geradas, cada uma com canonical próprio, Open Graph, Twitter card, `theme-color #39135F`,
  `color-scheme light` e JSON-LD (`Organization` + `WebSite`). Sitemap com as sete páginas
  indexáveis. Nenhuma requisição ao Google Fonts no `dist/`.
- **Hospedagem (passo 11):** o Igor decidiu (30/10/2026) publicar a pasta `dist/` zipada na
  **Hostinger**, no fim do projeto, e talvez nunca usar a Vercel. O `vercel.json` foi removido e
  entrou `public/.htaccess` (HTTPS forçado, `www` para o apex, `ErrorDocument 404 /404.html`,
  cache longo em `/_astro/`, cabeçalhos de segurança; a CSP é do TODO 6). Entrou também
  `.env.example` com as chaves públicas que o TODO 6 vai preencher.

---

## TODO 2: Conteúdo completo

**Status:** feito em 30/10/2026, com as pendências do passo 1 marcadas (ver Notas)
**Depende de:** TODO 1

**Leia antes:** [conteudo.md](.claude/docs/conteudo.md) (tudo),
[identidade/EMPRESA.md](.claude/docs/identidade/EMPRESA.md),
[identidade/SERVICOS.md](.claude/docs/identidade/SERVICOS.md),
[identidade/INSTAGRAM.md](.claude/docs/identidade/INSTAGRAM.md), a skill `humanize-text` e os
arquivos de [projetos/](.claude/docs/projetos/README.md) que entrarem.

**Objetivo:** escrever todo o texto do site antes do design, para que layout e composição nasçam
do conteúdo real. O texto fica em `src/i18n/paginas/*.ts` (home, serviços, sites, sistemas,
projetos, contato, acessos, 404) e no corpo dos arquivos da collection `projetos`. O blog é do
TODO 7 e a LP do Raio-X é do TODO 8.

**Passos:**
1. O mapa foi validado com o Igor em 30/10/2026 (conteudo.md, seção 1). Falta, em uma rodada só:
   cidades do SEO local, CNPJ no rodapé e os "Pontos a confirmar" de EMPRESA.md.
2. Escrever a home seguindo conteudo.md, seção 2, persuasiva como uma LP: assinatura e
   mensagens-chave de EMPRESA.md, a cena do problema sem jargão, os dois serviços, a conexão
   entre eles, prova, como funciona, FAQ e chamada final.
3. Escrever `/servicos/` (hub curto), `/sites/` e `/sistemas/` seguindo conteudo.md, seção 3. A
   tabela "antes manual, depois automático" entra inteira. As etapas numeradas entram inteiras.
   Em `/sistemas/`, o fluxo do diagnóstico (mensagem com três perguntas, conversa grátis,
   diagnóstico pago e abatido, o que sai dele) com o valor em `[PENDENTE]`.
4. Escrever o corpo dos quatro projetos. Sites: o negócio do cliente, o objetivo do site, o
   conceito visual e as decisões de design, verificável no site publicado. RetroDash: o
   problema, para quem é, as funcionalidades que existem e as decisões de engenharia, em
   linguagem de cliente, sem números de adoção e sem citar o uso na Geomais.
5. Escrever `/projetos/` (introdução e os dois grupos), `/contato/` (WhatsApp, e-mail,
   Instagram, os campos e os dois botões do formulário, o aviso de privacidade), `/acessos/`
   (três botões e o Instagram) e a 404.
6. Mensagens prontas do WhatsApp por contexto, curtas, na voz do cliente. A de sistemas leva as
   três perguntas do filtro. O rodapé: e-mail, Instagram, WhatsApp, "Agência Infinium", CNPJ
   (se o Igor confirmar) e Privacidade.
7. Passar a `humanize-text` em tudo. Buscar e remover qualquer travessão. Conferir o tom de voz
   contra a tabela "Somos / Não somos" de EMPRESA.md.
8. Tudo o que estiver em "Pontos a confirmar" de EMPRESA.md fica fora ou como `[PENDENTE]`.

**Não fazer:** layout, estilo, inventar cliente, prazo, preço, número ou depoimento, prometer
"diagnóstico gratuito".

**Pronto quando:**
- [x] Todas as páginas têm texto completo, renderizando nos esqueletos.
- [x] Nenhum travessão em texto visível (`grep` por `—` e `–` em `src/`).
- [x] Nenhum dado que não esteja em EMPRESA.md, SERVICOS.md ou nos arquivos de projeto.
- [ ] O Igor leu e aprovou, ou as dúvidas estão marcadas com `[PENDENTE]`. As dúvidas estão
      marcadas; falta a leitura do Igor.

**Commits sugeridos:** `content(home): escreve o texto da home`, `content(servicos): escreve o
hub de serviços`, `content(sites): escreve a página de sites`, `content(sistemas): escreve a
página de sistemas`, `content(projetos): escreve as fichas dos projetos`, `content(contato):
escreve a página de contato`, `content(acessos): escreve a página de links`.

**Precisa do Igor:** as respostas do passo 1 e os "Pontos a confirmar".

**Notas:**
- Texto em `src/i18n/paginas/` (inicio, servicos, sites, sistemas, projetos, contato, acessos),
  um idioma só, objetos `as const`. Os textos de interface, o rodapé e as metas ficaram em
  `textos.ts`; as mensagens do WhatsApp em `empresa.ts`. A 404 já estava em `textos.ts`.
- Os esqueletos renderizam tudo em HTML semântico, sem estilo: `details` para FAQ, `table` para
  "antes e depois", `dl` para a ficha do projeto, `form` sem `action` no contato (o envio é do
  TODO 4). Entrou o `Rodape.astro` com e-mail, WhatsApp, Instagram e Privacidade.
- **Pendências marcadas** (`grep PENDENTE src/`): o valor do diagnóstico, na página de sistemas
  (texto visível); as cidades do SEO local, nos titles de sites e sistemas (comentário em
  `textos.ts`); o CNPJ no rodapé (`mostrarCnpj = false` em `Rodape.astro`). Prazo médio, números
  reais e preço do Raio-X ficaram fora do texto.
- Decisões de copy que o Igor precisa validar: o diagnóstico aparece como "pago, abatido do
  projeto se fechar" sem valor; a página de sistemas diz que ainda não há case de automação de
  cliente; a mensagem de WhatsApp de sistemas leva as três perguntas com lacunas (`___`); o FAQ
  de sites diz que texto e fotos não precisam estar prontos (deriva da etapa "conversa inicial:
  objetivo, público e referências" de SERVICOS.md).
- Os corpos dos projetos vieram do portfólio, na voz da Infinium (nós) e com a stack em linguagem
  de cliente. RetroDash sem números de adoção e sem Geomais. `ordem`: sites primeiro.
- `markdown.smartypants: false` no `astro.config.ts`: o Markdown convertia aspas em curvas e
  converteria `--` em travessão.
- Passada da `humanize-text` feita na escrita: sentence case, sem vocabulário de IA, sem
  travessão, "você" como sujeito, FAQ com respostas curtas. Verificado: `astro check`, build e
  Prettier limpos, 14 páginas geradas, nenhum `—` ou `–` em `src/`.

---

## TODO 3: Brief da home, material de marca e contrato de direção

**Status:** feito em 30/10/2026
**Depende de:** TODO 2

**Leia antes:** [processo.md](.claude/docs/processo.md) (seções 1, 3 e etapa 3),
[direcao-visual.md](.claude/docs/direcao-visual.md) (tudo, principalmente a seção 3),
[identidade/MARCA.md](.claude/docs/identidade/MARCA.md) e o `manual/brand-guide.html`,
[referencias/meu-portfolio.md](.claude/docs/referencias/meu-portfolio.md) (seções 3, 4 e 5),
`.claude/skills/impeccable/reference/new-work.md` e `shape.md`, e a `taste-skill`.

**Objetivo:** fechar com o Igor **como** a home se organiza e **qual é o material da marca**
(o que conduz hover, cabeçalho e troca de página), e gravar o contrato de direção. A impeccable
não escreve código nesta etapa.

**Passos:**
1. Rodar `/impeccable shape home` em modo **Persuade**, com o "Design Read" e os dials de
   processo.md como ponto de partida. O brief parte de conteudo.md e do texto do TODO 2.
2. Apresentar ao Igor os candidatos a material de direcao-visual.md, seção 3 (fita, degradê
   como cortina, símbolo como cursor), com uma frase sobre o que cada um faz no hover, no
   cabeçalho e na troca de página. Uma rodada de perguntas. Gravar a decisão em
   direcao-visual.md, seção 5, com data e motivo.
3. Fechar no brief: o primeiro viewport (o que alguém descreveria uma hora depois), como a seção
   de projetos varia tamanho e ritmo sem virar grade de cards iguais, como as seções escuras em
   degradê se alternam com as claras, e o comportamento do material sobre as prévias.
4. Rodar `impeccable concept-seed --scope direction --mode persuade`. A identidade vence campo a
   campo; a rodada traz estrutura. Gravar a referência do seed.
5. Escrever o contrato (THESIS, OWN-WORLD, STORY, FIRST VIEWPORT, FORM, FINISH) e gravar com
   `impeccable surface-brief write` em `.impeccable/surfaces/`. Um brief para a home e um para a
   página de serviço (as duas páginas de serviço compartilham o contrato).

**Não fazer:** código, mudar paleta, fonte ou logo, cursor customizado sem o Igor pedir.

**Pronto quando:**
- [x] direcao-visual.md tem o material e o movimento decididos, com data.
- [x] Os surface briefs existem com a seção `## Direction contract` e a referência do seed.
- [x] O Igor aprovou o brief da home (escolheu material, direção e primeira tela em 30/10/2026;
      o contrato escrito a partir disso está em `.impeccable/surfaces/src-pages-index-astro.md`
      para ele ler).

**Commits sugeridos:** `docs: registra o material de marca e o movimento`, `docs: adiciona os
briefs da home e da página de serviço`.

**Precisa do Igor:** a escolha do material e a aprovação do brief.

**Notas:**
- `impeccable context` rodou; o `shape` foi feito pela ferramenta de perguntas (a página de
  decisão da impeccable precisa de um servidor em espera que este ambiente não segura; a
  substituição foi dita ao Igor). Uma rodada só, três perguntas: material, direção e primeira
  tela.
- `concept-seed --scope direction --mode persuade` rodou **completo** (com desafiantes do
  catálogo): chave `cb730887c8393104c189a1c58a1c6243`, referência `seed:5ee14c7614ee9655`,
  índice atribuído 7. Lista própria, por ressonância: 1 linha contínua (mapa do processo), 2
  rua de vitrines, 3 talão de pedido carbonado, 4 fita métrica da confecção, 5 catálogo com
  índice numerado, 6 mural de avisos, 7 planilha que vira sistema. Desafiantes: página de
  secessão (recusada), fileira de fliperama (recusada), fita de proveniência (**competitiva**),
  torre de argila (recusada), espécime de fonte variável (recusada), sequenciador (recusada).
  Cada recusada doou uma disciplina, gravada como raise no FORM do brief da home.
- **O Igor escolheu a sorteada** ("planilha que vira sistema") em vez do pick (linha contínua),
  a fita como material e a **abertura escura** no degradê. O ping de escolha rodou com
  `DO_NOT_TRACK=1`, como no portfólio.
- Sem geração de imagem nesta máquina: build **code-led**, dito no brief. A ambição está no
  FIRST VIEWPORT e na fita como cursor de seleção da planilha.
- Briefs gravados com `surface-brief write`: `.impeccable/surfaces/src-pages-index-astro.md`
  (home) e `.impeccable/surfaces/src-pages-sites-astro.md` (página de serviço, com `sistemas` e
  `servicos` como alvos relacionados). Os dois têm os seis blocos e a referência do seed.
- Decisão de composição registrada no brief, além das três perguntas: as páginas de serviço
  abrem claras (o escuro é assinatura da home e da chamada final); a grade atravessa a fronteira
  do escuro para o claro; os projetos ficam fora da grade em tamanhos desencontrados; sobre a
  prévia a fita vira moldura. O Igor confirma no TODO 4 com o site rodando.

---

## TODO 4: Build das páginas e do movimento

**Status:** feito em 30/10/2026 (falta o Igor aprovar o movimento com o site rodando)
**Depende de:** TODO 3

**Leia antes:** [processo.md](.claude/docs/processo.md) (etapa 4 e checklist),
[direcao-visual.md](.claude/docs/direcao-visual.md) (tudo), os surface briefs em
`.impeccable/surfaces/`, `.claude/skills/impeccable/reference/craft-floor.md` (obrigatório
antes de qualquer edição de UI), [referencias/meu-portfolio.md](.claude/docs/referencias/meu-portfolio.md)
(seções 2, 3 e 4) e os arquivos do portfólio que ele aponta.

**Objetivo:** construir home, serviços, sites, sistemas, projetos, projeto, contato, acessos e
404 conforme os contratos, com o material da marca no hover e no cabeçalho e a troca de página
saindo do logo. As prévias dos projetos ficam como espaços reservados com a proporção certa
(TODO 5). O formulário e a base de métricas nascem aqui.

**Passos:**
1. Copiar do portfólio `motor.ts`, `menu.ts` e, se a rolagem suave ficar, `rolagem.ts`. São
   genéricos. Conferir as versões do Lenis.
2. Estrutura semântica de todas as páginas com o texto do TODO 2, funcionando sem JS.
3. Layout e tipografia a partir da escala de MARCA.md e dos contratos: grid, espaçamento,
   responsivo de 390 px a 1600 px. Logo horizontal no cabeçalho (`primary` sobre claro, `white`
   sobre escuro), sempre pelo arquivo SVG.
4. Cabeçalho com o submenu de Serviços (Sites, Sistemas), Projetos, Blog e Contato; menu do
   celular. Botão de WhatsApp sempre visível. Rodapé com e-mail, Instagram, WhatsApp, "Agência
   Infinium", CNPJ (se confirmado) e Privacidade.
4a. Formulário de contato (`src/components/Formulario.astro` + `src/scripts/formulario.ts`):
   HTML `POST` para o Web3Forms (funciona sem JS), campos com validação nativa e limite de
   tamanho, honeypot, widget do Turnstile (só nesta página) e o botão "Enviar pelo WhatsApp"
   que monta a mensagem com os campos e abre o `wa.me`. Chaves em `PUBLIC_*` do `.env`
   (arquitetura.md, seção 7). Sem chave no build, o formulário mostra `[PENDENTE]`.
4b. Base de métricas: `src/scripts/metricas.ts` com uma função única `registrar(evento, dados)`
   que só enfileira até o TODO 6 ligar GA4 e Pixel; atributos `data-evento` em todos os CTAs
   (WhatsApp, formulário, botões de serviço, Raio-X).
5. O material da marca (decidido no TODO 3) em `src/components/` e `src/scripts/`, num único
   passo do motor, com as regras de direcao-visual.md, seção 4.
6. Troca de página pela mecânica da cortina do portfólio (meu-portfolio.md, seção 3), com a
   pele da Infinium e total abaixo de 1,2 s. Com movimento reduzido, fade curto.
7. Seções escuras em degradê: só White e Lilás sobre elas. Nunca Primary sobre escuro.
8. A página de acessos: sem cabeçalho e rodapé, três botões grandes, no degradê.
9. Rodar o craft floor e o detector a cada passo. Checklist de processo.md antes de cada commit.

**Não fazer:** prévias (TODO 5), metadados finais (TODO 6), biblioteca de animação, cursor
customizado se o Igor não escolheu, imagem de banco.

**Pronto quando:**
- [x] Todas as páginas construídas conforme os contratos, nos dois tamanhos (390 e 1440).
- [x] Troca de página funcionando entre todas as páginas, abaixo de 1,2 s, e fade com movimento
      reduzido (medido: 1,1 s do clique ao fim da cortina, com o carregamento; 0,7 s em fade).
- [x] Teclado, toque, sem JS e movimento reduzido conferidos (script `scripts/inspecao.mjs`).
- [x] `npm run build` e `astro check` sem erro nem warning.
- [x] Nenhum achado aberto do detector da impeccable.

**Commits sugeridos:** `feat: adiciona motor de movimento e menu`, `feat(hero): adiciona a
abertura da home`, `feat(servicos): constrói o hub de serviços`, `feat(sites): constrói a página
de sites`, `feat(sistemas): constrói a página de sistemas`, `feat(projetos): constrói o
portfólio`, `feat(contato): adiciona a página e o formulário de contato`, `feat: adiciona a base
de métricas`, `feat: adiciona a troca de página`, `feat(acessos): constrói a página de links`.

**Precisa do Igor:** aprovar o movimento com o site rodando.

**Notas:**
- A planilha é CSS: `.folha` desenha as linhas de coluna com um `repeating-linear-gradient`
  alinhado às 12 colunas (6 no tablet, 4 no celular), cada `Linha.astro` tem a cabeça numerada
  (`counter`, com texto alternativo vazio para o leitor de tela) e as células se posicionam por
  classe de seção. `Colunas.astro` é a linha das letras. Célula mesclada = bloco sólido que cobre
  as linhas.
- A fita: hover de links e botões, a seleção da planilha e a moldura das prévias são **só CSS**.
  A seleção que desce linha a linha na cena do problema usa animação dirigida por rolagem
  (`animation-timeline: view()`); sem suporte ou com movimento reduzido, a primeira linha fica
  selecionada. O laço das etapas e a troca de página ficam em `src/scripts/fita.ts`, num passo
  do motor. A troca parte da régua do cabeçalho (`[data-fita-regua]`): a linha engrossa até
  cobrir a tela com o degradê (320 ms), mostra o h1 da próxima página (200 ms), pausa 100 ms e
  volta à régua (320 ms). Com movimento reduzido, fade de 150 ms em cada sentido.
- Rolagem suave: `rolagem.ts` do portfólio, Lenis **1.3.27**, âncora em 1,1 s. `motor.ts` e
  `menu.ts` copiados; o menu deixa `main`, `footer` e `.fechamento` inertes quando aberto.
- Cabeçalho: logo em dois arquivos (Primary e branco), trocados por CSS conforme o fundo e com
  o painel aberto. Submenu de Serviços no desktop por hover e `focus-within`; no celular, o
  painel lista Sites e Sistemas dentro do grupo. **Botão flutuante do WhatsApp** em Lilás no
  celular e no tablet (no desktop o botão fica no cabeçalho), escondido com o menu aberto.
- Rodapé sempre sobre o degradê, junto com a chamada final de cada página (`ChamadaFinal.astro`
  no slot `fechamento` do `Base.astro`). A home é a única com abertura escura (`aberturaEscura`).
- Formulário (`Formulario.astro` + `formulario.ts`): POST nativo para o Web3Forms com honeypot,
  limites de tamanho, Turnstile e redirecionamento para `/contato/enviado/` (noindex, fora do
  sitemap). "Enviar pelo WhatsApp" monta a mensagem e abre o `wa.me`; sem JS esse botão some.
  Sem `PUBLIC_WEB3FORMS_KEY`, o botão de e-mail fica desativado e a página mostra o
  `[PENDENTE]`. Chaves em `.env` (`.env.example` versionado).
- Métricas: `metricas.ts` com `registrar()` e `conectar()`; os cliques em `[data-evento]` ficam
  numa fila em memória até o TODO 6 ligar GA4 e Pixel. Nada sai do navegador por enquanto.
- Prévias: `Obra.astro` mostra a moldura com o fundo real de cada site e o nome, até o TODO 5.
- Verificação com Playwright 1.64.1 (`scripts/inspecao.mjs`, capturas em 1440 e 390, console,
  Tab, menu, sem JS, movimento reduzido, tempo da troca). Correções feitas a partir das capturas:
  prévia grande subia sobre o texto da seção (margem negativa removida), o laço passava por cima
  do texto da conexão (agora à direita, só no desktop), botão flutuante cobria o botão do painel.
  A barra de ferramentas do Astro aparecia nas capturas porque o `astro preview` a injeta;
  desligada no `astro.config.ts` (nunca entrou no `dist/`). Nas capturas de página inteira o
  submenu aparece esmaecido: é artefato do Playwright (confirmado: na captura do viewport ele
  está oculto, `opacity: 0`).
- Fora do escopo e deixado para o TODO 6: CSP, consentimento, GA4 e Pixel reais, texto da
  privacidade. Para o TODO 7: blog. Para o TODO 8: a LP do Raio-X.

---

## TODO 5: Prévias dos sites de clientes

**Status:** feito em 30/10/2026
**Depende de:** TODO 4

**Leia antes:** [arquitetura.md](.claude/docs/arquitetura.md) (seção 5),
[projetos/README.md](.claude/docs/projetos/README.md) e o arquivo de cada site que entrar,
[referencias/meu-portfolio.md](.claude/docs/referencias/meu-portfolio.md) (seção 2, o item das
prévias) e o TODO 5 do portfólio (`~/Projects/meu-portfolio/TODO.md`, passos e Notas).

**Objetivo:** substituir os espaços reservados por prévias em HTML/CSS reais, fiéis à identidade
de cada site, interativas, leves e acessíveis.

**Passos:**
1. Os quatro projetos são Brisa Café, Linetex, Lumaj e RetroDash (decidido em 30/10/2026). Os
   avais de foto já foram dados no portfólio.
2. Copiar do portfólio o componente, o script e as fontes com subset de cada um; conferir o
   `revisadoEm` contra o site publicado; adaptar os rótulos e a integração com o material da
   marca.
3. Se um site novo entrar depois (do monorepo `~/Projects/infinium/sites/`): primeiro o arquivo
   em `.claude/docs/projetos/` no mesmo formato (fatos, identidade, o que reproduzir, interações
   que existem), com capturas em `capturas/`; depois o componente e o script pelo mesmo método.
4. Fontes de cada site: self-hosted com subset, carregadas quando a prévia se aproxima,
   fallback com `size-adjust`.
5. Acessibilidade e orçamento conforme arquitetura.md, seção 5.
6. Comparação lado a lado com o original (desktop e 390 px).

**Não fazer:** iframe, screenshot, elementos ou funcionalidades que não existem no original,
foto sem aval.

**Pronto quando:**
- [x] As prévias aparecem na home, nas páginas de serviço, no portfólio e na página de cada
      projeto.
- [x] Cada interação listada funciona com mouse, toque e teclado (`scripts/inspecao-previas.mjs`:
      tema da Brisa, "Cotar" da Linetex, "Adicionar" da Lumaj, voto do RetroDash; todos os
      controles focáveis).
- [x] A comparação lado a lado não mostra diferença de identidade (capturas dos quatro originais
      em 1440 e das prévias em 1440 e 390).
- [x] Orçamento respeitado e sem layout shift ao carregar fontes (fallback com `size-adjust`
      gerado pelo Astro).

**Commits sugeridos:** um por prévia, `feat(projetos): adiciona prévia da brisa café`, e
`perf: carrega fontes das prévias sob demanda`.

**Precisa do Igor:** nada, salvo se um site mudou desde o `revisadoEm`.

**Notas:**
- Copiados do portfólio como estavam: `src/components/previas/{BrisaCafe,Linetex,Lumaj,Retrodash}.astro`,
  `fotosCatalogo.ts`, `src/scripts/previas/*.ts`, `src/scripts/previas.ts`, os logos em
  `src/assets/previas/`, as fotos com aval (salão e espresso da Brisa; miniaturas de catálogo da
  Linetex e da Lumaj) e as seis fontes com subset em `src/assets/fontes-previas/` (Figtree, Young
  Serif, Lexend Exa, Lexend, Montserrat, Plus Jakarta Sans). O script
  `scripts/subsetar-fontes-previas.py` ficou com só essas seis; regenerar exige instalar os
  pacotes do Fontsource, que este repositório não tem.
- Adaptação: a prop `idioma` e os rótulos em inglês saíram (site só em PT-BR). O resto é igual,
  inclusive o `--u` por container, o layout largo (referência 1100 px, container a partir de
  700 px) e o estreito (400 px).
- Conferido em 30/10/2026 contra os sites publicados (title, h1, palavras-chave das interações):
  os quatro batem. **A Linetex mudou**: o site passou a dizer "em Brusque e região" (title,
  description, hero e endereço em Brusque). A prévia, o arquivo de projeto, o `resumo` e o corpo
  do case foram atualizados. `revisadoEm: 2026-10-30` nos quatro.
- Integração com a planilha: `Obra.astro` renderiza a prévia na moldura (`region` com rótulo,
  fora de `<a>`; só os controles recebem o ponteiro; o resto da área leva à página do projeto).
  Sobre a moldura, a fita vira contorno de 2 px (CSS, `hover`, `focus-within` e `active`). Na
  página do projeto a prévia ocupa 9 das 12 colunas e nasce ativa; na home e nas páginas de
  serviço, ativa a 600 px da tela (`IntersectionObserver`), que é quando a fonte do site é
  baixada. `FontesPrevias.astro` entra no `head` das páginas com prévia.
- Peso (gzip): CSS das quatro prévias 8,5 KB; JS das prévias 4,2 KB (Lumaj 1,6, Linetex 1,3,
  Brisa 0,9, RetroDash 0,5); JS total do site 16 KB; HTML da home 35 KB (210 KB cru, pelos SVGs
  repetidos nas listas). Fontes dos clientes só são baixadas quando a prévia ativa.
- Verificação (`scripts/inspecao-previas.mjs`): captura de cada prévia ativa em 1440 e 390 e
  do original em 1440, as quatro interações, fontes carregadas, controles focáveis, console sem
  erro. Comparação visual: identidade, tipografia, proporção e espaçamento batem; na home as
  molduras de 8 e 5 colunas mostram a composição estreita dos sites (como no celular), e na
  página do projeto a composição larga.

---

## TODO 6: Texto final, metadados, revisão e publicação

**Status:** feito em 31/10/2026 no repositório; a publicação, as contas e as chaves são do Igor (ver Notas)
**Depende de:** TODO 5, TODO 7 e TODO 8

**Leia antes:** [processo.md](.claude/docs/processo.md) (etapa 6),
`.claude/skills/impeccable/reference/new-work.md` (seção 7), as skills `fixing-metadata` e
`humanize-text`, e [arquitetura.md](.claude/docs/arquitetura.md) (seções 2, 4 e 7).

**Objetivo:** levar o site a padrão de produção, registrar o design system construído e publicar
no domínio, na Hostinger.

**Passos:**
1. Ligar GA4 e Meta Pixel (decididos em 30/10/2026): o Igor cria as contas e passa os IDs para o
   `.env`; carregar só depois do consentimento, banner no padrão dos sites de clientes, eventos
   de `metricas.ts` ligados aos dois. Escrever `/privacidade/` cobrindo GA4, Pixel, formulário e
   cookies (LGPD). Sem termos de uso.
1a. Formulário em produção: o Igor cria a conta do Web3Forms (destino `agenciainfinium@gmail.com`)
   e o site do Turnstile; chaves no `.env`; testar envio por e-mail e por WhatsApp, o honeypot e
   um envio sem JS.
1b. Segurança (arquitetura.md, seção 7): `Content-Security-Policy` no `.htaccess` com as origens
   de GA4, Pixel, Turnstile e Web3Forms; conferir HSTS e os demais cabeçalhos no domínio;
   `npm audit` limpo; nenhum segredo no repositório.
2. `fixing-metadata` em todas as páginas: title, description, canonical, Open Graph (imagem
   própria por página de projeto), favicon, manifest e JSON-LD (`Organization`, `WebSite`,
   `Service` nas páginas de serviço, `CreativeWork` nos projetos). Validar o JSON-LD.
3. Passar a `humanize-text` mais uma vez em todo o texto e de novo a busca por travessão. O Igor
   faz o ajuste fino com o site rodando.
4. Inspeção da impeccable: capturas em `.impeccable/review/` (desktop 1440 e mobile 390, página
   inteira), uma rodada de correções em lote e, no máximo, mais uma.
5. Rodar o `impeccable-finish-reviewer` com o pacote completo. Agir conforme o veredito.
6. Metas: Lighthouse acima de 95 nas quatro categorias (desktop e celular, home e uma página de
   serviço), CLS abaixo de 0,05, contraste AA, navegação completa pelo teclado, site usável sem
   JS, nenhum erro de console. Smoke tests com Playwright: rotas, troca de página, prévias.
7. Rodar o `impeccable-documenter`: `DESIGN.md` e `.impeccable/design.json`.
8. Publicação na Hostinger: `npm run build`, zipar o conteúdo de `dist/` (com o `.htaccess`) e
   subir para `public_html`; DNS de `infinium.app.br`, HTTPS ativo, `www` redirecionando;
   conferir a 404, o canonical e o sitemap no domínio final. Atualizar o link da bio do
   Instagram para `infinium.app.br/acessos`.
9. Google Search Console: verificar o domínio e enviar o sitemap.
10. README do repositório (o que é, como rodar, como adicionar um projeto) e marcar este TODO.

**Não fazer:** novas features; publicar sem o veredito do revisor.

**Pronto quando:**
- [x] Veredito do `impeccable-finish-reviewer`: duas rodadas (`fix` com seis itens, depois `fix`
      com um item só, o laço da conexão, corrigido e conferido na captura). Ver Notas.
- [x] As metas do passo 6 foram atingidas e registradas em "Notas".
- [x] `DESIGN.md` e `.impeccable/design.json` existem (escritos pelo `impeccable-documenter`).
- [ ] O site está no ar em `infinium.app.br`, com o sitemap enviado ao Search Console.
      `[PENDENTE: o Igor sobe o infinium-site.zip na Hostinger e verifica o domínio no Search Console]`
- [ ] Formulário, consentimento, GA4 e Pixel testados em produção; cabeçalhos de segurança e CSP
      conferidos no domínio. `[PENDENTE: depende das contas, das chaves e da publicação]`

**Commits sugeridos:** `feat(seo): completa metadados e json-ld`, `fix: aplica correções da
revisão final`, `test: adiciona testes de fumaça`, `docs: adiciona DESIGN.md`,
`docs: adiciona README`.

**Precisa do Igor:** contas do GA4, Pixel, Web3Forms e Turnstile; acesso à Hostinger, DNS e
Search Console.

**Notas:**
- **Consentimento e rastreamento** (`Consentimento.astro`, `rastreamento.ts`,
  `consentimento.ts`), no padrão dos sites de clientes (`packages/core` do monorepo): Consent
  Mode v2 com tudo negado por padrão, GA4 e Pixel baixados só depois do aceite, banner com
  aceitar, recusar e personalizar, escolha no `localStorage`, link "Preferências de cookies"
  no rodapé, e os eventos de `metricas.ts` entregues às tags aceitas. Tudo lê os IDs de
  `PUBLIC_GA4_ID` e `PUBLIC_META_PIXEL_ID` por `data-*`, sem script inline. Sem IDs, não há
  cookie nem banner. `[PENDENTE: o Igor cria as contas e preenche o .env]`
- **Formulário:** código pronto desde o TODO 4; falta `PUBLIC_WEB3FORMS_KEY` e
  `PUBLIC_TURNSTILE_SITE_KEY`. Testado o envio pelo WhatsApp (teste de fumaça) e o `[PENDENTE]`
  visível sem a chave. `[PENDENTE: contas do Web3Forms e do Turnstile e o teste do envio por
  e-mail em produção]`
- **Política de privacidade** escrita (`src/i18n/paginas/privacidade.ts`): quem trata, o que
  o site coleta e por quê (formulário via Web3Forms, WhatsApp, GA4, Pixel, registros do
  servidor), cookies só depois do aceite, compartilhamento, direitos, segurança. Sem termos de
  uso. Revisão jurídica é do Igor.
- **Segurança:** CSP no `.htaccess` com `script-src 'self'` mais o hash do único script inline
  (a classe `js`, numa linha só, com `prettier-ignore`) e as origens do GA4, Pixel, Turnstile e
  Web3Forms; `assetsInlineLimit: 0` para o Astro não inlinar scripts (o hash mudaria a cada
  build); `style-src 'unsafe-inline'` por causa do CSS inlinado pelo Astro; HSTS, nosniff,
  frame DENY, Referrer-Policy, Permissions-Policy, `frame-ancestors 'none'`, deflate e cache.
  `npm audit` limpo. O `scripts/servir.mjs` serve o `dist/` com esses cabeçalhos para os
  testes e o Lighthouse. Conferir no domínio depois de publicar (securityheaders.com).
- **Metadados** (`fixing-metadata`): title, description, canonical e `og:url` conferidos em
  todas as rotas pelo teste de fumaça; `og:type article` nos posts; JSON-LD `Organization` +
  `WebSite` em tudo, `Service` em sites, sistemas e Raio-X, `WebSite`/`SoftwareApplication`
  com `creator` nas páginas de projeto, `BlogPosting` nos posts. Imagens Open Graph próprias
  por projeto em `public/og/<slug>.png` (geradas por `npm run og` a partir da prévia, no
  degradê da marca). Títulos sem as cidades: `[PENDENTE: cidades do SEO local]`.
- **Revisão da impeccable:** capturas em `.impeccable/review/` (`npm run inspecao`, que rola a
  página antes de capturar para as prévias ativarem). Rodada 1 do `finish-reviewer`: `fix` com
  seis itens, todos aplicados: galeria em subgrid com moldura e ficha nas colunas do contrato
  (a contagem passou a `nth-of-type`, porque o Astro renderiza o `<script>` da obra entre os
  artigos), fontes dos clientes nas capturas, `padding-inline` nos títulos de seção, "Ver o
  blog" em célula, sombras removidas do flutuante e do submenu (flutuante escondido sobre a
  abertura escura, registrado no contrato da home), laço da conexão na linha inteira. Rodada
  2: `fix` com um item (o laço cruzava o parágrafo); corrigido e conferido na captura. Veredito
  efetivo `ship`: nada material aberto.
- **Lighthouse** (31/10/2026, build servido por `servir.mjs` com gzip, Chrome do Playwright):
  home desktop 100/97/100/100, celular 99/97/100/100; /sites/ desktop 100/100/100/100, celular
  99/100/100/100; /sistemas/ celular 99/97/100/100; /raio-x-do-site/ celular 100/100/100/100.
  CLS 0 em tudo, TBT até 60 ms. O 97 de acessibilidade vem só do contraste de rótulos dentro
  da prévia do RetroDash (cores do produto, reproduzidas de propósito); os alvos de voto
  ganharam 24 px de altura mínima. Antes do gzip e do CSS inlinado o celular estava em 87;
  `build.inlineStylesheets: 'always'` e a compressão resolveram.
- **Testes de fumaça** (`npm test`, Playwright 1.64.1, 24 testes): rotas e metadados, 404,
  cabeçalhos do `.htaccess`, sitemap/robots/RSS/manifest/OG, troca de página abaixo de 1,2 s e
  fade com movimento reduzido, prévias (fonte do cliente, interações), teclado, menu, sem JS,
  sem rolagem horizontal no celular, formulário pelo WhatsApp.
- **Publicação:** `npm run empacotar` gera `infinium-site.zip` (conteúdo de `dist/` com o
  `.htaccess`, 239 arquivos, ~14 MB) para descompactar em `public_html`. Passo a passo no
  README. `[PENDENTE: subir na Hostinger, DNS, HTTPS, www, conferir 404, canonical e sitemap no
  domínio, atualizar o link da bio para infinium.app.br/acessos, Search Console]`
- **Documentação:** README (rodar, configurar, publicar, adicionar projeto e post), DESIGN.md e
  `.impeccable/design.json` pelo documenter, processo.md atualizado com onde o projeto está.
- Observação de ambiente: o `npm run dev` do Igor ocupa a porta 4321; os scripts de inspeção,
  testes e Lighthouse sobem o próprio servidor do `dist/` em outras portas.

---

## TODO 7: Blog

**Status:** feito em 30/10/2026 (falta a leitura do Igor e a data real de publicação)
**Depende de:** TODO 4

**Leia antes:** [conteudo.md](.claude/docs/conteudo.md) (seção 9), [arquitetura.md](.claude/docs/arquitetura.md)
(seções 2 e 8), [identidade/EMPRESA.md](.claude/docs/identidade/EMPRESA.md) (tom de voz), a
skill `humanize-text` e o contrato de direção da página de serviço (`.impeccable/surfaces/`).

**Objetivo:** blog em Markdown, sem CMS, lançado já com os posts prontos, cada um terminando num
serviço ou no Raio-X.

**Passos:**
1. Fechar com o Igor a lista de posts a partir dos temas de conteudo.md, seção 9 (cinco a
   sete), e a data prevista de publicação do site.
2. Content collection `blog` em `src/content/blog/` com schema tipado: `titulo`, `descricao`,
   `data`, `atualizadoEm` (opcional), `tags`, `rascunho`. Rascunhos ficam fora do build.
3. Páginas `/blog/` (lista em ordem de data, com data e tempo de leitura) e `/blog/<slug>/`
   (texto, autor Igor, CTA no fim, próximo e anterior). Layout a partir do contrato da página de
   serviço, medida de texto confortável no celular.
4. Escrever os posts: curtos, para dono de empresa, sem jargão, sem travessão, com a
   `humanize-text`. Nada de número ou promessa que não esteja em EMPRESA.md ou SERVICOS.md.
5. Datas: o último post com a data da publicação do site; os anteriores escalonados 1, 2, 3 e 4
   dias antes (Igor, 30/10/2026). As datas são visuais e não mudam a indexação.
6. SEO: title e description por post, JSON-LD `BlogPosting`, Open Graph com a imagem padrão,
   posts no sitemap, feed RSS em `/blog/rss.xml`.
7. Link para o blog no menu e, na home, os três últimos posts.

**Não fazer:** CMS, comentários, categorias além de tags, post sem CTA, post com data futura.

**Pronto quando:**
- [ ] Os posts aprovados pelo Igor estão publicados, com as datas escalonadas. Os seis posts
      estão escritos e publicados no build; falta o Igor ler. As datas já ficam escalonadas a
      partir de `dataPublicacao` em `src/data/blog.ts`.
- [x] Lista e post renderizam em 390 e 1440 px, sem travessão, sem dado inventado.
- [x] Sitemap, RSS e JSON-LD conferidos no `dist/`.

**Commits sugeridos:** `feat(blog): adiciona coleção e páginas do blog`, `content(blog): escreve
os posts de lançamento`, `feat(seo): adiciona json-ld e rss do blog`.

**Precisa do Igor:** a lista de posts, a leitura final e a data de publicação do site.

**Notas:**
- Sem rodada de perguntas (o Igor pediu para seguir até o fim): entraram seis dos sete temas de
  conteudo.md, seção 9. Ficou de fora "quanto custa um site", que sem preço público vira texto
  vago. Posts, do mais antigo ao mais novo: por que o site não aparece no Google (5 dias antes),
  Instagram não substitui site (4), o que deixa um site lento (3), o que é um site seguro (2),
  política de privacidade, cookies e LGPD (1) e quando a empresa precisa de um sistema só (dia
  da publicação). Cada um termina numa chamada: Raio-X (3 posts), sites (2) ou sistemas (1).
- **Datas:** `src/data/blog.ts` tem `dataPublicacao` (hoje, 30/10/2026, como marcador
  `[PENDENTE]`); cada post tem `diasAntes` no frontmatter e a data efetiva é calculada. Quando
  o site for ao ar, basta trocar a constante. `data` fixa no frontmatter também funciona. O
  build derruba post com data futura.
- Collection `blog` em `src/content/blog/` (`titulo`, `descricao` até 160, `data` opcional,
  `diasAntes`, `atualizadoEm`, `tags`, `rascunho`, `chamada`). Páginas `/blog/` e
  `/blog/<slug>/` em `src/pages/blog/`, com autor, data, tempo de leitura (200 palavras por
  minuto), a chamada numa célula mesclada, post anterior e próximo e "Todos os posts". Textos
  de interface em `src/i18n/paginas/blog.ts`.
- SEO: `Seo.astro` ganhou `jsonLd` (nós extras no grafo) e `tipoOg`; cada post tem `BlogPosting`
  (autor, datas, publisher apontando para a `Organization`) e `og:type article`. RSS em
  `/blog/rss.xml` gerado por um endpoint próprio, sem dependência, com `<link rel="alternate">`
  na lista. Os seis posts e `/blog/` estão no sitemap.
- Home: seção "Do blog" com os três últimos posts (data e título) antes do FAQ, e "Ver o blog".
- Título com dois-pontos precisa de aspas no YAML (o post de segurança quebrou o build na
  primeira tentativa).
- Verificado: `astro check`, build, Prettier, nenhum travessão em `src/content/blog/`, capturas
  da lista e de um post em 1440 e 390.

---

## TODO 8: Raio-X do site (produto de entrada)

**Status:** feito em 30/10/2026, menos preço, prazo e link de pagamento (do Igor, ver Notas)
**Depende de:** TODO 4

**Leia antes:** [conteudo.md](.claude/docs/conteudo.md) (seção 11), [arquitetura.md](.claude/docs/arquitetura.md)
(seções 7 e 8), as skills `humanize-text` e `impeccable` (`shape` em modo Persuade) e o
contrato de direção da home.

**Objetivo:** a landing page `/raio-x-do-site/`, sem menu, com uma oferta e uma ação, pronta
para receber tráfego pago e vender a análise de SEO, velocidade, segurança e LGPD a preço baixo.

**Passos:**
1. Fechar com o Igor, numa rodada só: preço, prazo de entrega, o que exatamente vai no PDF, o
   provedor do link de pagamento (Mercado Pago ou Stripe) e os dois ângulos de anúncio ("não
   aparece no Google" e "seu site está seguro?").
2. Layout `LandingPage.astro`: sem cabeçalho e sem rodapé longo (só logo, privacidade e
   contato), um CTA repetido, nada que tire a pessoa da página.
3. Conteúdo: headline espelhando o anúncio, o que a pessoa recebe, para quem é, como funciona
   em três passos (paga, manda a URL, recebe o relatório e a conversa), preço, FAQ e o botão
   para o link de pagamento. Passar a `humanize-text`.
4. Métricas: eventos de clique no botão e de visualização das seções, por `metricas.ts`; UTM
   preservada no link de pagamento.
5. SEO: indexável, title e description próprios, JSON-LD `Service` com `offers`.
6. Um checklist interno (fora do site, em `.claude/docs/raio-x.md`) do que o Igor confere em cada
   análise, só com checagens passivas no site do cliente: PageSpeed, Search Console, HTTPS,
   versão do CMS, política de privacidade e cookies, cabeçalhos. Nunca varredura invasiva.

**Não fazer:** menu, duas ofertas, pagamento dentro do site, promessa de resultado, "grátis".

**Pronto quando:**
- [ ] A LP está no ar com preço, prazo e link de pagamento reais. `[PENDENTE: os três são do
      Igor; até lá a página mostra o aviso no preço e o botão leva ao WhatsApp]`
- [ ] Um teste de ponta a ponta: clique, pagamento em modo de teste, mensagem de confirmação.
      `[PENDENTE: depende do link de pagamento]`
- [ ] Eventos chegando no GA4 e no Pixel (depois do TODO 6). Os eventos já são registrados em
      `metricas.ts`; chegar ao GA4 depende dos IDs.

**Commits sugeridos:** `feat(raio-x): adiciona a landing page do raio-x do site`, `content(raio-x):
escreve a oferta`, `docs: adiciona o checklist do raio-x`.

**Precisa do Igor:** preço, prazo, provedor de pagamento e o conteúdo do PDF.

**Notas:**
- Sem rodada de perguntas (o Igor pediu para seguir até o fim). `src/data/raioX.ts` guarda
  `preco`, `prazoDias` e `linkPagamento`, todos `null` com `[PENDENTE]`. Com `null`, a página
  mostra o aviso tracejado no lugar do preço e o botão leva ao WhatsApp com a mensagem do
  Raio-X; o JSON-LD `Service` só ganha `offers` quando houver preço. Basta preencher as três
  constantes.
- Layout `src/layouts/LandingPage.astro`: sem menu (nenhum `nav` na página), logo sem link,
  régua da fita, fechamento no degradê com o botão e um rodapé curto (WhatsApp, e-mail,
  privacidade). Mesmo mundo da planilha. `BotaoRaioX.astro` é o CTA, repetido três vezes
  (abertura, preço, fechamento).
- Texto em `src/i18n/paginas/raioX.ts`: abertura, para quem é, o que você recebe (Google,
  velocidade, segurança, LGPD, conversa), como funciona em três passos, preço, FAQ e
  fechamento. Sem "grátis", sem promessa de resultado, sem número. O parágrafo "honesto" diz
  que o Raio-X mostra e não conserta.
- Ângulos de anúncio: `?angulo=google` e `?angulo=seguranca` trocam o `h1` pela abertura do
  ângulo (`src/scripts/raio-x.ts`); sem parâmetro, a abertura cobre os dois. Testado.
- Métricas: `raio_x_cta_*` nos três botões e `raio_x_secao_vista` por seção (uma vez cada),
  via `metricas.ts`. Os parâmetros `utm_*` da URL são copiados para o link de pagamento
  (`data-raio-x-pagamento`), que só existe quando o link estiver preenchido.
- SEO: indexável, title e description em `textos.ts`, JSON-LD `Service` com `provider`
  apontando para a `Organization`. Está no sitemap.
- Checklist interno em `.claude/docs/raio-x.md`: só leitura passiva (Google, PageSpeed,
  cabeçalhos, formulário, LGPD), com a regra explícita de nunca varrer nem testar invasão.
- Ajuste de layout que apareceu aqui e valia para o site todo: no celular, as linhas "chave e
  valor" (resultados, benefícios, tipos, o que você recebe) empilham a chave sobre o valor em
  vez de dividir as quatro colunas. Os canais do contato também.

## TODO 9: Fotos, bandas, cartões, ícones e holofote (feito em 31/10/2026)

**Depende de:** TODO 6

**Objetivo:** a rodada de revisão depois de o Igor ver o site pronto: tirar as letras de coluna e
os números de linha, separar as seções como bandas, pôr fotos, cartões com ícones desenhados pela
fita e um efeito de luz sob o ponteiro.

**Pedidos do Igor (31/10/2026):** "Não gostei dos quadrados de A a L e dos números. Não pode ter
isso. Senti falta imagem, pegar umas no unsplash sei lá. Até para o blog. [...] ajuda para colocar
um detalhe em algum fundo, ter um efeito com mouse". E depois: "Estou sentindo falta de ícones
também, tipo: Todo site inclui. Parece que tá muito um blog, talvez mais quebras de seção [...]
Ter mais cards, pensar em alguma coisa tipo apple ou microsoft talvez (não digo de design, mas de
separação de seção). [...] fazer aqueles ícones animados, que se completam com o scroll da página.
[...] os ícones tendo um certo brilho, chama a atenção."

**Passos:**
1. Tirar `Colunas.astro` e o `.num` de `Linha.astro`; a cabeça de linha sai de todas as grades e
   cada célula anda uma coluna para a esquerda (os subgrids da galeria não mudam).
2. Fotos do Unsplash em `src/assets/fotos/`, registro em `src/data/fotos.ts`, componente
   `Foto.astro` (AVIF e WebP, preguiçosa, tinta violeta sobre o escuro). Abertura da home, cena
   do problema, blocos de serviço, cabeças de `/sites/`, `/sistemas/` e do Raio-X, capa dos posts
   (campo `capa` no schema).
3. `Secao.astro`: cada seção vira uma banda de largura inteira, alternando Body, White e o
   degradê, com a folha fechada dentro.
4. `Cartao.astro` e `.cartoes`: células mescladas em grade, separadas por 1 px, com ícone. Entram
   em "o que a gente faz", "todo site inclui", resultados, benefícios, "para quem é", "o que você
   recebe", a pergunta do hub e os canais do contato.
5. `src/data/icones.ts` e `Icone.astro`: 28 ícones de traço próprios, desenhados pela fita conforme
   a rolagem (`animation-timeline: view()`), com brilho na cor da fita. Também nas células da
   cena, nas listas de problema e na entrega do hub.
6. `holofote.ts`: a luz que segue o ponteiro e acende as linhas da grade, e a fita contornando a
   célula sob o ponteiro. Só ponteiro fino, nada com movimento reduzido.
7. Testes novos em `tests/fumaca.test.mjs`, capturas novas em `scripts/inspecao.mjs` (holofote e
   ícones no meio do desenho), docs: direcao-visual.md, conteudo.md, PRODUCT.md, fotos.md,
   briefs, DESIGN.md e design.json.

**Pedido seguinte (31/10/2026, vendo o resultado):** "Se eu falei que gostei desses quadradinhos,
eu não gostei mais. Pode remover. E sobre cada seção, queria que ocupasse pelo menos 85vh, acho
mais elegante." Saíram as linhas verticais da planilha, as bordas da folha, as células se fundindo
no bloco de sistemas e a célula ativa do holofote (fica só a luz); o filete entre linhas ficou
só nas listas; a seleção da cena virou a fita por baixo da linha; toda banda tem
`min-block-size: 85svh` com o conteúdo centrado.

**Não fazer:** biblioteca de ícones, foto de pessoa posando como equipe ou cliente, sombra fora
do brilho dos ícones, efeito no toque, linha vertical de grade.

**Pronto quando:**
- [x] Nenhuma página mostra letras de coluna ou números de linha.
- [x] Fotos na home, nas páginas de serviço, no Raio-X e no blog, com `alt`, AVIF e WebP.
- [x] Seções em bandas alternadas; cartões com ícones; ícones se desenham ao rolar.
- [x] Holofote (só a luz) só com ponteiro fino; nada no toque, com movimento reduzido ou sem JS.
- [x] Nenhuma linha vertical de grade; seções com pelo menos 85svh.
- [x] `npm run build`, `npm test` e `npm run inspecao` passam; Lighthouse conferido.

**Notas:**
- A regra do contrato "nunca três cards iguais em fila" foi substituída pela decisão do Igor: os
  cartões existem, como células da planilha, cada um com o seu ícone (direcao-visual.md, seção 5).
- O brilho dos ícones é a exceção deliberada à Regra do Plano (sem sombra): fica só nos ícones e
  no holofote, sempre na cor da fita.
- Dist passou de 6,2 MB para cerca de 15 MB por causa das variantes das fotos; cada página carrega
  só os tamanhos que usa.

---

## TODO 10: Escolher a direção nova e levar ao site inteiro

**Status:** feito em 05/11/2026
**Depende de:** as três versões de estudo (05/11/2026), apagadas neste item

**Objetivo:** o Igor viu o site pronto e não gostou. Em 05/11/2026 entraram três versões de
estudo da home, cada uma com a própria pele sobre a mesma identidade, documentadas em
[versoes.md](.claude/docs/versoes.md): a vitrine (direção Apple), o painel (direção Microsoft) e
o infinito (direção de agência). Este item começa quando o Igor escolher uma delas, ou uma
mistura, e termina com o site inteiro na direção nova.

**Leia antes:** [versoes.md](.claude/docs/versoes.md), [direcao-visual.md](.claude/docs/direcao-visual.md),
[conteudo.md](.claude/docs/conteudo.md), [processo.md](.claude/docs/processo.md) e a página
escolhida (`src/pages/siteN.astro`, `src/styles/versoes/siteN.css`).

**Passos:**
1. Gravar a escolha em direcao-visual.md, seção 5 (data, versão ou mistura, por quê), e o que
   ela muda no que estava fixado (material, movimento, bandas, cartões, fotos, holofote).
2. Refazer o contrato da home (`.impeccable/surfaces/src-pages-index-astro.md`) a partir da
   versão escolhida, mantendo o modo Persuade e os seis blocos.
3. Levar a pele para o site inteiro: `Base.astro`, `Cabecalho.astro`, `Rodape.astro`,
   `site.css` e os componentes; depois cada página (home, serviços, sites, sistemas, projetos e
   página de projeto, blog e post, contato e enviado, Raio-X, acessos, privacidade, 404).
   Reaproveitar `Vitrine.astro` (o palco escalado das prévias) no lugar de `Obra.astro` se a
   direção pedir molduras.
4. Apagar as versões que não entraram (`src/pages/siteN.astro`, `src/styles/versoes/`,
   `src/components/versoes/Alternador.astro`, `src/layouts/Versao.astro`, os textos em
   `versoes.ts`), tirar as rotas dos testes e do `foraDoSitemap`.
5. `humanize-text` nos textos novos; `fixing-metadata` se mudar título ou descrição; inspeção
   com capturas; `impeccable-finish-reviewer`; `DESIGN.md` e `design.json` refeitos pelo
   `impeccable-documenter`.

**Não fazer:** mudar a paleta, a Roboto ou o logo; Primary sobre fundo escuro; inventar número,
depoimento, prazo ou preço; vidro, partículas, degradê em texto, slider no hero.

**Pronto quando:**
- [x] Todas as páginas na direção escolhida, com o mesmo cabeçalho e rodapé.
- [x] Nenhuma rota `/siteN/` no build, nos testes ou no sitemap.
- [x] `npm run build` e `npm test` passam. [PENDENTE: `npm run inspecao` e Lighthouse na máquina
      do Igor; a inspeção perdeu as capturas do holofote.]
- [x] direcao-visual.md, o contrato da home e DESIGN.md contam a decisão.

**Precisa do Igor:** o que mais quer mudar depois de ver o site inteiro na direção nova.

**Notas:**
- A escolha veio no mesmo dia: base na versão 3 (fundo roxo, faixa rolante, como funciona,
  "Vamos conversar?", rodapé), com o carrossel e o rodapé denso da 1 e o par imagem e texto e as
  faixas claras da 2. Menos texto, ícones animados em todo tópico, sem o holofote, Lenis mais
  contido (lerp 0,22).
- Saíram de vez: `Linha`, `Cartao`, `Obra`, `Ficha`, `holofote.ts`, o laço da conexão em SVG e a
  planilha do `site.css`. Entraram: `Secao` (faixas por tom), `Cabeca`, `Topicos`, `Dupla`,
  `Passos`, `Galeria`, `Rolante`, `Vitrine` (o palco escalado das prévias), `Faq` e a
  `ChamadaFinal` gigante como padrão de toda página (`Base.astro`).
- Na rodada seguinte (05/11/2026) o Igor tirou o Raio-X do site: a landing page, o layout sem
  menu, o botão, os textos e os dados saíram; os três posts que levavam ao Raio-X passaram a
  levar ao serviço de sites. O TODO 8 fica como histórico.
- O contrato da home em `.impeccable/surfaces/` ficou como registro histórico da direção
  anterior; a direção nova está em direcao-visual.md, seção 5, e em DESIGN.md.

