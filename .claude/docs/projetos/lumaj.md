# Lumaj Distribuidora

- Site: https://lumajdistribuidora.com.br
- Captura: `capturas/lumaj-desktop.webp`, `capturas/lumaj-pagina.webp`

## Fatos (do site)

- Embalagens, descartáveis, limpeza, higiene e escritório, no atacado e no varejo, em Brusque
  (SC). Loja física na Rua Luiz Boos, 145, com entrega em Brusque e região.
- O site funciona como **pedido por WhatsApp**: "Adicionar" com quantidade (1, 5, 50…), abrir
  "Meu pedido", escolher entrega ou retirada e enviar como mensagem. "Nada é cobrado pelo site."
- 8 departamentos numerados, itens com numeração de catálogo.
- Horário: seg a sex das 07:30 às 12:00 e das 13:00 às 17:30.
- Aviso "Em breve, a Lumaj no Pedidos10" (app de pedidos), com link quando estiver no ar.
- Stack: Astro (confirmado), fontes self-hosted, `prefers-reduced-motion`, sitemap.
- Mesma base estrutural da Linetex (catálogo numerado, lista via WhatsApp) com identidade
  diferente. É um bom argumento para a página de serviços: o mesmo sistema servindo duas marcas.

## Identidade

| token | valor |
|---|---|
| `--color-grafite` | `#474747` (hero com gradiente radial grafite `#5c5c5c → #343434`) |
| `--color-tinta` | `#242424`, `#555`, `#6e6e6e` |
| `--color-limao` | `#a9cd4c` (forte `#96bb37`, claro `#eef5da`, texto `#4c6b12`) |
| gradiente limão | `linear-gradient(115deg, #8cc63f, #a9cd4c 48%, #d2e96e)` |
| sombra limão | `0 10px 28px -12px #7eb02cbf` |
| fonte | **Montserrat** (variável) para tudo |
| raio | `--raio: .75rem`; botões em pílula |
| assinatura | hero grafite com título branco pesado, traço limão curto sob o título e uma faísca de quatro pontas (a mesma do logo); CTA em pílula limão com sombra; departamentos em duas colunas com miniatura; numeração em caixa grafite (`03`) |

## Miniprévia

**Reproduzir**: o hero grafite com o título, o traço limão, a faísca e o CTA "Fazer meu pedido"; o
cabeçalho com "Pedido 0"; um ou dois itens com "Adicionar".

**Interações que existem:**
- "Adicionar" vira um seletor de quantidade (− n +), e o contador de "Pedido" acompanha;
- abrir "Meu pedido" com a lista;
- hover das linhas de departamento.

**Fotos**: as miniaturas e as fotos da loja são da Lumaj. Usar com aval ou trocar por blocos.
