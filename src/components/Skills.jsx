import { skills } from '../data/mockData';

export default function Skills() {
  return (
    <section id="skills" className="relative bg-surface-container-lowest py-24 overflow-hidden">
      {/* Background kente pattern */}
      <div
        className="absolute inset-0 kente-pattern pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-16">
        {/* Section label */}
        <p className="font-mono text-xs uppercase tracking-widest text-outline mb-4">
          05 / Skills
        </p>

        {/* Section headline */}
        <h2
          className="font-headline font-black text-on-background mb-16 leading-none"
          style={{
            fontSize: 'clamp(3rem, 8vw, 7rem)',
            letterSpacing: '-0.04em',
          }}
        >
          THE STACK
        </h2>

        {/* Left border accent */}
        <div className="absolute left-0 top-24 bottom-24 w-1 bg-primary-container opacity-60" />

        {/* Skills grid — 4 columns */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {Object.entries(skills).map(([category, items], catIdx) => (
            <div key={category} className="space-y-4">
              {/* Column header */}
              <div className="space-y-2">
                <h3 className="font-mono text-xs uppercase tracking-widest text-primary-container font-semibold">
                  {category}
                </h3>
                <div className="w-8 h-px bg-primary-container" />
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-2">
                {items.map((skill, idx) => {
                  const isFeatured = idx === 0;
                  return (
                    <span
                      key={skill}
                      className="font-mono text-xs uppercase tracking-widest px-3 py-1.5 border border-outline-variant"
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

        {/* Bottom editorial section */}
        <div
          className="border-t border-outline-variant pt-12 grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {/* Quote */}
          <div className="space-y-4">
            <p className="font-mono text-xs uppercase tracking-widest text-primary-container">
              Technical Philosophy
            </p>
            <blockquote
              className="font-body italic text-on-surface-variant"
              style={{ fontSize: '1.125rem', lineHeight: 1.7 }}
            >
              "Precision is not just about writing code; it's about architecting systems
              that resist entropy."
            </blockquote>
            <p className="font-mono text-xs text-outline uppercase tracking-widest">
              Code Direction / Velocity
            </p>
          </div>

          {/* Stats block */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 font-mono text-xs">
              <span className="text-primary-container uppercase tracking-widest">Encryption_Status:</span>
              <span className="text-tertiary uppercase tracking-widest">Secure</span>
            </div>
            <p className="font-body text-on-surface-variant" style={{ lineHeight: 1.7 }}>
              My development methodology leverages high-performance backends with modern
              frontend architectures. I prioritize <strong className="text-on-background">Type Safety</strong> across
              the full stack while maintaining a <strong className="text-on-background">Brutalist</strong> approach
              to UI/UX, ensuring that every interaction is intentional.
            </p>
            <div className="flex gap-8 font-mono">
              {[
                { label: 'Uptime', value: '99.99%' },
                { label: 'Coverage', value: '94%' },
                { label: 'Velocity', value: 'MAX' },
              ].map(({ label, value }) => (
                <div key={label}>
                  <div className="text-xs uppercase tracking-widest text-outline">{label}</div>
                  <div className="text-lg font-semibold text-on-background">{value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
