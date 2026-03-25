import { motion } from 'framer-motion';

export function SkillCard({ title, description, tags, icon: Icon, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      whileHover={{ y: -10, scale: 1.01 }}
      className="group relative overflow-hidden rounded-[1.75rem] border border-white/80 bg-white/90 p-6 shadow-soft transition will-change-transform hover:border-gold-200 hover:shadow-gold dark:border-slate-800 dark:bg-slate-900/80 dark:hover:border-gold-400/70"
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-gold-300 to-transparent opacity-0 transition group-hover:opacity-100" />
      <div className="flex items-start justify-between gap-4">
        <div className="rounded-2xl bg-gold-50 p-3 text-gold-700 ring-1 ring-gold-100 transition group-hover:bg-gold-100 dark:bg-slate-800 dark:text-gold-300 dark:ring-slate-700 dark:group-hover:bg-slate-700">
          <Icon className="h-7 w-7" strokeWidth={1.8} />
        </div>
        <span className="rounded-full bg-slate-900 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.35em] text-white transition-colors dark:bg-white dark:text-slate-950">
          Interactive
        </span>
      </div>
      <h3 className="mt-5 text-2xl text-slate-900 transition-colors dark:text-white">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600 transition-colors dark:text-slate-300">
        {description}
      </p>
      <div className="mt-6 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-slate-200 transition-colors dark:bg-slate-800 dark:text-slate-200 dark:ring-slate-700"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.article>
  );
}
