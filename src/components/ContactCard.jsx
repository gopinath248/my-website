import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export function ContactCard({ contact, index }) {
  const Icon = contact.icon;

  return (
    <motion.a
      href={contact.href}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      whileHover={{ y: -8 }}
      className="group flex h-full flex-col justify-between rounded-[1.75rem] border border-white/80 bg-white/90 p-6 shadow-soft transition hover:border-gold-200 hover:shadow-gold dark:border-slate-800 dark:bg-slate-900/80 dark:hover:border-gold-400/70"
    >
      <div>
        <div className="flex items-start justify-between gap-4">
          <div className="rounded-2xl bg-gold-50 p-3 text-gold-700 ring-1 ring-gold-100 transition group-hover:bg-gold-100 dark:bg-slate-800 dark:text-gold-300 dark:ring-slate-700 dark:group-hover:bg-slate-700">
            <Icon className="h-6 w-6" strokeWidth={1.8} />
          </div>
          <ArrowUpRight className="h-5 w-5 text-slate-400 transition group-hover:text-gold-600 dark:text-slate-500 dark:group-hover:text-gold-300" />
        </div>
        <h3 className="mt-5 text-2xl text-slate-900 transition-colors dark:text-white">
          {contact.title}
        </h3>
        <p className="mt-2 text-sm font-semibold text-slate-700 transition-colors dark:text-slate-200">
          {contact.value}
        </p>
        <p className="mt-3 text-sm leading-7 text-slate-600 transition-colors dark:text-slate-300">
          {contact.note}
        </p>
      </div>
    </motion.a>
  );
}
