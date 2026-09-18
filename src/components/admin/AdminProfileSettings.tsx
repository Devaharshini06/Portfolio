import React, { useState } from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { StorageService } from '../../services/storage';
import { User, Key, Save, RotateCcw, ShieldCheck } from 'lucide-react';

export const AdminProfileSettings: React.FC = () => {
  const { profile, updateProfile, addToast, resetDataToDefaults } = usePortfolio();

  const [formProfile, setFormProfile] = useState({ ...profile });
  const [newPasscode, setNewPasscode] = useState('');

  const handleProfileSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateProfile(formProfile);
  };

  const handlePasscodeChange = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPasscode || newPasscode.length < 4) {
      addToast('Passcode must be at least 4 characters long.', 'error');
      return;
    }
    StorageService.setAdminPassword(newPasscode);
    setNewPasscode('');
    addToast('Admin passcode updated successfully!', 'success');
  };

  return (
    <div className="space-y-8 max-w-4xl font-mono text-xs">
      <div>
        <h1 className="text-2xl font-bold text-slate-100 font-sans">Profile & CMS Settings</h1>
        <p className="text-xs text-slate-400 font-mono">Update personal details, social links, availability status, and admin passcode</p>
      </div>

      {/* Main Profile Settings Form */}
      <form onSubmit={handleProfileSubmit} className="p-6 rounded-3xl bg-[#0b0e1a] border border-slate-800 space-y-4">
        <h2 className="text-sm font-bold text-slate-200 border-b border-slate-800 pb-3 flex items-center gap-2">
          <User className="w-4 h-4 text-sky-400" />
          <span>Public Profile Information</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-slate-400">Full Name *</label>
            <input
              type="text"
              required
              value={formProfile.name}
              onChange={e => setFormProfile({ ...formProfile, name: e.target.value })}
              className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-100"
            />
          </div>

          <div className="space-y-1">
            <label className="text-slate-400">Location *</label>
            <input
              type="text"
              required
              value={formProfile.location}
              onChange={e => setFormProfile({ ...formProfile, location: e.target.value })}
              className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-100"
            />
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-slate-400">Headline Tagline *</label>
          <input
            type="text"
            required
            value={formProfile.heroHeadline}
            onChange={e => setFormProfile({ ...formProfile, heroHeadline: e.target.value })}
            className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-100"
          />
        </div>

        <div className="space-y-1">
          <label className="text-slate-400">Hero Subtext *</label>
          <textarea
            rows={2}
            required
            value={formProfile.heroSubtext}
            onChange={e => setFormProfile({ ...formProfile, heroSubtext: e.target.value })}
            className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-100"
          />
        </div>

        <div className="space-y-1">
          <label className="text-slate-400">Full Bio *</label>
          <textarea
            rows={4}
            required
            value={formProfile.bio}
            onChange={e => setFormProfile({ ...formProfile, bio: e.target.value })}
            className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-100"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-slate-400">Email Address *</label>
            <input
              type="email"
              required
              value={formProfile.email}
              onChange={e => setFormProfile({ ...formProfile, email: e.target.value })}
              className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-100"
            />
          </div>

          <div className="space-y-1">
            <label className="text-slate-400">Phone Number *</label>
            <input
              type="text"
              required
              value={formProfile.phone}
              onChange={e => setFormProfile({ ...formProfile, phone: e.target.value })}
              className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-100"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-slate-400">LinkedIn Profile URL</label>
            <input
              type="text"
              value={formProfile.linkedin}
              onChange={e => setFormProfile({ ...formProfile, linkedin: e.target.value })}
              className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-100"
            />
          </div>

          <div className="space-y-1">
            <label className="text-slate-400">GitHub Profile URL</label>
            <input
              type="text"
              value={formProfile.github}
              onChange={e => setFormProfile({ ...formProfile, github: e.target.value })}
              className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-100"
            />
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-slate-400">Availability Status Badge</label>
          <input
            type="text"
            value={formProfile.availabilityStatus}
            onChange={e => setFormProfile({ ...formProfile, availabilityStatus: e.target.value })}
            className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-100"
          />
        </div>

        <div className="pt-3 border-t border-slate-800 flex justify-end">
          <button
            type="submit"
            className="px-6 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold flex items-center gap-2"
          >
            <Save className="w-4 h-4" />
            <span>Save Profile Updates</span>
          </button>
        </div>
      </form>

      {/* Security & Admin Passcode */}
      <form onSubmit={handlePasscodeChange} className="p-6 rounded-3xl bg-[#0b0e1a] border border-slate-800 space-y-4">
        <h2 className="text-sm font-bold text-amber-300 border-b border-slate-800 pb-3 flex items-center gap-2">
          <Key className="w-4 h-4 text-amber-400" />
          <span>Change Admin Passcode</span>
        </h2>

        <div className="space-y-1">
          <label className="text-slate-400">New Passcode</label>
          <input
            type="password"
            placeholder="Enter new admin passcode"
            value={newPasscode}
            onChange={e => setNewPasscode(e.target.value)}
            className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 max-w-md"
          />
        </div>

        <button
          type="submit"
          className="px-5 py-2 rounded-xl bg-amber-500 text-slate-950 font-bold"
        >
          Update Passcode
        </button>
      </form>
    </div>
  );
};
