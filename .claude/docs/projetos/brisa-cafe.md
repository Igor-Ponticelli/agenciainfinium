# Brisa Café

- Site: https://brisacafeteria.com.br
- Captura: `capturas/brisa-cafe-desktop.webp`, `capturas/brisa-cafe-pagina.webp`

## Fatos (do site)

- Cafeteria anexa ao Catarina Moda Shopping, em Brusque (SC), aberta ao público. Salão e garden.
- Site de uma página: hero, "Do nosso balcão" (vitrine de produtos), "Um lugar para ficar um
  pouco" (o espaço), "Visite a Brisa" (endereço, horário, contato) e CTA final.
- Status de funcionamento calculado a partir do horário ("Fechado agora. Abre amanhã às 8h"):
  seg a qui das 8h às 18h, sex das 8h às 17h, sáb e dom fechado.
- **Tema claro e escuro** seguindo o sistema (`prefers-color-scheme`).
- Créditos de foto no rodapé: fotos de terceiros em domínio público e CC BY-SA, as demais são da
  Brisa. Bom detalhe de cuidado para citar.
- Stack: Astro (confirmado), fontes self-hosted, `prefers-reduced-motion`, sitemap.

## Identidade

| token | claro | escuro |
|---|---|---|
| `--fundo` | `#faf4e6` | `#1c1410` |
| `--fundo-2` | `#f3e8d3` | `#261b15` |
| `--cartao` | `#fffaf0` | `#2c2018` |
| `--texto` | `#2b1d14` | `#f2e6d6` |
| `--texto-2` | `#6b4a33` | `#d9a57c` |
| `--marca` | `#85593c` | `#cc9b7a` |
| `--caramelo` | `#cc9b7a` | `#cc9b7a` |
| títulos | **Young Serif** | |
| texto | **Figtree** (variável) | |
| raio | `--raio: 1rem`; botões em pílula | |

Assinatura: título serifado grande em marrom-café; foto do salão com cantos arredondados e uma
segunda foto menor (xícara) sobreposta com moldura clara; botões em pílula marrom com ícone do
WhatsApp; seção do balcão em fundo marrom com grade de produtos.

## Miniprévia

**Reproduzir**: o hero (título, subtítulo, os dois botões e o status), com a foto do salão e a
xícara sobreposta.

**Interações que existem:**
- o status aberto/fechado, calculado com o horário real da Brisa e o relógio do visitante (no
  fuso de Brasília);
- a troca de tema claro/escuro, que o site faz seguindo o sistema. Na prévia, pode ser um
  controle;
- hovers dos botões.

**Fotos**: salão e xícara (são da Brisa), com aval. Nada das fotos CC de terceiros.
