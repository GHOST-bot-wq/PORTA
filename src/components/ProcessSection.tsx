import React from 'react';
import { SITE_CONFIG, getWhatsAppLink } from '../config/site';
import { Workflow, ArrowRight } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  return (
    <section id="processo" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[350px] bg-indigo-950/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-semibold text-cyan-400 mb-4 border border-cyan-500/30">
            <Workflow className="w-3.5 h-3.5" />
            <span>Processo Transparente</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
            Da primeira conversa ao seu site publicado
          </h2>
          <p className="text-zinc-300 text-sm sm:text-base md:text-lg font-normal leading-relaxed">
            Você não precisa saber de programação, design ou tecnologia para começar. Nosso processo é conduzido por etapas claras.
          </p>
        </div>

        {/* 5 Steps Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-4 lg:gap-6 mb-16 relative">
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
                Etapa {index + 1}
              </div>
            </div>
          ))}
        </div>

        {/* Fechamento e CTA */}
        <div className="max-w-3xl mx-auto text-center p-8 rounded-3xl glass-panel-elevated border border-white/10 shadow-[0_15px_40px_rgba(0,0,0,0.7)] space-y-4">
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
            Cada projeto tem suas próprias necessidades. O prazo, os custos, os recursos incluídos e as condições de revisão devem ser definidos na proposta.
          </p>
          <p className="text-sm sm:text-base font-semibold text-white">
            O primeiro passo é uma conversa. O restante é organizado com você.
          </p>
          <div className="pt-2">
            <a
              href={getWhatsAppLink(SITE_CONFIG.whatsapp.processMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 hover:from-blue-500 hover:to-indigo-500 shadow-[0_0_30px_rgba(59,130,246,0.6)] transition group"
            >
              <span>Começar meu projeto pelo WhatsApp</span>
              <ArrowRight className="w-4 h-4 text-cyan-300 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
