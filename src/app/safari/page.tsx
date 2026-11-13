"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { SAFARI_CHAPTERS, SafariChapter } from "@/data/safari";
import { BioluminescentParticles } from "@/components/effects/BioluminescentParticles";
import { InteractiveHoloCard } from "@/components/effects/InteractiveHoloCard";
import {
  Compass,
  CheckCircle2,
  Clock,
  Sparkles,
  ArrowRight,
  BookOpen,
  Radio,
  Download,
  Shield,
  Layers,
  ChevronRight,
} from "lucide-react";

export default function SafariJourneyPage() {
  const [selectedVolume, setSelectedVolume] = useState<string>("all");
  const [blueprintDownloaded, setBlueprintDownloaded] = useState(false);

  const filteredChapters =
    selectedVolume === "all"
      ? SAFARI_CHAPTERS
      : SAFARI_CHAPTERS.filter((ch) => ch.volumeKey === selectedVolume);

  const masteredCount = SAFARI_CHAPTERS.filter((ch) => ch.status === "Mastered").length;
  const inProgressCount = SAFARI_CHAPTERS.filter((ch) => ch.status === "In Progress").length;
  const reservedCount = SAFARI_CHAPTERS.filter((ch) => ch.status === "Reserved").length;

  const handleDownloadBlueprint = () => {
    setBlueprintDownloaded(true);
    setTimeout(() => {
      // Create local text blueprint download
      const content = `THE AI JUNGLE — 13-CHAPTER ENTERPRISE TRANSFORMATION BLUEPRINT\nAuthor: Dr. Amit Khandelwal\n\n${SAFARI_CHAPTERS.map(
        (ch) =>
          `[CHAPTER ${ch.number}] ${ch.title} (${ch.volume})\nRole: ${ch.featuredArchetype.name} - ${ch.featuredArchetype.role}\nKPI: ${ch.kpiImpact.value} | Velocity: ${ch.computeVelocity.value}\nDescription: ${ch.description}\n\n`
      ).join("")}`;
      const blob = new Blob([content], { type: "text/plain" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "The-AI-Jungle-13-Chapter-Transformation-Blueprint.txt";
      a.click();
    }, 400);
  };

  return (
    <div className="w-full bg-background min-h-screen py-8 space-y-16">
      {/* =========================================================================
          TOP CANOPY AMBIENT BACKDROP & TELEMETRY HUD (STITCH SCREEN 01 SPEC)
          ========================================================================= */}
      <section className="relative w-full overflow-hidden border-b border-jungle-border/50 pb-12">
        <BioluminescentParticles count={45} className="z-0 opacity-70" />

        <div className="absolute inset-0 pointer-events-none opacity-40 z-0">
          <div className="absolute -top-32 left-1/4 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[140px]" />
          <div className="absolute top-20 right-10 w-[500px] h-[500px] rounded-full bg-secondary/15 blur-[160px]" />
          <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-background to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 z-10">
          {/* Top Status & Syndicate Header */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container border border-secondary/30 text-secondary font-label text-xs uppercase tracking-widest font-semibold">
              <span className="w-2 h-2 rounded-full bg-secondary animate-ping" />
              <span>CANONICAL ENTERPRISE CURRICULUM • 13 CHAPTERS</span>
            </div>
            <div className="flex items-center gap-2 text-editorial-secondary font-label text-xs uppercase tracking-wider">
              <span className="text-primary font-semibold">Tier 1 Sovereign Access</span>
              <span className="opacity-40">/</span>
              <span>SYNDICATE REVISION 4.9.2</span>
            </div>
          </div>

          {/* Main Title & Global Progress Matrix HUD */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8 space-y-3">
              <h1 className="font-display font-light text-4xl sm:text-6xl text-editorial-light tracking-tight leading-tight">
                The AI Jungle Safari:{" "}
                <span className="italic font-normal text-text-gold-gradient">
                  The 13-Chapter Transformation Journey
                </span>
              </h1>
              <p className="font-body text-base text-editorial-secondary max-w-3xl leading-relaxed">
                From initial algorithmic diagnostic to autonomous agentic swarms. Follow the canonical transformation path deciphering how global enterprises migrate from legacy paralysis to synthetic intelligence supremacy.
              </p>
            </div>

            {/* Telemetry HUD Progress Card */}
            <div className="lg:col-span-4 glass-panel rounded-2xl p-5 space-y-3 border border-primary/40 shadow-card">
              <div className="flex items-center justify-between">
                <span className="font-label text-xs uppercase text-secondary tracking-widest font-semibold">
                  Global Progress Matrix
                </span>
                <span className="font-label text-xs px-2 py-0.5 rounded bg-primary/20 text-primary font-bold">
                  31% MASTERED
                </span>
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between items-baseline text-xs font-label">
                  <span className="text-editorial-light font-semibold">
                    {masteredCount} Chapters Validated
                  </span>
                  <span className="text-editorial-muted">
                    {inProgressCount + reservedCount} In Reserve
                  </span>
                </div>
                {/* Visual Progress Bar */}
                <div className="w-full h-2 rounded-full bg-surface-container-highest overflow-hidden relative">
                  <div className="h-full bg-gradient-to-r from-secondary via-primary to-primary-fixed rounded-full w-[31%] shadow-teal transition-all duration-700" />
                </div>
              </div>

              <div className="flex items-center justify-between pt-1 text-editorial-muted font-label text-[11px]">
                <span className="flex items-center gap-1 text-secondary">
                  <Shield className="w-3.5 h-3.5" />
                  Zero-Hallucination Gate
                </span>
                <span className="text-primary font-medium">Vol. I Synced</span>
              </div>
            </div>
          </div>

          {/* Quick Filter Ribbons */}
          <div className="flex flex-wrap items-center gap-2 pt-2">
            <button
              type="button"
              onClick={() => setSelectedVolume("all")}
              className={`px-4 py-2 rounded-lg font-label text-xs uppercase tracking-wider transition-all ${
                selectedVolume === "all"
                  ? "bg-primary text-background font-bold shadow-gold"
                  : "bg-surface-container text-editorial-secondary hover:text-editorial-light hover:bg-surface-container-high"
              }`}
            >
              All Chapters (13)
            </button>
            <button
              type="button"
              onClick={() => setSelectedVolume("vol-1")}
              className={`px-4 py-2 rounded-lg font-label text-xs uppercase tracking-wider transition-all ${
                selectedVolume === "vol-1"
                  ? "bg-primary text-background font-bold shadow-gold"
                  : "bg-surface-container text-editorial-secondary hover:text-editorial-light hover:bg-surface-container-high"
              }`}
            >
              Volume I: Foundations (00–05)
            </button>
            <button
              type="button"
              onClick={() => setSelectedVolume("vol-2")}
              className={`px-4 py-2 rounded-lg font-label text-xs uppercase tracking-wider transition-all ${
                selectedVolume === "vol-2"
                  ? "bg-primary text-background font-bold shadow-gold"
                  : "bg-surface-container text-editorial-secondary hover:text-editorial-light hover:bg-surface-container-high"
              }`}
            >
              Volume II: Scaling & MLOps (06–09)
            </button>
            <button
              type="button"
              onClick={() => setSelectedVolume("vol-3")}
              className={`px-4 py-2 rounded-lg font-label text-xs uppercase tracking-wider transition-all ${
                selectedVolume === "vol-3"
                  ? "bg-primary text-background font-bold shadow-gold"
                  : "bg-surface-container text-editorial-secondary hover:text-editorial-light hover:bg-surface-container-high"
              }`}
            >
              Volume III: Autonomous Horizons (10–12)
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          INTERACTIVE TIMELINE SPINE (ALTERNATING LEFT/RIGHT CARDS)
          ========================================================================= */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Desktop Central Illuminated Circuit Spine Track with Animated Pulse */}
        <div className="hidden lg:block absolute left-1/2 top-10 bottom-24 w-0.5 -translate-x-1/2 bg-gradient-to-b from-secondary via-primary to-jungle-border/30 pointer-events-none overflow-hidden">
          <div className="animate-electric-pulse" />
        </div>

        <div className="space-y-16 relative">
          {filteredChapters.map((chapter, index) => {
            const isEven = index % 2 === 0;
            const isMastered = chapter.status === "Mastered";
            const isInProgress = chapter.status === "In Progress";

            return (
              <div
                key={chapter.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                {/* LEFT COLUMN: When even, show text info; when odd, show visual card */}
                <div
                  className={`lg:col-span-5 flex flex-col ${
                    isEven
                      ? "items-start lg:items-end lg:text-right order-2 lg:order-1"
                      : "order-2 lg:order-1"
                  }`}
                >
                  {isEven ? (
                    /* Text & Actions Block */
                    <div className="space-y-3">
                      <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-secondary/15 text-secondary font-label text-[10px] uppercase tracking-widest font-semibold border border-secondary/20">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>{chapter.status}</span>
                      </div>
                      <span className="font-label text-xs text-primary uppercase tracking-widest block font-semibold">
                        {chapter.displayNumber}
                      </span>
                      <h3 className="font-display text-2xl sm:text-3xl text-editorial-light">
                        {chapter.title}
                      </h3>
                      <p className="font-body text-xs sm:text-sm text-editorial-secondary max-w-md leading-relaxed">
                        {chapter.description}
                      </p>

                      {/* Tag badges */}
                      <div className="flex flex-wrap gap-2 pt-2 lg:justify-end">
                        <span className="px-2.5 py-1 rounded bg-surface-container font-label text-[10px] uppercase text-primary border border-primary/20">
                          {chapter.featuredArchetype.name}
                        </span>
                        <span className="px-2.5 py-1 rounded bg-surface-container font-label text-[10px] uppercase text-secondary border border-secondary/20">
                          {chapter.kpiImpact.value}
                        </span>
                      </div>

                      {/* Actions */}
                      <div className="pt-3 flex items-center gap-3 lg:justify-end">
                        {chapter.relatedComicSlug && (
                          <Link
                            href={`/reader/${chapter.relatedComicSlug}`}
                            className="px-4 py-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-editorial-light border border-jungle-border font-label text-xs uppercase tracking-wider transition-all hover:border-primary hover:text-primary"
                          >
                            Read Comic
                          </Link>
                        )}
                        {chapter.relatedPodcastSlug && (
                          <Link
                            href={`/podcast/${chapter.relatedPodcastSlug}`}
                            className="shimmer-card px-4 py-2 rounded-lg bg-primary text-background font-label text-xs uppercase tracking-wider font-bold shadow-gold hover:bg-primary-fixed transition-all hover:scale-105 active:scale-95"
                          >
                            Audit Debrief
                          </Link>
                        )}
                      </div>
                    </div>
                  ) : (
                    /* Visual Showcase Card with 3D Holo Tilt */
                    <InteractiveHoloCard
                      glowColor="teal"
                      className="aspect-video w-full glass-panel p-2 shadow-card group"
                    >
                      <div className="relative w-full h-full rounded-xl overflow-hidden">
                        <Image
                          src={chapter.artwork}
                          alt={chapter.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                        <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-black/80 font-label text-[10px] uppercase text-primary border border-primary/20">
                          Archetype: {chapter.featuredArchetype.name}
                        </div>
                        <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center text-xs font-label">
                          <span className="text-editorial-light font-semibold">
                            {chapter.kpiImpact.value}
                          </span>
                          <span className="text-secondary font-bold">
                            {chapter.computeVelocity.value}
                          </span>
                        </div>
                      </div>
                    </InteractiveHoloCard>
                  )}
                </div>

                {/* CENTER COLUMN: Central Milestone Node (Desktop only) */}
                <div className="hidden lg:flex lg:col-span-2 justify-center items-center relative order-2">
                  <div className="relative group">
                    {/* Glowing outer pulse aura */}
                    <div
                      className={`absolute -inset-1.5 rounded-full blur-sm transition-opacity ${
                        isMastered
                          ? "bg-primary/40 opacity-70 group-hover:opacity-100"
                          : isInProgress
                          ? "bg-secondary/40 opacity-70 group-hover:opacity-100 animate-pulse"
                          : "opacity-0"
                      }`}
                    />
                    <div
                      className={`relative w-12 h-12 rounded-full flex items-center justify-center font-label font-bold text-sm z-10 transition-transform duration-300 group-hover:scale-110 ${
                        isMastered
                          ? "bg-surface-container-high border-2 border-primary text-primary shadow-gold"
                          : isInProgress
                          ? "bg-surface-container-high border-2 border-secondary text-secondary shadow-teal"
                          : "bg-surface-container border border-jungle-border text-editorial-muted"
                      }`}
                    >
                      {chapter.number}
                    </div>
                  </div>
                </div>

                {/* RIGHT COLUMN: Alternate between Visual and Text */}
                <div
                  className={`lg:col-span-5 flex flex-col ${
                    isEven ? "order-1 lg:order-3" : "items-start order-1 lg:order-3"
                  }`}
                >
                  {isEven ? (
                    /* Visual Showcase Card with 3D Holo Tilt */
                    <InteractiveHoloCard
                      glowColor="gold"
                      className="aspect-video w-full glass-panel p-2 shadow-card group"
                    >
                      <div className="relative w-full h-full rounded-xl overflow-hidden">
                        <Image
                          src={chapter.artwork}
                          alt={chapter.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                        <div className="absolute top-3 right-3 px-2.5 py-1 rounded bg-black/80 font-label text-[10px] uppercase text-secondary border border-secondary/20">
                          Archetype: {chapter.featuredArchetype.name}
                        </div>
                        <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center text-xs font-label">
                          <span className="text-editorial-light font-semibold">
                            {chapter.kpiImpact.value}
                          </span>
                          <span className="text-secondary font-bold">
                            {chapter.computeVelocity.value}
                          </span>
                        </div>
                      </div>
                    </InteractiveHoloCard>
                  ) : (
                    /* Text & Actions Block */
                    <div className="space-y-3">
                      <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-secondary/15 text-secondary font-label text-[10px] uppercase tracking-widest font-semibold">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>{chapter.status}</span>
                      </div>
                      <span className="font-label text-xs text-secondary uppercase tracking-widest block font-semibold">
                        {chapter.displayNumber}
                      </span>
                      <h3 className="font-display text-2xl sm:text-3xl text-editorial-light">
                        {chapter.title}
                      </h3>
                      <p className="font-body text-xs sm:text-sm text-editorial-secondary max-w-md leading-relaxed">
                        {chapter.description}
                      </p>

                      <div className="flex flex-wrap gap-2 pt-2">
                        <span className="px-2.5 py-1 rounded bg-surface-container font-label text-[10px] uppercase text-primary border border-primary/20">
                          {chapter.featuredArchetype.name}
                        </span>
                        <span className="px-2.5 py-1 rounded bg-surface-container font-label text-[10px] uppercase text-secondary border border-secondary/20">
                          {chapter.kpiImpact.value}
                        </span>
                      </div>

                      <div className="pt-3 flex items-center gap-3">
                        {chapter.relatedComicSlug && (
                          <Link
                            href={`/reader/${chapter.relatedComicSlug}`}
                            className="px-4 py-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-editorial-light border border-jungle-border font-label text-xs uppercase tracking-wider transition-all"
                          >
                            Read Comic
                          </Link>
                        )}
                        {chapter.relatedPodcastSlug && (
                          <Link
                            href={`/podcast/${chapter.relatedPodcastSlug}`}
                            className="px-4 py-2 rounded-lg bg-primary text-background font-label text-xs uppercase tracking-wider font-bold shadow-gold hover:bg-primary-fixed transition-all"
                          >
                            Listen Transmission
                          </Link>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* =========================================================================
          DOWNLOAD 13-CHAPTER BLUEPRINT CALLOUT
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="glass-panel rounded-2xl p-6 sm:p-10 border border-primary/40 shadow-gold grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/15 text-primary font-label text-xs uppercase tracking-widest font-semibold">
              <Download className="w-3.5 h-3.5" />
              Official Executive Curriculum
            </div>
            <h2 className="font-display text-2xl sm:text-4xl text-editorial-light">
              Download the 13-Chapter Enterprise Transformation Blueprint
            </h2>
            <p className="font-body text-sm sm:text-base text-editorial-secondary leading-relaxed">
              Equip your board and transformation committees with the complete syllabus: model sharding matrices, data sanitization protocols, and sovereign AI execution frameworks.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-center items-start lg:items-end">
            <button
              type="button"
              onClick={handleDownloadBlueprint}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-primary-container via-primary to-primary-highlight text-background font-label text-xs uppercase tracking-wider font-bold shadow-gold-lg hover:brightness-110 transition-all"
            >
              <Download className="w-4 h-4" />
              <span>{blueprintDownloaded ? "Blueprint Downloaded" : "Download Full Syllabus (.txt)"}</span>
            </button>
            {blueprintDownloaded && (
              <span className="font-label text-xs text-secondary mt-2 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Executive Syllabus Generated</span>
              </span>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

