import ProjectsGrid from '@/components/sections/ProjectsGrid';

export const metadata = {
  title: 'Projects'
};

export default function ProjectsPage() {
  return (
    <main className="py-12">
      <h1 className="text-3xl font-bold">Projects</h1>
      <p className="mt-2 text-slate-600 dark:text-slate-300">
        Detailed case studies and live demos. Filter by technology.
      </p>
      <ProjectsGrid />
    </main>
  );
}
