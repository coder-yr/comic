"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { PODCAST_EPISODES } from "@/data/podcast";
import {
  Play,
  Search,
  Filter,
  Radio,
  Clock,
  Calendar,
  Sparkles,
  ArrowRight,
  BookOpen,
  Share2,
  Bookmark,
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
  const [bookmarkedEpisodes, setBookmarkedEpisodes] = useState<string[]>([]);

  const toggleBookmark = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setBookmarkedEpisodes((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
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

  const featuredEpisode = PODCAST_EPISODES.find((ep) => ep.featured) || PODCAST_EPISODES[0];

  return (
    <div className="w-full bg-background min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Page Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-label text-xs uppercase tracking-widest">
            <Radio className="w-3.5 h-3.5" />
            Executive Broadcast Transmissions
          </div>
          <h1 className="font-display text-4xl sm:text-6xl text-editorial-light">
            The AI Jungle Podcast
          </h1>
          <p className="font-body text-base text-editorial-secondary max-w-3xl leading-relaxed">
            Direct transmissions from the sovereign boardroom. Dr. Amit Khandelwal and The Sovereign Lion dissect artificial intelligence strategy, data hygiene, and organizational resilience with global transformation leaders.
          </p>
        </div>

        {/* Featured Broadcast Hero (Episode 08 Spotlight) */}
        <div className="glass-panel rounded-2xl overflow-hidden p-6 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-card border border-primary/30">
          <div className="lg:col-span-7 relative aspect-video rounded-xl overflow-hidden group">
            <Image
              src={featuredEpisode.videoPoster}
              alt={featuredEpisode.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
              <Link
                href={`/podcast/${featuredEpisode.slug}`}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary text-background flex items-center justify-center shadow-gold-lg group-hover:scale-110 transition-transform"
              >
                <Play className="w-8 h-8 fill-current ml-1" />
              </Link>
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
              <Link
                href={`/podcast/${featuredEpisode.slug}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-background font-label text-xs font-bold uppercase tracking-wider shadow-gold hover:bg-primary-fixed transition-all"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Listen Transmission</span>
              </Link>
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

        {/* Filter and Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-4 border-y border-jungle-border/50">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg font-label text-xs uppercase tracking-wider transition-all ${
                  selectedCategory === cat
                    ? "bg-primary text-background font-bold shadow-gold"
                    : "bg-surface-container text-editorial-secondary hover:text-editorial-light hover:bg-surface-container-high"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-editorial-muted absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search episodes, topics..."
              className="w-full pl-9 pr-4 py-2 rounded-lg bg-surface-container border border-jungle-border text-xs text-editorial-light focus:outline-none focus:border-primary placeholder:text-editorial-muted font-body"
            />
          </div>
        </div>

        {/* Episode Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEpisodes.map((ep) => {
            const isBookmarked = bookmarkedEpisodes.includes(ep.id);
            return (
              <div
                key={ep.id}
                className="glass-panel rounded-2xl overflow-hidden flex flex-col justify-between group hover:border-primary/50 transition-all shadow-card"
              >
                {/* Thumbnail */}
                <div className="relative aspect-video w-full overflow-hidden bg-surface-container">
                  <Image
                    src={ep.videoPoster}
                    alt={ep.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Link
                      href={`/podcast/${ep.slug}`}
                      className="w-12 h-12 rounded-full bg-primary text-background flex items-center justify-center shadow-gold"
                    >
                      <Play className="w-5 h-5 fill-current ml-0.5" />
                    </Link>
                  </div>
                  <div className="absolute top-3 left-3 px-2 py-0.5 rounded bg-black/80 backdrop-blur-md font-label text-[10px] text-secondary uppercase font-semibold">
                    {ep.episodeNumber}
                  </div>
                  <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded bg-black/80 backdrop-blur-md font-label text-[10px] text-editorial-light">
                    {ep.duration}
                  </div>
                  <button
                    type="button"
                    onClick={(e) => toggleBookmark(ep.id, e)}
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
                    <Link
                      href={`/reader/${ep.comicBridge.readerSlug}`}
                      className="font-label text-[10px] uppercase text-secondary hover:underline flex items-center gap-1"
                    >
                      <BookOpen className="w-3 h-3" />
                      <span>Comic Bridge</span>
                    </Link>
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

