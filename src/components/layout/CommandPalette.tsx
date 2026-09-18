import React, { useState } from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { Search, Home, FolderGit2, Briefcase, Code, User, Github, Linkedin, ShieldCheck, FileText, X } from 'lucide-react';

export const CommandPalette: React.FC = () => {
  const { isCommandPaletteOpen, setIsCommandPaletteOpen, navigate, profile } = usePortfolio();
  const [query, setQuery] = useState('');

  if (!isCommandPaletteOpen) return null;

  const actions = [
    { id: 'home', label: 'Go to Home', icon: Home, action: () => navigate('/') },
    { id: 'projects', label: 'Explore All Projects', icon: FolderGit2, action: () => navigate('/projects') },
    { id: 'about', label: 'About Devaharshini', icon: User, action: () => navigate('/about') },
    { id: 'github', label: 'Open GitHub Profile', icon: Github, action: () => window.open(profile.github, '_blank') },
    { id: 'linkedin', label: 'Open LinkedIn Profile', icon: Linkedin, action: () => window.open(profile.linkedin, '_blank') },
    { id: 'admin', label: 'Admin Dashboard / CMS', icon: ShieldCheck, action: () => navigate('/admin') },
    { id: 'resume', label: 'View Resume', icon: FileText, action: () => window.open(profile.resumeUrl, '_blank') },
  ];

  const filtered = actions.filter(a => a.label.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-start justify-center pt-20 px-4">
      <div className="w-full max-w-xl bg-[#0f141f] border border-slate-800 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        <div className="flex items-center px-4 py-3.5 border-b border-slate-800/80 bg-slate-900/50">
          <Search className="w-5 h-5 text-slate-400 mr-3 shrink-0" />
          <input
            type="text"
            placeholder="Type a command or search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-slate-100 placeholder-slate-500 text-sm focus:outline-none"
            autoFocus
          />
          <button
            onClick={() => setIsCommandPaletteOpen(false)}
            className="text-slate-400 hover:text-white p-1 rounded-md text-xs border border-slate-800"
          >
            ESC
          </button>
        </div>

        <div className="p-2 max-h-80 overflow-y-auto space-y-1">
          {filtered.length === 0 ? (
            <div className="p-4 text-center text-sm text-slate-500">No matching commands found.</div>
          ) : (
            filtered.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    item.action();
                    setIsCommandPaletteOpen(false);
                  }}
                  className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-left text-sm text-slate-300 hover:text-white hover:bg-slate-800/80 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-1.5 rounded-lg bg-slate-800 border border-slate-700/50 text-sky-400 group-hover:border-sky-500/40">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span>{item.label}</span>
                  </div>
                  <span className="text-xs text-slate-500 group-hover:text-slate-400 font-mono">Jump →</span>
                </button>
              );
            })
          )}
        </div>

        <div className="px-4 py-2.5 bg-slate-900/80 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-500">
          <span>Navigation Shortcuts</span>
          <div className="flex items-center gap-2">
            <span className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">↑↓</span>
            <span>Navigate</span>
            <span className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">↵</span>
            <span>Select</span>
          </div>
        </div>
      </div>
    </div>
  );
};
