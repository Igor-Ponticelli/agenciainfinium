# Identidade visual da Infinium (versão 2)

Manual completo e interativo: abra `manual/brand-guide.html` no navegador.

## Conceito

O símbolo é um infinito desenhado com uma fita dupla que troca de lado no cruzamento: a linha de dentro vira a de fora, como uma fita de Möbius. Representa continuidade, ou seja, o trabalho que não para e o crescimento sem limite. Também conversa com o que a empresa faz: processos que rodam sozinhos, em ciclo.

## Logotipo

| Versão | Arquivo | Quando usar |
|---|---|---|
| Empilhada | `assets/svg/logo/logo-*.svg` | Assinatura principal: capas, apresentações, redes |
| Horizontal | `assets/svg/logo/logo-horizontal-*.svg` | Cabeçalho de site, e-mail, faixas, rodapés |

Cores disponíveis: `primary` (roxo), `white`, `ink` (quase preto) e `lilac`. Há PNGs equivalentes em `assets/png/logo/`.

- Nome "Infinium" em Roboto Bold, com −4% de espaçamento, kerning ajustado à mão, sem ligadura "fi" e convertido em curvas. **Nunca redigite o nome; use sempre o arquivo.**

## Símbolo: um corte para cada tamanho

| Corte | Arquivo | Tamanho na tela |
|---|---|---|
| Completo | `simbolo-*.svg` | a partir de 64px |
| Compacto | `simbolo-compacto-*.svg` | 25 a 63px (avatar, ícone médio) |
| Micro | `simbolo-micro-*.svg` | até 24px (favicon, notificação) |

Favicons e ícones de app prontos: `assets/svg/favicon/` e `assets/png/favicon/`.

## Cores

| Nome | Hex | Uso |
|---|---|---|
| Violeta 700 · **Primary** | `#39135F` | Cor principal |
| Violeta 800 · Hover | `#280D40` | Hover, ícone de app |
| Violeta 900 | `#200A34` | Fim do degradê, fundos profundos |
| Violeta 100 · **Lilás** | `#E9D5FE` | Apoio claro, logo em roxo escuro |
| Violeta 50 / 200 / 300 / 400 / 500 / 600 | `#F8F5FE` `#CEB8F3` `#B292E3` `#946ACD` `#7546AE` `#582B89` | Interface, links em fundo escuro, gráficos |
| Ink | `#211F26` | Títulos, fundo escuro |
| Text | `#625F68` | Texto corrido |
| Line | `#D9D6DE` | Bordas |
| Body | `#F1EFF4` | Fundo de página |
| White | `#FFFFFF` | Superfícies |
| **Degradê** | `#39135F → #200A34`, 135° | Capas, posts, og-image |

Contraste: branco sobre Primary 14,7:1 · Text sobre Body 5,5:1. **Nunca use Primary sobre fundo escuro** (1,1:1).

Tokens prontos para código: `tokens/tokens.css` e `tokens/tokens.json`.

## Tipografia

Só **Roboto** (Google Fonts).

| Papel | Peso | Tamanho / altura | Espaçamento |
|---|---|---|---|
| Display | Bold 700 | 56 / 1,0 | −2,5% |
| Título | Bold 700 | 32 / 1,15 | −1,5% |
| Subtítulo | Medium 500 | 20 / 1,3 | 0 |
| Texto | Regular 400 | 16 / 1,6 | 0 |
| Rótulo | Medium 500, caixa-alta | 12 / 1,4 | +8% |

Use números tabulares em preços e tabelas.

## Fundos e superfícies (novembro de 2026)

Duas superfícies nascidas no site, além das cores chapadas. Nenhuma usa imagem: são CSS puro
(`tokens/tokens.css`, `--infinium-veio-veins` e `--infinium-aurora-lights`) e as duas param com
movimento reduzido. Demonstração viva em `manual/brand-guide.html`, seção "Fundos".

| Superfície | O que é | Onde entra |
|---|---|---|
| **Veio** | Body com um grão fino em Violeta 700 (11 %) e dois veios de Lilás que terminam antes das bordas | Toda faixa clara. Em leitura longa (post, política) só o grão, a 5 %, sem os veios. Nunca sobre o roxo |
| **Aurora** | Cartão em Violeta 900 com duas luzes (Violeta 500 e Lilás) se movendo devagar por trás, o número no canto e o ícone vivo | Só em cartões: tópico, parte de case, porta de entrada. Nunca como fundo de faixa, de rodapé ou atrás de foto: o roxo das faixas é chapado |
| **Ícone vivo** | Traço de 2 px em Lilás a 45 % com uma luz de 28 % do caminho correndo por cima, num ladrilho de 48 px | Todo tópico, etapa e canal. Ícones próprios, 24 x 24, sem biblioteca |

Sobre a aurora, o título é branco e o texto Lilás a 70 %. Primary nunca aparece sobre o cartão.

## Regras de uso

- **Área de proteção:** a altura do "n" de Infinium, em todos os lados.
- **Tamanho mínimo:** empilhada 96px / 25mm; horizontal 120px / 30mm.
- **Fundos:** roxo sobre claro; branco ou lilás sobre escuro e degradê.
- **Não:** esticar, girar, mudar cores fora da paleta, aplicar sombra ou contorno, ou colocar sobre fotos confusas sem uma faixa de fundo.
