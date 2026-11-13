"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { CHARACTERS } from "@/data/characters";
import { SAFARI_CHAPTERS } from "@/data/safari";
import { PODCAST_EPISODES } from "@/data/podcast";
import { COMIC_ISSUES, CANONICAL_OMNIBUS } from "@/data/comics";
import { BioluminescentParticles } from "@/components/effects/BioluminescentParticles";
import { AudioVisualizer } from "@/components/effects/AudioVisualizer";
import { InteractiveHoloCard } from "@/components/effects/InteractiveHoloCard";
import {
  Play,
  BookOpen,
  ArrowRight,
  Compass,
  Users,
  Sparkles,
  Radio,
  CheckCircle2,
  Clock,
  Layers,
  Shield,
  ChevronRight,
  Flame,
} from "lucide-react";

export default function HomePage() {
  const [selectedVolume, setSelectedVolume] = useState<string>("all");
  const [isAudioSimPlaying, setIsAudioSimPlaying] = useState<boolean>(true);
  const featuredEpisode = PODCAST_EPISODES[0];
  const featuredComics = COMIC_ISSUES.slice(0, 3);

  const filteredChapters =
    selectedVolume === "all"
      ? SAFARI_CHAPTERS
      : SAFARI_CHAPTERS.filter((ch) => ch.volumeKey === selectedVolume);

  return (
    <div className="w-full bg-background flex flex-col items-center overflow-hidden">
      {/* =========================================================================
          HERO SECTION: Atmospheric Cinematic Jungle & Sovereign Lion
          ========================================================================= */}
      <section className="relative w-full min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#080B09] border-b border-jungle-border/40">
        {/* Interactive Bioluminescent Particles Effect */}
        <BioluminescentParticles count={55} className="z-0 opacity-80" />

        {/* Ambient atmospheric glows & mesh */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-10 left-1/4 w-[550px] h-[550px] rounded-full bg-primary/10 blur-[150px] animate-pulse" />
          <div className="absolute bottom-10 right-1/4 w-[650px] h-[650px] rounded-full bg-secondary/15 blur-[160px]" />
          <div className="absolute inset-0 bg-[radial-gradient(#202820_1px,transparent_1px)] [background-size:24px_24px] opacity-25" />
          <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-background via-background/60 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
          {/* Left Text Column with Framer Motion Stagger */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col space-y-6 text-left"
          >
            {/* Live Telemetry Pill */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container/90 backdrop-blur-md border border-secondary/40 text-secondary max-w-full shadow-[0_0_20px_rgba(79,219,199,0.2)]"
            >
              <span className="w-2 h-2 rounded-full bg-secondary animate-ping shrink-0" />
              <span className="font-label text-[10px] sm:text-xs uppercase tracking-wider sm:tracking-widest font-semibold truncate">
                Tier-1 Sovereign Enterprise Intelligence
              </span>
            </motion.div>

            {/* Main Title */}
            <div className="space-y-2">
              <h1 className="font-display font-light text-4xl sm:text-6xl lg:text-7xl tracking-tight text-editorial-light leading-[1.08]">
                THE JUNGLE <br />
                <span className="italic font-normal text-text-gold-gradient relative inline-block">
                  IS CHANGING.
                  <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-[#F7C048] via-[#4FDBC7] to-transparent opacity-80" />
                </span>
              </h1>
              <p className="font-label text-xs sm:text-sm uppercase tracking-widest text-secondary font-semibold pt-1 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-primary" />
                THINK STRATEGICALLY. THEN LET AI ROAR.
              </p>
            </div>

            {/* Supporting Copy */}
            <p className="font-body text-base sm:text-lg text-editorial-secondary max-w-2xl leading-relaxed">
              Explore AI strategy, enterprise transformation, data hygiene, and digital innovation through powerful podcast conversations, executive blueprints, and prestige illustrated graphic novels.
            </p>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="/podcast"
                className="shimmer-card inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-lg bg-gradient-to-r from-primary-container via-primary to-primary-highlight text-background font-label text-xs font-bold uppercase tracking-wider shadow-gold-lg hover:brightness-110 hover:shadow-[0_0_35px_rgba(247,192,72,0.6)] transition-all hover:scale-105 active:scale-95"
              >
                <Radio className="w-4 h-4" />
                <span>Explore Podcast</span>
              </Link>

              <Link
                href="/comics"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-lg bg-surface-container-high border border-secondary/50 text-secondary font-label text-xs font-semibold uppercase tracking-wider shadow-teal hover:bg-secondary/15 hover:border-secondary hover:shadow-teal-lg transition-all hover:scale-105 active:scale-95"
              >
                <BookOpen className="w-4 h-4" />
                <span>Enter The Comic World</span>
              </Link>
            </div>

            {/* Metrics HUD Bar */}
            <div className="pt-6 grid grid-cols-3 gap-2 sm:gap-4 border-t border-jungle-border/50 max-w-lg w-full">
              <div className="p-1.5 sm:p-2 rounded-lg bg-surface-container/40 border border-primary/20 backdrop-blur-sm text-center">
                <p className="font-display text-xl sm:text-2xl font-semibold text-primary">13</p>
                <p className="font-label text-[9px] sm:text-[10px] uppercase tracking-wider text-editorial-muted">
                  Safari Chapters
                </p>
              </div>
              <div className="p-1.5 sm:p-2 rounded-lg bg-surface-container/40 border border-secondary/20 backdrop-blur-sm text-center">
                <p className="font-display text-xl sm:text-2xl font-semibold text-secondary">10</p>
                <p className="font-label text-[9px] sm:text-[10px] uppercase tracking-wider text-editorial-muted">
                  Archetypes
                </p>
              </div>
              <div className="p-1.5 sm:p-2 rounded-lg bg-surface-container/40 border border-primary/20 backdrop-blur-sm text-center">
                <p className="font-display text-xl sm:text-2xl font-semibold text-primary">100%</p>
                <p className="font-label text-[9px] sm:text-[10px] uppercase tracking-wider text-editorial-muted">
                  Moat
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Hero Visual: Sovereign Lion Executive with 3D Tilt */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <InteractiveHoloCard
              glowColor="gold"
              className="w-full max-w-md aspect-[4/5] glass-panel p-2 shadow-2xl group holo-bracket"
            >
              <div className="relative w-full h-full rounded-xl overflow-hidden">
                <Image
                  src="/assets/safari/asset_01_f377b05e.jpg"
                  alt="The Sovereign Lion in executive tuxedo at the walnut podcast studio in a bioluminescent jungle"
                  fill
                  priority
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                
                {/* Floating Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-background/85 backdrop-blur-md border border-primary/50 font-label text-[10px] uppercase tracking-widest text-primary font-bold shadow-gold flex items-center gap-1.5">
                  <Flame className="w-3.5 h-3.5 text-primary" />
                  Host & Strategist
                </div>

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-4 inset-x-4 p-4 rounded-xl bg-surface-container/90 backdrop-blur-md border border-jungle-border/70 flex items-center justify-between shadow-lg">
                  <div>
                    <h3 className="font-display text-lg text-primary font-medium">The Sovereign Lion</h3>
                    <p className="font-label text-[10px] text-editorial-secondary uppercase tracking-wider">
                      CEO & AI Strategy Leader
                    </p>
                  </div>
                  <Link
                    href="/characters/sovereign-lion"
                    className="p-2.5 rounded-lg bg-primary/20 text-primary hover:bg-primary hover:text-background transition-colors hover:scale-110 active:scale-95"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </InteractiveHoloCard>
          </motion.div>
        </div>
      </section>

      {/* =========================================================================
          LATEST FEATURED PODCAST SECTION
          ========================================================================= */}
      <section className="w-full py-20 bg-surface-base border-b border-jungle-border/40 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-label text-xs uppercase tracking-widest mb-3 border border-primary/20">
                <Radio className="w-3.5 h-3.5" />
                Official Broadcast Transmission
              </div>
              <h2 className="font-display text-3xl sm:text-4xl text-editorial-light">
                Latest Podcast Broadcast
              </h2>
            </div>
            <Link
              href="/podcast"
              className="inline-flex items-center gap-1.5 font-label text-xs uppercase tracking-widest text-primary hover:text-primary-fixed hover:underline"
            >
              <span>View All Transmissions</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Featured Episode 08 Spotlight Card */}
          <div className="glass-panel rounded-2xl overflow-hidden p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-card border border-primary/25">
            {/* Video Player Preview / Thumbnail */}
            <div className="lg:col-span-6 relative aspect-video rounded-xl overflow-hidden group">
              <Image
                src={featuredEpisode.videoPoster}
                alt={featuredEpisode.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                <Link
                  href={`/podcast/${featuredEpisode.slug}`}
                  className="w-16 h-16 rounded-full bg-primary text-background flex items-center justify-center shadow-gold-lg group-hover:scale-110 transition-transform active:scale-95"
                >
                  <Play className="w-7 h-7 fill-current ml-1" />
                </Link>
              </div>

              {/* Dynamic Soundwave Overlay on top right of video */}
              <div className="absolute top-3 right-3 px-3 py-1 rounded-lg bg-black/85 backdrop-blur-md border border-secondary/30 flex items-center gap-2">
                <AudioVisualizer isPlaying={isAudioSimPlaying} barCount={6} height={16} colorScheme="teal" />
                <span className="font-label text-[10px] uppercase text-secondary font-semibold">Live Transmission</span>
              </div>

              <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded bg-black/80 backdrop-blur-md font-label text-xs text-editorial-light">
                {featuredEpisode.duration}
              </div>
            </div>

            {/* Episode Metadata & Summary */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="font-label text-xs text-secondary uppercase tracking-widest font-semibold">
                    {featuredEpisode.episodeNumber} • {featuredEpisode.season}
                  </span>
                  <span className="font-label text-xs text-editorial-muted">
                    {featuredEpisode.publishDate}
                  </span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl text-editorial-light hover:text-primary transition-colors">
                  <Link href={`/podcast/${featuredEpisode.slug}`}>
                    {featuredEpisode.title}
                  </Link>
                </h3>
                <p className="font-body text-sm text-editorial-secondary leading-relaxed line-clamp-3">
                  {featuredEpisode.description}
                </p>
              </div>

              {/* Audio Frequency Simulation Bar */}
              <div className="p-3 rounded-xl bg-surface-container/60 border border-jungle-border/50 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setIsAudioSimPlaying(!isAudioSimPlaying)}
                    className="p-2 rounded-lg bg-primary/20 text-primary hover:bg-primary hover:text-background transition-colors"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                  </button>
                  <AudioVisualizer isPlaying={isAudioSimPlaying} barCount={16} height={22} colorScheme="dual" />
                </div>
                <span className="font-label text-[10px] text-editorial-muted uppercase tracking-wider">
                  48kHz Mastered Audio
                </span>
              </div>

              {/* Dialogists Preview */}
              <div className="flex items-center gap-4 pt-1">
                <div className="flex -space-x-2">
                  {featuredEpisode.dialogists.map((d) => (
                    <div
                      key={d.name}
                      className="relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-primary/40"
                    >
                      <Image src={d.avatar} alt={d.name} fill className="object-cover" />
                    </div>
                  ))}
                </div>
                <div className="text-xs font-label">
                  <p className="text-editorial-light font-semibold">
                    Dr. Amit Khandelwal & The Sovereign Lion
                  </p>
                  <p className="text-editorial-muted uppercase tracking-wider text-[10px]">
                    Executive Dialogue
                  </p>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  href={`/podcast/${featuredEpisode.slug}`}
                  className="shimmer-card inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-background font-label text-xs font-bold uppercase tracking-wider shadow-gold hover:bg-primary-fixed transition-all hover:scale-105 active:scale-95"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Listen / Watch Now</span>
                </Link>

                <Link
                  href={`/reader/${featuredEpisode.comicBridge.readerSlug}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-surface-container-high border border-secondary/40 text-secondary font-label text-xs font-semibold uppercase tracking-wider hover:bg-secondary/15 transition-all hover:scale-105 active:scale-95"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Read Comic Bridge</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FEATURED GRAPHIC NOVELS SECTION WITH 3D HOLO CARDS
          ========================================================================= */}
      <section className="w-full py-20 bg-background border-b border-jungle-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary font-label text-xs uppercase tracking-widest mb-3 border border-secondary/20">
                <BookOpen className="w-3.5 h-3.5" />
                Prestige Digital Graphic Novels
              </div>
              <h2 className="font-display text-3xl sm:text-4xl text-editorial-light">
                Featured Illustrated Issues
              </h2>
            </div>
            <Link
              href="/comics"
              className="inline-flex items-center gap-1.5 font-label text-xs uppercase tracking-widest text-primary hover:text-primary-fixed hover:underline"
            >
              <span>Explore Comic Library</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Comics Grid with 3D Holo Tilt */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredComics.map((comic) => (
              <InteractiveHoloCard
                key={comic.id}
                glowColor="gold"
                className="glass-panel rounded-2xl overflow-hidden flex flex-col justify-between group shadow-card"
              >
                {/* Comic Cover Aspect 2:3 */}
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-surface-container">
                  <Image
                    src={comic.coverImage}
                    alt={comic.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-black/80 backdrop-blur-md border border-primary/40 font-label text-[10px] uppercase tracking-wider text-primary font-bold">
                    {comic.issueNumber}
                  </div>
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded bg-black/80 backdrop-blur-md font-label text-[10px] uppercase tracking-wider text-secondary">
                    {comic.readingTime}
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 flex flex-col flex-1 justify-between space-y-4">
                  <div className="space-y-1.5">
                    <span className="font-label text-[10px] text-editorial-muted uppercase tracking-widest">
                      {comic.canonicalChapter} • {comic.volume}
                    </span>
                    <h3 className="font-display text-xl text-editorial-light group-hover:text-primary transition-colors">
                      {comic.title}
                    </h3>
                    <p className="font-body text-xs text-editorial-secondary line-clamp-2 leading-relaxed">
                      {comic.synopsis}
                    </p>
                  </div>

                  <div className="pt-2 flex items-center justify-between border-t border-jungle-border/50">
                    <Link
                      href={`/comics/${comic.slug}`}
                      className="font-label text-xs uppercase tracking-wider text-editorial-secondary hover:text-editorial-light"
                    >
                      Issue Details
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
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          MEET THE 10 ANIMAL LEADERS (COUNCIL OF 10)
          ========================================================================= */}
      <section className="w-full py-20 bg-surface-base border-b border-jungle-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/15 text-secondary font-label text-xs uppercase tracking-widest border border-secondary/20">
              <Users className="w-3.5 h-3.5" />
              The Sovereign C-Suite
            </div>
            <h2 className="font-display text-3xl sm:text-5xl text-editorial-light">
              Council of 10 Animal Archetypes
            </h2>
            <p className="font-body text-sm sm:text-base text-editorial-secondary">
              In The AI Jungle, animal leaders embody enterprise transformation roles. From data sanitization to real-time inference acceleration, meet the autonomous council governing tomorrow&apos;s corporate pride.
            </p>
          </div>

          {/* 10 Archetypes Grid with Holo Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            {CHARACTERS.map((char) => (
              <InteractiveHoloCard
                key={char.id}
                glowColor="teal"
                className="glass-panel rounded-xl overflow-hidden p-3 group flex flex-col justify-between shadow-card"
              >
                <Link href={`/characters/${char.slug}`} className="flex flex-col h-full justify-between">
                  <div>
                    <div className="relative aspect-square w-full rounded-lg overflow-hidden mb-3">
                      <Image
                        src={char.portraitImage}
                        alt={char.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                    </div>
                    <div className="space-y-1">
                      <p className="font-label text-[9px] text-secondary uppercase tracking-widest font-semibold">
                        {char.executiveRole.split("&")[0]}
                      </p>
                      <h4 className="font-display text-base text-editorial-light group-hover:text-primary transition-colors">
                        {char.name}
                      </h4>
                      <p className="font-body text-[11px] text-editorial-muted line-clamp-2 italic">
                        &ldquo;{char.quote}&rdquo;
                      </p>
                    </div>
                  </div>
                  <div className="pt-3 mt-2 border-t border-jungle-border/40 flex items-center justify-between text-[10px] font-label uppercase tracking-wider text-primary">
                    <span>Dossier</span>
                    <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </InteractiveHoloCard>
            ))}
          </div>

          <div className="text-center pt-10">
            <Link
              href="/characters"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-surface-container-high border border-jungle-border text-editorial-light font-label text-xs uppercase tracking-widest hover:border-primary hover:text-primary transition-all hover:scale-105 active:scale-95"
            >
              <span>Explore Council Comparison Matrix</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SAFARI JOURNEY 13 CHAPTERS TEASER
          ========================================================================= */}
      <section className="w-full py-20 bg-background border-b border-jungle-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-label text-xs uppercase tracking-widest mb-3 border border-primary/20">
                <Compass className="w-3.5 h-3.5" />
                13-Chapter Curriculum
              </div>
              <h2 className="font-display text-3xl sm:text-4xl text-editorial-light">
                The Safari Transformation Roadmap
              </h2>
            </div>
            {/* Volume Filters */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => setSelectedVolume("all")}
                className={`px-3 py-1.5 rounded-lg font-label text-xs uppercase tracking-wider transition-all ${
                  selectedVolume === "all"
                    ? "bg-primary text-background font-bold shadow-gold"
                    : "bg-surface-container text-editorial-secondary hover:text-editorial-light"
                }`}
              >
                All Chapters
              </button>
              <button
                type="button"
                onClick={() => setSelectedVolume("vol-1")}
                className={`px-3 py-1.5 rounded-lg font-label text-xs uppercase tracking-wider transition-all ${
                  selectedVolume === "vol-1"
                    ? "bg-primary text-background font-bold shadow-gold"
                    : "bg-surface-container text-editorial-secondary hover:text-editorial-light"
                }`}
              >
                Vol I: Foundations
              </button>
              <button
                type="button"
                onClick={() => setSelectedVolume("vol-2")}
                className={`px-3 py-1.5 rounded-lg font-label text-xs uppercase tracking-wider transition-all ${
                  selectedVolume === "vol-2"
                    ? "bg-primary text-background font-bold shadow-gold"
                    : "bg-surface-container text-editorial-secondary hover:text-editorial-light"
                }`}
              >
                Vol II: Scaling
              </button>
              <button
                type="button"
                onClick={() => setSelectedVolume("vol-3")}
                className={`px-3 py-1.5 rounded-lg font-label text-xs uppercase tracking-wider transition-all ${
                  selectedVolume === "vol-3"
                    ? "bg-primary text-background font-bold shadow-gold"
                    : "bg-surface-container text-editorial-secondary hover:text-editorial-light"
                }`}
              >
                Vol III: Autonomous
              </button>
            </div>
          </div>

          {/* Horizontal / Grid Showcase of Safari Chapters with 3D Tilt */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredChapters.slice(0, 4).map((ch) => (
              <InteractiveHoloCard
                key={ch.id}
                glowColor="gold"
                className="glass-panel rounded-xl overflow-hidden p-4 flex flex-col justify-between group shadow-card"
              >
                <div>
                  <div className="relative aspect-video rounded-lg overflow-hidden mb-3">
                    <Image
                      src={ch.artwork}
                      alt={ch.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-black/80 backdrop-blur-md border border-primary/30 font-label text-[9px] uppercase tracking-wider text-primary font-bold">
                      Chapter {ch.number}
                    </div>
                    <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/80 backdrop-blur-md font-label text-[9px] uppercase tracking-wider text-secondary">
                      {ch.status}
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <h4 className="font-display text-lg text-editorial-light group-hover:text-primary transition-colors">
                      {ch.title}
                    </h4>
                    <p className="font-body text-xs text-editorial-secondary line-clamp-2">
                      {ch.description}
                    </p>
                  </div>
                </div>

                <div className="pt-3 mt-3 border-t border-jungle-border/40 flex items-center justify-between">
                  <span className="font-label text-[10px] text-editorial-muted uppercase">
                    {ch.kpiImpact.value}
                  </span>
                  <Link
                    href="/safari"
                    className="font-label text-xs text-primary font-semibold uppercase tracking-wider hover:underline"
                  >
                    View Timeline
                  </Link>
                </div>
              </InteractiveHoloCard>
            ))}
          </div>

          <div className="text-center pt-10">
            <Link
              href="/safari"
              className="shimmer-card inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-gradient-to-r from-primary-container to-primary text-background font-label text-xs uppercase tracking-widest font-bold shadow-gold-lg hover:brightness-110 transition-all hover:scale-105 active:scale-95"
            >
              <span>Explore Complete 13-Chapter Interactive Safari</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CREATOR BIOGRAPHY: DR. AMIT KHANDELWAL
          ========================================================================= */}
      <section className="relative w-full py-20 bg-surface-base border-b border-jungle-border/40 overflow-hidden">
        <BioluminescentParticles count={25} className="z-0 opacity-40" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
          <div className="lg:col-span-5 flex justify-center">
            <InteractiveHoloCard
              glowColor="gold"
              className="w-full max-w-sm aspect-square rounded-2xl glass-panel p-2 shadow-2xl holo-bracket"
            >
              <div className="relative w-full h-full rounded-xl overflow-hidden">
                <Image
                  src="/assets/podcast/asset_01_8add66c3.jpg"
                  alt="Dr. Amit Khandelwal"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-lg bg-surface-container/90 backdrop-blur-md border border-jungle-border text-center shadow-lg">
                  <p className="font-display text-lg text-primary">Dr. Amit Khandelwal</p>
                  <p className="font-label text-[10px] text-editorial-secondary uppercase tracking-widest">
                    Creator & Strategic Author
                  </p>
                </div>
              </div>
            </InteractiveHoloCard>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-label text-xs uppercase tracking-widest border border-primary/20">
              <Sparkles className="w-3.5 h-3.5" />
              Architect of The AI Jungle
            </div>
            <h2 className="font-display text-3xl sm:text-5xl text-editorial-light">
              Bridging Executive Strategy & <br />
              <span className="italic text-primary">Graphic Novel Artistry.</span>
            </h2>
            <p className="font-body text-base text-editorial-secondary leading-relaxed">
              Dr. Amit Khandelwal created The AI Jungle to solve a critical corporate gap: AI strategy is too often buried under impenetrable academic jargon or hyper-abstract vendor hype. 
            </p>
            <p className="font-body text-sm text-editorial-secondary leading-relaxed">
              By mapping high-stakes organizational decisions to archetypal animal narratives—the strategic lion, the data elephant, the vigilant owl—leaders gain unforgettable mental models to guide nine-figure capital allocations and autonomous deployments.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/about"
                className="shimmer-card inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-background font-label text-xs font-bold uppercase tracking-wider shadow-gold hover:bg-primary-fixed transition-all hover:scale-105 active:scale-95"
              >
                <span>Read Full Biography & Advisory Vision</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
