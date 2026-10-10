/**
 * CODELABX — CONFIGURAÇÃO CENTRALIZADA
 * 
 * 🔴 CONFIGURAÇÃO DO WHATSAPP:
 * Altere apenas o valor da constante 'number' para o número comercial da agência com DDI e DDD (ex: "5511999999999").
 */

export const SITE_CONFIG = {
  name: "CodeLabx",
  tagline: "Sites profissionais sob medida para empresas e prestadores de serviços",
  domain: "codelabx.com.br",
  
  // -------------------------------------------------------------
  // CONFIGURAÇÃO ÚNICA DO WHATSAPP (SUBSTITUA AQUI)
  // -------------------------------------------------------------
  whatsapp: {
    // Formato internacional: código do país (55) + DDD (ex: 11) + número (9 dígitos)
    number: "5511999999999",
    displayNumber: "+55 (11) 99999-9999",
    
    // Mensagens contextuais
    defaultMessage: "Olá! Quero criar meu site com a CodeLabx.",
    headerMessage: "Olá! Gostaria de solicitar um orçamento para o site da minha empresa.",
    opportunityMessage: "Olá! Gostaria de conversar sobre a criação de um site profissional para o meu negócio.",
    servicesMessage: "Olá! Quero entender qual a melhor solução de site para apresentar os serviços da minha empresa.",
    demoInquiryMessage: "Olá! Vi as demonstrações no site da CodeLabx e gostaria de conversar sobre um projeto semelhante para o meu negócio.",
    processMessage: "Olá! Gostaria de conversar sobre as etapas e início do desenvolvimento do meu site.",
    finalCtaMessage: "Olá! Gostaria de conversar sobre a melhor forma de apresentar meus serviços em um site profissional."
  },

  // Contato institucional
  contact: {
    email: "contato@codelabx.com.br",
    location: "Atendimento online para empresas de todo o Brasil",
    hours: "Segunda a Sexta, 09h às 18h"
  },

  // Links de navegação do menu
  navLinks: [
    { label: "Início", href: "#inicio" },
    { label: "Oportunidade", href: "#oportunidade" },
    { label: "Soluções", href: "#solucoes" },
    { label: "Projetos", href: "#demonstracoes" },
    { label: "Diferenciais", href: "#diferenciais" },
    { label: "Processo", href: "#processo" }
  ],

  // Demonstrações Conceituais (Projetos desenvolvidos para comprovar capacidade técnica e visual)
  demonstrativeClinics: [
    {
      id: "lumiere",
      name: "Lumière Estética & Bem-Estar",
      category: "Saúde & Estética",
      badge: "Projeto Conceitual • High-End",
      tagline: "Clínica de estética e cuidados corporais",
      subtitle: "Demonstração visual com foco em sofisticação sensorial, catálogo claro de procedimentos e botão de contato direto para agendamento.",
      accentColor: "#F59E0B",
      theme: "dark-gold",
      highlights: [
        "Apresentação visual elegante de serviços",
        "Detalhamento claro de procedimentos",
        "Ambiente mobile planejado para toque rápido",
        "Botão de WhatsApp com mensagem contextual"
      ],
      treatments: [
        { title: "Protocolos Faciais de Hidratação", category: "Facial", desc: "Apresentação estruturada de etapas, benefícios e recomendações ao cliente." },
        { title: "Cuidados Corporais e Relaxamento", category: "Corporal", desc: "Estrutura descritiva para orientar quem busca bem-estar e cuidados integrados." },
        { title: "Revitalização e Uniformização", category: "Facial", desc: "Espaço dedicado para esclarecer dúvidas comuns antes do contato com a recepção." },
        { title: "Terapias Manuais e Drenagem", category: "Corporal", desc: "Organização por categorias que facilita a escolha no celular sem rolagem cansativa." }
      ],
      doctor: {
        name: "Demonstração de Perfil Profissional",
        role: "Espaço para Apresentação do Especialista / Responsável",
        council: "Ex: Registro profissional, formação e área de atuação",
        bio: "Seção planejada para humanizar o negócio, apresentar as credenciais da equipe e transmitir segurança a quem acessa a página pela primeira vez."
      }
    },
    {
      id: "nexus",
      name: "Nexus Engenharia & Consultoria",
      category: "Empresas & Serviços B2B",
      badge: "Projeto Conceitual • Corporativo",
      tagline: "Consultoria e projetos técnicos de engenharia",
      subtitle: "Demonstração voltada para empresas e prestadores de serviços técnicos, destacando áreas de atuação, histórico de projetos e proposta comercial.",
      accentColor: "#38BDF8",
      theme: "dark-cyan",
      highlights: [
        "Apresentação corporativa sóbria e moderna",
        "Divisão clara de consultorias e laudos",
        "Formato ideal para negociações comerciais",
        "Contato imediato com diretores e consultores"
      ],
      treatments: [
        { title: "Gestão e Coordenação de Obras", category: "Engenharia", desc: "Detalhamento de escopo, etapas de execução e conformidade regulatória." },
        { title: "Laudos Técnicos e Perícias", category: "Consultoria", desc: "Estrutura clara para orientar condomínios, construtoras e investidores." },
        { title: "Eficiência Energética e Sustentabilidade", category: "Sustentabilidade", desc: "Apresentação de valor econômico e redução de custos para empresas parceiras." },
        { title: "Adequação às Normas Regulamentadoras", category: "Compliance", desc: "Informações organizadas para contratações ágeis com contato imediato." }
      ],
      doctor: {
        name: "Demonstração de Equipe Corporativa",
        role: "Espaço para Sócios, Diretores ou Engenheiros Responsáveis",
        council: "Ex: CREA / Informações de registro institucional",
        bio: "Área destinada a apresentar a solidez técnica da empresa, anos de atuação no mercado e o compromisso ético com os projetos entregues."
      }
    },
    {
      id: "vertex",
      name: "Studio Vertex Arquitetura",
      category: "Negócios Locais & Profissionais",
      badge: "Projeto Conceitual • Portfólio",
      tagline: "Projetos de interiores e reformas residenciais",
      subtitle: "Demonstração visual pensada para profissionais que precisam valorizar seu portfólio visual, explicar serviços e atrair orçamentos qualificados.",
      accentColor: "#A855F7",
      theme: "dark-purple",
      highlights: [
        "Galeria visual com estética clean",
        "Explicação descomplicada do processo de projeto",
        "Destaque para antes e depois dos ambientes",
        "Canal ágil no WhatsApp para solicitação de briefing"
      ],
      treatments: [
        { title: "Design de Interiores Residencial", category: "Residencial", desc: "Apresentação do conceito de conforto, iluminação e escolha criteriosa de materiais." },
        { title: "Arquitetura Comercial e Escritórios", category: "Comercial", desc: "Soluções espaciais pensadas para identidade de marca e produtividade da equipe." },
        { title: "Consultoria Rápida de Decoração", category: "Consultoria", desc: "Serviço com escopo enxuto para quem precisa de direcionamento pontual." },
        { title: "Acompanhamento e Gestão de Reformas", category: "Gestão", desc: "Comunicação clara de prazos, orçamento de fornecedores e entrega final." }
      ],
      doctor: {
        name: "Demonstração de Titular do Studio",
        role: "Espaço para o Arquiteto ou Designer Principal",
        council: "Ex: CAU / Associação profissional",
        bio: "Seção formatada para contar a essência criativa do escritório, a abordagem personalizada de cada projeto e inspirar novos clientes."
      }
    }
  ],

  // 5 Etapas do processo de criação (ETAPA 2: Processo de criação)
  processSteps: [
    {
      number: "01",
      title: "Entendimento do negócio",
      desc: "Conversamos para entender o que sua empresa oferece, quem é o seu público e quais informações precisam ficar claras no site."
    },
    {
      number: "02",
      title: "Planejamento da estrutura",
      desc: "Organizamos a sequência ideal das seções, a disposição dos textos e os pontos de contato para garantir uma navegação fluida."
    },
    {
      number: "03",
      title: "Design e desenvolvimento",
      desc: "Criamos a identidade visual personalizada da página, adaptada ao celular e computador, com código limpo e carregamento rápido."
    },
    {
      number: "04",
      title: "Revisão e ajustes",
      desc: "Apresentamos o projeto para sua avaliação, refinando detalhes visuais, textos e links para que tudo fique exatamente como você deseja."
    },
    {
      number: "05",
      title: "Publicação",
      desc: "Conectamos seu domínio, ativamos o certificado de segurança SSL e deixamos o link do WhatsApp pronto para receber seus clientes."
    }
  ],

  // Diferenciais Reais (ETAPA 2: Diferenciais)
  differentiators: [
    {
      title: "Design personalizado",
      desc: "Criamos um layout sob medida para valorizar a proposta única da sua empresa, sem parecer uma cópia genérica."
    },
    {
      title: "Adaptação para celular, tablet e computador",
      desc: "Sua página ajusta perfeitamente tamanhos de fontes, botões e imagens para qualquer tamanho de tela."
    },
    {
      title: "Organização clara dos serviços",
      desc: "Quem acessa entende com facilidade o que você faz, sem se perder em termos técnicos ou menus confusos."
    },
    {
      title: "Facilidade de contato pelo WhatsApp",
      desc: "Botões de conversa em posições estratégicas com mensagens pré-formatadas para encurtar o caminho do cliente até você."
    },
    {
      title: "Navegação intuitiva",
      desc: "Estrutura linear e confortável, pensada para responder às principais dúvidas do visitante sem esforço."
    },
    {
      title: "Qualidade técnica e desempenho",
      desc: "Código leve, sem plugins pesados ou ferramentas lentas, proporcionando carregamento ágil e estável."
    }
  ]
};

/**
 * Função utilitária para gerar links do WhatsApp com mensagem codificada
 */
export function getWhatsAppLink(customMessage?: string): string {
  const number = SITE_CONFIG.whatsapp.number.replace(/\D/g, "");
  const message = encodeURIComponent(customMessage || SITE_CONFIG.whatsapp.defaultMessage);
  return `https://wa.me/${number}?text=${message}`;
}
