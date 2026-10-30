# Brilean — brilean.com

Estúdio europeu de produtos digitais (UX/UI, desenvolvimento, integrações/MuleSoft, blockchain,
IA). É um site de estúdio, não de pessoa, mas os padrões de scroll se aplicam a um portfólio.

## Stack

- **Webflow** [confirmado]: `data-wf-site`, CSS `brilean-staging.webflow.shared.*.css`, jQuery
  3.5.1 do Webflow.
- **GSAP 3.15** com os plugins **ScrollTrigger, SplitText, Flip e ScrollToPlugin**, servidos pela
  CDN do Webflow [confirmado].
- **Lenis** [confirmado]. Carregado **duas vezes**: `@studio-freight/lenis@1.0.42` e
  `lenis@1.3.11`.
- **Swiper** [confirmado]. Também carregado **duas vezes**: v11 e v12.
- Scripts customizados hospedados no **CodeSandbox** (`kplz6w.csb.app`): `navbar.js`,
  `counter.js`, `lines.js`, `marquee-speed.js`, `home-process.js`, `home-services.js`,
  `work-list.js`, `next-project.js` e `contact.js` [confirmado: li todos].
- Para evitar flash de conteúdo, o texto da intro (`[data-gsap="home-intro-text"]`) fica com
  `visibility: hidden` até o JS rodar [confirmado].

Libs duplicadas e JS de produção servido de um sandbox são **dívida técnica**. Não são para
imitar.

## Visual e identidade

**Tipografia** [confirmado]: **TT Hoves Pro** (primária) e **Ease Semi Display** (secundária,
display). As duas são pagas.

**Cor** [confirmado, por frequência no HTML]
| uso | valor |
|---|---|
| quase preto | `#1A1918` |
| cinzas | `#D9D9D9`, `#6B6B6B`, `#787878` |
| acento lima | `#F1FF66` |
| acento laranja | `#FE531D` (pouco usado) |

Base neutra, com um acento ácido (lima) usado com parcimônia.

**Conteúdo**: hero "Your vision, our expertise." → serviços (5) → processo (Customized → Align →
Design → Build → Support) → para quem ("Digital teams at scale-ups", "Startups shipping fast"…) →
projetos (Game of Farma, PSA Halifax, TagPeak).

## Animações e interações [confirmado no código]

- **Cards de serviço empilhados (stacking cards)** (`home-services.js`): cada card é fixado na tela
  com `ScrollTrigger` (`pin: true, pinSpacing: false`) e com um deslocamento crescente
  (`top-=" + 20*i`). Ao mesmo tempo, encolhe com scrub (`scale: 0.9 + i*0.02`). Os cards se
  empilham como um baralho.
- **Linha do tempo do processo** (`home-process.js`): o progresso do scroll dentro da seção
  define a etapa ativa (`Math.floor(progress * n)`). Uma linha se preenche e um ícone de estrela
  desce até o ponto da etapa. Usa listener de `scroll` cru com `getBoundingClientRect` e um
  `setTimeout` de 800 ms. Funciona, mas é menos eficiente que um ScrollTrigger.
- **Linhas que se desenham** (`lines.js`): elementos com o atributo `[horizontal-line-anim]` ou
  `[vertical-line-anim]` animam de `width/height` 0 a 100% quando chegam a 85% da tela. São
  divisórias que se desenham no scroll. A API por atributo é simples e reutilizável.
- **Marquee com velocidade constante** (`marquee-speed.js`): clona a lista e calcula
  `duração = largura / 100px por segundo`, então a velocidade é a mesma em qualquer tamanho de
  conteúdo.
- **Hero que vira cartão** (`marquee-speed.js`): ao rolar além do hero, um `clip-path:
  inset(0 2rem 2rem 2rem round 0 0 1rem 1rem)` recorta o hero em um cartão com cantos
  arredondados (no celular, 1rem).
- **Contador tipo odômetro** (`counter.js`): cada dígito vira uma coluna que rola números
  aleatórios até o valor final. Usa timeline com `pin` e scrub.
- **Card que segue o cursor na lista de trabalhos** (`work-list.js`): `translate` para a posição
  do mouse dentro da linha, com opacity 0/1 no enter/leave. Clicar abre um popup do projeto. É o
  mesmo padrão do Mike, em versão simples (sem inércia).
- **Rótulo que troca letra por letra** (`next-project.js`): divide o texto em caracteres, que
  saem para cima (`yPercent: -100`, stagger 0.02) e entram com o novo texto.
- **Navbar**: troca entre nav primária e secundária depois de 50px de scroll, e muda para versão
  clara/escura conforme a seção (`data-nav="dark"`) [confirmado; parte está comentada e
  reimplementada].

## Acessibilidade e performance

- Não vi nenhum tratamento de `prefers-reduced-motion` nos scripts lidos [confirmado nos scripts;
  não verifiquei as Interactions nativas do Webflow].
- Texto dividido em `<span>` por caractere sem cópia acessível [confirmado em `next-project.js`].
- Libs duplicadas aumentam o peso [confirmado].

## O que torna o site único

Cada seção tem uma "mecânica" de scroll própria (cards empilhados, timeline, linhas, odômetro,
hero que vira cartão). É bom para dar ritmo a uma página longa, mas o conjunto é menos coeso que
o do Mike.

## Para estudar

- Stacking cards com `pin` + scale em scrub.
- Animação declarada por atributo (`[horizontal-line-anim]`).
- Marquee com velocidade em px/s.
- Recortar o hero em cartão com `clip-path: inset(... round ...)`.
