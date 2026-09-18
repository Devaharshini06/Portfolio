import React, { useState } from 'react';
import { Project } from '../../types';
import { usePortfolio } from '../../context/PortfolioContext';
import { Github, ExternalLink, ArrowRight, Sparkles, Terminal, Activity, Layers } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const { navigate } = usePortfolio();
  const [isHovered, setIsHovered] = useState(false);

  // Format index as 01, 02, etc.
  const displayIndex = index !== undefined 
    ? (index < 9 ? `0${index + 1}` : `${index + 1}`)
    : (project.displayOrder !== undefined ? (project.displayOrder < 10 ? `0${project.displayOrder}` : `${project.displayOrder}`) : 'SYS');

  return (
    <div 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="system-panel group p-6 sm:p-7 flex flex-col justify-between relative bg-[#0e0e0e] border border-white/10 hover:border-[#C5A059]/50 transition-all duration-300"
    >
      {/* Subtle corner crosshairs */}
      <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/20 group-hover:border-[#C5A059] transition-colors pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/20 group-hover:border-[#C5A059] transition-colors pointer-events-none"></div>

      <div>
        {/* Header Metadata Bar */}
        <div className="flex items-center justify-between gap-3 pb-3 mb-4 border-b border-white/10 font-mono text-[9px]">
          <div className="flex items-center gap-2">
            <span className="text-red-500 font-bold tracking-wider">[{displayIndex}]</span>
            <span className="text-[#C5A059] uppercase tracking-widest font-semibold">
              {project.categories[0] || 'ENGINEERING'}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {project.featured && (
              <span className="px-1.5 py-0.5 bg-red-950/40 text-red-400 border border-red-900/60 flex items-center gap-1">
                <span className="w-1 h-1 rounded-full bg-red-500 animate-pulse"></span>
                CORE SYS
              </span>
            )}
            <span className="px-1.5 py-0.5 bg-white/5 text-white/60 border border-white/10">
              {project.technicalComplexity} DEPTH
            </span>
          </div>
        </div>

        {/* Title */}
        <h3
          onClick={() => navigate(`/projects/${project.slug}`)}
          className="font-serif-title text-2xl sm:text-3xl font-normal text-[#F4F4F0] group-hover:text-[#C5A059] transition-colors cursor-pointer tracking-tight mb-2 leading-snug"
        >
          {project.title}
        </h3>

        {/* One Liner */}
        <p className="text-xs text-white/70 font-sans font-light leading-relaxed mb-4">
          {project.oneLiner}
        </p>

        {/* Architecture Pipeline Preview */}
        {project.architecture && (
          <div className="p-3 bg-[#141414] border border-white/5 space-y-1 mb-4 font-mono text-[10px]">
            <div className="text-white/40 uppercase tracking-wider flex items-center gap-1.5 text-[9px]">
              <Layers className="w-3 h-3 text-[#C5A059]" />
              <span>ARCHITECTURE BLUEPRINT</span>
            </div>
            <p className="text-white/80 line-clamp-2 leading-relaxed">
              {project.architecture}
            </p>
          </div>
        )}

        {/* Problem / Solution Snapshot */}
        <div className="grid grid-cols-1 gap-2 p-3 bg-[#0a0a0a] border border-white/5 text-[11px] font-sans mb-5">
          <div className="space-y-0.5">
            <span className="text-white/40 font-mono text-[9px] uppercase tracking-wider block">CHALLENGE:</span>
            <span className="text-white/70 line-clamp-2 text-xs leading-relaxed">{project.problem}</span>
          </div>
        </div>
      </div>

      <div>
        {/* Technologies Pills */}
        <div className="flex flex-wrap gap-1.5 mb-5 pt-3 border-t border-white/10">
          {project.technologies.slice(0, 6).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 bg-[#141414] border border-white/5 text-[10px] font-mono text-white/70 group-hover:border-white/10 transition-colors"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 6 && (
            <span className="px-1.5 py-0.5 text-[9px] font-mono text-white/40">
              +{project.technologies.length - 6}
            </span>
          )}
        </div>

        {/* Action Controls */}
        <div className="flex items-center justify-between pt-3 border-t border-white/10">
          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1.5 bg-[#141414] border border-white/10 text-white/70 hover:text-white hover:border-[#C5A059] transition-all flex items-center gap-1.5 text-xs font-mono"
                title="Inspect repository"
              >
                <Github className="w-3.5 h-3.5 text-[#C5A059]" />
                <span className="text-[10px]">SRC</span>
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1.5 bg-red-950/30 border border-red-900/50 text-red-300 hover:text-white hover:border-red-600 transition-all flex items-center gap-1.5 text-xs font-mono"
                title="Execute live prototype"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span className="text-[10px]">LIVE</span>
              </a>
            )}
          </div>

          <button
            onClick={() => navigate(`/projects/${project.slug}`)}
            className="flex items-center gap-1.5 text-xs font-mono text-white/80 group-hover:text-[#C5A059] transition-colors cursor-pointer"
          >
            <span>DOSSIER // SPEC</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};
