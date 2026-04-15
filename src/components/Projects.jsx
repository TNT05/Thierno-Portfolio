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
          {/* Terracotta hairline accent under the section label */}
          <div
            className="mt-3 h-px w-16 bg-primary-container/70"
            aria-hidden="true"
          />
        </div>

        {/* Main card area */}
        <div className="flex-1 flex flex-col lg:flex-row items-stretch">
          {/* LEFT — Content panel */}
          <div className="group lg:w-2/5 flex flex-col justify-center px-6 md:px-16 py-12 lg:pt-0 lg:pb-12 space-y-6 bg-background bg-opacity-90">
            {/* Decorative project number */}
            <div
              className="font-headline font-black text-primary-container leading-none select-none transition-all duration-500 ease-out motion-reduce:transition-none group-hover:[text-shadow:0_0_32px_rgba(193,68,14,0.35)] group-hover:-translate-y-0.5 motion-reduce:group-hover:translate-y-0"
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
                  className="font-mono text-xs uppercase tracking-widest text-tertiary border border-outline-variant px-3 py-1.5 transition-colors duration-200 motion-reduce:transition-none hover:border-primary-container/60"
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
              className="inline-flex items-center gap-2 font-mono text-sm uppercase tracking-widest text-primary-container hover:text-secondary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-container/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              View Case Study
              <span
                aria-hidden="true"
                className="inline-block transition-transform duration-200 ease-out motion-reduce:transition-none group-hover:translate-x-1"
              >
                →
              </span>
            </a>
          </div>

          {/* RIGHT — Project mockup */}
          <div className="lg:w-3/5 relative bg-surface-container-low flex items-center justify-center min-h-64 lg:min-h-0">
            <div className="w-full h-full flex items-center justify-center p-8">
              <div
                className="w-full max-w-2xl aspect-video bg-surface-container border border-outline-variant flex items-center justify-center shadow-2xl shadow-black/40 ring-1 ring-inset ring-white/[0.02] transition-transform duration-500 ease-out motion-reduce:transition-none hover:-translate-y-1"
                style={{ borderRadius: '2px' }}
              >
                <span className="font-mono text-xs text-outline uppercase tracking-widest">
                  Project Mockup
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom controls — elevated with cinematic gradient + hairline */}
        <div className="relative">
          {/* Cinematic gradient sweep that lifts controls off the kente pattern */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-b from-surface-container-lowest via-background/95 to-transparent pointer-events-none"
          />
          {/* Terracotta hairline accent across the top of the bar */}
          <div
            aria-hidden="true"
            className="absolute inset-x-6 md:inset-x-16 top-0 h-px bg-gradient-to-r from-transparent via-primary-container/40 to-transparent"
          />

          <div className="relative px-6 md:px-16 py-8 flex items-center justify-between">
            {/* Dot pagination */}
            <div
              className="flex items-center gap-1"
              role="tablist"
              aria-label="Project navigation"
            >
              {projects.map((_, i) => {
                const isActive = i === active;
                return (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    role="tab"
                    aria-selected={isActive}
                    aria-label={`Go to project ${i + 1}`}
                    className="group/dot relative grid place-items-center p-2 bg-transparent border-0 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-container/60 rounded-sm"
                  >
                    <span
                      aria-hidden="true"
                      className={[
                        'block rounded-full transition-all duration-300 ease-out motion-reduce:transition-none',
                        isActive
                          ? 'w-6 h-2 bg-primary-container shadow-[0_0_12px_rgba(193,68,14,0.55)]'
                          : 'w-2 h-2 bg-outline-variant group-hover/dot:bg-outline',
                      ].join(' ')}
                    />
                  </button>
                );
              })}
            </div>

            {/* Prev/Next + label */}
            <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-outline">
              <button
                onClick={() => setActive((prev) => Math.max(prev - 1, 0))}
                disabled={active === 0}
                aria-label="Previous project"
                className="inline-flex items-center justify-center w-11 h-11 border border-outline-variant rounded-sm bg-surface-container-lowest/60 text-on-surface-variant hover:text-primary-container hover:border-primary-container/60 hover:bg-surface-container/80 disabled:opacity-30 disabled:hover:text-on-surface-variant disabled:hover:border-outline-variant disabled:hover:bg-surface-container-lowest/60 disabled:cursor-not-allowed transition-all duration-200 motion-reduce:transition-none cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-container/60"
              >
                <span aria-hidden="true" className="text-sm leading-none">←</span>
              </button>
              <span className="select-none text-outline/90">Swipe</span>
              <button
                onClick={() => setActive((prev) => Math.min(prev + 1, projects.length - 1))}
                disabled={active === projects.length - 1}
                aria-label="Next project"
                className="inline-flex items-center justify-center w-11 h-11 border border-outline-variant rounded-sm bg-surface-container-lowest/60 text-on-surface-variant hover:text-primary-container hover:border-primary-container/60 hover:bg-surface-container/80 disabled:opacity-30 disabled:hover:text-on-surface-variant disabled:hover:border-outline-variant disabled:hover:bg-surface-container-lowest/60 disabled:cursor-not-allowed transition-all duration-200 motion-reduce:transition-none cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-container/60"
              >
                <span aria-hidden="true" className="text-sm leading-none">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
