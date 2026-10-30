# Marcus Lorenzet — marcuslorenzet.com

Product designer brasileiro, com mais de 15 anos de experiência. Faz sites e dashboards SaaS para
empresas dos EUA. O site é feito em Framer.

## Stack

- **Framer** [confirmado]: `<meta name="generator" content="Framer …">`, bundles em
  `framerusercontent.com`, módulos `react`, `framer` e `motion` pré-carregados.
- **Framer Motion** para as animações de entrada, configuradas no JSON
  `__framer__appearAnimationsContent` embutido no HTML [confirmado].
- **Lenis** para o smooth scroll [confirmado: classes `html.lenis` e `.lenis-smooth` no CSS
  inline]. Provavelmente entra por um componente de smooth scroll do Framer [hipótese].
- **Vídeos via Gumlet** (`video.gumlet.io`): `<video loop muted playsinline preload="none">`, com
  6 vídeos na home [confirmado]. Há um script com `IntersectionObserver` que manda `play` para
  iframes quando eles entram na tela [confirmado].
- Analytics do Framer (`events.framer.com`).

## Visual e identidade

**Cor** [confirmado, por frequência no HTML]: escuro quase preto e quente, com bege/creme como
cor de texto e destaque.
| uso | valor | ocorrências |
|---|---|---|
| bege principal | `rgb(208,197,171)` / `#D0C5AB` | ~270 |
| creme claro | `rgb(234,224,200)` | 68 |
| fundo | `rgb(17,16,13)` / `#151410` | ~26 |
| azul | `rgb(0,153,255)` | 37 (provavelmente link/estado padrão do Framer [hipótese]) |

A paleta é quase **monocromática e terrosa**: parece papel envelhecido sobre preto. Isso dá um ar
editorial e "artesanal", coerente com o lema "Pixels are small, details are not".

**Tipografia** [confirmado: fontes carregadas]: **Plus Jakarta Sans** (principal), **Google
Sans**, **Urbanist** e **Inter** (fallback do Framer). Quatro famílias é muito, e parte delas
deve ser resto de componentes [hipótese].

**Texto e hierarquia** [confirmado, no conteúdo]
- Display em CAIXA ALTA, quebrado em palavras empilhadas: "WEBSITES & / DIGITAL / PRODUCTS",
  "RESULTS / SPEAK / LOUDER", "FEATURED PROJECTS."
- Rótulos de seção entre colchetes: `[ WHAT I DO ]`, `[ CASE STUDIES ]`, `[ my start ]`.
- Prova social logo no hero: "15+ YEARS OF EXPERIENCE", "300+ PROJECTS", "trusted by platforms
  with 1M+ users".
- Indicador "Scroll" e a frase "Pixel by pixel" no hero.

## Animações e interações

- **Entrada em cascata após um loader** [confirmado]: os elementos começam com `opacity ~0` e
  `y: 70` e sobem com **spring** (`bounce: 0.2`, `duration: 0.4`), com `delay` de **4,2 s a
  4,4 s**. Há marcadores `loaderDone`/`loader-done` no HTML. Isso sugere uma **intro de cerca de
  4 s** antes do conteúdo aparecer [hipótese forte]. É longa: o Mike reduziu a dele para 2,7 s e
  pula depois da primeira visita.
- `rotateX` e `perspective` aparecem no código [confirmado]. Provavelmente há um tilt 3D em algum
  card ou texto [hipótese].
- `backdrop-filter: blur(6px/8px)` em elementos sobrepostos, quase certamente o menu ou a navbar
  [confirmado o blur; hipótese sobre onde].
- `position: sticky` em 11 lugares: seções presas na tela [confirmado].
- Vídeos dos projetos em loop, com `preload="none"`, tocando só quando visíveis [confirmado].
- E-mail com **"Copy to Clipboard" → "Copied!"** [confirmado no texto]. É uma microinteração
  simples e útil.
- "Back to top" no rodapé.

## Navegação e storytelling

- Menu: PROJECTS · ABOUT · ARCHIVE · LET'S TALK. É uma página única com âncoras (`#about`,
  `#featured`, `#testimonials`), mais `/archive` e uma página por case.
- Ritmo da home: hero com promessa → o que faço → 3 projetos em destaque (título orientado a
  resultado: "Website that transformed a teacher into a recognized language school") → depoimentos
  → sobre (história pessoal: capas de CD, Fireworks/Dreamweaver, um mês na Finlândia, jogos de
  tabuleiro) → CTA com e-mail e telefone → rodapé com lema.
- **Humanização**: um dos depoimentos é da esposa e assume isso com humor ("I was basically
  recruited to write this 😄"). É honesto e memorável.
- Botão "DOWNLOAD RESUME" na seção sobre.

## O que torna o site único

A paleta creme sobre preto, aliada a CAIXA ALTA com rótulos entre colchetes, dá uma identidade
editorial forte com pouquíssimos recursos. O storytelling é pessoal e bem-humorado, e os títulos
dos projetos falam de resultado, não de entregável.

## Pontos fracos observados

- Intro de ~4 s antes do conteúdo [hipótese forte].
- Quatro famílias de fonte carregadas.
- A home não tem nenhum `<h1>`–`<h4>` no HTML [confirmado]. Isso é ruim para SEO e para
  leitores de tela (é comum no Framer).
- Telefone pessoal exposto no rodapé.

## Para estudar

- O ritmo da página única e o tom da seção "about".
- Usar a paleta de 2–3 tons quentes como identidade.
- Vídeo curto em loop no lugar de imagem estática nos cards de projeto.
