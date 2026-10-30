# Infinium — identidade e empresa

Pacote com a identidade visual (versão 2, refinada em outubro de 2026) e a definição do que a Infinium faz.

## Comece por aqui

| Arquivo | Conteúdo |
|---|---|
| [EMPRESA.md](EMPRESA.md) | Quem somos, problema que resolvemos, posicionamento, missão e valores, tom de voz, mensagens-chave |
| [SERVICOS.md](SERVICOS.md) | Sites e automação de processos: o que inclui, exemplos e etapas |
| [MARCA.md](MARCA.md) | Logo, símbolo, cores, tipografia e regras de uso |
| [INSTAGRAM.md](INSTAGRAM.md) | Foto de perfil, nome, bio (3 opções), link e destaques, com base em pesquisa |
| `manual/brand-guide.html` | Manual visual interativo; abra no navegador |

## Pastas

```
assets/
  svg/logo/        logo empilhado e horizontal (primary, white, ink, lilac)
  svg/simbolo/     símbolo completo, compacto e micro
  svg/favicon/     favicon (troca para lilás no modo escuro), apple-touch-icon
  png/logo/        os mesmos logos em PNG, 2400px de largura
  png/simbolo/     símbolos em PNG, 1200px
  png/favicon/     favicon 16/24/32/48 e ícone de app 180/192/512
  png/redes-sociais/  foto do Instagram, capa 1500×500, og-image 1200×630
tokens/            tokens.css e tokens.json (cores, degradê, tipografia)
manual/            brand-guide.html
fonte-editavel/    SVGs mestres + build.py para regenerar variações
```

## Se precisar editar

Os arquivos em `fonte-editavel/src/` usam `currentColor`. Edite ali e rode:

```bash
python3 build.py
```

dentro de `fonte-editavel/` para regenerar logos, favicons, tokens e manual.

A versão original do logo (v1) está em `fonte-editavel/src/original/`.
