import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { LogoCloud } from './components/LogoCloud';
import { ProblemSection } from './components/ProblemSection';
import { ArchitectureSection } from './components/ArchitectureSection';
import { BentoCapabilities } from './components/BentoCapabilities';
import { FoundationPyramid } from './components/FoundationPyramid';
import { DemonstrativeProjects } from './components/DemonstrativeProjects';
import { DifferentiatorsSection } from './components/DifferentiatorsSection';
import { ProcessSection } from './components/ProcessSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#05060B] text-zinc-100 stars-background relative selection:bg-blue-600 selection:text-white">
      {/* Outer Viewport Canvas Frame (Reproducing the exact floating display frame seen throughout the reference video) */}
      <div className="relative mx-auto max-w-[1720px] p-2 sm:p-4 md:p-6 lg:p-8">
        <div className="relative rounded-2xl md:rounded-3xl border border-white/[0.08] bg-[#070913]/90 shadow-[0_20px_100px_rgba(0,0,0,0.95)] overflow-hidden">
          
          {/* Header Navigation */}
          <Header />

          {/* Main Page Flow Matching Reference Frames 0.0s -> 14.0s */}
          <main>
            {/* 0.0s - 1.5s: Hero section with diagonal beam and dashboard mockup */}
            <Hero />

            {/* 2.0s: Tech Stack & Authority Logos Bar */}
            <LogoCloud />

            {/* 2.0s - 3.5s: Problem and Opportunity (Issues arise every day) */}
            <ProblemSection />

            {/* 4.0s - 6.5s: Unified Architecture & Glowing Central Core Chip */}
            <ArchitectureSection />

            {/* 7.0s - 9.5s: All-in-one capabilities bento grid */}
            <BentoCapabilities />

            {/* 10.0s - 11.5s: Built on a solid foundation isometric card stack */}
            <FoundationPyramid />

            {/* Fase 3.6: 3 Demonstrative Aesthetic Clinic Sites */}
            <DemonstrativeProjects />

            {/* Fase 3.7: Diferenciais de alto impacto */}
            <DifferentiatorsSection />

            {/* Fase 3.8: Processo de trabalho em 5 etapas */}
            <ProcessSection />

            {/* 12.0s - 13.5s: Final CTA with vertical cone spotlight beam */}
            <FinalCtaSection />
          </main>

          {/* 12.0s - 13.5s Bottom: Minimalist dark footer */}
          <Footer />

        </div>
      </div>
    </div>
  );
};

export default App;
