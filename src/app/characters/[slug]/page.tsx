"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CHARACTERS, Character } from "@/data/characters";
import { PODCAST_EPISODES } from "@/data/podcast";
import { COMIC_ISSUES } from "@/data/comics";
import { SAFARI_CHAPTERS } from "@/data/safari";
import {
  Users,
  ChevronRight,
  ChevronLeft,
  ArrowRight,
  Shield,
  Sparkles,
  Radio,
  BookOpen,
  Compass,
  CheckCircle2,
  Clock,
} from "lucide-react";

interface PageProps {
  params: {
    slug: string;
  };
}

export default function CharacterProfilePage({ params }: PageProps) {
  const character =
    CHARACTERS.find((c) => c.slug === params.slug) || CHARACTERS[0];

  const relatedEpisodes = PODCAST_EPISODES.filter((p) =>
    character.relatedEpisodes.some((epId) => p.id === epId || p.slug.includes(epId))
  );

  const relatedComics = COMIC_ISSUES.filter((c) =>
    c.featuredCharacters.includes(character.name)
  );

  const relatedChapters = SAFARI_CHAPTERS.filter((ch) =>
    ch.featuredArchetype.name.includes(character.animal) ||
    character.relatedSafariChapters.includes(ch.id)
  );

  return (
    <div className="w-full bg-background min-h-screen py-10 space-y-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs font-label uppercase tracking-widest text-editorial-muted">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/characters" className="hover:text-primary transition-colors">
            Council of 10
          </Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-secondary font-semibold">{character.name}</span>
        </nav>

        {/* =========================================================================
            CHARACTER PROFILE HERO & DOSSIER OVERVIEW
            ========================================================================= */}
        <div className="glass-panel rounded-2xl p-6 sm:p-10 shadow-card border border-primary/30 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Large Cinematic Character Portrait */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl group border border-primary/40">
              <Image
                src={character.portraitImage}
                alt={character.name}
                fill
                priority
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              <div className="absolute top-4 left-4 px-3 py-1 rounded bg-black/80 backdrop-blur-md border border-secondary/40 font-label text-xs uppercase text-secondary font-bold">
                {character.category}
              </div>
            </div>
          </div>

          {/* Character Executive Dossier */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div className="space-y-2">
              <span className="font-label text-xs text-secondary uppercase tracking-widest font-semibold">
                {character.executiveRole}
              </span>
              <h1 className="font-display text-4xl sm:text-6xl text-editorial-light leading-tight">
                {character.name}
              </h1>
              <blockquote className="font-body text-base italic text-primary border-l-2 border-primary/60 pl-4 py-1 leading-relaxed">
                &ldquo;{character.quote}&rdquo;
              </blockquote>
              <p className="font-body text-sm sm:text-base text-editorial-secondary leading-relaxed pt-2">
                {character.description}
              </p>
            </div>

            {/* Strategic Philosophy */}
            <div className="p-4 rounded-xl bg-surface-container border border-jungle-border space-y-1">
              <span className="font-label text-xs uppercase tracking-widest text-primary font-bold">
                Strategic Leadership Philosophy:
              </span>
              <p className="font-body text-xs sm:text-sm text-editorial-light leading-relaxed">
                {character.strategicPhilosophy}
              </p>
            </div>

            {/* Transformation KPI & Risk Mitigation */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-surface-base border border-jungle-border">
                <span className="font-label text-[10px] text-editorial-muted uppercase tracking-wider block">
                  Primary Transformation Target:
                </span>
                <p className="font-display text-lg text-secondary font-semibold mt-1">
                  {character.transformationMetrics.target}
                </p>
              </div>
              <div className="p-4 rounded-xl bg-surface-base border border-jungle-border">
                <span className="font-label text-[10px] text-editorial-muted uppercase tracking-wider block">
                  Critical Enterprise Risk Mitigated:
                </span>
                <p className="font-display text-lg text-primary font-semibold mt-1">
                  {character.riskMitigated}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            KEY RESPONSIBILITIES & ALGORITHMIC STRENGTHS
            ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Key Responsibilities */}
          <div className="glass-panel rounded-2xl p-6 sm:p-8 space-y-4 shadow-card">
            <h3 className="font-display text-2xl text-editorial-light">
              Executive Remits & Governance
            </h3>
            <ul className="space-y-3">
              {character.keyResponsibilities.map((resp) => (
                <li key={resp} className="flex items-start gap-3 text-xs sm:text-sm font-body text-editorial-secondary">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Algorithmic Strengths */}
          <div className="glass-panel rounded-2xl p-6 sm:p-8 space-y-4 shadow-card">
            <h3 className="font-display text-2xl text-editorial-light">
              Algorithmic Intelligence Profile
            </h3>
            <ul className="space-y-3">
              {character.algorithmicStrengths.map((str) => (
                <li key={str} className="flex items-start gap-3 text-xs sm:text-sm font-body text-editorial-secondary">
                  <Sparkles className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                  <span>{str}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* =========================================================================
            RELATED MEDIA ECOSYSTEM: PODCASTS, COMICS & SAFARI CHAPTERS
            ========================================================================= */}
        <div className="space-y-6">
          <h2 className="font-display text-2xl sm:text-3xl text-editorial-light">
            Media Appearances Across The AI Jungle
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Podcast link */}
            {relatedEpisodes.length > 0 && (
              <div className="glass-panel rounded-xl p-5 space-y-3 flex flex-col justify-between">
                <div>
                  <span className="font-label text-xs uppercase text-secondary font-semibold flex items-center gap-1.5">
                    <Radio className="w-3.5 h-3.5" />
                    Companion Podcast
                  </span>
                  <h4 className="font-display text-base text-editorial-light mt-2">
                    {relatedEpisodes[0].title}
                  </h4>
                  <p className="font-body text-xs text-editorial-muted line-clamp-2 mt-1">
                    {relatedEpisodes[0].description}
                  </p>
                </div>
                <Link
                  href={`/podcast/${relatedEpisodes[0].slug}`}
                  className="font-label text-xs uppercase tracking-wider text-primary hover:underline flex items-center gap-1 pt-2"
                >
                  <span>Listen Transmission</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            )}

            {/* Comic appearance */}
            {relatedComics.length > 0 && (
              <div className="glass-panel rounded-xl p-5 space-y-3 flex flex-col justify-between">
                <div>
                  <span className="font-label text-xs uppercase text-primary font-semibold flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5" />
                    Graphic Novel Issue
                  </span>
                  <h4 className="font-display text-base text-editorial-light mt-2">
                    {relatedComics[0].title}
                  </h4>
                  <p className="font-body text-xs text-editorial-muted line-clamp-2 mt-1">
                    {relatedComics[0].synopsis}
                  </p>
                </div>
                <Link
                  href={`/reader/${relatedComics[0].slug}`}
                  className="font-label text-xs uppercase tracking-wider text-primary hover:underline flex items-center gap-1 pt-2"
                >
                  <span>Open Comic Reader</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            )}

            {/* Safari Roadmap link */}
            {relatedChapters.length > 0 && (
              <div className="glass-panel rounded-xl p-5 space-y-3 flex flex-col justify-between">
                <div>
                  <span className="font-label text-xs uppercase text-secondary font-semibold flex items-center gap-1.5">
                    <Compass className="w-3.5 h-3.5" />
                    Safari Roadmap Milestone
                  </span>
                  <h4 className="font-display text-base text-editorial-light mt-2">
                    Chapter {relatedChapters[0].number}: {relatedChapters[0].title}
                  </h4>
                  <p className="font-body text-xs text-editorial-muted line-clamp-2 mt-1">
                    {relatedChapters[0].subtitle}
                  </p>
                </div>
                <Link
                  href="/safari"
                  className="font-label text-xs uppercase tracking-wider text-primary hover:underline flex items-center gap-1 pt-2"
                >
                  <span>View Safari Timeline</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Back to Council */}
        <div className="pt-6 border-t border-jungle-border/50 flex justify-between items-center">
          <Link
            href="/characters"
            className="inline-flex items-center gap-2 font-label text-xs uppercase tracking-wider text-editorial-secondary hover:text-primary transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Return to Council of 10</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

