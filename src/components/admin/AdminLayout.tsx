import React, { useState } from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { AdminLogin } from './AdminLogin';
import { AdminOverview } from './AdminOverview';
import { AdminProjects } from './AdminProjects';
import { AdminExperience } from './AdminExperience';
import { AdminSkills } from './AdminSkills';
import { AdminEducation } from './AdminEducation';
import { AdminCertifications } from './AdminCertifications';
import { AdminProfileSettings } from './AdminProfileSettings';
import {
  ShieldCheck,
  LayoutDashboard,
  FolderGit2,
  Briefcase,
  Wrench,
  GraduationCap,
  Award,
  User,
  LogOut,
  ExternalLink,
  Terminal
} from 'lucide-react';

export const AdminLayout: React.FC = () => {
  const { isAdminLoggedIn, logoutAdmin, navigate } = usePortfolio();
  const [activeTab, setActiveTab] = useState<string>('overview');

  if (!isAdminLoggedIn) {
    return <AdminLogin />;
  }

  const tabs = [
    { id: 'overview', label: 'Overview', icon: LayoutDashboard },
    { id: 'projects', label: 'Projects', icon: FolderGit2 },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'skills', label: 'Skills', icon: Wrench },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'certifications', label: 'Certifications', icon: Award },
    { id: 'profile', label: 'Profile & Settings', icon: User },
  ];

  return (
    <div className="min-h-screen bg-[#070911] text-slate-300 pt-20">
      {/* Top Admin Sub-bar */}
      <div className="bg-[#0b0e1a] border-b border-slate-800/80 sticky top-16 z-30 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-2.5">
          <div className="flex items-center gap-3">
            <div className="p-1.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <span className="text-xs font-mono font-bold text-slate-100 hidden sm:inline">
              Vootakoti Devaharshini CMS Portal
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate('/')}
              className="text-xs font-mono text-slate-400 hover:text-sky-400 transition-colors flex items-center gap-1"
            >
              <span>Public Website</span>
              <ExternalLink className="w-3 h-3" />
            </button>

            <button
              onClick={logoutAdmin}
              className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-rose-400 hover:bg-rose-950/30 transition-colors flex items-center gap-1.5"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Logout</span>
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-1 overflow-x-auto scrollbar-none pb-2 pt-1">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-mono shrink-0 transition-all flex items-center gap-2 ${
                  isActive
                    ? 'bg-amber-500/15 text-amber-300 border border-amber-500/30 font-semibold'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Admin View Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'overview' && <AdminOverview onTabChange={setActiveTab} />}
        {activeTab === 'projects' && <AdminProjects />}
        {activeTab === 'experience' && <AdminExperience />}
        {activeTab === 'skills' && <AdminSkills />}
        {activeTab === 'education' && <AdminEducation />}
        {activeTab === 'certifications' && <AdminCertifications />}
        {activeTab === 'profile' && <AdminProfileSettings />}
      </main>
    </div>
  );
};
