import { siteData } from '../data/mockData';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-background"
    >
      {/* Kente right-edge band */}
      <div
        className="absolute right-0 top-0 bottom-0 w-16 md:w-24 kente-pattern opacity-80 pointer-events-none"
        aria-hidden="true"
      />

      {/* Subtle warm radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 60% at 30% 50%, rgba(193,68,14,0.08) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      {/* Social vertical strip */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-4 items-center">
        <div className="w-px h-16 bg-outline-variant" />
        {Object.entries(siteData.socials).map(([key, url]) => (
          <a
            key={key}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs uppercase tracking-widest text-on-surface-variant hover:text-primary-container transition-colors"
            style={{ writingMode: 'vertical-rl' }}
          >
            {key}
          </a>
        ))}
        <div className="w-px h-16 bg-outline-variant" />
      </div>

      {/* Main content */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-16 w-full pt-24 pb-16">
        {/* Section label */}
        <p className="font-mono text-xs uppercase tracking-widest text-outline mb-6">
          01 / Hero
        </p>

        {/* Name display */}
        <h1
          className="font-headline font-black leading-none tracking-tight text-on-background mb-6"
          style={{
            fontSize: 'clamp(4rem, 12vw, 10rem)',
            letterSpacing: '-0.04em',
            lineHeight: 1.0,
          }}
        >
          THIERNO
          <br />
          <span className="text-primary-container">BARRY</span>
        </h1>

        {/* Tagline */}
        <p
          className="font-body italic text-on-surface-variant max-w-md mb-10"
          style={{ fontSize: 'clamp(1rem, 1.5vw, 1.25rem)', lineHeight: 1.6 }}
        >
          {siteData.tagline}
        </p>

        {/* CTA button */}
        <a
          href="#projects"
          className="inline-flex items-center gap-2 border border-primary-container text-primary-container font-label font-semibold text-sm uppercase tracking-widest px-6 py-3 hover:bg-primary-container hover:text-on-primary-container transition-all duration-200"
          style={{ borderRadius: '2px' }}
        >
          Explore the work
          <span aria-hidden="true">→</span>
        </a>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-outline">
          <span className="font-mono text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-px h-8 bg-outline-variant animate-pulse" />
        </div>
      </div>

      {/* Footer line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-outline-variant opacity-40" />
    </section>
  );
}
