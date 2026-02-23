import React from 'react';
import Link from '@docusaurus/Link';

export default function Hero(): JSX.Element {
  return (
    <section className="text-center py-24">
      <h1 className="text-5xl font-semibold tracking-tight mb-6">
        Build. Break. Secure. Scale.
      </h1>

      <p className="mt-6 text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-8">
        nrelab is a research and engineering lab building AI security tools,
        developer infrastructure, and next-generation offensive security systems.
      </p>

      <div className="flex justify-center gap-4 flex-wrap">
        <Link
          to="/docs/intro"
          className="px-5 py-3 rounded-lg bg-black text-white hover:bg-gray-800 transition-all duration-200 hover:transform hover:-translate-y-1"
        >
          Get Started
        </Link>

        <Link
          to="/projects"
          className="px-5 py-3 rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-900 transition-all duration-200 hover:transform hover:-translate-y-1"
        >
          View Projects
        </Link>
      </div>
    </section>
  );
}
