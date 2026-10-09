import React from 'react';
import { AlertCircle, Smartphone, Clock, XCircle, CheckCircle2, ArrowRight } from 'lucide-react';
import { getWhatsAppLink } from '../config/site';

export const ProblemSection: React.FC = () => {
  return (
    <section id="oportunidade" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[400px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column / Editorial Headline (Matching frame 2.0s & 3.0s) */}
          <div className="lg:col-span-5 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold mb-6">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>O Desafio da Presença Digital</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight mb-6">
              Empresas perdem pacientes e clientes{' '}
              <span className="text-gradient-purple">todos os dias</span> por falta de um site profissional.
            </h2>

            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-6">
              Nos primeiros 3 segundos, o visitante decide se confia no seu negócio ou se busca o concorrente. 
              Um site amador, lento ou difícil de navegar transmite insegurança imediata e desvaloriza seus serviços premium.
            </p>

            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 mb-8 space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <p className="text-xs sm:text-sm text-zinc-300">
                  <strong className="text-white">A solução CodeLabx:</strong> desenhamos uma experiência digital que comunica autoridade, expõe seus procedimentos com clareza e direciona o paciente diretamente para o WhatsApp da sua equipe.
                </p>
              </div>
            </div>

            <a
              href={getWhatsAppLink("Olá! Quero modernizar a presença digital da minha empresa com a CodeLabx.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-blue-400 hover:text-blue-300 group"
            >
              <span>Transforme a percepção da sua marca</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Right Column / Floating 3D Cards in Space (Matching frames 2.0s - 3.5s) */}
          <div className="lg:col-span-7 relative">
            <div className="relative space-y-5">
              {/* Floating Card 1 */}
              <div className="p-5 sm:p-6 rounded-2xl glass-panel border border-red-500/30 shadow-[0_10px_35px_rgba(239,68,68,0.15)] relative overflow-hidden group hover:border-red-500/50 transition-all duration-300">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-red-500/15 border border-red-500/30 flex items-center justify-center text-red-400 shrink-0">
                      <XCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white mb-1">
                        Design Genérico & Sem Personalidade
                      </h3>
                      <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                        Templates prontos que parecem iguais a centenas de outros sites. O paciente não percebe o valor diferenciado da sua clínica.
                      </p>
                    </div>
                  </div>
                  <span className="shrink-0 px-2.5 py-1 rounded-full bg-red-500/10 text-red-400 text-[11px] font-mono font-medium">
                    -75% autoridade
                  </span>
                </div>
              </div>

              {/* Floating Connecting Glow Bar */}
              <div className="w-0.5 h-6 bg-gradient-to-b from-red-500/40 to-amber-500/40 ml-10"></div>

              {/* Floating Card 2 */}
              <div className="p-5 sm:p-6 rounded-2xl glass-panel border border-amber-500/30 shadow-[0_10px_35px_rgba(245,158,11,0.15)] relative overflow-hidden group hover:border-amber-500/50 transition-all duration-300">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white mb-1">
                        Lentidão Excessiva no Carregamento
                      </h3>
                      <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                        Sites em WordPress inchados que demoram mais de 3 segundos para abrir no celular, queimando o orçamento dos seus anúncios.
                      </p>
                    </div>
                  </div>
                  <span className="shrink-0 px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-400 text-[11px] font-mono font-medium">
                    53% abandono
                  </span>
                </div>
              </div>

              {/* Floating Connecting Glow Bar */}
              <div className="w-0.5 h-6 bg-gradient-to-b from-amber-500/40 to-blue-500/40 ml-10"></div>

              {/* Floating Card 3 */}
              <div className="p-5 sm:p-6 rounded-2xl glass-panel border border-blue-500/40 shadow-[0_10px_35px_rgba(59,130,246,0.2)] relative overflow-hidden group hover:border-blue-500/60 transition-all duration-300">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                      <Smartphone className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white mb-1">
                        Ausência de Fluxo Ágil para WhatsApp
                      </h3>
                      <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                        Formulários longos que ninguém preenche e botões escondidos que impedem o agendamento imediato de consultas e procedimentos.
                      </p>
                    </div>
                  </div>
                  <span className="shrink-0 px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-400 text-[11px] font-mono font-medium">
                    Fricção no contato
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
