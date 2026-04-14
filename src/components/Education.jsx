import { education } from '../data/mockData';

export default function Education() {
  return (
    <section id="education" className="section-divider relative py-24 overflow-hidden">
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

        {/* Headline */}
        <h2
          className="font-headline font-black text-on-background mb-4 leading-tight"
          style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', letterSpacing: '-0.03em' }}
        >
          The Foundation
        </h2>
        <p className="font-body italic text-on-surface-variant mb-16 max-w-md">
          The intellectual scaffolding upon which any engineering practice is built.
        </p>

        {/* Education cards */}
        <div className="space-y-8">
          {education.map((edu, idx) => (
            <div
              key={edu.institution}
              className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-8 p-8 border-l-2 border-primary-container"
              style={{ backgroundColor: 'rgba(28,27,27,0.8)', borderRadius: '2px' }}
            >
              {/* Left — Content */}
              <div className="space-y-4">
                {/* Institution */}
                <p className="font-mono text-xs uppercase tracking-widest text-outline">
                  {edu.institution}
                </p>

                {/* Degree */}
                <h3
                  className="font-headline font-bold text-primary-container leading-tight"
                  style={{ fontSize: 'clamp(1.25rem, 2.5vw, 2rem)', letterSpacing: '-0.01em' }}
                >
                  {edu.degree}
                </h3>

                {/* Period */}
                <p className="font-mono text-xs uppercase tracking-widest text-outline">
                  {edu.period}
                </p>

                {/* Description */}
                <p className="font-body text-on-surface-variant" style={{ lineHeight: 1.75 }}>
                  {edu.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-1">
                  {edu.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-outline"
                    >
                      <span className="w-1 h-1 rounded-full bg-primary-container shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right — Image placeholder */}
              <div
                className="hidden lg:flex items-center justify-center bg-surface-container border border-outline-variant"
                style={{ borderRadius: '2px', minHeight: '180px' }}
              >
                <span className="font-mono text-xs text-outline uppercase tracking-widest text-center px-4">
                  Institution
                  <br />
                  Image
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom footer strip */}
      <div className="mt-24 border-t border-outline-variant">
        <div className="max-w-7xl mx-auto px-6 md:px-16 py-6 flex items-center justify-between">
          <span className="font-headline font-bold text-on-background text-sm">TB</span>
          <p className="font-mono text-xs text-outline uppercase tracking-widest">
            Building the evolution of digital craft
          </p>
        </div>
      </div>
    </section>
  );
}
