import React from 'react';
import { SITE_CONFIG, getWhatsAppLink } from '../config/site';
import { Sparkles, Shield, Compass, MessageCircle, Clock, Share2, ArrowRight } from 'lucide-react';

export const SolutionSection: React.FC = () => {
  const icons = [Shield, Compass, MessageCircle, Clock, Share2];

  return (
    <section id="solucoes" className="relative py-24 md:py-32 overflow-hidden bg-space-950/60">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-900/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill text-xs font-semibold text-blue-300 mb-4 border border-blue-500/30">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Apresentação da Solução</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
            Transforme a maneira como seus clientes conhecem sua empresa
          </h2>

          <div className="text-zinc-300 text-sm sm:text-base leading-relaxed space-y-4 font-normal">
            <p>
              A CodeLabx desenvolve sites personalizados para apresentar seu negócio de forma profissional, destacar seus serviços e facilitar o contato com quem tem interesse no que você oferece.
            </p>
            <p className="text-zinc-400">
              Não se trata apenas de colocar informações na internet. Trata-se de organizar sua apresentação para que o visitante entenda o seu trabalho, reconheça o valor da sua oferta e saiba qual é o próximo passo.
            </p>
          </div>
        </div>

        {/* 5 Benefits Grid */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {SITE_CONFIG.solutionBenefits.map((benefit, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div
                key={benefit.title}
                className={`p-6 rounded-3xl glass-panel border border-white/10 hover:border-blue-400/40 hover:shadow-[0_15px_35px_rgba(0,0,0,0.6)] transition-all duration-300 flex flex-col justify-between group ${
                  index === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:text-cyan-300 group-hover:scale-110 transition-all mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-white/5 text-[11px] font-mono text-zinc-500">
                  Benefício 0{index + 1}
                </div>
              </div>
            );
          })}
        </div>

        {/* Fechamento e CTA */}
        <div className="max-w-3xl mx-auto text-center p-8 rounded-3xl glass-panel-elevated border border-blue-500/30 shadow-[0_15px_40px_rgba(0,0,0,0.7)]">
          <p className="text-base sm:text-lg font-medium text-white mb-6">
            O objetivo é simples: fazer com que conhecer sua empresa e entrar em contato com você seja uma experiência mais fácil e profissional.
          </p>
          <a
            href={getWhatsAppLink(SITE_CONFIG.whatsapp.solutionMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 hover:from-blue-500 hover:to-indigo-500 shadow-[0_0_30px_rgba(59,130,246,0.6)] transition group"
          >
            <span>Quero um site para minha empresa</span>
            <ArrowRight className="w-4 h-4 text-cyan-300 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};
