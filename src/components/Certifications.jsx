import { certifications } from '../data/mockData';

export default function Certifications() {
  return (
    <section id="certifications" className="section-divider relative py-24 overflow-hidden">
      {/* Background kente pattern */}
      <div
        className="absolute inset-0 kente-pattern-subtle pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-16">
        {/* Section label */}
        <p className="font-mono text-xs uppercase tracking-widest text-outline mb-4">
          07 / Certifications
        </p>

        {/* Headline with radial glow */}
        <span className="exp-headline-wrap inline-block">
          <span className="exp-headline-glow" aria-hidden="true" />
          <h2
            className="font-headline font-black text-on-background leading-none relative"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', letterSpacing: '-0.03em' }}
          >
            <span className="exp-headline-built">Credentials</span>
          </h2>
        </span>

        {/* Sub-italic tagline */}
        <p
          className="exp-quote font-body italic text-on-surface-variant mt-6 mb-16"
          style={{ fontSize: '1.05rem' }}
        >
          Proof of mastery, issued by those who know.
        </p>

        {/* Cert grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={cert.name}
              className="cert-card relative flex flex-col gap-4 p-6 border border-outline-variant"
              style={{
                backgroundColor: '#1c1b1b',
                borderRadius: '2px',
                animationDelay: `${index * 120}ms`,
              }}
            >
              {/* Top gradient accent bar */}
              <span className="cert-top-rail" aria-hidden="true" />

              {/* Active status badge */}
              <span className="cert-status absolute top-4 right-4 font-mono text-xs uppercase tracking-widest">
                <span className="cert-status-dot" aria-hidden="true" />
                {cert.status}
              </span>

              {/* Icon */}
              <div
                className="cert-icon flex items-center justify-center text-2xl"
                aria-hidden="true"
              >
                {cert.icon}
              </div>

              {/* Name */}
              <h3
                className="cert-name font-headline font-bold text-on-background leading-tight pr-16"
                style={{ fontSize: '1.125rem' }}
              >
                {cert.name}
              </h3>

              {/* Issuer */}
              <p className="cert-issuer font-mono text-xs uppercase tracking-widest text-primary-container">
                {cert.issuer}
              </p>

              {/* Gradient hairline divider */}
              <div className="cert-divider" aria-hidden="true" />

              {/* Validated year — pill */}
              <p className="cert-year font-mono text-xs uppercase tracking-widest text-outline">
                <span className="cert-year-dot" aria-hidden="true" />
                Validated: {cert.year}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom editorial callout */}
        <p
          className="cert-callout exp-quote font-body italic text-on-surface-variant mt-16"
          style={{ fontSize: '1.05rem' }}
        >
          Every <span className="exp-callout-word">credential</span> is a milestone.
          Every <span className="exp-callout-word">certification</span> is a commitment.
        </p>
      </div>
    </section>
  );
}
