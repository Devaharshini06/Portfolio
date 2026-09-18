import React from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { GraduationCap, Award, MapPin, Calendar } from 'lucide-react';

export const EducationSection: React.FC = () => {
  const { education } = usePortfolio();

  return (
    <section id="education" className="py-12 sm:py-16 border-b border-white/10 relative bg-[#080808]">
      <div className="space-y-8">
        <div className="border-b border-white/10 pb-4 flex flex-col md:flex-row md:items-end justify-between gap-2">
          <div>
            <div className="flex items-center gap-2 mono text-[10px] text-[#C5A059] uppercase tracking-widest mb-1">
              <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse"></span>
              <span>ACADEMIC FOUNDATION &amp; DUAL-DEGREE RIGOR</span>
            </div>
            <h2 className="font-serif-title text-3xl sm:text-4xl md:text-5xl font-normal text-[#F4F4F0] tracking-tight">
              Academic Credentials
            </h2>
          </div>
          <span className="mono text-[10px] text-white/50">
            MERIT-VERIFIED ARCHIVE
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((edu, idx) => (
            <div
              key={edu.id}
              className="system-panel p-6 sm:p-7 bg-[#0e0e0e] border border-white/10 hover:border-[#C5A059]/50 transition-all space-y-4 flex flex-col justify-between relative"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-3 pb-3 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <span className="mono text-xs text-red-500 font-bold">DEG 0{idx + 1}</span>
                    <div className="p-2 bg-[#141414] border border-white/10 text-[#C5A059]">
                      <GraduationCap className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-mono text-white/70 bg-[#141414] px-2.5 py-1 border border-white/10">
                    <Calendar className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>{edu.startYear} – {edu.endYear}</span>
                  </div>
                </div>

                <div>
                  <h3 className="font-serif-title text-2xl font-normal text-[#F4F4F0] leading-snug">{edu.degree}</h3>
                  <div className="text-xs font-mono text-[#C5A059] mt-1">{edu.institution}</div>
                  {edu.location && (
                    <div className="text-[11px] text-white/50 mt-1 flex items-center gap-1 font-mono">
                      <MapPin className="w-3 h-3 text-white/40" />
                      {edu.location}
                    </div>
                  )}
                </div>

                {edu.grade && (
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-red-950/40 text-red-300 border border-red-800/40 text-xs font-mono font-bold">
                    <Award className="w-3.5 h-3.5 text-red-400" />
                    <span>{edu.grade}</span>
                  </div>
                )}

                <p className="text-xs text-white/70 leading-relaxed pt-3 border-t border-white/10 font-sans font-light">
                  {edu.description}
                </p>
              </div>

              <div className="pt-3 border-t border-white/10 text-[10px] font-mono text-white/40 flex items-center justify-between">
                <span>ENROLLMENT STATUS: ACTIVE CANDIDATE</span>
                <span className="text-[#C5A059]">EXPECTED '27</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
