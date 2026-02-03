import Hero from '@/components/sections/Hero';
import ProjectsGrid from '@/components/sections/ProjectsGrid';
import Skills from '@/components/sections/Skills';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ProjectsGrid />
      <Skills />
    </main>
  );
}
