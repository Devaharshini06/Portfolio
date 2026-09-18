import React from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { ProjectCard } from '../projects/ProjectCard';
import { ArrowRight, Layers, Sparkles } from 'lucide-react';

export const FeaturedProjects: React.FC = () => {
  const { projects, navigate } = usePortfolio();

  const featured = projects
    .filter(p => p.published && p.featured)
    .slice(0, 6);

  return (
    <section id="featured-projects" className="py-12 sm:py-16 border-b border-white/10 relative bg-[#080808]">
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-4">
          <div>
            <div className="flex items-center gap-2 mono text-[10px] text-[#C5A059] uppercase tracking-widest mb-1">
              <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse"></span>
              <span>VERIFIED PRODUCTION IMPLEMENTATIONS</span>
            </div>
            <h2 className="font-serif-title text-3xl sm:text-4xl md:text-5xl font-normal text-[#F4F4F0] tracking-tight">
              Systems &amp; Architecture Works
            </h2>
          </div>

          <button
            onClick={() => navigate('/projects')}
            className="btn-editorial flex items-center gap-2 group shrink-0 cursor-pointer"
          >
            <span>REGISTRY ARCHIVE ({projects.filter(p => p.published).length})</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featured.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};
