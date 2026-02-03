import { TECH_TAGS } from '@/lib/constants';

export default function Skills() {
  return (
    <section className="py-12">
      <h2 className="text-2xl font-semibold">Skills</h2>
      <p className="mt-2 text-slate-600 dark:text-slate-300">
        Modern web technologies focused on performance and accessibility.
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {TECH_TAGS.map((tag) => (
          <span
            key={tag}
            className="rounded-md border border-slate-200 px-3 py-1 text-sm dark:border-slate-700"
          >
            {tag}
          </span>
        ))}
      </div>
    </section>
  );
}
