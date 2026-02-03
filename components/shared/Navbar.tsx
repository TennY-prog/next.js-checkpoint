'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { NAV_LINKS } from '@/lib/constants';
import { classNames } from '@/lib/utils';
import { useTheme } from './ThemeProvider';

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();

  return (
    <nav className="flex items-center justify-between py-4">
      <Link href="/" className="font-bold text-lg">
        <span className="text-primary">Pro</span>folio
      </Link>

      <div className="flex items-center gap-4">
        <button
          aria-label="Toggle theme"
          className="rounded-md p-2 hover:bg-slate-100 dark:hover:bg-slate-800"
          onClick={toggle}
        >
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        <button
          aria-label="Toggle menu"
          className="md:hidden rounded-md p-2 hover:bg-slate-100 dark:hover:bg-slate-800"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <ul
        className={classNames(
          'fixed inset-x-0 top-14 mx-4 rounded-lg border border-slate-200 bg-white/90 p-4 backdrop-blur dark:border-slate-700 dark:bg-bgDark/90 md:static md:mx-0 md:flex md:p-0 md:border-0 md:bg-transparent md:backdrop-blur-0',
          open ? 'block' : 'hidden md:block'
        )}
      >
        {NAV_LINKS.map((link) => {
          const active = pathname === link.href;
          return (
            <li key={link.href} className="md:ml-6">
              <Link
                href={link.href}
                className={classNames(
                  'relative block rounded-md px-3 py-2 text-sm hover:text-primary',
                  active && 'text-primary font-semibold'
                )}
                onClick={() => setOpen(false)}
              >
                {link.label}
                {active && (
                  <span className="absolute inset-x-3 -bottom-1 h-0.5 bg-gradient-to-r from-primary to-accent" />
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
