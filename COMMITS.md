# COMMITS.md

Regras para criar commits neste repositório. Valem para pessoas e para IA.

## 1. Formato: Conventional Commits em português

```text
<tipo>(<escopo opcional>): <descrição>
```

- O **tipo** fica em inglês (padrão do Conventional Commits). A **descrição** fica em
  **português do Brasil**.
- Descrição no imperativo, com letra minúscula: "adiciona", "corrige", "remove" (não
  "adicionado" nem "adicionando").
- Uma linha, sem ponto final, com até ~72 caracteres. Corpo só se precisar explicar o porquê.

### Tipos

| tipo | quando |
|---|---|
| `feat` | algo novo: página, seção, componente |
| `fix` | correção de algo errado |
| `style` | ajuste visual sem mudar estrutura (cor, espaçamento, tipografia) |
| `refactor` | reorganização de código sem mudar o resultado |
| `perf` | performance (imagens, fontes, scripts) |
| `content` | textos, imagens e prévias de projetos |
| `docs` | documentação (README, AGENTS.md, COMMITS.md) |
| `ci` | workflows e deploy automatizado |
| `build` | dependências e configuração de build |
| `chore` | manutenção (skills, `.gitignore`, configs) |

### Escopos

Opcionais. Use a seção ou área afetada quando ajudar: `hero`, `sites`, `automacao`, `como-funciona`, `projetos`, `contato`,
`rodape`, `seo`, `skills`. Sem escopo para mudanças gerais.

## 2. Commits pequenos: um commit = uma responsabilidade

Cada commit é uma única alteração lógica. Não misture funcionalidade, correção, refatoração,
conteúdo e documentação no mesmo commit. Prefira vários commits pequenos; se um arquivo tem
mudanças independentes, divida (`git add -p`). Se dividir der muito trabalho, pergunte antes.

## 3. Ordem lógica

Commite primeiro o que será usado depois (ex.: a base de estilos antes da seção que a usa).

## 4. Só arquivos da tarefa

Não aproveite o commit para formatar arquivos antigos ou mexer em algo fora do escopo.

## 5. Sem autoria de IA

Nunca adicione `Co-Authored-By`, "Generated with Claude" ou qualquer atribuição à IA, nem na
mensagem de commit nem em descrições de PR. O commit fica assinado só pelo autor do Git.

## Exemplos

```text
feat(hero): adiciona a abertura da home
feat(projetos): adiciona grade de projetos
content(sites): adiciona a página do serviço de sites
style(contato): aumenta contraste dos links
fix(rodape): corrige link do LinkedIn
perf: converte imagens para AVIF
feat(seo): adiciona tags Open Graph
docs: adiciona AGENTS.md
chore(skills): remove skill de scraping do Instagram
```

## Antes de commitar

- tipo correto, no máximo um escopo, descrição em português no imperativo;
- uma única responsabilidade;
- só arquivos da tarefa;
- nenhuma linha de coautoria ou atribuição à IA.
