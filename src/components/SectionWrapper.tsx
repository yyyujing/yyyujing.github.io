import type { ReactNode } from 'react';

interface SectionWrapperProps {
  id: string;
  title?: string;
  children: ReactNode;
  className?: string;
}

const SectionWrapper = ({ id, title, children, className = '' }: SectionWrapperProps) => {
  return (
    <section id={id} className={`py-16 sm:py-20 ${className}`}>
      <div className="section-container">
        {title && (
          <header className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">
              {title}
            </h2>
          </header>
        )}
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
