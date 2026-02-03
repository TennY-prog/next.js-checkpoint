import { Github, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 dark:border-slate-700">
      <div className="container flex items-center justify-between py-6 text-sm text-slate-500 dark:text-slate-400">
        <span>© {new Date().getFullYear()} Portfolio. All rights reserved.</span>
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/username"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md p-2 hover:bg-slate-100 dark:hover:bg-slate-800"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/username"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md p-2 hover:bg-slate-100 dark:hover:bg-slate-800"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
