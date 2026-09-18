import React, { useState } from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { ShieldCheck, Key, Lock, ArrowLeft, Terminal } from 'lucide-react';

export const AdminLogin: React.FC = () => {
  const { loginAdmin, navigate } = usePortfolio();
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const success = loginAdmin(password);
    if (!success) {
      setError(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#070911] flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-[#0c101d] border border-slate-800 rounded-3xl p-8 shadow-2xl space-y-6">
        <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-base font-bold text-slate-100">CMS Admin Access</h1>
              <div className="text-xs text-slate-400 font-mono">Portfolio Management Portal</div>
            </div>
          </div>

          <button
            onClick={() => navigate('/')}
            className="p-2 rounded-xl bg-slate-900 text-slate-400 hover:text-white transition-colors"
            title="Return to Public Site"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
              <Key className="w-3.5 h-3.5 text-amber-400" />
              <span>Admin Passcode</span>
            </label>
            <input
              type="password"
              placeholder="Enter passcode (Default: admin123)"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError(false);
              }}
              className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-500/50 transition-colors font-mono"
              autoFocus
            />
            {error && (
              <p className="text-xs text-rose-400 font-mono">Incorrect passcode. Try 'admin123'.</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-all shadow-lg shadow-amber-500/20"
          >
            Authenticate & Access CMS
          </button>
        </form>

        <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 text-[11px] font-mono text-slate-400 space-y-1">
          <div className="text-slate-300 font-semibold flex items-center gap-1.5">
            <Lock className="w-3 h-3 text-amber-400" />
            <span>Passcode Quick Note:</span>
          </div>
          <div>Default Admin Passcode: <strong className="text-amber-300">admin123</strong></div>
          <div className="text-[10px] text-slate-500 pt-1">
            (You can change this passcode anytime inside Admin Settings)
          </div>
        </div>
      </div>
    </div>
  );
};
