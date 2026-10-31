# Fotos do site

Decisão do Igor em 31/10/2026: o site leva fotos, escolhidas uma a uma no Unsplash. Antes disso a
regra era "sem foto de banco"; a regra nova está em [conteudo.md](conteudo.md) e em
[direcao-visual.md](direcao-visual.md), seção 5.

## Licença

Todas as fotos estão sob a **Unsplash License** (uso livre, inclusive comercial, sem
atribuição obrigatória; não podem ser vendidas sem modificação nem usadas para montar um serviço
concorrente do Unsplash). Mesmo sem obrigação, os créditos ficam aqui. Nenhuma foto mostra
pessoa identificável posando como se fosse da equipe ou cliente da Infinium.

## Onde ficam

- Originais em `src/assets/fotos/`, baixados em 31/10/2026 a 1800 px de largura (JPEG, qualidade
  82), pela URL `https://images.unsplash.com/<id>?fm=jpg&q=82&w=1800&fit=max`.
- Registro em `src/data/fotos.ts`: nome, `alt`, autor e página no Unsplash.
- Componente `src/components/Foto.astro`: uma célula mesclada com proporção fixa, AVIF e WebP
  nos tamanhos usados (`widths`, `sizes`), carregamento preguiçoso (menos nas aberturas, que são
  o LCP e levam `fetchpriority="high"`). Sobre o degradê, `tom="violeta"` deixa só a luz da
  foto, nas cores da marca (`mix-blend-mode: luminosity`).
- Capa de post: campo `capa` no frontmatter, com um dos nomes de `src/data/fotos.ts`.

## As fotos

| nome | arquivo | onde aparece | fotógrafo | página |
|---|---|---|---|---|
| `celular` | celular.jpg | abertura da home (tinta violeta) | Ruan Richard Rodrigues | https://unsplash.com/photos/pK3ozoRgQGc |
| `planilha` | planilha.jpg | cena do problema (home); capa de "Quando a empresa precisa de um sistema só" | Gorilla ROI | https://unsplash.com/photos/9fZuqBYlV1w |
| `entre` | entre.jpg | bloco Sites (home) | Tim Mossholder | https://unsplash.com/photos/75zhsltk6VE |
| `estoque` | estoque.jpg | bloco Sistemas (home) | Huy Lộc | https://unsplash.com/photos/QbhtgEoVJcU |
| `aberto` | aberto.jpg | cabeça de `/sites/` | Mike Petrucci | https://unsplash.com/photos/c9FQyqIECds |
| `postIts` | post-its.jpg | cabeça de `/sistemas/` | Paymo | https://unsplash.com/photos/AmhxmYXwbZM |
| `lupa` | lupa.jpg | cabeça de `/raio-x-do-site/` | ThisisEngineering | https://unsplash.com/photos/ZJUG912sIW4 |
| `lupaGlobo` | lupa-globo.jpg | capa de "Por que o site da sua empresa não aparece no Google" | Clay Banks | https://unsplash.com/photos/b5S4FrJb7yQ |
| `redes` | redes.jpg | capa de "Seu cliente chega pelo Instagram" | Julian | https://unsplash.com/photos/0I21xHfgw0E |
| `notebook` | notebook.jpg | capa de "O que deixa um site lento" | Case Classico | https://unsplash.com/photos/XLwnQaB0sEg |
| `cadeado` | cadeado.jpg | capa de "O que é um site seguro" | smallbox | https://unsplash.com/photos/pCnsAvfbetw |
| `pastas` | pastas.jpg | capa de "Política de privacidade, cookies e LGPD" | Cht Gsml | https://unsplash.com/photos/qf9L-0nvLkw |

## Como trocar ou acrescentar uma foto

1. Escolher no Unsplash uma foto sem pessoa identificável em primeiro plano, que ilustre o
   assunto sem cara de banco de imagem (objetos, mãos, lugares, telas).
2. Baixar a 1800 px pela URL acima, salvar em `src/assets/fotos/<nome>.jpg`.
3. Registrar em `src/data/fotos.ts` (nome em `nomesFotos`, `alt` descritivo em português, autor,
   página) e nesta tabela.
4. Usar com `<Foto nome="..." />` numa célula da planilha, ou como `capa` de um post.
