/**
 * Texto da página de sistemas (conteudo.md, seção 3). Fatos: SERVICOS.md, seção 2, e o fluxo do
 * diagnóstico decidido com o Igor em 30/10/2026. O valor do diagnóstico está pendente.
 */
import type { Passo, Pergunta } from './inicio';

export const sistemas = {
  titulo: 'Sistemas sob medida e automação de processos',
  frase: 'Do Excel, do Trello e do ERP para um sistema só.',
  texto:
    'Um sistema único que substitui planilhas, quadros e ferramentas soltas, feito do jeito que a sua empresa trabalha, com os processos manuais rodando sozinhos.',
  acao: 'Quero automatizar minha empresa',

  problema: {
    titulo: 'A empresa funciona, mas espalhada',
    itens: [
      'Pedidos e clientes controlados no Excel',
      'Tarefas e etapas da equipe no Trello',
      'Financeiro e notas no ERP',
      'Conversas com clientes no WhatsApp',
    ],
    texto:
      'Resultado: alguém passa horas copiando dados entre sistemas, informações se perdem, clientes ficam sem retorno e você não enxerga o negócio como um todo.',
  },

  solucao: {
    titulo: 'Um sistema só',
    texto: 'A gente mapeia todo o fluxo da empresa e cria um sistema único, sob medida, que:',
    itens: [
      { titulo: 'Centraliza', texto: 'Cliente, pedido, tarefa e financeiro no mesmo lugar.' },
      { titulo: 'Automatiza', texto: 'O que era manual passa a acontecer sozinho.' },
      {
        titulo: 'Integra',
        texto: 'Conecta o que precisa continuar existindo, como o ERP, o WhatsApp e o e-mail.',
      },
      { titulo: 'Mostra', texto: 'Painéis com os números do negócio, atualizados.' },
    ] satisfies Passo[],
  },

  antesDepois: {
    titulo: 'Antes e depois',
    colunas: { antes: 'Antes, manual', depois: 'Depois, automático' },
    linhas: [
      {
        antes: 'Copiar o pedido do WhatsApp para a planilha',
        depois: 'O pedido entra direto no sistema',
      },
      {
        antes: 'Mover o card no Trello e avisar o cliente',
        depois: 'A etapa muda e o cliente recebe a mensagem',
      },
      {
        antes: 'Lembrar de cobrar quem está atrasado',
        depois: 'Os lembretes de cobrança saem sozinhos',
      },
      { antes: 'Montar o relatório do mês', depois: 'O painel já mostra os números' },
      {
        antes: 'Esquecer de falar com o cliente depois da venda',
        depois: 'Follow-up programado para manter o cliente',
      },
    ],
  },

  beneficios: {
    titulo: 'O que muda na prática',
    itens: [
      { titulo: 'Tempo', texto: 'A equipe deixa de fazer trabalho repetitivo.' },
      { titulo: 'Menos erros', texto: 'Um dado, uma fonte, sem copia e cola.' },
      {
        titulo: 'Clientes que ficam',
        texto: 'Retorno no prazo, pós-venda e lembretes automáticos.',
      },
      { titulo: 'Controle', texto: 'Visão clara de pedidos, prazos e financeiro.' },
      { titulo: 'Escala', texto: 'Atender mais sem aumentar a equipe na mesma proporção.' },
    ] satisfies Passo[],
  },

  comoFunciona: {
    titulo: 'Como funciona, do primeiro contato ao sistema rodando',
    texto:
      'Antes de qualquer proposta, a gente vai até a sua empresa, ou faz online, e entende como o trabalho acontece de verdade.',
    passos: [
      {
        titulo: 'Mensagem no WhatsApp',
        texto:
          'Você responde três perguntas: quantas pessoas trabalham na empresa, quais ferramentas e planilhas vocês usam hoje e onde o tempo mais se perde.',
      },
      {
        titulo: 'Conversa de 30 minutos, grátis',
        texto: 'Online. A gente entende o cenário e vê se faz sentido seguir.',
      },
      {
        titulo: 'Diagnóstico na sua empresa',
        texto:
          'Presencial ou online. A gente senta com quem faz o trabalho, mapeia ferramentas, planilhas, pessoas e etapas, e entende como a informação anda hoje. O diagnóstico é pago, e o valor é abatido do projeto se você fechar. [PENDENTE: valor do diagnóstico]',
      },
      {
        titulo: 'O que você recebe',
        texto:
          'Um documento com o mapa do processo atual, o processo ideal e as automações possíveis, com os ganhos esperados.',
      },
      {
        titulo: 'Proposta',
        texto: 'O que será unificado, o que será automatizado, prazo e investimento.',
      },
      {
        titulo: 'Desenvolvimento em etapas',
        texto: 'Entregas parciais para a equipe já usar e dar retorno.',
      },
      {
        titulo: 'Migração',
        texto: 'Os dados das planilhas e das ferramentas antigas são levados para o sistema.',
      },
      { titulo: 'Treinamento', texto: 'A equipe aprende a usar.' },
      {
        titulo: 'Evolução',
        texto: 'Novos processos e melhorias conforme a empresa cresce.',
      },
    ] satisfies Passo[],
  },

  prova: {
    titulo: 'Um sistema que a Infinium construiu',
    texto:
      'O RetroDash é um produto nosso, em produção: salas em tempo real, votos, itens de ação e dados protegidos. Ele mostra como a gente constrói sistemas. Quando houver um case de automação de cliente, ele aparece aqui.',
  },

  faq: {
    titulo: 'Perguntas frequentes',
    itens: [
      {
        pergunta: 'Vou ter que trocar o ERP?',
        resposta:
          'Não. O que precisa continuar existindo a gente integra ao sistema, como o ERP, o WhatsApp e o e-mail.',
      },
      {
        pergunta: 'A equipe vai saber usar?',
        resposta:
          'O sistema é feito para o jeito que a sua equipe já trabalha, as entregas são em etapas para o pessoal ir usando, e tem treinamento no fim.',
      },
      {
        pergunta: 'E se o processo da empresa mudar?',
        resposta:
          'O sistema evolui junto. Novos processos e melhorias entram conforme a empresa cresce.',
      },
      {
        pergunta: 'Quanto custa?',
        resposta:
          'Depende do que será unificado e automatizado. Isso sai do diagnóstico, e a proposta vem por escrito, com prazo e investimento.',
      },
    ] satisfies Pergunta[],
  },

  chamada: {
    titulo: 'Quer parar de copiar planilha?',
    texto: 'Manda as três respostas pelo WhatsApp e a gente marca a conversa.',
    acao: 'Quero automatizar minha empresa',
    formulario: 'Ou pedir um orçamento pelo formulário',
  },
} as const;
