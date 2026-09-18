import React from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import {
  ArrowLeft,
  Github,
  ExternalLink,
  ShieldCheck,
  AlertTriangle,
  Lightbulb,
  Cpu,
  Workflow,
  CheckCircle2,
  Sparkles,
  BookOpen,
  Compass
} from 'lucide-react';

interface ProjectDetailPageProps {
  slug: string;
}

export const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({ slug }) => {
  const { projects, navigate } = usePortfolio();

  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return (
      <div className="py-24 max-w-4xl mx-auto px-4 text-center space-y-4 bg-[#080808]">
        <h2 className="font-serif-title text-3xl font-normal text-[#F4F4F0]">System Dossier Not Found</h2>
        <p className="text-xs font-mono text-white/50">The requested technical specification could not be located in the registry.</p>
        <button
          onClick={() => navigate('/projects')}
          className="btn-editorial"
        >
          Return to System Registry
        </button>
      </div>
    );
  }

  return (
    <div className="py-8 sm:py-12 bg-[#080808] min-h-screen text-[#F4F4F0]">
      <div className="space-y-8">
        {/* Top Back Navigation */}
        <button
          onClick={() => navigate('/projects')}
          className="inline-flex items-center gap-2 px-3.5 py-2 bg-[#111111] border border-white/10 text-xs text-white/70 hover:text-[#C5A059] hover:border-[#C5A059]/50 transition-colors font-mono cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>RETURN TO SYSTEM REGISTRY</span>
        </button>

        {/* Hero Block */}
        <div className="p-7 sm:p-9 bg-[#0e0e0e] border border-white/10 space-y-6 relative overflow-hidden">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-4">
            <div className="flex flex-wrap items-center gap-2">
              {project.categories.map(cat => (
                <span
                  key={cat}
                  className="px-2.5 py-1 bg-red-950/40 text-red-300 border border-red-800/40 text-xs font-mono font-semibold"
                >
                  {cat}
                </span>
              ))}
              <span className="px-2.5 py-1 bg-[#141414] text-white/70 border border-white/10 text-xs font-mono">
                {project.technicalComplexity} COMPLEXITY DEPTH
              </span>
            </div>

            <span className="mono text-[10px] text-[#C5A059] font-mono">
              SYS ID: {project.slug.toUpperCase()}
            </span>
          </div>

          <h1 className="font-serif-title text-4xl sm:text-5xl md:text-6xl font-normal text-[#F4F4F0] tracking-tight leading-tight">
            {project.title}
          </h1>

          <p className="text-base sm:text-lg text-white/80 font-normal italic border-l-2 border-[#C5A059] pl-4 py-1 font-serif">
            "{project.oneLiner}"
          </p>

          <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-sans font-light">
            {project.fullDescription || project.shortDescription}
          </p>

          {/* Stack Badges */}
          <div className="pt-4 border-t border-white/10 space-y-2">
            <div className="text-[10px] font-mono text-[#C5A059] uppercase tracking-wider font-semibold">
              TECHNOLOGY STACK ARCHITECTURE
            </div>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map(t => (
                <span key={t} className="px-2 py-0.5 bg-[#141414] border border-white/5 text-xs font-mono text-white/70">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/10">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-[#141414] border border-white/10 hover:border-[#C5A059] text-white text-xs font-mono font-semibold transition-all flex items-center gap-2"
              >
                <Github className="w-4 h-4 text-[#C5A059]" />
                <span>Source Code Repository</span>
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-crimson flex items-center gap-2 text-xs font-mono"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Execute Live Prototype</span>
              </a>
            )}
          </div>
        </div>

        {/* Detailed Sections */}
        <div className="space-y-6">
          {/* Problem Statement */}
          <div className="p-6 sm:p-7 bg-[#0e0e0e] border border-white/10 space-y-3">
            <div className="flex items-center gap-2.5 text-red-400 font-mono text-xs font-semibold uppercase tracking-wider">
              <AlertTriangle className="w-4 h-4 text-red-500" />
              <span>01. Technical Bottleneck &amp; Challenge</span>
            </div>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-sans font-light">
              {project.problem}
            </p>
          </div>

          {/* Solution & Approach */}
          <div className="p-6 sm:p-7 bg-[#0e0e0e] border border-white/10 space-y-3">
            <div className="flex items-center gap-2.5 text-[#C5A059] font-mono text-xs font-semibold uppercase tracking-wider">
              <Lightbulb className="w-4 h-4 text-[#C5A059]" />
              <span>02. Engineering Approach &amp; Solution</span>
            </div>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-sans font-light">
              {project.solution}
            </p>
          </div>

          {/* Architecture / How it Works */}
          {project.architecture && (
            <div className="p-6 sm:p-7 bg-[#0e0e0e] border border-white/10 space-y-3">
              <div className="flex items-center gap-2.5 text-[#C5A059] font-mono text-xs font-semibold uppercase tracking-wider">
                <Workflow className="w-4 h-4 text-[#C5A059]" />
                <span>03. Architecture &amp; Data Pipeline Flow</span>
              </div>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-mono bg-[#141414] p-4 border border-white/5">
                {project.architecture}
              </p>
            </div>
          )}

          {/* My Contribution */}
          <div className="p-6 sm:p-7 bg-[#0e0e0e] border border-white/10 space-y-3">
            <div className="flex items-center gap-2.5 text-white/90 font-mono text-xs font-semibold uppercase tracking-wider">
              <Cpu className="w-4 h-4 text-[#C5A059]" />
              <span>04. Personal Engineering Contributions</span>
            </div>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-sans font-light">
              {project.contribution}
            </p>
          </div>

          {/* Challenges & Solutions */}
          {project.challenges && (
            <div className="p-6 sm:p-7 bg-[#0e0e0e] border border-white/10 space-y-3">
              <div className="flex items-center gap-2.5 text-amber-400 font-mono text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>05. Critical Engineering Challenges Overcome</span>
              </div>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-sans font-light">
                {project.challenges}
              </p>
            </div>
          )}

          {/* Results / Outcomes */}
          {project.outcomes && (
            <div className="p-6 sm:p-7 bg-[#0e0e0e] border border-white/10 space-y-3">
              <div className="flex items-center gap-2.5 text-emerald-400 font-mono text-xs font-semibold uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>06. Empirical Outcomes &amp; Benchmark Metrics</span>
              </div>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-sans font-light">
                {project.outcomes}
              </p>
            </div>
          )}

          {/* Lessons Learned */}
          {project.lessonsLearned && (
            <div className="p-6 sm:p-7 bg-[#0e0e0e] border border-white/10 space-y-3">
              <div className="flex items-center gap-2.5 text-white/80 font-mono text-xs font-semibold uppercase tracking-wider">
                <BookOpen className="w-4 h-4 text-[#C5A059]" />
                <span>07. Core Architectural Lessons</span>
              </div>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-sans font-light">
                {project.lessonsLearned}
              </p>
            </div>
          )}

          {/* Future Improvements */}
          {project.futureImprovements && (
            <div className="p-6 sm:p-7 bg-[#0e0e0e] border border-white/10 space-y-3">
              <div className="flex items-center gap-2.5 text-white/60 font-mono text-xs font-semibold uppercase tracking-wider">
                <Compass className="w-4 h-4 text-white/50" />
                <span>08. Future Roadmap &amp; Scaling Vectors</span>
              </div>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-sans font-light">
                {project.futureImprovements}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
