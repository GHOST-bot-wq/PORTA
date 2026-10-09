import React from 'react';
import { SITE_CONFIG } from '../config/site';
import { Workflow, ArrowRight } from 'lucide-react';
import { getWhatsAppLink } from '../config/site';

export const ProcessSection: React.FC = () => {
  return (
    <section id="processo" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[350px] bg-indigo-950/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-semibold text-cyan-400 mb-4 border border-cyan-500/30">
          <Workflow className="w-3.5 h-3.5" />
          <span>Metodologia Transparente</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
          Como construímos o seu site passo a passo
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
          Um fluxo de trabalho organizado, sem complicações técnicas para você e focado na entrega rápida e de alto padrão.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 lg:gap-6 relative">
          {SITE_CONFIG.processSteps.map((step, index) => (
            <div
              key={step.number}
              className="p-5 sm:p-6 rounded-3xl glass-panel border border-white/10 hover:border-blue-400/40 transition-all duration-300 flex flex-col justify-between relative group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl sm:text-3xl font-mono font-extrabold text-blue-400/80 group-hover:text-cyan-300 transition-colors">
                    {step.number}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-blue-500/40 group-hover:bg-cyan-400 group-hover:shadow-[0_0_8px_#22d3ee] transition-all"></span>
                </div>

                <h3 className="text-sm sm:text-base font-bold text-white mb-2 leading-snug">
                  {step.title}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-white/5 text-[11px] font-mono text-zinc-500">
                Fase 0{index + 1}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href={getWhatsAppLink("Olá! Gostaria de entender os prazos e etapas para desenvolver o site da minha empresa.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold text-zinc-200 glass-pill hover:bg-white/10 hover:text-white transition group border border-white/15"
          >
            <span>Dúvidas sobre o processo? Fale com a equipe no WhatsApp</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};
