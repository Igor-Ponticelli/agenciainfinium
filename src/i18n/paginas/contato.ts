/** Texto da página de contato (conteudo.md, seção 10): canais e o formulário de orçamento. */

export const contato = {
  titulo: 'Contato',
  texto: 'O jeito mais rápido é o WhatsApp. Se preferir, manda um e-mail ou preenche o formulário.',

  canais: {
    whatsapp: { rotulo: 'WhatsApp', texto: 'Resposta mais rápida, em horário comercial.' },
    email: { rotulo: 'E-mail', texto: 'Para propostas, arquivos e conversas mais longas.' },
    instagram: { rotulo: 'Instagram', texto: 'Projetos, bastidores e novidades.' },
  },

  formulario: {
    titulo: 'Pedir um orçamento',
    texto: 'Preenche e escolhe por onde enviar. A mensagem chega do mesmo jeito.',
    campos: {
      nome: 'Seu nome',
      empresa: 'Empresa',
      contato: 'Seu WhatsApp ou e-mail',
      precisa: 'O que você precisa',
      mensagem: 'Conta um pouco do que a empresa faz e o que atrapalha hoje',
    },
    opcoes: [
      { valor: 'site', rotulo: 'Um site' },
      { valor: 'sistema', rotulo: 'Um sistema' },
      { valor: 'os-dois', rotulo: 'Os dois' },
      { valor: 'nao-sei', rotulo: 'Ainda não sei' },
    ],
    enviarWhatsapp: 'Enviar pelo WhatsApp',
    enviarEmail: 'Enviar por e-mail',
    privacidade: 'Seus dados são usados só para responder a este contato.',
    linkPrivacidade: 'Política de privacidade',
    sucesso: 'Mensagem enviada. A gente responde pelo contato que você informou.',
    erro: 'Não deu para enviar agora. Tenta pelo WhatsApp.',
    /** Assunto do e-mail e primeira linha da mensagem do WhatsApp. */
    assunto: 'Pedido de orçamento pelo site',
  },
} as const;
