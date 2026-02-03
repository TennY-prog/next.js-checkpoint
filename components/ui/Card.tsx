import Image from 'next/image';
import { motion } from 'framer-motion';
import { classNames } from '@/lib/utils';

type CardProps = {
  title: string;
  description: string;
  image?: string;
  children?: React.ReactNode;
  className?: string;
};

export default function Card({ title, description, image, children, className }: CardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className={classNames(
        'group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md dark:border-slate-700 dark:bg-slate-900',
        className
      )}
    >
      {image && (
        <div className="relative h-40 w-full overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition duration-300 group-hover:scale-105"
          />
        </div>
      )}
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{description}</p>
        <div className="mt-3">{children}</div>
      </div>
      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-transparent transition group-hover:ring-primary/20" />
    </motion.article>
  );
}
