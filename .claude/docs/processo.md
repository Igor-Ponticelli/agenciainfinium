# Processo de desenvolvimento

Como construir o site da Infinium juntando a identidade fixa ([direcao-visual.md](direcao-visual.md)),
o método do portfólio do Igor ([referencias/meu-portfolio.md](referencias/meu-portfolio.md)) e
as skills de `.claude/skills/`. Este arquivo é o roteiro: diz o que fazer, em que ordem, com
qual skill e o que cada etapa precisa entregar. As etapas viram prompts em [TODO.md](../../TODO.md).

## 1. Quem manda em quê

Quando duas fontes discordam, vale a de cima:

1. **O pedido do Igor** na conversa.
2. **A identidade da empresa** ([identidade/](identidade/README.md)) e
   **[direcao-visual.md](direcao-visual.md)**: logo, paleta, Roboto, regras de uso, e o
   material e o movimento quando forem decididos. É uma direção **fixada pelo usuário**.
3. **AGENTS.md e COMMITS.md**: regras do repositório.
4. **impeccable**: dona do fluxo (contexto, contrato, build, revisão, documentação) e do piso de
   qualidade (`reference/craft-floor.md`).
5. **taste-skill**: checklist anti-slop e vocabulário. Entra como verificação, não como fonte de
   stack nem de estética.
6. **O portfólio e as referências**: método e inspiração. Nada deles é copiado como pele.

As duas skills de design dizem isso explicitamente: o brief vence. A impeccable fala em "The brief
wins" e manda não redirecionar uma direção fixada. A taste-skill diz que cada regra cede quando o
brief pede o contrário.

## 2. Papel de cada skill

| skill | entra em | para quê |
|---|---|---|
| `impeccable` | todas as etapas | `init` (PRODUCT.md já existe), `shape` (brief da home), fluxo de new-work, craft floor, `animate`, `audit`, `polish`, detector de design (hook já ativo em `settings.local.json`) |
| agentes `impeccable-*` | fim do build | `finish-reviewer` revisa com contexto limpo; `documenter` escreve DESIGN.md a partir do que foi construído |
| `taste-skill` | brief e checagem | "Design Read" de uma linha, os três dials, lista de AI tells, regras de performance e movimento reduzido |
| `humanize-text` | todo texto do site | tirar cara de texto de IA, em português, no tom de voz de EMPRESA.md |
| `fixing-metadata` | antes de publicar | title, description, Open Graph, favicon, JSON-LD, canonical |

## 3. Conflitos já resolvidos

Pontos em que as skills batem com decisões tomadas. A resolução vale até o Igor mudar.

**Roboto.** A impeccable e a taste-skill tratam Roboto como fonte padrão sem personalidade e
pedem justificativa. **Mantém**, porque é a tipografia da identidade da empresa, decidida fora
deste repositório. A personalidade vem da escala, do peso 700 com tracking negativo no display,
do degradê e do material. Fica registrado em PRODUCT.md como compromisso de marca, para a
impeccable não sugerir troca.

**Tema claro.** A taste-skill pede os dois temas em site voltado ao público. **Resolução:** o
site é claro (fundo Body da identidade), com seções escuras no degradê da marca. Sem seletor de
tema. O motivo é a identidade: Primary não funciona sobre escuro (1,1:1), e o logo em roxo é a
assinatura principal.

**Cursor customizado.** A taste-skill proíbe. No portfólio o Bloco é o cursor por escolha do
Igor. **Aqui, por padrão, não há cursor customizado**: o público é dono de empresa, no celular.
Se o Igor escolher o candidato 3 de direcao-visual.md, valem as mesmas defesas do portfólio
(`pointer: fine`, movimento reduzido, nunca cobrir texto, foco próprio, um loop só).

**Rótulos acima dos títulos.** O craft floor da impeccable proíbe eyebrow/kicker acima de
heading e só aceita numeração quando a ordem é informação. As etapas de "como funciona" são
ordem real, então numeradas. Fora disso, nada de rótulo acima de título.

**Stack.** A taste-skill assume React/Next + Tailwind + Motion. **Resolução (30/10/2026):** Astro
estático, TypeScript puro e CSS próprio, igual ao portfólio. As regras de princípio continuam
valendo (nada de listener de scroll cru, animar só transform e opacity, movimento reduzido).

**Travessão.** Proibido em qualquer texto visível. A `humanize-text` cobre o resto dos vícios.

**Analytics.** As skills de performance preferem nenhum script de terceiros. A Infinium vende
sites com Analytics e Pixel. **Pendente do Igor.** Se entrar, carrega só depois do consentimento.

## 4. Etapas

Cada etapa termina com um entregável no repositório e commits pequenos, conforme
[COMMITS.md](../../COMMITS.md).

### Etapa 0: identidade e método (feita em 30/10/2026)

- [x] Identidade v2 da empresa em `identidade/`.
- [x] Método do portfólio documentado em `referencias/meu-portfolio.md`.
- [x] Contexto: PRODUCT.md, arquitetura.md, conteudo.md, direcao-visual.md (parcial).

### Etapa 1: base técnica (TODO 1)

Projeto Astro, tokens a partir de `identidade/tokens`, Roboto self-hosted, SEO técnico, páginas
esqueleto, build estático pronto para a Hostinger. Sem design.

### Etapa 2: conteúdo (TODO 2)

Todo o texto do site, no tom de voz de EMPRESA.md, revisado pela `humanize-text`, com as
pendências do Igor marcadas. Texto antes do design, para o layout nascer do conteúdo real.

