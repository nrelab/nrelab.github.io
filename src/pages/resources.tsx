import React from 'react';
import Layout from '@theme/Layout';

export default function ResourcesPage(): JSX.Element {
  return (
    <Layout title="Resources" description="NRELabs resources and useful links">
      <div className="container margin-vert--lg">
        <h1>Resources</h1>
        <p>
          A curated collection of resources, tools, and references that we find valuable 
          in our security research and development work.
        </p>
        
        <div className="row">
          <div className="col col--6">
            <h2>Research Papers</h2>
            <ul>
              <li><a href="#" target="_blank" rel="noopener noreferrer">Coming Soon</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer">Security Research Publications</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer">AI/ML Research Papers</a></li>
            </ul>
          </div>
          
          <div className="col col--6">
            <h2>External Tools</h2>
            <ul>
              <li><a href="#" target="_blank" rel="noopener noreferrer">Security Analysis Tools</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer">Development Frameworks</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer">Research Platforms</a></li>
            </ul>
          </div>
        </div>
        
        <div className="row">
          <div className="col col--6">
            <h2>Learning Materials</h2>
            <ul>
              <li><a href="#" target="_blank" rel="noopener noreferrer">Security Tutorials</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer">Programming Guides</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer">Research Methodologies</a></li>
            </ul>
          </div>
          
          <div className="col col--6">
            <h2>Community</h2>
            <ul>
              <li><a href="#" target="_blank" rel="noopener noreferrer">Security Communities</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer">Open Source Projects</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer">Research Collaborations</a></li>
            </ul>
          </div>
        </div>
        
        <div className="row margin-top--lg">
          <div className="col col--12">
            <h2>Contribute</h2>
            <p>
              Have a resource you'd like to share? We welcome contributions from the community. 
              Check out our GitHub repository to suggest new resources or improvements.
            </p>
            <div className="text--center">
              <a 
                className="button button--primary" 
                href="https://github.com/nrelab/nrelab.github.io" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Contribute on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
