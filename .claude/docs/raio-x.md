# Raio-X do site: checklist da análise

O que o Igor confere em cada Raio-X (TODO 8). Tudo aqui é **leitura passiva** do site da pessoa,
como qualquer visitante faria, mais as ferramentas públicas do Google. Nada de varredura de
portas, teste de invasão, força bruta ou acesso a áreas restritas: além de não ser o produto, é
ilegal sem autorização por escrito. Se a pessoa compartilhar o Search Console, melhor; se não,
dá para fazer tudo sem acesso.

A entrega é um PDF curto, em português, com as quatro partes abaixo, cada uma com o que está em
ordem, o que não está e **o que fazer primeiro**, mais 30 minutos de conversa.

## Antes de começar

- [ ] Endereço do site e o que mais incomoda a pessoa (vem pelo WhatsApp).
- [ ] Abrir o site no celular com 4G e no computador. Anotar a primeira impressão em uma linha.
- [ ] Guardar as capturas do primeiro viewport (celular e desktop) para o relatório.

## 1. Google

- [ ] `site:endereco` no Google: quantas páginas aparecem. Nenhuma = o site não está indexado.
- [ ] `robots.txt` e `meta robots`: alguma página pedindo `noindex` sem querer?
- [ ] Title e description da home e das páginas de serviço: dizem o serviço e a cidade?
- [ ] Um `h1` por página, com o assunto da página.
- [ ] Sitemap existe e está apontado no `robots.txt`?
- [ ] Canonical correto, `www` e sem `www` levando ao mesmo lugar, HTTP redirecionando.
- [ ] Perfil da Empresa no Google: existe, está completo (endereço, horário, telefone, fotos,
      link do site) e bate com o site?
- [ ] Texto da home: dá para entender em 10 segundos o que a empresa faz e onde?
- [ ] Se houver acesso ao Search Console: cobertura, erros, consultas principais.

## 2. Velocidade

- [ ] PageSpeed Insights (celular e desktop): nota, LCP, CLS, INP. Guardar as capturas.
- [ ] Peso da home e número de requisições (aba Rede do navegador).
- [ ] Imagens: tamanho real vs tamanho exibido, formato (AVIF/WebP ou JPG/PNG), `loading="lazy"`.
- [ ] Scripts de terceiros: quais são, quais ainda são usados, se carregam antes do conteúdo.
- [ ] Fontes: de onde vêm, quantos arquivos, `font-display`.
- [ ] Tempo de resposta do servidor (TTFB) e hospedagem.
- [ ] Funciona no celular sem zoom e sem rolagem lateral?

## 3. Segurança

- [ ] HTTPS com certificado válido e **forçado** (o HTTP redireciona?).
- [ ] Plataforma e versão (WordPress, Wix, loja), visível no HTML ou no `generator`; plugins e
      temas desatualizados, quando o site expõe isso.
- [ ] Cabeçalhos de resposta: HSTS, `X-Content-Type-Options`, `X-Frame-Options` ou
      `frame-ancestors`, `Referrer-Policy`, `Permissions-Policy`, CSP. Ferramentas públicas
      como o securityheaders.com fazem essa leitura.
- [ ] Formulário: proteção contra robô, campos obrigatórios, para onde a mensagem vai.
- [ ] Mixed content (recursos em HTTP dentro de página HTTPS).
- [ ] Páginas de login expostas sem necessidade (`/wp-admin`, `/admin`): só anotar que existem.
- [ ] Backup: perguntar à pessoa se existe e onde fica. Não dá para conferir de fora.

## 4. LGPD

- [ ] Política de privacidade: existe, está linkada no rodapé e perto do formulário, descreve o
      que o site de verdade coleta (formulário, WhatsApp, Analytics, pixel, mapa)?
- [ ] Cookies não necessários (Analytics, pixel) só carregam depois do consentimento?
- [ ] Formulário pede só o necessário? Tem um texto curto dizendo para que servem os dados?
- [ ] Há um e-mail de contato para pedidos sobre dados pessoais?
- [ ] Termos de uso: só se o site tiver cadastro, compra ou conteúdo de usuário.

## Fechamento do relatório

- [ ] Resumo em cinco linhas: o que está bem, o que trava, o que fazer primeiro.
- [ ] Lista de ações ordenada por impacto e esforço, em linguagem de dono de empresa.
- [ ] Sem promessa de posição no Google e sem número inventado.
- [ ] Se vale um site novo ou um ajuste: dizer, com o motivo, e oferecer a proposta à parte.
- [ ] Marcar a conversa de 30 minutos.
