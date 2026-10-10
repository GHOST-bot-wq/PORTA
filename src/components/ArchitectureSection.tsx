import React from 'react';
import { SITE_CONFIG, getWhatsAppLink } from '../config/site';
import { Globe, FileText, Briefcase, LayoutGrid, MessageSquare, ArrowRight, Layers } from 'lucide-react';

export const ArchitectureSection: React.FC = () => {
  const serviceIcons = [Globe, FileText, Briefcase, LayoutGrid, MessageSquare];
  const borderColors = [
    "border-blue-500/30",
    "border-indigo-500/30",
    "border-purple-500/30",
    "border-cyan-500/30",
    "border-emerald-500/30"
  ];

  return (
    <section id="servicos" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background ambient bloom */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-indigo-900/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill text-xs font-semibold text-blue-300 mb-4 border border-blue-500/30">
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
            <span>Formatos & Soluções</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
            Um site pensado para o momento e os objetivos da sua empresa
          </h2>
          <p className="text-zinc-300 text-sm sm:text-base md:text-lg font-normal leading-relaxed">
            Cada negócio tem uma necessidade diferente. Por isso, a solução deve fazer sentido para o que você oferece e para o tipo de cliente que deseja alcançar.
          </p>
        </div>

        {/* 5 Services Cards Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {SITE_CONFIG.services.map((service, index) => {
            const Icon = serviceIcons[index % serviceIcons.length];
            const borderCol = borderColors[index % borderColors.length];
            return (
              <div
                key={service.title}
                className={`p-6 sm:p-7 rounded-3xl glass-panel ${borderCol} hover:border-white/40 transition-all duration-300 flex flex-col justify-between group overflow-hidden relative ${
                  index === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 group-hover:scale-110 group-hover:text-cyan-300 transition-all mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-blue-300 transition-colors mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-4">
                    {service.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 space-y-1">
                  <span className="text-[11px] font-mono text-zinc-500 block uppercase">Público-alvo</span>
                  <p className="text-xs font-medium text-cyan-300/90 leading-snug">
                    {service.target}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Fechamento e CTA */}
        <div className="max-w-3xl mx-auto text-center p-8 rounded-3xl glass-panel-elevated border border-white/10 shadow-[0_15px_40px_rgba(0,0,0,0.7)]">
          <p className="text-sm sm:text-base text-zinc-300 mb-6 leading-relaxed">
            Não sabe qual modelo é melhor para seu negócio? Converse conosco. Vamos entender sua necessidade antes de definir a solução.
          </p>
          <a
            href={getWhatsAppLink(SITE_CONFIG.whatsapp.servicesMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 hover:from-blue-500 hover:to-indigo-500 shadow-[0_0_30px_rgba(59,130,246,0.6)] transition group"
          >
            <span>Encontrar a melhor solução para minha empresa</span>
            <ArrowRight className="w-4 h-4 text-cyan-300 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};
