import { useState, useEffect } from 'react';
import { siteData, navLinks } from '../data/mockData';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        backgroundColor: scrolled ? 'rgba(19,19,19,0.85)' : 'transparent',
        borderBottom: scrolled ? '1px solid rgba(89,65,58,0.3)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Wordmark */}
        <a
          href="#"
          className="font-headline font-bold text-lg tracking-tight text-on-background hover:text-primary-container transition-colors"
        >
          {siteData.initials}
        </a>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-label text-sm uppercase tracking-widest text-on-surface-variant hover:text-on-background transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-primary-container group-hover:w-full transition-all duration-200" />
            </a>
          ))}
        </div>

        {/* Resume CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center px-4 py-2 bg-primary-container text-on-primary-container font-label font-semibold text-xs uppercase tracking-widest hover:bg-secondary-container transition-colors"
          style={{ borderRadius: '2px' }}
        >
          Resume
        </a>
      </div>
    </nav>
  );
}
