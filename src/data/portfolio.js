import {
  Database,
  Github,
  Instagram,
  Layers3,
  Linkedin,
  Mail,
  MonitorSmartphone,
  ServerCog,
} from 'lucide-react';

export const heroStats = [
  { value: '4+', label: 'Featured projects' },
  { value: '5+', label: 'Core technologies' },
  { value: '100%', label: 'Responsive layouts' },
];

export const skillGroups = [
  {
    title: 'Frontend Craft',
    description:
      'Responsive interfaces with a clean hierarchy, accessible spacing, and motion that supports the content.',
    icon: MonitorSmartphone,
    tags: ['React', 'Tailwind CSS', 'JavaScript', 'HTML/CSS'],
  },
  {
    title: 'Backend Logic',
    description:
      'Reliable APIs and business rules that keep workflows predictable, maintainable, and easy to extend.',
    icon: ServerCog,
    tags: ['Flask', 'Spring Boot', 'Java', 'REST APIs'],
  },
  {
    title: 'Data Layer',
    description:
      'Structured storage, clean queries, and data-focused thinking that keeps features grounded in real state.',
    icon: Database,
    tags: ['PostgreSQL', 'SQL', 'Hibernate', 'Schema Design'],
  },
  {
    title: 'Delivery Workflow',
    description:
      'Versioned delivery, debugging, and deployment habits that make projects easier to ship and maintain.',
    icon: Layers3,
    tags: ['GitHub', 'Netlify', 'Cloudflare', 'Problem Solving'],
  },
];

export const projects = [
  {
    id: 'hospital-queue-tracker',
    title: 'Hospital Queue Tracker',
    summary:
      'A live token and queue management flow that keeps front-desk operations visible and organized.',
    problem:
      'Hospital reception teams were relying on manual token handling, which made it difficult to track who was waiting, who had been called, and where each patient sat in the flow.',
    solution:
      'I designed a centralized queue tracker that lets staff issue tokens, update status changes instantly, and monitor the full patient queue from a clean dashboard.',
    features: [
      'Token generation and queue updates',
      'Waiting, called, and completed status tracking',
      'Follow-up scheduling for repeat visits',
      'Responsive views for reception and consultation rooms',
    ],
    techStack: ['React', 'Tailwind CSS', 'Flask', 'PostgreSQL', 'REST APIs'],
  },
  {
    id: 'chit-fund-management',
    title: 'Chit Fund Management Application',
    summary:
      'A web-based system for registration, payment tracking, and auction handling with clearer financial oversight.',
    problem:
      'Chit fund operations often require careful record-keeping across members, payments, and auctions, which is slow to manage manually.',
    solution:
      'I built a centralized workflow that organizes member data, tracks installments, and surfaces the key financial actions through a simple interface.',
    features: [
      'Member registration and record keeping',
      'Installment and payment tracking',
      'Auction support with transparent updates',
      'Role-aware access for administrators and members',
    ],
    techStack: ['React', 'Flask', 'PostgreSQL', 'JavaScript', 'REST APIs'],
  },
  {
    id: 'smart-drip-irrigation',
    title: 'Smart Drip Irrigation Web Application',
    summary:
      'An irrigation dashboard that ties sensor input to smarter water delivery decisions.',
    problem:
      'Farmers need timely irrigation decisions, but manual watering can waste water and miss changes in soil conditions.',
    solution:
      'I created a control interface that exposes soil moisture and environment readings so watering decisions can be made with more confidence.',
    features: [
      'Sensor-friendly monitoring UI',
      'Threshold-based watering triggers',
      'Remote irrigation control',
      'Alerts for low moisture conditions',
    ],
    techStack: ['React', 'Tailwind CSS', 'Node.js', 'IoT Sensors', 'REST APIs'],
  },
  {
    id: 'ecommerce-website',
    title: 'E-Commerce Website',
    summary:
      'A responsive storefront with dynamic product browsing and deployment-ready frontend structure.',
    problem:
      'Online storefronts need fast navigation, clear presentation, and a polished interface that works across devices.',
    solution:
      'I built a modular shopping experience with reusable UI pieces, backend-ready data flow, and deployment-minded structure.',
    features: [
      'Product catalog and dynamic cards',
      'Mobile-first layout and clean navigation',
      'Reusable UI components',
      'Production-friendly deployment setup',
    ],
    techStack: ['React', 'Tailwind CSS', 'Flask', 'PostgreSQL', 'Netlify'],
  },
];

export const contactLinks = [
  {
    title: 'Email',
    value: 'Open Gmail compose',
    note: 'Best for role inquiries, collaborations, and quick project briefings.',
    href: 'https://mail.google.com/mail/u/0/?ogbl#inbox?compose=new',
    icon: Mail,
  },
  {
    title: 'LinkedIn',
    value: 'Professional updates and networking',
    note: 'Ideal for hiring conversations and long-form introductions.',
    href: 'https://www.linkedin.com/in/gopi-nath-b37b18292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    icon: Linkedin,
  },
  {
    title: 'GitHub',
    value: 'Code and experiments',
    note: 'Explore repositories and the way I structure projects.',
    href: 'https://github.com/gopinath248',
    icon: Github,
  },
  {
    title: 'Instagram',
    value: 'Creative side and behind the scenes',
    note: 'A more informal way to keep up with what I am building.',
    href: 'https://www.instagram.com/twin_muse_24?igsh=MXNmMGJobDZlcHg5YQ%3D%3D&utm_source=qr',
    icon: Instagram,
  },
];

export const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export const sectionIds = navItems.map((item) => item.id);

