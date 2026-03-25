import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { contactLinks } from '../data/portfolio';
import { SectionHeading } from '../components/SectionHeading';
import { ContactCard } from '../components/ContactCard';

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-28 py-16 sm:py-20 lg:py-24">
      <SectionHeading
        eyebrow="Contact"
        title="Let's keep the conversation open"
        description="If you want a responsive portfolio, a polished dashboard, or a cleaner product interface, I am ready to help."
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
          className="rounded-[2rem] border border-white/80 bg-white/90 p-8 shadow-soft transition-colors dark:border-slate-800 dark:bg-slate-900/80"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-gold-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-gold-700 ring-1 ring-gold-100 transition-colors dark:bg-slate-800 dark:text-gold-300 dark:ring-slate-700">
            <Sparkles className="h-4 w-4" />
            Open to collaboration
          </div>
          <h3 className="mt-6 text-4xl text-slate-900 transition-colors dark:text-white">
            Have a product idea? Let&apos;s make it feel premium.
          </h3>
          <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 transition-colors dark:text-slate-300">
            I like working on interfaces that feel light, clear, and trustworthy. If your project
            needs a thoughtful frontend or a clean technical foundation, I&apos;d be glad to chat.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://mail.google.com/mail/u/0/?ogbl#inbox?compose=new"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-gold-50"
            >
              Compose Email
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full border border-gold-200 bg-white/85 px-6 py-3 text-sm font-semibold text-slate-800 shadow-soft transition hover:-translate-y-0.5 hover:border-gold-300 hover:text-gold-700 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-100 dark:hover:border-gold-400 dark:hover:text-gold-200"
            >
              See Projects
            </a>
          </div>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2">
          {contactLinks.map((contact, index) => (
            <ContactCard key={contact.title} contact={contact} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
