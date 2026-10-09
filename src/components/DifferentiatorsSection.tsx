import React from 'react';
import { SITE_CONFIG } from '../config/site';
import { Palette, Smartphone, MessageCircle, Zap, Search, ShieldCheck } from 'lucide-react';

export const DifferentiatorsSection: React.FC = () => {
  const icons = [Palette, Smartphone, MessageCircle, Zap, Search, ShieldCheck];

  return (
    <section id="diferenciais" className="relative py-24 md:py-32 overflow-hidden bg-space-950/50">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[350px] bg-blue-900/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-semibold text-blue-400 mb-4 border border-blue-500/30">
          <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
          <span>Por Que Escolher a CodeLabx</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
          Diferenciais que geram autoridade e vendas
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
          Cada detalhe do seu site é pensado estrategicamente para fortalecer sua reputação e facilitar o contato com novos clientes.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SITE_CONFIG.differentiators.map((diff, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div
                key={diff.title}
                className="p-6 rounded-3xl glass-panel border border-white/10 hover:border-white/25 hover:shadow-[0_15px_35px_rgba(0,0,0,0.6)] transition-all duration-300 relative group"
              >
                <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 group-hover:scale-110 group-hover:text-cyan-300 transition-all duration-300 mb-5">
                  <Icon className="w-5 h-5" />
                </div>

                <h3 className="text-base font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                  {diff.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {diff.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
