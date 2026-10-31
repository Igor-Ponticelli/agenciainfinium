# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Delegated: Astro (saída estática) publicado na Hostinger como arquivos estáticos, TypeScript puro
e CSS próprio, igual ao portfólio do Igor. O motivo está em `.claude/docs/arquitetura.md`. Em resumo: HTML estático com zero JS por
padrão, View Transitions para trocar de página sem recarregar, e a mesma base dos sites que a
Infinium entrega aos clientes.

## Users

1. **Donos e gestores de pequenas e médias empresas** (hoje, Vale do Itajaí e Santa Catarina;
   atendimento remoto para o resto do Brasil) que precisam de um site profissional ou que perdem
   tempo com Excel, Trello, ERP e WhatsApp soltos. Chegam pelo Instagram (@agencia_infinium), por
   indicação ou por busca local. Querem entender rápido o que a empresa faz, ver prova de que o
   trabalho é bom e falar com alguém pelo WhatsApp.
2. **Quem já está em conversa com a Infinium** e recebeu o link para conferir a empresa antes de
   fechar: quer confiança, clareza sobre como funciona e por onde começar.

## Product Purpose

Site institucional da Agência Infinium. Funções:
- apresentar os dois serviços (sites e automação de processos) de forma clara e sem jargão;
- mostrar prova real: sites publicados e, quando houver, exemplos de automação;
- transformar a visita em contato pelo WhatsApp.

Sucesso: a pessoa termina a visita sabendo qual dos dois serviços resolve o problema dela e chama
no WhatsApp.

## Positioning

Uma empresa que une as duas pontas: o site traz o cliente e o sistema cuida dele depois. Um
parceiro só, do primeiro clique à operação. Assinatura: "Sites e sistemas que trabalham por você".
O próprio site já demonstra o que vende: rápido, claro, bem feito no celular.

## Operating Context

- Visitas curtas, a maioria pelo celular, vindas do Instagram e do WhatsApp.
- Contato pelo WhatsApp. Formulário é possível, mas ainda não decidido.
- Só PT-BR.

## Capabilities and Constraints

- Site estático em `infinium.app.br`. A página `/acessos/` (link da bio do Instagram) faz
  parte do site.
- Dois serviços: **Sites** e **Sistemas** (sistemas sob medida e automação de processos). Cada
  um tem página própria, um hub curto em `/servicos/` e prova em `/projetos/`.
- Blog em `/blog/` (Markdown no repositório, sem CMS), lançado com os posts prontos.
- Página de contato com WhatsApp, e-mail e formulário. O formulário vai por serviço externo com
  proteção contra spam; nenhum segredo fica no repositório.
- Um produto de entrada, o "Raio-X do site" (análise de SEO, velocidade, segurança e LGPD),
  vendido a preço baixo numa landing page sem menu, feita para tráfego pago.
- Prévias de sites de clientes em HTML/CSS reais, sem iframe nem screenshot, reproduzindo só o
  que existe no original.
- Automação de processos é vendida como serviço, **sem case de cliente** até o Igor confirmar
  um. A prova de sistemas é o RetroDash, apresentado como produto da Infinium, sem números de
  adoção inventados.
- Analytics (Google Analytics e Meta Pixel): entram, configurados no fim. O código já nasce
  preparado (eventos nos CTAs), com consentimento antes de carregar e página de privacidade.
- Sem preço, prazo médio ou "diagnóstico gratuito" até o Igor confirmar
  (`identidade/EMPRESA.md`, "Pontos a confirmar").

## Brand Commitments

- **Identidade visual fixa** (pacote v2, outubro de 2026, em `.claude/docs/identidade/`): logo e
  símbolo prontos (nunca redesenhar nem redigitar o nome), paleta violeta (Primary `#39135F`,
  Lilás `#E9D5FE`, Ink `#211F26`, Body `#F1EFF4`, degradê 135° de `#39135F` a `#200A34`),
  tipografia só **Roboto**. Primary nunca sobre fundo escuro.
- **Tema claro como base** (fundo Body), com trechos escuros em degradê onde a marca pede. Sem
  seletor de tema.
- O que ainda falta fixar, e vai para `.claude/docs/direcao-visual.md`: o material que conduz o
  movimento (cursor, hover, troca de página) e a amplitude do movimento.
- Tom de voz: direto, confiante, próximo, focado no resultado do cliente. Fala com "você".
  **Nunca usar travessão** (`—` ou `–`) em texto visível.
- Nada inventado: clientes, números, depoimentos, prazos e preços só entram se forem
  verificáveis e confirmados pelo Igor.

## Evidence on Hand

- Empresa e serviços: `.claude/docs/identidade/EMPRESA.md` e `SERVICOS.md` (razão social,
  CNPJ, posicionamento, missão, tom de voz, mensagens-chave, etapas de cada serviço).
- Marca: `.claude/docs/identidade/MARCA.md`, `tokens/` e `assets/` (SVG e PNG de logo, símbolo,
  favicon, Open Graph e capas).
- Instagram: `.claude/docs/identidade/INSTAGRAM.md` (bio, link `/acessos`, destaques).
- Projetos que entram (decisão do Igor, 30/10/2026), com análise visual e técnica em
  `.claude/docs/projetos/`: os sites Brisa Café, Linetex Embalagens e Lumaj Distribuidora, e o
  produto RetroDash (SaaS em produção, prova de que a Infinium constrói sistemas). Avais de
  foto já dados no portfólio. Não citar o uso do RetroDash na Geomais.
- **Ausentes**: cases de automação, depoimentos, números de resultado, prazo médio, preço e
  foto da equipe. Nada disso pode ser fabricado.
- Fotos de banco (Unsplash, escolhidas uma a uma) entram como ambientação das seções e capa dos
  posts, nunca como se fossem a equipe, a sede ou clientes da Infinium. Registro e créditos em
  `.claude/docs/fotos.md` (decisão do Igor, 31/10/2026).

## Product Principles

1. Explicar sem jargão: quem lê é dono de empresa, não dev.
2. Mostrar o trabalho funcionando, em vez de descrever o trabalho.
3. Um caminho claro por serviço, terminando no WhatsApp.
4. O site é o primeiro case: performance, acessibilidade e SEO precisam ser exemplares.
5. Enxuto e evolutivo: nenhuma página existe só para preencher o menu.

## Security

O site precisa estar seguro, principalmente nos formulários (pedido do Igor, 30/10/2026): HTTPS
forçado, cabeçalhos de segurança, dependências fixadas, nenhum segredo no repositório, formulário
com verificação anti-bot checada no servidor do provedor, honeypot e limite de envios. Detalhes em
`.claude/docs/arquitetura.md`, seção 7.

## Accessibility & Inclusion

WCAG 2.2 AA. Funciona sem JS, só com teclado, no toque e com `prefers-reduced-motion`. As
prévias interativas precisam ser operáveis por teclado e não podem prender o foco.
