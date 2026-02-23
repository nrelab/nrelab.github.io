import React, { useEffect, useState } from 'react';

interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  language: string;
  updated_at: string;
  topics: string[];
  archived: boolean;
}

export default function RepoGrid() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://api.github.com/orgs/nrelab/repos');
        const data = await response.json();
        setRepos(data.sort((a: GitHubRepo, b: GitHubRepo) => b.stargazers_count - a.stargazers_count));
      } catch (error) {
        console.error('Error fetching repos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="spinner"></div>
        <span className="ml-3 text-gray-500 dark:text-gray-400">Loading repositories...</span>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {repos.map((repo) => (
        <a
          key={repo.id}
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="card p-5 block hover:transform hover:-translate-y-1 transition-all duration-200"
        >
          <div className="flex items-start justify-between mb-3">
            <h3 className="font-medium text-lg flex-1">{repo.name}</h3>
            <div className="flex items-center gap-2 ml-3">
              {repo.archived && (
                <span className="badge badge--warning text-xs">Archived</span>
              )}
              <span className="badge badge--outline text-xs">⭐ {repo.stargazers_count}</span>
            </div>
          </div>
          
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 line-clamp-2">
            {repo.description || 'No description available.'}
          </p>
          
          {repo.language && (
            <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
              <span 
                className="w-2 h-2 rounded-full"
                style={{
                  backgroundColor: getLanguageColor(repo.language),
                }}
              ></span>
              <span>{repo.language}</span>
            </div>
          )}
        </a>
      ))}
    </div>
  );
}

function getLanguageColor(language: string): string {
  const colors: Record<string, string> = {
    Rust: '#dea584',
    Go: '#00ADD8',
    Python: '#3572A5',
    TypeScript: '#3178c6',
    JavaScript: '#f1e05a',
    Shell: '#89e051',
    Dockerfile: '#384d54',
    'C++': '#f34b7d',
    C: '#555555',
  };
  return colors[language] || '#666666';
}
