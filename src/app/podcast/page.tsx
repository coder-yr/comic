"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { PODCAST_EPISODES, PodcastEpisode } from "@/data/podcast";
import { usePlayerStore } from "@/store/usePlayerStore";
import { useUserStore } from "@/store/useUserStore";
import {
  Play,
  Search,
  Filter,
  Bookmark,
  Radio,
  BookOpen,
  Clock,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const CATEGORIES = [
  "All Categories",
  "AI Strategy",
  "Enterprise Transformation",
  "Autonomous Agents",
  "Data & Analytics",
  "AI Governance",
];

export default function PodcastLibraryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [searchQuery, setSearchQuery] = useState("");

  const playEpisode = usePlayerStore((s) => s.playEpisode);
  const bookmarkedEpisodes = useUserStore((s) => s.bookmarkedEpisodes);
  const toggleBookmarkEpisode = useUserStore((s) => s.toggleBookmarkEpisode);

  const toggleBookmark = (slug: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleBookmarkEpisode(slug);
  };

  const filteredEpisodes = PODCAST_EPISODES.filter((ep) => {
    const matchesCategory =
      selectedCategory === "All Categories" ||
      ep.categories.includes(selectedCategory);
    const matchesSearch =
      ep.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ep.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ep.subtitle.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredEpisode = PODCAST_EPISODES[0];

  return (
    <div className="w-full bg-background min-h-screen py-8 space-y-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* =========================================================================
            HEADER TITLE & SUBSCRIBER TELEMETRY
            ========================================================================= */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container border border-secondary/30 text-secondary font-label text-xs uppercase tracking-widest font-semibold">
            <Radio className="w-3.5 h-3.5" />
            <span>28 Mastered Broadcasts • Season 01 &amp; 02</span>
          </div>
          <h1 className="font-display text-4xl sm:text-6xl text-editorial-light">
            The AI Jungle Podcast
          </h1>
          <p className="font-body text-editorial-secondary text-sm sm:text-base leading-relaxed">
            High-stakes executive strategy debates hosted by Dr. Amit Khandelwal and The Sovereign Lion. Where boardroom governance confronts autonomous machine intelligence.
          </p>
        </div>

        {/* =========================================================================
            FEATURED EPISODE SPOTLIGHT BANNER
            ========================================================================= */}
        <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-primary/30 shadow-card grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 relative aspect-video rounded-xl overflow-hidden group">
            <Image
              src={featuredEpisode.videoPoster}
              alt={featuredEpisode.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
              <button
                onClick={() => playEpisode(featuredEpisode)}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary text-background flex items-center justify-center shadow-gold-lg group-hover:scale-110 active:scale-95 transition-transform"
                aria-label={`Play ${featuredEpisode.title}`}
              >
                <Play className="w-8 h-8 fill-current ml-1" />
              </button>
            </div>
            <div className="absolute top-4 left-4 px-3 py-1 rounded bg-black/80 backdrop-blur-md border border-primary/40 font-label text-xs text-primary uppercase tracking-widest font-bold">
              Featured Transmission
            </div>
            <div className="absolute bottom-4 right-4 px-3 py-1 rounded bg-black/80 backdrop-blur-md font-label text-xs text-editorial-light">
              {featuredEpisode.duration}
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <span className="font-label text-xs text-secondary uppercase tracking-widest font-semibold">
                {featuredEpisode.episodeNumber} • {featuredEpisode.season}
              </span>
              <h2 className="font-display text-2xl sm:text-3xl text-editorial-light hover:text-primary transition-colors">
                <Link href={`/podcast/${featuredEpisode.slug}`}>
                  {featuredEpisode.title}
                </Link>
              </h2>
              <p className="font-label text-xs text-primary italic">
                {featuredEpisode.subtitle}
              </p>
              <p className="font-body text-sm text-editorial-secondary line-clamp-3 leading-relaxed">
                {featuredEpisode.description}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2 pt-2">
              {featuredEpisode.categories.map((cat) => (
                <span
                  key={cat}
                  className="px-2.5 py-0.5 rounded bg-surface-container-high border border-jungle-border font-label text-[10px] uppercase text-editorial-muted"
                >
                  {cat}
                </span>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-3">
              <button
                onClick={() => playEpisode(featuredEpisode)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-background font-label text-xs font-bold uppercase tracking-wider shadow-gold hover:bg-primary-fixed hover:scale-105 active:scale-95 transition-all"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Listen Transmission</span>
              </button>
              <Link
                href={`/reader/${featuredEpisode.comicBridge.readerSlug}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-surface-container-high border border-secondary/40 text-secondary font-label text-xs font-semibold uppercase tracking-wider hover:bg-secondary/15 transition-all"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Companion Comic</span>
              </Link>
            </div>
          </div>
        </div>

        {/* =========================================================================
            SEARCH & CATEGORY FILTRATION BAR
            ========================================================================= */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative w-full sm:w-96">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-editorial-muted" />
              <input
                type="text"
                placeholder="Search episodes by topic or guest..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-surface-container border border-jungle-border text-editorial-light text-xs font-body focus:outline-none focus:border-primary placeholder:text-editorial-muted"
              />
            </div>

            {/* Total Episodes Counter */}
            <div className="flex items-center gap-2 text-xs font-label uppercase text-editorial-muted">
              <span>Showing</span>
              <span className="font-bold text-primary">{filteredEpisodes.length}</span>
              <span>of 28 Canonical Transmissions</span>
            </div>
          </div>

          {/* Category Chips */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-1.5 rounded-full font-label text-xs uppercase tracking-wider whitespace-nowrap transition-all ${
                  selectedCategory === category
                    ? "bg-primary text-background font-bold shadow-gold"
                    : "bg-surface-container text-editorial-secondary hover:text-editorial-light border border-jungle-border"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* =========================================================================
            EPISODE ARCHIVE GRID
            ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEpisodes.map((ep) => {
            const isBookmarked = bookmarkedEpisodes.includes(ep.slug);

            return (
              <div
                key={ep.id}
                className="glass-panel rounded-xl overflow-hidden border border-jungle-border hover:border-primary/50 transition-all flex flex-col justify-between group shadow-card"
              >
                {/* Thumbnail Header */}
                <div className="relative aspect-video w-full bg-surface-container overflow-hidden">
                  <Image
                    src={ep.videoPoster}
                    alt={ep.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={() => playEpisode(ep)}
                      className="w-12 h-12 rounded-full bg-primary text-background flex items-center justify-center shadow-gold hover:scale-110 active:scale-95 transition-transform"
                      aria-label={`Play ${ep.title}`}
                    >
                      <Play className="w-5 h-5 fill-current ml-0.5" />
                    </button>
                  </div>
                  <div className="absolute top-3 left-3 px-2 py-0.5 rounded bg-black/80 backdrop-blur-md font-label text-[10px] text-secondary uppercase font-semibold">
                    {ep.episodeNumber}
                  </div>
                  <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded bg-black/80 backdrop-blur-md font-label text-[10px] text-editorial-light">
                    {ep.duration}
                  </div>
                  <button
                    type="button"
                    onClick={(e) => toggleBookmark(ep.slug, e)}
                    className="absolute top-3 right-3 p-1.5 rounded-full bg-black/60 hover:bg-black/80 text-editorial-light transition-colors"
                    title={isBookmarked ? "Remove Bookmark" : "Save Episode"}
                  >
                    <Bookmark
                      className={`w-3.5 h-3.5 ${
                        isBookmarked ? "fill-primary text-primary" : ""
                      }`}
                    />
                  </button>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1 justify-between space-y-4">
                  <div className="space-y-2">
                    <span className="font-label text-[10px] text-editorial-muted uppercase tracking-widest">
                      {ep.publishDate} • {ep.categories[0]}
                    </span>
                    <h3 className="font-display text-xl text-editorial-light group-hover:text-primary transition-colors line-clamp-2">
                      <Link href={`/podcast/${ep.slug}`}>{ep.title}</Link>
                    </h3>
                    <p className="font-body text-xs text-editorial-secondary line-clamp-3 leading-relaxed">
                      {ep.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-jungle-border/50 flex items-center justify-between">
                    <Link
                      href={`/podcast/${ep.slug}`}
                      className="inline-flex items-center gap-1 font-label text-xs uppercase tracking-wider text-primary hover:underline"
                    >
                      <span>Episode Transmission</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>

                    <button
                      onClick={() => playEpisode(ep)}
                      className="px-2.5 py-1 rounded bg-secondary/15 border border-secondary/30 text-secondary hover:bg-secondary/25 font-label text-[10px] uppercase tracking-wider font-semibold flex items-center gap-1"
                    >
                      <Play className="w-2.5 h-2.5 fill-secondary" />
                      <span>Play</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
