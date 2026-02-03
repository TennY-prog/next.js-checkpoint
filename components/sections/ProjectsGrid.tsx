'use client';
import { useMemo, useState } from 'react';
import { PROJECTS, TECH_TAGS } from '@/lib/constants';
import { filterProjects } from '@/lib/utils';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

export default function ProjectsGrid() {
  const [active, setActive] = useState<string | null>(null);
  const filtered = useMemo(() => filterProjects(PROJECTS, active), [active]);

  return (
    <section className="section">
      <div className="flex flex-wrap gap-3">
        <FilterButton label="All" active={active === null} onClick={() => setActive(null)} />
        {TECH_TAGS.map((t) => (
          <FilterButton key={t} label={t} active={active === t} onClick={() => setActive(t)} />
        ))}
      </div>

      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => (
          <Card key={p.id} title={p.title} description={p.description} image={p.image}>
            <div className="flex flex-wrap gap-2">
              {p.tags.map((tag) => (
                <span key={tag} className="chip">
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-4 flex gap-3">
              {p.github && (
                <Button href={p.github} variant="secondary" className="text-sm">
                  GitHub
                </Button>
              )}
              {p.demo && (
                <Button href={p.demo} className="text-sm">
                  Live Demo
                </Button>
              )}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

function FilterButton({
  label,
  active,
  onClick
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      aria-pressed={active}
      className={`rounded-full px-3 py-1 text-sm transition ${
        active
          ? 'bg-primary text-white shadow'
          : 'border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800'
      }`}
    >
      {label}
    </button>
  );
}
