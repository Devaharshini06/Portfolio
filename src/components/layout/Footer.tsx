import React from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { Github, Linkedin, Mail, Phone, ShieldCheck, Terminal } from 'lucide-react';

export const Footer: React.FC = () => {
  const { profile, navigate } = usePortfolio();

  return (
    <footer className="bg-[#080808] border-t border-white/10 py-12 text-white/60">
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-white/10">
          <div className="space-y-1">
            <span className="font-serif-title text-2xl font-normal italic text-[#F4F4F0]">
              Vootakoti Devaharshini
            </span>
            <p className="text-xs text-white/60 font-mono">
              AI Engineer &bull; System Builder &bull; IIT Madras BS Candidate &bull; 9.4 CGPA
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-[#111111] border border-white/10 text-white/80 hover:text-white hover:border-[#C5A059] transition-colors"
              title="GitHub"
            >
              <Github className="w-4 h-4 text-[#C5A059]" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-[#111111] border border-white/10 text-white/80 hover:text-white hover:border-[#C5A059] transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4 text-[#C5A059]" />
            </a>
            <button
              onClick={() => navigate('/admin')}
              className="px-3 py-2 bg-[#111111] border border-white/10 text-xs font-mono text-white/70 hover:text-[#C5A059] hover:border-white/30 flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>CMS CONSOLE</span>
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/40">
          <div>
            &copy; {new Date().getFullYear()} Vootakoti Devaharshini. AI Engineering Portfolio.
          </div>
          <div className="flex items-center gap-2 text-[10px]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span>SYSTEM NODE ONLINE &bull; VISAKHAPATNAM, AP, INDIA</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
