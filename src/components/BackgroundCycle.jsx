import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const scenes = [
  {
    key: 'aurora',
    background:
      'radial-gradient(circle at 15% 20%, rgba(201,154,34,0.28), transparent 28%), radial-gradient(circle at 80% 25%, rgba(59,130,246,0.16), transparent 26%), radial-gradient(circle at 50% 80%, rgba(250,204,21,0.12), transparent 30%)',
  },
  {
    key: 'mesh',
    background:
      'radial-gradient(circle at 25% 30%, rgba(14,165,233,0.18), transparent 30%), radial-gradient(circle at 75% 20%, rgba(201,154,34,0.24), transparent 24%), radial-gradient(circle at 70% 75%, rgba(244,114,182,0.14), transparent 27%)',
  },
  {
    key: 'focus',
    background:
      'radial-gradient(circle at 50% 20%, rgba(250,204,21,0.22), transparent 26%), radial-gradient(circle at 18% 72%, rgba(34,197,94,0.12), transparent 24%), radial-gradient(circle at 82% 68%, rgba(59,130,246,0.14), transparent 26%)',
  },
];

export function BackgroundCycle({ theme }) {
  const [sceneIndex, setSceneIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setSceneIndex((current) => (current + 1) % scenes.length);
    }, 10000);

    return () => window.clearInterval(timer);
  }, []);

  const scene = scenes[sceneIndex];
  const isDark = theme === 'dark';

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none fixed inset-0 -z-10 overflow-hidden transition-opacity duration-700 ${
        isDark ? 'opacity-70' : 'opacity-90'
      }`}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={scene.key + theme}
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          <motion.div
            className={`absolute inset-0 transition-colors duration-700 ${
              isDark ? 'mix-blend-screen' : 'mix-blend-multiply'
            }`}
            style={{ backgroundImage: scene.background }}
            animate={{ x: [0, 16, 0], y: [0, -10, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className={`absolute -left-24 top-12 h-72 w-72 rounded-full blur-3xl ${
              isDark ? 'bg-gold-300/10' : 'bg-gold-200/35'
            }`}
            animate={{ x: [0, 24, 0], y: [0, -18, 0], scale: [1, 1.08, 1] }}
            transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className={`absolute right-0 top-32 h-96 w-96 rounded-full blur-3xl ${
              isDark ? 'bg-sky-300/10' : 'bg-sky-200/25'
            }`}
            animate={{ x: [0, -18, 0], y: [0, 22, 0], scale: [1, 1.05, 1] }}
            transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className={`absolute bottom-[-5rem] left-1/3 h-80 w-80 rounded-full blur-3xl ${
              isDark ? 'bg-amber-300/10' : 'bg-amber-100/30'
            }`}
            animate={{ x: [0, -14, 0], y: [0, -10, 0], scale: [1, 1.06, 1] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
