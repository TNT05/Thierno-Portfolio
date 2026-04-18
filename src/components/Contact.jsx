import { siteData } from '../data/mockData';

export default function Contact() {
  return (
    <section id="contact" className="section-divider relative overflow-hidden">
      {/* Full kente diamond pattern background */}
      <div
        className="absolute inset-0 kente-pattern pointer-events-none"
        aria-hidden="true"
      />

      {/* Ambient grand-finale radial glow behind the headline */}
      <div className="contact-ambient" aria-hidden="true" />

      {/* Main content — fullscreen centered */}
      <div className="relative min-h-screen flex flex-col">
        {/* Top section */}
        <div className="flex-1 flex flex-col items-center justify-center px-6 md:px-16 py-24 text-center space-y-8">
          {/* Section label */}
          <p className="contact-eyebrow font-mono text-xs uppercase tracking-widest text-outline">
            08 / Contact
          </p>

          {/* Headline — staggered cinematic reveal */}
          <h2
            className="font-headline font-black text-on-background leading-none"
            style={{
              fontSize: 'clamp(3rem, 10vw, 8rem)',
              letterSpacing: '-0.04em',
              lineHeight: 1.0,
            }}
          >
            <span
              className="contact-headline-line"
              style={{ animationDelay: '120ms' }}
            >
              LET&apos;S BUILD
            </span>
            <br />
            <span
              className="contact-headline-line contact-headline-wrap"
              style={{ animationDelay: '320ms' }}
            >
              <span
                className="contact-headline-glow"
                aria-hidden="true"
              />
              <span className="text-primary-container contact-headline-built">
                SOMETHING.
              </span>
            </span>
          </h2>

          {/* Subtext — editorial quote treatment */}
          <p
            className="exp-quote font-body italic text-on-surface-variant max-w-md text-left mx-auto"
            style={{ fontSize: '1.125rem', lineHeight: 1.7 }}
          >
            Open to opportunities, collaborations, and interesting problems.
          </p>

          {/* CTA button — premium terracotta */}
          <a
            href={`mailto:${siteData.email}`}
            aria-label={`Send an email to ${siteData.email}`}
            className="contact-cta inline-flex items-center gap-3 px-10 py-4 bg-primary-container text-on-primary-container font-label font-semibold text-sm uppercase tracking-widest"
            style={{ borderRadius: '2px' }}
          >
            <span>Get in Touch</span>
            <span className="contact-cta-arrow" aria-hidden="true">&rarr;</span>
          </a>

          {/* Email — animated underline link */}
          <a
            href={`mailto:${siteData.email}`}
            aria-label={`Email address ${siteData.email}`}
            className="contact-email font-mono text-sm text-on-surface-variant"
          >
            {siteData.email}
          </a>

        </div>

        {/* Footer strip */}
        <footer
          className="contact-footer relative bg-surface-container-lowest"
          style={{ backgroundColor: '#0e0e0e' }}
        >
          <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Wordmark */}
            <span
              className="contact-wordmark font-headline font-bold text-on-background"
              aria-label="Thierno Barry wordmark"
            >
              TB
            </span>

            {/* Socials */}
            <div className="flex items-center gap-6">
              {Object.entries(siteData.socials).map(([key, url]) => (
                <a
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit Thierno Barry on ${key}`}
                  className="contact-social font-mono text-xs uppercase tracking-widest text-outline"
                >
                  <span className="contact-social-dot" aria-hidden="true" />
                  <span className="contact-social-label">{key}</span>
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
