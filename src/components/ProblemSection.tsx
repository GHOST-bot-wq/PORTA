import React from 'react';
import { Smartphone, Clock, XCircle, Share2, ArrowRight, HelpCircle } from 'lucide-react';
import { getWhatsAppLink, SITE_CONFIG } from '../config/site';

export const ProblemSection: React.FC = () => {
  const painIcons = [XCircle, Clock, Smartphone, Share2];

  return (
    <section id="dores" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[400px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column / Editorial Headline */}
          <div className="lg:col-span-5 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-semibold mb-6">
              <HelpCircle className="w-3.5 h-3.5 text-cyan-400" />
              <span>Identificação de Gargalos Digitais</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight mb-6">
              Você faz um bom trabalho. Sua presença na internet mostra isso?
            </h2>

            <div className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-6 font-normal space-y-3">
              <p>
                Um potencial cliente pode conhecer sua empresa por uma indicação, encontrar seu perfil nas redes sociais ou pesquisar pelo serviço que você oferece.
              </p>
              <p className="text-white font-medium">
                Mas, quando ele procura mais informações, o que encontra?
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 mb-8 space-y-3">
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                Você não precisa esperar que esses problemas prejudiquem uma oportunidade para melhorar a forma como sua empresa se apresenta.
              </p>
              <p className="text-xs sm:text-sm text-cyan-300 font-medium leading-relaxed">
                Um site profissional é um passo para tornar essa apresentação mais clara, organizada e acessível.
              </p>
            </div>

            <a
              href={getWhatsAppLink(SITE_CONFIG.whatsapp.painMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-[0_0_20px_rgba(59,130,246,0.5)] transition group"
            >
              <span>Quero melhorar minha presença digital</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-cyan-300" />
            </a>
          </div>

          {/* Right Column / 4 Pain Cards */}
          <div className="lg:col-span-7 relative">
            <div className="relative space-y-4">
              {SITE_CONFIG.pains.map((pain, index) => {
                const Icon = painIcons[index % painIcons.length];
                return (
                  <div
                    key={index}
                    className="p-5 sm:p-6 rounded-2xl glass-panel border border-white/10 shadow-[0_10px_35px_rgba(0,0,0,0.4)] relative overflow-hidden group hover:border-blue-500/40 transition-all duration-300"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-3.5">
                        <div className="w-10 h-10 rounded-xl bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0 group-hover:text-cyan-300 transition-colors">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="text-base font-bold text-white mb-1.5 group-hover:text-blue-300 transition-colors">
                            {pain.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                            {pain.desc}
                          </p>
                        </div>
                      </div>
                      <span className="shrink-0 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-400 text-[11px] font-mono">
                        Ponto {index + 1}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
