"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { CHARACTERS, Character } from "@/data/characters";
import { BioluminescentParticles } from "@/components/effects/BioluminescentParticles";
import { InteractiveHoloCard } from "@/components/effects/InteractiveHoloCard";
import {
  Users,
  Shield,
  Sparkles,
  ArrowRight,
  ChevronRight,
  Activity,
  CheckCircle2,
  Compass,
  Radio,
  BookOpen,
} from "lucide-react";

const CATEGORIES = [
  "All Council",
  "Leadership",
  "Data & Operations",
  "Governance & Security",
  "Innovation & Growth",
];

export default function CharactersCouncilPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Council");
  const [quizSelection, setQuizSelection] = useState<string>("strategy");

  const filteredCharacters = CHARACTERS.filter((char) => {
    if (selectedCategory === "All Council") return true;
    return char.category === selectedCategory;
  });

  return (
    <div className="w-full bg-background min-h-screen py-10 space-y-16 relative overflow-hidden">
      <BioluminescentParticles count={40} className="z-0 opacity-60" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 z-10">
        {/* =========================================================================
            COUNCIL HERO & TELEMETRY MATRIX
            ========================================================================= */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/15 text-secondary font-label text-xs uppercase tracking-widest font-semibold border border-secondary/20">
            <Users className="w-3.5 h-3.5" />
            The Sovereign Executive C-Suite
          </div>
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl text-editorial-light tracking-tight">
            The 10 Animal Archetypes of Enterprise AI
          </h1>
          <p className="font-body text-base text-editorial-secondary max-w-3xl leading-relaxed">
            In The AI Jungle, corporate transformation roles are personified by 10 sovereign animal archetypes. Each character represents a vital capability required to build, govern, and scale autonomous artificial intelligence.
          </p>

          {/* Quick HUD Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 max-w-2xl">
            <div className="p-3.5 rounded-xl bg-surface-container/60 backdrop-blur-sm border border-jungle-border/60">
              <p className="font-display text-2xl font-bold text-primary">10</p>
              <p className="font-label text-[10px] text-editorial-muted uppercase tracking-wider">
                Council Archetypes
              </p>
            </div>
            <div className="p-3.5 rounded-xl bg-surface-container/60 backdrop-blur-sm border border-jungle-border/60">
              <p className="font-display text-2xl font-bold text-secondary">13</p>
              <p className="font-label text-[10px] text-editorial-muted uppercase tracking-wider">
                Safari Chapters
              </p>
            </div>
            <div className="p-3.5 rounded-xl bg-surface-container/60 backdrop-blur-sm border border-jungle-border/60">
              <p className="font-display text-2xl font-bold text-primary">100%</p>
              <p className="font-label text-[10px] text-editorial-muted uppercase tracking-wider">
                Deterministic Audit
              </p>
            </div>
            <div className="p-3.5 rounded-xl bg-surface-container/60 backdrop-blur-sm border border-jungle-border/60">
              <p className="font-display text-2xl font-bold text-secondary">0.0%</p>
              <p className="font-label text-[10px] text-editorial-muted uppercase tracking-wider">
                Hallucination Gate
              </p>
            </div>
          </div>
        </div>

        {/* =========================================================================
            CATEGORY FILTERS RIBBON
            ========================================================================= */}
        <div className="flex flex-wrap items-center gap-2 py-4 border-y border-jungle-border/50">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-lg font-label text-xs uppercase tracking-wider transition-all ${
                selectedCategory === cat
                  ? "bg-primary text-background font-bold shadow-gold hover:scale-105"
                  : "bg-surface-container text-editorial-secondary hover:text-editorial-light hover:bg-surface-container-high"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* =========================================================================
            10 CHARACTER DOSSIER CARDS GRID (PRIMARY STITCH SCREEN 02 DESIGN)
            ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCharacters.map((char) => (
            <InteractiveHoloCard
              key={char.id}
              glowColor="gold"
              className="glass-panel rounded-2xl overflow-hidden flex flex-col justify-between group shadow-card"
            >
              <div>
                {/* Character Portrait */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface-container">
                  <Image
                    src={char.portraitImage}
                    alt={char.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-black/80 backdrop-blur-md border border-secondary/30 font-label text-[10px] uppercase text-secondary font-bold">
                    {char.executiveRole.split("&")[0]}
                  </div>
                  <div className="absolute bottom-3 left-4 right-4">
                    <h3 className="font-display text-2xl text-editorial-light group-hover:text-primary transition-colors">
                      {char.name}
                    </h3>
                  </div>
                </div>

                {/* Content Dossier */}
                <div className="p-6 space-y-4">
                  {/* Quote */}
                  <blockquote className="font-body text-xs italic text-editorial-light border-l-2 border-primary/50 pl-3 leading-relaxed">
                    &ldquo;{char.quote}&rdquo;
                  </blockquote>

                  {/* Description */}
                  <p className="font-body text-xs text-editorial-secondary leading-relaxed line-clamp-3">
                    {char.description}
                  </p>

                  {/* Algorithmic Strengths List */}
                  <div className="space-y-1.5 pt-2">
                    <span className="font-label text-[10px] uppercase tracking-widest text-primary font-semibold block">
                      Core Algorithmic Strengths:
                    </span>
                    <ul className="space-y-1 text-xs font-body text-editorial-secondary">
                      {char.algorithmicStrengths.map((str) => (
                        <li key={str} className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                          <span>{str}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* KPI Impact */}
                  <div className="p-3 rounded-lg bg-surface-base border border-jungle-border/60 text-xs font-label">
                    <span className="text-editorial-muted uppercase text-[9px] block">
                      {char.transformationMetrics.kpi}:
                    </span>
                    <span className="text-secondary font-semibold">
                      {char.transformationMetrics.target}
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-6 pt-0 border-t border-jungle-border/40 mt-4 flex items-center justify-between">
                <span className="font-label text-[10px] uppercase text-editorial-muted">
                  {char.riskMitigated.split("&")[0]}
                </span>
                <Link
                  href={`/characters/${char.slug}`}
                  className="shimmer-card inline-flex items-center gap-1 px-4 py-2 rounded-lg bg-primary text-background font-label text-xs uppercase font-bold shadow-gold hover:bg-primary-fixed transition-all hover:scale-105 active:scale-95"
                >
                  <span>Full Profile</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </InteractiveHoloCard>
          ))}
        </div>

        {/* =========================================================================
            COUNCIL COMPARISON MATRIX (EXECUTIVE DIRECTORY TABLE)
            ========================================================================= */}
        <section id="matrix" className="space-y-6 pt-8">
          <div className="space-y-2">
            <h2 className="font-display text-3xl text-editorial-light">
              Council Comparison Matrix
            </h2>
            <p className="font-body text-sm text-editorial-secondary">
              Strategic cross-reference of the 10 animal archetypes, corporate remits, transformation targets, and algorithmic defense postures.
            </p>
          </div>

          <div className="glass-panel rounded-2xl overflow-hidden shadow-card border border-jungle-border overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs font-body">
              <thead>
                <tr className="border-b border-jungle-border bg-surface-container font-label uppercase text-[10px] tracking-wider text-primary">
                  <th className="p-4">Archetype</th>
                  <th className="p-4">Executive Role</th>
                  <th className="p-4">Algorithmic Focus</th>
                  <th className="p-4">Primary KPI Metric</th>
                  <th className="p-4">Risk Mitigated</th>
                  <th className="p-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-jungle-border/40 text-editorial-secondary">
                {CHARACTERS.map((char) => (
                  <tr
                    key={char.id}
                    className="hover:bg-surface-container/50 transition-colors"
                  >
                    <td className="p-4 font-display text-sm text-editorial-light font-medium">
                      {char.name}
                    </td>
                    <td className="p-4 font-label text-[11px] text-secondary">
                      {char.executiveRole}
                    </td>
                    <td className="p-4">{char.algorithmicStrengths[0]}</td>
                    <td className="p-4 font-semibold text-primary">
                      {char.transformationMetrics.target}
                    </td>
                    <td className="p-4 text-editorial-muted">{char.riskMitigated}</td>
                    <td className="p-4 text-right">
                      <Link
                        href={`/characters/${char.slug}`}
                        className="text-primary hover:underline font-label uppercase text-[10px]"
                      >
                        Dossier →
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* =========================================================================
            INTERACTIVE: "DISCOVER WHICH ARCHETYPE LEADS YOUR TEAM"
            ========================================================================= */}
        <section id="discover" className="glass-panel rounded-2xl p-6 sm:p-10 border border-primary/30 space-y-6 shadow-card">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/15 text-primary font-label text-xs uppercase tracking-widest font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              Organizational Diagnosis
            </div>
            <h2 className="font-display text-3xl text-editorial-light">
              Discover Which Archetype Leads Your Team
            </h2>
            <p className="font-body text-sm text-editorial-secondary max-w-2xl">
              Select your organization&apos;s most urgent transformation bottleneck to reveal the matching animal leader and strategic blueprint.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button
              type="button"
              onClick={() => setQuizSelection("strategy")}
              className={`p-4 rounded-xl border text-left transition-all ${
                quizSelection === "strategy"
                  ? "bg-surface-container-high border-primary text-editorial-light shadow-gold"
                  : "bg-surface-container border-jungle-border text-editorial-secondary hover:border-primary/40"
              }`}
            >
              <p className="font-label text-xs uppercase text-primary font-bold mb-1">
                Challenge A
              </p>
              <h4 className="font-display text-base text-editorial-light mb-1">
                Vendor Lock-in & Strategic Paralysis
              </h4>
              <p className="font-body text-xs text-editorial-muted">
                Paying millions for commodity API subscriptions without building proprietary weights.
              </p>
            </button>

            <button
              type="button"
              onClick={() => setQuizSelection("data")}
              className={`p-4 rounded-xl border text-left transition-all ${
                quizSelection === "data"
                  ? "bg-surface-container-high border-secondary text-editorial-light shadow-teal"
                  : "bg-surface-container border-jungle-border text-editorial-secondary hover:border-secondary/40"
              }`}
            >
              <p className="font-label text-xs uppercase text-secondary font-bold mb-1">
                Challenge B
              </p>
              <h4 className="font-display text-base text-editorial-light mb-1">
                Poisoned Vector Lakes & Hallucinations
              </h4>
              <p className="font-body text-xs text-editorial-muted">
                Legacy databases with dirty schemas causing downstream agents to hallucinate.
              </p>
            </button>

            <button
              type="button"
              onClick={() => setQuizSelection("ops")}
              className={`p-4 rounded-xl border text-left transition-all ${
                quizSelection === "ops"
                  ? "bg-surface-container-high border-primary text-editorial-light shadow-gold"
                  : "bg-surface-container border-jungle-border text-editorial-secondary hover:border-primary/40"
              }`}
            >
              <p className="font-label text-xs uppercase text-primary font-bold mb-1">
                Challenge C
              </p>
              <h4 className="font-display text-base text-editorial-light mb-1">
                Slow Prototyping & Stagnant MLOps
              </h4>
              <p className="font-body text-xs text-editorial-muted">
                Taking 6 months to deploy a model while agile competitors ship daily canary releases.
              </p>
            </button>
          </div>

          {/* Dynamic Diagnosis Result with AnimatePresence */}
          <div className="p-6 rounded-xl bg-surface-base border border-jungle-border flex flex-col sm:flex-row items-center justify-between gap-6 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={quizSelection}
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 15 }}
                transition={{ duration: 0.3 }}
                className="space-y-1 w-full"
              >
                <span className="font-label text-xs uppercase tracking-widest text-secondary font-semibold">
                  Recommended Transformation Leader:
                </span>
                <h3 className="font-display text-2xl text-editorial-light">
                  {quizSelection === "strategy" && "The Sovereign Lion (CEO & Chief Strategist)"}
                  {quizSelection === "data" && "The Great Elephant (Chief Data Officer)"}
                  {quizSelection === "ops" && "The Agile Wolf (COO & MLOps Leader)"}
                </h3>
                <p className="font-body text-xs text-editorial-secondary max-w-xl">
                  {quizSelection === "strategy" &&
                    "Mandate: Reclaim sovereign compute rights, establish board-level AI moats, and eliminate third-party dependency."}
                  {quizSelection === "data" &&
                    "Mandate: Purge legacy siloes, build pristine 2M-token context caches, and implement the Zero-Hallucination Gate."}
                  {quizSelection === "ops" &&
                    "Mandate: Form synchronized deployment squads, containerize inference nodes, and implement continuous CI/CD evaluation."}
                </p>
              </motion.div>
            </AnimatePresence>

            <Link
              href={
                quizSelection === "strategy"
                  ? "/characters/sovereign-lion"
                  : quizSelection === "data"
                  ? "/characters/the-elephant"
                  : "/characters/the-wolf"
              }
              className="shimmer-card inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-background font-label text-xs uppercase font-bold shadow-gold hover:bg-primary-fixed transition-all hover:scale-105 active:scale-95 flex-shrink-0"
            >
              <span>Examine Archetype Blueprint</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

