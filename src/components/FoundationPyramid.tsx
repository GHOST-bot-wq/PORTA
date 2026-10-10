import React from 'react';
import { Layers, Shield, Zap, Search, MessageSquare, Globe } from 'lucide-react';

export const FoundationPyramid: React.FC = () => {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-space-950/70 border-t border-white/[0.04]">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-indigo-900/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-semibold text-blue-300 mb-4 border border-blue-500/30">
          <Layers className="w-3.5 h-3.5 text-cyan-400" />
          <span>Estrutura Técnica & Boas Práticas</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
          Construído com atenção à qualidade técnica
        </h2>
        <p className="text-zinc-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto font-normal leading-relaxed">
          Boas práticas de desenvolvimento, código organizado e atenção aos detalhes técnicos para proporcionar estabilidade à sua presença digital.
        </p>
      </div>

      {/* Floating 3D Tiered Pyramid / Card Stack */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative">
        <div className="flex flex-col items-center gap-4 sm:gap-6">
          
          {/* TIER 1: Top Apex Card */}
          <div className="w-full max-w-sm">
            <div className="p-5 sm:p-6 rounded-2xl glass-panel-elevated border border-blue-400/40 shadow-[0_0_35px_rgba(59,130,246,0.3)] hover:scale-105 transition-all duration-300 text-center relative group">
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-400/40 flex items-center justify-center text-cyan-300 mx-auto mb-3 shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-1">
                Apresentação Alinhada à sua Marca
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Identidade visual, hierarquia e organização pensadas especificamente para o posicionamento do seu negócio.
              </p>
            </div>
          </div>

          {/* TIER 2: Middle Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full max-w-2xl">
            {/* Card Left */}
            <div className="p-5 sm:p-6 rounded-2xl glass-panel border border-indigo-500/30 shadow-[0_10px_30px_rgba(99,102,241,0.2)] hover:border-indigo-400/50 hover:scale-[1.02] transition-all duration-300 text-center">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/20 border border-indigo-400/40 flex items-center justify-center text-indigo-300 mx-auto mb-3">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-1">
                Otimização e Fluidez
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Organização do código e boas práticas no carregamento de imagens para uma navegação agradável.
              </p>
            </div>

            {/* Card Right */}
            <div className="p-5 sm:p-6 rounded-2xl glass-panel border border-purple-500/30 shadow-[0_10px_30px_rgba(168,85,247,0.2)] hover:border-purple-400/50 hover:scale-[1.02] transition-all duration-300 text-center">
              <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-400/40 flex items-center justify-center text-purple-300 mx-auto mb-3">
                <Search className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-1">
                Estrutura Preparada para Buscas
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Elementos básicos de SEO configurados para ajudar os mecanismos de busca a compreender seu conteúdo.
              </p>
            </div>
          </div>

          {/* TIER 3: Bottom Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full max-w-3xl">
            {/* Card Left */}
            <div className="p-5 sm:p-6 rounded-2xl glass-panel border border-cyan-500/30 shadow-[0_10px_30px_rgba(6,182,212,0.2)] hover:border-cyan-400/50 hover:scale-[1.02] transition-all duration-300 text-center">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-300 mx-auto mb-3">
                <MessageSquare className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-1">
                Caminho Direto ao WhatsApp
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Pontos de contato visíveis para facilitar conversas comerciais sem barreiras de formulários.
              </p>
            </div>

            {/* Card Right */}
            <div className="p-5 sm:p-6 rounded-2xl glass-panel border border-blue-500/30 shadow-[0_10px_30px_rgba(59,130,246,0.2)] hover:border-blue-400/50 hover:scale-[1.02] transition-all duration-300 text-center">
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-400/40 flex items-center justify-center text-blue-300 mx-auto mb-3">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-1">
                Configurações de Publicação
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Apoio na configuração de domínio e certificado de segurança conforme o escopo combinado na proposta.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
