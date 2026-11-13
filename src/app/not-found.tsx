import Link from "next/link";
import { Compass, BookOpen, Radio, Search, Home, ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="w-full bg-background min-h-[80vh] flex items-center justify-center py-20 px-4">
      <div className="max-w-xl mx-auto text-center space-y-8 glass-panel p-8 sm:p-12 rounded-3xl border border-primary/30 shadow-card relative overflow-hidden">
        {/* Ambient lighting */}
        <div className="absolute -top-24 -left-24 w-60 h-60 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-60 h-60 bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/15 border border-primary/40 font-mono text-xs uppercase tracking-widest text-primary font-bold">
          <Compass className="w-3.5 h-3.5 text-primary" />
          <span>Sector Uncharted • 404</span>
        </div>

        <div className="space-y-3">
          <h1 className="font-display font-medium text-4xl sm:text-5xl text-editorial-light tracking-tight">
            Lost in the Deep Canopy
          </h1>
          <p className="font-serif italic text-lg text-primary">
            &ldquo;Every beast knows how to run. But do you know where you&apos;re running?&rdquo;
          </p>
          <p className="font-body text-xs sm:text-sm text-editorial-secondary leading-relaxed max-w-md mx-auto pt-2">
            The transmission coordinates you followed do not exist in the canonical expedition archives. Return to calibrated coordinates below.
          </p>
        </div>

        {/* Quick Navigational Coordinates */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
          <Link
            href="/"
            className="p-3.5 rounded-xl bg-primary text-background font-label text-xs uppercase tracking-wider font-bold shadow-gold hover:shadow-gold-lg transition-all flex items-center justify-center gap-2 hover:scale-105 active:scale-95"
          >
            <Home className="w-4 h-4" />
            <span>Return to Base</span>
          </Link>

          <Link
            href="/comics"
            className="p-3.5 rounded-xl bg-surface-container border border-primary/30 text-editorial-light hover:text-primary hover:border-primary transition-all font-label text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-2"
          >
            <BookOpen className="w-4 h-4 text-primary" />
            <span>Graphic Novels</span>
          </Link>

          <Link
            href="/podcast"
            className="p-3.5 rounded-xl bg-surface-container border border-secondary/30 text-editorial-light hover:text-secondary hover:border-secondary transition-all font-label text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-2"
          >
            <Radio className="w-4 h-4 text-secondary" />
            <span>The Podcast</span>
          </Link>

          <Link
            href="/search"
            className="p-3.5 rounded-xl bg-surface-container border border-jungle-border text-editorial-light hover:text-primary hover:border-primary/40 transition-all font-label text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-2"
          >
            <Search className="w-4 h-4 text-primary" />
            <span>Search Canon</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

