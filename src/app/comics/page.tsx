"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { COMIC_ISSUES, CANONICAL_OMNIBUS, ComicIssue } from "@/data/comics";
import { BioluminescentParticles } from "@/components/effects/BioluminescentParticles";
import { InteractiveHoloCard } from "@/components/effects/InteractiveHoloCard";
import {
  BookOpen,
  Search,
  Bookmark,
  Clock,
  ArrowRight,
  Sparkles,
  Layers,
  ChevronRight,
  Filter,
} from "lucide-react";

const CHARACTER_FILTERS = [
  "All Characters",
  "The Sovereign Lion",
  "The Great Elephant",
  "The Agile Wolf",
  "The Vigilant Owl",
  "The Asymmetric Fox",
];

export default function ComicsLibraryPage() {
  const [selectedCharacter, setSelectedCharacter] = useState("All Characters");
  const [searchQuery, setSearchQuery] = useState("");
  const [bookmarkedIssues, setBookmarkedIssues] = useState<string[]>(["comic-01"]);

  const toggleBookmark = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setBookmarkedIssues((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredIssues = COMIC_ISSUES.filter((issue) => {
    const matchesChar =
      selectedCharacter === "All Characters" ||
      issue.featuredCharacters.includes(selectedCharacter);
    const matchesSearch =
      issue.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      issue.synopsis.toLowerCase().includes(searchQuery.toLowerCase()) ||
      issue.canonicalChapter.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesChar && matchesSearch;
  });

  return (
    <div className="w-full bg-background min-h-screen py-10 space-y-16 relative overflow-hidden">
      <BioluminescentParticles count={40} className="z-0 opacity-60" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 z-10">
        {/* =========================================================================
            HERO: ENTER THE COMIC WORLD & ISSUE ZERO SHOWCASE
            ========================================================================= */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/15 text-secondary font-label text-xs uppercase tracking-widest font-semibold">
            <BookOpen className="w-3.5 h-3.5" />
            The AI Jungle Digital Graphic Novel Archive
          </div>
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl text-editorial-light tracking-tight">
            ENTER THE COMIC WORLD
          </h1>
          <p className="font-body text-base text-editorial-secondary max-w-3xl leading-relaxed">
            Where corporate dilemmas are rendered in cinematic double-page spreads. Immerse yourself in the visual storytelling universe exploring AI governance, vector lakes, and autonomous agent swarms.
          </p>
        </div>

        {/* Featured Release Hero: Issue Zero Showcase */}
        <div className="glass-panel rounded-2xl overflow-hidden p-6 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-card border border-primary/30">
          <div className="lg:col-span-7 relative aspect-[16/9] rounded-xl overflow-hidden group shadow-2xl">
            <Image
              src="/assets/comics/asset_10_c55f36da.jpg"
              alt="Issue Zero: The Sovereign Awakening & The Sacred Lake"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute top-4 left-4 px-3 py-1 rounded bg-black/80 backdrop-blur-md border border-primary/40 font-label text-xs text-primary uppercase font-bold tracking-wider">
              Special Collector Issue
            </div>
            <div className="absolute bottom-4 left-4 right-4">
              <span className="font-label text-xs text-secondary uppercase tracking-widest font-semibold">
                Prelude Edition • 48 Pages
              </span>
              <h3 className="font-display text-2xl text-editorial-light">
                Issue Zero: The Sovereign Awakening & The Sacred Lake
              </h3>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <span className="font-label text-xs text-primary uppercase tracking-widest font-semibold">
                Canon Foundation
              </span>
              <h2 className="font-display text-2xl sm:text-3xl text-editorial-light">
                The Sovereign Awakening & Executive War Room
              </h2>
              <p className="font-body text-sm text-editorial-secondary leading-relaxed">
                In an ancient misty cybernetic jungle, Dr. Amit Khandelwal and The Sovereign Lion stand inside an illuminated boardroom, staring out across the data canopy. When legacy algorithms begin to hallucinate, the council must awaken.
              </p>
            </div>

            <div className="flex items-center gap-4 text-xs font-label text-editorial-muted">
              <span>32 Spreads</span>
              <span>•</span>
              <span>12 Min Read</span>
              <span>•</span>
              <span className="text-secondary font-semibold">Available Now</span>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Link
                href="/reader/the-jungle-audit"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-background font-label text-xs uppercase tracking-wider font-bold shadow-gold hover:bg-primary-fixed transition-all"
              >
                <BookOpen className="w-4 h-4" />
                <span>Launch Comic Reader</span>
              </Link>
              <Link
                href="/comics/the-jungle-audit"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-surface-container-high border border-jungle-border text-editorial-light font-label text-xs uppercase tracking-wider hover:border-primary transition-all"
              >
                <span>Issue Details</span>
              </Link>
            </div>
          </div>
        </div>

        {/* =========================================================================
            CONTINUE READING ACTIVE REEL (LOCAL READING STATE)
            ========================================================================= */}
        <div className="space-y-4 pt-4">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-primary" />
            <h3 className="font-label text-xs uppercase tracking-widest text-primary font-semibold">
              Continue Reading • Active Session
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link
              href="/reader/the-jungle-audit"
              className="glass-panel rounded-xl p-4 flex items-center gap-4 group hover:border-secondary transition-all"
            >
              <div className="relative w-16 h-20 rounded-lg overflow-hidden flex-shrink-0 bg-surface-container">
                <Image
                  src="/assets/comics/asset_05_b45edffc.jpg"
                  alt="The Jungle Audit"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-1 flex-1">
                <div className="flex justify-between items-center">
                  <span className="font-label text-[10px] text-secondary uppercase font-semibold">
                    Issue 01 • Ch 01
                  </span>
                  <span className="font-label text-[10px] text-primary">Page 2 of 2</span>
                </div>
                <h4 className="font-display text-base text-editorial-light group-hover:text-primary transition-colors">
                  The Jungle Audit
                </h4>
                {/* Progress bar */}
                <div className="w-full h-1.5 rounded-full bg-surface-container-highest overflow-hidden">
                  <div className="h-full bg-secondary rounded-full w-full shadow-teal" />
                </div>
              </div>
            </Link>

            <Link
              href="/reader/the-silicon-canopy"
              className="glass-panel rounded-xl p-4 flex items-center gap-4 group hover:border-secondary transition-all"
            >
              <div className="relative w-16 h-20 rounded-lg overflow-hidden flex-shrink-0 bg-surface-container">
                <Image
                  src="/assets/comics/asset_12_d8f7c718.jpg"
                  alt="The Silicon Canopy"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-1 flex-1">
                <div className="flex justify-between items-center">
                  <span className="font-label text-[10px] text-secondary uppercase font-semibold">
                    Issue 00 • Prologue
                  </span>
                  <span className="font-label text-[10px] text-primary">Page 1 of 2</span>
                </div>
                <h4 className="font-display text-base text-editorial-light group-hover:text-primary transition-colors">
                  The Silicon Canopy
                </h4>
                <div className="w-full h-1.5 rounded-full bg-surface-container-highest overflow-hidden">
                  <div className="h-full bg-secondary rounded-full w-1/2 shadow-teal" />
                </div>
              </div>
            </Link>

            <Link
              href="/reader/the-great-trunk"
              className="glass-panel rounded-xl p-4 flex items-center gap-4 group hover:border-secondary transition-all"
            >
              <div className="relative w-16 h-20 rounded-lg overflow-hidden flex-shrink-0 bg-surface-container">
                <Image
                  src="/assets/comics/asset_07_79aaf0cc.jpg"
                  alt="The Great Trunk"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-1 flex-1">
                <div className="flex justify-between items-center">
                  <span className="font-label text-[10px] text-secondary uppercase font-semibold">
                    Issue 02 • Ch 02
                  </span>
                  <span className="font-label text-[10px] text-editorial-muted">Queue</span>
                </div>
                <h4 className="font-display text-base text-editorial-light group-hover:text-primary transition-colors">
                  The Great Trunk
                </h4>
                <div className="w-full h-1.5 rounded-full bg-surface-container-highest overflow-hidden">
                  <div className="h-full bg-primary/40 rounded-full w-1/4" />
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* =========================================================================
            SEARCH AND CHARACTER FILTER BAR
            ========================================================================= */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-4 border-y border-jungle-border/50">
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {CHARACTER_FILTERS.map((char) => (
              <button
                key={char}
                type="button"
                onClick={() => setSelectedCharacter(char)}
                className={`px-3.5 py-1.5 rounded-lg font-label text-xs uppercase tracking-wider transition-all ${
                  selectedCharacter === char
                    ? "bg-primary text-background font-bold shadow-gold"
                    : "bg-surface-container text-editorial-secondary hover:text-editorial-light hover:bg-surface-container-high"
                }`}
              >
                {char}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-editorial-muted absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search comics, issues, chapters..."
              className="w-full pl-9 pr-4 py-2 rounded-lg bg-surface-container border border-jungle-border text-xs text-editorial-light focus:outline-none focus:border-primary placeholder:text-editorial-muted font-body"
            />
          </div>
        </div>

        {/* =========================================================================
            FEATURED GRAPHIC NOVELS SHELF
            ========================================================================= */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-3xl text-editorial-light">
              Featured Graphic Novels
            </h2>
            <span className="font-label text-xs uppercase tracking-widest text-secondary">
              {filteredIssues.length} Issues In Vault
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredIssues.map((comic) => {
              const isSaved = bookmarkedIssues.includes(comic.id);
              return (
                <InteractiveHoloCard
                  key={comic.id}
                  glowColor="gold"
                  className="glass-panel rounded-2xl overflow-hidden flex flex-col justify-between group shadow-card"
                >
                  <div className="relative aspect-[3/4] w-full overflow-hidden bg-surface-container">
                    <Image
                      src={comic.coverImage}
                      alt={comic.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-black/80 backdrop-blur-md border border-primary/40 font-label text-[10px] uppercase text-primary font-bold">
                      {comic.issueNumber}
                    </div>
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded bg-black/80 backdrop-blur-md font-label text-[10px] uppercase text-secondary">
                      {comic.readingTime}
                    </div>
                    <button
                      type="button"
                      onClick={(e) => toggleBookmark(comic.id, e)}
                      className="absolute bottom-3 right-3 p-2 rounded-full bg-black/60 hover:bg-black/80 text-editorial-light transition-colors"
                    >
                      <Bookmark
                        className={`w-4 h-4 ${
                          isSaved ? "fill-primary text-primary" : ""
                        }`}
                      />
                    </button>
                  </div>

                  <div className="p-6 flex flex-col flex-1 justify-between space-y-4">
                    <div className="space-y-2">
                      <span className="font-label text-[10px] text-editorial-muted uppercase tracking-widest">
                        {comic.canonicalChapter} • {comic.volume}
                      </span>
                      <h3 className="font-display text-xl text-editorial-light group-hover:text-primary transition-colors">
                        <Link href={`/comics/${comic.slug}`}>{comic.title}</Link>
                      </h3>
                      <p className="font-body text-xs text-editorial-secondary line-clamp-3 leading-relaxed">
                        {comic.synopsis}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-jungle-border/50 flex items-center justify-between">
                      <Link
                        href={`/comics/${comic.slug}`}
                        className="font-label text-xs uppercase tracking-wider text-editorial-secondary hover:text-editorial-light"
                      >
                        Issue Overview
                      </Link>
                      <Link
                        href={`/reader/${comic.slug}`}
                        className="shimmer-card inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary text-background font-label text-xs uppercase tracking-wider font-bold shadow-gold hover:bg-primary-fixed transition-all hover:scale-105 active:scale-95"
                      >
                        <span>Read Now</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </InteractiveHoloCard>
              );
            })}
          </div>
        </div>

        {/* =========================================================================
            CANONICAL OMNIBUS VOL. I COLLECTOR'S EDITION BANNER
            ========================================================================= */}
        <div className="glass-panel rounded-2xl p-6 sm:p-10 border border-primary/40 shadow-gold grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-4 relative aspect-[4/5] rounded-xl overflow-hidden shadow-2xl group">
            <Image
              src={CANONICAL_OMNIBUS.coverImage}
              alt={CANONICAL_OMNIBUS.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute top-3 left-3 px-3 py-1 rounded bg-black/80 font-label text-xs text-primary font-bold">
              {CANONICAL_OMNIBUS.status}
            </div>
          </div>

          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/15 text-primary font-label text-xs uppercase tracking-widest font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              Complete Omnibus Hardcover Edition
            </div>
            <h2 className="font-display text-2xl sm:text-4xl text-editorial-light">
              {CANONICAL_OMNIBUS.title}
            </h2>
            <p className="font-label text-sm text-secondary italic">
              {CANONICAL_OMNIBUS.subtitle}
            </p>
            <p className="font-body text-sm sm:text-base text-editorial-secondary leading-relaxed">
              {CANONICAL_OMNIBUS.description}
            </p>

            <div className="grid grid-cols-3 gap-4 py-2 max-w-md border-y border-jungle-border/50 text-xs font-label">
              <div>
                <p className="text-editorial-muted uppercase">Spreads</p>
                <p className="text-primary font-bold text-base">{CANONICAL_OMNIBUS.totalSpreads}</p>
              </div>
              <div>
                <p className="text-editorial-muted uppercase">Pages</p>
                <p className="text-primary font-bold text-base">{CANONICAL_OMNIBUS.totalPages}</p>
              </div>
              <div>
                <p className="text-editorial-muted uppercase">Binding</p>
                <p className="text-secondary font-bold text-xs truncate">{CANONICAL_OMNIBUS.binding}</p>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="/reader/the-jungle-audit"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-lg bg-primary text-background font-label text-xs uppercase tracking-wider font-bold shadow-gold hover:bg-primary-fixed transition-all"
              >
                <BookOpen className="w-4 h-4" />
                <span>Read Digital Omnibus Preview</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