### Etapa 3: brief da home e contrato de direção (TODO 3)

**Skills:** `/impeccable shape home` e o "Design Read" da taste-skill.
**Entrega:** o brief da home aprovado pelo Igor, a escolha do material e do movimento gravada em
direcao-visual.md, e a seção `## Direction contract` no surface brief da home.

Ponto de partida para o Design Read:

> Lendo como: site de uma empresa pequena de software para donos de empresa, claro e direto,
> em fundo claro com o violeta da marca, apoiado em um único material derivado do símbolo que
> conduz hover e troca de página.

Dials de partida: **VARIANCE 5, MOTION 4, DENSITY 4**. Modo da impeccable: **Persuade** (site
comercial: a página precisa convencer e levar ao WhatsApp).

**A rodada de conceitos (`concept-seed`) roda mesmo com a identidade fixada.** Vale o mesmo que
no portfólio: `impeccable concept-seed --scope direction --mode persuade`, a direção fixada vence
campo a campo (paleta, Roboto, logo não mudam), e a rodada traz estrutura: topologia, controles,
ritmo. Gravar no FORM a referência do seed. O contrato tem os seis blocos (THESIS, OWN-WORLD,
STORY, FIRST VIEWPORT, FORM, FINISH) e nunca vai para o código.

### Etapa 4: build (TODO 4)

**Skills:** impeccable (craft floor obrigatório antes de qualquer edição de UI) e o hook do
detector.

Ordem sugerida, cada item em um ou mais commits:
1. Base: tokens, Roboto, reset, foco, seleção, scrollbar.
2. Estrutura semântica de todas as páginas, com conteúdo real, funcionando **sem JS**.
3. Layout e tipografia: escala, grid, espaçamento, responsivo de verdade (390 px até 1600 px).
4. Motor de movimento: o `motor.ts` do portfólio, copiado como está (é genérico).
5. O material da marca no hover e no cabeçalho.
6. Troca de página a partir do logo, abaixo de 1,2 s, pelo mesmo mecanismo da cortina do
   portfólio (`astro:before-preparation` com `loader`, `clip-path`, título da próxima página).
7. Menu do celular, rolagem suave (se ficar), âncoras.
8. Movimento reduzido: tudo parado, a troca vira fade curto.

Regras de motion que valem para tudo:
- animar só `transform`, `opacity` e `clip-path`;
- nada de `addEventListener('scroll')` cru;
- conteúdo visível por padrão, nunca começando em `opacity: 0` esperando um observer;
- texto dividido em letras sempre com cópia acessível.

### Etapa 5: prévias dos sites de clientes (TODO 5)

Copiar e adaptar as prévias prontas do portfólio para os sites que o Igor confirmar, e criar as
que faltarem pelo mesmo método (arquivo de projeto primeiro, depois componente, script e fontes).

### Etapa 6: texto final, metadados, revisão e publicação (TODO 6)

`humanize-text` e `fixing-metadata`; inspeção da impeccable com capturas em `.impeccable/review/`;
`impeccable-finish-reviewer`; metas (Lighthouse acima de 95, CLS abaixo de 0,05, AA, teclado,
sem JS); `impeccable-documenter` gera `DESIGN.md`; DNS e Search Console.

Pela regra da impeccable, o DESIGN.md é escrito no fim, a partir do site pronto. Até lá, a
referência visual é direcao-visual.md e o pacote de identidade.

## 5. Checklist rápido antes de cada commit de UI

- [ ] Segue a identidade (logo pelo arquivo, paleta, Roboto, Primary nunca sobre escuro).
- [ ] Sem eyebrow acima de título, sem cards iguais em fila, sem gradiente em texto.
- [ ] Sem travessão em texto visível. Sem dado inventado. Sem jargão.
- [ ] Funciona sem JS, no toque, com movimento reduzido e só com teclado.
- [ ] Anima só `transform`, `opacity` e `clip-path`.
- [ ] Commit pequeno, em português, sem coautoria.

## 6. Onde o projeto está

Em 31/10/2026 os TODOs 1 a 8 estão feitos no repositório (base, conteúdo, brief e contrato,
build, prévias, blog, Raio-X e a revisão final). O que falta é do Igor e está listado nas
"Notas" do TODO 6 em [TODO.md](../../TODO.md): contas e chaves (Web3Forms, Turnstile, GA4,
Pixel), preço, prazo e link de pagamento do Raio-X, valor do diagnóstico, cidades do SEO local,
CNPJ no rodapé, data de publicação, a leitura dos textos, e a publicação na Hostinger com DNS e
Search Console. O design construído está registrado em `DESIGN.md` e `.impeccable/design.json`.

Em 31/10/2026, depois de o Igor ver o site, entrou uma rodada de revisão (TODO 9): a grade perdeu
as letras e os números, as seções viraram bandas, entraram fotos do Unsplash, cartões com ícones
desenhados pela fita e o holofote sob o ponteiro. As decisões estão em
[direcao-visual.md](direcao-visual.md), seção 5.

Em 05/11/2026, o Igor viu o site e não gostou. Entraram três versões de estudo da home
(`/site1/`, `/site2/` e `/site3/`), cada uma com a própria pele sobre a mesma identidade, a
partir de uma pesquisa sobre Apple, Microsoft e os grandes players de agência. Tudo em
[versoes.md](versoes.md). O próximo passo é o TODO 10: o Igor escolhe uma (ou uma mistura) e a
direção vai para o site inteiro.

