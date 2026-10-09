import React from 'react';
import { SITE_CONFIG, getWhatsAppLink } from '../config/site';
import { MessageSquare, ArrowUp, Sparkles, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/10 bg-[#06070E] py-14 overflow-hidden text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/[0.08]">
          
          {/* Brand Info (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 via-indigo-600 to-violet-600 flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                <span className="text-white font-bold text-sm">CX</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                CodeLab<span className="text-blue-400">x</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-zinc-400 max-w-sm leading-relaxed">
              Desenvolvimento de sites de alto padrão para empresas e clínicas de estética. 
              Engenharia visual, velocidade extrema e foco em conversão para WhatsApp.
            </p>

            <div className="pt-2 text-xs text-zinc-500 font-mono">
              São Paulo, SP • Atendimento Brasil & Internacional
            </div>
          </div>

          {/* Navigation Links (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase text-zinc-400 tracking-wider font-semibold">
              Navegação Rápida
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm">
              {SITE_CONFIG.navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-zinc-400 hover:text-white transition-colors py-1"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Direct WhatsApp Contact (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase text-zinc-400 tracking-wider font-semibold">
              Atendimento Direto
            </h4>
            <p className="text-xs text-zinc-400">
              Solicite um orçamento sob medida ou tire dúvidas com nossa equipe:
            </p>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600/20 hover:bg-blue-600/40 text-blue-300 hover:text-white border border-blue-500/30 text-xs font-semibold transition"
            >
              <MessageSquare className="w-4 h-4 text-cyan-400" />
              <span>WhatsApp: {SITE_CONFIG.whatsapp.displayNumber}</span>
            </a>
          </div>

        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>
            © {new Date().getFullYear()} CodeLabx. Todos os direitos reservados. Projetos demonstrativos conceituais com propósitos ilustrativos de design.
          </p>

          <button
            onClick={scrollToTop}
            aria-label="Voltar ao topo"
            className="flex items-center gap-1.5 text-zinc-400 hover:text-white transition p-2 rounded-lg hover:bg-white/5"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
