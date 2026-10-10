/**
 * CODELABX — CONFIGURAÇÃO CENTRALIZADA
 * 
 * 🔴 CONFIGURAÇÃO DO WHATSAPP:
 * Altere apenas o valor da constante 'number' para o número comercial da agência com DDI e DDD (ex: "5511999999999").
 */

export const SITE_CONFIG = {
  name: "CodeLabx",
  title: "CodeLabx | Criação de Sites Profissionais para Empresas",
  description: "Criação de sites personalizados para empresas e prestadores de serviços. Apresente seu negócio profissionalmente e facilite o contato com seus clientes pelo WhatsApp.",
  tagline: "Criação de sites profissionais sob medida para empresas e prestadores de serviços",
  domain: "codelabx.com.br",
  
  // -------------------------------------------------------------
  // CONFIGURAÇÃO DO WHATSAPP
  // -------------------------------------------------------------
  whatsapp: {
    number: "5562991747342",
    displayNumber: "+55 (62) 99174-7342",
    
    // Mensagens contextuais com base na copy
    defaultMessage: "Olá! Conheci a CodeLabx pelo site e gostaria de conversar sobre a criação de um site para minha empresa.",
    headerMessage: "Olá! Conheci a CodeLabx pelo site e gostaria de conversar sobre a criação de um site para minha empresa.",
    heroMessage: "Olá! Conheci a CodeLabx pelo site e gostaria de conversar sobre a criação de um site para minha empresa.",
    painMessage: "Olá! Gostaria de melhorar a presença digital da minha empresa com a CodeLabx.",
    solutionMessage: "Olá! Quero um site para minha empresa e gostaria de entender como a CodeLabx pode me ajudar.",
    servicesMessage: "Olá! Gostaria de conversar com a CodeLabx para encontrar a melhor solução de site para minha empresa.",
    portfolioMessage: "Olá! Vi uma das demonstrações da CodeLabx e gostaria de saber como criar um projeto personalizado para minha empresa.",
    differentiatorsMessage: "Olá! Gostaria de conversar com a CodeLabx sobre a criação de um site para minha empresa.",
    processMessage: "Olá! Gostaria de começar meu projeto de site com a CodeLabx pelo WhatsApp.",
    faqMessage: "Olá! Gostaria de tirar algumas dúvidas sobre a criação de um site para minha empresa.",
    finalCtaMessage: "Olá! Quero conversar sobre a criação de um site profissional para minha empresa."
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
    { label: "Dores", href: "#dores" },
    { label: "Soluções", href: "#solucoes" },
    { label: "Serviços", href: "#servicos" },
    { label: "Projetos", href: "#projetos" },
    { label: "Diferenciais", href: "#diferenciais" },
    { label: "Processo", href: "#processo" },
    { label: "Dúvidas", href: "#duvidas" }
  ],

  // SEÇÃO 2 — Dores identificadas
  pains: [
    {
      title: "Seu negócio não transmite todo o valor que entrega",
      desc: "Você investe tempo, conhecimento e esforço para oferecer um bom serviço. Uma apresentação digital improvisada pode não comunicar toda essa qualidade."
    },
    {
      title: "Seus serviços não estão organizados em um só lugar",
      desc: "Informações espalhadas entre publicações, destaques e mensagens dificultam a compreensão do que você oferece, para quem trabalha e como contratar."
    },
    {
      title: "O cliente precisa fazer esforço para falar com você",
      desc: "Quando o interessado não encontra rapidamente os serviços, as informações importantes ou o botão de contato, o caminho até uma conversa comercial fica mais complicado."
    },
    {
      title: "Sua empresa depende demais das redes sociais",
      desc: "As redes sociais são importantes, mas nem sempre são suficientes para apresentar todos os detalhes do negócio de forma organizada. Um site próprio acrescenta um espaço digital que você pode estruturar de acordo com seus objetivos."
    }
  ],

  // SEÇÃO 3 — Benefícios da Solução
  solutionBenefits: [
    {
      title: "Transmitir mais profissionalismo",
      desc: "Apresente sua marca com um visual coerente com a qualidade do seu trabalho."
    },
    {
      title: "Explicar seus serviços com clareza",
      desc: "Reúna informações importantes em uma estrutura fácil de navegar."
    },
    {
      title: "Facilitar o contato comercial",
      desc: "Permita que o visitante inicie uma conversa pelo WhatsApp sem precisar procurar seus dados."
    },
    {
      title: "Apresentar seu negócio a qualquer hora",
      desc: "Deixe suas principais informações disponíveis mesmo quando você não estiver respondendo mensagens."
    },
    {
      title: "Fortalecer sua presença digital",
      desc: "Tenha um espaço próprio para compartilhar em anúncios, redes sociais, cartões digitais e contatos comerciais."
    }
  ],

  // SEÇÃO 4 — Serviços
  services: [
    {
      title: "Sites institucionais",
      desc: "Apresente sua empresa, sua história, seus serviços e seus diferenciais em um espaço profissional que reúna as informações essenciais do seu negócio.",
      target: "Ideal para empresas que precisam fortalecer sua apresentação e centralizar suas informações."
    },
    {
      title: "Landing pages",
      desc: "Uma página objetiva, construída em torno de uma oferta, serviço ou campanha específica, com conteúdo direcionado para uma ação principal.",
      target: "Ideal para empresas que divulgam serviços, fazem campanhas ou desejam apresentar uma oferta específica."
    },
    {
      title: "Sites para prestadores de serviços",
      desc: "Explique como você trabalha, quais serviços oferece e como o cliente pode solicitar informações ou um orçamento.",
      target: "Ideal para consultores, profissionais independentes, empresas locais e prestadores de serviços especializados."
    },
    {
      title: "Portfólios e apresentação de projetos",
      desc: "Mostre trabalhos, produtos, projetos e exemplos visuais de maneira organizada para que o visitante compreenda melhor o que sua empresa entrega.",
      target: "Ideal para arquitetos, designers, empresas de engenharia, profissionais criativos e negócios que dependem de apresentação visual."
    },
    {
      title: "Integração com WhatsApp",
      desc: "Inclua pontos de contato visíveis e links que direcionem o visitante para uma conversa comercial, com mensagens iniciais que podem ser adaptadas ao contexto.",
      target: "Ideal para empresas que preferem atender, esclarecer dúvidas e negociar diretamente pelo WhatsApp."
    }
  ],

  // SEÇÃO 5 — Benefícios e Experiência
  experienceBlocks: [
    {
      title: "Uma apresentação alinhada à sua marca",
      desc: "Visual personalizado, hierarquia de informações e identidade coerente com a proposta da sua empresa. Seu site deve representar o seu negócio, e não parecer apenas mais um modelo genérico."
    },
    {
      title: "Experiência pensada para o celular",
      desc: "Seu visitante deve conseguir ler, navegar e encontrar os botões com facilidade em diferentes tamanhos de tela."
    },
    {
      title: "Serviços apresentados sem confusão",
      desc: "Organizamos o conteúdo para que o cliente compreenda o que sua empresa faz, conheça suas soluções e encontre as informações de que precisa."
    },
    {
      title: "Caminho direto até o WhatsApp",
      desc: "Posicionamos chamadas para ação nos pontos adequados da página para facilitar o início de uma conversa comercial."
    },
    {
      title: "Atenção ao desempenho e à estrutura técnica",
      desc: "Boas práticas de desenvolvimento, otimização de imagens e organização do código ajudam a proporcionar uma experiência mais fluida. O desempenho final depende também da hospedagem, do conteúdo e de outros fatores técnicos."
    },
    {
      title: "Estrutura preparada para mecanismos de busca",
      desc: "Configuramos elementos básicos de SEO para ajudar os mecanismos de busca a compreender o conteúdo. A indexação e as posições alcançadas dependem de diversos fatores e não podem ser garantidas."
    }
  ],

  // SEÇÃO 6 — Demonstrações Conceituais (Preservando nomes, estruturas e transparência)
  demonstrativeClinics: [
    {
      id: "lumiere",
      name: "Lumière Estética & Bem-Estar",
      category: "Demonstração para serviços e atendimento",
      badge: "Demonstração Conceitual",
      tagline: "Serviços e atendimento",
      subtitle: "Uma apresentação organizada para explicar soluções, destacar benefícios e facilitar o contato comercial.",
      accentColor: "#F59E0B",
      theme: "dark-gold",
      highlights: [
        "Apresentação organizada para explicar soluções",
        "Destaque claro de benefícios para os clientes",
        "Navegação intuitiva em dispositivos móveis",
        "Ponto de contato direto no WhatsApp"
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
      category: "Demonstração para empresas e B2B",
      badge: "Demonstração Conceitual",
      tagline: "Empresas e B2B",
      subtitle: "Uma estrutura voltada à apresentação institucional, às áreas de atuação e aos serviços oferecidos a outras empresas.",
      accentColor: "#38BDF8",
      theme: "dark-cyan",
      highlights: [
        "Apresentação institucional sóbria e moderna",
        "Divisão clara de áreas de atuação e serviços",
        "Formato ideal para negociações corporativas",
        "Contato ágil com consultores e diretores"
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
      category: "Demonstração para portfólios e negócios visuais",
      badge: "Demonstração Conceitual",
      tagline: "Portfólios e negócios visuais",
      subtitle: "Uma experiência que valoriza imagens, projetos e exemplos do trabalho realizado.",
      accentColor: "#A855F7",
      theme: "dark-purple",
      highlights: [
        "Galeria visual com estética clean",
        "Apresentação organizada de trabalhos e projetos",
        "Destaque para imagens e soluções espaciais",
        "Canal ágil no WhatsApp para solicitação de proposta"
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

  // SEÇÃO 7 — Diferenciais
  differentiators: [
    {
      title: "Personalização de verdade",
      desc: "A estrutura e o visual são definidos de acordo com o seu negócio, seus serviços e a experiência que deseja proporcionar aos visitantes."
    },
    {
      title: "Clareza em cada etapa",
      desc: "Você entende o que está sendo desenvolvido, pode avaliar a apresentação e solicitar os ajustes previstos no projeto."
    },
    {
      title: "Foco na experiência do cliente",
      desc: "Pensamos na jornada de quem acessa o site: entender a oferta, encontrar informações e saber como entrar em contato."
    },
    {
      title: "Comunicação direta",
      desc: "Você pode conversar conosco pelo WhatsApp para explicar sua necessidade, esclarecer dúvidas e discutir a proposta."
    },
    {
      title: "Desenvolvimento com propósito",
      desc: "As escolhas de design e tecnologia devem atender às necessidades do projeto, em vez de acrescentar recursos desnecessários só para parecer mais sofisticado."
    }
  ],

  // SEÇÃO 8 — 5 Etapas do processo de criação
  processSteps: [
    {
      number: "01",
      title: "Entendemos seu negócio",
      desc: "Você nos conta o que sua empresa faz, quais serviços oferece e o que deseja alcançar com o site."
    },
    {
      number: "02",
      title: "Definimos a estrutura",
      desc: "Planejamos as seções, as informações essenciais e os caminhos que o visitante poderá seguir até o contato."
    },
    {
      number: "03",
      title: "Desenvolvemos seu projeto",
      desc: "Criamos a apresentação visual e a estrutura do site de acordo com o escopo combinado."
    },
    {
      number: "04",
      title: "Você avalia e solicita ajustes",
      desc: "Apresentamos o projeto para sua revisão e realizamos os ajustes previstos no acordo, antes da publicação."
    },
    {
      number: "05",
      title: "Publicamos o site",
      desc: "Após a aprovação, concluímos as configurações previstas, como domínio e certificado de segurança, conforme o escopo contratado."
    }
  ],

  // SEÇÃO 9 — Perguntas Frequentes (FAQ)
  faqItems: [
    {
      question: "Minha empresa já tem Instagram. Preciso de um site?",
      answer: "As redes sociais ajudam a divulgar seu trabalho e manter contato com o público. O site complementa essa presença, reunindo serviços, informações e canais de contato em um espaço próprio e organizado."
    },
    {
      question: "Um site vai garantir novos clientes?",
      answer: "Nenhum site pode garantir vendas ou uma quantidade específica de clientes. Ele pode ajudar sua empresa a apresentar melhor seus serviços, transmitir profissionalismo e facilitar o contato. Os resultados também dependem da oferta, da divulgação, da concorrência e do atendimento."
    },
    {
      question: "Não entendo nada de tecnologia. Isso é um problema?",
      answer: "Não. Você pode explicar sua necessidade em linguagem simples. A estrutura e as decisões técnicas são tratadas durante o desenvolvimento, conforme o que for combinado no projeto."
    },
    {
      question: "O site será personalizado para minha empresa?",
      answer: "A proposta é desenvolver um projeto alinhado à sua marca e às suas necessidades. O nível de personalização e os recursos incluídos serão definidos no escopo antes do início do trabalho."
    },
    {
      question: "Quanto custa criar um site?",
      answer: "O investimento depende do tipo de site, da quantidade de páginas, dos recursos e do conteúdo necessário. Entre em contato para explicar o que precisa e receber uma proposta adequada ao seu projeto."
    },
    {
      question: "Quanto tempo leva para ficar pronto?",
      answer: "O prazo depende da complexidade do projeto, do escopo e do envio dos materiais necessários. O cronograma será alinhado antes do início do desenvolvimento."
    },
    {
      question: "Posso pedir alterações?",
      answer: "Sim, de acordo com as condições e a quantidade de revisões definidas na proposta. Assim, você sabe previamente como funciona a etapa de ajustes."
    },
    {
      question: "Como começo?",
      answer: "É simples: clique no botão do WhatsApp, conte um pouco sobre sua empresa e explique o que gostaria de melhorar. A conversa inicial serve para entender sua necessidade e avaliar a melhor solução."
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
