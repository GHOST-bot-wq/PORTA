import React, { useState } from 'react';
import { SITE_CONFIG, getWhatsAppLink } from '../config/site';
import { HelpCircle, ChevronDown, MessageSquare } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="duvidas" className="relative py-24 md:py-32 overflow-hidden bg-space-950/70">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/3 w-[700px] h-[350px] bg-blue-900/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-semibold text-blue-300 mb-4 border border-blue-500/30">
            <HelpCircle className="w-3.5 h-3.5 text-cyan-400" />
            <span>Tire Suas Dúvidas</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
            Ainda tem dúvidas? Vamos esclarecer.
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base font-normal leading-relaxed">
            Respostas diretas e transparentes sobre como funciona a contratação e o desenvolvimento do seu site.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5 mb-14">
          {SITE_CONFIG.faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl glass-panel border border-white/10 hover:border-white/20 transition-all duration-200 overflow-hidden"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 group focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-white group-hover:text-blue-300 transition-colors">
                    {item.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-blue-600/30 border-blue-400/40 text-blue-300' : 'text-zinc-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 border-t border-white/5 text-xs sm:text-sm text-zinc-300 leading-relaxed animate-in fade-in duration-200">
                    <p className="pt-3">{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Fechamento */}
        <div className="max-w-2xl mx-auto text-center p-8 rounded-3xl glass-panel-elevated border border-blue-500/20 space-y-4">
          <p className="text-sm sm:text-base text-zinc-300 font-medium">
            Você não precisa decidir tudo agora. Comece entendendo o que faz sentido para o seu negócio.
          </p>
          <a
            href={getWhatsAppLink(SITE_CONFIG.whatsapp.faqMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-blue-300 hover:text-white glass-pill hover:bg-white/10 border border-blue-400/30 transition"
          >
            <MessageSquare className="w-4 h-4 text-cyan-400" />
            <span>Tirar dúvidas pelo WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
