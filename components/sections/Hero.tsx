'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';

const words = ['Next.js Developer', 'Performance Enthusiast', 'UI Craftsperson'];

function useTypewriter(list: string[], speed = 80, pause = 1200) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = list[index % list.length] ?? '';
    const timeout = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) {
          setTimeout(() => setDeleting(true), pause);
        }
      } else {
        const next = current.slice(0, Math.max(0, text.length - 1));
        setText(next);
        if (next.length === 0) {
          setDeleting(false);
          setIndex((i) => (i + 1) % list.length);
        }
      }
    }, deleting ? speed / 2 : speed);
    return () => clearTimeout(timeout);
  }, [text, deleting, index, list, speed, pause]);

  return text + (deleting ? '' : '|');
}

export default function Hero() {
  const headline = useTypewriter(words);

  return (
    <section className="section flex flex-col-reverse items-center gap-10 md:flex-row md:justify-between">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-xl"
      >
        <h1 className="gradient-heading">Building fast, accessible web experiences</h1>
        <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
          Senior <span className="text-primary">{headline}</span>
        </p>
        <div className="mt-6 flex gap-4">
          <Button href="/projects">View Projects</Button>
          <Button href="/contact" variant="secondary">
            Get in Touch
          </Button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative"
      >
        <span className="absolute -inset-2 -z-10 rounded-full bg-gradient-to-tr from-primary/20 to-accent/20 blur-2xl" />
        <Image
          src="/images/avatar.png"
          alt="Profile"
          width={320}
          height={320}
          priority
          className="rounded-full ring-2 ring-primary/30"
        />
      </motion.div>
    </section>
  );
}
