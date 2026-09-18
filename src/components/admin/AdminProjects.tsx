import React, { useState } from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { Project, ProjectCategory } from '../../types';
import { Plus, Edit2, Trash2, Eye, EyeOff, Sparkles, Check, X, Search } from 'lucide-react';

export const AdminProjects: React.FC = () => {
  const { projects, saveProject, deleteProject } = usePortfolio();
  const [search, setSearch] = useState('');
  const [editingProject, setEditingProject] = useState<Partial<Project> | null>(null);

  const filtered = projects.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase()) ||
    p.oneLiner.toLowerCase().includes(search.toLowerCase())
  );

  const handleCreateNew = () => {
    setEditingProject({
      id: 'proj-' + Date.now(),
      title: '',
      slug: '',
      oneLiner: '',
      shortDescription: '',
      fullDescription: '',
      problem: '',
      solution: '',
      architecture: '',
      contribution: '',
      challenges: '',
      outcomes: '',
      categories: ['Full-Stack', 'AI'],
      technologies: ['React', 'FastAPI', 'Python'],
      githubUrl: '',
      liveUrl: '',
      featured: false,
      published: true,
      technicalComplexity: 'Medium',
      displayOrder: projects.length + 1
    });
  };

  const handleSaveForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingProject?.title || !editingProject?.slug) return;
    saveProject(editingProject as Project);
    setEditingProject(null);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-100">Project Management CMS</h1>
          <p className="text-xs text-slate-400 font-mono">Create, update, toggle visibility, and edit project case studies</p>
        </div>

        <button
          onClick={handleCreateNew}
          className="px-4 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs font-mono transition-all flex items-center gap-2 shrink-0 shadow-lg"
        >
          <Plus className="w-4 h-4" />
          <span>Add New Project</span>
        </button>
      </div>

      {/* Search Bar */}
      <div className="relative max-w-md">
        <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          placeholder="Search projects by title or description..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-100 focus:outline-none focus:border-sky-500/50 font-mono"
        />
      </div>

      {/* Projects Table / Card List */}
      <div className="space-y-3">
        {filtered.map((project) => (
          <div
            key={project.id}
            className="p-5 rounded-2xl bg-[#0b0e1a] border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4"
          >
            <div className="space-y-1 flex-1">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-bold text-slate-100 text-sm">{project.title}</span>
                <span className="text-[10px] font-mono text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                  /{project.slug}
                </span>
                {project.featured && (
                  <span className="text-[10px] font-mono bg-amber-500/10 text-amber-300 border border-amber-500/20 px-2 py-0.5 rounded flex items-center gap-1">
                    <Sparkles className="w-2.5 h-2.5" />
                    Featured
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-400 line-clamp-1">{project.oneLiner}</p>
              <div className="text-[10px] font-mono text-sky-400">
                Categories: {project.categories.join(', ')} • Tech: {project.technologies.slice(0, 4).join(', ')}
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              {/* Toggle Publish */}
              <button
                onClick={() => saveProject({ ...project, published: !project.published })}
                className={`p-2 rounded-xl border text-xs font-mono transition-colors flex items-center gap-1 ${
                  project.published
                    ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                    : 'bg-slate-900 text-slate-500 border-slate-800'
                }`}
                title="Toggle Published Status"
              >
                {project.published ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
                <span className="text-[10px]">{project.published ? 'Published' : 'Hidden'}</span>
              </button>

              {/* Toggle Featured */}
              <button
                onClick={() => saveProject({ ...project, featured: !project.featured })}
                className={`p-2 rounded-xl border text-xs font-mono transition-colors flex items-center gap-1 ${
                  project.featured
                    ? 'bg-amber-500/10 text-amber-300 border-amber-500/20'
                    : 'bg-slate-900 text-slate-500 border-slate-800'
                }`}
                title="Toggle Featured"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span className="text-[10px]">{project.featured ? 'Featured' : 'Normal'}</span>
              </button>

              {/* Edit */}
              <button
                onClick={() => setEditingProject(project)}
                className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white transition-colors"
                title="Edit Project"
              >
                <Edit2 className="w-3.5 h-3.5" />
              </button>

              {/* Delete */}
              <button
                onClick={() => {
                  if (confirm(`Delete project "${project.title}"?`)) {
                    deleteProject(project.id);
                  }
                }}
                className="p-2 rounded-xl bg-rose-950/40 border border-rose-500/20 text-rose-400 hover:bg-rose-900/60 transition-colors"
                title="Delete Project"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Form for Add/Edit */}
      {editingProject && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="w-full max-w-3xl bg-[#0c101d] border border-slate-800 rounded-3xl p-6 shadow-2xl space-y-6 my-8 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <h2 className="text-lg font-bold text-slate-100">
                {editingProject.title ? `Edit: ${editingProject.title}` : 'Create New Project'}
              </h2>
              <button
                onClick={() => setEditingProject(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveForm} className="space-y-4 text-xs font-mono">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-slate-400">Project Title *</label>
                  <input
                    type="text"
                    required
                    value={editingProject.title || ''}
                    onChange={e => {
                      const t = e.target.value;
                      setEditingProject({
                        ...editingProject,
                        title: t,
                        slug: t.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
                      });
                    }}
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-100"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-slate-400">URL Slug *</label>
                  <input
                    type="text"
                    required
                    value={editingProject.slug || ''}
                    onChange={e => setEditingProject({ ...editingProject, slug: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-100"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-slate-400">One-Liner Value Proposition *</label>
                <input
                  type="text"
                  required
                  value={editingProject.oneLiner || ''}
                  onChange={e => setEditingProject({ ...editingProject, oneLiner: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-100"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-slate-400">Categories (comma-separated)</label>
                  <input
                    type="text"
                    value={editingProject.categories?.join(', ') || ''}
                    onChange={e => setEditingProject({
                      ...editingProject,
                      categories: e.target.value.split(',').map(s => s.trim() as ProjectCategory)
                    })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-100"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-slate-400">Technologies (comma-separated)</label>
                  <input
                    type="text"
                    value={editingProject.technologies?.join(', ') || ''}
                    onChange={e => setEditingProject({
                      ...editingProject,
                      technologies: e.target.value.split(',').map(s => s.trim())
                    })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-100"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-slate-400">Problem Statement *</label>
                <textarea
                  rows={2}
                  required
                  value={editingProject.problem || ''}
                  onChange={e => setEditingProject({ ...editingProject, problem: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-100"
                />
              </div>

              <div className="space-y-1">
                <label className="text-slate-400">Solution & Architecture *</label>
                <textarea
                  rows={2}
                  required
                  value={editingProject.solution || ''}
                  onChange={e => setEditingProject({ ...editingProject, solution: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-100"
                />
              </div>

              <div className="space-y-1">
                <label className="text-slate-400">My Contribution *</label>
                <textarea
                  rows={2}
                  required
                  value={editingProject.contribution || ''}
                  onChange={e => setEditingProject({ ...editingProject, contribution: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-100"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-slate-400">GitHub URL</label>
                  <input
                    type="text"
                    value={editingProject.githubUrl || ''}
                    onChange={e => setEditingProject({ ...editingProject, githubUrl: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-100"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-slate-400">Live Demo URL</label>
                  <input
                    type="text"
                    value={editingProject.liveUrl || ''}
                    onChange={e => setEditingProject({ ...editingProject, liveUrl: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-100"
                  />
                </div>
              </div>

              <div className="flex items-center gap-6 pt-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={editingProject.featured || false}
                    onChange={e => setEditingProject({ ...editingProject, featured: e.target.checked })}
                    className="rounded bg-slate-900 border-slate-800"
                  />
                  <span>Featured Project</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={editingProject.published !== false}
                    onChange={e => setEditingProject({ ...editingProject, published: e.target.checked })}
                    className="rounded bg-slate-900 border-slate-800"
                  />
                  <span>Published on Website</span>
                </label>
              </div>

              <div className="pt-4 flex justify-end gap-3 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setEditingProject(null)}
                  className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-sky-500 text-slate-950 font-bold"
                >
                  Save Project
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
