# Ideias para o portfólio

O que vale considerar, e por quê. Nada aqui é decisão: é matéria-prima para a etapa 2 (combinar
com as skills `impeccable` e `taste-skill`).

## 1. Escolher **um material** e derivar todo o motion dele

*De: Mike.* O site dele é memorável porque intro, hover, reveal e transição são o mesmo gesto
(os eixos da fonte). Para ser autoral, o material não deve ser a fonte esticando. Opções a
explorar:
- um **traço/linha** que desenha divisórias, sublinha links e vira a transição de página
  (une as linhas da Brilean com a lógica de sistema do Mike);
- uma **forma** (a inicial "I" ou "P", um bloco) que é logo, cursor e cobertura da troca de página;
- um eixo de fonte diferente (peso, ou `slnt`, ou `opsz`), e não largura.

**Por quê:** coesão faz o site parecer desenhado, não montado. E sai mais barato em código.

## 2. Paleta: escuro quente + 1 acento como token único

*De: os três.* Fundo tipo `#12110f`, texto off-white quente, cinzas quentes em 3 níveis e **um**
acento definido como variável. Ter o acento num token único permite um easter egg de troca de cor
(como o do Mike) ou tema claro/escuro sem esforço.

**Por quê:** é o padrão mais consistente das três referências e o mais barato de executar bem.
Para não ficar igual a eles, a originalidade deve vir da escolha do acento e da tipografia.

## 3. Tipografia: uma família variável + uma mono

*De: Mike (o oposto do Marcus).* Uma fonte variável cobre display e texto com estilos definidos
como configurações de eixo (`--fvs-display`, `--fvs-body`). A mono fica para rótulos, números e
metadados. Usar fontes livres (Google Fonts) para não depender de licença.

**Por quê:** uma família só já dá variedade, com menos peso e uma identidade mais forte.

## 4. Rótulos de anotação e números concretos

*De: Mike e Marcus.* Rótulos curtos em mono (`(01) Projetos`, `[ sobre ]`) e prova em números
reais nos projetos. Os números precisam ser **verdadeiros**: não inventar métricas (regra do
AGENTS.md).

## 5. Lista de projetos com prévia que segue o cursor

*De: Mike e Brilean.* Lista tipográfica grande; no hover, um card com a capa (ou vídeo curto)
segue o cursor com inércia e inclinação. No toque, vira lista com miniatura.

**Por quê:** mostra muitos projetos sem grade pesada e é a interação de maior impacto por linha
de código. A versão do Mike (inércia, inclinação pela velocidade, cross-fade) é a referência de
qualidade.

## 6. Um momento de scroll storytelling, não cinco

*De: Mike (texto que acende) e Brilean (cards empilhados).* Escolher **um** momento fixo na tela
forte para a seção "sobre": um parágrafo que acende palavra por palavra **ou** cards empilhados
com a trajetória. Não os dois.

**Por quê:** a Brilean mostra que mecânicas demais diluem a identidade.

## 7. Intro curta e respeitosa

*De: Mike (o contrário do Marcus).* Se houver intro, que dure menos de 2 s, rode só na primeira
visita (com `sessionStorage`), possa ser pulada com um clique e não bloqueie o conteúdo. Vale
também considerar não ter intro nenhuma.

## 8. Microinterações úteis

- **Copiar e-mail** com feedback "Copiado!" (Marcus).
- **Cursor contextual** com uma palavra ("ver", "abrir") só em `pointer: fine` (Mike).
- **Rótulo que troca letra a letra** em botões de próximo/anterior (Brilean).
- **Hero que vira cartão** com `clip-path` ao rolar (Brilean).

## 9. Base técnica: o padrão do Mike, não o da Brilean

- Smooth scroll com **Lenis** (onipresente e leve, ~4 KB). GSAP + ScrollTrigger só se o motion de
  scroll pedir. Hoje o GSAP é gratuito, inclusive SplitText.
- **Um loop de `requestAnimationFrame`** baseado em tempo decorrido, escrevendo só `transform`,
  `opacity` e propriedades de fonte.
- `prefers-reduced-motion` desde o início: o design continua, o movimento sai.
- Texto dividido em letras sempre com cópia acessível (`aria-label` ou texto escondido para
  leitores de tela).
- Conteúdo visível sem JS.
- Headings reais (`h1`–`h3`), ao contrário do Marcus.
- `llms.txt` + metadados completos (skill `fixing-metadata`).
- Vídeos com `muted playsinline preload="none"`, tocando só quando visíveis.
- Meta de performance: Lighthouse acima de 95 e CLS abaixo de 0,05.

## 10. Tom de voz pessoal

*De: Marcus e Mike.* Primeira pessoa, frases curtas, uma pitada de humor e uma história real
(Marcus: capas de CD, Finlândia; Mike: "reviewing your own cooking"). Revisar tudo com a skill
`humanize-text`.

## O que **não** levar

- Fonte que estica com o cursor: é a assinatura do Mike, e copiar seria óbvio.
- Paleta bege/creme do Marcus como está.
- Libs duplicadas, JS de produção em sandbox, várias famílias de fonte.
- Intro de 4 s, texto sem headings, número de telefone exposto.
