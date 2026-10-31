---
titulo: 'O que é um site seguro: HTTPS, atualização, backup e cabeçalhos'
descricao: Site de empresa pequena também é invadido. Quatro coisas que separam um site seguro de um site que só parece seguro.
diasAntes: 2
tags: [sites, seguranca]
chamada: raioX
capa: cadeado
---

Ninguém acha que o site da própria empresa é alvo. Mas a maior parte das invasões não é dirigida: são programas que varrem a internet procurando qualquer site com uma brecha conhecida. O tamanho da empresa não importa. O que importa é a brecha.

## HTTPS: o cadeado

É o primeiro sinal. Com HTTPS, o que passa entre o visitante e o site vai cifrado: o navegador mostra o cadeado, o Google confia mais e os dados do formulário não viajam abertos. Sem HTTPS, o navegador avisa que o site "não é seguro" antes mesmo de abrir. Hoje o certificado é gratuito e qualquer hospedagem decente oferece.

Vale conferir também se o site força o HTTPS. Alguns têm o certificado, mas continuam abrindo pelo endereço sem cadeado.

## Atualização: a brecha conhecida

A maioria dos sites invadidos roda alguma plataforma com plugins desatualizados. Quando uma falha é descoberta, a correção sai em dias, mas o site que ninguém atualiza fica com a porta aberta por meses. Se o seu site usa uma plataforma com plugins, alguém precisa cuidar das atualizações. Se o site é estático, feito só de arquivos, essa porta nem existe.

## Backup: o plano B

Se o site cair, for invadido ou alguém apagar algo sem querer, você precisa de uma cópia para voltar. O backup precisa ser automático, ficar fora do mesmo servidor e ser testado de vez em quando. Um backup que nunca foi restaurado é uma esperança, não um plano.

## Cabeçalhos de segurança: as regras do navegador

É a parte invisível. O site pode mandar ao navegador algumas regras: só abrir por HTTPS, não deixar o site ser colocado dentro de outro, não executar código de origens desconhecidas. São linhas de configuração no servidor, custam nada e fecham vários caminhos de ataque. Quase nenhum site pequeno tem.

## E o formulário

Formulário é a porta por onde dado de gente entra. Ele precisa de proteção contra robô, limite no que aceita e um destino seguro para a mensagem. E o que ele coleta precisa estar explicado na política de privacidade.

## O que você pode conferir agora

1. Abra o site e veja se há o cadeado, e se o endereço sem `https` redireciona para o com.
2. Pergunte a quem cuida do site quando foi a última atualização e onde está o backup.
3. Veja se o formulário tem alguma proteção além do campo em branco.

O Raio-X do site confere tudo isso e devolve a lista do que está em ordem e do que não está.
