import React, { useState } from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { Terminal, Search, ShieldCheck, Menu, X, ArrowUpRight, FileText } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { currentPath, navigate, setIsCommandPaletteOpen, isAdminLoggedIn, profile } = usePortfolio();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Works', path: '/projects' },
    { label: 'Domains', path: '/#domains' },
    { label: 'Process', path: '/#skills' },
    { label: 'Curriculum', path: '/#experience' },
    { label: 'Archive', path: '/#github' },
    { label: 'Biography', path: '/about' },
    { label: 'Contact', path: '/#contact' },
  ];

  const handleNavClick = (path: string) => {
    setIsMobileMenuOpen(false);
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
    <header className="lg:hidden sticky top-0 z-40 bg-[#080808]/95 backdrop-blur-md border-b border-white/10 py-3.5 px-4 sm:px-6">
      <div className="flex items-center justify-between">
        {/* Brand */}
        <button
          onClick={() => navigate('/')}
          className="text-left focus:outline-none flex items-center gap-2 cursor-pointer"
        >
          <span className="font-serif-title text-xl font-bold italic text-[#F4F4F0] hover:text-[#C5A059] transition-colors">
            V. Devaharshini
          </span>
          <span className="mono text-[9px] px-2 py-0.5 rounded-none bg-[#C5A059]/10 text-[#C5A059] border border-[#C5A059]/30 font-semibold tracking-wider">
            AI CORE
          </span>
        </button>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsCommandPaletteOpen(true)}
            className="p-2 rounded-none bg-[#111111] border border-white/10 text-white/70 hover:text-[#C5A059] hover:border-[#C5A059]/40 transition-all cursor-pointer"
            title="Search (⌘K)"
          >
            <Search className="w-4 h-4" />
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-none bg-[#111111] border border-white/10 text-white hover:text-[#C5A059] transition-all cursor-pointer"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5 text-[#C5A059]" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="bg-[#0e0e0e] border-b border-white/10 -mx-4 -mb-3.5 mt-3.5 p-5 space-y-4 animate-in fade-in slide-in-from-top-2">
          <nav className="grid grid-cols-2 gap-2">
            {navItems.map((item, idx) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.path)}
                className="px-3 py-2.5 rounded-none bg-[#141414] border border-white/5 text-left text-xs font-mono text-white/80 hover:text-[#C5A059] hover:border-[#C5A059]/40 transition-all flex items-center justify-between"
              >
                <span>{item.label}</span>
                <span className="text-[10px] text-white/30 font-mono">0{idx + 1}</span>
              </button>
            ))}
          </nav>

          <div className="pt-3 border-t border-white/10 flex items-center gap-2">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                navigate('/admin');
              }}
              className="flex-1 py-2 px-3 rounded-none bg-[#141414] border border-white/10 text-xs font-mono text-white/80 hover:text-[#C5A059] flex items-center justify-center gap-1.5"
            >
              <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
              <span>Admin CMS</span>
            </button>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2 px-3 rounded-none bg-[#991B1B] text-white font-mono text-xs flex items-center justify-center gap-1.5 hover:bg-[#b91c1c] transition-colors"
            >
              <FileText className="w-4 h-4" />
              <span>Resume PDF</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
