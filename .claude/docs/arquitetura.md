# Arquitetura

Decisões técnicas do site da Infinium, com o motivo de cada uma. Herdadas do portfólio do Igor em
30/10/2026 (ver [referencias/meu-portfolio.md](referencias/meu-portfolio.md)) e ajustadas para a
empresa. Onde há "conferir", a API precisa ser confirmada na documentação da versão instalada.

## 1. Stack

| camada | escolha | por quê |
|---|---|---|
| Framework | **Astro 7** com saída estática, fixado na última 7.x publicada há mais de duas semanas | Gera HTML puro com zero JS por padrão. View Transitions (`<ClientRouter />`) para a troca de página. É a mesma base dos sites que a Infinium entrega, então o site da empresa prova a ferramenta que vende. |
| Interatividade | **TypeScript puro**, sem framework de UI | O movimento é um loop próprio (motor de rAF), igual ao do portfólio. Nada no site pede React. |
| Estilo | **CSS próprio** com tokens em custom properties e `<style>` com escopo do Astro | Os tokens vêm prontos da identidade (`identidade/tokens/tokens.css`). O escopo isola o CSS de cada prévia de site de cliente, que tem cores e fontes próprias. Sem Tailwind aqui (o monorepo dos clientes usa, este repositório não). |
| Conteúdo | **Content collections** do Astro (Markdown + frontmatter tipado) para os projetos | Projeto novo é um arquivo novo. Os textos de página ficam em `src/i18n/paginas/*.ts` como no portfólio, mesmo com um idioma só, para o texto ficar separado da marcação. |
| Smooth scroll | **Lenis**, movido pelo loop do motor (`autoRaf: false`) | Mesma configuração do portfólio (`lerp` 0,1). Desligado com `prefers-reduced-motion`. Se o brief pedir movimento mais discreto, sai. |
| Fontes | **Roboto self-hosted** (`@fontsource-variable/roboto` ou `@fontsource/roboto`, licença Apache 2.0), woff2 com subset latin e latin-ext | A identidade fixa Roboto. Sem link para o Google Fonts em produção (taste-skill e impeccable pedem isso). Pesos 400, 500 e 700, ou a variável. |
| Hospedagem | **Hostinger**, hospedagem compartilhada, arquivos estáticos | Decisão do Igor (30/10/2026): a pasta `dist/` vai zipada para `public_html`, no fim do projeto. Sem adapter, sem Node no servidor. O `.htaccess` em `public/` força HTTPS, tira o `www`, aponta a 404 (`ErrorDocument 404 /404.html`), dá cache longo a `/_astro/` e envia os cabeçalhos de segurança. A Vercel ficou de fora. |
| Domínio | **`https://infinium.app.br`** (Igor, 30/10/2026; o link da bio aponta para `/acessos`) | Valor de `site` no `astro.config`. Conferir onde o domínio está registrado e quem administra o DNS. |
| Qualidade | `astro check`, Prettier, Playwright para smoke tests e capturas, Lighthouse | Igual ao portfólio. |
| Node | versão LTS fixada em `.nvmrc` | |

Ficou de fora, de propósito:
- **Next.js**: SSR e RSC não resolvem nenhum problema deste site.
- **CMS**: o conteúdo muda pouco e o autor é dev. Se a Infinium quiser blog ou cases editados
  por outra pessoa, o Sveltia CMS do monorepo de clientes é o caminho, e entra como decisão nova.
- **Formulário com backend próprio**: o formulário vai por serviço externo (ver seção 7), nunca
  função serverless nem PHP na Hostinger.

## 2. Idioma, URLs e SEO

Só PT-BR, na raiz, `<html lang="pt-BR">`. Não há `/en/`.

Mesmo assim, o código segue a organização do portfólio (tabela de rotas em `src/i18n/rotas.ts`
e textos em `src/i18n/`), com um idioma só. Se um dia entrar EN, o método bilíngue está
documentado em [referencias/meu-portfolio.md](referencias/meu-portfolio.md) e na arquitetura do
portfólio (hreflang recíproco, faixa de sugestão sem redirect, seletor como link real).

URLs previstas (o mapa completo está em [conteudo.md](conteudo.md)):

