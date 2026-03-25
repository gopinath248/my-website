import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { BackgroundCycle } from './components/BackgroundCycle';
import { BrandMark } from './components/BrandMark';
import { ScrollTopButton } from './components/ScrollTopButton';
import { ThemeToggle } from './components/ThemeToggle';
import { HeroSection } from './sections/HeroSection';
import { SkillsSection } from './sections/SkillsSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { ContactSection } from './sections/ContactSection';
import { navItems, sectionIds } from './data/portfolio';
import { useActiveSection } from './hooks/useActiveSection';
import { useThemePreference } from './hooks/useTheme';

export default function App() {
  const activeSection = useActiveSection(sectionIds);
  const [openProject, setOpenProject] = useState(null);
  const { theme, toggleTheme } = useThemePreference();

  return (
    <div className="relative isolate overflow-x-hidden text-slate-900 transition-colors dark:text-slate-100">
      <BackgroundCycle theme={theme} />
      <div className="pointer-events-none absolute left-10 top-24 -z-10 h-72 w-72 rounded-full bg-gold-200/35 blur-3xl transition-colors dark:bg-gold-400/10" />
      <div className="pointer-events-none absolute right-0 top-44 -z-10 h-96 w-96 rounded-full bg-amber-100/70 blur-3xl transition-colors dark:bg-sky-300/10" />

      <header className="sticky top-0 z-40 border-b border-white/70 bg-white/75 backdrop-blur-2xl transition-colors dark:border-slate-800/70 dark:bg-slate-950/80">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
          <BrandMark />

          <div className="flex flex-col gap-3 lg:items-end">
            <div className="flex flex-wrap items-center gap-2">
              <nav className="flex flex-wrap items-center gap-2">
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;

                  return (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                        isActive
                          ? 'border-slate-900 bg-slate-900 text-white shadow-soft dark:border-white dark:bg-white dark:text-slate-950'
                          : 'border-white/80 bg-white/80 text-slate-600 shadow-sm hover:border-gold-200 hover:text-slate-900 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-300 dark:hover:border-gold-400 dark:hover:text-white'
                      }`}
                    >
                      {item.label}
                    </a>
                  );
                })}
              </nav>

              <ThemeToggle theme={theme} onToggle={toggleTheme} />
            </div>

            <motion.a
              href="#contact"
              whileHover={{ y: -1 }}
              className="inline-flex items-center gap-2 self-start rounded-full border border-gold-200 bg-gold-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-gold-700 shadow-sm transition-colors lg:self-end dark:border-gold-400/40 dark:bg-slate-900/80 dark:text-gold-300"
            >
              Available for collaboration
              <ArrowUpRight className="h-4 w-4" />
            </motion.a>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 sm:px-6">
        <HeroSection />
        <SkillsSection />
        <ProjectsSection openProject={openProject} onToggleProject={setOpenProject} />
        <ContactSection />
      </main>

      <footer className="mx-auto max-w-6xl px-4 pb-10 pt-4 text-center text-sm text-slate-500 transition-colors sm:px-6 dark:text-slate-400">
        <p>Crafted with React, Tailwind CSS, and Framer Motion.</p>
        <p className="mt-2">© {new Date().getFullYear()} Gopi Nath. All rights reserved.</p>
      </footer>

      <ScrollTopButton />
    </div>
  );
}
