"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { COMIC_ISSUES, ComicIssue } from "@/data/comics";
import { PODCAST_EPISODES } from "@/data/podcast";
import {
  BookOpen,
  ArrowRight,
  Clock,
  Sparkles,
  ChevronRight,
  ChevronLeft,
  Radio,
  Layers,
  CheckCircle2,
  Bookmark,
  Share2,
} from "lucide-react";

interface PageProps {
  params: {
    slug: string;
  };
}

export default function ComicDetailPage({ params }: PageProps) {
  const issue = COMIC_ISSUES.find((c) => c.slug === params.slug) || COMIC_ISSUES[0];
  const [activePreviewIndex, setActivePreviewIndex] = useState(0);

  const companionPodcast = PODCAST_EPISODES.find(
    (p) => p.slug === issue.companionPodcastSlug
  );

  const prevIssue = COMIC_ISSUES.find((c) => c.slug === issue.previousIssueSlug);
  const nextIssue = COMIC_ISSUES.find((c) => c.slug === issue.nextIssueSlug);

  return (
    <div className="w-full bg-background min-h-screen py-10 space-y-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs font-label uppercase tracking-widest text-editorial-muted">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/comics" className="hover:text-primary transition-colors">
            Comics
          </Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-secondary font-semibold">{issue.issueNumber}</span>
        </nav>

        {/* =========================================================================
            HERO OVERVIEW & ISSUE COVER
            ========================================================================= */}
        <div className="glass-panel rounded-2xl p-6 sm:p-10 shadow-card border border-primary/30 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Large Comic Cover */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm aspect-[3/4] rounded-xl overflow-hidden shadow-2xl group border border-primary/40">
              <Image
                src={issue.coverImage}
                alt={issue.title}
                fill
                priority
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 px-3 py-1 rounded bg-black/80 backdrop-blur-md border border-primary/40 font-label text-xs uppercase text-primary font-bold">
                {issue.issueNumber}
              </div>
              <div className="absolute top-4 right-4 px-3 py-1 rounded bg-black/80 backdrop-blur-md font-label text-xs uppercase text-secondary">
                {issue.readingTime}
              </div>
            </div>
          </div>

          {/* Issue Details & Start Reading CTA */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-5">
            <div className="space-y-2">
              <span className="font-label text-xs text-secondary uppercase tracking-widest font-semibold">
                {issue.canonicalChapter} • {issue.volume}
              </span>
              <h1 className="font-display text-3xl sm:text-5xl text-editorial-light leading-tight">
                {issue.title}
              </h1>
              <p className="font-label text-sm text-primary italic">
                {issue.subtitle}
              </p>
              <p className="font-body text-sm sm:text-base text-editorial-secondary leading-relaxed pt-2">
                {issue.synopsis}
              </p>
            </div>

            {/* Featured Characters Badges */}
            <div className="space-y-2 pt-2">
              <span className="font-label text-xs uppercase tracking-widest text-editorial-muted block">
                Featured Sovereign Archetypes:
              </span>
              <div className="flex flex-wrap gap-2">
                {issue.featuredCharacters.map((char) => (
                  <span
                    key={char}
                    className="px-3 py-1 rounded-full bg-surface-container-high border border-primary/30 text-primary font-label text-xs uppercase tracking-wider font-semibold"
                  >
                    {char}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick Metadata Stats */}
            <div className="grid grid-cols-3 gap-4 py-3 border-y border-jungle-border/50 text-xs font-label">
              <div>
                <p className="text-editorial-muted uppercase">Length</p>
                <p className="text-editorial-light font-bold text-sm">{issue.pageCount} Pages</p>
              </div>
              <div>
                <p className="text-editorial-muted uppercase">Duration</p>
                <p className="text-editorial-light font-bold text-sm">{issue.readingTime}</p>
              </div>
              <div>
                <p className="text-editorial-muted uppercase">Format</p>
                <p className="text-secondary font-bold text-sm">Full-Bleed Spreads</p>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href={`/reader/${issue.slug}`}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-primary-container via-primary to-primary-highlight text-background font-label text-xs uppercase tracking-wider font-bold shadow-gold-lg hover:brightness-110 transition-all"
              >
                <BookOpen className="w-4 h-4" />
                <span>Launch Full-Screen Comic Reader</span>
              </Link>
            </div>
          </div>
        </div>

        {/* =========================================================================
            PREVIEW SPREADS CAROUSEL
            ========================================================================= */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-2xl sm:text-3xl text-editorial-light">
              Illustrated Interior Spreads Preview
            </h2>
            <span className="font-label text-xs uppercase tracking-widest text-editorial-muted">
              Page {activePreviewIndex + 1} of {issue.spreads.length}
            </span>
          </div>

          <div className="glass-panel rounded-2xl overflow-hidden p-4 sm:p-6 shadow-card border border-jungle-border">
            <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-black group">
              <Image
                src={issue.spreads[activePreviewIndex]?.image || issue.coverImage}
                alt={issue.spreads[activePreviewIndex]?.spreadTitle || issue.title}
                fill
                className="object-contain"
              />
              
              {/* Previous / Next Preview Controls */}
              {issue.spreads.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() =>
                      setActivePreviewIndex((prev) =>
                        prev > 0 ? prev - 1 : issue.spreads.length - 1
                      )
                    }
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/70 hover:bg-black/90 text-editorial-light transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setActivePreviewIndex((prev) =>
                        prev < issue.spreads.length - 1 ? prev + 1 : 0
                      )
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/70 hover:bg-black/90 text-editorial-light transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>

            <div className="mt-4 p-4 rounded-xl bg-surface-container flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h4 className="font-display text-lg text-editorial-light">
                  {issue.spreads[activePreviewIndex]?.spreadTitle}
                </h4>
                {issue.spreads[activePreviewIndex]?.caption && (
                  <p className="font-label text-xs text-primary italic">
                    {issue.spreads[activePreviewIndex]?.caption}
                  </p>
                )}
              </div>
              <Link
                href={`/reader/${issue.slug}`}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary text-background font-label text-xs uppercase tracking-wider font-bold shadow-gold"
              >
                <span>Read in High Resolution</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* =========================================================================
            EXECUTIVE TRANSFORMATION TAKEAWAYS
            ========================================================================= */}
        <div className="space-y-6">
          <h2 className="font-display text-2xl sm:text-3xl text-editorial-light">
            Strategic Lessons from {issue.canonicalChapter}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {issue.transformationLessons.map((lesson) => (
              <div
                key={lesson.number}
                className="glass-panel rounded-xl p-6 flex flex-col justify-between space-y-4 shadow-card hover:border-primary/50 transition-all"
              >
                <div className="space-y-2">
                  <span className="font-label text-xs font-bold text-primary">
                    LESSON {lesson.number}
                  </span>
                  <h3 className="font-display text-lg text-editorial-light">
                    {lesson.title}
                  </h3>
                  <p className="font-body text-xs sm:text-sm text-editorial-secondary leading-relaxed">
                    {lesson.takeaway}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* =========================================================================
            COMPANION PODCAST EPISODE BRIDGE
            ========================================================================= */}
        {companionPodcast && (
          <div className="glass-panel-teal rounded-2xl p-6 sm:p-8 border border-secondary/40 shadow-teal grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 relative aspect-video rounded-xl overflow-hidden shadow-2xl">
              <Image
                src={companionPodcast.videoPoster}
                alt={companionPodcast.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="lg:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/15 text-secondary font-label text-xs uppercase tracking-widest font-semibold">
                <Radio className="w-3.5 h-3.5" />
                Companion Podcast Broadcast
              </div>
              <h3 className="font-display text-2xl text-editorial-light">
                {companionPodcast.title}
              </h3>
              <p className="font-body text-xs sm:text-sm text-editorial-secondary line-clamp-2">
                {companionPodcast.description}
              </p>
              <div className="pt-2">
                <Link
                  href={`/podcast/${companionPodcast.slug}`}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-secondary text-background font-label text-xs uppercase tracking-wider font-bold shadow-teal hover:bg-secondary-fixed transition-all"
                >
                  <Radio className="w-3.5 h-3.5" />
                  <span>Listen to Companion Podcast ({companionPodcast.duration})</span>
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* =========================================================================
            PREVIOUS / NEXT ISSUE NAVIGATION
            ========================================================================= */}
        <div className="pt-6 border-t border-jungle-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          {prevIssue ? (
            <Link
              href={`/comics/${prevIssue.slug}`}
              className="inline-flex items-center gap-2 font-label text-xs uppercase tracking-wider text-editorial-secondary hover:text-primary transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous: {prevIssue.title}</span>
            </Link>
          ) : (
            <span />
          )}

          {nextIssue && (
            <Link
              href={`/comics/${nextIssue.slug}`}
              className="inline-flex items-center gap-2 font-label text-xs uppercase tracking-wider text-editorial-secondary hover:text-primary transition-colors"
            >
              <span>Next: {nextIssue.title}</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