| URL | página |
|---|---|
| `/` | home, persuasiva como uma landing page, mas com menu |
| `/servicos/` | hub curto: os dois serviços, "qual eu preciso?" e como se conectam |
| `/sites/` | serviço: sites |
| `/sistemas/` | serviço: sistemas sob medida e automação de processos |
| `/projetos/` | portfólio, filtrado por tipo (site, produto) |
| `/projetos/<slug>/` | um site de cliente ou o RetroDash, com prévia e o case |
| `/blog/` e `/blog/<slug>/` | blog em Markdown, sem CMS |
| `/contato/` | WhatsApp, e-mail, Instagram e formulário |
| `/raio-x-do-site/` | landing page do produto de entrada, sem menu, para tráfego pago |
| `/acessos/` | página de links da bio do Instagram (`noindex`) |
| `/privacidade/` | política de privacidade (obrigatória: GA4, Pixel e formulário) |
| `/404/` | não encontrada |

Metadados por página:
- `<link rel="canonical">` para a própria URL, com barra final (`trailingSlash: 'always'`).
- Title e description locais, com o termo de busca que a página mira ("criação de sites em
  Brusque", "automação de processos para empresas"). Conferir as cidades com o Igor.
- Open Graph com a `og-image-1200x630.png` da identidade como padrão e imagem própria nas
  páginas de projeto.
- JSON-LD `Organization` (nome "Agência Infinium", `url`, `logo`, `sameAs` com o Instagram,
  `contactPoint` com o WhatsApp se o Igor aprovar) e `WebSite`. Nas páginas de serviço, `Service`.
  Nas de projeto, `CreativeWork`.
- `@astrojs/sitemap` e `robots.txt`.

## 3. Movimento e troca de página

O método é o do portfólio: um único loop de `requestAnimationFrame` baseado em tempo
(`src/scripts/motor.ts`), um material de marca que conduz cursor, hover e troca de página, e as
defesas de acessibilidade (`pointer: fine`, `prefers-reduced-motion`, foco próprio, conteúdo
visível sem JS). O material da Infinium ainda não foi escolhido: ver
[direcao-visual.md](direcao-visual.md).

Regras que já valem, independentemente do material:
- animar só `transform`, `opacity` e `clip-path`;
- medidas em cache, refeitas no resize, quando as fontes carregam e depois de cada troca de página
  (`astro:after-swap`);
- a troca de página dura menos de 1,2 s (a do portfólio ficou em 1,6 s com movimento calmo; aqui o
  público é mais apressado);
- com movimento reduzido, a troca vira um fade curto;
- o cursor nativo nunca some no toque nem com movimento reduzido.

## 4. Contato, analytics e privacidade

- **Contato**: WhatsApp com mensagem pronta por contexto (sites, sistemas, geral). Número
  público `+55 47 99273-5089` (`wa.me/5547992735089`), e-mail `agenciainfinium@gmail.com` na
  página de contato e no rodapé (Igor, 30/10/2026). A página de contato tem o formulário de
  orçamento com dois envios: "Enviar pelo WhatsApp" (monta a mensagem com os campos e abre o
  `wa.me`) e "Enviar por e-mail" (vai pelo serviço externo e cai no Gmail). Regras de segurança
  na seção 7.
- **Analytics**: Google Analytics 4 e Meta Pixel entram, configurados no fim (TODO 6). O código
  nasce preparado: um módulo `src/scripts/metricas.ts` com uma função única de evento, atributos
  `data-evento` nos CTAs (clique no WhatsApp, envio do formulário, clique de CTA) e nada carregado
  antes do consentimento. Banner no padrão dos sites de clientes (o monorepo tem o componente) e
  página `/privacidade/`. Sem termos de uso: site institucional não precisa (Igor, 30/10/2026).
- **Nome**: "Infinium" no logo (sempre o arquivo, nunca redigitado) e "Agência Infinium" nos
  metadados e no rodapé, com o CNPJ no rodapé se o Igor quiser.

## 5. Prévias dos sites de clientes

Mesmas regras do portfólio (seção 4 da arquitetura de lá), resumidas:
- um componente Astro por projeto em `src/components/previas/`, HTML semântico e CSS com escopo,
  usando os tokens reais do site (`.claude/docs/projetos/`);
- sem iframe e sem screenshot; fotos só com aval do cliente;
- só o que existe no original; textos do site original;
- fontes do cliente carregadas quando a prévia se aproxima da tela, com subset e `size-adjust`;
- a prévia é uma `region` com rótulo, fora de `<a>`, operável por teclado;
- responsiva com `@container`;
- até ~30 KB de CSS+JS comprimido por prévia.

O portfólio já tem as prévias de Brisa Café, Linetex, Lumaj e RetroDash prontas
(`~/Projects/meu-portfolio/src/components/previas/`), e são exatamente as quatro que entram
aqui (decisão do Igor, 30/10/2026). Elas podem ser **copiadas e adaptadas**: são a reprodução
do site ou do produto, não o design do portfólio. Conferir o `revisadoEm` de cada arquivo de
projeto antes.

## 6. Estrutura do código (prevista)

```text
src/
  components/      material de marca, cabeçalho, rodapé, botão de WhatsApp, formulário
    previas/       uma prévia por site de cliente
  content/
    projetos/      brisa-cafe.md, linetex.md, lumaj.md, retrodash.md
    blog/          um .md por post
  i18n/            rotas.ts, textos.ts, paginas/*.ts (um idioma só, mesma organização)
  layouts/         Base.astro (site) e, no TODO 8, o layout da landing page sem menu
  pages/           index, servicos, sites, sistemas, projetos/index, projetos/[slug],
                   blog/index, blog/[slug], contato, raio-x-do-site, privacidade, acessos, 404
  styles/          tokens.css (a partir de identidade/tokens), base.css, site.css
  scripts/         motor.ts, material de marca, rolagem.ts, menu.ts, previas.ts, metricas.ts,
                   formulario.ts
public/            favicon.svg, apple-touch-icon.png, og.png (da identidade), robots.txt,
                   site.webmanifest, .htaccess
```

## 7. Segurança

Pedido do Igor (30/10/2026): o site inteiro precisa estar seguro, principalmente o formulário.
Num site estático a superfície é pequena, e o que existe fica assim:

- **Transporte e cabeçalhos** (`public/.htaccess`): HTTPS forçado, `www` redirecionado para o
  apex, HSTS, `X-Content-Type-Options: nosniff`, `Referrer-Policy:
  strict-origin-when-cross-origin`, `Permissions-Policy` restritiva e `X-Frame-Options: DENY`
  (as prévias não são iframes). `Content-Security-Policy` entra no TODO 6, depois de GA4, Pixel,
  Turnstile e Web3Forms estarem definidos, porque a lista de origens depende deles.
- **Formulário**: serviço externo **Web3Forms** (entrega por e-mail no Gmail, HTML `POST`
  funciona sem JS). Proteções: **Cloudflare Turnstile** com a verificação feita no servidor do
  Web3Forms (a chave secreta fica lá, não no repositório), campo **honeypot**, limite de
  tamanho nos campos, limite de envios por origem do próprio serviço e validação nativa do
  HTML. A chave pública do Web3Forms é pública por desenho; se houver abuso, ela é trocada no
  painel. Nada de dado pessoal fica no site: o envio vai direto para o e-mail. Se o Igor
  preferir outro provedor (Formspree), a troca é só do `action`.
- **Segredos**: nenhum no repositório. Chaves públicas (Web3Forms, Turnstile site key, GA4,
  Pixel) ficam em `.env` lido no build (`PUBLIC_*`), com `.env.example` versionado.
- **Dependências**: versões fixadas, `npm audit` no checklist do TODO 6, nenhum script de
  terceiros além dos de analytics (após consentimento) e do Turnstile (só na página de contato).
- **Conteúdo**: sem `set:html` com dado externo; o único `set:html` é o JSON-LD gerado no build.
- **Privacidade**: página `/privacidade/` cobrindo GA4, Pixel, formulário e cookies, conforme a
  LGPD. Sem termos de uso.

## 8. Blog e landing page

- **Blog**: content collection `blog` (Markdown com frontmatter: título, descrição, data,
  atualizado em, tags). Sem CMS: o autor é dev. Lança já com os posts prontos; o último com a
  data da publicação do site e os anteriores escalonados 1, 2, 3 e 4 dias antes (Igor,
  30/10/2026). Cada post termina num CTA para o serviço ou para o Raio-X. JSON-LD `BlogPosting`.
- **Raio-X do site**: landing page em `/raio-x-do-site/`, mesmo domínio (soma autoridade e
  recebe links do blog e da página de sites), layout sem menu e com uma ação só, headline
  espelhando o anúncio. Pagamento por link externo (Mercado Pago ou Stripe), porque o site é
  estático. Indexável; fora do menu.

## 9. Próximo passo

O TODO 1 está feito. O próximo é o TODO 2 em [TODO.md](../../TODO.md): o conteúdo completo.
