import React from 'react';
import { Smartphone, Clock, XCircle, CheckCircle2, ArrowRight, HelpCircle } from 'lucide-react';
import { getWhatsAppLink, SITE_CONFIG } from '../config/site';

export const ProblemSection: React.FC = () => {
  return (
    <section id="oportunidade" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[400px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column / Editorial Headline */}
          <div className="lg:col-span-5 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-semibold mb-6">
              <HelpCircle className="w-3.5 h-3.5 text-cyan-400" />
              <span>Presença Digital e Clareza Comercial</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight mb-6">
              Seu trabalho merece uma apresentação à altura.
            </h2>

            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
              Quando alguém conhece sua empresa pela internet, precisa entender o que você oferece e como entrar em contato. Um site bem planejado reúne essas informações em um só lugar, com uma apresentação profissional e adaptada ao celular.
            </p>

            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 mb-8 space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  <strong className="text-white">Como a CodeLabx ajuda:</strong> organizamos seus serviços de forma objetiva, criamos um visual limpo e deixamos o link do WhatsApp acessível em todas as seções para facilitar novas conversas comerciais.
                </p>
              </div>
            </div>

            <a
              href={getWhatsAppLink(SITE_CONFIG.whatsapp.opportunityMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-blue-400 hover:text-blue-300 group"
            >
              <span>Conversar sobre o site da sua empresa</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Right Column / Floating Cards */}
          <div className="lg:col-span-7 relative">
            <div className="relative space-y-5">
              {/* Card 1 */}
              <div className="p-5 sm:p-6 rounded-2xl glass-panel border border-white/10 shadow-[0_10px_35px_rgba(0,0,0,0.4)] relative overflow-hidden group hover:border-blue-500/40 transition-all duration-300">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                      <XCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white mb-1">
                        Informações espalhadas ou confusas
                      </h3>
                      <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                        Quando uma empresa depende apenas de redes sociais, o cliente muitas vezes tem dificuldade em entender o catálogo completo de serviços e como solicitar um atendimento.
                      </p>
                    </div>
                  </div>
                  <span className="shrink-0 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-400 text-[11px] font-mono">
                    Desafio comum
                  </span>
                </div>
              </div>

              {/* Connecting Glow Bar */}
              <div className="w-0.5 h-6 bg-gradient-to-b from-blue-500/40 to-indigo-500/40 ml-10"></div>

              {/* Card 2 */}
              <div className="p-5 sm:p-6 rounded-2xl glass-panel border border-white/10 shadow-[0_10px_35px_rgba(0,0,0,0.4)] relative overflow-hidden group hover:border-indigo-500/40 transition-all duration-300">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white mb-1">
                        Páginas pesadas ou desorganizadas no celular
                      </h3>
                      <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                        A maioria dos visitantes acessa pelo smartphone. Se a página demora para carregar ou corta textos na tela pequena, a experiência se torna frustrante.
                      </p>
                    </div>
                  </div>
                  <span className="shrink-0 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-400 text-[11px] font-mono">
                    Experiência móvel
                  </span>
                </div>
              </div>

              {/* Connecting Glow Bar */}
              <div className="w-0.5 h-6 bg-gradient-to-b from-indigo-500/40 to-purple-500/40 ml-10"></div>

              {/* Card 3 */}
              <div className="p-5 sm:p-6 rounded-2xl glass-panel border border-white/10 shadow-[0_10px_35px_rgba(0,0,0,0.4)] relative overflow-hidden group hover:border-purple-500/40 transition-all duration-300">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0">
                      <Smartphone className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white mb-1">
                        Dificuldade para iniciar o contato
                      </h3>
                      <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                        Formulários longos ou botões difíceis de encontrar criam barreiras desnecessárias para quem já tem interesse em falar com sua equipe comercial.
                      </p>
                    </div>
                  </div>
                  <span className="shrink-0 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-400 text-[11px] font-mono">
                    Canal direto
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
