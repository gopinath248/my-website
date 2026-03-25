import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { heroStats } from '../data/portfolio';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export function HeroSection() {
  const heroImage = `${import.meta.env.BASE_URL}profile.jpg`;

  return (
    <section id="hero" className="scroll-mt-28 py-12 sm:py-16 lg:py-20">
      <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-3xl">
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-gold-100 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-gold-700 shadow-soft transition-colors dark:border-slate-700 dark:bg-slate-900/80 dark:text-gold-300"
          >
            <Sparkles className="h-4 w-4" />
            Modern portfolio design
          </motion.div>

          <motion.p
            variants={item}
            className="mt-6 text-sm font-semibold uppercase tracking-[0.45em] text-slate-500 transition-colors dark:text-slate-400"
          >
            Full Stack Developer
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-4 text-5xl leading-[0.95] text-slate-950 transition-colors sm:text-6xl lg:text-7xl dark:text-white"
          >
            Turning practical ideas into clean interfaces with golden detail.
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 transition-colors dark:text-slate-300"
          >
            I build responsive digital experiences that feel calm, polished, and easy to use. My
            focus is on readable layout systems, interactive components, and smooth motion that
            supports the content instead of fighting it.
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-gold-50"
            >
              View Projects
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-gold-200 bg-white/85 px-6 py-3 text-sm font-semibold text-slate-800 shadow-soft transition hover:-translate-y-0.5 hover:border-gold-300 hover:text-gold-700 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-100 dark:hover:border-gold-400 dark:hover:text-gold-200"
            >
              Contact Me
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-10 grid gap-4 sm:grid-cols-3">
            {heroStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-[1.5rem] border border-white/80 bg-white/90 p-4 shadow-soft transition-colors dark:border-slate-800 dark:bg-slate-900/80"
              >
                <p className="font-display text-3xl text-slate-900 transition-colors dark:text-white">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.3em] text-slate-500 transition-colors dark:text-slate-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 28, scale: 0.98 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative mx-auto w-full max-w-lg"
        >
          <div className="absolute -inset-6 rounded-[2.5rem] bg-gold-200/35 blur-3xl transition-colors dark:bg-gold-400/10" />
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/80 bg-white/90 p-4 shadow-gold transition-colors dark:border-slate-800 dark:bg-slate-900/80">
            <div className="overflow-hidden rounded-[2rem] bg-slate-100 dark:bg-slate-800">
              <img
                src={heroImage}
                alt="Portrait of Gopi Nath"
                className="h-[420px] w-full object-cover object-top"
              />
            </div>
            <div className="mt-4 rounded-[1.5rem] border border-gold-100 bg-gold-50/70 p-5 transition-colors dark:border-slate-700 dark:bg-slate-950/80">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold-700 transition-colors dark:text-gold-300">
                Profile focus
              </p>
              <p className="mt-2 text-2xl text-slate-900 transition-colors dark:text-white">
                Gopi Nath
              </p>
              <p className="mt-1 text-sm text-slate-600 transition-colors dark:text-slate-300">
                Full stack developer with a focus on responsive UI, system flow, and practical
                delivery.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {['React', 'Tailwind', 'Flask', 'PostgreSQL'].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-slate-200 transition-colors dark:bg-slate-800 dark:text-slate-200 dark:ring-slate-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
