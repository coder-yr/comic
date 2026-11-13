"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useUserStore } from "@/store/useUserStore";
import { BioluminescentParticles } from "@/components/effects/BioluminescentParticles";
import {
  Crown,
  Check,
  Sparkles,
  Shield,
  Zap,
  Flame,
  ArrowRight,
  BookOpen,
  Radio,
  Compass,
  CheckCircle2,
  HelpCircle,
  Building2,
} from "lucide-react";

interface PlanTier {
  id: "Free" | "Executive Member" | "Enterprise Council";
  name: string;
  badge: string;
  priceMonthly: string;
  priceAnnual: string;
  description: string;
  features: string[];
  recommended?: boolean;
  ctaText: string;
}

const TIERS: PlanTier[] = [
  {
    id: "Free",
    name: "Seeker Tier",
    badge: "PUBLIC ACCESS",
    priceMonthly: "$0",
    priceAnnual: "$0",
    description: "Foundational broadcast access to public transmissions and prologue graphic chapters.",
    features: [
      "Access to all 28 podcast public audio feeds",
      "Preview reading access to Comic Issue 00",
      "Safari Journey: Chapter 00 & 01 access",
      "Standard audio streaming (128kbps)",
      "Public Council of 10 archetype overviews",
    ],
    ctaText: "Activate Seeker Tier",
  },
  {
    id: "Executive Member",
    name: "Pride Leader",
    badge: "EXECUTIVE CANON",
    priceMonthly: "$29",
    priceAnnual: "$290",
    description: "Unrestricted access to the entire Graphic Novel canon, complete 13-Chapter Safari, and master debriefs.",
    features: [
      "Full access to all 6 Graphic Novel issues in luxury 4-clip reader",
      "Unrestricted 13-Chapter Safari Journey curriculum & blueprints",
      "High-fidelity lossless audio streaming + executive show notes",
      "Offline reading cache & infinite library bookmarks",
      "Complete Council Comparison Matrix & operational archetypes",
      "Monthly Executive Strategy Dispatch directly to your inbox",
    ],
    recommended: true,
    ctaText: "Activate Executive Tier",
  },
  {
    id: "Enterprise Council",
    name: "Sovereign Tier",
    badge: "ENTERPRISE ADVISORY",
    priceMonthly: "$499",
    priceAnnual: "$4,800",
    description: "Designed for corporate boards, executive leadership teams, and enterprise AI transformation architects.",
    features: [
      "Everything in Executive Member tier for unlimited team seats",
      "Full Zero-Hallucination Governance Framework & templates",
      "Custom vector audit blueprints for legacy enterprise migration",
      "Quarterly strategy roundtable transcript & executive briefings",
      "Direct Q&A prioritization for Dr. Amit Khandelwal transmissions",
      "Custom co-branded graphic novel case studies (on request)",
    ],
    ctaText: "Activate Sovereign Tier",
  },
];

