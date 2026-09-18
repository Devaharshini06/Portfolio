import React, { useEffect, useState } from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { GitHubService, GitHubRepo } from '../../services/githubService';
import { Github, Star, GitFork, ExternalLink, Code2 } from 'lucide-react';

export const GitHubSection: React.FC = () => {
  const { profile } = usePortfolio();
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    GitHubService.fetchUserRepos('Devaharshini06')
      .then(data => {
        setRepos(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  return (
    <section id="github" className="py-12 sm:py-16 border-b border-white/10 relative bg-[#080808]">
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-4 gap-4">
          <div>
            <div className="flex items-center gap-2 mono text-[10px] text-[#C5A059] uppercase tracking-widest mb-1">
              <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse"></span>
              <span>SOURCE CODE REPOSITORIES // VERSION CONTROL</span>
            </div>
            <h2 className="font-serif-title text-3xl sm:text-4xl md:text-5xl font-normal text-[#F4F4F0] tracking-tight">
              GitHub Public Workspaces
            </h2>
          </div>

          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-editorial flex items-center gap-2 shrink-0"
          >
            <Github className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>@Devaharshini06</span>
            <ExternalLink className="w-3 h-3 text-white/50" />
          </a>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-36 bg-[#0e0e0e] animate-pulse border border-white/10" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {repos.map((repo) => (
              <a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="system-panel p-5 bg-[#0e0e0e] border border-white/10 hover:border-[#C5A059]/50 transition-all space-y-3 flex flex-col justify-between group"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Code2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                      <h3 className="text-sm font-mono font-bold text-white group-hover:text-[#C5A059] transition-colors truncate max-w-[180px]">
                        {repo.name}
                      </h3>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-white/40 group-hover:text-[#C5A059]" />
                  </div>

                  <p className="text-xs text-white/70 line-clamp-2 leading-relaxed font-sans font-light">
                    {repo.description || 'Public engineering repository.'}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-white/60">
                  <span className="px-2 py-0.5 bg-[#141414] border border-white/10 text-[#C5A059] font-bold">
                    {repo.language || 'Python'}
                  </span>

                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1 text-white/70">
                      <Star className="w-3 h-3 text-[#C5A059]" />
                      {repo.stargazers_count}
                    </span>
                    <span className="flex items-center gap-1 text-white/50">
                      <GitFork className="w-3 h-3 text-white/40" />
                      {repo.forks_count}
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
