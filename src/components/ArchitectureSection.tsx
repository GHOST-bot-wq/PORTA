import React from 'react';
import { Globe, FileText, Briefcase, LayoutGrid, MessageSquare, Smartphone, Search, Sparkles } from 'lucide-react';

export const ArchitectureSection: React.FC = () => {
  const solutions = [
    {
      id: "sol-1",
      icon: Globe,
      title: "Sites Institucionais",
      desc: "Apresentação completa da sua empresa, história, diferenciais e catálogo de serviços em uma estrutura elegante e profissional.",
      borderColor: "border-blue-500/30"
    },
    {
      id: "sol-2",
      icon: FileText,
      title: "Landing Pages",
      desc: "Páginas objetivas e focadas na conversão, ideais para campanhas de anúncios, lançamento de produtos ou serviços específicos.",
      borderColor: "border-indigo-500/30"
    },
    {
      id: "sol-3",
      icon: Briefcase,
      title: "Sites para Prestadores de Serviços",
      desc: "Estrutura pensada para consultores, profissionais independentes e empresas locais transmitirem autoridade e receberem novos contatos.",
      borderColor: "border-purple-500/30"
    },
    {
      id: "sol-4",
      icon: LayoutGrid,
      title: "Apresentação de Produtos e Portfólios",
      desc: "Galerias visuais organizadas para expor projetos anteriores, catálogo de produtos ou serviços com fotos de alta qualidade.",
      borderColor: "border-cyan-500/30"
    },
    {
      id: "sol-5",
      icon: MessageSquare,
      title: "Integração Direta com WhatsApp",
      desc: "Botões estrategicamente posicionados com mensagens pré-formatadas para facilitar e agilizar o contato do cliente com você.",
      borderColor: "border-emerald-500/30"
    },
    {
      id: "sol-6",
      icon: Search,
      title: "Design Responsivo & SEO Básico",
      desc: "Adaptação precisa para celulares, tablets e computadores, com estrutura semântica preparada para os mecanismos de busca do Google.",
      borderColor: "border-blue-400/30"
    }
  ];

  return (
    <section id="solucoes" className="relative py-24 md:py-32 overflow-hidden bg-space-950/60">
      {/* Ambient background bloom */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-indigo-900/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill text-xs font-semibold text-blue-300 mb-4 border border-blue-500/30">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>Serviços Oferecidos</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
          Soluções desenvolvidas para o seu negócio
        </h2>
        <p className="text-zinc-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto font-normal">
          Desenvolvemos páginas sob medida para atender exatamente à necessidade da sua empresa, da apresentação visual à facilidade de contato comercial.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((sol) => {
            const Icon = sol.icon;
            return (
              <div
                key={sol.id}
                className={`p-6 rounded-3xl glass-panel ${sol.borderColor} hover:border-white/40 transition-all duration-300 relative group overflow-hidden flex flex-col justify-between`}
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 group-hover:scale-110 group-hover:text-cyan-300 transition-all mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white group-hover:text-blue-300 transition-colors mb-2">
                    {sol.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {sol.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-white/5 flex items-center gap-2 text-[11px] text-zinc-500 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/60"></span>
                  <span>Solução CodeLabx</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
