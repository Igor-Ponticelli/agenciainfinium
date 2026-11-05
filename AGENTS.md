# AGENTS.md

Site institucional da **Agência Infinium** (infinium.app.br), empresa de Igor Patrick
Ponticelli que cria sites e automação de processos para pequenas e médias empresas. Instruções
para qualquer agente de IA (Claude Code, Codex, Cursor etc.) que trabalhe neste repositório.

## Projeto

- Site comercial da empresa. Contexto de produto em [PRODUCT.md](PRODUCT.md).
- Stack decidida: Astro estático, TypeScript puro, CSS próprio, hospedado na Hostinger como
  arquivos estáticos (a pasta `dist/`). O motivo está em
  [arquitetura.md](.claude/docs/arquitetura.md). Não adicione framework de UI, CSS utilitário
  nem biblioteca de animação sem combinar antes.
- Idioma: só PT-BR, na raiz. Se um dia houver EN, o método bilíngue já está documentado na
  referência do portfólio (ver abaixo).
- A identidade visual é **fixa** e vem do pacote em
  [.claude/docs/identidade/](.claude/docs/identidade/README.md): logo, símbolo, cores, Roboto e
  regras de uso. Nunca redesenhe o logo, redigite o nome "Infinium" ou use cor fora da paleta.
- Os fatos sobre a empresa e os serviços vêm de
  [identidade/EMPRESA.md](.claude/docs/identidade/EMPRESA.md) e
  [identidade/SERVICOS.md](.claude/docs/identidade/SERVICOS.md). O que está em "Pontos a
  confirmar" não entra no site até o Igor confirmar.

## Método

Este repositório repete o método do portfólio pessoal do Igor (`~/Projects/meu-portfolio`), que
já foi construído com ele: documentação de contexto versionada, direção visual fixada antes do
código, etapas escritas como prompts no TODO, impeccable como dona do fluxo e um motor de
movimento próprio (troca de página, cursor, hover) em TypeScript puro. O que vale reaproveitar
de lá, e como, está em
[referencias/meu-portfolio.md](.claude/docs/referencias/meu-portfolio.md). **Reaproveitar o
método, não o site**: a Infinium tem outra identidade, outro público e outro tom.

## Como trabalhar

- Mudanças pequenas e focadas no que foi pedido. Não reformate nem "melhore" arquivos fora da tarefa.
- HTML semântico, CSS e JS sem dependências desnecessárias. Priorize acessibilidade
  (contraste, foco visível, `alt` em imagens) e performance (imagens otimizadas, poucas fontes).
- O site precisa funcionar bem no celular primeiro: o cliente da Infinium chega pelo Instagram e
  pelo WhatsApp.
- Textos devem soar naturais, sem cara de texto gerado por IA, e **sem travessão** (`—`, `–`).
  Tom de voz em [identidade/EMPRESA.md](.claude/docs/identidade/EMPRESA.md): direto, próximo,
  fala com "você", sem jargão.
- Não invente dados (clientes, números, prazos, preços, depoimentos). Se faltar informação,
  pergunte ou deixe `[PENDENTE: ...]`.
- Prévias de sites de clientes só reproduzem o que existe no site original
  ([projetos/](.claude/docs/projetos/README.md)).

## Próximas etapas

[TODO.md](TODO.md) tem as próximas etapas, cada uma escrita como um prompt completo. Quando o
pedido for "faça o TODO N", siga aquele item à risca.

## Documentação de design

- [.claude/docs/processo.md](.claude/docs/processo.md): roteiro de desenvolvimento, etapas e
  qual skill usar em cada uma. **Leia antes de qualquer trabalho de design ou de UI.**
- [.claude/docs/direcao-visual.md](.claude/docs/direcao-visual.md): o que a identidade já fixa
  e o que ainda falta decidir (material, movimento). Tem precedência sobre as skills.
- [.claude/docs/versoes.md](.claude/docs/versoes.md): a pesquisa (Apple, Microsoft, agências) e
  as três versões de estudo de 05/11/2026 que deram na direção atual, "o infinito".
- [.claude/docs/arquitetura.md](.claude/docs/arquitetura.md): stack, SEO, analytics, prévias.
- [.claude/docs/conteudo.md](.claude/docs/conteudo.md): mapa do site, seções, CTAs, o que entra e
  o que nunca entra.
- [.claude/docs/identidade/](.claude/docs/identidade/README.md): pacote de identidade v2
  (empresa, serviços, marca, Instagram, tokens e assets).
- [.claude/docs/projetos/](.claude/docs/projetos/README.md): fatos e identidade de cada site de
  cliente, para as prévias.
- [.claude/docs/referencias/](.claude/docs/referencias/README.md): o portfólio do Igor e as
  três referências analisadas.

## Skills disponíveis (`.claude/skills/`)

- `impeccable`: design, crítica e polimento de interface.
- `taste-skill`: direção visual sem cara de template.
- `humanize-text`: revisão de copy.
- `fixing-metadata`: SEO, Open Graph, favicon, JSON-LD.

## Commits

Siga **[COMMITS.md](COMMITS.md)**. Resumo: Conventional Commits, descrição em português,
commits pequenos e **sem `Co-Authored-By` nem qualquer atribuição à IA**.
Só commite quando for pedido.
