import { motion } from 'framer-motion';

export function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  const alignClass = align === 'center' ? 'mx-auto text-center' : 'text-left';

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className={`max-w-3xl ${alignClass}`}
    >
      <p className="text-xs font-semibold uppercase tracking-[0.4em] text-gold-700 transition-colors dark:text-gold-300">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-4xl text-slate-950 transition-colors sm:text-5xl dark:text-white">
        {title}
      </h2>
      <p className="mt-4 text-base leading-8 text-slate-600 transition-colors dark:text-slate-300">
        {description}
      </p>
    </motion.div>
  );
}
