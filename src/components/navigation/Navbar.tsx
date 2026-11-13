"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Radio,
  BookOpen,
  Crown,
  Compass,
  Users,
  Info,
  ChevronRight,
  Flame,
  Home,
} from "lucide-react";

interface NavItem {
  label: string;
  href: string;
  badge?: string;
  badgeColor?: "teal" | "gold";
}

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "The Podcast", href: "/podcast" },
  { label: "Graphic Novels", href: "/comics" },
  { label: "The Saga", href: "/safari" },
  { label: "The Council", href: "/characters" },
  { label: "Our Story", href: "/about" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Handle Escape key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const getNavIcon = (label: string) => {
    switch (label) {
      case "Home":
        return <Home className="w-4 h-4 text-[#E8B63F]" />;
      case "Podcast":
        return <Radio className="w-4 h-4 text-[#38C7B5]" />;
      case "Comics":
        return <BookOpen className="w-4 h-4 text-[#E8B63F]" />;
      case "Safari Journey":
        return <Compass className="w-4 h-4 text-[#38C7B5]" />;
      case "Characters":
        return <Users className="w-4 h-4 text-[#E8B63F]" />;
      case "About":
        return <Info className="w-4 h-4 text-[#38C7B5]" />;
      default:
        return <Crown className="w-4 h-4 text-[#E8B63F]" />;
    }
  };

  if (pathname.startsWith("/reader/")) {
    return null;
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full" role="banner">
      {/* =========================================================================
          ROW 1 – TRANSMISSION STATUS BAR (Compact ~30px high)
          ========================================================================= */}
      <div className="hidden md:block w-full bg-[#0B100D]/95 backdrop-blur-md border-b border-[#E8B63F]/15 h-[30px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between text-[11px] font-label uppercase tracking-widest text-[#B6B4A8]">
          {/* Left Status */}
          <div className="flex items-center gap-2 min-w-0 pr-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#38C7B5] animate-ping shrink-0" />
            <span className="text-[#38C7B5] font-semibold shrink-0">TRANSMISSION ACTIVE:</span>
            <span className="truncate text-[#F2EFE6]/90">
              THE SOVEREIGN LION &amp; DR. AMIT KHANDELWAL · EPISODE 08 ONLINE
            </span>
          </div>

          {/* Right Telemetry */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <span className="text-[#E8B63F] font-medium flex items-center gap-1.5">
              <Flame className="w-3 h-3 text-[#E8B63F]" />
              13 SAFARI CHAPTERS SYNCED
            </span>
            <span className="text-white/20">|</span>
            <span className="text-[#777D74]">SYNDICATE V4.9.2</span>
          </div>
        </div>
      </div>

      {/* =========================================================================
          ROW 2 – MAIN NAVIGATION (Flex on mobile, CSS Grid on desktop)
          ========================================================================= */}
      <div className="w-full bg-[#0B100D]/95 backdrop-blur-xl border-b border-[#E8B63F]/15 shadow-[0_8px_32px_rgba(0,0,0,0.85)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-[68px] flex items-center justify-between lg:grid lg:grid-cols-[auto_minmax(0,1fr)_auto] gap-2 sm:gap-4 xl:gap-6">
          {/* -------------------------------------------------------------------
              LEFT: AI Jungle Logo, Crown, CANON Badge, Tagline
              ------------------------------------------------------------------- */}
          <Link
            href="/"
            className="flex items-center gap-2 sm:gap-2.5 group min-w-0 shrink-0"
            aria-label="The AI Jungle Home"
          >
            {/* Crown Lion Crest Emblem */}
            <div className="relative w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#111914] border border-[#E8B63F]/40 flex items-center justify-center shadow-[0_0_12px_rgba(232,182,63,0.15)] group-hover:border-[#E8B63F] group-hover:scale-105 transition-all duration-300 shrink-0">
              <Crown className="w-3.5 h-3.5 text-[#E8B63F]" />
              <span className="absolute -top-1 -right-1 w-1.5 h-1.5 rounded-full bg-[#38C7B5] shadow-[0_0_8px_#38C7B5] animate-pulse" />
            </div>

            <div className="flex flex-col min-w-0">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="font-display font-medium text-base sm:text-lg lg:text-xl tracking-tight text-[#F2EFE6] group-hover:text-[#E8B63F] transition-colors whitespace-nowrap">
                  THE AI JUNGLE
                </span>
                <span className="hidden sm:inline-block px-1.5 py-0.2 rounded bg-[#E8B63F]/15 border border-[#E8B63F]/30 font-label text-[9px] uppercase tracking-wider text-[#E8B63F] font-bold shrink-0">
                  CANON
                </span>
              </div>
              <span className="font-label text-[9px] text-[#777D74] uppercase tracking-widest truncate hidden xl:block max-w-[200px]">
                Where Business Meets AI
              </span>
            </div>
          </Link>

          {/* -------------------------------------------------------------------
              CENTER: Balanced, Centered Navigation (Desktop >= 1024px)
              ------------------------------------------------------------------- */}
          <div className="hidden lg:flex items-center justify-center min-w-0 px-1 xl:px-2">
            <nav
              className="flex items-center gap-1 xl:gap-2"
              role="navigation"
              aria-label="Main Navigation"
            >
              {NAV_ITEMS.map((item) => {
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-2.5 xl:px-3.5 py-1.5 rounded-lg font-label text-[11px] xl:text-xs uppercase tracking-wider transition-all duration-200 flex items-center gap-1.5 whitespace-nowrap shrink-0 ${
                      active
                        ? "bg-[#18211C] text-[#E8B63F] font-bold border border-[#E8B63F]/40 shadow-[0_0_12px_rgba(232,182,63,0.15)]"
                        : "text-[#B6B4A8] hover:text-[#F2EFE6] hover:bg-[#18211C]/60"
                    }`}
                    aria-current={active ? "page" : undefined}
                  >
                    <span>{item.label}</span>
                    {item.badge && (
                      <span
                        className={`text-[9px] px-1 py-0.2 rounded font-mono font-semibold ${
                          item.badgeColor === "teal"
                            ? "bg-[#38C7B5]/15 text-[#38C7B5] border border-[#38C7B5]/30"
                            : "bg-[#E8B63F]/15 text-[#E8B63F] border border-[#E8B63F]/30"
                        }`}
                      >
                        {item.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* -------------------------------------------------------------------
              RIGHT: CTAs & Mobile Menu Toggle
              ------------------------------------------------------------------- */}
          <div className="flex items-center justify-end gap-2 sm:gap-2.5 xl:gap-3 shrink-0">
            {/* Watch Podcast CTA */}
            <Link
              href="/podcast/ep-08-jungle-audit"
              className="hidden sm:inline-flex items-center gap-1.5 xl:gap-2 px-2.5 xl:px-3.5 py-1.5 xl:py-2 rounded-lg bg-[#111914] border border-[#38C7B5]/40 text-[#38C7B5] font-label text-[11px] xl:text-xs font-semibold uppercase tracking-wider shadow-[0_0_12px_rgba(56,199,181,0.15)] hover:border-[#38C7B5] hover:bg-[#38C7B5]/15 hover:shadow-[0_0_20px_rgba(56,199,181,0.25)] transition-all hover:scale-105 active:scale-95 group shrink-0"
              aria-label="Watch Podcast Episode 08"
            >
              <div className="relative flex items-center justify-center">
                <Radio className="w-3.5 h-3.5 text-[#38C7B5]" />
                <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-[#38C7B5] animate-ping" />
              </div>
              <span className="hidden xl:inline">Watch Podcast</span>
              <span className="xl:hidden">Podcast</span>
              {/* Mini live audio wave bars */}
              <div className="hidden xl:flex items-end gap-[2px] h-3 ml-0.5">
                <span className="w-[2px] h-1.5 bg-[#38C7B5] rounded-full animate-pulse" />
                <span className="w-[2px] h-3 bg-[#38C7B5] rounded-full" />
                <span className="w-[2px] h-2 bg-[#38C7B5] rounded-full animate-pulse" />
              </div>
            </Link>

            {/* Explore Comics CTA */}
            <Link
              href="/comics"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 xl:px-4 py-1.5 xl:py-2 rounded-lg bg-gradient-to-r from-[#C79528] via-[#E8B63F] to-[#FFD15A] text-[#0B100D] font-label text-[11px] xl:text-xs font-bold uppercase tracking-wider shadow-[0_0_18px_rgba(232,182,63,0.35)] hover:brightness-110 hover:shadow-[0_0_25px_rgba(232,182,63,0.5)] transition-all hover:scale-105 active:scale-95 shrink-0"
              aria-label="Explore Comics Library"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span className="hidden xl:inline">Explore Comics</span>
              <span className="xl:hidden">Comics</span>
            </Link>

            {/* Mobile Podcast Quick Action (<= 639px) */}
            <Link
              href="/podcast/ep-08-jungle-audit"
              className="sm:hidden w-8 h-8 rounded-lg bg-[#111914] border border-[#38C7B5]/40 text-[#38C7B5] hover:bg-[#38C7B5]/15 transition-all flex items-center justify-center shrink-0"
              aria-label="Watch Podcast"
            >
              <Radio className="w-3.5 h-3.5" />
            </Link>

            {/* Mobile / Tablet Menu Toggle (<= 1023px) */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-8 h-8 rounded-lg bg-[#111914] text-[#B6B4A8] hover:text-[#E8B63F] hover:border-[#E8B63F]/40 transition-colors border border-jungle-border/60 flex items-center justify-center shrink-0"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Subtle luminous bottom border glow */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#E8B63F]/25 to-transparent pointer-events-none" />
      </div>

      {/* =========================================================================
          MOBILE / TABLET DRAWER NAVIGATION
          ========================================================================= */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            {/* Backdrop Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/85 backdrop-blur-lg"
              onClick={() => setMobileMenuOpen(false)}
              aria-hidden="true"
            />

            {/* Slide-out Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 250 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-[#0B100D] p-6 border-l border-[#E8B63F]/20 flex flex-col justify-between overflow-y-auto shadow-2xl z-50"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile Navigation Menu"
            >
              <div className="space-y-6">
                {/* Drawer Header */}
                <div className="flex items-center justify-between pb-4 border-b border-jungle-border/60">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#111914] border border-[#E8B63F]/40 flex items-center justify-center">
                      <Crown className="w-4 h-4 text-[#E8B63F]" />
                    </div>
                    <div>
                      <p className="font-display text-base text-[#E8B63F] font-medium">THE AI JUNGLE</p>
                      <p className="font-label text-[9px] uppercase tracking-widest text-[#777D74]">
                        Executive Navigation
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 rounded-lg bg-[#111914] text-[#B6B4A8] hover:text-[#E8B63F] transition-colors"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Navigation Links */}
                <div className="space-y-2">
                  {NAV_ITEMS.map((item) => {
                    const active = isActive(item.href);
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`flex items-center justify-between px-4 py-3 rounded-xl font-label text-xs uppercase tracking-wider transition-all ${
                          active
                            ? "bg-[#18211C] text-[#E8B63F] font-bold border border-[#E8B63F]/40 shadow-[0_0_15px_rgba(232,182,63,0.15)]"
                            : "text-[#B6B4A8] hover:text-[#F2EFE6] hover:bg-[#111914]"
                        }`}
                        aria-current={active ? "page" : undefined}
                      >
                        <div className="flex items-center gap-3">
                          {getNavIcon(item.label)}
                          <span>{item.label}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          {item.badge && (
                            <span
                              className={`text-[9px] px-2 py-0.5 rounded-full font-mono font-semibold ${
                                item.badgeColor === "teal"
                                  ? "bg-[#38C7B5]/15 text-[#38C7B5] border border-[#38C7B5]/30"
                                  : "bg-[#E8B63F]/15 text-[#E8B63F] border border-[#E8B63F]/30"
                              }`}
                            >
                              {item.label === "Safari Journey" ? "13 Chapters" : "Council of 10"}
                            </span>
                          )}
                          <ChevronRight className="w-3.5 h-3.5 text-[#777D74]" />
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Drawer Bottom CTAs */}
              <div className="pt-6 border-t border-jungle-border/60 space-y-3">
                <Link
                  href="/podcast/ep-08-jungle-audit"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#111914] border border-[#38C7B5]/40 text-[#38C7B5] font-label text-xs uppercase tracking-wider font-semibold shadow-[0_0_15px_rgba(56,199,181,0.15)] hover:bg-[#38C7B5]/15 transition-all"
                >
                  <Radio className="w-4 h-4" />
                  <span>Watch Podcast Ep 08</span>
                </Link>

                <Link
                  href="/comics"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-[#C79528] via-[#E8B63F] to-[#FFD15A] text-[#0B100D] font-label text-xs uppercase tracking-wider font-bold shadow-[0_0_18px_rgba(232,182,63,0.35)] hover:brightness-110 transition-all"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Explore Comic Library</span>
                </Link>

                <div className="text-center pt-2">
                  <p className="font-label text-[10px] text-[#777D74] uppercase tracking-widest">
                    THINK STRATEGICALLY. THEN LET AI ROAR.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </header>
  );
}
