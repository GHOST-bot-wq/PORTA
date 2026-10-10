import React, { useState } from 'react';
import { Sparkles, Smartphone, Zap, MessageCircle, CheckCircle, Layout, ArrowRight } from 'lucide-react';
import { getWhatsAppLink } from '../config/site';

export const BentoCapabilities: React.FC = () => {
  const [selectedService, setSelectedService] = useState<'consultoria' | 'projetos' | 'atendimento'>('consultoria');

  return (
    <section id="capacidades" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/3 left-1/3 w-[600px] h-[350px] bg-blue-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-semibold text-cyan-400 mb-4 border border-cyan-500/30">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Experiência & Navegação</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
          Tudo o que sua empresa precisa em uma página moderna
        </h2>
        <p className="text-zinc-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto font-normal">
          Um layout desenhado para organizar seus serviços, destacar seus diferenciais e transformar visitantes em conversas reais.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Card 1: Left Vertical Card (5 cols) */}
          <div className="md:col-span-5 rounded-3xl glass-panel-elevated p-6 sm:p-8 border border-white/10 hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute -top-10 -left-10 w-44 h-44 bg-blue-600/20 rounded-full blur-3xl pointer-events-none"></div>

            <div>
              <div className="w-10 h-10 rounded-xl bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-cyan-400 mb-6">
                <Smartphone className="w-5 h-5" />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2">
                Apresentação clara dos serviços da sua empresa
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
                Quem acessa seu site encontra rapidamente o que procura, com textos objetivos e fácil escolha do serviço desejado.
              </p>

              {/* Interactive Mini Service Selector */}
              <div className="p-3.5 rounded-2xl bg-black/40 border border-white/10 mb-4 space-y-2.5">
                <span className="text-[11px] font-mono text-zinc-400 block mb-1">Simulação de navegação por categoria:</span>
                <div className="grid grid-cols-3 gap-1.5 text-xs">
                  <button
                    onClick={() => setSelectedService('consultoria')}
                    className={`py-2 px-1 rounded-xl text-center transition ${
                      selectedService === 'consultoria'
                        ? 'bg-blue-600 text-white font-medium shadow-[0_0_12px_rgba(59,130,246,0.5)]'
                        : 'bg-white/5 text-zinc-400 hover:text-white'
                    }`}
                  >
                    Consultoria
                  </button>
                  <button
                    onClick={() => setSelectedService('projetos')}
                    className={`py-2 px-1 rounded-xl text-center transition ${
                      selectedService === 'projetos'
                        ? 'bg-blue-600 text-white font-medium shadow-[0_0_12px_rgba(59,130,246,0.5)]'
                        : 'bg-white/5 text-zinc-400 hover:text-white'
                    }`}
                  >
                    Projetos
                  </button>
                  <button
                    onClick={() => setSelectedService('atendimento')}
                    className={`py-2 px-1 rounded-xl text-center transition ${
                      selectedService === 'atendimento'
                        ? 'bg-blue-600 text-white font-medium shadow-[0_0_12px_rgba(59,130,246,0.5)]'
                        : 'bg-white/5 text-zinc-400 hover:text-white'
                    }`}
                  >
                    Atendimento
                  </button>
                </div>

                <div className="pt-2 text-xs text-zinc-300 flex items-center justify-between border-t border-white/5">
                  <span>Mensagem contextualizada:</span>
                  <span className="text-cyan-400 font-medium text-[11px]">Direcionada ao WhatsApp</span>
                </div>
              </div>
            </div>

            {/* Bottom Status Badge */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs text-zinc-400">Navegação sem barreiras</span>
              <span className="text-xs font-mono font-medium text-cyan-300">Formato intuitivo</span>
            </div>
          </div>

          {/* Right Column (7 cols) */}
          <div className="md:col-span-7 flex flex-col gap-6">
            
            {/* Card 2: Top Wide Card */}
            <div className="rounded-3xl glass-panel-elevated p-6 sm:p-7 border border-white/10 hover:border-purple-500/40 transition-all duration-300 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-48 h-48 bg-purple-600/15 rounded-full blur-3xl pointer-events-none"></div>

              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-400">
                    <Layout className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white">
                      Identidade Visual Profissional
                    </h3>
                    <p className="text-xs text-zinc-400">Design consistente que valoriza o trabalho da sua empresa</p>
                  </div>
                </div>

                <span className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold">
                  Personalizado
                </span>
              </div>

              {/* Benefit highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-4">
                <div className="p-3 rounded-xl bg-black/40 border border-white/5">
                  <span className="text-[11px] text-zinc-400 block mb-1">Tipografia & Cores</span>
                  <span className="text-white font-medium text-xs">Alinhadas à sua marca</span>
                </div>

                <div className="p-3 rounded-xl bg-black/40 border border-white/5">
                  <span className="text-[11px] text-zinc-400 block mb-1">Fotos & Galeria</span>
                  <span className="text-white font-medium text-xs">Otimizadas para visualização</span>
                </div>

                <div className="p-3 rounded-xl bg-black/40 border border-white/5">
                  <span className="text-[11px] text-zinc-400 block mb-1">Estrutura de Conteúdo</span>
                  <span className="text-white font-medium text-xs">Hierarquia bem definida</span>
                </div>
              </div>
            </div>

            {/* Bottom Row / 2 Sub-cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Card 3: WhatsApp Direct */}
              <div className="rounded-3xl glass-panel p-5 sm:p-6 border border-white/10 hover:border-emerald-500/40 transition-all duration-300 relative overflow-hidden group">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4">
                  <MessageCircle className="w-4 h-4" />
                </div>

                <h3 className="text-base font-bold text-white mb-1">
                  Contato Direto no WhatsApp
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                  Links de conversa estrategicamente distribuídos para que o interessado fale com você sem formulários complexos.
                </p>

                <div className="p-2.5 rounded-xl bg-emerald-950/30 border border-emerald-500/20 text-[11px] text-emerald-300 flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>Caminho direto para novas conversas</span>
                </div>
              </div>

              {/* Card 4: Performance */}
              <div className="rounded-3xl glass-panel p-5 sm:p-6 border border-white/10 hover:border-cyan-500/40 transition-all duration-300 relative overflow-hidden group">
                <div className="w-9 h-9 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4">
                  <Zap className="w-4 h-4" />
                </div>

                <h3 className="text-base font-bold text-white mb-1">
                  Desempenho e Velocidade
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                  Código limpo, imagens comprimidas e estrutura técnica bem configurada para carregar com agilidade em celulares.
                </p>

                <div className="p-2.5 rounded-xl bg-cyan-950/30 border border-cyan-500/20 text-[11px] text-cyan-300 flex items-center justify-between">
                  <span>Estrutura Técnica:</span>
                  <span className="font-mono font-medium">Otimizada & Leve</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
