import React, { useState } from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { Education } from '../../types';
import { Plus, Edit2, Trash2, X, GraduationCap } from 'lucide-react';

export const AdminEducation: React.FC = () => {
  const { education, saveEducation, deleteEducation } = usePortfolio();
  const [editingEdu, setEditingEdu] = useState<Partial<Education> | null>(null);

  const handleCreate = () => {
    setEditingEdu({
      id: 'edu-' + Date.now(),
      institution: '',
      degree: '',
      field: '',
      startYear: '2023',
      endYear: '2027',
      grade: '',
      location: '',
      description: '',
      displayOrder: education.length + 1
    });
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingEdu?.institution || !editingEdu?.degree) return;
    saveEducation(editingEdu as Education);
    setEditingEdu(null);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-100">Education CMS</h1>
          <p className="text-xs text-slate-400 font-mono">Manage academic degrees and achievements</p>
        </div>

        <button
          onClick={handleCreate}
          className="px-4 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs font-mono transition-all flex items-center gap-2 shrink-0 shadow-lg"
        >
          <Plus className="w-4 h-4" />
          <span>Add Education</span>
        </button>
      </div>

      <div className="space-y-4">
        {education.map((edu) => (
          <div
            key={edu.id}
            className="p-5 rounded-2xl bg-[#0b0e1a] border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4"
          >
            <div>
              <div className="font-bold text-slate-100">{edu.degree}</div>
              <div className="text-xs text-sky-400 font-semibold">{edu.institution}</div>
              <div className="text-[10px] font-mono text-slate-400">
                {edu.startYear} – {edu.endYear} {edu.grade ? `(${edu.grade})` : ''}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setEditingEdu(edu)}
                className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
              >
                <Edit2 className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => {
                  if (confirm('Delete education entry?')) deleteEducation(edu.id);
                }}
                className="p-2 rounded-xl bg-rose-950/40 border border-rose-500/20 text-rose-400"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {editingEdu && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-lg bg-[#0c101d] border border-slate-800 rounded-3xl p-6 space-y-4 font-mono text-xs">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h2 className="text-sm font-bold text-slate-100">Edit Education Entry</h2>
              <button onClick={() => setEditingEdu(null)}>
                <X className="w-4 h-4 text-slate-400" />
              </button>
            </div>

            <form onSubmit={handleSave} className="space-y-3">
              <div>
                <label className="text-slate-400">Institution *</label>
                <input
                  type="text"
                  required
                  value={editingEdu.institution || ''}
                  onChange={e => setEditingEdu({ ...editingEdu, institution: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-100"
                />
              </div>

              <div>
                <label className="text-slate-400">Degree Title *</label>
                <input
                  type="text"
                  required
                  value={editingEdu.degree || ''}
                  onChange={e => setEditingEdu({ ...editingEdu, degree: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-100"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-slate-400">Start Year</label>
                  <input
                    type="text"
                    value={editingEdu.startYear || ''}
                    onChange={e => setEditingEdu({ ...editingEdu, startYear: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-100"
                  />
                </div>
                <div>
                  <label className="text-slate-400">End Year</label>
                  <input
                    type="text"
                    value={editingEdu.endYear || ''}
                    onChange={e => setEditingEdu({ ...editingEdu, endYear: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-100"
                  />
                </div>
              </div>

              <div>
                <label className="text-slate-400">CGPA / Grade</label>
                <input
                  type="text"
                  value={editingEdu.grade || ''}
                  onChange={e => setEditingEdu({ ...editingEdu, grade: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-100"
                />
              </div>

              <div className="pt-3 flex justify-end gap-2 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setEditingEdu(null)}
                  className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800"
                >
                  Cancel
                </button>
                <button type="submit" className="px-5 py-2 rounded-xl bg-sky-500 text-slate-950 font-bold">
                  Save Education
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
