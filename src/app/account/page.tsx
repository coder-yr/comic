"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useUserStore } from "@/store/useUserStore";
import {
  User,
  Crown,
  Shield,
  Settings,
  Flame,
  BookOpen,
  Radio,
  Compass,
  CheckCircle2,
  RefreshCw,
  Eye,
  Type,
  Volume2,
  ArrowRight,
  LogOut,
  Building2,
} from "lucide-react";

export default function AccountPage() {
  const membershipTier = useUserStore((s) => s.membershipTier);
  const setMembershipTier = useUserStore((s) => s.setMembershipTier);
  const highContrast = useUserStore((s) => s.highContrast);
  const toggleHighContrast = useUserStore((s) => s.toggleHighContrast);
  const fontSize = useUserStore((s) => s.fontSize);
  const setFontSize = useUserStore((s) => s.setFontSize);

  const [resetSuccess, setResetSuccess] = useState(false);

  const handleResetDemo = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("ai_jungle_user_state_v1");
      setResetSuccess(true);
      setTimeout(() => {
        window.location.reload();
      }, 1200);
    }
  };

  return (
    <div className="w-full bg-background min-h-screen py-10 space-y-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* =========================================================================
            EXECUTIVE PROFILE DOSSIER HEADER
            ========================================================================= */}
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-primary/30 shadow-card flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8">
          {/* Avatar Crest */}
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-gradient-to-br from-[#111914] to-[#1a2620] border-2 border-primary/50 flex items-center justify-center shadow-[0_0_25px_rgba(232,182,63,0.25)] shrink-0">
            <Crown className="w-12 h-12 text-primary" />
            <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-secondary border-2 border-background flex items-center justify-center">
              <span className="w-2 h-2 rounded-full bg-background animate-pulse" />
            </span>
          </div>

          {/* Details */}
          <div className="flex-1 text-center sm:text-left space-y-3">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5">
              <span className="px-3 py-0.5 rounded-full bg-primary/15 border border-primary/40 font-label text-[10px] uppercase tracking-widest text-primary font-bold">
                Executive Member
              </span>
              <span className="px-3 py-0.5 rounded-full bg-surface-container border border-jungle-border font-mono text-[10px] uppercase tracking-wider text-editorial-secondary">
                SYNDICATE ID: AJ-9481-X
              </span>
            </div>

            <div className="space-y-1">
              <h1 className="font-display font-medium text-2xl sm:text-3xl text-editorial-light">
                Dr. Sovereign Executive
              </h1>
              <p className="font-body text-xs sm:text-sm text-editorial-secondary">
                Managing Director of Enterprise AI Systems • Fortune 100 Syndicate
              </p>
            </div>

            <div className="pt-1 flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs font-label uppercase tracking-wider text-editorial-muted">
              <span className="flex items-center gap-1.5 text-primary">
                <Crown className="w-3.5 h-3.5 text-primary" />
                Active Tier: {membershipTier}
              </span>
              <span className="text-white/20">|</span>
              <span className="flex items-center gap-1.5 text-secondary">
                <Flame className="w-3.5 h-3.5 text-secondary" />
                Sovereign Affinity: The Sovereign Lion
              </span>
            </div>
          </div>

          {/* Quick Action */}
          <div className="shrink-0 pt-2 sm:pt-0">
            <Link
              href="/membership"
              className="px-4 py-2.5 rounded-xl bg-primary text-background font-label text-xs uppercase tracking-wider font-bold shadow-gold hover:shadow-gold-lg transition-all flex items-center gap-1.5 hover:scale-105 active:scale-95"
            >
              <span>Manage Tier</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* =========================================================================
            TRANSFORMATION & READING METRICS SUMMARY
            ========================================================================= */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-surface-container/60 border border-jungle-border/70 text-center space-y-1">
            <span className="text-[10px] font-label uppercase tracking-widest text-editorial-muted block">
              Curriculum Mastered
            </span>
            <span className="font-display font-medium text-2xl sm:text-3xl text-primary">
              8 / 13
            </span>
            <span className="text-[10px] font-body text-editorial-secondary block">
              Safari Chapters
            </span>
          </div>

          <div className="p-5 rounded-2xl bg-surface-container/60 border border-jungle-border/70 text-center space-y-1">
            <span className="text-[10px] font-label uppercase tracking-widest text-editorial-muted block">
              Graphic Issues Read
            </span>
            <span className="font-display font-medium text-2xl sm:text-3xl text-secondary">
              5 / 6
            </span>
            <span className="text-[10px] font-body text-editorial-secondary block">
              Omnibus Vol. I
            </span>
          </div>

          <div className="p-5 rounded-2xl bg-surface-container/60 border border-jungle-border/70 text-center space-y-1">
            <span className="text-[10px] font-label uppercase tracking-widest text-editorial-muted block">
              Audio Transmissions
            </span>
            <span className="font-display font-medium text-2xl sm:text-3xl text-editorial-light">
              18
            </span>
            <span className="text-[10px] font-body text-editorial-secondary block">
              Broadcasts Logged
            </span>
          </div>

          <div className="p-5 rounded-2xl bg-surface-container/60 border border-jungle-border/70 text-center space-y-1">
            <span className="text-[10px] font-label uppercase tracking-widest text-editorial-muted block">
              Vector Hygiene
            </span>
            <span className="font-display font-medium text-2xl sm:text-3xl text-primary font-bold">
              99.4%
            </span>
            <span className="text-[10px] font-body text-editorial-secondary block">
              Zero-Hallucination Score
            </span>
          </div>
        </div>

        {/* =========================================================================
            READING & DISPLAY PREFERENCES
            ========================================================================= */}
        <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-jungle-border/70 space-y-6">
          <div className="flex items-center gap-2 border-b border-jungle-border/50 pb-4">
            <Settings className="w-5 h-5 text-primary" />
            <h2 className="font-display font-medium text-xl text-editorial-light">
              Display &amp; Sensory Preferences
            </h2>
          </div>

          <div className="space-y-4">
            {/* High Contrast */}
            <div className="flex items-center justify-between p-4 rounded-xl bg-surface-container/50 border border-jungle-border/50">
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <Eye className="w-4 h-4 text-editorial-light" />
                  <span className="font-label text-sm uppercase tracking-wider text-editorial-light font-semibold">
                    Cinematic High Contrast
                  </span>
                </div>
                <p className="font-body text-xs text-editorial-secondary">
                  Increases border luminous definition and comic panel rim intensity.
                </p>
              </div>

              <button
                onClick={toggleHighContrast}
                className={`relative w-12 h-6 rounded-full transition-colors ${
                  highContrast ? "bg-primary" : "bg-surface-container border border-jungle-border"
                }`}
              >
                <span
                  className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-background transition-transform ${
                    highContrast ? "translate-x-6" : ""
                  }`}
                />
              </button>
            </div>

            {/* Reading Typography Sizing */}
            <div className="flex items-center justify-between p-4 rounded-xl bg-surface-container/50 border border-jungle-border/50">
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <Type className="w-4 h-4 text-editorial-light" />
                  <span className="font-label text-sm uppercase tracking-wider text-editorial-light font-semibold">
                    Editorial Font Scale
                  </span>
                </div>
                <p className="font-body text-xs text-editorial-secondary">
                  Adjust typography proportions across graphic novel debriefs and essays.
                </p>
              </div>

              <div className="flex items-center gap-2 bg-surface-container p-1 rounded-lg border border-jungle-border">
                <button
                  onClick={() => setFontSize("standard")}
                  className={`px-3 py-1 rounded font-label text-xs uppercase tracking-wider transition-all ${
                    fontSize === "standard"
                      ? "bg-primary text-background font-bold"
                      : "text-editorial-muted hover:text-editorial-light"
                  }`}
                >
                  Standard
                </button>
                <button
                  onClick={() => setFontSize("large")}
                  className={`px-3 py-1 rounded font-label text-xs uppercase tracking-wider transition-all ${
                    fontSize === "large"
                      ? "bg-primary text-background font-bold"
                      : "text-editorial-muted hover:text-editorial-light"
                  }`}
                >
                  Expanded
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            PROTOTYPE SESSION CONTROLS & RESET
            ========================================================================= */}
        <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-red-500/20 bg-red-950/5 space-y-4">
          <div className="space-y-1">
            <h3 className="font-display font-medium text-lg text-editorial-light">
              Reset Demonstration State
            </h3>
            <p className="font-body text-xs text-editorial-secondary leading-relaxed max-w-xl">
              Restore initial prototype mock defaults, wipe local reading and listening history, and clear search telemetry.
            </p>
          </div>

          {resetSuccess ? (
            <div className="inline-flex items-center gap-2 text-xs font-label uppercase tracking-wider text-secondary">
              <CheckCircle2 className="w-4 h-4 text-secondary" />
              <span>Session restored. Reloading experience...</span>
            </div>
          ) : (
            <button
              onClick={handleResetDemo}
              className="px-4 py-2.5 rounded-xl bg-surface-container border border-red-500/40 text-red-400 hover:bg-red-500/10 transition-all font-label text-xs uppercase tracking-wider font-semibold flex items-center gap-2"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Reset Demo Cache &amp; Reload</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

