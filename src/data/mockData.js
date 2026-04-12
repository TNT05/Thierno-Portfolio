export const siteData = {
  name: 'Thierno Barry',
  initials: 'TB',
  tagline: 'Software Engineer & Builder crafting tactile digital experiences through technical precision and editorial narrative.',
  email: 'thierno@example.com',
  location: 'Canada',
  socials: {
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com',
  },
};

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export const projects = [
  {
    id: '01',
    title: 'FinTrack Dashboard',
    description: 'Reimagining institutional asset management through a brutalist, data-first architectural interface.',
    stack: ['REACT', 'NODE.JS', 'POSTGRESQL'],
    link: '#',
    image: null,
  },
  {
    id: '02',
    title: 'Kinetic API',
    description: 'A high-performance REST API built for real-time financial data streaming at institutional scale.',
    stack: ['GO', 'REDIS', 'DOCKER'],
    link: '#',
    image: null,
  },
  {
    id: '03',
    title: 'Atlas CMS',
    description: 'A headless content management system designed for editorial teams at speed.',
    stack: ['NEXT.JS', 'FASTAPI', 'AWS'],
    link: '#',
    image: null,
  },
];

export const skills = {
  LANGUAGES: ['Python', 'JavaScript/TypeScript', 'Go', 'SQL'],
  FRAMEWORKS: ['React', 'Next.js', 'Node.js', 'FastAPI', 'Express'],
  TOOLS: ['Docker', 'Git', 'PostgreSQL', 'Redis', 'AWS'],
  PRACTICES: ['TDD', 'CI/CD', 'REST APIs', 'System Design', 'Agile'],
};

export const experience = [
  {
    period: '2023 — Present',
    company: 'ACCENTURE',
    role: 'Software Engineer',
    quote: '"A career narrative exploring scalable enterprise solutions and modern frontend architectures."',
    stack: ['REACT', 'JAVA', 'AWS'],
  },
  {
    period: '2022 — 2023',
    company: 'STARTUP CO.',
    role: 'Full Stack Developer',
    quote: '"Navigating the chaos of early-stage growth, building the technical foundation for a revolutionary fintech platform."',
    stack: ['PYTHON', 'FASTAPI', 'POSTGRESQL'],
  },
  {
    period: '2021 — 2022',
    company: 'FREELANCE',
    role: 'Web Developer',
    quote: '"Forging a path as a digital craftsman, delivering bespoke web experiences for diverse clients across the globe."',
    stack: ['JAVASCRIPT', 'REACT', 'FIREBASE'],
  },
];

export const education = [
  {
    institution: 'UNIVERSITY OF OTTAWA',
    degree: 'B.Sc. Computer Science',
    period: '2019 — 2023',
    description: 'Intensive focus on distributed systems and algorithmic complexity within a research-driven environment. Developed a deep proficiency in low-level architecture and high-scale software patterns.',
    highlights: ['Distributed Computing', 'Algorithms & Data Structures', 'Software Design'],
  },
  {
    institution: 'CARLETON UNIVERSITY',
    degree: 'Minor in Mathematics',
    period: '2019 — 2023',
    description: 'Formal study of abstract structures, number theory, and linear algebra. This mathematical rigour informs my approach to encryption, data structures, and computational optimisation.',
    highlights: ['Number Theory', 'Linear Algebra', 'Statistical Methods'],
  },
];

export const certifications = [
  {
    name: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    year: '2024',
    status: 'ACTIVE',
    icon: '☁️',
  },
  {
    name: 'Professional Scrum Master I',
    issuer: 'Scrum.org',
    year: '2023',
    status: 'ACTIVE',
    icon: '⚡',
  },
  {
    name: 'Google Data Analytics',
    issuer: 'Google',
    year: '2022',
    status: 'ACTIVE',
    icon: '📊',
  },
];
