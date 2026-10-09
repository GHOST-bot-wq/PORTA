import React from 'react';
import { Palette, Flame, Zap, Database, Cpu, Sparkles } from 'lucide-react';

export const ArchitectureSection: React.FC = () => {
  const nodes = [
    {
      id: "node-1",
      icon: Palette,
      title: "Identidade Visual & UI",
      desc: "Design autoral com tipografia refinada e acabamento de alto padrão.",
      color: "from-blue-500/20 to-cyan-500/10",
      borderColor: "border-blue-500/30"
    },
    {
      id: "node-2",
      icon: Flame,
      title: "Engenharia de Conversão",
      desc: "Roteamento inteligente para o WhatsApp com mensagens contextualizadas.",
      color: "from-indigo-500/20 to-purple-500/10",
      borderColor: "border-indigo-500/30"
    },
    {
      id: "node-3",
      icon: Zap,
      title: "Velocidade Extrema & SEO",
      desc: "Carregamento sub-segundo e metatags estruturadas para o Google.",
      color: "from-purple-500/20 to-pink-500/10",
      borderColor: "border-purple-500/30"
    },
    {
      id: "node-4",
      icon: Database,
      title: "Arquitetura Escalável",
      desc: "Código limpo em React/TypeScript sem plugins pesados ou lentos.",
      color: "from-cyan-500/20 to-blue-500/10",
      borderColor: "border-cyan-500/30"
    }
  ];

  return (
    <section id="solucoes" className="relative py-24 md:py-32 overflow-hidden bg-space-950/60">
      {/* Ambient background bloom */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-indigo-900/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill text-xs font-semibold text-blue-400 mb-4 border border-blue-500/30">
          <Cpu className="w-3.5 h-3.5 text-cyan-400" />
          <span>Ecossistema Digital Completo</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
          Estrutura Técnica & Plataforma Unificada
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
          Do primeiro impacto visual ao clique no botão de WhatsApp: cada módulo é desenhado para operar com harmonia e gerar resultados tangíveis.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column / 4 Connected System Nodes (Matching video 4.0s - 6.0s) */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {nodes.map((node, index) => {
              const Icon = node.icon;
              return (
                <div
                  key={node.id}
                  className={`p-4 sm:p-5 rounded-2xl glass-panel ${node.borderColor} hover:border-white/40 transition-all duration-300 relative group overflow-hidden flex items-center justify-between gap-4`}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-blue-300 transition-colors">
                        {node.title}
                      </h3>
                      <p className="text-xs text-zinc-400 mt-0.5 max-w-md">
                        {node.desc}
                      </p>
                    </div>
                  </div>

                  {/* Luminous Connector Node dot on the right side */}
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="hidden sm:inline-block text-[11px] font-mono text-zinc-500">Módulo 0{index + 1}</span>
                    <div className="w-3 h-3 rounded-full bg-blue-500/30 border border-blue-400/60 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column / Central Glowing Core Chip [CodeLabx Core / IA] (Frames 4.0s - 6.0s) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            {/* Massive radial light glow behind the central chip */}
            <div className="absolute inset-0 bg-blue-600/25 rounded-full blur-3xl pointer-events-none animate-pulse-slow"></div>
            <div className="absolute inset-4 bg-purple-600/20 rounded-full blur-2xl pointer-events-none"></div>

            {/* Glowing SVG circuit lines leading to center chip */}
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 flex items-center justify-center">
              {/* Outer rotating decorative circuit ring */}
              <div className="absolute inset-0 rounded-full border border-blue-500/20 border-dashed animate-spin" style={{ animationDuration: '40s' }}></div>
              <div className="absolute inset-6 rounded-full border border-purple-500/20"></div>

              {/* Radiating Circuit Pins (Matching video AI chip pins) */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-1.5 h-6 bg-gradient-to-b from-cyan-400 to-transparent"></div>
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-1.5 h-6 bg-gradient-to-t from-purple-400 to-transparent"></div>
              <div className="absolute -left-3 top-1/2 -translate-y-1/2 h-1.5 w-6 bg-gradient-to-r from-blue-400 to-transparent"></div>
              <div className="absolute -right-3 top-1/2 -translate-y-1/2 h-1.5 w-6 bg-gradient-to-l from-indigo-400 to-transparent"></div>

              {/* Central Glowing Square Card (Matches the 'AI' chip in video 4.0s - 6.0s) */}
              <div className="w-44 h-44 sm:w-48 sm:h-48 rounded-3xl bg-gradient-to-br from-blue-600 via-indigo-700 to-violet-800 p-1 shadow-[0_0_50px_rgba(59,130,246,0.7)] border border-blue-300/50 flex flex-col items-center justify-center relative group hover:scale-105 transition-all duration-500">
                {/* Gloss inner shine */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-white/20 to-transparent pointer-events-none"></div>

                <div className="w-full h-full rounded-[22px] bg-[#0c1024]/90 backdrop-blur-md flex flex-col items-center justify-center p-4 text-center">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-cyan-400 to-blue-600 flex items-center justify-center shadow-[0_0_20px_rgba(34,211,238,0.6)] mb-3">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>

                  <span className="text-2xl sm:text-3xl font-black text-white tracking-wider">
                    CORE
                  </span>
                  <span className="text-[11px] font-mono text-cyan-300 uppercase tracking-widest mt-1">
                    CodeLabx Engine
                  </span>

                  <div className="mt-3 flex items-center gap-1.5 text-[10px] text-zinc-300 bg-white/10 px-2 py-0.5 rounded-full border border-white/15">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>100% Otimizado</span>
                  </div>
                </div>
              </div>
            </div>

            <p className="mt-6 text-xs text-zinc-400 font-mono text-center">
              // Integração nativa entre design de luxo e estratégia de vendas
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
