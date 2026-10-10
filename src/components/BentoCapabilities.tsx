import React from 'react';
import { SITE_CONFIG } from '../config/site';
import { Sparkles, Smartphone, Palette, ListOrdered, MessageCircle, Zap, Search } from 'lucide-react';

export const BentoCapabilities: React.FC = () => {
  const blockIcons = [Palette, Smartphone, ListOrdered, MessageCircle, Zap, Search];

  return (
    <section id="experiencia" className="relative py-24 md:py-32 overflow-hidden bg-space-950/60">
      {/* Background ambient light */}
      <div className="absolute top-1/3 left-1/3 w-[600px] h-[350px] bg-blue-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-semibold text-cyan-400 mb-4 border border-cyan-500/30">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Benefícios & Experiência</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
          Muito além de um layout bonito
        </h2>
        <p className="text-zinc-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto font-normal leading-relaxed">
          Um site precisa fazer mais do que impressionar nos primeiros segundos. Ele precisa funcionar para quem acessa, apresentar as informações certas e deixar claro como avançar.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 6 Blocks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {SITE_CONFIG.experienceBlocks.map((block, index) => {
            const Icon = blockIcons[index % blockIcons.length];
            return (
              <div
                key={block.title}
                className="p-6 sm:p-7 rounded-3xl glass-panel-elevated border border-white/10 hover:border-blue-400/40 hover:shadow-[0_15px_35px_rgba(0,0,0,0.6)] transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:text-cyan-300 transition-all mb-5">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-blue-300 transition-colors mb-2.5">
                    {block.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {block.desc}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                  <span>Pilar 0{index + 1}</span>
                  <span className="text-cyan-400/80">CodeLabx</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Fechamento */}
        <div className="max-w-2xl mx-auto text-center p-6 rounded-2xl glass-panel border border-white/10 text-sm sm:text-base text-zinc-300 font-medium">
          ✨ Cada detalhe deve ter uma função: apresentar melhor sua empresa, esclarecer dúvidas ou facilitar o contato.
        </div>
      </div>
    </section>
  );
};
