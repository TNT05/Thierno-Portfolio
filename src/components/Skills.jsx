import { skills } from '../data/mockData';

export default function Skills() {
  return (
    <section id="skills" className="section-divider relative py-24 overflow-hidden">
      {/* Background kente pattern */}
      <div
        className="absolute inset-0 kente-pattern pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-16">
        {/* Section label */}
        <p className="font-mono text-xs uppercase tracking-widest text-outline mb-4">
          04 / Skills
        </p>

        {/* Section headline with warm radial glow */}
        <div className="skills-headline-wrap mb-16">
          <div
            className="skills-headline-glow motion-reduce:hidden"
            aria-hidden="true"
          />
          <h2
            className="font-headline font-black text-on-background leading-none"
            style={{
              fontSize: 'clamp(3rem, 8vw, 7rem)',
              letterSpacing: '-0.04em',
            }}
          >
            THE STACK
          </h2>
        </div>

        {/* Left gradient accent rail */}
        <div
          className="skills-accent-rail absolute left-0 top-24 bottom-24 w-[3px]"
          aria-hidden="true"
        />

        {/* Skills grid — 4 columns with staggered entrance */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {Object.entries(skills).map(([category, items], catIdx) => (
            <div
              key={category}
              className="skills-col space-y-4"
              style={{ animationDelay: `${catIdx * 110}ms` }}
            >
              {/* Column header */}
              <div className="space-y-2">
                <h3 className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-primary-container font-semibold">
                  <span
                    className="inline-block w-1.5 h-1.5 rounded-full bg-primary-container"
                    aria-hidden="true"
                  />
                  {category}
                </h3>
                <div
                  className="skills-col-rule w-10 h-px bg-primary-container"
                  style={{ animationDelay: `${catIdx * 110 + 260}ms` }}
                />
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-2">
                {items.map((skill, idx) => {
                  const isFeatured = idx === 0;
                  return (
                    <span
                      key={skill}
                      className={`skill-badge ${isFeatured ? 'skill-badge--featured' : ''} font-mono text-xs uppercase tracking-widest px-3 py-1.5 border border-outline-variant`}
                      style={{
                        backgroundColor: '#1c1b1b',
                        borderRadius: '4px',
                        color: isFeatured ? '#ffb955' : '#e1bfb5',
                        letterSpacing: '0.08em',
                      }}
                    >
                      {skill}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
