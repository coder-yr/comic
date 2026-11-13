"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FOOTER_COLUMNS, BRAND_INFO } from "@/data/navigation";
import { Send, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";

export function Footer() {
  const pathname = usePathname();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  if (pathname.startsWith("/reader/")) {
    return null;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes("@")) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="w-full bg-[#050806] border-t border-jungle-border/50 text-editorial-secondary relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-jungle-border/40">
          {/* Brand Declaration & Mission */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div>
              <Link href="/" className="inline-flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-primary" />
                <span className="font-display font-medium text-2xl tracking-tight text-primary">
                  {BRAND_INFO.name}
                </span>
              </Link>
              <p className="font-body text-sm text-editorial-secondary max-w-md leading-relaxed mt-2">
                An immersive storytelling universe uniting Fortune 500 artificial intelligence strategy with prestige graphic novel artistry and broadcast media.
              </p>
              <div className="mt-4 p-3 rounded-lg bg-surface-container border border-jungle-border/60 max-w-md">
                <p className="font-label text-xs uppercase tracking-widest text-primary font-semibold">
                  {BRAND_INFO.tagline}
                </p>
                <p className="font-label text-[10px] text-editorial-muted uppercase tracking-wider mt-0.5">
                  {BRAND_INFO.supportingTagline}
                </p>
              </div>
            </div>

            {/* Newsletter Dispatch Signup */}
            <div className="pt-2">
              <span className="font-label text-xs uppercase tracking-widest text-secondary font-semibold block mb-2">
                Executive Strategy Dispatch
              </span>
              <p className="font-body text-xs text-editorial-muted mb-3">
                Curated AI transformation blueprints, episode transmissions, and new comic releases delivered to your inbox.
              </p>
              {subscribed ? (
                <div className="flex items-center gap-2 p-3 rounded-lg bg-secondary/10 border border-secondary/30 text-secondary text-xs font-label uppercase tracking-wider">
                  <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0" />
                  <span>Welcome to the Sovereign Pride. Dispatch confirmed.</span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex gap-2 max-w-md">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter corporate email..."
                    required
                    className="flex-1 px-3.5 py-2.5 rounded-lg bg-surface-container text-editorial-light text-xs font-body border border-jungle-border/80 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/40 placeholder:text-editorial-muted"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2.5 rounded-lg bg-primary text-background font-label text-xs uppercase tracking-wider font-bold shadow-gold hover:bg-primary-fixed hover:shadow-gold-lg transition-all flex items-center gap-1.5"
                  >
                    <span>Subscribe</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Navigation Links Columns */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {FOOTER_COLUMNS.map((col) => (
              <div key={col.title} className="space-y-4">
                <h4 className="font-label text-xs uppercase tracking-widest text-primary font-semibold">
                  {col.title}
                </h4>
                <ul className="space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="font-body text-xs text-editorial-secondary hover:text-editorial-light hover:underline transition-colors block"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-label uppercase tracking-wider text-editorial-muted">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-secondary" />
            <span>Created by {BRAND_INFO.creator} • Zero-Hallucination Standard</span>
          </div>
          <div className="text-center sm:text-right">
            <span>{BRAND_INFO.copyright}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

