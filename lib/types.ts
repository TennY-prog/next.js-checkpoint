import type { Route } from 'next';
export type NavLink = {
  href: Route;
  label: string;
};

export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
};
