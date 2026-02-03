'use client';
import Navbar from '@/components/shared/Navbar';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 dark:bg-bgDark/70 border-b border-slate-200 dark:border-slate-700">
      <div className="container">
        <Navbar />
      </div>
    </header>
  );
}
