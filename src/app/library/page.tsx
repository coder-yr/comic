"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useUserStore } from "@/store/useUserStore";
import { usePlayerStore } from "@/store/usePlayerStore";
import { COMIC_ISSUES } from "@/data/comics";
import { PODCAST_EPISODES } from "@/data/podcast";
import {
  Bookmark,
  BookOpen,
  Radio,
  Play,
  Clock,
  Sparkles,
  ArrowRight,
  Trash2,
  Compass,
  CheckCircle2,
  Layers,
  ChevronRight,
} from "lucide-react";

export default function LibraryPage() {
  const readingProgress = useUserStore((s) => s.readingProgress);
  const listeningProgress = useUserStore((s) => s.listeningProgress);
  const bookmarkedComics = useUserStore((s) => s.bookmarkedComics);
  const bookmarkedEpisodes = useUserStore((s) => s.bookmarkedEpisodes);
  const toggleBookmarkComic = useUserStore((s) => s.toggleBookmarkComic);
  const toggleBookmarkEpisode = useUserStore((s) => s.toggleBookmarkEpisode);

  const playEpisode = usePlayerStore((s) => s.playEpisode);

  const readingItems = Object.values(readingProgress);
  const listeningItems = Object.values(listeningProgress);

  const savedComics = COMIC_ISSUES.filter((c) => bookmarkedComics.includes(c.slug));
  const savedEpisodes = PODCAST_EPISODES.filter((ep) =>
    bookmarkedEpisodes.includes(ep.slug)
  );

  return (
    <div className="w-full bg-background min-h-screen py-10 space-y-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* =========================================================================
            LIBRARY HEADER & TELEMETRY
            ========================================================================= */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-jungle-border/40 pb-6">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-2 text-primary font-label text-xs uppercase tracking-widest font-semibold">
              <Bookmark className="w-3.5 h-3.5" />
              <span>Personal Executive Repository</span>
            </div>
            <h1 className="font-display font-medium text-3xl sm:text-4xl text-editorial-light tracking-tight">
              My Reading &amp; Listening Library
            </h1>
            <p className="font-body text-xs sm:text-sm text-editorial-secondary">
              Resume active graphic issues, continue broadcast playback, and review your bookmarked canonical archives.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/comics"
              className="px-4 py-2 rounded-xl bg-surface-container border border-jungle-border hover:border-primary/40 text-editorial-secondary hover:text-primary transition-all text-xs font-label uppercase tracking-wider flex items-center gap-1.5"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Browse Comics</span>
            </Link>
            <Link
              href="/podcast"
              className="px-4 py-2 rounded-xl bg-surface-container border border-jungle-border hover:border-secondary/40 text-editorial-secondary hover:text-secondary transition-all text-xs font-label uppercase tracking-wider flex items-center gap-1.5"
            >
              <Radio className="w-3.5 h-3.5" />
              <span>Browse Podcasts</span>
            </Link>
          </div>
        </div>

        {/* =========================================================================
            SECTION 1: CONTINUE READING (IN-PROGRESS COMICS)
            ========================================================================= */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-primary" />
              <h2 className="font-display font-medium text-xl text-editorial-light">
                Continue Reading
              </h2>
            </div>
            <span className="text-xs font-mono text-editorial-muted">
              {readingItems.length} In Progress
            </span>
          </div>

          {readingItems.length === 0 ? (
            <div className="p-8 rounded-2xl glass-panel border border-jungle-border text-center space-y-3">
              <p className="text-editorial-muted text-xs font-body">
                You have not started reading any graphic novels yet.
              </p>
              <Link
                href="/comics"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-background font-label text-xs uppercase tracking-wider font-bold"
              >
                <span>Open Issue 00</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {readingItems.map((prog) => {
                const issue = COMIC_ISSUES.find((c) => c.slug === prog.slug) || COMIC_ISSUES[0];
                return (
                  <div
                    key={prog.slug}
                    className="p-6 rounded-2xl glass-panel border border-primary/30 flex flex-col sm:flex-row gap-5 items-center justify-between"
                  >
                    <div className="relative w-28 h-36 rounded-xl overflow-hidden shrink-0 border border-primary/20 shadow-md">
                      <Image
                        src={issue.coverImage}
                        alt={prog.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="flex-1 space-y-3 min-w-0 w-full sm:w-auto">
                      <div>
                        <span className="text-[10px] font-label uppercase tracking-widest text-primary font-semibold block">
                          {issue.issueNumber} • {issue.volume}
                        </span>
                        <h3 className="font-display font-medium text-lg text-editorial-light truncate">
                          {prog.title}
                        </h3>
                        <p className="text-xs font-mono text-editorial-muted">
                          Page {prog.pageIndex + 1} of {prog.totalPages} ({prog.percentage}%)
                        </p>
                      </div>

                      {/* Progress Bar */}
                      <div className="w-full bg-surface-container rounded-full h-1.5 overflow-hidden">
                        <div
                          className="bg-primary h-full rounded-full transition-all duration-300"
                          style={{ width: `${prog.percentage}%` }}
                        />
                      </div>

                      <div className="pt-2">
                        <Link
                          href={`/reader/${prog.slug}`}
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-background font-label text-xs uppercase tracking-wider font-bold shadow-gold hover:shadow-gold-lg transition-all hover:scale-105 active:scale-95"
                        >
                          <BookOpen className="w-3.5 h-3.5" />
                          <span>Resume Reading</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* =========================================================================
            SECTION 2: CONTINUE LISTENING (IN-PROGRESS PODCASTS)
            ========================================================================= */}
        <div className="space-y-6 pt-4 border-t border-jungle-border/40">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Radio className="w-4 h-4 text-secondary" />
              <h2 className="font-display font-medium text-xl text-editorial-light">
                Continue Listening
              </h2>
            </div>
            <span className="text-xs font-mono text-editorial-muted">
              {listeningItems.length} In Progress
            </span>
          </div>

          {listeningItems.length === 0 ? (
            <div className="p-8 rounded-2xl glass-panel border border-jungle-border text-center space-y-3">
              <p className="text-editorial-muted text-xs font-body">
                No active podcast playback sessions in progress.
              </p>
              <Link
                href="/podcast"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary text-background font-label text-xs uppercase tracking-wider font-semibold"
              >
                <span>Explore Episodes</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {listeningItems.map((prog) => {
                const ep =
                  PODCAST_EPISODES.find((e) => e.slug === prog.slug) || PODCAST_EPISODES[0];
                return (
                  <div
                    key={prog.slug}
                    className="p-6 rounded-2xl glass-panel border border-secondary/30 flex flex-col sm:flex-row gap-5 items-center justify-between"
                  >
                    <div className="relative w-28 h-28 rounded-xl overflow-hidden shrink-0 border border-secondary/20 shadow-md">
                      <Image
                        src={ep.videoPoster}
                        alt={prog.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="flex-1 space-y-3 min-w-0 w-full sm:w-auto">
                      <div>
                        <span className="text-[10px] font-label uppercase tracking-widest text-secondary font-semibold block">
                          {ep.episodeNumber} • {ep.season}
                        </span>
                        <h3 className="font-display font-medium text-lg text-editorial-light truncate">
                          {prog.title}
                        </h3>
                        <p className="text-xs font-mono text-editorial-muted">
                          {Math.floor(prog.currentTime / 60)} min / {Math.floor(prog.duration / 60)} min ({prog.percentage}%)
                        </p>
                      </div>

                      {/* Progress Bar */}
                      <div className="w-full bg-surface-container rounded-full h-1.5 overflow-hidden">
                        <div
                          className="bg-secondary h-full rounded-full transition-all duration-300"
                          style={{ width: `${prog.percentage}%` }}
                        />
                      </div>

                      <div className="pt-2">
                        <button
                          onClick={() => playEpisode(ep)}
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-secondary/15 border border-secondary/40 text-secondary hover:bg-secondary/25 transition-all font-label text-xs uppercase tracking-wider font-semibold shadow-[0_0_15px_rgba(56,199,181,0.2)] hover:scale-105 active:scale-95"
                        >
                          <Play className="w-3.5 h-3.5 fill-secondary" />
                          <span>Resume Broadcast</span>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* =========================================================================
            SECTION 3: BOOKMARKED COMICS
            ========================================================================= */}
        <div className="space-y-6 pt-4 border-t border-jungle-border/40">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Bookmark className="w-4 h-4 text-primary" />
              <h2 className="font-display font-medium text-xl text-editorial-light">
                Bookmarked Graphic Novels
              </h2>
            </div>
            <span className="text-xs font-mono text-editorial-muted">
              {savedComics.length} Saved
            </span>
          </div>

          {savedComics.length === 0 ? (
            <div className="p-8 rounded-2xl glass-panel border border-jungle-border text-center space-y-3">
              <p className="text-editorial-muted text-xs font-body">
                No graphic novel issues currently bookmarked.
              </p>
              <Link
                href="/comics"
                className="text-xs font-label uppercase tracking-wider text-primary hover:underline"
              >
                Browse Comics Catalog
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {savedComics.map((comic) => (
                <div
                  key={comic.id}
                  className="rounded-2xl glass-panel border border-jungle-border/70 hover:border-primary/50 transition-all p-5 flex flex-col justify-between space-y-4 group"
                >
                  <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-surface-container">
                    <Image
                      src={comic.coverImage}
                      alt={comic.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2.5 right-2.5">
                      <button
                        onClick={() => toggleBookmarkComic(comic.slug)}
                        className="p-1.5 rounded-lg bg-black/60 hover:bg-black/90 text-primary border border-primary/30 transition-colors"
                        title="Remove bookmark"
                      >
                        <Bookmark className="w-3.5 h-3.5 fill-primary" />
                      </button>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <span className="text-[10px] font-label uppercase tracking-widest text-primary block">
                      {comic.issueNumber} • {comic.volume}
                    </span>
                    <h3 className="font-display font-medium text-lg text-editorial-light line-clamp-1">
                      {comic.title}
                    </h3>
                    <p className="font-body text-xs text-editorial-secondary line-clamp-2">
                      {comic.synopsis}
                    </p>
                  </div>

                  <div className="pt-2 flex items-center justify-between border-t border-jungle-border/50">
                    <Link
                      href={`/reader/${comic.slug}`}
                      className="px-3 py-1.5 rounded-lg bg-primary text-background font-label text-xs uppercase tracking-wider font-bold shadow-gold hover:shadow-gold-lg transition-all"
                    >
                      Read Now
                    </Link>
                    <Link
                      href={`/comics/${comic.slug}`}
                      className="text-xs font-label uppercase tracking-wider text-editorial-muted hover:text-editorial-light"
                    >
                      Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* =========================================================================
            SECTION 4: SAVED PODCAST TRANSMISSIONS
            ========================================================================= */}
        <div className="space-y-6 pt-4 border-t border-jungle-border/40">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Radio className="w-4 h-4 text-secondary" />
              <h2 className="font-display font-medium text-xl text-editorial-light">
                Saved Podcast Transmissions
              </h2>
            </div>
            <span className="text-xs font-mono text-editorial-muted">
              {savedEpisodes.length} Saved
            </span>
          </div>

          {savedEpisodes.length === 0 ? (
            <div className="p-8 rounded-2xl glass-panel border border-jungle-border text-center space-y-3">
              <p className="text-editorial-muted text-xs font-body">
                No podcast episodes currently bookmarked.
              </p>
              <Link
                href="/podcast"
                className="text-xs font-label uppercase tracking-wider text-secondary hover:underline"
              >
                Browse Podcast Episodes
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {savedEpisodes.map((ep) => (
                <div
                  key={ep.id}
                  className="p-4 rounded-xl glass-panel border border-jungle-border hover:border-secondary/50 transition-all flex items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <button
                      onClick={() => playEpisode(ep)}
                      className="w-10 h-10 rounded-xl bg-secondary/15 border border-secondary/40 text-secondary hover:bg-secondary/25 transition-all flex items-center justify-center shrink-0"
                      aria-label={`Play ${ep.title}`}
                    >
                      <Play className="w-4 h-4 fill-secondary" />
                    </button>
                    <div className="min-w-0">
                      <span className="text-[10px] font-label uppercase tracking-widest text-secondary block truncate">
                        {ep.episodeNumber} • {ep.season}
                      </span>
                      <Link
                        href={`/podcast/${ep.slug}`}
                        className="font-display font-medium text-sm text-editorial-light hover:text-secondary transition-colors truncate block"
                      >
                        {ep.title}
                      </Link>
                      <span className="text-[10px] font-mono text-editorial-muted block">
                        Duration: {ep.duration}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => toggleBookmarkEpisode(ep.slug)}
                    className="p-1.5 rounded-lg text-editorial-muted hover:text-red-400 transition-colors shrink-0"
                    title="Remove from saved"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
