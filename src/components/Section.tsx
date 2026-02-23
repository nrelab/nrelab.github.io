import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export default function Section({ children, className = '', id }: SectionProps): JSX.Element {
  return (
    <section className={`py-20 ${className}`} id={id}>
      <div className="container">
        {children}
      </div>
    </section>
  );
}
