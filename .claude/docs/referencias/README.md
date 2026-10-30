# Referências

Duas camadas. A primeira é o **portfólio do Igor**, que é a referência de método e de código
deste repositório. A segunda são os três sites analisados em 15/10/2026 para o portfólio, que
continuam valendo como inspiração de motion e estrutura. O objetivo é entender as soluções, não
copiar.

| arquivo | conteúdo |
|---|---|
| [meu-portfolio.md](meu-portfolio.md) | **leia primeiro**: o que reaproveitar do portfólio, onde está e como adaptar |
| [mike-wilcock.md](mike-wilcock.md) | mikewilcockdesign.com: Next.js, motion própria, fonte variável |
| [marcus-lorenzet.md](marcus-lorenzet.md) | marcuslorenzet.com: Framer, paleta creme/escuro, vídeo |
| [brilean.md](brilean.md) | brilean.com: Webflow, GSAP + ScrollTrigger + Lenis |
| [comparativo.md](comparativo.md) | os três lado a lado |
| [ideias.md](ideias.md) | o que foi levado para o portfólio, e por quê (a maior parte vale aqui também) |

## Método e limitações das três análises

Coleta feita em 15/10/2026, sem navegador:
- HTML inicial de cada home baixado via `curl` e inspecionado (scripts, CSS, metatags, JSON
  de animação do Framer);
- CSS principal do Mike e da Brilean lido (tokens, fontes, media queries);
- scripts customizados da Brilean lidos na íntegra;
- `llms.txt` e `llms-full.txt` do Mike, que trazem um case study do próprio site.

Legenda usada nos arquivos:
- **[confirmado]**: visto no código ou no CSS servido;
- **[declarado]**: o autor diz no próprio site, mas não verifiquei no código;
- **[hipótese]**: inferência a partir de nomes de classes, configs ou padrões.

Os textos dos três arquivos e do ideias.md falam em "portfólio" porque foram escritos para ele.
Lendo para a Infinium: o que é regra de qualidade (um material só, um loop de rAF, intro curta,
movimento reduzido) vale igual; o que é escolha de pele (escuro quente, mono, cursor) não.
