import React, { useState } from 'react';
import { Sparkles, Smartphone, Zap, MessageCircle, CheckCircle, BarChart3, Star, ArrowUpRight } from 'lucide-react';
import { getWhatsAppLink } from '../config/site';

export const BentoCapabilities: React.FC = () => {
  const [selectedService, setSelectedService] = useState<'botox' | 'bio' | 'laser'>('botox');

  return (
    <section id="capacidades" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/3 left-1/3 w-[600px] h-[350px] bg-blue-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-semibold text-cyan-400 mb-4 border border-cyan-500/30">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Capacidades de Ponta a Ponta</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
          Tudo o que sua presença digital precisa para liderar
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
          Um layout desenhado milimetricamente para valorizar cada procedimento e transformar curiosos em agendamentos reais.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Bento Grid (Matching Frames 7.0s - 9.0s) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Card 1: Left Vertical Card (5 cols) - "Your world, simplified..." */}
          <div className="md:col-span-5 rounded-3xl glass-panel-elevated p-6 sm:p-8 border border-white/10 hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
            {/* Luminous blue accent glow */}
            <div className="absolute -top-10 -left-10 w-44 h-44 bg-blue-600/20 rounded-full blur-3xl pointer-events-none"></div>

            <div>
              <div className="w-10 h-10 rounded-xl bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-cyan-400 mb-6">
                <Smartphone className="w-5 h-5" />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2">
                Sua clínica simplificada em uma experiência digital única
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
                Apresente seus procedimentos mais procurados com fotos de alta qualidade, explicações objetivas e seleção ágil para agendamento.
              </p>

              {/* Interactive Mini Service Selector */}
              <div className="p-3 rounded-2xl bg-black/40 border border-white/10 mb-4 space-y-2">
                <span className="text-[11px] font-mono text-zinc-400 block mb-1">Simulação de Seleção de Procedimento:</span>
                <div className="grid grid-cols-3 gap-1.5 text-xs">
                  <button
                    onClick={() => setSelectedService('botox')}
                    className={`py-2 px-1 rounded-xl text-center transition ${
                      selectedService === 'botox'
                        ? 'bg-blue-600 text-white font-medium shadow-[0_0_12px_rgba(59,130,246,0.5)]'
                        : 'bg-white/5 text-zinc-400 hover:text-white'
                    }`}
                  >
                    Botox
                  </button>
                  <button
                    onClick={() => setSelectedService('bio')}
                    className={`py-2 px-1 rounded-xl text-center transition ${
                      selectedService === 'bio'
                        ? 'bg-blue-600 text-white font-medium shadow-[0_0_12px_rgba(59,130,246,0.5)]'
                        : 'bg-white/5 text-zinc-400 hover:text-white'
                    }`}
                  >
                    Harmonização
                  </button>
                  <button
                    onClick={() => setSelectedService('laser')}
                    className={`py-2 px-1 rounded-xl text-center transition ${
                      selectedService === 'laser'
                        ? 'bg-blue-600 text-white font-medium shadow-[0_0_12px_rgba(59,130,246,0.5)]'
                        : 'bg-white/5 text-zinc-400 hover:text-white'
                    }`}
                  >
                    Laser
                  </button>
                </div>

                <div className="pt-2 text-xs text-zinc-300 flex items-center justify-between">
                  <span>Mensagem pronta no WhatsApp:</span>
                  <span className="text-emerald-400 font-semibold text-[11px]">Personalizada</span>
                </div>
              </div>
            </div>

            {/* Bottom Status Badge */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs text-zinc-400">Taxa de clique mobile</span>
              <span className="text-xs font-mono font-bold text-cyan-300">+64% retenção</span>
            </div>
          </div>

          {/* Right Column (7 cols): Split into Card 2 (Top) and Card 3 & 4 (Bottom) */}
          <div className="md:col-span-7 flex flex-col gap-6">
            
            {/* Card 2: Top Wide Card - "Realtime Overview & Authority UI" */}
            <div className="rounded-3xl glass-panel-elevated p-6 sm:p-7 border border-white/10 hover:border-purple-500/40 transition-all duration-300 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-48 h-48 bg-purple-600/15 rounded-full blur-3xl pointer-events-none"></div>

              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-400">
                    <BarChart3 className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white">
                      Design de Impacto & Autoridade Imediata
                    </h3>
                    <p className="text-xs text-zinc-400">Elementos visuais que valorizam o ticket médio dos seus serviços</p>
                  </div>
                </div>

                <span className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold">
                  Padrão Premium
                </span>
              </div>

              {/* Mockup Preview Bar with Status Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 my-4">
                <div className="p-3 rounded-xl bg-black/40 border border-white/5">
                  <span className="text-[11px] text-zinc-400 block mb-1">Avaliação Média</span>
                  <div className="flex items-center gap-1 text-white font-bold text-sm">
                    <span>5.0</span>
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-black/40 border border-white/5">
                  <span className="text-[11px] text-zinc-400 block mb-1">Tempo de Resposta</span>
                  <span className="text-emerald-400 font-bold text-sm">&lt; 1 minuto</span>
                </div>

                <div className="p-3 rounded-xl bg-black/40 border border-white/5 col-span-2 sm:col-span-1">
                  <span className="text-[11px] text-zinc-400 block mb-1">Indexação Google</span>
                  <span className="text-cyan-400 font-bold text-sm">Página 1</span>
                </div>
              </div>
            </div>

            {/* Bottom Row / 2 Sub-cards (Card 3 & Card 4) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Card 3: WhatsApp Instant Flow (Matches video AI assistant card) */}
              <div className="rounded-3xl glass-panel p-5 sm:p-6 border border-white/10 hover:border-emerald-500/40 transition-all duration-300 relative overflow-hidden group">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4">
                  <MessageCircle className="w-4 h-4" />
                </div>

                <h3 className="text-base font-bold text-white mb-1">
                  Conexão Direta WhatsApp
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                  Gatilhos de agendamento que direcionam o cliente já com o procedimento desejado digitado.
                </p>

                <div className="p-2.5 rounded-xl bg-emerald-950/30 border border-emerald-500/20 text-[11px] text-emerald-300 flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>Sem formulários cansativos ou barreiras</span>
                </div>
              </div>

              {/* Card 4: Sub-second Speed (Matches video quick resolution card) */}
              <div className="rounded-3xl glass-panel p-5 sm:p-6 border border-white/10 hover:border-cyan-500/40 transition-all duration-300 relative overflow-hidden group">
                <div className="w-9 h-9 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4">
                  <Zap className="w-4 h-4" />
                </div>

                <h3 className="text-base font-bold text-white mb-1">
                  Performance & Velocidade
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                  Código limpo, imagens comprimidas em WebP/AVIF e resposta instantânea em redes 4G/5G.
                </p>

                <div className="p-2.5 rounded-xl bg-cyan-950/30 border border-cyan-500/20 text-[11px] text-cyan-300 flex items-center justify-between">
                  <span>Google PageSpeed:</span>
                  <span className="font-mono font-bold">100 / 100</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
