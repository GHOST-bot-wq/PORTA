import React, { useState, useEffect } from 'react';
import { SITE_CONFIG, getWhatsAppLink } from '../config/site';
import { Menu, X, ArrowUpRight, MessageCircle } from 'lucide-react';

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 lg:px-8 py-4">
      <div 
        className={`max-w-7xl mx-auto rounded-full transition-all duration-300 ${
          scrolled 
            ? 'glass-panel-elevated py-2.5 px-5 sm:px-7 shadow-[0_10px_30px_rgba(0,0,0,0.6)]' 
            : 'bg-[#0b0e1e]/80 backdrop-blur-md border border-white/10 py-3 px-6'
        } flex items-center justify-between shadow-2xl`}
      >
        {/* Brand Logo */}
        <a href="#inicio" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 via-indigo-600 to-violet-600 flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.5)] group-hover:shadow-[0_0_20px_rgba(59,130,246,0.8)] transition-all">
            <span className="text-white font-bold text-sm tracking-wider">CX</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-lg font-bold tracking-tight text-white group-hover:text-blue-300 transition-colors">
              CodeLab<span className="text-blue-400">x</span>
            </span>
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_6px_#22d3ee]"></span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {SITE_CONFIG.navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs lg:text-sm font-medium text-zinc-300 hover:text-white px-3 py-1.5 rounded-full hover:bg-white/5 transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right WhatsApp CTA Button */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={getWhatsAppLink(SITE_CONFIG.whatsapp.headerMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 hover:from-blue-500 hover:to-indigo-500 shadow-[0_0_20px_rgba(59,130,246,0.45)] hover:shadow-[0_0_28px_rgba(59,130,246,0.7)] transition-all duration-300 border border-blue-400/30"
          >
            <MessageCircle className="w-3.5 h-3.5 text-cyan-300" />
            <span>Falar no WhatsApp</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Abrir menu"
          className="md:hidden text-zinc-300 hover:text-white p-2 rounded-lg hover:bg-white/5 transition"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 max-w-7xl mx-auto rounded-2xl glass-panel-elevated p-5 border border-white/10 shadow-2xl animate-in fade-in slide-in-from-top-3">
          <div className="flex flex-col gap-2">
            {SITE_CONFIG.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-zinc-300 hover:text-white py-2 px-3 rounded-lg hover:bg-white/5 transition"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 mt-2 border-t border-white/10">
              <a
                href={getWhatsAppLink(SITE_CONFIG.whatsapp.headerMessage)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 shadow-[0_0_20px_rgba(59,130,246,0.5)]"
              >
                <MessageCircle className="w-3.5 h-3.5 text-cyan-300" />
                <span>Conversar no WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
