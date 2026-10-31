# Site da Agência Infinium

Site institucional da [Agência Infinium](https://infinium.app.br): sites e sistemas que trabalham
por você. Astro estático, TypeScript puro e CSS próprio, publicado na Hostinger como arquivos.

O contexto do projeto (produto, arquitetura, conteúdo, identidade, método) está em
[AGENTS.md](AGENTS.md) e em `.claude/docs/`. As etapas, cada uma escrita como um prompt, estão em
[TODO.md](TODO.md).

## Rodar

Precisa do Node 24 (`.nvmrc`).

```bash
npm install
npm run dev        # desenvolvimento em http://localhost:4321
npm run build      # gera dist/
npm run servir     # serve o dist/ com os cabeçalhos do .htaccess (gzip, cache, CSP)
npm run check      # astro check
npm test           # testes de fumaça com Playwright (depois do build)
npm run inspecao   # capturas e checagens em .impeccable/review/ (depois do build)
npm run og         # gera as imagens Open Graph dos projetos em public/og/ (depois do build)
npm run empacotar  # build + infinium-site.zip com o conteúdo de dist/, para a Hostinger
```

Na primeira vez, o Playwright precisa do Chromium: `npx playwright install chromium`.

## Configuração

Copie `.env.example` para `.env` e preencha o que existir. Tudo é chave pública:

| variável                    | para quê                                                           |
| --------------------------- | ------------------------------------------------------------------ |
| `PUBLIC_WEB3FORMS_KEY`      | envio do formulário de contato por e-mail (sem ela, só o WhatsApp) |
| `PUBLIC_TURNSTILE_SITE_KEY` | proteção do formulário contra robôs                                |
| `PUBLIC_GA4_ID`             | Google Analytics 4 (só carrega depois do consentimento)            |
| `PUBLIC_META_PIXEL_ID`      | Meta Pixel (só carrega depois do consentimento)                    |

Sem `PUBLIC_GA4_ID` e `PUBLIC_META_PIXEL_ID` não há cookie nem banner. O preço, o prazo e o link
de pagamento do Raio-X do site ficam em `src/data/raioX.ts`; a data de publicação do site, que
escalona as datas dos posts, em `src/data/blog.ts`.

## Publicar na Hostinger

1. `npm run empacotar` gera `infinium-site.zip` com o conteúdo de `dist/`, incluindo o
   `.htaccess` (HTTPS forçado, `www` para o apex, 404, gzip, cache e cabeçalhos de segurança).
2. No hPanel, Arquivos, Gerenciador de arquivos: apague o conteúdo antigo de `public_html` e
   descompacte o zip lá dentro (os arquivos precisam ficar na raiz de `public_html`, não numa
   subpasta).
3. Confira `https://infinium.app.br/`, uma URL inexistente (404), `/sitemap-index.xml` e os
   cabeçalhos (por exemplo, no securityheaders.com).

## Como adicionar um projeto

1. Documente o site do cliente em `.claude/docs/projetos/<slug>.md` (fatos, identidade, o que
   reproduzir e as interações que existem), com capturas em `capturas/`.
2. Crie `src/content/projetos/<slug>.md` com o frontmatter (título, slug, tipo, ano, status,
   url, resumo, ordem, revisadoEm, atualizadoEm) e o case no corpo.
3. Crie a prévia em `src/components/previas/<Nome>.astro` (HTML e CSS com escopo, `--u` por
   container, só o que existe no original) e, se houver interação, `src/scripts/previas/<slug>.ts`
   com `iniciar(raiz)`. Registre em `src/components/previas/index.ts`.
4. Se o site usar outra fonte: subset em `src/assets/fontes-previas/`
   (`scripts/subsetar-fontes-previas.py`), entrada em `astro.config.ts` e em
   `src/components/FontesPrevias.astro`.
5. `npm run build`, `npm run og` (imagem de compartilhamento do projeto) e `npm test`.

## Como adicionar um post

Um arquivo em `src/content/blog/<slug>.md` com `titulo`, `descricao` (até 160 caracteres),
`data` ou `diasAntes`, `tags`, `chamada` (`sites`, `sistemas` ou `raioX`) e o texto em Markdown.
Sem travessão. `rascunho: true` deixa o post fora do build.

## Commits

[COMMITS.md](COMMITS.md): Conventional Commits com descrição em português, pequenos, sem
coautoria.
