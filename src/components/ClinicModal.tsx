import React, { useState } from 'react';
import { X, ExternalLink, Sparkles, Star, CheckCircle, Smartphone, Calendar, Clock, MapPin, Phone, MessageSquare, ChevronRight } from 'lucide-react';
import { SITE_CONFIG, getWhatsAppLink } from '../config/site';

interface ClinicModalProps {
  clinicId: string | null;
  onClose: () => void;
}

const getDoctorCouncil = (doc: Record<string, any>): string => {
  return doc.crbm || doc.crm || doc.cro || '';
};

const getSpecialStat = (st: Record<string, any>): string => {
  return st.returnRate || st.techDevices || st.naturalLookGuarantee || '100%';
};

export const ClinicModal: React.FC<ClinicModalProps> = ({ clinicId, onClose }) => {
  if (!clinicId) return null;

  const clinic = SITE_CONFIG.demonstrativeClinics.find((c) => c.id === clinicId);
  if (!clinic) return null;

  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedTreatment, setSelectedTreatment] = useState<string | null>(null);

  const categories = ['all', ...Array.from(new Set(clinic.treatments.map((t) => t.category)))];

  const filteredTreatments = activeCategory === 'all'
    ? clinic.treatments
    : clinic.treatments.filter((t) => t.category === activeCategory);

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
              href={getWhatsAppLink(`Olá! Gostaria de um site com o design e estrutura da demonstração ${clinic.name}.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 transition shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              <span>Quero um Site Assim</span>
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

        {/* Clinic Demonstration Body */}
        <div className="p-5 sm:p-8 md:p-10 space-y-12">
          
          {/* Clinic Brand & Hero */}
          <div className="relative rounded-3xl p-6 sm:p-10 overflow-hidden bg-gradient-to-br from-white/[0.04] to-black/60 border border-white/10">
            {/* Ambient glow matching clinic tone */}
            <div 
              className="absolute -top-20 -right-20 w-80 h-80 rounded-full blur-3xl opacity-30 pointer-events-none"
              style={{ backgroundColor: clinic.accentColor }}
            />

            <div className="relative z-10 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold mb-4 text-zinc-300">
                <Sparkles className="w-3.5 h-3.5" style={{ color: clinic.accentColor }} />
                <span>{clinic.badge}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-4">
                {clinic.name}
              </h1>

              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                {clinic.subtitle}
              </p>

              {/* Highlights Pill Row */}
              <div className="flex flex-wrap gap-2 mb-8">
                {clinic.highlights.map((h, i) => (
                  <span key={i} className="px-3 py-1 rounded-xl bg-white/5 border border-white/10 text-xs text-zinc-300 flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{h}</span>
                  </span>
                ))}
              </div>

              {/* Direct Booking CTA */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={getWhatsAppLink(`Olá! Gostaria de agendar uma consulta na ${clinic.name}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-[0_0_20px_rgba(59,130,246,0.5)] flex items-center gap-2 transition"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Agendar Consulta no WhatsApp</span>
                </a>

                <div className="text-xs text-zinc-400 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-zinc-500" />
                  <span>Atendimento ágil em poucos minutos</span>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-3 gap-3 sm:gap-6 p-4 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/5">
            <div className="text-center">
              <span className="text-xl sm:text-3xl font-black text-white block">
                {clinic.stats.satisfaction}
              </span>
              <span className="text-[11px] sm:text-xs text-zinc-400 uppercase tracking-wider">Satisfação dos Pacientes</span>
            </div>
            <div className="text-center border-x border-white/10">
              <span className="text-xl sm:text-3xl font-black text-white block">
                {clinic.stats.treatmentsDone}
              </span>
              <span className="text-[11px] sm:text-xs text-zinc-400 uppercase tracking-wider">Procedimentos Realizados</span>
            </div>
            <div className="text-center">
              <span className="text-xl sm:text-3xl font-black text-white block" style={{ color: clinic.accentColor }}>
                {getSpecialStat(clinic.stats)}
              </span>
              <span className="text-[11px] sm:text-xs text-zinc-400 uppercase tracking-wider">Diferencial Exclusivo</span>
            </div>
          </div>

          {/* Treatments Catalogue */}
          <div>
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Catálogo de Procedimentos & Protocolos
                </h2>
                <p className="text-xs sm:text-sm text-zinc-400">
                  Clique para conferir detalhes e solicitar orientações pelo WhatsApp.
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
                  onClick={() => setSelectedTreatment(selectedTreatment === t.title ? null : t.title)}
                  className="p-5 rounded-2xl glass-panel border border-white/10 hover:border-white/20 transition cursor-pointer group"
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
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {t.desc}
                  </p>

                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between">
                    <span className="text-[11px] text-zinc-500">Avaliação prévia recomendada</span>
                    <a
                      href={getWhatsAppLink(`Olá! Gostaria de saber mais sobre o procedimento "${t.title}" da clínica ${clinic.name}.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-xs font-medium text-blue-400 hover:text-blue-300 flex items-center gap-1"
                    >
                      <span>Consultar no WhatsApp</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Doctor / Specialist Profile Section */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.02] border border-white/10 flex flex-col md:flex-row items-center gap-6">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-tr from-zinc-700 to-zinc-900 border border-white/15 flex items-center justify-center text-zinc-400 shrink-0 shadow-lg">
              <span className="text-2xl font-bold text-white">DR</span>
            </div>

            <div className="text-center md:text-left">
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-1">
                <h3 className="text-lg font-bold text-white">{clinic.doctor.name}</h3>
                <span className="text-xs font-mono text-zinc-400 bg-white/5 px-2 py-0.5 rounded-md">
                  {getDoctorCouncil(clinic.doctor)}
                </span>
              </div>
              <p className="text-xs font-medium text-blue-400 mb-2">{clinic.doctor.role}</p>
              <p className="text-xs sm:text-sm text-zinc-400 max-w-2xl leading-relaxed">
                {clinic.doctor.bio}
              </p>
            </div>
          </div>

          {/* Bottom Conversion Call to Action */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-blue-950/80 via-indigo-950/80 to-purple-950/80 border border-blue-500/30 text-center relative overflow-hidden">
            <div className="max-w-xl mx-auto space-y-4">
              <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                Gostou desta estrutura para a sua clínica?
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300">
                Criamos um site exclusivo com a sua identidade, fotos reais dos seus ambientes e direcionamento direto para o seu WhatsApp.
              </p>
              <div className="pt-2">
                <a
                  href={getWhatsAppLink(`Olá! Vi o modelo conceitual ${clinic.name} na CodeLabx e gostaria de um projeto com esse nível de acabamento.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-[0_0_25px_rgba(59,130,246,0.6)] transition"
                >
                  <Sparkles className="w-4 h-4 text-cyan-300" />
                  <span>Solicitar Orçamento Deste Modelo</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
