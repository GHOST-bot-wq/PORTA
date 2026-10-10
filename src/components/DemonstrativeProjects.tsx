import React, { useState } from 'react';
import { SITE_CONFIG, getWhatsAppLink } from '../config/site';
import { ClinicModal } from './ClinicModal';
import { Sparkles, Eye, ArrowUpRight, ShieldCheck, CheckCircle } from 'lucide-react';

export const DemonstrativeProjects: React.FC = () => {
  const [activeModalId, setActiveModalId] = useState<string | null>(null);

  return (
    <section id="demonstracoes" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-1/3 w-[650px] h-[350px] bg-purple-900/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-semibold text-purple-300 mb-4 border border-purple-500/30">
          <Sparkles className="w-3.5 h-3.5 text-purple-400" />
          <span>Portfólio Conceitual</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
          Demonstrações conceituais de projetos
        </h2>
        <p className="text-zinc-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-6 font-normal">
          Navegue pelas demonstrações completas para avaliar o acabamento visual, a facilidade de navegação e a experiência de contato que entregamos para diferentes segmentos.
        </p>

        {/* Commercial transparency notice */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.03] border border-white/10 text-xs text-zinc-400 max-w-2xl mx-auto text-left sm:text-center">
          <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" />
          <span>
            <strong>Aviso de transparência:</strong> Os projetos abaixo são demonstrações visuais e conceituais desenvolvidas pela CodeLabx para comprovar qualidade de design e organização de conteúdo, sem representar contratos comerciais vigentes ou métricas reais de terceiros.
          </span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {SITE_CONFIG.demonstrativeClinics.map((project, index) => {
            return (
              <div
                key={project.id}
                className="rounded-3xl glass-panel-elevated border border-white/10 hover:border-white/30 transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative"
              >
                {/* Project Header Banner inside Card */}
                <div className="p-6 relative overflow-hidden bg-gradient-to-b from-white/[0.04] to-transparent">
                  {/* Subtle ambient accent glow */}
                  <div
                    className="absolute -top-12 -right-12 w-36 h-36 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition pointer-events-none"
                    style={{ backgroundColor: project.accentColor }}
                  />

                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span 
                      className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/5 border border-white/10"
                      style={{ color: project.accentColor }}
                    >
                      {project.badge}
                    </span>
                    <span className="text-[11px] font-mono text-zinc-500">
                      Demo 0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors mb-1">
                    {project.name}
                  </h3>
                  <p className="text-xs font-semibold text-zinc-400 mb-3">
                    {project.tagline}
                  </p>
                  <p className="text-xs text-zinc-400 leading-relaxed line-clamp-3">
                    {project.subtitle}
                  </p>
                </div>

                {/* Mockup Preview Area */}
                <div className="px-6 py-4">
                  <div className="rounded-2xl p-4 bg-black/60 border border-white/10 group-hover:border-white/20 transition space-y-3">
                    <div className="flex items-center justify-between text-[11px] text-zinc-400 border-b border-white/10 pb-2">
                      <span className="font-mono text-zinc-500">Segmento:</span>
                      <span className="text-white font-medium">{project.category}</span>
                    </div>

                    <div className="space-y-1.5">
                      <span className="text-[10px] uppercase font-mono text-zinc-500 tracking-wider">Características:</span>
                      {project.highlights.slice(0, 2).map((h, i) => (
                        <div key={i} className="flex items-center gap-1.5 text-xs text-zinc-300">
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span className="truncate">{h}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-2 border-t border-white/5 flex items-center justify-between text-xs">
                      <span className="text-zinc-400">Estrutura:</span>
                      <span className="text-white font-mono text-[11px]">Responsiva & WhatsApp</span>
                    </div>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="p-6 pt-2 space-y-2.5">
                  <button
                    onClick={() => setActiveModalId(project.id)}
                    className="w-full py-3 px-4 rounded-xl text-xs font-semibold text-white bg-blue-600/80 hover:bg-blue-600 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition flex items-center justify-center gap-2 group-hover:border-blue-400/40 border border-transparent"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Visualizar Demonstração Completa</span>
                  </button>

                  <a
                    href={getWhatsAppLink(`Olá! Gostaria de conversar sobre um projeto no estilo da demonstração "${project.name}".`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 rounded-xl text-xs font-medium text-zinc-300 hover:text-white glass-pill hover:bg-white/10 transition flex items-center justify-center gap-1.5"
                  >
                    <span>Conversar sobre Este Formato no WhatsApp</span>
                    <ArrowUpRight className="w-3 h-3 text-zinc-400" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive Demonstration Modal */}
      <ClinicModal
        clinicId={activeModalId}
        onClose={() => setActiveModalId(null)}
      />
    </section>
  );
};
