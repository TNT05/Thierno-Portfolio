import { useState } from 'react';
import { projects } from '../data/mockData';

export default function Projects() {
  const [active, setActive] = useState(0);

  const project = projects[active];

  return (
    <section id="projects" className="relative bg-background overflow-hidden">
      {/* Full kente diamond border pattern */}
      <div
        className="absolute inset-0 kente-pattern pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative min-h-screen flex flex-col">
        {/* Section label */}
        <div className="px-6 md:px-16 pt-24">
          <p className="font-mono text-xs uppercase tracking-widest text-outline">
            03 / Projects
          </p>
        </div>

        {/* Main card area */}
        <div className="flex-1 flex flex-col lg:flex-row items-stretch">
          {/* LEFT — Content panel */}
          <div className="lg:w-2/5 flex flex-col justify-center px-6 md:px-16 py-12 lg:py-0 space-y-6 bg-background bg-opacity-90">
            {/* Decorative project number */}
            <div
              className="font-headline font-black text-primary-container leading-none select-none"
              style={{ fontSize: 'clamp(4rem, 10vw, 8rem)', opacity: 0.9 }}
              aria-hidden="true"
            >
              {project.id}
            </div>

            {/* Title */}
            <h2
              className="font-headline font-bold text-on-background leading-tight"
              style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', letterSpacing: '-0.02em' }}
            >
              {project.title}
            </h2>

            {/* Description */}
            <p className="font-body italic text-on-surface-variant" style={{ lineHeight: 1.65 }}>
              {project.description}
            </p>

            {/* Stack badges */}
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-xs uppercase tracking-widest text-tertiary border border-outline-variant px-3 py-1.5"
                  style={{
                    backgroundColor: 'rgba(30,29,29,0.9)',
                    borderRadius: '4px',
                    letterSpacing: '0.08em',
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* CTA */}
            <a
              href={project.link}
              className="inline-flex items-center gap-2 font-mono text-sm uppercase tracking-widest text-primary-container hover:text-secondary transition-colors"
            >
              View Case Study
              <span aria-hidden="true">→</span>
            </a>
          </div>

          {/* RIGHT — Project mockup */}
          <div className="lg:w-3/5 relative bg-surface-container-low flex items-center justify-center min-h-64 lg:min-h-0">
            <div className="w-full h-full flex items-center justify-center p-8">
              <div
                className="w-full max-w-2xl aspect-video bg-surface-container border border-outline-variant flex items-center justify-center"
                style={{ borderRadius: '2px' }}
              >
                <span className="font-mono text-xs text-outline uppercase tracking-widest">
                  Project Mockup
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom controls */}
        <div className="px-6 md:px-16 py-8 flex items-center justify-between">
          {/* Dot pagination */}
          <div className="flex items-center gap-3">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className="transition-all duration-200"
                aria-label={`Go to project ${i + 1}`}
                style={{
                  width: i === active ? '24px' : '8px',
                  height: '8px',
                  borderRadius: '4px',
                  backgroundColor: i === active ? '#c1440e' : '#59413a',
                  border: 'none',
                  cursor: 'pointer',
                }}
              />
            ))}
          </div>

          {/* Scroll hint */}
          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-outline">
            <button
              onClick={() => setActive((prev) => Math.max(prev - 1, 0))}
              disabled={active === 0}
              className="hover:text-primary-container disabled:opacity-30 transition-colors bg-transparent border-0 cursor-pointer text-current font-mono text-xs uppercase tracking-widest"
            >
              ←
            </button>
            <span>Swipe</span>
            <button
              onClick={() => setActive((prev) => Math.min(prev + 1, projects.length - 1))}
              disabled={active === projects.length - 1}
              className="hover:text-primary-container disabled:opacity-30 transition-colors bg-transparent border-0 cursor-pointer text-current font-mono text-xs uppercase tracking-widest"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
