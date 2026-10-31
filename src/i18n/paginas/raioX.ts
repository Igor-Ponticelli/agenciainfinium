/**
 * Texto da landing page do Raio-X do site (conteudo.md, seção 11). Uma oferta só; dois ângulos
 * de anúncio apontam para a mesma página, e a abertura espelha o ângulo (`?angulo=google` ou
 * `?angulo=seguranca`). Sem "grátis", sem promessa de resultado, sem número inventado.
 */
import type { Passo, Pergunta } from './inicio';

export const raioX = {
  abertura: {
    /** A abertura padrão cobre os dois ângulos. */
    titulo: 'Descubra o que está travando o site da sua empresa',
    angulos: {
      google: 'Seu site não aparece no Google? Descubra o motivo',
      seguranca: 'Seu site está seguro? Descubra antes que alguém descubra por você',
    },
    texto:
      'O Raio-X do site é uma análise feita por gente, não por robô: a gente abre o site da sua empresa, confere o que trava o Google, a velocidade, a segurança e a LGPD, e devolve um relatório curto, em português, com o que fazer primeiro.',
    acao: 'Quero o Raio-X do meu site',
    apoio: 'Relatório em PDF e 30 minutos de conversa para tirar dúvidas.',
  },

  paraQuem: {
    titulo: 'Para quem é',
    itens: [
      'Para quem tem site e não sabe se ele está ajudando ou atrapalhando.',
      'Para quem procura o próprio serviço no Google e acha só o concorrente.',
      'Para quem fez o site há anos e nunca mais mexeu.',
      'Para quem vai contratar um site novo e quer saber o que precisa mudar.',
    ],
  },

  recebe: {
    titulo: 'O que você recebe',
    texto:
      'Um relatório em PDF, curto e em português, com quatro partes e uma lista do que fazer primeiro.',
    itens: [
      {
        titulo: 'Google',
        texto:
          'Se o Google conhece o site, o que o título e o texto de cada página dizem, e o que falta para aparecer na busca da sua região.',
      },
      {
        titulo: 'Velocidade',
        texto:
          'Quanto o site demora para abrir no celular, o que está pesando (imagens, scripts, hospedagem) e o que resolve mais com menos.',
      },
      {
        titulo: 'Segurança',
        texto:
          'Cadeado e HTTPS forçado, versão da plataforma e dos plugins, cabeçalhos de segurança e proteção do formulário.',
      },
      {
        titulo: 'LGPD',
        texto:
          'Política de privacidade, aviso de cookies e o que o formulário coleta. O que precisa existir e o que está faltando.',
      },
      {
        titulo: 'Conversa',
        texto:
          'Trinta minutos por vídeo ou telefone para explicar o relatório e responder o que você quiser perguntar.',
      },
    ] satisfies Passo[],
  },

  comoFunciona: {
    titulo: 'Como funciona',
    passos: [
      {
        titulo: 'Você garante o seu Raio-X',
        texto: 'Pelo botão desta página. O pagamento é feito fora do site, num link seguro.',
      },
      {
        titulo: 'Manda o endereço do site',
        texto: 'Pelo WhatsApp, junto com o que mais incomoda hoje. Só isso.',
      },
      {
        titulo: 'Recebe o relatório e a conversa',
        texto:
          'O PDF chega no seu e-mail no prazo combinado, e a gente marca a conversa para tirar dúvidas.',
      },
    ] satisfies Passo[],
  },

  preco: {
    titulo: 'Quanto custa',
    pendente: '[PENDENTE: preço e prazo do Raio-X, a decidir pelo Igor]',
    prazo: (dias: number) => `Relatório em até ${dias} dias úteis depois do envio do endereço.`,
    inclui: 'Inclui o relatório em PDF e a conversa de 30 minutos.',
    honesto:
      'O Raio-X não promete posição no Google nem conserta o site: ele mostra, com clareza, o que está acontecendo e o que fazer. Se quiser que a gente faça, aí é outra conversa.',
  },

  faq: {
    titulo: 'Perguntas frequentes',
    itens: [
      {
        pergunta: 'Vocês mexem no meu site?',
        resposta:
          'Não. A análise é só de leitura: a gente abre o site como qualquer visitante e usa as ferramentas públicas do Google. Nada é instalado, nada muda.',
      },
      {
        pergunta: 'Preciso dar senha de alguma coisa?',
        resposta:
          'Não. Só o endereço do site. Se você quiser compartilhar o acesso ao Search Console para a leitura ficar mais completa, pode, mas não é obrigatório.',
      },
      {
        pergunta: 'Serve para site feito em qualquer plataforma?',
        resposta:
          'Serve. WordPress, Wix, loja virtual, site feito por outra agência. O que muda é o que a gente encontra.',
      },
      {
        pergunta: 'E se o relatório disser que está tudo bem?',
        resposta:
          'Então você fica sabendo disso com segurança, e a conversa vira sobre o que fazer a mais.',
      },
      {
        pergunta: 'Depois do Raio-X vocês vendem alguma coisa?',
        resposta:
          'Se o relatório mostrar que vale um site novo ou um ajuste, a gente diz e manda uma proposta. Você decide. O relatório é seu de qualquer jeito.',
      },
    ] satisfies Pergunta[],
  },

  fechamento: {
    titulo: 'Saiba como está o site da sua empresa',
    texto: 'Em poucos dias você tem o relatório na mão e sabe por onde começar.',
    acao: 'Quero o Raio-X do meu site',
  },

  rodape: {
    contato: 'Dúvidas? Chama no WhatsApp',
    privacidade: 'Política de privacidade',
  },
} as const;
