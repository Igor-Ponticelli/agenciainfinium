# RetroDash

- Site: https://retrodash.com.br (rotas `/pt-BR` e inglês)
- Captura: `capturas/retrodash-desktop.webp`, `capturas/retrodash-pagina.webp`

## Fatos

- SaaS de retrospectivas ágeis em tempo real, em produção. Gratuito, sem cartão (o site diz).
- Projeto **solo**: conceito, identidade visual, UI, regras de negócio, modelo de dados,
  arquitetura, testes, CI/CD e deploy (perfil).
- Stack: Next.js, React, TypeScript, Tailwind, Firebase/Firestore, Vitest, GitHub Actions,
  semantic release (perfil). Next.js confirmado no HTML.
- Design system próprio em Tailwind e CSS variables, com temas claro, escuro e do sistema (perfil
  e site).
- Funcionalidades (página `/pt-BR/features`):
  - salas privadas com senha (hash SHA-256) e salas públicas;
  - board em tempo real com listeners do Firestore: cards, votos e status;
  - modo anônimo, que oculta autores inclusive no placar;
  - itens de ação com 3 estados (Pendente, Concluído, Manter) e transferência para a próxima
    sala;
  - gamificação: pódio ouro, prata e bronze, com 1 ponto por card e 0,5 por item de ação;
  - "Melhorar com IA" com Google Gemini Flash, via API do lado do servidor (BFF, segundo o
    perfil), com modos separados para card e item de ação e limite de 500 caracteres;
  - interface em PT-BR e inglês.
- Multi-tenant (organizações, salas, convites), papéis e validação no servidor (perfil).
- **Não citar**: o uso na Geomais (decisão do usuário).
- Ênfase pedida pelo perfil: decisões de engenharia, não números de adoção.

## Identidade

| token | valor |
|---|---|
| fonte | Plus Jakarta Sans (pesos 500 a 800) |
| fundo claro | quase branco azulado (conferir o valor exato no CSS) |
| fundo escuro | `#0f1117`, texto secundário `#8b90a7` |
| acentos | `--color-accent-cyan: #00e5cc`, `--color-accent-violet: #7b61ff` |
| CTA | pílula laranja/âmbar ("Começar"; conferir o valor) |
| raio | `--radius: 14px` (sm 8, lg 22) |
| assinatura | título enorme com "a cada sprint." em gradiente ciano → azul/violeta; pílula de rótulo com ponto ciano; logo com três "pessoas" em gradiente |

## Miniprévia

**Reproduzir**: o mock do quadro que já está no hero do site, com barra de URL
`retrodash.app/room/sprint-42`, indicador `LIVE · 4` e três colunas: "What went well" ("Great team
sync", "Shipped on time!", "CI pipeline win"), "To improve" ("Clearer ticket scope", "More async
updates", "Earlier code review") e "Action items" ("Add PR template" concluído, "Daily
standups", "Refine story sizing"), com os contadores `+n`.

**Interações que existem no produto:**
- votar num card (o `+n` aumenta);
- alternar o estado de um item de ação (Pendente → Concluído → Manter);
- trocar entre tema claro e escuro.

**Não reproduzir**: o botão "Melhorar com IA" com texto reescrito. Seria inventar uma saída da IA.
Pode aparecer como botão, sem resultado.

**Fotos**: nenhuma. A prévia é só interface.
