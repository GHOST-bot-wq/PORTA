import React, { useState } from 'react';
import { X, ExternalLink, Sparkles, CheckCircle, MessageSquare, ChevronRight, Layers, ShieldCheck } from 'lucide-react';
import { SITE_CONFIG, getWhatsAppLink } from '../config/site';

interface ClinicModalProps {
  clinicId: string | null;
  onClose: () => void;
}

export const ClinicModal: React.FC<ClinicModalProps> = ({ clinicId, onClose }) => {
  if (!clinicId) return null;

  const project = SITE_CONFIG.demonstrativeClinics.find((c) => c.id === clinicId);
  if (!project) return null;

  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = ['all', ...Array.from(new Set(project.treatments.map((t) => t.category)))];

  const filteredTreatments = activeCategory === 'all'
    ? project.treatments
    : project.treatments.filter((t) => t.category === activeCategory);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-5xl max-h-[92vh] overflow-y-auto rounded-3xl glass-panel-elevated border border-white/20 shadow-[0_25px_80px_rgba(0,0,0,0.9)] flex flex-col text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Floating Header Bar */}
        <div className="sticky top-0 z-30 flex items-center justify-between px-5 sm:px-8 py-4 bg-[#0A0D1B]/95 backdrop-blur-md border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-blue-500/10 border border-blue-400/30 text-blue-400">
              Demonstração Conceitual Interativa
            </span>
            <span className="text-xs text-zinc-400 hidden sm:inline">
              Desenvolvido por CodeLabx
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={getWhatsAppLink(`Olá! Vi a demonstração "${project.name}" no site da CodeLabx e gostaria de um projeto nesse padrão para a minha empresa.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 transition shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              <span>Conversar no WhatsApp</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={onClose}
              aria-label="Fechar demonstração"
              className="p-2 rounded-full bg-white/5 hover:bg-white/15 text-zinc-300 hover:text-white transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Project Demonstration Body */}
        <div className="p-5 sm:p-8 md:p-10 space-y-10">
          
          {/* Transparency Alert */}
          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-start gap-3 text-xs text-zinc-300">
            <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
            <div>
              <strong>Aviso de transparência:</strong> As demonstrações são projetos conceituais desenvolvidos pela CodeLabx para mostrar possibilidades de design e estrutura. Não representam, necessariamente, sites de clientes contratantes nem resultados comerciais comprovados.
            </div>
          </div>

          {/* Project Brand & Hero */}
          <div className="relative rounded-3xl p-6 sm:p-10 overflow-hidden bg-gradient-to-br from-white/[0.04] to-black/60 border border-white/10">
            <div 
              className="absolute -top-20 -right-20 w-80 h-80 rounded-full blur-3xl opacity-30 pointer-events-none"
              style={{ backgroundColor: project.accentColor }}
            />

            <div className="relative z-10 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold mb-4 text-zinc-300">
                <Sparkles className="w-3.5 h-3.5" style={{ color: project.accentColor }} />
                <span>{project.category}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-3">
                {project.name}
              </h1>

              <p className="text-sm font-semibold text-blue-300 mb-3">
                {project.tagline}
              </p>

              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                {project.subtitle}
              </p>

              {/* Highlights Pill Row */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.highlights.map((h, i) => (
                  <span key={i} className="px-3 py-1 rounded-xl bg-white/5 border border-white/10 text-xs text-zinc-300 flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{h}</span>
                  </span>
                ))}
              </div>

              {/* Direct WhatsApp CTA */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={getWhatsAppLink(`Olá! Gostaria de conversar sobre um site profissional inspirado na demonstração "${project.name}".`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-[0_0_20px_rgba(59,130,246,0.5)] flex items-center gap-2 transition"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Conversar sobre Este Formato no WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Services Catalogue */}
          <div>
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Apresentação de Serviços & Áreas de Atuação
                </h2>
                <p className="text-xs sm:text-sm text-zinc-400">
                  Estrutura projetada para detalhar cada serviço e permitir que o visitante envie uma mensagem direta com o assunto escolhido.
                </p>
              </div>

              {/* Category Filter Pills */}
              <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-black/40 border border-white/10">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-3 py-1 rounded-lg text-xs font-medium transition ${
                      activeCategory === cat
                        ? 'bg-white/15 text-white font-semibold'
                        : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    {cat === 'all' ? 'Todos' : cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Treatments Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredTreatments.map((t, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl glass-panel border border-white/10 hover:border-white/20 transition group"
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <span className="px-2 py-0.5 rounded-md text-[10px] font-mono uppercase bg-white/5 text-zinc-400 border border-white/5">
                      {t.category}
                    </span>
                    <ChevronRight className="w-4 h-4 text-zinc-500 group-hover:text-white transition-transform group-hover:translate-x-0.5" />
                  </div>

                  <h3 className="text-base font-bold text-white mb-1.5 group-hover:text-blue-300 transition-colors">
                    {t.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                    {t.desc}
                  </p>

                  <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                    <span className="text-[11px] text-zinc-500">Exemplo de item de catálogo</span>
                    <a
                      href={getWhatsAppLink(`Olá! Gostaria de conversar sobre um site profissional com catálogo de serviços como "${t.title}".`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium text-blue-400 hover:text-blue-300 flex items-center gap-1"
                    >
                      <span>Conversar no WhatsApp</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Profile / Authority Section */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.02] border border-white/10 flex flex-col md:flex-row items-center gap-6">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-tr from-zinc-700 to-zinc-900 border border-white/15 flex items-center justify-center text-zinc-300 shrink-0 shadow-lg">
              <Layers className="w-8 h-8 text-cyan-400" />
            </div>

            <div className="text-center md:text-left">
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-1">
                <h3 className="text-lg font-bold text-white">{project.doctor.name}</h3>
                <span className="text-xs font-mono text-zinc-400 bg-white/5 px-2 py-0.5 rounded-md">
                  {project.doctor.council}
                </span>
              </div>
              <p className="text-xs font-medium text-blue-400 mb-2">{project.doctor.role}</p>
              <p className="text-xs sm:text-sm text-zinc-400 max-w-2xl leading-relaxed">
                {project.doctor.bio}
              </p>
            </div>
          </div>

          {/* Bottom Conversion Call to Action */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-blue-950/80 via-indigo-950/80 to-purple-950/80 border border-blue-500/30 text-center relative overflow-hidden">
            <div className="max-w-xl mx-auto space-y-4">
              <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                Gostou de algum estilo?
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300">
                Podemos conversar sobre como adaptá-lo à identidade e às necessidades da sua empresa.
              </p>
              <div className="pt-2">
                <a
                  href={getWhatsAppLink(`Olá! Vi o modelo conceitual "${project.name}" na CodeLabx e gostaria de saber como criar um projeto personalizado para minha empresa.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-[0_0_25px_rgba(59,130,246,0.6)] transition"
                >
                  <Sparkles className="w-4 h-4 text-cyan-300" />
                  <span>Quero um projeto personalizado</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
