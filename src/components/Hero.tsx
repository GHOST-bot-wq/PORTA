import React, { useState } from 'react';
import { getWhatsAppLink } from '../config/site';
import { ArrowRight, Sparkles, Smartphone, ShieldCheck, CheckCircle2, Layout, Layers, MousePointerClick, MessageSquare } from 'lucide-react';

export const Hero: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'estrutura' | 'recursos'>('estrutura');

  return (
    <section id="inicio" className="relative min-h-screen pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden flex flex-col items-center justify-center">
      {/* Signature Diagonal Light Beam from Top-Left (Frames 0.0s, 1.0s, 14.0s) */}
      <div className="hero-diagonal-beam" />
      <div className="hero-beam-streak" />

      {/* Radial ambient glow blooms */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[300px] bg-purple-600/12 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Top Floating Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill text-xs font-medium text-blue-300 mb-8 border border-blue-500/30 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>Criação de sites profissionais sob medida</span>
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
        </div>

        {/* Main Headline (User Prompt Mandatory Direction) */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-4xl leading-[1.1] mb-6">
          Um site profissional para{' '}
          <span className="text-gradient-neon relative inline-block">
            apresentar melhor
            <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 opacity-70"></span>
          </span>{' '}
          o seu negócio.
        </h1>

        {/* Subtitle (User Prompt Mandatory Direction) */}
        <p className="text-base sm:text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto leading-relaxed mb-10 font-normal">
          Criamos sites personalizados que valorizam seus serviços, fortalecem sua presença digital e facilitam o contato dos seus clientes com sua empresa.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-16 w-full sm:w-auto">
          {/* Primary CTA (WhatsApp) */}
          <a
            href={getWhatsAppLink("Olá! Quero criar meu site com a CodeLabx.")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 hover:from-blue-500 hover:to-indigo-500 shadow-[0_0_35px_rgba(59,130,246,0.6)] hover:shadow-[0_0_45px_rgba(59,130,246,0.85)] transition-all duration-300 flex items-center justify-center gap-2.5 border border-blue-300/40 group hover:scale-[1.02]"
          >
            <span>Quero criar meu site</span>
            <ArrowRight className="w-4 h-4 text-cyan-300 group-hover:translate-x-1 transition-transform" />
          </a>

          {/* Secondary CTA (Scroll to Projects) */}
          <a
            href="#demonstracoes"
            className="w-full sm:w-auto px-8 py-4 rounded-full text-sm font-semibold text-zinc-200 glass-pill hover:bg-white/10 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 border border-white/15"
          >
            <span>Ver projetos</span>
          </a>
        </div>

        {/* Central Dashboard Mockup - Ilustrativo de Interface e Arquitetura Conceitual */}
        <div className="w-full max-w-5xl relative group perspective-1000">
          {/* Ambient glow behind card */}
          <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600/30 via-indigo-500/20 to-purple-600/30 rounded-3xl blur-2xl opacity-70 group-hover:opacity-100 transition duration-700 pointer-events-none"></div>

          {/* Window Frame Container */}
          <div className="relative rounded-2xl md:rounded-3xl glass-panel-elevated p-4 sm:p-6 md:p-8 border border-white/15 shadow-[0_25px_60px_rgba(0,0,0,0.8)] text-left">
            {/* Top Bar of the Mockup */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                </div>
                <div className="h-4 w-[1px] bg-white/10 mx-1"></div>
                <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                  <Layout className="w-3.5 h-3.5 text-blue-400" />
                  <span>codelabx.preview // demonstracao-conceitual</span>
                </div>
              </div>

              {/* Mode Toggle Switch */}
              <div className="flex items-center p-1 rounded-full bg-black/40 border border-white/10 text-xs">
                <button
                  onClick={() => setActiveTab('estrutura')}
                  className={`px-3 py-1 rounded-full transition-all ${
                    activeTab === 'estrutura'
                      ? 'bg-blue-600 text-white font-medium shadow-[0_0_12px_rgba(59,130,246,0.5)]'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  Estrutura Visual
                </button>
                <button
                  onClick={() => setActiveTab('recursos')}
                  className={`px-3 py-1 rounded-full transition-all ${
                    activeTab === 'recursos'
                      ? 'bg-indigo-600 text-white font-medium shadow-[0_0_12px_rgba(99,102,241,0.5)]'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  Recursos do Site
                </button>
              </div>

              {/* Status pill badge */}
              <div className="hidden sm:flex items-center gap-2 px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                <span>Demonstração de Interface</span>
              </div>
            </div>

            {/* Dashboard Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6 items-start">
              {/* Left Column / Architecture Preview */}
              <div className="lg:col-span-8 flex flex-col gap-5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      Apresentação Visual & Navegação Integrada
                    </h2>
                    <p className="text-xs sm:text-sm text-zinc-400">
                      Organização visual planejada para conduzir o visitante com clareza até o contato.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs text-zinc-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Layout 100% responsivo</span>
                  </div>
                </div>

                {/* Conceptual Feature Cards (Substituindo números fictícios por pilares reais da solução) */}
                <div className="grid grid-cols-3 gap-3 sm:gap-4">
                  <div className="p-3 sm:p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-blue-500/40 transition">
                    <div className="flex items-center justify-between text-zinc-400 text-xs mb-1">
                      <span>Apresentação</span>
                      <Layout className="w-3.5 h-3.5 text-blue-400" />
                    </div>
                    <div className="text-base sm:text-lg font-bold text-white tracking-tight">Design Sob Medida</div>
                    <div className="text-[10px] text-zinc-400 font-normal mt-1">Identidade exclusiva</div>
                  </div>

                  <div className="p-3 sm:p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-indigo-500/40 transition">
                    <div className="flex items-center justify-between text-zinc-400 text-xs mb-1">
                      <span>Conversão</span>
                      <MessageSquare className="w-3.5 h-3.5 text-indigo-400" />
                    </div>
                    <div className="text-base sm:text-lg font-bold text-white tracking-tight">WhatsApp Direto</div>
                    <div className="text-[10px] text-emerald-400 font-normal mt-1">Contato em 1 clique</div>
                  </div>

                  <div className="p-3 sm:p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-purple-500/40 transition">
                    <div className="flex items-center justify-between text-zinc-400 text-xs mb-1">
                      <span>Acessibilidade</span>
                      <Smartphone className="w-3.5 h-3.5 text-purple-400" />
                    </div>
                    <div className="text-base sm:text-lg font-bold text-white tracking-tight">Foco no Celular</div>
                    <div className="text-[10px] text-blue-400 font-normal mt-1">Navegação sem atrito</div>
                  </div>
                </div>

                {/* SVG Visual Flow Diagram (Preservando a estética neon/luz da referência sem dados fictícios) */}
                <div className="relative p-4 rounded-xl bg-black/40 border border-white/10 overflow-hidden">
                  <div className="flex items-center justify-between text-xs text-zinc-400 mb-2">
                    <span className="font-medium text-zinc-300">Fluxo Visual da Experiência do Visitante</span>
                    <span className="text-[11px] text-zinc-500 font-mono">Da primeira impressão ao WhatsApp</span>
                  </div>

                  <div className="h-32 sm:h-36 w-full relative">
                    <svg className="w-full h-full overflow-visible" viewBox="0 0 500 120" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="flowGlowCyan" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.45" />
                          <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.0" />
                        </linearGradient>
                        <linearGradient id="flowGlowPurple" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#A855F7" stopOpacity="0.35" />
                          <stop offset="100%" stopColor="#A855F7" stopOpacity="0.0" />
                        </linearGradient>
                      </defs>

                      {/* Grid guidelines */}
                      <line x1="0" y1="30" x2="500" y2="30" stroke="rgba(255,255,255,0.05)" strokeDasharray="4 4" />
                      <line x1="0" y1="70" x2="500" y2="70" stroke="rgba(255,255,255,0.05)" strokeDasharray="4 4" />

                      {/* Area Fill Purple */}
                      <path
                        d="M0,100 C80,80 140,95 200,60 C260,25 320,65 380,40 C440,20 480,50 500,30 L500,120 L0,120 Z"
                        fill="url(#flowGlowPurple)"
                      />

                      {/* Line Purple */}
                      <path
                        d="M0,100 C80,80 140,95 200,60 C260,25 320,65 380,40 C440,20 480,50 500,30"
                        fill="none"
                        stroke="#A855F7"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      />

                      {/* Area Fill Cyan */}
                      <path
                        d="M0,110 C70,105 130,70 190,80 C250,90 310,35 370,55 C430,70 470,25 500,15 L500,120 L0,120 Z"
                        fill="url(#flowGlowCyan)"
                      />

                      {/* Line Cyan */}
                      <path
                        d="M0,110 C70,105 130,70 190,80 C250,90 310,35 370,55 C430,70 470,25 500,15"
                        fill="none"
                        stroke="#38BDF8"
                        strokeWidth="3"
                        strokeLinecap="round"
                        filter="drop-shadow(0px 0px 8px rgba(56,189,248,0.8))"
                      />

                      {/* Step Points */}
                      <circle cx="190" cy="80" r="4" fill="#FFFFFF" stroke="#06B6D4" strokeWidth="2" />
                      <circle cx="370" cy="55" r="4.5" fill="#FFFFFF" stroke="#06B6D4" strokeWidth="2.5" />
                      <circle cx="500" cy="15" r="5" fill="#38BDF8" filter="drop-shadow(0 0 6px #38BDF8)" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Right Column / Conceptual Component Panel */}
              <div className="lg:col-span-4 flex flex-col gap-4">
                <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-b from-blue-950/70 via-indigo-950/50 to-space-900 border border-blue-500/30 shadow-[0_10px_30px_rgba(37,99,235,0.25)] relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-28 h-28 bg-blue-500/15 rounded-full blur-2xl"></div>

                  <div className="flex items-center gap-2 text-xs font-semibold text-blue-300 mb-3">
                    <ShieldCheck className="w-4 h-4 text-cyan-400" />
                    <span>Padrão de Construção CodeLabx</span>
                  </div>

                  <h3 className="text-sm font-bold text-white mb-1">
                    Clareza & Facilidade de Contato
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                    Páginas desenvolvidas para explicar o que você faz e permitir que o cliente envie uma mensagem no WhatsApp sem etapas burocráticas.
                  </p>

                  <div className="space-y-2.5 pt-2 border-t border-white/10 text-xs">
                    <div className="flex items-center justify-between text-zinc-300">
                      <span>Adaptação Móvel</span>
                      <span className="text-emerald-400 font-medium">Celular & Tablet</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
                      <div className="bg-gradient-to-r from-cyan-400 to-emerald-400 h-full rounded-full w-full"></div>
                    </div>

                    <div className="flex items-center justify-between text-zinc-300 pt-1">
                      <span>Organização Visual</span>
                      <span className="text-cyan-400 font-medium">Navegação Fluida</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
                      <div className="bg-gradient-to-r from-blue-500 to-indigo-500 h-full rounded-full w-full"></div>
                    </div>
                  </div>

                  {/* Consultation Trigger */}
                  <a
                    href={getWhatsAppLink("Olá! Gostaria de conversar com a CodeLabx sobre um site para minha empresa.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 w-full py-2.5 px-3 rounded-xl bg-blue-600/30 hover:bg-blue-600/50 text-blue-200 hover:text-white border border-blue-400/40 text-xs font-semibold flex items-center justify-center gap-2 transition"
                  >
                    <span>Conversar no WhatsApp</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Secondary Pill Widget */}
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/10 flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]"></div>
                  <div className="text-xs">
                    <span className="text-white font-medium">Canal de Atendimento: </span>
                    <span className="text-zinc-400">WhatsApp Comercial</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
