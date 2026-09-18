import React from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { UserCheck, GraduationCap, Cpu, Layers, Workflow, ArrowRight } from 'lucide-react';

export const QuickIntro: React.FC = () => {
  const { navigate } = usePortfolio();

  return (
    <section className="py-12 sm:py-16 border-b border-white/10 relative bg-[#080808]">
      <div className="space-y-8">
        <div className="flex items-center justify-between border-b border-white/10 pb-2">
          <span className="mono text-[10px] text-[#C5A059] uppercase tracking-widest">[02] BIOGRAPHY &amp; ENGINEERING PHILOSOPHY</span>
          <span className="mono text-[10px] text-white/40">DUAL ACADEMIC RIGOR</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left info badge */}
          <div className="lg:col-span-5 space-y-5">
            <h2 className="font-serif-title text-3xl sm:text-4xl font-normal text-[#F4F4F0] leading-tight">
              An engineer who designs end-to-end software &amp; intelligent agent architectures.
            </h2>

            <p className="text-sm text-white/70 leading-relaxed font-sans font-light">
              I am pursuing a dual academic path: <strong className="text-white font-medium">B.Tech in Artificial Intelligence</strong> (CGPA 9.4) at Vignan's Institute of Information Technology alongside a <strong className="text-[#C5A059] font-medium">BS in Data Science and Applications</strong> from IIT Madras.
            </p>

            <div className="p-4 bg-[#111111] border border-white/10 space-y-2 relative">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-[#181818] text-[#C5A059] border border-white/10">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono font-bold text-white">Dual Degree Distinction</div>
                  <div className="text-[11px] text-white/60 font-mono">B.Tech AI (9.4 CGPA) &bull; IIT Madras BS Data Science</div>
                </div>
              </div>
            </div>

            <button
              onClick={() => navigate('/about')}
              className="inline-flex items-center gap-2 text-xs font-mono text-[#C5A059] hover:text-white transition-colors group cursor-pointer"
            >
              <span>INSPECT COMPLETE DOSSIER &amp; ARCHITECTURE BACKGROUND</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right 4 Pillars Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 bg-[#0e0e0e] border border-white/10 space-y-2 hover:border-[#C5A059]/50 transition-all">
              <div className="w-8 h-8 bg-[#181818] text-[#C5A059] flex items-center justify-center border border-white/10">
                <Layers className="w-4 h-4" />
              </div>
              <h3 className="text-xs font-mono font-bold text-white uppercase tracking-wider">Complete System Builder</h3>
              <p className="text-xs text-white/70 leading-relaxed font-sans font-light">
                I don't stop at notebook models or UI mockups. I connect APIs, databases, authentication, caching, and state machines into complete production software.
              </p>
            </div>

            <div className="p-5 bg-[#0e0e0e] border border-white/10 space-y-2 hover:border-[#C5A059]/50 transition-all">
              <div className="w-8 h-8 bg-[#181818] text-[#C5A059] flex items-center justify-center border border-white/10">
                <Cpu className="w-4 h-4" />
              </div>
              <h3 className="text-xs font-mono font-bold text-white uppercase tracking-wider">AI + Product Thinking</h3>
              <p className="text-xs text-white/70 leading-relaxed font-sans font-light">
                AI should serve explicit user value, not act as a novelty wrapper. I integrate LLMs and machine learning where they deliver real workflow transformation.
              </p>
            </div>

            <div className="p-5 bg-[#0e0e0e] border border-white/10 space-y-2 hover:border-[#C5A059]/50 transition-all">
              <div className="w-8 h-8 bg-[#181818] text-[#C5A059] flex items-center justify-center border border-white/10">
                <Workflow className="w-4 h-4" />
              </div>
              <h3 className="text-xs font-mono font-bold text-white uppercase tracking-wider">Automation Mindset</h3>
              <p className="text-xs text-white/70 leading-relaxed font-sans font-light">
                I thrive on converting manual, repetitive processes—such as QA browser testing or CRM lead updates—into autonomous background workflows.
              </p>
            </div>

            <div className="p-5 bg-[#0e0e0e] border border-white/10 space-y-2 hover:border-[#C5A059]/50 transition-all">
              <div className="w-8 h-8 bg-[#181818] text-[#C5A059] flex items-center justify-center border border-white/10">
                <UserCheck className="w-4 h-4" />
              </div>
              <h3 className="text-xs font-mono font-bold text-white uppercase tracking-wider">Learn by Implementing</h3>
              <p className="text-xs text-white/70 leading-relaxed font-sans font-light">
                Every tool in my technical stack was acquired by building real projects, benchmarking failure cases, and refactoring production code.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
