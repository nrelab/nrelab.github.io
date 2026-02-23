import React, {useState, useEffect} from 'react';
import Layout from '@theme/Layout';

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

export default function ProjectsPage(): JSX.Element {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://api.github.com/orgs/nrelab/repos');
        const data = await response.json();
        setRepos(data.sort((a: GitHubRepo, b: GitHubRepo) => b.stargazers_count - a.stargazers_count));
      } catch (err) {
        setError('Failed to fetch repositories. Please try again later.');
        console.error('Error fetching repos:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  const getLanguageColor = (language: string): string => {
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
  };

  const formatDate = (dateString: string): string => {
    return new Date(dateString).toLocaleDateString();
  };

  if (loading) {
    return (
      <Layout title="Projects" description="NRELabs projects and repositories">
        <div className="container py-20">
          <div className="flex justify-center items-center">
            <div className="spinner"></div>
            <span className="ml-3 text-gray-500 dark:text-gray-400">Loading repositories...</span>
          </div>
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout title="Projects" description="NRELabs projects and repositories">
        <div className="container py-20">
          <div className="text-center">
            <div className="alert alert--danger inline-block" role="alert">
              {error}
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout title="Projects" description="NRELabs projects and repositories">
      <div className="container py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-semibold tracking-tight mb-4">Projects</h1>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Explore our open-source projects focused on security research, AI tools, 
            and systems development.
          </p>
          
          <div className="flex justify-center gap-4 mt-8">
            <a 
              href="https://github.com/nrelab" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-3 rounded-lg bg-black text-white hover:bg-gray-800 transition-all duration-200"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              View on GitHub
            </a>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Repository Overview</h2>
          <p className="text-gray-500 dark:text-gray-400">
            Showing {repos.length} repositories from the NRELabs GitHub organization.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map((repo) => (
            <a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="card p-6 block hover:transform hover:-translate-y-1 transition-all duration-200"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-semibold text-lg flex-1">{repo.name}</h3>
                <div className="flex items-center gap-2 ml-3">
                  {repo.archived && (
                    <span className="badge badge--warning text-xs">Archived</span>
                  )}
                  <span className="badge badge--outline text-xs">⭐ {repo.stargazers_count}</span>
                </div>
              </div>
              
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 line-clamp-3">
                {repo.description || 'No description available.'}
              </p>
              
              {repo.language && (
                <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 mb-3">
                  <span 
                    className="w-2 h-2 rounded-full"
                    style={{
                      backgroundColor: getLanguageColor(repo.language),
                    }}
                  ></span>
                  <span>{repo.language}</span>
                </div>
              )}
              
              {repo.topics && repo.topics.length > 0 && (
                <div className="flex flex-wrap gap-1 mb-4">
                  {repo.topics.slice(0, 3).map((topic) => (
                    <span key={topic} className="badge badge--secondary text-xs">
                      {topic}
                    </span>
                  ))}
                  {repo.topics.length > 3 && (
                    <span className="badge badge--secondary text-xs">
                      +{repo.topics.length - 3}
                    </span>
                  )}
                </div>
              )}
              
              <div className="text-xs text-gray-400 dark:text-gray-500">
                Updated: {formatDate(repo.updated_at)}
              </div>
            </a>
          ))}
        </div>

        {repos.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">No repositories found. Check back later for updates!</p>
          </div>
        )}

        <div className="mt-16 p-6 bg-gray-50 dark:bg-gray-900 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Contribute to Our Projects</h3>
          <p className="text-gray-500 dark:text-gray-400 mb-4">
            We welcome contributions from the community. Whether you're reporting issues, 
            submitting pull requests, or suggesting improvements, your input is valuable.
          </p>
          <a
            href="https://github.com/nrelab"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-900 transition-all duration-200"
          >
            Start Contributing
          </a>
        </div>
      </div>
    </Layout>
  );
}
