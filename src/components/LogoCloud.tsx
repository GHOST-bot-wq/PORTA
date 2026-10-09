import React from 'react';
import { Cpu, Globe, Server, Layers, Zap, Code2, Smartphone } from 'lucide-react';

export const LogoCloud: React.FC = () => {
  const techStack = [
    { name: "Next.js", icon: Code2, desc: "Framework de Alta Performance" },
    { name: "React 18", icon: Layers, desc: "Interfaces Dinâmicas" },
    { name: "Tailwind CSS", icon: Zap, desc: "Design Customizado & Leve" },
    { name: "TypeScript", icon: Cpu, desc: "Arquitetura Robusta" },
    { name: "Cloudflare CDN", icon: Globe, desc: "Distribuição Global < 50ms" },
    { name: "Vercel Edge", icon: Server, desc: "Infraestrutura Serverless" },
    { name: "WhatsApp API", icon: Smartphone, desc: "Conversão Direta" }
  ];

  return (
    <section className="relative py-12 border-y border-white/[0.06] bg-space-950/40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs uppercase tracking-widest text-zinc-500 font-semibold mb-8">
          Tecnologias de padrão internacional que sustentam cada projeto CodeLabx
        </p>

        {/* Horizontal Tech Bar (Matching Frame 2.0s) */}
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-16 opacity-70 hover:opacity-100 transition-opacity duration-500">
          {techStack.map((tech) => {
            const Icon = tech.icon;
            return (
              <div 
                key={tech.name} 
                className="flex items-center gap-2.5 text-zinc-400 hover:text-white transition-colors group cursor-default"
                title={tech.desc}
              >
                <Icon className="w-4 h-4 text-zinc-400 group-hover:text-cyan-400 transition-colors" />
                <span className="text-xs sm:text-sm font-semibold tracking-wider font-mono">
                  {tech.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
