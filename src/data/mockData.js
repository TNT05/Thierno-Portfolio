export const siteData = {
  name: 'Thierno Ibrahima Barry',
  initials: 'TB',
  tagline: 'Software Engineer spanning aerospace, robotics & the web — building systems that endure across industries and continents.',
  email: 'thierno05@hotmail.com',
  phone: '514-663-6153',
  location: 'Montreal, QC',
  socials: {
    github: 'https://github.com/thierno',
    linkedin: 'https://linkedin.com/in/Thierno',
  },
};

export const navLinks = [
  { label: 'About',      href: '#about' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact',    href: '#contact' },
];

export const projects = [
  {
    id: '01',
    title: 'Education-MindA.I.lytics',
    description: 'A deep learning Convolutional Neural Network trained on facial emotion recognition — an AI system capable of reading the room, built from scratch on PyTorch with a full-stack React + Flask interface and a complete data labelling pipeline.',
    stack: ['PYTHON', 'PYTORCH', 'FLASK', 'REACT', 'DOCKER'],
    link: '#',
    image: null,
  },
  {
    id: '02',
    title: 'CSSE Accounting System',
    description: 'A full-stack accounting platform built for a family school institution in Guinea — bridging continents through code, enabling tuition fee management and laying the foundation for a complete school ERP system.',
    stack: ['REACT', 'PYTHON', 'DJANGO', 'SQL'],
    link: '#',
    image: null,
  },
  {
    id: '03',
    title: 'IoT Flood Drain',
    description: 'A hardware-software hybrid that autonomously responds to floods. An Arduino system with multi-sensor water-level detection drives a real-time Node.js diagnostic web server — engineered for the physical world.',
    stack: ['C++', 'ARDUINO', 'NODE.JS', 'JAVASCRIPT'],
    link: '#',
    image: null,
  },
  {
    id: '04',
    title: 'JobShare',
    description: 'A professional social network for career collaboration — featuring real-time feeds, messaging, and connection discovery. Built on React, Redux, Node.js, and Firebase with full RTL and Cypress test coverage.',
    stack: ['REACT', 'REDUX', 'FIREBASE', 'NODE.JS'],
    link: '#',
    image: null,
  },
  {
    id: '05',
    title: 'ContentCalendar',
    description: 'An enterprise content scheduling tool powered by Java Spring Boot and Angular — full REST API architecture, Maven build pipeline, and SQL persistence built for editorial teams operating at scale.',
    stack: ['JAVA', 'SPRING BOOT', 'ANGULAR', 'SQL'],
    link: '#',
    image: null,
  },
  {
    id: '06',
    title: 'Condo Association Network',
    description: 'A PHP-driven community platform enabling condo owners to manage transactions, governance, and community communications — built end-to-end from frontend to SQL-backed database.',
    stack: ['PHP', 'SQL', 'HTML/CSS', 'GIT'],
    link: '#',
    image: null,
  },
];

export const skills = {
  LANGUAGES: [
    'Java',
    'Python',
    'JavaScript',
    'C / C++',
    'SQL (Postgres)',
    'C#',
    'PHP',
    'Bash / Shell',
  ],
  FRAMEWORKS: [
    'React',
    'Django REST',
    'Spring Boot',
    'Node.js',
    'Flask',
    'Angular',
    '.NET',
    'FastAPI',
    'Express',
    'PyTorch',
  ],
  TOOLS: [
    'Docker',
    'Git',
    'AWS',
    'Azure',
    'Linux',
    'Jenkins',
    'Postman',
    'Cypress',
    'TravisCI',
    'Google Cloud',
  ],
  PRACTICES: [
    'REST APIs',
    'CI / CD',
    'TDD',
    'Agile / Scrum',
    'IoT Systems',
    'Microservices',
    'ETL Pipelines',
    'System Design',
  ],
};

export const experience = [
  {
    period: 'Aug 2024 — Present',
    company: 'MDA SPACE',
    role: 'Intermediate Software Engineer',
    location: 'Longueuil, QC',
    quote: '"Building the systems behind satellite acquisitions — from financial infrastructure to orbital data pipelines, where the stakes are measured in orbit."',
    bullets: [
      'Built from scratch a Financial Update System (FUS) with React and Django REST Framework for processing invoices and payments.',
      'Developed core satellite picture acquisition functionalities using the Java Spring framework.',
      'Built a RESTful API notifying clients of upcoming maintenance windows.',
      'Deployed and managed Docker containers across company servers, including system-admin and monitoring tasks.',
      'Led a major Java 8 → Java 17 migration to reduce vulnerabilities and improve maintainability.',
    ],
    stack: ['REACT', 'DJANGO', 'JAVA', 'SPRING', 'DOCKER', 'SQL', 'LINUX'],
  },
  {
    period: 'May 2022 — Sep 2023',
    company: 'KINOVA ROBOTICS',
    role: 'Software Developer',
    location: 'Boisbriand, QC',
    quote: '"Translating firmware precision into robotic intelligence — writing the code that moves the arm, connects the sensors, and bridges machines to software."',
    bullets: [
      'Built and optimised interactive React UIs for responsive robotic control interfaces.',
      'Leveraged Node.js for RESTful API development and backend service implementation.',
      'Integrated RPC mechanisms for efficient communication between distributed components.',
      'Developed Python scripts to automate testing and validate robotic arm functionality.',
      'Wrote and optimised C++ firmware for sensor-actuator communication on robotic arms.',
    ],
    stack: ['REACT', 'NODE.JS', 'C++', 'PYTHON', 'SQL', 'MQTT', 'RPC'],
  },
  {
    period: 'Sep 2021 — Dec 2021',
    company: 'HYDRO-QUÉBEC',
    role: 'Software Engineer',
    location: 'Montreal, QC',
    quote: '"Fortifying Quebec\'s energy infrastructure through automation — scripting ETL pipelines and firewall orchestration at a scale that keeps the lights on."',
    bullets: [
      'Used the Checkpoint API to automate firewall rule management and enhance network security.',
      'Created Python ETL scripts to extract, transform, and load network data from multiple sources.',
      'Exposed Spring Boot REST endpoints for data retrieval and cross-system integration.',
    ],
    stack: ['PYTHON', 'JAVA', 'SPRING BOOT', 'SQL', 'REST API'],
  },
  {
    period: 'May 2021 — Sep 2021',
    company: 'PARADIGM',
    role: 'Software Developer',
    location: 'Repentigny, QC',
    quote: '"Full-stack craftsmanship in a fast-moving product environment — React interfaces meeting .NET backends in the service of user-first design."',
    bullets: [
      'Built and enhanced dynamic React UIs for the company web platform.',
      'Developed robust backend services and APIs using C# and the .NET framework.',
    ],
    stack: ['REACT', 'C#', '.NET', 'SQL'],
  },
  {
    period: 'May 2019 — Sep 2019',
    company: 'NATIONAL BANK OF CANADA',
    role: 'Enterprise Architect',
    location: 'Montreal, QC',
    quote: '"Mapping the technological landscape of one of Canada\'s largest financial institutions — from software inventory to strategic acquisition intelligence."',
    bullets: [
      'Categorised and mapped all software tools used across the institution.',
      'Investigated and reported on the potential acquisition of a new company-wide enterprise tool.',
    ],
    stack: ['MICROSOFT 365', 'ENTERPRISE ARCHITECTURE'],
  },
];

export const education = [
  {
    institution: 'CONCORDIA UNIVERSITY',
    degree: 'B.Eng. Software Engineering',
    period: '2019 — 2024',
    description: 'A rigorous engineering formation at the Gina Cody School of Engineering and Computer Science — one of Canada\'s premier faculties. Graduated with a 3.43 GPA, developing deep expertise in software architecture, distributed systems, and the engineering discipline that underpins every line of professional code.',
    highlights: ['Software Architecture', 'Distributed Systems', 'GPA 3.43 / 4.30', 'Gina Cody School'],
  },
  {
    institution: 'COLLÈGE DE MAISONNEUVE',
    degree: 'D.E.C, Natural Science',
    period: '2016 — 2018',
    description: 'A foundational scientific formation in mathematics, physics, and chemistry — the rigorous analytical framework that preceded an engineering career. Natural Science instils the first-principles thinking that separates engineers who understand why from those who only know how.',
    highlights: ['Mathematics', 'Physics', 'Chemistry', 'Analytical Reasoning'],
  },
];

export const certifications = [
  {
    name: 'AWS Cloud Practitioner',
    issuer: 'Amazon Web Services',
    year: '2023',
    status: 'ACTIVE',
    icon: '☁️',
  },
  {
    name: 'Microsoft Azure Fundamentals',
    issuer: 'Microsoft',
    year: '2023',
    status: 'ACTIVE',
    icon: '⚡',
  },
  {
    name: 'Docker Certified Associate',
    issuer: 'Docker Inc.',
    year: '2022',
    status: 'ACTIVE',
    icon: '🐳',
  },
  {
    name: 'Agile & Scrum Fundamentals',
    issuer: 'Scrum Alliance',
    year: '2022',
    status: 'ACTIVE',
    icon: '🔄',
  },
  {
    name: 'Git Version Control',
    issuer: 'Atlassian',
    year: '2021',
    status: 'ACTIVE',
    icon: '🔧',
  },
];
