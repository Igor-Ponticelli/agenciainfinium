---
titulo: RetroDash
slug: retrodash
tipo: produto
ano: 2026
status: em-producao
url: https://retrodash.com.br
resumo: SaaS de retrospectivas ágeis em tempo real, com salas privadas, votos e itens de ação.
ordem: 4
revisadoEm: 2026-10-15
atualizadoEm: 2026-10-15
---

## O problema

Toda equipe que trabalha em ciclos precisa parar de tempos em tempos para olhar o que deu certo, o que precisa melhorar e o que vai mudar. Em reunião, isso vira post-it na parede ou documento que ninguém abre de novo.

## Para quem é

Times que fazem retrospectivas. O RetroDash é um produto da Infinium, em produção, gratuito e sem cartão.

## O que ele faz

- Salas públicas ou privadas, com senha.
- Quadro em tempo real: cards, votos e status aparecem para todo mundo na sala, sem recarregar.
- Modo anônimo, que esconde quem escreveu cada card, inclusive no placar.
- Itens de ação com três estados (Pendente, Concluído e Manter), que podem ir para a próxima sala.
- Pódio com ouro, prata e bronze: 1 ponto por card e 0,5 por item de ação.
- "Melhorar com IA", que reescreve um card ou um item de ação de até 500 caracteres.
- Interface em português e em inglês.

## Decisões de engenharia, em linguagem de cliente

- Tudo que acontece na sala chega a todo mundo na hora, sem apertar "atualizar".
- Cada organização tem as suas salas e os seus convites, com papéis diferentes para cada pessoa, e as regras são conferidas no servidor, não só na tela.
- A senha das salas privadas é guardada de forma que ninguém consegue lê-la, nem a Infinium.
- A inteligência artificial roda do lado do servidor, então a chave de acesso nunca vai para o navegador de quem usa.
- Tem tema claro, escuro e o do sistema, e um conjunto próprio de componentes que mantém a interface coerente.
- Testes automáticos e publicação automática a cada versão, para uma mudança não quebrar o que já funcionava.
