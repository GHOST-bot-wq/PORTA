import React from 'react';
import { SITE_CONFIG, getWhatsAppLink } from '../config/site';
import { Palette, Eye, HeartHandshake, MessageCircle, Cpu, ShieldCheck, ArrowRight } from 'lucide-react';

export const DifferentiatorsSection: React.FC = () => {
  const icons = [Palette, Eye, HeartHandshake, MessageCircle, Cpu];

  return (
    <section id="diferenciais" className="relative py-24 md:py-32 overflow-hidden bg-space-950/50">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[350px] bg-blue-900/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-semibold text-blue-300 mb-4 border border-blue-500/30">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
            <span>Nossos Diferenciais</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
            Seu negócio não precisa de qualquer site. Precisa de um site que faça sentido para ele.
          </h2>
          <p className="text-zinc-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto font-normal leading-relaxed">
            Na CodeLabx, cada projeto começa pela compreensão do que sua empresa oferece e de como deseja se apresentar ao mercado.
          </p>
        </div>

        {/* 5 Differentiators Cards Grid */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {SITE_CONFIG.differentiators.map((diff, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div
                key={diff.title}
                className={`p-6 sm:p-7 rounded-3xl glass-panel border border-white/10 hover:border-white/25 hover:shadow-[0_15px_35px_rgba(0,0,0,0.6)] transition-all duration-300 relative group flex flex-col justify-between ${
                  index === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div>
                  <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 group-hover:scale-110 group-hover:text-cyan-300 transition-all duration-300 mb-5">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white mb-2.5 group-hover:text-blue-300 transition-colors">
                    {diff.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {diff.desc}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-white/5 text-[11px] font-mono text-zinc-500">
                  Diferencial 0{index + 1}
                </div>
              </div>
            );
          })}
        </div>

        {/* Fechamento e CTA */}
        <div className="max-w-3xl mx-auto text-center p-8 rounded-3xl glass-panel-elevated border border-blue-500/30 shadow-[0_15px_40px_rgba(0,0,0,0.7)]">
          <p className="text-sm sm:text-base text-zinc-300 mb-6 leading-relaxed">
            Nosso compromisso é desenvolver uma apresentação digital profissional, personalizada e alinhada aos objetivos que definirmos para o seu projeto.
          </p>
          <a
            href={getWhatsAppLink(SITE_CONFIG.whatsapp.differentiatorsMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 hover:from-blue-500 hover:to-indigo-500 shadow-[0_0_30px_rgba(59,130,246,0.6)] transition group"
          >
            <span>Conversar com a CodeLabx</span>
            <ArrowRight className="w-4 h-4 text-cyan-300 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};
