import { useState, useEffect } from 'react';
import { siteData, navLinks } from '../data/mockData';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Scroll listener — toggles the glass/hairline state after 60px
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // IntersectionObserver — tracks which section is in view for active nav link
  useEffect(() => {
    const sectionIds = navLinks
      .map((link) => link.href.replace('#', ''))
      .filter(Boolean);

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the most visible intersecting section
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) {
          setActiveSection(`#${visible[0].target.id}`);
        }
      },
      {
        // Trigger when section crosses the middle of the viewport
        rootMargin: '-40% 0px -55% 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={`nav-bar nav-enter fixed top-0 left-0 right-0 z-50 ${
        scrolled ? 'nav-bar--scrolled' : ''
      }`}
      aria-label="Primary navigation"
      role="navigation"
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Wordmark */}
        <a
          href="#"
          className="nav-wordmark font-headline font-bold text-xl tracking-tight"
          aria-label={`${siteData.name} — back to top`}
        >
          {siteData.initials}
          <span className="nav-wordmark-dot" aria-hidden="true" />
        </a>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8" role="menubar">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href;
            return (
              <a
                key={link.label}
                href={link.href}
                role="menuitem"
                aria-current={isActive ? 'location' : undefined}
                className={`nav-link font-label text-sm uppercase tracking-widest ${
                  isActive ? 'nav-link--active' : ''
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        {/* Resume CTA */}
        <a
          href="/Thierno-resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-cta hidden md:inline-flex items-center font-label font-semibold text-xs uppercase tracking-widest"
          aria-label="Open resume PDF"
        >
          <span className="nav-cta-label">Resume</span>
          <span className="nav-cta-arrow" aria-hidden="true">
            &rarr;
          </span>
        </a>
      </div>
    </nav>
  );
}
