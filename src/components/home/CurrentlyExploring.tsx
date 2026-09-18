import React from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { Compass, Sparkles } from 'lucide-react';

export const CurrentlyExploring: React.FC = () => {
  const { exploringTopics } = usePortfolio();

  return (
    <section id="exploring" className="py-12 sm:py-16 border-b border-white/10 relative bg-[#080808]">
      <div className="space-y-8">
        <div className="border-b border-white/10 pb-4 flex flex-col md:flex-row md:items-end justify-between gap-2">
          <div>
            <div className="flex items-center gap-2 mono text-[10px] text-[#C5A059] uppercase tracking-widest mb-1">
              <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse"></span>
              <span>EXPERIMENTAL HORIZON &amp; R&amp;D INITIATIVES</span>
            </div>
            <h2 className="font-serif-title text-3xl sm:text-4xl md:text-5xl font-normal text-[#F4F4F0] tracking-tight">
              Currently Exploring
            </h2>
          </div>
          <span className="mono text-[10px] text-white/50">
            ADVANCED AI &amp; INFRASTRUCTURE
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {exploringTopics.map((topic, idx) => (
            <div
              key={topic.id}
              className="system-panel p-5 bg-[#0e0e0e] border border-white/10 hover:border-[#C5A059]/50 transition-all space-y-3 relative group"
            >
              <div className="flex items-center justify-between pb-2 border-b border-white/10 font-mono">
                <span className="text-[9px] text-red-500 font-bold uppercase tracking-wider">
                  R&amp;D [{idx + 1 < 10 ? `0${idx + 1}` : idx + 1}] &bull; {topic.category}
                </span>
                <span className="text-[9px] px-2 py-0.5 bg-red-950/40 text-red-300 border border-red-800/40 font-bold">
                  {topic.status}
                </span>
              </div>

              <h3 className="font-serif-title text-xl font-normal text-[#F4F4F0] group-hover:text-[#C5A059] transition-colors leading-snug">
                {topic.title}
              </h3>

              <p className="text-xs text-white/70 leading-relaxed font-sans font-light">
                {topic.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
