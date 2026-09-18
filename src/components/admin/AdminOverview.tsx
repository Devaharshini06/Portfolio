import React from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import {
  FolderGit2,
  Briefcase,
  Wrench,
  Award,
  Plus,
  Eye,
  RotateCcw,
  Sparkles,
  CheckCircle2,
  BarChart2
} from 'lucide-react';

interface AdminOverviewProps {
  onTabChange: (tab: string) => void;
}

export const AdminOverview: React.FC<AdminOverviewProps> = ({ onTabChange }) => {
  const {
    projects,
    experiences,
    skills,
    certifications,
    profile,
    saveProject,
    resetDataToDefaults,
    navigate
  } = usePortfolio();

  const publishedCount = projects.filter(p => p.published).length;
  const featuredCount = projects.filter(p => p.featured).length;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-100">CMS Admin Overview</h1>
          <p className="text-xs text-slate-400 font-mono">Manage portfolio content without code edits</p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => navigate('/')}
            className="px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 hover:text-white transition-colors flex items-center gap-1.5"
          >
            <Eye className="w-3.5 h-3.5 text-sky-400" />
            <span>View Public Site</span>
          </button>

          <button
            onClick={resetDataToDefaults}
            className="px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-slate-400 hover:text-amber-400 transition-colors flex items-center gap-1.5"
            title="Reset storage to initial verified seed dataset"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Seed Data</span>
          </button>
        </div>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-5 rounded-2xl bg-[#0b0e1a] border border-slate-800/90 space-y-2">
          <div className="flex items-center justify-between text-slate-400 text-xs font-mono">
            <span>Total Projects</span>
            <FolderGit2 className="w-4 h-4 text-sky-400" />
          </div>
          <div className="text-2xl font-bold text-slate-100 font-mono">{projects.length}</div>
          <div className="text-[11px] text-slate-400 font-mono">
            {publishedCount} Published • {featuredCount} Featured
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-[#0b0e1a] border border-slate-800/90 space-y-2">
          <div className="flex items-center justify-between text-slate-400 text-xs font-mono">
            <span>Experiences</span>
            <Briefcase className="w-4 h-4 text-purple-400" />
          </div>
          <div className="text-2xl font-bold text-slate-100 font-mono">{experiences.length}</div>
          <div className="text-[11px] text-slate-400 font-mono">Internships & Roles</div>
        </div>

        <div className="p-5 rounded-2xl bg-[#0b0e1a] border border-slate-800/90 space-y-2">
          <div className="flex items-center justify-between text-slate-400 text-xs font-mono">
            <span>Skills Ecosystem</span>
            <Wrench className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-2xl font-bold text-slate-100 font-mono">{skills.length}</div>
          <div className="text-[11px] text-slate-400 font-mono">Grouped by Layer</div>
        </div>

        <div className="p-5 rounded-2xl bg-[#0b0e1a] border border-slate-800/90 space-y-2">
          <div className="flex items-center justify-between text-slate-400 text-xs font-mono">
            <span>Certifications</span>
            <Award className="w-4 h-4 text-amber-400" />
          </div>
          <div className="text-2xl font-bold text-slate-100 font-mono">{certifications.length}</div>
          <div className="text-[11px] text-slate-400 font-mono">IIT Madras & Industry</div>
        </div>
      </div>

      {/* Quick Actions & Recent Projects */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8 p-6 rounded-2xl bg-[#0b0e1a] border border-slate-800 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-100 font-mono">Quick Manage Projects</h3>
            <button
              onClick={() => onTabChange('projects')}
              className="text-xs text-sky-400 hover:text-sky-300 font-mono"
            >
              View All Projects →
            </button>
          </div>

          <div className="space-y-2">
            {projects.slice(0, 5).map((p) => (
              <div
                key={p.id}
                className="p-3 rounded-xl bg-slate-900/80 border border-slate-800/80 flex items-center justify-between gap-3 text-xs"
              >
                <div className="truncate">
                  <div className="font-bold text-slate-200 truncate">{p.title}</div>
                  <div className="text-[10px] text-slate-400 font-mono">{p.categories.join(', ')}</div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => saveProject({ ...p, published: !p.published })}
                    className={`px-2 py-1 rounded text-[10px] font-mono transition-colors ${
                      p.published
                        ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                        : 'bg-slate-800 text-slate-500'
                    }`}
                  >
                    {p.published ? 'Published' : 'Draft'}
                  </button>

                  <button
                    onClick={() => saveProject({ ...p, featured: !p.featured })}
                    className={`px-2 py-1 rounded text-[10px] font-mono transition-colors ${
                      p.featured
                        ? 'bg-amber-500/10 text-amber-300 border border-amber-500/20'
                        : 'bg-slate-800 text-slate-500'
                    }`}
                  >
                    {p.featured ? '★ Featured' : 'Normal'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Profile Card Summary */}
        <div className="lg:col-span-4 p-6 rounded-2xl bg-[#0b0e1a] border border-slate-800 space-y-4">
          <h3 className="text-sm font-bold text-slate-100 font-mono">Profile Health</h3>

          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
            <div className="text-xs font-bold text-slate-200">{profile.name}</div>
            <div className="text-[11px] text-slate-400">{profile.email}</div>
            <div className="text-[10px] font-mono text-emerald-400 pt-1 border-t border-slate-800">
              ● Status: {profile.availabilityStatus}
            </div>
          </div>

          <button
            onClick={() => onTabChange('profile')}
            className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs font-mono text-sky-400 font-semibold transition-all"
          >
            Edit Profile Settings
          </button>
        </div>
      </div>
    </div>
  );
};
