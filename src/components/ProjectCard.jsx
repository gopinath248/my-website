import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';

export function ProjectCard({ project, isOpen, onToggle, index }) {
  const ChevronIcon = isOpen ? ChevronUp : ChevronDown;
  const gridSpanClass = isOpen ? 'lg:col-span-2' : 'lg:col-span-1';

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: index * 0.05 }}
      className={`group overflow-hidden rounded-[2rem] border bg-white/90 shadow-soft transition ${
        isOpen
          ? 'border-gold-200 shadow-gold dark:border-gold-400/60'
          : 'border-white/80 hover:border-gold-200 dark:border-slate-800 dark:hover:border-gold-400/60'
      } ${gridSpanClass} dark:bg-slate-900/80`}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full p-6 text-left sm:p-7"
      >
        <div className="flex items-start justify-between gap-6">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold-700 transition-colors dark:text-gold-300">
              Project
            </p>
            <h3 className="mt-3 text-3xl text-slate-900 transition-colors dark:text-white">
              {project.title}
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-600 transition-colors dark:text-slate-300">
              {project.summary}
            </p>
          </div>
          <span
            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border transition ${
              isOpen
                ? 'border-gold-200 bg-gold-50 text-gold-700 dark:border-gold-400/60 dark:bg-slate-800 dark:text-gold-300'
                : 'border-slate-200 bg-slate-50 text-slate-500 group-hover:text-gold-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400 dark:group-hover:text-gold-300'
            }`}
          >
            <ChevronIcon className="h-5 w-5" />
          </span>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen ? (
          <motion.div
            key="details"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="overflow-hidden border-t border-gold-100/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(252,248,241,0.98))] dark:border-slate-700/80 dark:bg-slate-950/80"
          >
            <div className="grid gap-6 p-6 sm:p-7 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="space-y-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold-700 transition-colors dark:text-gold-300">
                    Problem
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-600 transition-colors dark:text-slate-300">
                    {project.problem}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold-700 transition-colors dark:text-gold-300">
                    Solution
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-600 transition-colors dark:text-slate-300">
                    {project.solution}
                  </p>
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-amber-100 bg-amber-50/70 p-5 dark:border-slate-700 dark:bg-slate-900/80">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold-700 transition-colors dark:text-gold-300">
                    Features
                  </p>
                  <CheckCircle2 className="h-5 w-5 text-gold-600 transition-colors dark:text-gold-300" />
                </div>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-700 transition-colors dark:text-slate-300">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-gold-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold-700 transition-colors dark:text-gold-300">
                    Tech Stack
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.techStack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm ring-1 ring-slate-200 transition-colors dark:bg-slate-800 dark:text-slate-200 dark:ring-slate-700"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.article>
  );
}
