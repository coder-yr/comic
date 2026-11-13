"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { SAFARI_CHAPTERS, SafariChapter } from "@/data/safari";
import { CHARACTERS } from "@/data/characters";
import { PODCAST_EPISODES } from "@/data/podcast";
import { COMIC_ISSUES } from "@/data/comics";
import { usePlayerStore } from "@/store/usePlayerStore";
import { useUserStore } from "@/store/useUserStore";
import { BioluminescentParticles } from "@/components/effects/BioluminescentParticles";
import {
  Compass,
  ChevronRight,
  ChevronLeft,
  ArrowRight,
  Play,
  BookOpen,
  Radio,
  CheckCircle2,
  Sparkles,
  Shield,
  Layers,
  Flame,
  Bookmark,
  Share2,
  Download,
  Target,
  Zap,
} from "lucide-react";

interface PageProps {
  params: {
    slug: string;
  };
}

export default function SafariChapterDetailPage({ params }: PageProps) {
  const currentIndex = SAFARI_CHAPTERS.findIndex((c) => c.slug === params.slug);
  const chapter = currentIndex !== -1 ? SAFARI_CHAPTERS[currentIndex] : SAFARI_CHAPTERS[0];
  const prevChapter = currentIndex > 0 ? SAFARI_CHAPTERS[currentIndex - 1] : null;
  const nextChapter =
    currentIndex < SAFARI_CHAPTERS.length - 1 ? SAFARI_CHAPTERS[currentIndex + 1] : null;

  const playEpisode = usePlayerStore((s) => s.playEpisode);

  // Relational mappings
  const matchedCharacter =
    CHARACTERS.find(
      (c) =>
        c.name.toLowerCase().includes(chapter.featuredArchetype.name.toLowerCase()) ||
        c.executiveRole.toLowerCase().includes(chapter.featuredArchetype.role.toLowerCase())
    ) || CHARACTERS[0];

  const matchedPodcast =
    PODCAST_EPISODES.find((ep) => ep.slug === chapter.relatedPodcastSlug) ||
    PODCAST_EPISODES[0];

  const matchedComic =
    COMIC_ISSUES.find((c) => c.slug === chapter.relatedComicSlug) || COMIC_ISSUES[0];

  const [copied, setCopied] = useState(false);
  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="w-full bg-background min-h-screen py-10 space-y-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* =========================================================================
            BREADCRUMB & METADATA BAR
            ========================================================================= */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-jungle-border/40 pb-4">
          <nav className="flex items-center gap-2 text-xs font-label uppercase tracking-widest text-editorial-muted">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/safari" className="hover:text-primary transition-colors">
              Safari Journey
            </Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-primary font-semibold">
              Chapter {chapter.number}
            </span>
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={handleShare}
              className="px-3 py-1.5 rounded-lg bg-surface-container border border-jungle-border/60 hover:border-primary/40 text-editorial-secondary hover:text-primary transition-all text-xs font-label uppercase tracking-wider flex items-center gap-1.5"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>{copied ? "Link Copied" : "Share"}</span>
            </button>
            <span
              className={`px-3 py-1 rounded-full text-xs font-label uppercase tracking-widest font-bold border ${
                chapter.status === "Mastered"
                  ? "bg-secondary/15 text-secondary border-secondary/40 shadow-[0_0_12px_rgba(56,199,181,0.2)]"
                  : chapter.status === "In Progress"
                  ? "bg-primary/15 text-primary border-primary/40 shadow-[0_0_12px_rgba(232,182,63,0.2)]"
                  : "bg-surface-container text-editorial-muted border-jungle-border"
              }`}
            >
              {chapter.status}
            </span>
          </div>
        </div>

        {/* =========================================================================
            CHAPTER HERO HEADER
            ========================================================================= */}
        <div className="relative rounded-3xl overflow-hidden glass-panel border border-primary/30 p-8 sm:p-12 shadow-card">
          <BioluminescentParticles count={25} className="z-0 opacity-40" />

          {/* Ambient Lighting */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-[140px] pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-primary/15 border border-primary/40 font-mono text-xs uppercase tracking-widest text-primary font-bold">
                  {chapter.displayNumber}
                </span>
                <span className="px-3 py-1 rounded-full bg-surface-container border border-jungle-border font-label text-xs uppercase tracking-wider text-editorial-secondary">
                  {chapter.volume}
                </span>
              </div>

              <div className="space-y-3">
                <h1 className="font-display font-medium text-3xl sm:text-4xl lg:text-5xl text-editorial-light tracking-tight leading-[1.1]">
                  {chapter.title}
                </h1>
                <p className="font-serif italic text-lg sm:text-xl text-primary/95">
                  {chapter.subtitle}
                </p>
              </div>

              <p className="font-body text-base text-editorial-secondary leading-relaxed max-w-2xl">
                {chapter.description}
              </p>

              {/* KPI & Velocity Telemetry Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-surface-container/70 border border-jungle-border/70 flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-primary/15 border border-primary/30 flex items-center justify-center text-primary shrink-0">
                    <Target className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-label uppercase tracking-widest text-editorial-muted block">
                      {chapter.kpiImpact.label}
                    </span>
                    <span className="font-label text-sm uppercase tracking-wider text-primary font-bold">
                      {chapter.kpiImpact.value}
                    </span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-surface-container/70 border border-jungle-border/70 flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-secondary/15 border border-secondary/30 flex items-center justify-center text-secondary shrink-0">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-label uppercase tracking-widest text-editorial-muted block">
                      {chapter.computeVelocity.label}
                    </span>
                    <span className="font-label text-sm uppercase tracking-wider text-secondary font-bold">
                      {chapter.computeVelocity.value}
                    </span>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Link
                  href={`/reader/${matchedComic.slug}`}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-primary-fixed-dim via-primary to-primary-fixed text-background font-label text-xs uppercase tracking-wider font-bold shadow-gold hover:shadow-gold-lg transition-all flex items-center gap-2 hover:scale-105 active:scale-95"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Read Chapter Comic</span>
                </Link>

                <button
                  onClick={() => playEpisode(matchedPodcast)}
                  className="px-6 py-3 rounded-xl bg-surface-container border border-secondary/40 text-secondary hover:bg-secondary/15 hover:border-secondary font-label text-xs uppercase tracking-wider font-semibold shadow-[0_0_15px_rgba(56,199,181,0.15)] transition-all flex items-center gap-2 hover:scale-105 active:scale-95"
                >
                  <Play className="w-4 h-4 fill-secondary" />
                  <span>Listen to Transmission</span>
                </button>
              </div>
            </div>

            {/* Right Cinematic Artwork Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md aspect-[16/10] sm:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-primary/30 group">
                <Image
                  src={chapter.artwork}
                  alt={chapter.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-label uppercase tracking-wider text-editorial-light">
                  <span className="flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                    <Sparkles className="w-3.5 h-3.5 text-primary" />
                    {chapter.featuredArchetype.name}
                  </span>
                  <span className="bg-primary/20 backdrop-blur-md px-3 py-1.5 rounded-lg border border-primary/30 text-primary font-bold">
                    VOL. {chapter.volumeKey.toUpperCase()}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            CURRICULUM MODULES & EXECUTIVE LESSONS
            ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <span className="text-xs font-label uppercase tracking-widest text-primary font-semibold">
                  Curriculum Breakdown
                </span>
                <h2 className="font-display font-medium text-2xl text-editorial-light">
                  Strategic Transformation Lessons
                </h2>
              </div>
              <span className="text-xs font-mono text-editorial-muted">
                {chapter.curriculumLessons.length} Core Modules
              </span>
            </div>

            <div className="space-y-3">
              {chapter.curriculumLessons.map((lesson, idx) => (
                <div
                  key={idx}
                  className="p-4 sm:p-5 rounded-2xl bg-surface-container/60 border border-jungle-border/60 hover:border-primary/40 transition-all flex items-start gap-4 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-surface-container border border-primary/30 flex items-center justify-center font-mono text-xs font-bold text-primary group-hover:bg-primary group-hover:text-background transition-colors shrink-0">
                    0{idx + 1}
                  </div>
                  <div className="flex-1 space-y-1">
                    <h3 className="font-label text-sm uppercase tracking-wider text-editorial-light font-semibold group-hover:text-primary transition-colors">
                      {lesson}
                    </h3>
                    <p className="font-body text-xs text-editorial-muted leading-relaxed">
                      Rigorous enterprise analysis, organizational alignment, and systemic implementation guidelines formulated under Dr. Amit Khandelwal&apos;s AI sovereign governance protocol.
                    </p>
                  </div>
                  <CheckCircle2 className="w-5 h-5 text-secondary/60 shrink-0 group-hover:text-secondary group-hover:scale-110 transition-all" />
                </div>
              ))}
            </div>
          </div>

          {/* Right Archetype Dossier Preview */}
          <div className="lg:col-span-4 space-y-6">
            <div className="space-y-1">
              <span className="text-xs font-label uppercase tracking-widest text-secondary font-semibold">
                Guiding Archetype
              </span>
              <h2 className="font-display font-medium text-2xl text-editorial-light">
                Council Patron
              </h2>
            </div>

            <div className="glass-panel p-6 rounded-2xl border border-secondary/30 space-y-5">
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-secondary/20">
                <Image
                  src={matchedCharacter.portraitImage}
                  alt={matchedCharacter.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <span className="text-[10px] font-label uppercase tracking-widest text-secondary font-bold px-2 py-0.5 rounded bg-black/60 border border-secondary/40">
                    {matchedCharacter.animal} Archetype
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="font-display font-medium text-xl text-editorial-light">
                  {matchedCharacter.name}
                </h3>
                <p className="font-label text-xs uppercase tracking-wider text-primary font-semibold">
                  {matchedCharacter.executiveRole} • {matchedCharacter.category}
                </p>
                <p className="font-body text-xs text-editorial-secondary leading-relaxed line-clamp-3">
                  {matchedCharacter.description}
                </p>
              </div>

              <div className="pt-2 border-t border-jungle-border/50">
                <Link
                  href={`/characters/${matchedCharacter.slug}`}
                  className="w-full py-2.5 px-4 rounded-xl bg-surface-container border border-secondary/30 text-secondary hover:bg-secondary/10 hover:border-secondary transition-all font-label text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-2"
                >
                  <span>View Council Dossier</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            CROSS-MEDIA RELATIONAL BLUEPRINT (PODCAST & COMIC SPREAD)
            ========================================================================= */}
        <div className="space-y-6 pt-4 border-t border-jungle-border/40">
          <div className="space-y-1">
            <span className="text-xs font-label uppercase tracking-widest text-primary font-semibold">
              Ecosystem Synchronicity
            </span>
            <h2 className="font-display font-medium text-2xl text-editorial-light">
              Companion Transmissions &amp; Graphic Issues
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Companion Podcast Card */}
            <div className="p-6 rounded-2xl glass-panel border border-primary/20 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded bg-secondary/15 border border-secondary/30 font-label text-[10px] uppercase tracking-wider text-secondary font-semibold flex items-center gap-1.5">
                    <Radio className="w-3 h-3" />
                    Companion Transmission
                  </span>
                  <span className="font-mono text-xs text-editorial-muted">
                    {matchedPodcast.duration}
                  </span>
                </div>
                <h3 className="font-display font-medium text-lg text-editorial-light line-clamp-1">
                  {matchedPodcast.title}
                </h3>
                <p className="font-body text-xs text-editorial-secondary line-clamp-2">
                  {matchedPodcast.description}
                </p>
              </div>

              <div className="flex items-center gap-3 pt-3">
                <button
                  onClick={() => playEpisode(matchedPodcast)}
                  className="flex-1 py-2.5 px-4 rounded-xl bg-secondary/15 border border-secondary/40 text-secondary hover:bg-secondary/25 transition-all font-label text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-2"
                >
                  <Play className="w-3.5 h-3.5 fill-secondary" />
                  <span>Play Broadcast</span>
                </button>
                <Link
                  href={`/podcast/${matchedPodcast.slug}`}
                  className="py-2.5 px-4 rounded-xl bg-surface-container border border-jungle-border hover:border-primary/40 text-editorial-secondary hover:text-primary transition-all font-label text-xs uppercase tracking-wider"
                >
                  Episode Details
                </Link>
              </div>
            </div>

            {/* Companion Graphic Novel Issue Card */}
            <div className="p-6 rounded-2xl glass-panel border border-primary/20 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded bg-primary/15 border border-primary/30 font-label text-[10px] uppercase tracking-wider text-primary font-semibold flex items-center gap-1.5">
                    <BookOpen className="w-3 h-3" />
                    Canonical Graphic Issue
                  </span>
                  <span className="font-mono text-xs text-editorial-muted">
                    {matchedComic.pageCount} Pages • {matchedComic.readingTime}
                  </span>
                </div>
                <h3 className="font-display font-medium text-lg text-editorial-light line-clamp-1">
                  {matchedComic.title}
                </h3>
                <p className="font-body text-xs text-editorial-secondary line-clamp-2">
                  {matchedComic.synopsis}
                </p>
              </div>

              <div className="flex items-center gap-3 pt-3">
                <Link
                  href={`/reader/${matchedComic.slug}`}
                  className="flex-1 py-2.5 px-4 rounded-xl bg-primary text-background hover:bg-primary-fixed-dim transition-all font-label text-xs uppercase tracking-wider font-bold shadow-gold flex items-center justify-center gap-2"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Launch Reader</span>
                </Link>
                <Link
                  href={`/comics/${matchedComic.slug}`}
                  className="py-2.5 px-4 rounded-xl bg-surface-container border border-jungle-border hover:border-primary/40 text-editorial-secondary hover:text-primary transition-all font-label text-xs uppercase tracking-wider"
                >
                  Issue Details
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            PREVIOUS & NEXT CHAPTER NAVIGATION
            ========================================================================= */}
        <div className="pt-8 border-t border-jungle-border/50 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {prevChapter ? (
            <Link
              href={`/safari/${prevChapter.slug}`}
              className="p-5 rounded-2xl bg-surface-container/60 border border-jungle-border/60 hover:border-primary/40 transition-all flex items-center gap-4 group"
            >
              <ChevronLeft className="w-6 h-6 text-primary group-hover:-translate-x-1 transition-transform shrink-0" />
              <div className="min-w-0">
                <span className="text-[10px] font-label uppercase tracking-widest text-editorial-muted block">
                  Previous Chapter • {prevChapter.number}
                </span>
                <span className="font-display font-medium text-sm sm:text-base text-editorial-light group-hover:text-primary transition-colors truncate block">
                  {prevChapter.title}
                </span>
              </div>
            </Link>
          ) : (
            <div className="p-5 rounded-2xl bg-surface-container/20 border border-dashed border-jungle-border/40 flex items-center gap-4 opacity-50">
              <span className="text-xs font-label uppercase tracking-widest text-editorial-muted">
                Initial Chapter of the Safari
              </span>
            </div>
          )}

          {nextChapter ? (
            <Link
              href={`/safari/${nextChapter.slug}`}
              className="p-5 rounded-2xl bg-surface-container/60 border border-jungle-border/60 hover:border-primary/40 transition-all flex items-center justify-between gap-4 group text-right"
            >
              <div className="min-w-0 flex-1">
                <span className="text-[10px] font-label uppercase tracking-widest text-editorial-muted block">
                  Next Chapter • {nextChapter.number}
                </span>
                <span className="font-display font-medium text-sm sm:text-base text-editorial-light group-hover:text-primary transition-colors truncate block">
                  {nextChapter.title}
                </span>
              </div>
              <ChevronRight className="w-6 h-6 text-primary group-hover:translate-x-1 transition-transform shrink-0" />
            </Link>
          ) : (
            <div className="p-5 rounded-2xl bg-surface-container/20 border border-dashed border-jungle-border/40 flex items-center justify-end gap-4 opacity-50">
              <span className="text-xs font-label uppercase tracking-widest text-editorial-muted">
                Culmination of the 13-Chapter Safari
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
