/**
 * CODELABX — CONFIGURAÇÃO CENTRALIZADA
 * 
 * 🔴 ATENÇÃO: SUBSTITUA O NÚMERO DO WHATSAPP ABAIXO ANTES DE PUBLICAR EM PRODUÇÃO!
 * Altere apenas o valor da constante WHATSAPP_NUMBER para o número comercial da agência com DDI e DDD (ex: "5511999999999").
 */

export const SITE_CONFIG = {
  name: "CodeLabx",
  tagline: "Engenharia visual e desenvolvimento de sites de alta conversão",
  domain: "codelabx.com.br",
  
  // -------------------------------------------------------------
  // CONFIGURAÇÃO DO WHATSAPP (SUBSTITUA AQUI)
  // -------------------------------------------------------------
  whatsapp: {
    // Formato internacional: código do país (55) + DDD (ex: 11) + número (9 dígitos)
    // ⚠️ SUBSTITUA O NÚMERO ABAIXO:
    number: "5511999999999",
    displayNumber: "+55 (11) 99999-9999",
    
    // Mensagens pré-configuradas para conversão ágil
    defaultMessage: "Olá! Gostaria de solicitar um orçamento para criar o site profissional da minha empresa com a CodeLabx.",
    demoInquiryMessage: "Olá! Vi a demonstração da clínica na CodeLabx e gostaria de um site com esse mesmo nível de acabamento para o meu negócio.",
    customQuoteMessage: "Olá! Gostaria de conversar com um especialista da CodeLabx sobre um projeto de site sob medida."
  },

  // Redes e contato
  contact: {
    email: "contato@codelabx.com.br",
    location: "São Paulo, SP — Atendimento Brasil e Exterior",
    hours: "Segunda a Sexta, 09h às 19h"
  },

  // Links de navegação do menu
  navLinks: [
    { label: "Início", href: "#inicio" },
    { label: "Oportunidade", href: "#oportunidade" },
    { label: "Soluções", href: "#solucoes" },
    { label: "Capacidades", href: "#capacidades" },
    { label: "Demonstrações", href: "#demonstracoes" },
    { label: "Diferenciais", href: "#diferenciais" },
    { label: "Processo", href: "#processo" }
  ],

  // 3 Projetos Demonstrativos de Clínicas de Estética Fictícias (Requisito da Fase 3.6)
  demonstrativeClinics: [
    {
      id: "lumiere",
      name: "Lumière Estética Avançada",
      tagline: "Clínica de Estética Premium",
      badge: "High-End & Luxo",
      subtitle: "Experiência de bem-estar sofisticada, protocolos faciais e corporais exclusivos com atendimento ultra-personalizado.",
      accentColor: "#F59E0B",
      theme: "dark-gold",
      highlights: [
        "Protocolos corporais de luxo",
        "Ambiente intimista e sensorial",
        "Atendimento com concierge",
        "Tecnologias importadas não-invasivas"
      ],
      treatments: [
        { title: "Protocolo Lumière Gold", category: "Corporal", desc: "Associação de drenagem linfática francesa e radiofrequência multipolar para remodelamento e luminosidade da pele." },
        { title: "HydroFacial Radiant", category: "Facial", desc: "Limpeza profunda ultrassônica com infusão de peptídeos botânicos e ácido hialurônico de alta pureza." },
        { title: "Sculpt Body Silhouette", category: "Corporal", desc: "Terapia combinada para tonificação muscular e redução localizada sem tempo de recuperação." },
        { title: "Laser Glow Skin", category: "Facial", desc: "Revitalização e uniformização do tom da pele com efeito de porcelana e estímulo natural de elastina." }
      ],
      doctor: {
        name: "Dra. Nicole Valença",
        role: "Diretora Clínica & Biomédica Esteta",
        crbm: "CRBM 14.892",
        bio: "Mais de 11 anos dedicados ao aprimoramento da estética de luxo e bem-estar integral."
      },
      stats: {
        satisfaction: "99.4%",
        treatmentsDone: "4.800+",
        returnRate: "92%"
      }
    },
    {
      id: "aura",
      name: "Aura Derma & Laser",
      tagline: "Clínica Moderna com Foco em Tecnologias",
      badge: "Inovação Médica",
      subtitle: "Catálogo completo de procedimentos a laser, ultrassom microfocado e dermatologia estética orientada a dados.",
      accentColor: "#06B6D4",
      theme: "dark-cyan",
      highlights: [
        "Ultrassom Microfocado (Liftera / Ultraformer)",
        "Lasers fracionados de última geração",
        "Catálogo interativo com simulação",
        "Agendamento inteligente via WhatsApp"
      ],
      treatments: [
        { title: "Ultrassom Microfocado Facial", category: "Tecnologia", desc: "Efeito lifting não-cirúrgico com estímulo profundo de colágeno nas camadas musculares da face." },
        { title: "Laser Erbium Fracionado", category: "Resurfacing", desc: "Renovação celular intensa para suavização de cicatrizes de acne, textura e poros dilatados." },
        { title: "Protocolo Clareador Íntimo & Axilar", category: "Laser Q-Switched", desc: "Ação seletiva contra hiperpigmentação com resultados visíveis a partir da 2ª sessão." },
        { title: "Remoção e Clareamento Avançado", category: "Tecnologia", desc: "Tecnologia picosegundos com emissão ultrarrápida sem agressão térmica ao tecido adjacente." }
      ],
      doctor: {
        name: "Dr. Matheus Rangel",
        role: "Médico Dermatologista",
        crm: "CRM/SP 192.441 | RQE 83.109",
        bio: "Membro da Sociedade Brasileira de Dermatologia e pesquisador em tecnologias a laser."
      },
      stats: {
        satisfaction: "98.9%",
        treatmentsDone: "7.200+",
        techDevices: "14 Equipamentos"
      }
    },
    {
      id: "sculpt",
      name: "Sculpt Face Harmonização",
      tagline: "Especializada em Harmonização Facial & Botox",
      badge: "Harmonização & Naturalidade",
      subtitle: "Escultura facial anatômica, toxina botulínica preventiva e bioestimuladores de colágeno com foco absoluto em elegância natural.",
      accentColor: "#8B5CF6",
      theme: "dark-purple",
      highlights: [
        "Preenchimento labial com contorno anatômico",
        "Toxina botulínica com preservação da expressão",
        "Bioestimuladores de colágeno (Radiesse / Sculptra)",
        "Planejamento 3D facial prévio"
      ],
      treatments: [
        { title: "Full Face Harmonia Natural", category: "Planejamento 3D", desc: "Mapeamento dos vetores de sustentação facial com ácido hialurônico para rejuvenescimento sutil." },
        { title: "Toxina Botulínica Preventiva", category: "Injetáveis", desc: "Suavização das linhas de expressão na testa, glabela e periorbital mantendo a mímica natural." },
        { title: "Bioestimulador de Colágeno Facial", category: "Firmeza", desc: "Indução biológica de neocolares para combater a flacidez progressiva com durabilidade de até 2 anos." },
        { title: "Preenchimento Labial Russian Contour", category: "Lábios", desc: "Definição de arco do cupido, hidratação profunda e volumização proporcional ao rosto." }
      ],
      doctor: {
        name: "Dra. Camila Bittencourt",
        role: "Cirurgiã-Dentista & Especialista em HOF",
        cro: "CRO/SP 115.342",
        bio: "Especialista em Harmonização Orofacial com certificações em Harvard e Viena."
      },
      stats: {
        satisfaction: "99.8%",
        treatmentsDone: "3.600+",
        naturalLookGuarantee: "100%"
      }
    }
  ],

  // 5 Etapas do processo de criação (Fase 3.8)
  processSteps: [
    {
      number: "01",
      title: "Entendimento do Negócio",
      desc: "Mergulho profundo no seu nicho, seu público de alto valor, diferenciais competitivos e objetivos comerciais."
    },
    {
      number: "02",
      title: "Planejamento da Estrutura",
      desc: "Definição do fluxo de navegação, arquitetura da informação, pontos de contato estratégicos e hierarquia editorial."
    },
    {
      number: "03",
      title: "Design & Desenvolvimento",
      desc: "Criação visual exclusiva com motion design, tipografia refinada, código limpo e carregamento instantâneo."
    },
    {
      number: "04",
      title: "Revisão & Ajustes",
      desc: "Alinhamento iterativo com você para validar cada detalhe visual, textos, responsividade em múltiplos aparelhos e botões."
    },
    {
      number: "05",
      title: "Publicação & Entrega",
      desc: "Configuração de domínio, SSL, CDN global, SEO básico estruturado e integração perfeita com o seu WhatsApp."
    }
  ],

  // Diferenciais CodeLabx (Fase 3.7)
  differentiators: [
    {
      title: "Design Personalizado & Exclusivo",
      desc: "Nada de templates pré-fabricados ou páginas idênticas aos concorrentes. Cada pixel é desenhado sob medida."
    },
    {
      title: "100% Responsivo & Mobile First",
      desc: "Mais de 80% do seu público virá pelo celular. Adaptamos intencionalmente cada espaçamento e tipografia."
    },
    {
      title: "Engenharia Focada em WhatsApp",
      desc: "Botões de conversão posicionados estrategicamente com mensagens pré-formatadas para encurtar o ciclo de venda."
    },
    {
      title: "Carregamento Instantâneo (< 1s)",
      desc: "Desenvolvido com tecnologia moderna sem a lentidão de construtores pesados. Nota máxima em velocidade."
    },
    {
      title: "Estrutura Pronta para SEO",
      desc: "HTML semântico, metatags Open Graph, sitemap e indexação correta para o Google encontrar seus serviços."
    },
    {
      title: "Autoridade Visual Imediata",
      desc: "Um design que justifica valores premium e transmite a solidez que pacientes e clientes exigentes procuram."
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
