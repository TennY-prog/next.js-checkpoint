export function classNames(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ');
}

import type { Project } from '@/lib/types';

export function filterProjects(projects: Project[], tag: string | null): Project[] {
  if (!tag) return projects;
  return projects.filter((p) => p.tags.includes(tag));
}
