export const metadata = {
  title: 'About'
};

export default function AboutPage() {
  return (
    <main className="py-12">
      <h1 className="text-3xl font-bold">About</h1>
      <p className="mt-4 max-w-2xl text-slate-600 dark:text-slate-300">
        I build fast, accessible, and maintainable web applications. My focus is on clean
        architectures, performance, and delightful user experiences.
      </p>
    </main>
  );
}
