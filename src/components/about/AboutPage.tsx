import React from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { User, Terminal, Code2, Cpu, GraduationCap, Heart, ArrowRight } from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { profile, education, navigate } = usePortfolio();

  return (
    <div className="py-8 sm:py-12 bg-[#080808] min-h-screen text-[#F4F4F0]">
      <div className="space-y-12">
        {/* Header Hero */}
        <div className="p-8 sm:p-10 bg-[#0e0e0e] border border-white/10 space-y-6 relative overflow-hidden">
          <div className="flex items-center gap-2 mono text-[10px] text-[#C5A059] uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse"></span>
            <span>ENGINEER PROFILE &amp; ARCHITECTURAL INTENT</span>
          </div>

          <h1 className="font-serif-title text-4xl sm:text-5xl md:text-6xl font-normal text-[#F4F4F0] tracking-tight leading-tight">
            Vootakoti Devaharshini
          </h1>

          <p className="text-sm sm:text-base text-white/70 leading-relaxed max-w-3xl font-sans font-light">
            {profile.bio}
          </p>

          <div className="pt-4 border-t border-white/10 flex flex-wrap gap-6 text-xs font-mono text-white/70">
            <div>
              <span className="text-white/40">LOCATION:</span> <strong className="text-white">{profile.location}</strong>
            </div>
            <div>
              <span className="text-white/40">DEGREE:</span> <strong className="text-white">B.Tech AI (9.4 CGPA) + IITM BS Data Science</strong>
            </div>
            <div>
              <span className="text-white/40">STATUS:</span> <strong className="text-[#C5A059]">OPEN FOR ROLES ('26/'27)</strong>
            </div>
          </div>
        </div>

        {/* Section 1: Who I Am */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-[#C5A059] font-mono text-xs uppercase tracking-wider font-semibold">
            <Terminal className="w-4 h-4 text-[#C5A059]" />
            <span>01. Who I Am</span>
          </div>
          <h2 className="font-serif-title text-2xl sm:text-3xl font-normal text-[#F4F4F0]">Engineering complete software systems, from data to UI</h2>
          <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-sans font-light">
            I am a student of both Artificial Intelligence Engineering at Vignan's Institute of Information Technology and Data Science at IIT Madras. My mindset is rooted in building complete systems. Rather than treating AI as a black box or creating shallow UI wrappers, I focus on the underlying architecture: API performance, vector embeddings, state recovery, database ORMs, and user ergonomics.
          </p>
        </div>

        {/* Section 2: What I Build */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-[#C5A059] font-mono text-xs uppercase tracking-wider font-semibold">
            <Code2 className="w-4 h-4 text-[#C5A059]" />
            <span>02. What I Build</span>
          </div>
          <h2 className="font-serif-title text-2xl sm:text-3xl font-normal text-[#F4F4F0]">Autonomous Agents, Full-Stack SaaS, and Deep Learning Classifiers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="system-panel p-5 bg-[#0e0e0e] border border-white/10 space-y-2">
              <h3 className="font-serif-title text-lg text-white font-normal">Autonomous Agent Workflows</h3>
              <p className="text-xs text-white/70 leading-relaxed font-sans font-light">
                Building self-healing browser testing agents using LangGraph state machines and Playwright to replace fragile manual QA scripts.
              </p>
            </div>
            <div className="system-panel p-5 bg-[#0e0e0e] border border-white/10 space-y-2">
              <h3 className="font-serif-title text-lg text-white font-normal">AI-Powered Full-Stack Apps</h3>
              <p className="text-xs text-white/70 leading-relaxed font-sans font-light">
                Developing Next.js and Flask web applications integrated with Gemini API, RAG document search, and PostgreSQL/MySQL databases.
              </p>
            </div>
          </div>
        </div>

        {/* Section 3: How I Learn */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-[#C5A059] font-mono text-xs uppercase tracking-wider font-semibold">
            <Cpu className="w-4 h-4 text-[#C5A059]" />
            <span>03. How I Learn</span>
          </div>
          <h2 className="font-serif-title text-2xl sm:text-3xl font-normal text-[#F4F4F0]">Learning through production code and failure analysis</h2>
          <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-sans font-light">
            I learn by taking a raw problem statement, drafting an architectural blueprint, implementing the initial prototype, testing failure edge cases, and measuring performance metrics. Whether fine-tuning MFCC audio feature extractions or handling high-volume WhatsApp API webhooks, hands-on implementation is my primary learning vehicle.
          </p>
        </div>

        {/* Section 4: Academic Background */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-[#C5A059] font-mono text-xs uppercase tracking-wider font-semibold">
            <GraduationCap className="w-4 h-4 text-[#C5A059]" />
            <span>04. Academic Background</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {education.map(e => (
              <div key={e.id} className="system-panel p-5 bg-[#0e0e0e] border border-white/10 space-y-2">
                <div className="text-xs font-mono text-[#C5A059] font-bold">{e.institution}</div>
                <div className="font-serif-title text-lg text-white font-normal">{e.degree}</div>
                <div className="text-xs text-white/60 font-mono">{e.startYear} – {e.endYear} {e.grade ? `(${e.grade})` : ''}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 5: Interests & Personal Ethos */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-[#C5A059] font-mono text-xs uppercase tracking-wider font-semibold">
            <Heart className="w-4 h-4 text-red-500" />
            <span>05. Interests &amp; Future Outlook</span>
          </div>
          <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-sans font-light">
            Beyond coding, I am fascinated by software product engineering, open-source AI tooling, competitive hackathons, and technical writing. I aim to join engineering teams where I can take ownership of complex systems, contribute to agentic AI innovations, and deliver software that makes a tangible impact.
          </p>
        </div>

        {/* Bottom CTA */}
        <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs font-mono text-white/60">
            Want to inspect my code implementations?
          </div>
          <button
            onClick={() => navigate('/projects')}
            className="btn-editorial flex items-center gap-2 cursor-pointer"
          >
            <span>EXPLORE TECHNICAL SYSTEMS</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#C5A059]" />
          </button>
        </div>
      </div>
    </div>
  );
};
