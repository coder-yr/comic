# THE AI JUNGLE — VISUAL DESIGN SYSTEM SPECIFICATION

## 1. Aesthetic Foundations: "Atmospheric Jungle Cinema"

The design system expresses the intersection of prestige graphic novel art direction and executive intelligence. It combines nocturnal forest shadows, brushed gold typography, and cybernetic teal data telemetry.

### Core Aesthetic Pillars
- **Primal Canopy Depth:** Ground surfaces rooted in deep obsidian and chlorophyl dark tones (`#080B09`, `#111412`), avoiding sterile flat blacks or generic SaaS blues.
- **Prestige Gilded Accents:** Warm metallic brushed gold surfaces and glowing borders (`#E8B63F`, `#D9A52E`, `#F7C048`) signaling authority, editorial dignity, and executive prestige.
- **Cybernetic Bioluminescence:** Sharp kinetic teal incisions (`#38C7B5`, `#4FDBC7`) reserved for live data streams, status indicators, and active computing states.
- **Translucent Glassmorphism:** Layered panels with subtle background blur (`backdrop-blur-xl`), fine perimeter hairline borders (`rgba(220, 176, 64, 0.22)`), and organic depth.

---

## 2. Color Palette & Design Tokens

### Backgrounds & Surfaces
```css
--bg-primary: #080B09;              /* Deep abyss canvas */
--bg-surface: #111412;              /* Foundational container */
--bg-surface-elevated: #18211C;     /* Elevated cards and trays */
--bg-surface-highest: #202820;      /* Modals, flyouts, and active pills */
--bg-glass: rgba(16, 22, 17, 0.75); /* Translucent glass containers */
```

### Prestige Gold Accents (Editorial & Focal)
```css
--gold-primary: #F7C048;            /* Primary brand gold */
--gold-container: #D9A52E;          /* Active button gradient start */
--gold-highlight: #FFD15A;          /* Hover states and glow points */
--gold-subtle: #C79528;             /* Subdued accents and active indicators */
--border-gold: rgba(220, 176, 64, 0.22); /* Hairline card perimeters */
```

### Cybernetic Teal (Telemetry & Technical Intelligence)
```css
--teal-primary: #4FDBC7;            /* Active data stream & indicators */
--teal-tech: #38C7B5;               /* Secondary accent & chips */
--teal-glow: rgba(79, 219, 199, 0.25); /* Glowing nodes and status pings */
--teal-container: #03B4A1;          /* Active secondary interactive elements */
```

### Editorial Typography Colors
```css
--text-primary: #F4F0E7;            /* Warm bone ivory for prolonged reading */
--text-secondary: #B6B4A8;          /* Lichen ash for subheadings and body */
--text-muted: #777D74;              /* Deep lichen for metadata and timestamps */
```

---

## 3. Typographic Hierarchy

| Role | Font Family | Tailwind Class | Desktop Size / Leading | Usage |
|---|---|---|---|---|
| **Display Hero** | Newsreader / Playfair Display | `font-display-lg` | 56px / 64px (`-0.02em`) | Homepage & Library Hero Declarations |
| **Headline XL** | Newsreader / Playfair Display | `font-headline-xl` | 40px / 48px (`-0.015em`) | Section Titles & Major Milestones |
| **Headline LG** | Newsreader / Playfair Display | `font-headline-lg` | 32px / 40px (`0em`) | Episode & Issue Titles |
| **Headline MD** | Newsreader / Playfair Display | `font-headline-md` | 24px / 32px (`0em`) | Card Headings & Dossier Names |
| **Headline SM** | Newsreader / Playfair Display | `font-headline-sm` | 20px / 28px (`0.005em`) | Modal Headers & Metric Labels |
| **Body LG** | Plus Jakarta Sans / Inter | `font-body-lg` | 18px / 28px (`0em`) | Lead Paragraphs & Synthesized Quotes |
| **Body MD** | Plus Jakarta Sans / Inter | `font-body-md` | 15px / 24px (`0.01em`) | Default Editorial Longform Text |
| **Body SM** | Plus Jakarta Sans / Inter | `font-body-sm` | 13px / 20px (`0.01em`) | Card Descriptions & Secondary Info |
| **Label LG** | Space Grotesk | `font-label-lg` | 14px / 20px (`0.06em`, uppercase) | Major Buttons & Category Filters |
| **Label MD** | Space Grotesk | `font-label-md` | 12px / 16px (`0.08em`, uppercase) | Tags, Pill Badges & Chapter Numbers |
| **Label SM** | Space Grotesk | `font-label-sm` | 10px / 14px (`0.1em`, uppercase) | KPI Overlines & Telemetry Readouts |

---

## 4. Elevation, Spacing & Layout Architecture

### Layer Architecture
- **Layer 0 (Canvas Base):** `#080B09` with ambient radial gradients (`primary/5` and `secondary/10` blurs).
- **Layer 1 (Recessed/Muted Tray):** `#111412` at 80% opacity with `backdrop-filter: blur(12px)`.
- **Layer 2 (Elevated Content Panels):** `#18211C` at 85% opacity, `backdrop-filter: blur(20px)`, 1px border `rgba(220, 176, 64, 0.22)`.
- **Layer 3 (Modals & Floating HUDs):** `#18211C` at 95% opacity, `backdrop-filter: blur(28px)`, box-shadow `0 24px 48px -12px rgba(0,0,0,0.8), 0 0 32px 0 rgba(217,165,46,0.1)`.

### Grid System
- **Desktop (1280px+):** 12-column grid, max content width `1440px`, 24px gutters, 48px margins.
- **Tablet (768px – 1279px):** 8-column grid, 20px gutters, 32px margins.
- **Mobile (< 768px):** 4-column grid, 16px gutters, 20px margins. Multi-column cards collapse to vertical stacks or kinetic touch-swipe reels.

---

## 5. Component Styling Standards

### Primary Gilded Action (CTA)
```html
<button class="inline-flex items-center justify-center px-6 py-2.5 rounded-lg bg-gradient-to-r from-[#D9A52E] to-[#F7C048] text-[#080B09] font-['Space_Grotesk'] font-semibold text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(247,192,72,0.3)] hover:shadow-[0_0_28px_rgba(247,192,72,0.5)] hover:brightness-110 transition-all duration-300">
  Button Label
</button>
```

### Secondary Cybernetic Outline Button
```html
<button class="inline-flex items-center justify-center px-6 py-2.5 rounded-lg border border-[#38C7B5]/40 text-[#4FDBC7] bg-[#18211C]/60 font-['Space_Grotesk'] font-medium text-xs uppercase tracking-wider shadow-[0_0_12px_rgba(79,219,199,0.15)] hover:border-[#38C7B5] hover:bg-[#38C7B5]/10 hover:shadow-[0_0_20px_rgba(79,219,199,0.3)] transition-all duration-300">
  Button Label
</button>
```

### Live Telemetry Status Pill
```html
<div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#18211C] border border-[#38C7B5]/30 text-[#4FDBC7] font-['Space_Grotesk'] text-[10px] font-semibold tracking-widest uppercase">
  <span class="w-1.5 h-1.5 rounded-full bg-[#4FDBC7] animate-pulse"></span>
  Canonical Enterprise Curriculum
</div>
```

