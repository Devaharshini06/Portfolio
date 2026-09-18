import React, { useState } from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { Experience } from '../../types';
import { Plus, Edit2, Trash2, Briefcase, X } from 'lucide-react';

export const AdminExperience: React.FC = () => {
  const { experiences, saveExperience, deleteExperience } = usePortfolio();
  const [editingExp, setEditingExp] = useState<Partial<Experience> | null>(null);

  const handleCreateNew = () => {
    setEditingExp({
      id: 'exp-' + Date.now(),
      company: '',
      role: '',
      location: '',
      startDate: '2026-06',
      endDate: '2026-07',
      isCurrent: false,
      description: '',
      responsibilities: [''],
      technologies: ['Python', 'PostgreSQL'],
      featured: true,
      displayOrder: experiences.length + 1
    });
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingExp?.company || !editingExp?.role) return;
    saveExperience(editingExp as Experience);
    setEditingExp(null);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-100">Experience Management</h1>
          <p className="text-xs text-slate-400 font-mono">Manage internships, positions, and company responsibilities</p>
        </div>

        <button
          onClick={handleCreateNew}
          className="px-4 py-2.5 rounded-xl bg-purple-500 hover:bg-purple-400 text-slate-950 font-bold text-xs font-mono transition-all flex items-center gap-2 shrink-0 shadow-lg"
        >
          <Plus className="w-4 h-4" />
          <span>Add Experience</span>
        </button>
      </div>

      <div className="space-y-4">
        {experiences.map((exp) => (
          <div
            key={exp.id}
            className="p-5 rounded-2xl bg-[#0b0e1a] border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4"
          >
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="font-bold text-slate-100">{exp.role}</span>
                <span className="text-xs text-sky-400 font-semibold">@ {exp.company}</span>
              </div>
              <p className="text-xs text-slate-400">{exp.description}</p>
              <div className="text-[10px] font-mono text-slate-500">
                {exp.startDate} – {exp.endDate} • {exp.location}
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => setEditingExp(exp)}
                className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
              >
                <Edit2 className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => {
                  if (confirm('Delete this experience entry?')) deleteExperience(exp.id);
                }}
                className="p-2 rounded-xl bg-rose-950/40 border border-rose-500/20 text-rose-400 hover:bg-rose-900/60"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {editingExp && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-2xl bg-[#0c101d] border border-slate-800 rounded-3xl p-6 space-y-4 max-h-[90vh] overflow-y-auto font-mono text-xs">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h2 className="text-sm font-bold text-slate-100">Edit Experience Entry</h2>
              <button onClick={() => setEditingExp(null)}>
                <X className="w-4 h-4 text-slate-400" />
              </button>
            </div>

            <form onSubmit={handleSave} className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-slate-400">Company Name</label>
                  <input
                    type="text"
                    required
                    value={editingExp.company || ''}
                    onChange={e => setEditingExp({ ...editingExp, company: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-100"
                  />
                </div>
                <div>
                  <label className="text-slate-400">Role Title</label>
                  <input
                    type="text"
                    required
                    value={editingExp.role || ''}
                    onChange={e => setEditingExp({ ...editingExp, role: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-100"
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="text-slate-400">Location</label>
                  <input
                    type="text"
                    value={editingExp.location || ''}
                    onChange={e => setEditingExp({ ...editingExp, location: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-100"
                  />
                </div>
                <div>
                  <label className="text-slate-400">Start Date</label>
                  <input
                    type="text"
                    value={editingExp.startDate || ''}
                    onChange={e => setEditingExp({ ...editingExp, startDate: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-100"
                  />
                </div>
                <div>
                  <label className="text-slate-400">End Date</label>
                  <input
                    type="text"
                    value={editingExp.endDate || ''}
                    onChange={e => setEditingExp({ ...editingExp, endDate: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-100"
                  />
                </div>
              </div>

              <div>
                <label className="text-slate-400">Summary Description</label>
                <textarea
                  rows={2}
                  value={editingExp.description || ''}
                  onChange={e => setEditingExp({ ...editingExp, description: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-100"
                />
              </div>

              <div className="pt-3 flex justify-end gap-2 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setEditingExp(null)}
                  className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800"
                >
                  Cancel
                </button>
                <button type="submit" className="px-5 py-2 rounded-xl bg-purple-500 text-slate-950 font-bold">
                  Save Experience
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
