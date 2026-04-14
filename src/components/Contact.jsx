import { siteData } from '../data/mockData';

export default function Contact() {
  return (
    <section id="contact" className="section-divider relative overflow-hidden">
      {/* Full kente diamond pattern background */}
      <div
        className="absolute inset-0 kente-pattern pointer-events-none"
        aria-hidden="true"
      />

      {/* Main content — fullscreen centered */}
      <div className="relative min-h-screen flex flex-col">
        {/* Top section */}
        <div className="flex-1 flex flex-col items-center justify-center px-6 md:px-16 py-24 text-center space-y-8">
          {/* Section label */}
          <p className="font-mono text-xs uppercase tracking-widest text-outline">
            08 / Contact
          </p>

          {/* Headline */}
          <h2
            className="font-headline font-black text-on-background leading-none"
            style={{
              fontSize: 'clamp(3rem, 10vw, 8rem)',
              letterSpacing: '-0.04em',
              lineHeight: 1.0,
            }}
          >
            LET'S BUILD
            <br />
            <span className="text-primary-container">SOMETHING.</span>
          </h2>

          {/* Subtext */}
          <p
            className="font-body italic text-on-surface-variant max-w-md"
            style={{ fontSize: '1.125rem', lineHeight: 1.7 }}
          >
            Open to opportunities, collaborations, and interesting problems.
          </p>

          {/* CTA button */}
          <a
            href={`mailto:${siteData.email}`}
            className="inline-flex items-center px-10 py-4 bg-primary-container text-on-primary-container font-label font-semibold text-sm uppercase tracking-widest hover:bg-secondary-container transition-colors"
            style={{ borderRadius: '2px' }}
          >
            Get in Touch
          </a>

          {/* Email */}
          <a
            href={`mailto:${siteData.email}`}
            className="font-mono text-sm text-on-surface-variant hover:text-primary-container transition-colors"
          >
            {siteData.email}
          </a>

          {/* Placeholder for form / card */}
          <div
            className="w-full max-w-lg aspect-video bg-surface-container border border-outline-variant flex items-center justify-center mt-4"
            style={{ borderRadius: '2px' }}
          >
            <span className="font-mono text-xs text-outline uppercase tracking-widest">
              Contact Form
            </span>
          </div>
        </div>

        {/* Footer strip */}
        <footer
          className="relative border-t border-outline-variant bg-surface-container-lowest"
          style={{ backgroundColor: '#0e0e0e' }}
        >
          <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Wordmark */}
            <span className="font-headline font-bold text-on-background">TB</span>

            {/* Socials */}
            <div className="flex items-center gap-6">
              {Object.entries(siteData.socials).map(([key, url]) => (
                <a
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs uppercase tracking-widest text-outline hover:text-primary-container transition-colors"
                >
                  {key}
                </a>
              ))}
            </div>

            {/* Copyright */}
            <p className="font-mono text-xs uppercase tracking-widest text-outline">
              © 2025 Thierno Barry. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </section>
  );
}
