# Linetex Embalagens

- Site: https://linetexembalagens.com.br
- Captura: `capturas/linetex-desktop.webp`, `capturas/linetex-pagina.webp`

## Fatos (do site)

- Embalagens, fitas, arqueação, máquinas, limpeza, higiene, escritório e descartáveis, no atacado
  e no varejo. Em 30/10/2026 o site publicado passou a dizer **"em Brusque e região"** (title,
  description, hero e endereço em Brusque, CEP 88352-325); a prévia reproduz isso. Antes
  (17/10/2026) o site dizia "em Guabiruba" e a prévia do portfólio dizia "Guabiruba e região" a
  pedido do Igor.
- O site funciona como **catálogo com lista de cotação**: o visitante toca em "Cotar" nos itens,
  abre a "Lista" no topo, anota quantidades e medidas e envia tudo numa única mensagem de
  WhatsApp. "Nada é comprado: é só uma mensagem."
- 9 departamentos numerados (01 a 09) e itens com numeração de catálogo (02.1, 06.3 …).
- Páginas: início, produtos, empresa, contato. FAQ na home.
- Stack: Astro (confirmado), fontes self-hosted, `prefers-reduced-motion`, sitemap.

## Identidade

| token | valor |
|---|---|
| `--color-papel` | `#fff`, `--color-papel-2: #f4f5f9` |
| `--color-tinta` | `#0e1240` (azul-marinho quase preto), `#4a4f72`, `#6b7091` |
| `--color-indigo` | `#1b1f7a` |
| `--color-azul` | `#2b5be3` (texto `#2348c4`, claro `#e9eefc`) |
| `--color-filete` | `#dde0ea`, forte `#b8bdd2` |
| títulos | **Lexend Exa** (largo, espaçado) |
| texto | **Lexend** |
| raio | 0 (cantos retos) |
| assinatura | estética de **índice de catálogo impresso**: rótulo "ÍNDICE DO CATÁLOGO · 9 DEPARTAMENTOS", linhas com filete, numeração em azul, miniatura quadrada com borda e seta; trilho lateral fixo com 01 a 09 em blocos índigo; filete azul de 3px no topo da página; botões retos índigo |

## Miniprévia

**Reproduzir**: o hero (título em Lexend Exa e CTA índigo) e o índice do catálogo com algumas
linhas e o trilho 01 a 09. Botão "Lista 0" no cabeçalho.

**Interações que existem:**
- "Cotar" num item soma 1 no contador da "Lista";
- abrir a lista mostrando os itens escolhidos;
- hover nas linhas do índice (seta).

**Fotos**: as miniaturas de produto são fotos de catálogo. Ou se usa com aval, ou se troca por
blocos neutros com o filete (decidir no build).
