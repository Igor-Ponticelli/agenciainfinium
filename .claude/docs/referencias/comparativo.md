# Comparativo

| | Mike Wilcock | Marcus Lorenzet | Brilean |
|---|---|---|---|
| **Tipo** | dev criativo freelancer | product designer | estúdio |
| **Plataforma** | Next.js + Payload (código) | Framer (no-code) | Webflow (low-code) |
| **Motion** | 1 loop próprio + WAAPI + Lenis | Framer Motion (springs) + Lenis | GSAP + ScrollTrigger + Lenis |
| **Fundo** | `#111010` escuro quente | `#151410` escuro quente | `#1A1918` quase preto |
| **Texto** | `#edeae4` off-white | `#D0C5AB` bege | cinzas |
| **Acento** | 1 azul `#7fa8ff`, trocável | o próprio bege/creme | lima `#F1FF66` |
| **Fonte** | Archivo variável + Geist Mono | Plus Jakarta Sans (+3) | TT Hoves Pro + Ease Semi Display |
| **Rótulos** | `(04)`, `(Up close)` | `[ WHAT I DO ]` | — |
| **Intro** | contador até 100, ~2,7 s, 1×/visita | ~4 s (inferido dos delays) | texto da intro escondido até o JS |
| **Troca de página** | barras de acento + título letra a letra | padrão do Framer | — |
| **Cursor** | anel com palavra | — | — |
| **Lista de trabalhos** | card segue o cursor com inércia | cards com vídeo em loop | card segue o cursor (simples) + popup |
| **Scroll storytelling** | texto fixo acende palavra por palavra | seções sticky | cards empilhados, timeline, linhas, odômetro |
| **Reduced motion** | completo | não verificado | ausente nos scripts |
| **Ponto forte** | coesão: um material gera todo o motion | identidade com pouco (paleta + caixa alta + tom) | variedade de mecânicas de scroll |
| **Ponto fraco** | complexo de construir | intro longa, sem headings, 4 fontes | libs duplicadas, JS em sandbox, a11y |

## Padrões que se repetem nos três

1. **Fundo escuro e quente**, não preto puro (`#111010`, `#151410`, `#1A1918`). O preto puro
   (`#000`) parece "digital"; o preto quente parece papel e tinta.
2. **Lenis** para smooth scroll. Está nos três.
3. **Um único acento** forte sobre base neutra.
4. **Lista de trabalhos com prévia que segue o cursor** (Mike e Brilean).
5. **Rótulos de seção em estilo de anotação** (parênteses, colchetes, mono).
6. **Números concretos** como prova social (anos, projetos, métricas de resultado).

## Onde eles divergem

- **Motion como sistema** (Mike) **versus motion como coleção de efeitos** (Brilean). O primeiro
  envelhece melhor e cabe em menos código.
- **Código próprio** dá controle total sobre performance e acessibilidade. **Framer/Webflow**
  entregam rápido, mas deixam rastros: sem headings, libs duplicadas, fontes demais.
