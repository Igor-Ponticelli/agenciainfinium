/**
 * Política de privacidade (LGPD) e os textos do banner de cookies. Descreve o que este site faz
 * de verdade: formulário pelo Web3Forms, WhatsApp, Google Analytics 4 e Meta Pixel depois do
 * consentimento, e-mail. Sem termos de uso (site institucional). Revisão jurídica: do Igor.
 */

export const privacidade = {
  titulo: 'Política de privacidade',
  texto:
    'Esta página explica, em português simples, quais dados este site coleta, para quê, por quanto tempo e como você pode pedir que sejam apagados.',
  atualizadoEm: '2026-10-31',
  rotuloAtualizado: 'Última atualização',
  secoes: [
    {
      titulo: 'Quem trata os dados',
      paragrafos: [
        'A responsável pelo tratamento é a Agência Infinium, CNPJ 49.893.185/0001-08, que mantém o site infinium.app.br. Qualquer pedido sobre dados pessoais pode ser feito pelo e-mail agenciainfinium@gmail.com.',
      ],
    },
    {
      titulo: 'O que o site coleta e por quê',
      paragrafos: [
        'Formulário de contato: nome, empresa, WhatsApp ou e-mail, o que você precisa e a mensagem. Servem só para responder ao seu contato. A mensagem é enviada pelo serviço Web3Forms e chega ao nosso e-mail; ela fica guardada na nossa caixa de e-mail enquanto a conversa durar e por até dois anos depois, para registro do atendimento.',
        'WhatsApp: ao clicar em um botão do WhatsApp, você sai do site e a conversa acontece no aplicativo, sob a política de privacidade do WhatsApp. O site não guarda o seu número.',
        'Estatísticas de uso (Google Analytics 4): quais páginas são visitadas, de onde vêm as visitas e como as pessoas usam o site, de forma agregada. Só é ativado se você aceitar, no aviso de cookies.',
        'Anúncios (Meta Pixel): permite medir se um anúncio no Instagram ou no Facebook trouxe uma visita e mostrar anúncios para quem já visitou o site. Só é ativado se você aceitar.',
        'Registros do servidor: a hospedagem guarda registros técnicos de acesso (endereço IP, página, horário) por um período curto, para segurança e funcionamento do site.',
      ],
    },
    {
      titulo: 'Cookies',
      paragrafos: [
        'O site funciona sem cookies. Os únicos cookies são os das estatísticas e dos anúncios, e eles só são criados depois que você aceita no aviso. A sua escolha fica guardada no seu navegador, para o aviso não aparecer de novo. Você pode mudar a escolha a qualquer momento pelo link "Preferências de cookies" no rodapé.',
      ],
    },
    {
      titulo: 'Com quem os dados são compartilhados',
      paragrafos: [
        'Com os serviços que fazem o site funcionar: Web3Forms (envio do formulário), Cloudflare Turnstile (proteção do formulário contra robôs), Google (Analytics) e Meta (Pixel), estes dois só com o seu consentimento, e a hospedagem do site. Não vendemos nem cedemos dados a terceiros para outros fins.',
      ],
    },
    {
      titulo: 'Seus direitos',
      paragrafos: [
        'Você pode pedir, a qualquer momento, para saber quais dados temos sobre você, corrigir, apagar ou retirar um consentimento. É só escrever para agenciainfinium@gmail.com. Respondemos no prazo da lei.',
      ],
    },
    {
      titulo: 'Segurança',
      paragrafos: [
        'O site é servido por HTTPS, com cabeçalhos de segurança, e não guarda dados pessoais em servidor próprio: o que o formulário envia vai direto para o e-mail. Mesmo assim, nenhum meio de transmissão é totalmente seguro, e você pode preferir o WhatsApp para conversas mais sensíveis.',
      ],
    },
    {
      titulo: 'Mudanças nesta política',
      paragrafos: [
        'Se o site passar a coletar algo novo, esta página muda e a data no topo também.',
      ],
    },
  ],
  banner: {
    rotulo: 'Preferências de cookies',
    texto: 'Usamos cookies para entender como o site é usado',
    politica: 'Política de privacidade',
    oQueAceita: 'O que você aceita',
    essenciais: 'Essenciais (sempre ativos)',
    estatisticas: 'Estatísticas de uso',
    recusar: 'Recusar',
    personalizar: 'Personalizar',
    salvar: 'Salvar escolhas',
    aceitar: 'Aceitar',
    reabrir: 'Preferências de cookies',
  },
} as const;
