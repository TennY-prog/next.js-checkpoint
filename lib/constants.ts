import type { NavLink } from '@/lib/types';
export const NAV_LINKS: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' }
];

export const TECH_TAGS = [
  'Next.js',
  'TypeScript',
  'Tailwind CSS',
  'Framer Motion',
  'React',
  'Node.js'
];

export const PROJECTS = [
  {
    id: 'portfolio',
    title: 'Personal Portfolio',
    description:
      'A fast, accessible portfolio site built with Next.js App Router and Tailwind.',
    image: '/images/projects/portfolio.png',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    github: 'https://github.com/username/portfolio',
    demo: 'https://portfolio.example.com'
  },
  {
    id: 'dashboard',
    title: 'Analytics Dashboard',
    description:
      'Interactive dashboard with charts, filters, and responsive design.',
    image: '/images/projects/dashboard.png',
    tags: ['React', 'Framer Motion', 'Tailwind CSS'],
    github: 'https://github.com/username/dashboard',
    demo: 'https://dashboard.example.com'
  }
];
