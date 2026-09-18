import React, { useState } from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { Code2, Terminal, Cpu, Database, Wrench, Shield, Bot, Layout, Layers } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const { skills } = usePortfolio();
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categoryIcons: Record<string, any> = {
    'Programming': Code2,
    'Frontend': Layout,
    'Backend': Terminal,
    'Databases': Database,
    'AI / ML': Cpu,
    'Generative AI': Bot,
    'Automation': Layers,
    'Developer Tools': Wrench,
    'Security / Testing': Shield
  };

  const categories: string[] = ['All', ...Array.from<string>(new Set(skills.map(s => String(s.category))))];

  const filteredSkills = skills.filter(s =>
    activeCategory === 'All' ? true : s.category === activeCategory
  );

  const grouped: { categoryName: string; items: typeof skills }[] = categories
    .filter((c): c is string => c !== 'All')
    .map(cat => ({
      categoryName: cat,
      items: filteredSkills.filter(s => s.category === cat)
    }))
    .filter(g => g.items.length > 0);

  return (
    <section className="py-12 sm:py-16 border-b border-white/10 relative bg-[#080808]">
      <div className="space-y-8">
        <div className="border-b border-white/10 pb-4 flex flex-col md:flex-row md:items-end justify-between gap-2">
          <div>
            <div className="flex items-center gap-2 mono text-[10px] text-[#C5A059] uppercase tracking-widest mb-1">
              <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse"></span>
              <span>TECHNICAL ECOSYSTEM &amp; CAPABILITY MATRIX</span>
            </div>
            <h2 className="font-serif-title text-3xl sm:text-4xl md:text-5xl font-normal text-[#F4F4F0] tracking-tight">
              Tools &amp; Stack Registry
            </h2>
          </div>
          <span className="mono text-[10px] text-white/50">
            {skills.length} VERIFIED STACK ITEMS
          </span>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 text-xs font-mono shrink-0 transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#C5A059] text-black font-bold'
                    : 'bg-[#111111] text-white/70 border border-white/10 hover:border-white/30'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Grouped Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {grouped.map((group) => {
            const CategoryIcon = categoryIcons[group.categoryName] || Code2;
            return (
              <div
                key={group.categoryName}
                className="system-panel p-5 bg-[#0e0e0e] border border-white/10 space-y-4 hover:border-[#C5A059]/40 transition-all relative"
              >
                <div className="flex items-center gap-2.5 pb-2 border-b border-white/10">
                  <div className="p-1.5 bg-[#141414] border border-white/10 text-[#C5A059]">
                    <CategoryIcon className="w-4 h-4" />
                  </div>
                  <h3 className="text-xs font-bold text-white font-mono uppercase tracking-wider">
                    {group.categoryName}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2 pt-1">
                  {group.items.map((skill) => (
                    <div
                      key={skill.id}
                      className="px-2.5 py-1 bg-[#141414] border border-white/5 flex items-center gap-2 group hover:border-[#C5A059]/40 transition-all"
                    >
                      <span className="text-xs text-white/80 font-mono">
                        {skill.skillName}
                      </span>
                      <span className="text-[8px] font-mono px-1 py-0.2 bg-[#080808] text-[#C5A059] border border-[#C5A059]/30">
                        {skill.proficiencyLabel}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
