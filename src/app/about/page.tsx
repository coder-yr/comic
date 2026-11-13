"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Sparkles,
  Shield,
  Compass,
  BookOpen,
  Radio,
  ArrowRight,
  CheckCircle2,
  Mail,
  Award,
  Layers,
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="w-full bg-background min-h-screen py-10 space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* =========================================================================
            ABOUT HERO: CREATOR & BRAND VISION
            ========================================================================= */}
        <div className="space-y-4 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/15 text-primary font-label text-xs uppercase tracking-widest font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            The Origin & The Mission
          </div>
          <h1 className="font-display text-4xl sm:text-6xl text-editorial-light tracking-tight leading-tight">
            Where Business Meets <br />
            <span className="italic text-text-gold-gradient">Artificial Intelligence.</span>
          </h1>
          <p className="font-body text-base sm:text-lg text-editorial-secondary leading-relaxed">
            The AI Jungle was conceived to dismantle the greatest barrier to enterprise AI transformation: the divide between complex technical realities and high-level corporate strategy.
          </p>
        </div>

        {/* =========================================================================
            DR. AMIT KHANDELWAL BIOGRAPHY SPOTLIGHT
            ========================================================================= */}
        <div className="glass-panel rounded-2xl p-6 sm:p-10 border border-primary/30 shadow-card grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border border-primary/40 group">
              <img
                src="/assets/sample/comic-cover-sovereign.jpg"
                alt="Dr. Amit Khandelwal - The AI Jungle Safari Blueprint"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-lg bg-surface-container/90 backdrop-blur-md text-center border border-jungle-border">
                <p className="font-display text-lg text-primary">Dr. Amit Khandelwal</p>
                <p className="font-label text-[10px] text-editorial-muted uppercase tracking-widest">
                  Chief AI, Digital, Data & ERP Transformation Leader (28 Yrs Global Exp.)
                </p>
                <span className="inline-block mt-1 px-2 py-0.5 rounded bg-primary/20 text-primary text-[10px] font-label font-bold">
                  CXO LANES POWER LIST 2026 WINNER
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-primary/20 text-primary border border-primary/30 font-label text-xs uppercase tracking-wider font-bold">
                  CXO Lanes Power List 2026 Winner
                </span>
                <span className="font-label text-xs text-secondary uppercase tracking-widest font-semibold">
                  India's Top IT Leaders
                </span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl text-editorial-light">
                Dr. Amit Khandelwal
              </h2>
              <p className="font-body text-sm sm:text-base text-editorial-secondary leading-relaxed">
                Chief AI, Digital, Data & ERP Transformation Leader with 28 years of global transformation experience across multinational enterprises. Conceptualized, curated, and published the authoritative <strong className="text-primary font-semibold">The AI Jungle Safari</strong> and executive podcast transmissions.
              </p>
              <p className="font-body text-sm text-editorial-secondary leading-relaxed">
                Recognizing that corporate leadership often struggles to visualize algorithmic concepts—such as vector drift, multi-agent swarms, and RAG architectures—Dr. Khandelwal pioneered The AI Jungle narrative universe. By pairing executive broadcasts with illustrated graphic novels, complex transformation roadmaps become unforgettable mental models.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 py-2 text-xs font-label">
              <div className="p-3 rounded-lg bg-surface-container border border-jungle-border">
                <p className="text-editorial-muted uppercase">Pillars Created</p>
                <p className="font-display text-lg text-primary font-bold">10 Archetypes • 13 Chapters</p>
              </div>
              <div className="p-3 rounded-lg bg-surface-container border border-jungle-border">
                <p className="text-editorial-muted uppercase">Broadcast Series</p>
                <p className="font-display text-lg text-secondary font-bold">The AI Jungle Podcast</p>
              </div>
            </div>

            {/* Social Channels from Canon Sample Asset */}
            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs font-label">
              <a
                href="https://linkedin.com/in/amitk1"
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 rounded-lg bg-[#0077b5]/20 text-[#60b5ff] border border-[#0077b5]/40 hover:bg-[#0077b5]/30 transition-colors flex items-center gap-1.5"
              >
                <span>LinkedIn</span>
                <span className="text-[10px] text-editorial-muted">/in/amitk1</span>
              </a>
              <a
                href="https://youtube.com/@DrAK2404"
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 rounded-lg bg-[#ff0000]/20 text-[#ff7070] border border-[#ff0000]/40 hover:bg-[#ff0000]/30 transition-colors flex items-center gap-1.5"
              >
                <span>YouTube</span>
                <span className="text-[10px] text-editorial-muted">@DrAK2404</span>
              </a>
              <a
                href="https://instagram.com/dramitkhandelwal"
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 rounded-lg bg-[#e1306c]/20 text-[#ff80ab] border border-[#e1306c]/40 hover:bg-[#e1306c]/30 transition-colors flex items-center gap-1.5"
              >
                <span>Instagram</span>
                <span className="text-[10px] text-editorial-muted">@dramitkhandelwal</span>
              </a>
              <a
                href="https://x.com/DrAmitK1"
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 rounded-lg bg-surface-container text-editorial-light border border-jungle-border hover:border-primary transition-colors flex items-center gap-1.5"
              >
                <span>X (Twitter)</span>
                <span className="text-[10px] text-editorial-muted">@DrAmitK1</span>
              </a>
            </div>
          </div>
        </div>

        {/* =========================================================================
            THE THREE PILLARS OF THE AI JUNGLE
            ========================================================================= */}
        <div className="space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <h2 className="font-display text-3xl sm:text-4xl text-editorial-light">
              The Three Ecosystem Pillars
            </h2>
            <p className="font-body text-sm text-editorial-secondary">
              A synchronized multimedia universe designed to equip executives with actionable intelligence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-panel rounded-2xl p-6 sm:p-8 space-y-4 shadow-card border hover:border-primary/50 transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-primary/20 text-primary flex items-center justify-center">
                  <Radio className="w-6 h-6" />
                </div>
                <h3 className="font-display text-2xl text-editorial-light">
                  1. The Podcast
                </h3>
                <p className="font-body text-xs sm:text-sm text-editorial-secondary leading-relaxed">
                  Deep-dive broadcast conversations between Dr. Amit Khandelwal, The Sovereign Lion, and global enterprise leaders, deconstructing real-world case studies and operational blueprints.
                </p>
              </div>
              <Link
                href="/podcast"
                className="inline-flex items-center gap-1.5 font-label text-xs uppercase text-primary font-bold hover:underline pt-2"
              >
                <span>Explore Transmissions</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="glass-panel rounded-2xl p-6 sm:p-8 space-y-4 shadow-card border hover:border-secondary/50 transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-secondary/20 text-secondary flex items-center justify-center">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h3 className="font-display text-2xl text-editorial-light">
                  2. Digital Graphic Novels
                </h3>
                <p className="font-body text-xs sm:text-sm text-editorial-secondary leading-relaxed">
                  Prestige illustrated comics rendering boardroom tensions, data lake sanitization, and autonomous agent coordination into cinematic visual narratives.
                </p>
              </div>
              <Link
                href="/comics"
                className="inline-flex items-center gap-1.5 font-label text-xs uppercase text-secondary font-bold hover:underline pt-2"
              >
                <span>Enter The Archive</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="glass-panel rounded-2xl p-6 sm:p-8 space-y-4 shadow-card border hover:border-primary/50 transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-primary/20 text-primary flex items-center justify-center">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="font-display text-2xl text-editorial-light">
                  3. The Safari Curriculum
                </h3>
                <p className="font-body text-xs sm:text-sm text-editorial-secondary leading-relaxed">
                  A canonical 13-chapter operational roadmap charting how legacy institutions systematically progress from algorithmic diagnostic to apex autonomous swarms.
                </p>
              </div>
              <Link
                href="/safari"
                className="inline-flex items-center gap-1.5 font-label text-xs uppercase text-primary font-bold hover:underline pt-2"
              >
                <span>View 13 Chapters</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* =========================================================================
            EXECUTIVE ADVISORY & CONTACT SECTION
            ========================================================================= */}
        <section id="advisory" className="glass-panel rounded-2xl p-8 sm:p-12 border border-primary/40 shadow-card grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-3">
            <span className="font-label text-xs uppercase tracking-widest text-secondary font-bold">
              Boardroom Advisory & Keynotes
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-editorial-light">
              Bring The AI Jungle to Your Executive Boardroom
            </h2>
            <p className="font-body text-sm sm:text-base text-editorial-secondary leading-relaxed">
              Dr. Amit Khandelwal conducts bespoke executive briefings, sovereign AI masterclasses, and transformation alignment sessions for leadership councils worldwide.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col items-start lg:items-end space-y-3">
            <Link
              href="mailto:advisory@theaijungle.com"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-primary-container via-primary to-primary-highlight text-background font-label text-xs uppercase tracking-wider font-bold shadow-gold-lg hover:brightness-110 transition-all"
            >
              <Mail className="w-4 h-4" />
              <span>Inquire for Advisory</span>
            </Link>
            <p className="font-label text-[10px] text-editorial-muted uppercase tracking-widest">
              advisory@theaijungle.com
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

