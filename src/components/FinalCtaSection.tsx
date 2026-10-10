import React from 'react';
import { getWhatsAppLink, SITE_CONFIG } from '../config/site';
import { ArrowRight, ShieldCheck, MessageCircle, Sparkles } from 'lucide-react';

export const FinalCtaSection: React.FC = () => {
  return (
    <section className="relative py-28 md:py-40 overflow-hidden text-center flex flex-col items-center justify-center">
      {/* Signature Vertical Spotlight Cone / Light Beam from Below (Frames 12.0s & 13.0s) */}
      <div className="final-cta-spotlight" />
      <div className="final-cta-cone-lines" />

      {/* Ambient background particles and glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Brand Tag */}
        <div className="flex items-center gap-2 mb-6">
          <div className="w-6 h-6 rounded-md bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-[10px] font-bold text-white shadow-[0_0_12px_rgba(59,130,246,0.5)]">
            CX
          </div>
          <span className="text-sm font-semibold tracking-wider uppercase text-blue-300 font-mono">
            CodeLabx Studio
          </span>
        </div>

        {/* Headline (User prompt exact phrase) */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-[1.15] mb-6 max-w-3xl">
          Vamos criar o site da sua empresa?
        </h2>

        {/* Subtitle (User prompt exact phrase) */}
        <p className="text-base sm:text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto leading-relaxed mb-10 font-normal">
          Conte um pouco sobre seu negócio e vamos conversar sobre a melhor forma de apresentar seus serviços na internet.
        </p>

        {/* Glowing Central Button with Spotlight Cone Beam (Frames 12.0s & 13.0s) */}
        <div className="relative group">
          {/* Button glow bloom */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full blur-xl opacity-75 group-hover:opacity-100 transition duration-500 animate-pulse-slow"></div>

          <a
            href={getWhatsAppLink(SITE_CONFIG.whatsapp.finalCtaMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="relative px-10 py-5 rounded-full text-base sm:text-lg font-bold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 hover:from-blue-500 hover:to-indigo-500 shadow-[0_0_40px_rgba(59,130,246,0.8)] hover:shadow-[0_0_60px_rgba(59,130,246,1)] transition-all duration-300 flex items-center justify-center gap-3 border border-blue-200/50 hover:scale-105"
          >
            <MessageCircle className="w-5 h-5 text-cyan-200" />
            <span>Conversar pelo WhatsApp</span>
            <ArrowRight className="w-5 h-5 text-cyan-200 group-hover:translate-x-1.5 transition-transform" />
          </a>
        </div>

        {/* Badges under CTA */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Atendimento direto pelo WhatsApp</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span>Design sob medida para sua empresa</span>
          </div>
        </div>
      </div>
    </section>
  );
};
