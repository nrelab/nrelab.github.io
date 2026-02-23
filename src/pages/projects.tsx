import React, {useState, useEffect} from 'react';
import Layout from '@theme/Layout';
import axios from 'axios';

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
        const response = await axios.get<GitHubRepo[]>('https://api.github.com/orgs/nrelab/repos');
        setRepos(response.data.sort((a, b) => b.stargazers_count - a.stargazers_count));
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

  const getStatusBadge = (archived: boolean): JSX.Element => {
    if (archived) {
      return <span className="badge badge--warning">Archived</span>;
    }
    return <span className="badge badge--success">Active</span>;
  };

  if (loading) {
    return (
      <Layout title="Projects" description="NRELabs projects and repositories">
        <div className="container margin-vert--lg">
          <div className="text--center">
            <div className="spinner"></div>
            <p>Loading repositories...</p>
          </div>
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout title="Projects" description="NRELabs projects and repositories">
        <div className="container margin-vert--lg">
          <div className="alert alert--danger" role="alert">
            {error}
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout title="Projects" description="NRELabs projects and repositories">
      <div className="container margin-vert--lg">
        <div className="row">
          <div className="col col--12">
            <h1>Our Projects</h1>
            <p>
              Explore our open-source projects focused on security research, AI tools, 
              and systems development. All projects are maintained by the NRELabs team.
            </p>
            
            <div className="margin-bottom--lg">
              <a 
                className="button button--primary button--lg" 
                href="https://github.com/nrelab" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col col--12">
            <h2>Repository Overview</h2>
            <p>
              Showing {repos.length} repositories from the NRELabs GitHub organization.
            </p>
          </div>
        </div>

        <div className="row">
          {repos.map((repo) => (
            <div key={repo.id} className="col col--6 margin-bottom--lg">
              <div className="card">
                <div className="card__header">
                  <div className="row">
                    <div className="col col--8">
                      <h3>
                        <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                          {repo.name}
                        </a>
                      </h3>
                      {getStatusBadge(repo.archived)}
                    </div>
                    <div className="col col--4 text--right">
                      <span className="badge badge--outline">
                        ⭐ {repo.stargazers_count}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="card__body">
                  <p>{repo.description || 'No description available.'}</p>
                  
                  {repo.language && (
                    <div className="margin-bottom--sm">
                      <span 
                        className="badge"
                        style={{
                          backgroundColor: getLanguageColor(repo.language),
                          color: '#fff',
                        }}
                      >
                        {repo.language}
                      </span>
                    </div>
                  )}
                  
                  {repo.topics && repo.topics.length > 0 && (
                    <div className="margin-bottom--sm">
                      {repo.topics.slice(0, 5).map((topic) => (
                        <span key={topic} className="badge badge--secondary margin-right--xs">
                          {topic}
                        </span>
                      ))}
                      {repo.topics.length > 5 && (
                        <span className="badge badge--secondary">
                          +{repo.topics.length - 5} more
                        </span>
                      )}
                    </div>
                  )}
                </div>
                
                <div className="card__footer">
                  <div className="row">
                    <div className="col col--6">
                      <small>
                        Updated: {formatDate(repo.updated_at)}
                      </small>
                    </div>
                    <div className="col col--6 text--right">
                      <a 
                        href={repo.html_url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="button button--primary button--sm"
                      >
                        View Repository
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {repos.length === 0 && (
          <div className="row">
            <div className="col col--12 text--center">
              <p>No repositories found. Check back later for updates!</p>
            </div>
          </div>
        )}

        <div className="row margin-top--lg">
          <div className="col col--12">
            <div className="alert alert--info" role="alert">
              <strong>Note:</strong> This page automatically fetches repository data from the GitHub API. 
              If you're a repository maintainer, ensure your repositories have proper descriptions and topics 
              for better visibility.
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
