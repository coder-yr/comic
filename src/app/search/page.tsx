"use client";

import React, { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  getAllSearchableContent,
  ContentHubItem,
} from "@/lib/contentRelations";
import { useUserStore } from "@/store/useUserStore";
import { usePlayerStore } from "@/store/usePlayerStore";
import { PODCAST_EPISODES } from "@/data/podcast";
import { COMIC_ISSUES } from "@/data/comics";
import { SAFARI_CHAPTERS } from "@/data/safari";
import { CHARACTERS } from "@/data/characters";
import {
  Search,
  X,
  Radio,
  BookOpen,
  Compass,
  Users,
  Play,
  ArrowRight,
  Sparkles,
  Clock,
  History,
  Trash2,
  Filter,
} from "lucide-react";

type FilterType = "all" | "podcast" | "comic" | "safari" | "character";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");

  const recentSearches = useUserStore((s) => s.recentSearches);
  const addRecentSearch = useUserStore((s) => s.addRecentSearch);
  const clearRecentSearches = useUserStore((s) => s.clearRecentSearches);
  const playEpisode = usePlayerStore((s) => s.playEpisode);

  const allItems = useMemo(() => getAllSearchableContent(), []);

  const filteredItems = useMemo(() => {
    let results = allItems;

    if (activeFilter !== "all") {
      results = results.filter((item) => item.type === activeFilter);
    }

    const trimmed = query.trim().toLowerCase();
    if (!trimmed) {
      return results;
    }

    return results.filter((item) => {
      const matchTitle = item.title.toLowerCase().includes(trimmed);
      const matchSubtitle = item.subtitle?.toLowerCase().includes(trimmed) || false;
      const matchDescription = item.description.toLowerCase().includes(trimmed);
      const matchMeta = item.meta.toLowerCase().includes(trimmed);
      const matchBadge = item.badge.toLowerCase().includes(trimmed);
      return matchTitle || matchSubtitle || matchDescription || matchMeta || matchBadge;
    });
  }, [allItems, query, activeFilter]);

  const handleSelectQuery = (term: string) => {
    setQuery(term);
    addRecentSearch(term);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && query.trim()) {
      addRecentSearch(query.trim());
    }
  };

  const counts = useMemo(() => {
    return {
      all: allItems.length,
      podcast: allItems.filter((i) => i.type === "podcast").length,
      comic: allItems.filter((i) => i.type === "comic").length,
      safari: allItems.filter((i) => i.type === "safari").length,
      character: allItems.filter((i) => i.type === "character").length,
    };
  }, [allItems]);

  return (
    <div className="w-full bg-background min-h-screen py-10 space-y-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* =========================================================================
            SEARCH HEADER & HERO
            ========================================================================= */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container border border-primary/30 text-primary font-label text-xs uppercase tracking-widest font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Universal Omni-Search Index</span>
          </div>
          <h1 className="font-display font-medium text-3xl sm:text-4xl lg:text-5xl text-editorial-light tracking-tight">
            Explore the Canon
          </h1>
          <p className="font-body text-sm sm:text-base text-editorial-secondary leading-relaxed">
            Search across 28 podcast transmissions, 6 graphic novel issues, 13 transformation chapters, and the 10 executive animal archetypes.
          </p>
        </div>

        {/* =========================================================================
            SEARCH INPUT BAR
            ========================================================================= */}
        <div className="max-w-3xl mx-auto relative">
          <div className="relative flex items-center">
            <Search className="absolute left-4 w-5 h-5 text-primary pointer-events-none" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Search by topic, archetype, vector hygiene, episode number..."
              className="w-full pl-12 pr-12 py-4 rounded-2xl bg-surface-container/90 border border-primary/40 focus:border-primary focus:ring-2 focus:ring-primary/20 text-editorial-light font-body text-sm sm:text-base placeholder:text-editorial-muted shadow-[0_4px_24px_rgba(0,0,0,0.5)] transition-all outline-none"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                className="absolute right-4 p-1 rounded-lg bg-surface-container hover:bg-surface text-editorial-muted hover:text-editorial-light transition-colors"
                aria-label="Clear query"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Recent Searches Pills */}
          {recentSearches && recentSearches.length > 0 && (
            <div className="flex flex-wrap items-center gap-2 mt-3 pt-1 text-xs">
              <span className="text-editorial-muted font-label uppercase tracking-wider flex items-center gap-1">
                <History className="w-3 h-3 text-secondary" />
                Recent:
              </span>
              {recentSearches.slice(0, 6).map((term, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelectQuery(term)}
                  className="px-2.5 py-1 rounded-lg bg-surface-container/60 hover:bg-surface-container border border-jungle-border hover:border-primary/40 text-editorial-secondary hover:text-primary transition-all font-body text-xs"
                >
                  {term}
                </button>
              ))}
              <button
                onClick={clearRecentSearches}
                className="p-1 text-editorial-muted hover:text-red-400 transition-colors ml-auto"
                title="Clear recent searches"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>

        {/* =========================================================================
            CATEGORY FILTER TABS
            ========================================================================= */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap pt-2">
          <button
            onClick={() => setActiveFilter("all")}
            className={`px-4 py-2 rounded-xl font-label text-xs uppercase tracking-wider font-semibold transition-all flex items-center gap-2 ${
              activeFilter === "all"
                ? "bg-primary text-background shadow-gold"
                : "bg-surface-container/80 text-editorial-secondary border border-jungle-border/80 hover:border-primary/40"
            }`}
          >
            <span>All Content</span>
            <span className="px-1.5 py-0.5 rounded-md text-[10px] bg-black/20">
              {counts.all}
            </span>
          </button>

          <button
            onClick={() => setActiveFilter("podcast")}
            className={`px-4 py-2 rounded-xl font-label text-xs uppercase tracking-wider font-semibold transition-all flex items-center gap-2 ${
              activeFilter === "podcast"
                ? "bg-secondary text-background shadow-[0_0_15px_rgba(56,199,181,0.4)]"
                : "bg-surface-container/80 text-editorial-secondary border border-jungle-border/80 hover:border-secondary/40"
            }`}
          >
            <Radio className="w-3.5 h-3.5" />
            <span>Podcasts</span>
            <span className="px-1.5 py-0.5 rounded-md text-[10px] bg-black/20">
              {counts.podcast}
            </span>
          </button>

          <button
            onClick={() => setActiveFilter("comic")}
            className={`px-4 py-2 rounded-xl font-label text-xs uppercase tracking-wider font-semibold transition-all flex items-center gap-2 ${
              activeFilter === "comic"
                ? "bg-primary text-background shadow-gold"
                : "bg-surface-container/80 text-editorial-secondary border border-jungle-border/80 hover:border-primary/40"
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Comics</span>
            <span className="px-1.5 py-0.5 rounded-md text-[10px] bg-black/20">
              {counts.comic}
            </span>
          </button>

          <button
            onClick={() => setActiveFilter("safari")}
            className={`px-4 py-2 rounded-xl font-label text-xs uppercase tracking-wider font-semibold transition-all flex items-center gap-2 ${
              activeFilter === "safari"
                ? "bg-primary text-background shadow-gold"
                : "bg-surface-container/80 text-editorial-secondary border border-jungle-border/80 hover:border-primary/40"
            }`}
          >
            <Compass className="w-3.5 h-3.5" />
            <span>The Safari</span>
            <span className="px-1.5 py-0.5 rounded-md text-[10px] bg-black/20">
              {counts.safari}
            </span>
          </button>

          <button
            onClick={() => setActiveFilter("character")}
            className={`px-4 py-2 rounded-xl font-label text-xs uppercase tracking-wider font-semibold transition-all flex items-center gap-2 ${
              activeFilter === "character"
                ? "bg-primary text-background shadow-gold"
                : "bg-surface-container/80 text-editorial-secondary border border-jungle-border/80 hover:border-primary/40"
            }`}
          >
            <Users className="w-3.5 h-3.5" />
            <span>The Council</span>
            <span className="px-1.5 py-0.5 rounded-md text-[10px] bg-black/20">
              {counts.character}
            </span>
          </button>
        </div>

        {/* =========================================================================
            RESULTS SUMMARY & GRID
            ========================================================================= */}
        <div className="space-y-6 pt-4">
          <div className="flex items-center justify-between border-b border-jungle-border/40 pb-3 text-xs font-label uppercase tracking-wider text-editorial-muted">
            <span>
              Showing {filteredItems.length} result
              {filteredItems.length === 1 ? "" : "s"}
              {query.trim() ? ` for "${query}"` : ""}
            </span>
            <span>Index Synced: Canonical V4.9.2</span>
          </div>

          {filteredItems.length === 0 ? (
            <div className="text-center py-20 rounded-2xl glass-panel border border-jungle-border/60 space-y-4 max-w-lg mx-auto">
              <Search className="w-10 h-10 text-editorial-muted mx-auto stroke-1" />
              <div className="space-y-1">
                <h3 className="font-display font-medium text-xl text-editorial-light">
                  No Transmissions Found
                </h3>
                <p className="font-body text-xs text-editorial-muted">
                  No records match &quot;{query}&quot;. Try exploring key terms like &quot;Sovereign Lion&quot;, &quot;Vector Sanitization&quot;, or &quot;Chapter 01&quot;.
                </p>
              </div>
              <button
                onClick={() => setQuery("")}
                className="px-4 py-2 rounded-lg bg-surface-container border border-primary/30 text-primary text-xs font-label uppercase tracking-wider hover:bg-primary/10 transition-colors"
              >
                Clear Search Filter
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item) => (
                <div
                  key={`${item.type}-${item.id}`}
                  className="rounded-2xl glass-panel border border-jungle-border/70 hover:border-primary/50 transition-all duration-300 overflow-hidden flex flex-col justify-between group shadow-card"
                >
                  {/* Card Media Preview */}
                  <div className="relative w-full aspect-[16/9] overflow-hidden bg-surface-container">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                      <span
                        className={`px-2.5 py-0.5 rounded-md font-label text-[10px] uppercase tracking-wider font-semibold ${
                          item.type === "podcast"
                            ? "bg-secondary/20 text-secondary border border-secondary/40 backdrop-blur-md"
                            : item.type === "comic"
                            ? "bg-primary/20 text-primary border border-primary/40 backdrop-blur-md"
                            : item.type === "safari"
                            ? "bg-[#E8B63F]/20 text-[#E8B63F] border border-[#E8B63F]/40 backdrop-blur-md"
                            : "bg-[#8F8171]/20 text-[#EAE2D1] border border-white/20 backdrop-blur-md"
                        }`}
                      >
                        {item.type.toUpperCase()}
                      </span>

                      <span className="px-2 py-0.5 rounded bg-black/60 backdrop-blur-md font-mono text-[10px] text-editorial-light border border-white/10">
                        {item.badge}
                      </span>
                    </div>

                    {/* Play shortcut for podcasts */}
                    {item.type === "podcast" && (
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          const ep = PODCAST_EPISODES.find((p) => p.id === item.id);
                          if (ep) playEpisode(ep);
                        }}
                        className="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-secondary text-background flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all"
                        aria-label={`Play episode ${item.title}`}
                      >
                        <Play className="w-4 h-4 fill-background" />
                      </button>
                    )}
                  </div>

                  {/* Card Content */}
                  <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                    <div className="space-y-1.5">
                      <span className="text-[10px] font-label uppercase tracking-widest text-primary block truncate">
                        {item.meta}
                      </span>
                      <h3 className="font-display font-medium text-lg text-editorial-light group-hover:text-primary transition-colors line-clamp-1">
                        {item.title}
                      </h3>
                      {item.subtitle && (
                        <p className="font-serif italic text-xs text-editorial-muted line-clamp-1">
                          {item.subtitle}
                        </p>
                      )}
                      <p className="font-body text-xs text-editorial-secondary line-clamp-2 leading-relaxed pt-1">
                        {item.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-jungle-border/50 flex items-center justify-between">
                      <Link
                        href={item.url}
                        className="font-label text-xs uppercase tracking-wider text-primary hover:text-primary-fixed flex items-center gap-1.5 font-semibold group/link"
                      >
                        <span>
                          {item.type === "comic"
                            ? "Explore Issue"
                            : item.type === "safari"
                            ? "View Chapter"
                            : item.type === "character"
                            ? "View Archetype"
                            : "Listen Transmission"}
                        </span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                      </Link>

                      {item.type === "comic" && (
                        <Link
                          href={`/reader/${item.slug}`}
                          className="px-2.5 py-1 rounded bg-primary/10 border border-primary/30 text-primary hover:bg-primary hover:text-background font-label text-[10px] uppercase tracking-wider font-bold transition-all"
                        >
                          Read
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

