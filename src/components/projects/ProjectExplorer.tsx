import React from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { ProjectCard } from './ProjectCard';
import { ProjectCategory } from '../../types';
import { Search, Filter, ArrowUpDown, RotateCcw } from 'lucide-react';

export const ProjectExplorer: React.FC = () => {
  const {
    projects,
    selectedCategory,
    setSelectedCategory,
    searchQuery,
    setSearchQuery,
    sortBy,
    setSortBy
  } = usePortfolio();

  const categories: (ProjectCategory | 'ALL')[] = [
    'ALL',
    'Full-Stack',
    'AI',
    'GenAI',
    'Agentic AI',
    'ML',
    'DL',
    'Data Science',
    'Automation',
    'Testing',
    'Security',
    'SaaS'
  ];

  // Filtering
  const filteredProjects = projects.filter((p) => {
    if (!p.published) return false;

    // Category match
    const matchesCategory =
      selectedCategory === 'ALL' ||
      p.categories.some(c => c.toLowerCase() === selectedCategory.toLowerCase());

    // Search query match
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !q ||
      p.title.toLowerCase().includes(q) ||
      p.oneLiner.toLowerCase().includes(q) ||
      p.problem.toLowerCase().includes(q) ||
      p.solution.toLowerCase().includes(q) ||
      p.technologies.some(t => t.toLowerCase().includes(q));

    return matchesCategory && matchesSearch;
  });

  // Sorting
  const sortedProjects = [...filteredProjects].sort((a, b) => {
    if (sortBy === 'Featured') {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return a.displayOrder - b.displayOrder;
    }
    if (sortBy === 'Technical') {
      const rank = { High: 3, Medium: 2, Foundational: 1 };
      return rank[b.technicalComplexity] - rank[a.technicalComplexity];
    }
    if (sortBy === 'Recent') {
      return (b.endDate || '2024').localeCompare(a.endDate || '2024');
    }
    return a.displayOrder - b.displayOrder;
  });

  return (
    <div className="py-8 bg-[#080808] min-h-screen">
      <div className="space-y-8">
        {/* Header */}
        <div className="border-b border-white/10 pb-4">
          <div className="flex items-center gap-2 mono text-[10px] text-[#C5A059] uppercase tracking-widest mb-1">
            <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse"></span>
            <span>SYSTEM REGISTRY &amp; ARCHITECTURAL DOSSIERS</span>
          </div>
          <h1 className="font-serif-title text-4xl sm:text-5xl md:text-6xl font-normal text-[#F4F4F0] tracking-tight">
            Engineered Systems
          </h1>
          <p className="text-xs text-white/70 leading-relaxed mt-2 font-sans font-light max-w-xl">
            Search and inspect full-stack applications, autonomous agent workflows, production MLOps systems, and deep learning classifiers built from first principles.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-[#0e0e0e] p-4 border border-white/10 space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-white/40 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by title, stack (LangGraph, PyTorch, FastAPI, XGBoost), or problem..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-[#141414] border border-white/10 text-xs font-mono text-white placeholder-white/30 focus:outline-none focus:border-[#C5A059]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/50 hover:text-[#C5A059] text-xs font-mono cursor-pointer"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5 bg-[#141414] px-3 py-2 border border-white/10 text-xs font-mono text-white/80">
                <ArrowUpDown className="w-3.5 h-3.5 text-[#C5A059]" />
                <span className="text-white/40">Sort:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="bg-transparent text-white font-mono font-medium focus:outline-none cursor-pointer"
                >
                  <option value="Featured" className="bg-[#141414] text-white">Featured First</option>
                  <option value="Technical" className="bg-[#141414] text-white">Technical Depth</option>
                  <option value="Recent" className="bg-[#141414] text-white">Most Recent</option>
                </select>
              </div>

              {(selectedCategory !== 'ALL' || searchQuery) && (
                <button
                  onClick={() => {
                    setSelectedCategory('ALL');
                    setSearchQuery('');
                  }}
                  className="p-2 bg-[#141414] border border-white/10 text-white/70 hover:text-[#C5A059] transition-colors flex items-center gap-1.5 text-xs font-mono cursor-pointer"
                  title="Reset Filters"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Reset</span>
                </button>
              )}
            </div>
          </div>

          {/* Category Filter Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none pt-2 border-t border-white/10">
            <span className="text-[9px] font-mono text-[#C5A059] shrink-0 mr-1 flex items-center gap-1 uppercase tracking-wider">
              <Filter className="w-3 h-3 text-[#C5A059]" /> DOMAIN:
            </span>
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-2.5 py-1 text-xs font-mono shrink-0 transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#C5A059] text-black font-bold'
                      : 'bg-[#141414] text-white/70 border border-white/5 hover:border-white/20'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Counter */}
        <div className="text-xs font-mono text-white/50 flex items-center justify-between">
          <span>
            Displaying <strong className="text-white">{sortedProjects.length}</strong> system dossier{sortedProjects.length === 1 ? '' : 's'}
            {selectedCategory !== 'ALL' && <span> in <strong className="text-[#C5A059]">{selectedCategory}</strong></span>}
            {searchQuery && <span> matching "<strong className="text-[#C5A059]">{searchQuery}</strong>"</span>}
          </span>
        </div>

        {/* Projects Grid */}
        {sortedProjects.length === 0 ? (
          <div className="p-10 text-center bg-[#0e0e0e] border border-white/10 space-y-3 font-mono">
            <div className="text-white/60 text-xs">No systems matched current search parameters or category filter.</div>
            <button
              onClick={() => {
                setSelectedCategory('ALL');
                setSearchQuery('');
              }}
              className="px-4 py-2 bg-[#141414] border border-[#C5A059] text-[#C5A059] hover:bg-[#C5A059] hover:text-black font-bold text-xs cursor-pointer transition-colors"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sortedProjects.map((project, idx) => (
              <ProjectCard key={project.id} project={project} index={idx} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
