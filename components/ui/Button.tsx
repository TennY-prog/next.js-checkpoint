import Link from 'next/link';
import type { Route } from 'next';
import { classNames } from '@/lib/utils';

type ButtonProps = {
  href?: string | Route;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
};

export default function Button({ href, onClick, children, variant = 'primary', className }: ButtonProps) {
  const base =
    'inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors';
  const styles =
    variant === 'primary'
      ? 'bg-primary text-white hover:opacity-90'
      : 'border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800';

  if (href) {
    if (typeof href === 'string') {
      if (href.startsWith('/')) {
        return (
          <Link href={href as Route} className={classNames(base, styles, className)}>
            {children}
          </Link>
        );
      }
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classNames(base, styles, className)}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classNames(base, styles, className)}>
        {children}
      </Link>
    );
  }
  return (
    <button onClick={onClick} className={classNames(base, styles, className)}>
      {children}
    </button>
  );
}
