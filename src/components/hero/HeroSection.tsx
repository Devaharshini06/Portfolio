import React, { useState } from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { AICore3D } from './AICore3D';
import { AnimatedTerminal } from './AnimatedTerminal';
import { Github, ArrowRight, Code2, Terminal, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const { profile, navigate } = usePortfolio();
  const [showTerminal, setShowTerminal] = useState(false);

  return (
    <section className="py-8 sm:py-12 border-b border-white/10 relative bg-[#080808] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-900/5 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#C5A059]/5 rounded-full blur-3xl pointer-events-none -ml-20"></div>

      <div className="space-y-10 relative z-10">
        {/* Technical Label Eyebrow */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
            <span className="mono text-[10px] text-white/70 tracking-widest">
              [01] SYSTEMS / GENERATIVE AI / ENGINEERING
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="mono text-[9px] px-2.5 py-1 bg-[#C5A059]/10 text-[#C5A059] border border-[#C5A059]/30 font-semibold tracking-wider">
              9.4 CGPA MERIT &bull; B.TECH AI + IIT MADRAS BS
            </span>
          </div>
        </div>

        {/* Hero Main Grid: Typography & Status on Left, 3D Core on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          {/* Left Column: Headline & Status (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <h1 className="font-serif-title text-5xl sm:text-6xl md:text-7xl font-normal leading-[0.94] text-[#F4F4F0] tracking-tight">
                AI ENGINEER<br />
                <span className="text-[#A0A09C]">& </span>
                <span className="italic font-normal text-[#C5A059]">SYSTEM BUILDER.</span>
              </h1>

              <p className="text-base sm:text-lg text-white/70 leading-relaxed font-sans font-light max-w-xl pt-2">
                AI Engineering student building intelligent agents, GenAI applications, full-stack systems, and production-oriented ML workflows.
              </p>
            </div>

            {/* System-Style Status Area */}
            <div className="p-4 bg-[#111111] border border-white/10 space-y-2.5 relative">
              <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#C5A059]/40"></div>
              <div className="flex items-center justify-between">
                <span className="mono text-[9px] text-[#C5A059] tracking-widest font-semibold flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  CURRENTLY BUILDING
                </span>
                <span className="mono text-[9px] text-white/40 font-mono">Q2 &bull; 2026</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
                <div className="flex items-center gap-2 text-white/90 bg-[#161616] p-2 border border-white/5">
                  <span className="text-red-500 font-bold">&gt;</span>
                  <span>GENAI + AGENT SYSTEMS</span>
                </div>
                <div className="flex items-center gap-2 text-white/90 bg-[#161616] p-2 border border-white/5">
                  <span className="text-[#C5A059] font-bold">&gt;</span>
                  <span>MLOPS + AUTOMATION</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() => {
                  const el = document.getElementById('featured-projects');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                  else navigate('/projects');
                }}
                className="btn-crimson flex items-center gap-2 group cursor-pointer"
              >
                <span>EXPLORE SYSTEMS &amp; WORKS</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => {
                  const el = document.getElementById('mlops-spotlight');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-editorial flex items-center gap-2 cursor-pointer"
              >
                <span>MLOPS ARCHITECTURE</span>
              </button>

              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2.5 bg-[#111111] border border-white/10 hover:border-[#C5A059] text-white/80 hover:text-white font-mono text-xs transition-all flex items-center gap-2"
              >
                <Github className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>@Devaharshini06</span>
              </a>
            </div>
          </div>

          {/* Right Column: 3D AI Core Canvas (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="border border-white/10 bg-[#0d0d0d] relative p-1">
              <div className="flex items-center justify-between px-3 py-2 border-b border-white/5 bg-[#141414] font-mono text-[9px] text-white/60">
                <span className="flex items-center gap-1.5 text-[#C5A059]">
                  <Sparkles className="w-3 h-3 text-[#C5A059]" />
                  <span>AI CORE // SPATIAL ENGINE</span>
                </span>
                <span className="text-white/40">THREE.JS / GLSL</span>
              </div>

              {/* 3D Component */}
              <AICore3D />

              {/* Bottom Telemetry Bar */}
              <div className="flex items-center justify-between px-3 py-1.5 border-t border-white/5 bg-[#0a0a0a] font-mono text-[8px] text-white/40">
                <span>ROTATION: GYROSCOPIC</span>
                <span>STATE: OPTIMIZED</span>
              </div>
            </div>
          </div>
        </div>

        {/* Terminal Drawer Toggle */}
        <div className="pt-2 border-t border-white/10">
          <button
            onClick={() => setShowTerminal(!showTerminal)}
            className="flex items-center justify-between w-full py-2 px-3 bg-[#111111] hover:bg-[#161616] border border-white/10 text-xs font-mono text-white/70 hover:text-[#C5A059] transition-all cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <Code2 className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>INTERACTIVE KERNEL INSPECTION // DIAGNOSTICS</span>
            </div>
            <div className="flex items-center gap-1 text-[10px] text-white/40">
              <span>{showTerminal ? 'COLLAPSE' : 'EXPAND KERNEL'}</span>
              {showTerminal ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </div>
          </button>

          {showTerminal && (
            <div className="pt-3 animate-in fade-in slide-in-from-top-2">
              <AnimatedTerminal />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

