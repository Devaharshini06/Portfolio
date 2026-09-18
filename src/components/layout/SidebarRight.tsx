import React from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { ArrowUpRight, FileText, CheckCircle2, Award, Sparkles, Mail, Send } from 'lucide-react';

export const SidebarRight: React.FC = () => {
  const { profile, addToast } = usePortfolio();

  const handleContactClick = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <aside className="sidebar-right bg-[#080808] border-l border-white/10 p-7 flex flex-col gap-6 h-screen sticky top-0 overflow-y-auto z-30">
      {/* Data Point 1: Academic Merit */}
      <div className="pb-5 border-b border-white/10 space-y-1.5">
        <span className="mono text-[9px] text-[#C5A059] block tracking-wider font-semibold">ACADEMIC MERIT</span>
        <div className="font-serif-title text-3xl font-normal italic text-[#F4F4F0]">
          9.4 CGPA <span className="text-xs text-[#C5A059] font-mono not-italic font-normal">/ 10.0</span>
        </div>
        <div className="text-[11px] text-white/60 font-mono leading-relaxed">
          Vignan's Institute (B.Tech AI) &bull; IIT Madras (BS Data Science)
        </div>
      </div>

      {/* Data Point 2: Recent Practice */}
      <div className="pb-5 border-b border-white/10 space-y-3">
        <span className="mono text-[9px] text-[#C5A059] block tracking-wider font-semibold">EXPERIENCE ARCHIVE</span>

        <div className="space-y-1">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-mono font-bold text-white">HEITS Pvt. Ltd.</h4>
            <span className="text-[9px] font-mono text-red-400 bg-red-950/40 px-1 border border-red-900/50">INTERN</span>
          </div>
          <p className="text-[11px] text-white/60 font-mono">
            AI & Software Engineering &bull; Visakhapatnam
          </p>
        </div>

        <div className="space-y-1 pt-1">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-mono font-bold text-white">Deloitte Australia</h4>
            <span className="text-[9px] font-mono text-[#C5A059] bg-[#C5A059]/10 px-1 border border-[#C5A059]/30">FORAGE</span>
          </div>
          <p className="text-[11px] text-white/60 font-mono">
            Data Analytics Simulation &bull; 2025
          </p>
        </div>
      </div>

      {/* Data Point 3: Tech Stack */}
      <div className="pb-5 border-b border-white/10 space-y-2">
        <span className="mono text-[9px] text-[#C5A059] block tracking-wider font-semibold">SYSTEM STACK</span>
        <div className="text-[11px] text-white/70 font-mono leading-relaxed space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-white/40">Core:</span>
            <span>Python, TypeScript, SQL</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-white/40">GenAI:</span>
            <span className="text-[#C5A059]">LangChain, RAG, Ollama</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-white/40">MLOps:</span>
            <span>XGBoost, MLflow, Docker</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-white/40">Backend:</span>
            <span>FastAPI, Node, Postgres</span>
          </div>
        </div>
      </div>

      {/* Data Point 4: Resume link */}
      <div className="space-y-2">
        <span className="mono text-[9px] text-white/40 block tracking-wider">VERIFIED CREDENTIALS</span>
        <a
          href={profile.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-between p-3 bg-[#111111] border border-white/10 text-xs font-mono text-white/80 hover:text-[#C5A059] hover:border-[#C5A059]/40 transition-all group"
        >
          <div className="flex items-center gap-2">
            <FileText className="w-3.5 h-3.5 text-[#C5A059]" />
            <span className="font-medium text-[11px]">Curriculum Vitae</span>
          </div>
          <ArrowUpRight className="w-3.5 h-3.5 text-white/40 group-hover:text-[#C5A059] transition-colors" />
        </a>
      </div>

      {/* Circular Button CTA */}
      <div className="mt-auto pt-4 flex flex-col items-center justify-center">
        <button
          onClick={handleContactClick}
          className="btn-circle mono font-bold hover:scale-105 cursor-pointer"
        >
          INITIATE<br />SIGNAL
        </button>
        <span className="text-[9px] font-mono text-white/40 mt-2 text-center truncate max-w-full">
          {profile.email}
        </span>
      </div>
    </aside>
  );
};
