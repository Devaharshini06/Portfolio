import React, { useState } from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { Certification } from '../../types';
import { Plus, Edit2, Trash2, X, Award } from 'lucide-react';

export const AdminCertifications: React.FC = () => {
  const { certifications, saveCertification, deleteCertification } = usePortfolio();
  const [editingCert, setEditingCert] = useState<Partial<Certification> | null>(null);

  const handleCreate = () => {
    setEditingCert({
      id: 'cert-' + Date.now(),
      name: '',
      issuer: '',
      date: '2024',
      credentialUrl: '',
      description: '',
      displayOrder: certifications.length + 1
    });
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingCert?.name || !editingCert?.issuer) return;
    saveCertification(editingCert as Certification);
    setEditingCert(null);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-100">Certifications CMS</h1>
          <p className="text-xs text-slate-400 font-mono">Manage formal certificates and credential URLs</p>
        </div>

        <button
          onClick={handleCreate}
          className="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs font-mono transition-all flex items-center gap-2 shrink-0 shadow-lg"
        >
          <Plus className="w-4 h-4" />
          <span>Add Certification</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {certifications.map((cert) => (
          <div
            key={cert.id}
            className="p-5 rounded-2xl bg-[#0b0e1a] border border-slate-800 flex items-start justify-between gap-3"
          >
            <div className="space-y-1">
              <div className="font-bold text-slate-100 text-sm">{cert.name}</div>
              <div className="text-xs text-amber-400 font-semibold">{cert.issuer} ({cert.date})</div>
              {cert.description && <p className="text-xs text-slate-400 line-clamp-2">{cert.description}</p>}
            </div>

            <div className="flex items-center gap-1.5 shrink-0">
              <button
                onClick={() => setEditingCert(cert)}
                className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
              >
                <Edit2 className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => {
                  if (confirm(`Remove certificate ${cert.name}?`)) deleteCertification(cert.id);
                }}
                className="p-2 rounded-xl bg-rose-950/40 border border-rose-500/20 text-rose-400"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {editingCert && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-lg bg-[#0c101d] border border-slate-800 rounded-3xl p-6 space-y-4 font-mono text-xs">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h2 className="text-sm font-bold text-slate-100">Edit Certification</h2>
              <button onClick={() => setEditingCert(null)}>
                <X className="w-4 h-4 text-slate-400" />
              </button>
            </div>

            <form onSubmit={handleSave} className="space-y-3">
              <div>
                <label className="text-slate-400">Certification Name *</label>
                <input
                  type="text"
                  required
                  value={editingCert.name || ''}
                  onChange={e => setEditingCert({ ...editingCert, name: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-100"
                />
              </div>

              <div>
                <label className="text-slate-400">Issuer / Organization *</label>
                <input
                  type="text"
                  required
                  value={editingCert.issuer || ''}
                  onChange={e => setEditingCert({ ...editingCert, issuer: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-100"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-slate-400">Year / Date</label>
                  <input
                    type="text"
                    value={editingCert.date || ''}
                    onChange={e => setEditingCert({ ...editingCert, date: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-100"
                  />
                </div>
                <div>
                  <label className="text-slate-400">Credential URL</label>
                  <input
                    type="text"
                    value={editingCert.credentialUrl || ''}
                    onChange={e => setEditingCert({ ...editingCert, credentialUrl: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-100"
                  />
                </div>
              </div>

              <div>
                <label className="text-slate-400">Description</label>
                <textarea
                  rows={2}
                  value={editingCert.description || ''}
                  onChange={e => setEditingCert({ ...editingCert, description: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-100"
                />
              </div>

              <div className="pt-3 flex justify-end gap-2 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setEditingCert(null)}
                  className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800"
                >
                  Cancel
                </button>
                <button type="submit" className="px-5 py-2 rounded-xl bg-amber-500 text-slate-950 font-bold">
                  Save Certificate
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
