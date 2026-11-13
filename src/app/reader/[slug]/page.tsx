"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { COMIC_ISSUES, ComicIssue } from "@/data/comics";
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Maximize,
  Minimize,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  BookOpen,
  Scroll,
  Radio,
  ArrowRight,
  Bookmark,
  Share2,
  CheckCircle2,
  Compass,
  Sparkles,
} from "lucide-react";

interface PageProps {
  params: {
    slug: string;
  };
}

export default function CinematicGraphicNovelReader({ params }: PageProps) {
  const currentIssueIndex = COMIC_ISSUES.findIndex((c) => c.slug === params.slug);
  const issue = currentIssueIndex !== -1 ? COMIC_ISSUES[currentIssueIndex] : COMIC_ISSUES[0];
  const prevIssue = currentIssueIndex > 0 ? COMIC_ISSUES[currentIssueIndex - 1] : null;
  const nextIssue =
    currentIssueIndex < COMIC_ISSUES.length - 1 ? COMIC_ISSUES[currentIssueIndex + 1] : null;

  // Reading Mode State: "single" (Page-by-page) or "vertical" (Continuous scroll)
  const [readingMode, setReadingMode] = useState<"single" | "vertical">("single");
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isChapterMenuOpen, setIsChapterMenuOpen] = useState(false);
  const [showControls, setShowControls] = useState(true);

  const totalPages = issue.spreads.length;
  const containerRef = useRef<HTMLDivElement>(null);
  const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Restore and persist local reading progress
  useEffect(() => {
    try {
      const saved = localStorage.getItem(`ai_jungle_progress_${issue.slug}`);
      if (saved) {
        const parsed = parseInt(saved, 10);
        if (!isNaN(parsed) && parsed >= 0 && parsed < totalPages) {
          setCurrentPageIndex(parsed);
        }
      }
    } catch {}
  }, [issue.slug, totalPages]);

  const handlePageChange = (idx: number) => {
    setCurrentPageIndex(idx);
    try {
      localStorage.setItem(`ai_jungle_progress_${issue.slug}`, idx.toString());
    } catch {}
  };

  const nextPage = () => {
    if (currentPageIndex < totalPages - 1) {
      handlePageChange(currentPageIndex + 1);
    }
  };

  const prevPage = () => {
    if (currentPageIndex > 0) {
      handlePageChange(currentPageIndex - 1);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "PageDown" || e.key === " ") {
        e.preventDefault();
        nextPage();
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        prevPage();
      } else if (e.key === "f" || e.key === "F") {
        e.preventDefault();
        toggleFullscreen();
      } else if (e.key === "+" || e.key === "=") {
        e.preventDefault();
        zoomIn();
      } else if (e.key === "-" || e.key === "_") {
        e.preventDefault();
        zoomOut();
      } else if (e.key === "Escape") {
        setIsChapterMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  // Floating controls auto-fade on inactivity
  const handleMouseMove = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current);
    controlsTimeoutRef.current = setTimeout(() => {
      setShowControls(false);
    }, 4000);
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
        setIsFullscreen(false);
      }
    }
  };

  const zoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.15, 2.0));
  const zoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.15, 0.8));
  const resetZoom = () => setZoomLevel(1);

  const currentPage = issue.spreads[currentPageIndex] || issue.spreads[0];
  const progressPercent = Math.round(((currentPageIndex + 1) / totalPages) * 100);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="w-full min-h-screen bg-[#0B0D0A] text-[#E9E0CF] flex flex-col font-body selection:bg-[#D6AF60] selection:text-[#0B0D0A] relative"
    >
      {/* =========================================================================
          1. ELEGANT PUBLISHING-STYLE READER HEADER (Minimal & Compact)
          ========================================================================= */}
      <header className="sticky top-0 z-40 w-full bg-[#0B0D0A]/95 backdrop-blur-md border-b border-[#D6AF60]/20 px-4 sm:px-8 py-3.5 transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Left: Library Back & Issue Identity */}
          <div className="flex items-center gap-3 sm:gap-5 min-w-0">
            <Link
              href="/comics"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#A89F8A] hover:text-[#D6AF60] transition-colors py-1 shrink-0 font-medium"
              title="Return to Digital Graphic Novel Library"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Library</span>
            </Link>

            <span className="w-px h-4 bg-[#D6AF60]/25 hidden sm:block" />

            <div className="flex items-center gap-2 sm:gap-3 min-w-0">
              <span className="font-display italic text-lg sm:text-xl text-[#D6AF60] truncate whitespace-nowrap">
                {issue.title}
              </span>
              <span className="text-[11px] font-cinzel text-[#A89F8A] uppercase tracking-widest hidden md:inline shrink-0">
                · {issue.canonicalChapter}
              </span>
            </div>
          </div>

          {/* Right: Chapter Switcher, Mode Toggle & Fullscreen */}
          <div className="flex items-center gap-2 sm:gap-4 shrink-0">
            {/* Chapter Selector Dropdown Toggle */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsChapterMenuOpen(!isChapterMenuOpen)}
                className="px-3 py-1.5 rounded bg-[#11140F] border border-[#D6AF60]/30 hover:border-[#D6AF60] text-xs font-cinzel tracking-wider text-[#E9E0CF] transition-colors flex items-center gap-2"
                aria-label="Select Chapter"
              >
                <span>{issue.issueNumber}</span>
                <span className="text-[10px] text-[#D6AF60]">▼</span>
              </button>

              {/* Elegant Chapter Selector Modal / Menu */}
              <AnimatePresence>
                {isChapterMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 top-full mt-2 w-80 sm:w-96 rounded-xl bg-[#11140F] border border-[#D6AF60]/40 shadow-2xl p-4 space-y-3 z-50 backdrop-blur-xl"
                  >
                    <div className="flex items-center justify-between border-b border-[#D6AF60]/20 pb-2">
                      <span className="font-cinzel text-xs text-[#D6AF60] uppercase tracking-widest">
                        Chapters &amp; Volumes
                      </span>
                      <span className="text-[10px] text-[#A89F8A]">
                        {COMIC_ISSUES.length} Issues Available
                      </span>
                    </div>

                    <div className="space-y-1.5 max-h-72 overflow-y-auto pr-1">
                      {COMIC_ISSUES.map((item) => {
                        const isCurrent = item.slug === issue.slug;
                        return (
                          <Link
                            key={item.id}
                            href={`/reader/${item.slug}`}
                            onClick={() => setIsChapterMenuOpen(false)}
                            className={`p-2.5 rounded-lg flex items-center justify-between transition-all text-left ${
                              isCurrent
                                ? "bg-[#D6AF60]/15 border border-[#D6AF60] text-[#D6AF60]"
                                : "hover:bg-[#1A2018] text-[#E9E0CF]/90 hover:text-[#D6AF60]"
                            }`}
                          >
                            <div className="space-y-0.5">
                              <p className="text-[10px] font-cinzel text-[#A89F8A] uppercase">
                                {item.issueNumber} · {item.canonicalChapter}
                              </p>
                              <p className="font-display text-sm font-medium leading-snug line-clamp-1">
                                {item.title}
                              </p>
                            </div>
                            {isCurrent && (
                              <span className="text-[10px] px-2 py-0.5 rounded bg-[#D6AF60] text-[#0B0D0A] font-bold uppercase shrink-0">
                                Reading
                              </span>
                            )}
                          </Link>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Reading Mode Switcher (Single vs Vertical) */}
            <div className="flex items-center rounded-lg bg-[#11140F] border border-[#D6AF60]/20 p-0.5 text-xs">
              <button
                type="button"
                onClick={() => setReadingMode("single")}
                className={`flex items-center gap-1.5 px-3 py-1 rounded transition-colors ${
                  readingMode === "single"
                    ? "bg-[#D6AF60] text-[#0B0D0A] font-semibold shadow-sm"
                    : "text-[#A89F8A] hover:text-[#E9E0CF]"
                }`}
                title="Single Page Mode (Page Turn)"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Page</span>
              </button>
              <button
                type="button"
                onClick={() => setReadingMode("vertical")}
                className={`flex items-center gap-1.5 px-3 py-1 rounded transition-colors ${
                  readingMode === "vertical"
                    ? "bg-[#D6AF60] text-[#0B0D0A] font-semibold shadow-sm"
                    : "text-[#A89F8A] hover:text-[#E9E0CF]"
                }`}
                title="Continuous Vertical Scroll Mode"
              >
                <Scroll className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Scroll</span>
              </button>
            </div>

            {/* Fullscreen Toggle */}
            <button
              type="button"
              onClick={toggleFullscreen}
              className="p-1.5 rounded-lg bg-[#11140F] border border-[#D6AF60]/20 text-[#A89F8A] hover:text-[#D6AF60] transition-colors"
              title="Toggle Fullscreen (F)"
              aria-label="Toggle Fullscreen"
            >
              {isFullscreen ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Thin Gold Reading Progress Hairline */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#11140F]">
          <div
            className="h-full bg-gradient-to-r from-[#D6AF60] to-[#E9E0CF] transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </header>

      {/* =========================================================================
          2. EDITORIAL CHAPTER HERO INTRODUCTION (Clean Publishing Typography)
          ========================================================================= */}
      <section className="w-full pt-8 pb-4 px-4 sm:px-8 text-center max-w-4xl mx-auto space-y-2">
        <p className="font-cinzel text-xs uppercase tracking-[0.25em] text-[#D6AF60]">
          {issue.canonicalChapter} · {issue.issueNumber}
        </p>
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl text-[#E9E0CF] font-normal tracking-tight">
          {issue.title}
        </h1>
        <p className="font-display italic text-base sm:text-lg text-[#A89F8A] max-w-2xl mx-auto leading-relaxed">
          {currentPage.spreadTitle || issue.subtitle}
        </p>
        <div className="pt-2 flex items-center justify-center gap-4 text-xs font-cinzel text-[#A89F8A] tracking-wider">
          <span>{issue.volume}</span>
          <span>·</span>
          <span>
            Page {currentPageIndex + 1} of {totalPages} ({progressPercent}%)
          </span>
        </div>
      </section>

      {/* =========================================================================
          3. IMMERSIVE COMIC CANVAS (Art-First Centered Presentation)
          ========================================================================= */}
      <main className="flex-1 w-full flex flex-col items-center justify-center px-2 sm:px-6 lg:px-8 py-4 relative">
        {/* MODE A: SINGLE PAGE DISPLAY WITH IMMERSIVE LUXURY MATTE */}
        {readingMode === "single" && (
          <div className="w-full max-w-5xl flex flex-col items-center my-auto relative">
            {/* The Actual Comic Page with Fine Shadow & Frame */}
            <div
              className="relative w-full max-w-[960px] mx-auto rounded-lg overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.85)] bg-[#11140F] border border-[#D6AF60]/30 transition-transform duration-200"
              style={{
                transform: `scale(${zoomLevel})`,
                transformOrigin: "center top",
              }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentPage.pageNumber}
                  initial={{ opacity: 0, scale: 0.985 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.015 }}
                  transition={{ duration: 0.28, ease: "easeOut" }}
                  className="w-full flex items-center justify-center p-2 sm:p-4 bg-[#11140F]"
                >
                  <img
                    src={currentPage.image}
                    alt={currentPage.spreadTitle}
                    className="w-full h-auto max-h-[85vh] object-contain mx-auto rounded shadow-2xl"
                    loading="eager"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Subtle Editorial Caption Strip */}
              {currentPage.dialogueSnippet && (
                <div className="p-4 sm:p-5 bg-[#0D100C] border-t border-[#D6AF60]/20 text-center space-y-1">
                  <p className="font-display italic text-sm sm:text-base text-[#E9E0CF]/90 max-w-3xl mx-auto leading-relaxed">
                    &ldquo;{currentPage.dialogueSnippet}&rdquo;
                  </p>
                  {currentPage.keyTakeaway && (
                    <p className="font-cinzel text-[11px] text-[#D6AF60] tracking-wider uppercase pt-1">
                      Directive: {currentPage.keyTakeaway}
                    </p>
                  )}
                </div>
              )}
            </div>

            {/* Floating Side Page-Turn Arrows (Hover on Desktop) */}
            <button
              type="button"
              onClick={prevPage}
              disabled={currentPageIndex === 0}
              className={`fixed left-4 lg:left-8 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-[#11140F]/80 backdrop-blur-md border border-[#D6AF60]/30 text-[#E9E0CF] hover:text-[#D6AF60] hover:border-[#D6AF60] transition-all shadow-xl ${
                currentPageIndex === 0
                  ? "opacity-20 cursor-not-allowed pointer-events-none"
                  : "opacity-80 hover:opacity-100 hover:scale-110"
              }`}
              title="Previous Page (ArrowLeft)"
              aria-label="Previous Page"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              type="button"
              onClick={nextPage}
              disabled={currentPageIndex === totalPages - 1}
              className={`fixed right-4 lg:right-8 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-[#11140F]/80 backdrop-blur-md border border-[#D6AF60]/30 text-[#E9E0CF] hover:text-[#D6AF60] hover:border-[#D6AF60] transition-all shadow-xl ${
                currentPageIndex === totalPages - 1
                  ? "opacity-20 cursor-not-allowed pointer-events-none"
                  : "opacity-80 hover:opacity-100 hover:scale-110"
              }`}
              title="Next Page (ArrowRight)"
              aria-label="Next Page"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Bottom In-Page Navigation Bar */}
            <div className="w-full max-w-[960px] flex items-center justify-between mt-5 px-3 text-xs font-cinzel text-[#A89F8A]">
              <button
                type="button"
                onClick={prevPage}
                disabled={currentPageIndex === 0}
                className="hover:text-[#D6AF60] disabled:opacity-30 disabled:pointer-events-none transition-colors uppercase tracking-widest flex items-center gap-1.5"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous Page</span>
              </button>

              <span className="tracking-widest text-[#D6AF60]">
                Page {currentPageIndex + 1} of {totalPages}
              </span>

              <button
                type="button"
                onClick={nextPage}
                disabled={currentPageIndex === totalPages - 1}
                className="hover:text-[#D6AF60] disabled:opacity-30 disabled:pointer-events-none transition-colors uppercase tracking-widest flex items-center gap-1.5"
              >
                <span>Next Page</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* MODE B: VERTICAL CONTINUOUS SCROLL READING */}
        {readingMode === "vertical" && (
          <div className="w-full max-w-4xl space-y-12 my-6">
            {issue.spreads.map((spread, idx) => (
              <div key={spread.pageNumber} className="space-y-3">
                <div className="flex items-center justify-between text-xs font-cinzel text-[#A89F8A] px-2">
                  <span className="tracking-widest uppercase text-[#D6AF60]">
                    {spread.clipBadge || `Page ${idx + 1}`}
                  </span>
                  <span>{spread.spreadTitle}</span>
                </div>

                <div className="w-full rounded-lg overflow-hidden bg-[#11140F] border border-[#D6AF60]/30 shadow-2xl p-2 sm:p-4">
                  <img
                    src={spread.image}
                    alt={spread.spreadTitle}
                    className="w-full h-auto object-contain mx-auto rounded"
                    loading="lazy"
                  />
                  {spread.dialogueSnippet && (
                    <div className="p-4 bg-[#0D100C] rounded-b mt-3 border-t border-[#D6AF60]/20 text-center">
                      <p className="font-display italic text-sm text-[#E9E0CF]/90">
                        &ldquo;{spread.dialogueSnippet}&rdquo;
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* =========================================================================
            4. MINIMAL FLOATING READER TOOLBAR (Auto-Fading Dock)
            ========================================================================= */}
        <AnimatePresence>
          {showControls && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              transition={{ duration: 0.2 }}
              className="fixed bottom-6 left-1/2 -translate-x-1/2 z-30 px-4 py-2 rounded-full bg-[#11140F]/90 backdrop-blur-md border border-[#D6AF60]/40 shadow-2xl flex items-center gap-3 text-xs font-cinzel"
            >
              <button
                type="button"
                onClick={zoomOut}
                className="p-1.5 rounded-full hover:bg-[#D6AF60]/20 text-[#A89F8A] hover:text-[#D6AF60] transition-colors"
                title="Zoom Out (-)"
              >
                <ZoomOut className="w-4 h-4" />
              </button>

              <span className="text-[#E9E0CF] min-w-[3rem] text-center font-mono text-[11px]">
                {Math.round(zoomLevel * 100)}%
              </span>

              <button
                type="button"
                onClick={zoomIn}
                className="p-1.5 rounded-full hover:bg-[#D6AF60]/20 text-[#A89F8A] hover:text-[#D6AF60] transition-colors"
                title="Zoom In (+)"
              >
                <ZoomIn className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={resetZoom}
                className="p-1.5 rounded-full hover:bg-[#D6AF60]/20 text-[#A89F8A] hover:text-[#D6AF60] transition-colors"
                title="Fit to Screen"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>

              <span className="w-px h-3.5 bg-[#D6AF60]/30" />

              <span className="text-[#A89F8A] text-[11px]">
                {currentPageIndex + 1} / {totalPages}
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* =========================================================================
          5. REDESIGNED EDITORIAL STORY-ENDING & DEBRIEF (Illustrated Book Finish)
          ========================================================================= */}
      <section className="w-full bg-[#080B09] border-t border-[#D6AF60]/25 py-20 px-4 sm:px-8 mt-12">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Section Heading */}
          <div className="text-center space-y-3">
            <p className="font-cinzel text-xs uppercase tracking-[0.25em] text-[#D6AF60]">
              The Canon Debrief
            </p>
            <h2 className="font-display text-3xl sm:text-5xl text-[#E9E0CF] font-normal">
              Chapter 01 Summary &amp; Directives
            </h2>
            <p className="font-display italic text-base text-[#A89F8A] max-w-xl mx-auto leading-relaxed">
              Curated by Dr. Amit Khandelwal &middot; Chief Digital, AI &amp; ERP Transformation
              Leader
            </p>
          </div>

          {/* Three Important Strategic Lessons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            {issue.transformationLessons.map((lesson) => (
              <div
                key={lesson.number}
                className="p-6 rounded-xl bg-[#11140F] border border-[#D6AF60]/25 space-y-3 hover:border-[#D6AF60]/60 transition-colors"
              >
                <span className="font-cinzel text-xs text-[#D6AF60] tracking-widest block">
                  Directive {lesson.number}
                </span>
                <h3 className="font-display text-lg text-[#E9E0CF] font-medium leading-snug">
                  {lesson.title}
                </h3>
                <p className="font-body text-xs text-[#A89F8A] leading-relaxed">
                  {lesson.takeaway}
                </p>
              </div>
            ))}
          </div>

          {/* Featured Character Insight */}
          <div className="p-6 sm:p-8 rounded-xl bg-[#11140F] border border-[#D6AF60]/30 flex flex-col sm:flex-row items-center gap-6">
            <div className="relative w-20 h-20 rounded-full overflow-hidden border border-[#D6AF60]/50 shrink-0">
              <Image
                src="/assets/podcast/asset_02_8ff26d0d.jpg"
                alt="The Sovereign Lion"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-1 text-center sm:text-left">
              <p className="font-cinzel text-[10px] uppercase tracking-widest text-[#D6AF60]">
                Council Insight &middot; The Sovereign Lion
              </p>
              <p className="font-display italic text-base sm:text-lg text-[#E9E0CF]">
                &ldquo;Don&apos;t compete to deploy AI first. Compete to be ready. AI without
                strategy creates activity; AI with strategy creates sustainable advantage.&rdquo;
              </p>
            </div>
          </div>

          {/* Bridges: Companion Broadcast Transmission & Next Graphic Novel Chapter */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
            {/* Podcast Recommendation */}
            <div className="p-6 rounded-xl bg-[#11140F] border border-[#38C7B5]/30 space-y-4 flex flex-col justify-between">
              <div className="space-y-2">
                <span className="font-cinzel text-[10px] uppercase tracking-widest text-[#38C7B5]">
                  Companion Broadcast Transmission
                </span>
                <h4 className="font-display text-xl text-[#E9E0CF]">
                  Episode 08: The Jungle Audit
                </h4>
                <p className="font-body text-xs text-[#A89F8A] leading-relaxed">
                  Join Dr. Amit Khandelwal and The Sovereign Lion as they unpack the operational
                  realities of the 4-pillar audit.
                </p>
              </div>
              <Link
                href="/podcast/ep-08-jungle-audit"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#38C7B5]/15 border border-[#38C7B5]/50 text-[#38C7B5] font-cinzel text-xs uppercase tracking-wider hover:bg-[#38C7B5] hover:text-[#0B0D0A] transition-all w-fit font-semibold"
              >
                <Radio className="w-3.5 h-3.5" />
                <span>Listen to Broadcast (46 min)</span>
              </Link>
            </div>

            {/* Next Comic Chapter */}
            <div className="p-6 rounded-xl bg-[#11140F] border border-[#D6AF60]/40 space-y-4 flex flex-col justify-between">
              <div className="space-y-2">
                <span className="font-cinzel text-[10px] uppercase tracking-widest text-[#D6AF60]">
                  Next Graphic Novel Chapter
                </span>
                <h4 className="font-display text-xl text-[#E9E0CF]">
                  Chapter 02: The Great Trunk
                </h4>
                <p className="font-body text-xs text-[#A89F8A] leading-relaxed">
                  Descend into the subterranean data lakes as The Great Elephant purges legacy
                  sludge with clean vector streams.
                </p>
              </div>
              <Link
                href="/reader/the-great-trunk"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-[#D6AF60] text-[#0B0D0A] font-cinzel text-xs uppercase tracking-wider font-bold hover:brightness-110 shadow-lg transition-all w-fit"
              >
                <span>Continue Reading &rarr;</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