export default function MembershipPage() {
  const currentTier = useUserStore((s) => s.membershipTier);
  const setMembershipTier = useUserStore((s) => s.setMembershipTier);

  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("annual");
  const [activatedNotice, setActivatedNotice] = useState<string | null>(null);

  const handleActivate = (tierId: "Free" | "Executive Member" | "Enterprise Council") => {
    setMembershipTier(tierId);
    setActivatedNotice(tierId);
    setTimeout(() => {
      setActivatedNotice(null);
    }, 3500);
  };

  return (
    <div className="w-full bg-background min-h-screen py-10 space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* =========================================================================
            MEMBERSHIP HERO HEADER
            ========================================================================= */}
        <div className="text-center max-w-3xl mx-auto space-y-5 relative">
          <BioluminescentParticles count={15} className="z-0 opacity-40" />
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container border border-primary/30 text-primary font-label text-xs uppercase tracking-widest font-semibold">
            <Crown className="w-3.5 h-3.5 text-primary" />
            <span>The AI Jungle Sovereign Access</span>
          </div>
          <h1 className="font-display font-medium text-3xl sm:text-4xl lg:text-5xl text-editorial-light tracking-tight leading-tight">
            Ascend to the Sovereign Pride
          </h1>
          <p className="font-body text-base text-editorial-secondary leading-relaxed">
            Select your executive tier to unlock complete graphic novel issues, high-definition transmissions, and the full 13-chapter Safari transformation curriculum.
          </p>

          {/* Billing Cycle Switcher */}
          <div className="flex items-center justify-center gap-3 pt-2">
            <div className="p-1 rounded-xl bg-surface-container/80 border border-jungle-border/80 flex items-center">
              <button
                onClick={() => setBillingCycle("monthly")}
                className={`px-4 py-1.5 rounded-lg font-label text-xs uppercase tracking-wider font-semibold transition-all ${
                  billingCycle === "monthly"
                    ? "bg-primary text-background shadow-gold"
                    : "text-editorial-muted hover:text-editorial-light"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle("annual")}
                className={`px-4 py-1.5 rounded-lg font-label text-xs uppercase tracking-wider font-semibold transition-all flex items-center gap-1.5 ${
                  billingCycle === "annual"
                    ? "bg-primary text-background shadow-gold"
                    : "text-editorial-muted hover:text-editorial-light"
                }`}
              >
                <span>Annual</span>
                <span className="px-1.5 py-0.2 rounded bg-black/30 text-[9px] font-bold text-background">
                  Save 20%
                </span>
              </button>
            </div>
          </div>

          {/* Activation Toast Notification */}
          {activatedNotice && (
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-secondary/15 border border-secondary/40 text-secondary font-label text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(56,199,181,0.25)] animate-fade-in">
              <CheckCircle2 className="w-4 h-4 text-secondary" />
              <span>Demonstration Tier Activated: {activatedNotice}</span>
            </div>
          )}
        </div>

        {/* =========================================================================
            TIER COMPARISON CARDS
            ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {TIERS.map((tier) => {
            const isCurrent = currentTier === tier.id;
            return (
              <div
                key={tier.id}
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                  tier.recommended
                    ? "glass-panel border-2 border-primary shadow-[0_0_35px_rgba(232,182,63,0.15)] bg-surface-container/80"
                    : "glass-panel border border-jungle-border/80 hover:border-primary/40 bg-surface-container/50"
                }`}
              >
                {tier.recommended && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-primary-fixed-dim via-primary to-primary-fixed text-background font-label text-[10px] uppercase tracking-widest font-bold shadow-gold">
                    Most Popular For Executives
                  </div>
                )}

                <div className="space-y-6">
                  {/* Tier Header */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-label text-xs uppercase tracking-widest text-primary font-semibold">
                        {tier.badge}
                      </span>
                      {isCurrent && (
                        <span className="px-2.5 py-0.5 rounded-full bg-secondary/15 border border-secondary/40 text-secondary font-label text-[10px] uppercase tracking-widest font-bold">
                          Active Plan
                        </span>
                      )}
                    </div>
                    <h2 className="font-display font-medium text-2xl text-editorial-light">
                      {tier.name}
                    </h2>
                    <p className="font-body text-xs text-editorial-secondary leading-relaxed min-h-[36px]">
                      {tier.description}
                    </p>
                  </div>

                  {/* Price display */}
                  <div className="pt-2 border-t border-jungle-border/50">
                    <div className="flex items-baseline gap-1">
                      <span className="font-display font-medium text-4xl text-editorial-light">
                        {billingCycle === "annual" ? tier.priceAnnual : tier.priceMonthly}
                      </span>
                      <span className="font-body text-xs text-editorial-muted">
                        /{billingCycle === "annual" ? "year" : "month"}
                      </span>
                    </div>
                    {billingCycle === "annual" && tier.id !== "Free" && (
                      <span className="text-[10px] font-label uppercase tracking-widest text-secondary block mt-1">
                        Billed annually (includes 2 months complimentary)
                      </span>
                    )}
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 pt-4 border-t border-jungle-border/50">
                    <span className="text-[10px] font-label uppercase tracking-widest text-editorial-muted block">
                      Included Capabilities:
                    </span>
                    <ul className="space-y-2.5">
                      {tier.features.map((feat, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2.5 text-xs font-body text-editorial-secondary"
                        >
                          <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Activation Action Button */}
                <div className="pt-8">
                  <button
                    onClick={() => handleActivate(tier.id)}
                    className={`w-full py-3 px-4 rounded-xl font-label text-xs uppercase tracking-wider font-bold transition-all flex items-center justify-center gap-2 ${
                      isCurrent
                        ? "bg-secondary/20 border border-secondary text-secondary shadow-[0_0_15px_rgba(56,199,181,0.2)]"
                        : tier.recommended
                        ? "bg-gradient-to-r from-primary-fixed-dim via-primary to-primary-fixed text-background shadow-gold hover:shadow-gold-lg hover:scale-105 active:scale-95"
                        : "bg-surface-container border border-primary/30 text-editorial-light hover:border-primary hover:text-primary transition-all"
                    }`}
                  >
                    <span>{isCurrent ? "Current Active Plan" : tier.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <p className="text-[10px] font-label text-center text-editorial-muted uppercase tracking-wider mt-2">
                    Interactive Demonstration • Instant Access
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* =========================================================================
            ENTERPRISE COUNCIL INQUIRY BOX
            ========================================================================= */}
        <div className="p-8 sm:p-10 rounded-3xl glass-panel border border-primary/30 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-3">
            <div className="inline-flex items-center gap-2 text-primary font-label text-xs uppercase tracking-widest font-semibold">
              <Building2 className="w-4 h-4" />
              <span>Fortune 500 Enterprise Advisory</span>
            </div>
            <h3 className="font-display font-medium text-2xl sm:text-3xl text-editorial-light">
              Need Tailored Corporate Governance &amp; Custom Keynotes?
            </h3>
            <p className="font-body text-sm text-editorial-secondary leading-relaxed max-w-2xl">
              Dr. Amit Khandelwal personally consults select enterprises navigating multi-billion dollar AI transformations, sovereign infrastructure rollouts, and board-level risk audits.
            </p>
          </div>

          <div className="lg:col-span-4 flex justify-end">
            <Link
              href="/about#advisory"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-primary text-background font-label text-xs uppercase tracking-wider font-bold shadow-gold hover:shadow-gold-lg hover:scale-105 transition-all text-center"
            >
              Request Executive Advisory
            </Link>
          </div>
        </div>

        {/* =========================================================================
            MEMBERSHIP FAQ SECTION
            ========================================================================= */}
        <div className="space-y-8 pt-8 border-t border-jungle-border/50">
          <div className="text-center space-y-2">
            <span className="text-xs font-label uppercase tracking-widest text-primary font-semibold">
              Executive Guidance
            </span>
            <h2 className="font-display font-medium text-3xl text-editorial-light">
              Frequently Addressed Inquiries
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="p-6 rounded-2xl bg-surface-container/60 border border-jungle-border/60 space-y-2">
              <h4 className="font-display font-medium text-base text-editorial-light">
                How does the demonstration tier activation work?
              </h4>
              <p className="font-body text-xs text-editorial-secondary leading-relaxed">
                As a client-side prototype demonstration, clicking any &quot;Activate&quot; button immediately provisions that tier in your local session store, unlocking full reading access across all issues without payment credentials.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-surface-container/60 border border-jungle-border/60 space-y-2">
              <h4 className="font-display font-medium text-base text-editorial-light">
                Are comic issues downloadable for offline reading?
              </h4>
              <p className="font-body text-xs text-editorial-secondary leading-relaxed">
                Executive Member and Enterprise Council tiers store recently viewed comic pages in the browser cache, permitting smooth reading even in disconnected cabin environments.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-surface-container/60 border border-jungle-border/60 space-y-2">
              <h4 className="font-display font-medium text-base text-editorial-light">
                What makes The AI Jungle different from typical business books?
              </h4>
              <p className="font-body text-xs text-editorial-secondary leading-relaxed">
                The AI Jungle translates high-stakes executive transformation decisions into allegorical graphic novel storytelling and broadcast debates, avoiding dry corporate jargon while preserving rigorous engineering accuracy.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-surface-container/60 border border-jungle-border/60 space-y-2">
              <h4 className="font-display font-medium text-base text-editorial-light">
                Can we license the 13-Chapter Safari for internal corporate training?
              </h4>
              <p className="font-body text-xs text-editorial-secondary leading-relaxed">
                Yes. The Enterprise Council tier provides organizational site licenses, printable high-resolution debrief PDFs, and workshop slide decks for internal leadership retreats.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
