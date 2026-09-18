import React, { useState } from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { Skill, SkillProficiencyLabel } from '../../types';
import { Plus, Edit2, Trash2, X, Wrench } from 'lucide-react';

export const AdminSkills: React.FC = () => {
  const { skills, saveSkill, deleteSkill } = usePortfolio();
  const [editingSkill, setEditingSkill] = useState<Partial<Skill> | null>(null);

  const categories = [
    'Programming',
    'Frontend',
    'Backend',
    'Databases',
    'AI / ML',
    'Generative AI',
    'Automation',
    'Developer Tools',
    'Security / Testing'
  ];

  const handleCreate = () => {
    setEditingSkill({
      id: 'sk-' + Date.now(),
      category: 'Generative AI',
      skillName: '',
      proficiencyLabel: 'Frequently Used',
      isPrimary: true,
      isExploring: false,
      displayOrder: skills.length + 1
    });
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingSkill?.skillName) return;
    saveSkill(editingSkill as Skill);
    setEditingSkill(null);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-100">Skills & Tech Stack CMS</h1>
          <p className="text-xs text-slate-400 font-mono">Manage technical skills with non-fake proficiency levels</p>
        </div>

        <button
          onClick={handleCreate}
          className="px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs font-mono transition-all flex items-center gap-2 shrink-0 shadow-lg"
        >
          <Plus className="w-4 h-4" />
          <span>Add Skill</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="p-3.5 rounded-xl bg-[#0b0e1a] border border-slate-800 flex items-center justify-between gap-2 text-xs font-mono"
          >
            <div>
              <div className="font-bold text-slate-200">{skill.skillName}</div>
              <div className="text-[10px] text-slate-500">{skill.category} • {skill.proficiencyLabel}</div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={() => setEditingSkill(skill)}
                className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white"
              >
                <Edit2 className="w-3 h-3" />
              </button>
              <button
                onClick={() => {
                  if (confirm(`Remove skill ${skill.skillName}?`)) deleteSkill(skill.id);
                }}
                className="p-1.5 rounded-lg bg-rose-950/40 border border-rose-500/20 text-rose-400"
              >
                <Trash2 className="w-3 h-3" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {editingSkill && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-md bg-[#0c101d] border border-slate-800 rounded-3xl p-6 space-y-4 font-mono text-xs">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h2 className="text-sm font-bold text-slate-100">Edit Skill Entry</h2>
              <button onClick={() => setEditingSkill(null)}>
                <X className="w-4 h-4 text-slate-400" />
              </button>
            </div>

            <form onSubmit={handleSave} className="space-y-3">
              <div>
                <label className="text-slate-400">Skill Name *</label>
                <input
                  type="text"
                  required
                  value={editingSkill.skillName || ''}
                  onChange={e => setEditingSkill({ ...editingSkill, skillName: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-100"
                />
              </div>

              <div>
                <label className="text-slate-400">Category *</label>
                <select
                  value={editingSkill.category || 'Programming'}
                  onChange={e => setEditingSkill({ ...editingSkill, category: e.target.value as any })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-100"
                >
                  {categories.map(c => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-slate-400">Proficiency Level *</label>
                <select
                  value={editingSkill.proficiencyLabel || 'Frequently Used'}
                  onChange={e => setEditingSkill({ ...editingSkill, proficiencyLabel: e.target.value as SkillProficiencyLabel })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-100"
                >
                  <option value="Frequently Used">Frequently Used</option>
                  <option value="Working With">Working With</option>
                  <option value="Explored">Explored</option>
                  <option value="Familiar">Familiar</option>
                </select>
              </div>

              <div className="pt-3 flex justify-end gap-2 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setEditingSkill(null)}
                  className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800"
                >
                  Cancel
                </button>
                <button type="submit" className="px-5 py-2 rounded-xl bg-emerald-500 text-slate-950 font-bold">
                  Save Skill
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
