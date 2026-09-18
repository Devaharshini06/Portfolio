import React, { useState, useEffect } from 'react';
import { Terminal as TerminalIcon, Circle, CheckCircle2, Cpu, Code2, Sparkles, RefreshCw } from 'lucide-react';

export const AnimatedTerminal: React.FC = () => {
  const [logs, setLogs] = useState<string[]>([]);
  const [activeCommandIndex, setActiveCommandIndex] = useState(0);

  const commandSequence = [
    "> initializing devaharshini.portfolio.v1...",
    "> loading core_modules: [AI_Engineering, FullStack, Agentic_AI, Data_Science]...",
    "> connecting firestore_data_model: 10 verified projects loaded...",
    "> system_status: BUILDING complete software end-to-end...",
    "> ready for recruiter evaluation."
  ];

  useEffect(() => {
    if (activeCommandIndex < commandSequence.length) {
      const timer = setTimeout(() => {
        setLogs(prev => [...prev, commandSequence[activeCommandIndex]]);
        setActiveCommandIndex(prev => prev + 1);
      }, 700);
      return () => clearTimeout(timer);
    }
  }, [activeCommandIndex]);

  const handleRestart = () => {
    setLogs([]);
    setActiveCommandIndex(0);
  };

  return (
    <div className="w-full max-w-lg bg-[#0b0e17] border border-slate-800 rounded-2xl shadow-2xl overflow-hidden font-mono text-xs">
      {/* Terminal Topbar */}
      <div className="px-4 py-3 bg-[#111624] border-b border-slate-800/80 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Circle className="w-3 h-3 fill-rose-500/80 text-rose-500/80" />
          <Circle className="w-3 h-3 fill-amber-500/80 text-amber-500/80" />
          <Circle className="w-3 h-3 fill-emerald-500/80 text-emerald-500/80" />
          <span className="ml-2 text-slate-400 text-[11px]">devaharshini-ai-kernel ~ bash</span>
        </div>
        <div className="flex items-center gap-2 text-slate-500">
          <button
            onClick={handleRestart}
            className="p-1 rounded hover:bg-slate-800 text-slate-400 hover:text-slate-200 transition-colors"
            title="Re-run kernel logs"
          >
            <RefreshCw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Terminal Content Body */}
      <div className="p-4 space-y-2.5 min-h-[220px] bg-[#080b12] text-slate-300 font-mono">
        <div className="text-slate-500 pb-1 border-b border-slate-800/50 flex items-center justify-between text-[11px]">
          <span>SYSTEM ARCHITECTURE BOOT</span>
          <span className="text-sky-400 font-semibold">v2026.8</span>
        </div>

        {logs.map((log, idx) => (
          <div key={idx} className="flex items-start gap-2 animate-in fade-in slide-in-from-left-2 duration-300">
            <span className="text-sky-400 shrink-0">$</span>
            <span
              className={
                log.includes('STATUS') || log.includes('BUILDING')
                  ? 'text-amber-300 font-semibold'
                  : log.includes('ready')
                  ? 'text-emerald-400 font-semibold'
                  : 'text-slate-300'
              }
            >
              {log}
            </span>
          </div>
        ))}

        {activeCommandIndex < commandSequence.length && (
          <div className="flex items-center gap-1.5 text-sky-400 animate-pulse">
            <span className="w-2 h-4 bg-sky-400 inline-block"></span>
            <span className="text-slate-500 text-[11px]">processing...</span>
          </div>
        )}

        {activeCommandIndex >= commandSequence.length && (
          <div className="pt-3 border-t border-slate-800/60 grid grid-cols-2 gap-2 text-[11px]">
            <div className="p-2 rounded-lg bg-slate-900/80 border border-slate-800 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-sky-400" />
              <div>
                <div className="text-slate-400">Target Role</div>
                <div className="text-slate-200 font-semibold">AI / Full-Stack</div>
              </div>
            </div>
            <div className="p-2 rounded-lg bg-slate-900/80 border border-slate-800 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <div>
                <div className="text-slate-400">Focus</div>
                <div className="text-slate-200 font-semibold">Agentic Systems</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
