export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
}

export const GitHubService = {
  async fetchUserRepos(username = 'Devaharshini06'): Promise<GitHubRepo[]> {
    try {
      const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`, {
        headers: {
          'Accept': 'application/vnd.github.v3+json'
        }
      });
      if (!response.ok) {
        throw new Error(`GitHub API returned ${response.status}`);
      }
      const data = await response.json();
      return data.map((repo: any) => ({
        id: repo.id,
        name: repo.name,
        description: repo.description,
        html_url: repo.html_url,
        stargazers_count: repo.stargazers_count || 0,
        forks_count: repo.forks_count || 0,
        language: repo.language || 'Python',
        updated_at: repo.updated_at
      }));
    } catch (err) {
      console.warn('Using GitHub fallback data due to rate limit or connection:', err);
      return [
        {
          id: 1,
          name: 'AI-QA-testing-agent',
          description: 'An autonomous browser testing system that uses LLM reasoning to execute workflows, detect failures, and recover from broken interactions.',
          html_url: 'https://github.com/Devaharshini06/AI-QA-testing-agent.git',
          stargazers_count: 14,
          forks_count: 3,
          language: 'Python',
          updated_at: '2024-07-01'
        },
        {
          id: 2,
          name: 'Career-Toolkit',
          description: 'AI-powered career platform focused on resume optimization, ATS analysis, interview preparation, and AI-assisted career guidance.',
          html_url: 'https://github.com/Devaharshini06/Career-Toolkit.git',
          stargazers_count: 18,
          forks_count: 4,
          language: 'TypeScript',
          updated_at: '2024-05-01'
        },
        {
          id: 3,
          name: 'placement_portal',
          description: 'A full-stack placement management platform supporting students, company recruiters, and university administrators.',
          html_url: 'https://github.com/Devaharshini06/placement_portal.git',
          stargazers_count: 12,
          forks_count: 2,
          language: 'Python',
          updated_at: '2024-03-01'
        },
        {
          id: 4,
          name: 'Messy_Mashup_DLGenAI',
          description: 'A deep learning system for music genre classification using audio feature extraction (MFCCs) and CNN models.',
          html_url: 'https://github.com/Devaharshini06/Messy_Mashup_DLGenAI.git',
          stargazers_count: 9,
          forks_count: 1,
          language: 'Jupyter Notebook',
          updated_at: '2023-12-01'
        },
        {
          id: 5,
          name: 'Comment_Prediction_ML',
          description: 'An NLP-based multi-class classification system evaluating LightGBM, SVM, and Logistic Regression models.',
          html_url: 'https://github.com/Devaharshini06/Comment_Prediction_ML.git',
          stargazers_count: 7,
          forks_count: 1,
          language: 'Python',
          updated_at: '2023-09-01'
        }
      ];
    }
  }
};
