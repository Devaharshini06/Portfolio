import React from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { Search, ShieldCheck, Terminal, FileText, ExternalLink, Sparkles, FolderGit2, Cpu, GraduationCap, Github, Mail, User } from 'lucide-react';

export const SidebarLeft: React.FC = () => {
  const { currentPath, navigate, setIsCommandPaletteOpen, isAdminLoggedIn, profile } = usePortfolio();

  const navItems = [
    { label: 'Works & Projects', path: '/projects' },
    { label: 'Core Domains', path: '/#domains' },
    { label: 'Architecture & Process', path: '/#skills' },
    { label: 'Curriculum & Experience', path: '/#experience' },
    { label: 'Open Source Archive', path: '/#github' },
    { label: 'Biography', path: '/about' },
    { label: 'Contact', path: '/#contact' },
  ];

  const handleNavClick = (path: string) => {
    if (path.startsWith('/#')) {
      const sectionId = path.substring(2);
      if (currentPath !== '/') {
        navigate('/');
        setTimeout(() => {
          const el = document.getElementById(sectionId);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(path);
    }
  };

  return (
    <aside className="sidebar-left bg-[#080808] border-r border-white/10 p-7 flex flex-col justify-between h-screen sticky top-0 overflow-y-auto z-30">
      <div className="space-y-8">
        {/* Brand Identity */}
        <div>
          <button
            onClick={() => navigate('/')}
            className="text-left group focus:outline-none block cursor-pointer"
          >
            <div className="font-serif-title text-2xl font-semibold italic text-[#F4F4F0] group-hover:text-[#C5A059] transition-colors leading-tight">
              V. Devaharshini
            </div>
            <div className="mono text-[9px] text-[#C5A059]/80 mt-1 tracking-widest flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse"></span>
              <span>AI LABORATORY // SYS.01</span>
            </div>
          </button>
        </div>

        {/* Command Search Trigger */}
        <button
          onClick={() => setIsCommandPaletteOpen(true)}
          className="w-full flex items-center justify-between px-3 py-2 bg-[#111111] border border-white/10 text-xs text-white/60 hover:text-white hover:border-[#C5A059]/40 transition-all font-mono cursor-pointer"
        >
          <div className="flex items-center gap-2">
            <Search className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Search System</span>
          </div>
          <kbd className="px-1.5 py-0.5 bg-[#1a1a1a] text-[9px] text-white/50 font-mono border border-white/10">
            ⌘K
          </kbd>
        </button>

        {/* Navigation List with Section Numbers */}
        <nav>
          <div className="mono text-[9px] text-white/40 mb-3 uppercase tracking-widest flex items-center justify-between">
            <span>INDEX REGISTRY</span>
            <span>SEC</span>
          </div>
          <ul className="space-y-1.5">
            {navItems.map((item, index) => {
              const isActive = currentPath === item.path;
              return (
                <li key={item.label}>
                  <button
                    onClick={() => handleNavClick(item.path)}
                    className={`text-left text-xs font-mono transition-all flex items-center justify-between w-full py-2 px-2.5 border-l-2 cursor-pointer ${
                      isActive
                        ? 'border-[#991B1B] bg-[#141414] text-[#C5A059] font-medium'
                        : 'border-transparent text-white/70 hover:text-white hover:bg-white/5 hover:border-[#C5A059]/40'
                    }`}
                  >
                    <span className="truncate">{item.label}</span>
                    <span className="text-[10px] opacity-40 font-mono shrink-0 ml-2">0{index + 1}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* CMS Portal Access */}
        <div className="pt-2 border-t border-white/10">
          <button
            onClick={() => navigate('/admin')}
            className={`w-full flex items-center justify-between p-2.5 border text-xs font-mono transition-all cursor-pointer ${
              isAdminLoggedIn
                ? 'bg-amber-950/40 text-amber-300 border-amber-500/40'
                : 'bg-[#111111] border-white/10 text-white/70 hover:border-[#C5A059]/40 hover:text-white'
            }`}
          >
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>{isAdminLoggedIn ? 'Admin CMS (Auth)' : 'System Admin CMS'}</span>
            </div>
            <span className="text-[10px] text-[#C5A059]">→</span>
          </button>
        </div>
      </div>

      {/* Footer Meta */}
      <div className="pt-6 border-t border-white/10 space-y-2 text-xs">
        <div className="mono text-[9px] text-white/40">SYSTEM AVAILABILITY</div>
        <div className="font-mono text-xs text-[#F4F4F0] flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>Open for AI Eng Roles</span>
        </div>
        <div className="text-[10px] text-white/50 font-mono">
          B.Tech AI (9.4 CGPA) &bull; IITM BS
        </div>
      </div>
    </aside>
  );
};
