import React from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { Briefcase, Calendar, MapPin, ChevronRight, Activity } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  const { experiences } = usePortfolio();

  return (
    <section id="experience" className="py-12 sm:py-16 border-b border-white/10 relative bg-[#080808]">
      <div className="space-y-8">
        <div className="border-b border-white/10 pb-4 flex flex-col md:flex-row md:items-end justify-between gap-2">
          <div>
            <div className="flex items-center gap-2 mono text-[10px] text-[#C5A059] uppercase tracking-widest mb-1">
              <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse"></span>
              <span>PROFESSIONAL &amp; INDUSTRY PRACTICE</span>
            </div>
            <h2 className="font-serif-title text-3xl sm:text-4xl md:text-5xl font-normal text-[#F4F4F0] tracking-tight">
              Experience Archive
            </h2>
          </div>
          <span className="mono text-[10px] text-white/50">
            RECORDED TIMELINE
          </span>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <div
              key={exp.id}
              className="system-panel p-6 sm:p-8 bg-[#0e0e0e] border border-white/10 space-y-5 hover:border-[#C5A059]/50 transition-all relative"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/10">
                <div className="space-y-1">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-red-500 font-bold">EXP 0{idx + 1}</span>
                    <h3 className="font-serif-title text-2xl font-normal text-[#F4F4F0]">{exp.role}</h3>
                    {exp.isCurrent && (
                      <span className="px-2 py-0.5 bg-red-950/40 text-red-300 border border-red-800/40 text-[9px] font-mono font-bold tracking-wider">
                        ACTIVE PRACTICE
                      </span>
                    )}
                  </div>
                  <div className="text-xs font-mono text-[#C5A059] flex items-center gap-2">
                    <span className="font-semibold">{exp.company}</span>
                    <span className="text-white/30">&bull;</span>
                    <span className="text-white/50 text-xs font-normal flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-white/40" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-mono text-white/70 bg-[#141414] px-3 py-1.5 border border-white/10 w-fit">
                  <Calendar className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>
                    {exp.startDate} – {exp.isCurrent ? 'Present' : exp.endDate}
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-sans font-light">
                {exp.description}
              </p>

              {/* Responsibilities */}
              <div className="space-y-2">
                <div className="mono text-[9px] text-[#C5A059] uppercase font-bold tracking-wider">
                  CORE TECHNICAL CONTRIBUTIONS:
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {exp.responsibilities.map((resp, i) => (
                    <div
                      key={i}
                      className="p-3 bg-[#141414] border border-white/5 text-xs text-white/80 leading-relaxed flex items-start gap-2 font-mono"
                    >
                      <ChevronRight className="w-3.5 h-3.5 text-red-400 shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="pt-3 border-t border-white/10 flex flex-wrap gap-1.5 items-center">
                <span className="mono text-[9px] text-white/40 mr-2 uppercase tracking-wider">APPLIED STACK:</span>
                {exp.technologies.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 bg-[#141414] border border-white/5 text-[10px] font-mono text-white/70"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
