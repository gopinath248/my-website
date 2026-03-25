export function BrandMark() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-sm font-bold text-white shadow-soft ring-1 ring-white/40 transition-colors dark:bg-white dark:text-slate-950 dark:ring-slate-200">
        GN
      </div>
      <div className="leading-tight">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold-700 transition-colors dark:text-gold-300">
          Portfolio
        </p>
        <p className="font-display text-2xl text-slate-900 transition-colors dark:text-white">
          Gopi Nath
        </p>
      </div>
    </div>
  );
}
