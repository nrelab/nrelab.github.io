import React from 'react';
import Layout from '@theme/Layout';
import Hero from '../components/Hero';
import RepoGrid from '../components/RepoGrid';
import FeatureCard from '../components/FeatureCard';
import Section from '../components/Section';

export default function Home(): JSX.Element {
  const features = [
    {
      title: 'Security Research',
      description: 'Cutting-edge vulnerability analysis, defensive security tools, and threat intelligence research for modern attack surfaces.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
    },
    {
      title: 'AI & Machine Learning',
      description: 'Intelligent automation, machine learning models for threat detection, and AI-powered security analysis tools.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'Systems Development',
      description: 'High-performance infrastructure tools, development utilities, and scalable systems built with modern languages.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
  ];

  return (
    <Layout title="nrelab" description="nrelab - Security Research & Development Lab">
      <Hero />
      
      <Section>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold mb-4">Focus Areas</h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            We specialize in three core areas that define modern security research and development.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </Section>

      <Section className="bg-gray-50 dark:bg-gray-900">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold mb-4">Open Source Projects</h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Explore our tools and frameworks built for the security community.
          </p>
        </div>
        
        <RepoGrid />
        
        <div className="text-center mt-12">
          <a
            href="https://github.com/nrelab"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-5 py-3 rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-900 transition-all duration-200"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            View All on GitHub
          </a>
        </div>
      </Section>

      <Section>
        <div className="text-center">
          <h2 className="text-3xl font-semibold mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            Join our community and start building with our open-source tools and frameworks.
          </p>
          
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="https://github.com/nrelab"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-lg bg-black text-white hover:bg-gray-800 transition-all duration-200 hover:transform hover:-translate-y-1"
            >
              Contribute on GitHub
            </a>
            
            <a
              href="/docs/intro"
              className="px-5 py-3 rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-900 transition-all duration-200 hover:transform hover:-translate-y-1"
            >
              Read Documentation
            </a>
          </div>
        </div>
      </Section>
    </Layout>
  );
}
