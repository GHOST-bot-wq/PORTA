import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { LogoCloud } from './components/LogoCloud';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { ArchitectureSection } from './components/ArchitectureSection';
import { BentoCapabilities } from './components/BentoCapabilities';
import { FoundationPyramid } from './components/FoundationPyramid';
import { DemonstrativeProjects } from './components/DemonstrativeProjects';
import { DifferentiatorsSection } from './components/DifferentiatorsSection';
import { ProcessSection } from './components/ProcessSection';
import { FaqSection } from './components/FaqSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#05060B] text-zinc-100 stars-background relative selection:bg-blue-600 selection:text-white">
      {/* Outer Viewport Canvas Frame */}
      <div className="relative mx-auto max-w-[1720px] p-2 sm:p-4 md:p-6 lg:p-8">
        <div className="relative rounded-2xl md:rounded-3xl border border-white/[0.08] bg-[#070913]/90 shadow-[0_20px_100px_rgba(0,0,0,0.95)] overflow-hidden">
          
          {/* Header Navigation */}
          <Header />

          {/* Main Page Flow Matching Seções 1 a 10 */}
          <main>
            {/* SEÇÃO 1: Hero / Primeira Dobra */}
            <Hero />

            {/* Tech Logo Cloud */}
            <LogoCloud />

            {/* SEÇÃO 2: Identificação das Dores */}
            <ProblemSection />

            {/* SEÇÃO 3: Apresentação da Solução */}
            <SolutionSection />

            {/* SEÇÃO 4: Serviços */}
            <ArchitectureSection />

            {/* SEÇÃO 5: Benefícios e Experiência */}
            <BentoCapabilities />

            {/* Complemento Técnico de Infraestrutura */}
            <FoundationPyramid />

            {/* SEÇÃO 6: Portfólio Conceitual */}
            <DemonstrativeProjects />

            {/* SEÇÃO 7: Diferenciais */}
            <DifferentiatorsSection />

            {/* SEÇÃO 8: Processo de Criação */}
            <ProcessSection />

            {/* SEÇÃO 9: Perguntas Frequentes (FAQ) */}
            <FaqSection />

            {/* SEÇÃO 10: CTA Final */}
            <FinalCtaSection />
          </main>

          {/* SEÇÃO 11: Rodapé */}
          <Footer />

        </div>
      </div>
    </div>
  );
};

export default App;
