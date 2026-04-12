import { certifications } from '../data/mockData';

export default function Certifications() {
  return (
    <section id="certifications" className="relative bg-background py-24 overflow-hidden">
      {/* Background kente pattern */}
      <div
        className="absolute inset-0 kente-pattern-subtle pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-16">
        {/* Section label */}
        <p className="font-mono text-xs uppercase tracking-widest text-outline mb-4">
          09 / Certifications
        </p>

        {/* Headline */}
        <h2
          className="font-headline font-black text-on-background mb-16 leading-none"
          style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', letterSpacing: '-0.03em' }}
        >
          Credentials
        </h2>

        {/* Cert grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="relative flex flex-col gap-4 p-6 border border-outline-variant"
              style={{
                backgroundColor: '#1c1b1b',
                borderRadius: '2px',
              }}
            >
              {/* Active badge */}
              <span
                className="absolute top-4 right-4 font-mono text-xs uppercase tracking-widest text-tertiary border border-outline-variant px-2 py-1"
                style={{ backgroundColor: '#1c1b1b', borderRadius: '4px' }}
              >
                {cert.status}
              </span>

              {/* Icon */}
              <div
                className="w-10 h-10 flex items-center justify-center bg-surface-container border border-outline-variant text-lg"
                style={{ borderRadius: '4px' }}
                aria-hidden="true"
              >
                {cert.icon}
              </div>

              {/* Name */}
              <h3
                className="font-headline font-bold text-on-background leading-tight pr-16"
                style={{ fontSize: '1.125rem' }}
              >
                {cert.name}
              </h3>

              {/* Issuer */}
              <p className="font-mono text-xs uppercase tracking-widest text-primary-container">
                {cert.issuer}
              </p>

              {/* Divider */}
              <div className="h-px bg-outline-variant" />

              {/* Validated date */}
              <p className="font-mono text-xs uppercase tracking-widest text-outline">
                Validated: {cert.year}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
