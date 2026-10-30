# Projetos

> **Copiado do portfólio do Igor em 30/10/2026.** Decisão do Igor (30/10/2026): entram os
> três sites, **Brisa Café, Linetex e Lumaj**, e um produto, o **RetroDash** (prova de que a
> Infinium constrói sistemas). Acolhe e Dadefer ficaram de fora e os arquivos foram removidos.
> Outros sites do monorepo `~/Projects/infinium/sites/` só entram com arquivo próprio neste
> formato. Os avais de foto são os mesmos do portfólio (Brisa, Linetex e Lumaj, 17/10/2026).
> Sobre o RetroDash, continua valendo: **não citar o uso dele na Geomais**.

Levantamento dos seis projetos do portfólio do Igor, feito em 15/10/2026 a partir dos sites publicados:
HTML e CSS servidos, e capturas com Playwright em 1440×900 e página inteira, locale pt-BR, tema
claro. Fatos de autoria e de stack vêm do perfil do Igor.

Cada arquivo tem:
- **Fatos**: o que pode ser afirmado no site, com a fonte.
- **Identidade**: tokens reais extraídos do CSS publicado.
- **Miniprévia**: o que reproduzir e quais interações **existem** no original. Nada fora dessa
  lista entra na prévia.

| projeto | tipo | status | arquivo |
|---|---|---|---|
| RetroDash | produto (SaaS) | em produção | [retrodash.md](retrodash.md) |
| Brisa Café | site | publicado | [brisa-cafe.md](brisa-cafe.md) |
| Linetex Embalagens | site | publicado | [linetex.md](linetex.md) |
| Lumaj Distribuidora | site | publicado | [lumaj.md](lumaj.md) |

`capturas/` guarda as referências visuais (primeiro viewport e página inteira reduzida). Servem
**só para consulta** durante o build e nunca vão para o site publicado.

## Regras para todas as prévias

- Reproduzir em HTML/CSS reais, com os tokens abaixo. Sem screenshot e sem iframe.
- Fotos só como asset, com aval do cliente, e só onde a foto é a identidade (Brisa).
  Fotos de terceiros com licença CC (por exemplo, a cuca e o pão de queijo da Brisa) ficam de
  fora.
- Os textos da prévia são os textos reais do site (são curtos e públicos). Não inventar produto,
  preço, depoimento nem funcionalidade.
- Os dados de demonstração que aparecem no próprio site original (por exemplo, os cards do
  quadro do RetroDash ou os nomes na agenda do Acolhe) podem ser reaproveitados como estão.
- Quando um site mudar, a prévia precisa ser revista. O frontmatter de cada projeto guarda
  `revisadoEm`.

## Padrões técnicos dos sites de clientes

Comum aos quatro, e bom material para a página de serviços e para os textos de cada projeto
(tudo verificado no código publicado):
- Astro, com CSS próprio em tokens (nomes em português: `--fundo`, `--tinta`, `--filete`) sobre a
  base do Tailwind v4.
- Fontes variáveis self-hosted, sem Google Fonts.
- `prefers-reduced-motion` tratado no CSS.
- Link "Pular para o conteúdo", `sitemap-index.xml`, title e description locais, focados em
  busca ("… em Guabiruba (SC)").
- Mesma curva de easing (`cubic-bezier(.16, 1, .3, 1)`) e o mesmo banner de consentimento com
  raio configurável. Isso mostra uma base reaproveitada entre projetos, coerente com o histórico
  de biblioteca de componentes.
