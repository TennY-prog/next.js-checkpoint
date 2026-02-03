'use client';
export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <main className="py-24 text-center">
      <h1 className="text-3xl font-bold">Something went wrong</h1>
      <p className="mt-2 text-slate-600 dark:text-slate-300">{error.message}</p>
      <button
        className="mt-6 rounded-md bg-primary px-4 py-2 text-white"
        onClick={() => reset()}
      >
        Try again
      </button>
    </main>
  );
}
