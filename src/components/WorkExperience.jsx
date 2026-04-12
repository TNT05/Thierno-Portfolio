import { experience } from '../data/mockData';

export default function WorkExperience() {
  return (
    <section id="experience" className="relative bg-background py-24 overflow-hidden">
      {/* Right kente accent */}
      <div
        className="absolute right-0 top-0 bottom-0 w-16 kente-pattern-subtle pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-16">
        {/* Section label */}
        <p className="font-mono text-xs uppercase tracking-widest text-outline mb-4">
          07 / Experience
        </p>

        {/* Section headline */}
        <h2
          className="font-headline font-black leading-tight mb-20"
          style={{
            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
            letterSpacing: '-0.03em',
          }}
        >
          <span className="text-on-background">Where I've</span>
          <br />
          <span className="text-primary-container">Built</span>
        </h2>

        {/* Timeline entries */}
        <div className="space-y-16">
          {experience.map((job, idx) => (
            <div key={job.company} className="grid grid-cols-1 lg:grid-cols-[200px_1px_1fr] gap-0 items-start">
              {/* Date */}
              <div className="pb-4 lg:pb-0 lg:pr-8 lg:text-right">
                <span className="font-mono text-xs uppercase tracking-widest text-on-surface-variant">
                  {job.period}
                </span>
              </div>

              {/* Timeline spine */}
              <div className="hidden lg:flex flex-col items-center">
                <div className="w-px bg-primary-container flex-1 min-h-full" style={{ minHeight: '120px' }} />
                <div
                  className="w-2 h-2 rounded-full bg-primary-container shrink-0 my-2"
                  aria-hidden="true"
                />
              </div>

              {/* Content */}
              <div className="lg:pl-8 space-y-4">
                {/* Role */}
                <p className="font-mono text-xs uppercase tracking-widest text-primary-container">
                  {job.role}
                </p>

                {/* Company */}
                <h3
                  className="font-headline font-black text-on-background leading-none"
                  style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', letterSpacing: '-0.02em' }}
                >
                  {job.company}
                </h3>

                {/* Quote */}
                <blockquote
                  className="font-body italic text-on-surface-variant"
                  style={{ lineHeight: 1.7 }}
                >
                  {job.quote}
                </blockquote>

                {/* Stack badges */}
                <div className="flex flex-wrap gap-2">
                  {job.stack.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-xs uppercase tracking-widest text-tertiary border border-outline-variant px-3 py-1"
                      style={{
                        backgroundColor: '#1c1b1b',
                        borderRadius: '4px',
                        letterSpacing: '0.08em',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom editorial callout */}
        <div className="mt-24 pt-12 border-t border-outline-variant">
          <p
            className="font-headline font-black text-center uppercase text-on-surface-variant opacity-30 leading-tight"
            style={{ fontSize: 'clamp(1rem, 3vw, 2rem)', letterSpacing: '0.1em' }}
          >
            Engineering Narratives Through{' '}
            <em className="text-primary-container not-italic">Code</em>
            {' '}And{' '}
            <em className="text-primary-container not-italic">Architecture</em>.
          </p>
        </div>
      </div>
    </section>
  );
}
