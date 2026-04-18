import { education } from '../data/mockData';

export default function Education() {
  return (
    <section
      id="education"
      className="section-divider relative py-24 overflow-hidden"
      aria-labelledby="education-heading"
    >
      {/* Background kente */}
      <div
        className="absolute inset-0 kente-pattern-subtle pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-16">
        {/* Section label */}
        <p className="font-mono text-xs uppercase tracking-widest text-outline mb-4">
          06 / Education
        </p>

        {/* Headline with breathing radial glow */}
        <div className="exp-headline-wrap">
          <div className="exp-headline-glow" aria-hidden="true" />
          <h2
            id="education-heading"
            className="exp-headline-built font-headline font-black text-on-background mb-4 leading-tight"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', letterSpacing: '-0.03em' }}
          >
            The Foundation
          </h2>
        </div>

        <p
          className="exp-quote font-body italic text-on-surface-variant mb-16 max-w-md"
          style={{ lineHeight: 1.65 }}
        >
          The intellectual scaffolding upon which any engineering practice is built.
        </p>

        {/* Education cards */}
        <div className="space-y-8">
          {education.map((edu, idx) => (
            <article
              key={edu.institution}
              className="edu-card relative grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-8 p-8"
              style={{
                backgroundColor: 'rgba(28,27,27,0.8)',
                borderRadius: '2px',
                animationDelay: `${idx * 150}ms`,
              }}
              aria-label={`${edu.degree} at ${edu.institution}`}
            >
              {/* Gradient left accent rail */}
              <span className="edu-accent-rail" aria-hidden="true" />

              {/* Left — Content */}
              <div className="space-y-4 relative">
                {/* Institution */}
                <p className="edu-institution font-mono text-xs uppercase tracking-widest text-outline">
                  {edu.institution}
                </p>

                {/* Degree */}
                <h3
                  className="edu-degree font-headline font-bold text-primary-container leading-tight"
                  style={{ fontSize: 'clamp(1.25rem, 2.5vw, 2rem)', letterSpacing: '-0.01em' }}
                >
                  {edu.degree}
                </h3>

                {/* Period as pill badge */}
                <p>
                  <span className="edu-period font-mono text-[0.68rem] uppercase tracking-widest text-outline">
                    {edu.period}
                  </span>
                </p>

                {/* Description */}
                <p className="font-body text-on-surface-variant" style={{ lineHeight: 1.75 }}>
                  {edu.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-1" aria-label="Coursework highlights">
                  {edu.highlights.map((item) => (
                    <li
                      key={item}
                      className="edu-highlight font-mono text-xs uppercase tracking-widest text-outline"
                    >
                      <span className="edu-highlight-dot" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right — Decorative index panel */}
              <div
                className="edu-index-panel hidden lg:flex flex-col items-center justify-center border border-outline-variant relative"
                style={{ borderRadius: '2px', minHeight: '200px' }}
                aria-hidden="true"
              >
                <span className="edu-index relative z-10">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <span className="edu-crest-label mt-2 relative z-10">Chapter</span>
              </div>
            </article>
          ))}
        </div>
      </div>

    </section>
  );
}
