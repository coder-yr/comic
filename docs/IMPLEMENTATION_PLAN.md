# THE AI JUNGLE EXPERIENCE — IMPLEMENTATION PLAN

## Phase-by-Phase Roadmap

### PHASE 1: Project Initialization & Global Foundations
1. **Initialize Next.js 14+ App Router Project:**
   - Configure TypeScript (`tsconfig.json`), Tailwind CSS (`tailwind.config.ts`), PostCSS, and dependencies (`lucide-react`, `clsx`, `tailwind-merge`).
   - Configure Google Fonts (`Newsreader`, `Plus Jakarta Sans`, `Space Grotesk`) and Material Symbols.
2. **Asset Organization (`public/assets/`):**
   - Migrate and systematically index all exported Stitch assets into `public/assets/` (`branding/`, `jungle/`, `characters/`, `podcast/`, `comics/`, `safari/`).
3. **Structured Local Mock Data (`src/data/`):**
   - `src/data/characters.ts`: Complete data for the 10 Animal Archetypes.
   - `src/data/safari.ts`: Complete data for the 13 Transformation Chapters.
   - `src/data/podcast.ts`: Complete data for Podcast episodes, timestamps, transcripts, dialogists.
   - `src/data/comics.ts`: Complete data for Graphic Novel issues, spreads, debriefs, and collections.
   - `src/data/navigation.ts`: Global links, footer links, and social metadata.
4. **Global Layout & Navigation:**
   - `Navbar`: Sticky, transparent-to-dark glassmorphism, brand logo, active indicators, mobile menu drawer, Watch Podcast and Explore Comics CTAs.
   - `Footer`: Editorial newsletter subscription, navigation columns, creator attribution, brand motto.

---

### PHASE 2: Immersive Homepage (`/`)
1. **Cinematic Hero:** Lion in bespoke tuxedo with headphones in midnight cybernetic jungle, dual CTAs ("EXPLORE PODCAST", "ENTER THE COMIC WORLD"), ambient animated glows.
2. **Latest Podcast Highlights:** High-impact featured episode card with play interaction, runtime, and dialogist badges.
3. **Featured Graphic Novels:** Issue carousel with original cover art and reading times.
4. **Council of 10 Animal Leaders:** Interactive archetype showcase with role pills and quick links to dossiers.
5. **Safari Transformation Journey Preview:** Interactive timeline teaser with milestone nodes.
6. **Creator Profile (Dr. Amit Khandelwal):** Storytelling bio, advisory credentials, and vision statement.

---

### PHASE 3: Podcast Experience (`/podcast` & `/podcast/[slug]`)
1. **Podcast Listing (`/podcast`):**
   - Featured Episode Hero with embedded audio player preview.
   - Category filter pills (AI Strategy, Governance, Autonomous Agents, etc.) and search bar.
   - Responsive Episode Grid with playback duration, guest badges, and bookmarking.
2. **Episode Detail (`/podcast/[slug]` — Primary Reference: Stitch Episode 08):**
   - Cinematic Video/Audio Player with custom playback HUD (Play/Pause, scrub bar, speed 1x/1.5x/2x, volume, fullscreen).
   - Interactive Chapter Timestamps (clicking updates progress and playback position).
   - Searchable Transcript with speaker tags (Dr. Amit Khandelwal vs. The Sovereign Lion), search term highlighting, and sync.
   - Strategic Extraction Cards (Executive takeaways, KPI impacts).
   - Direct Comic Bridge module linking Episode 08 directly to Chapter 01 / Issue 01 comic spread.

---

### PHASE 4: Comics Library & Detail (`/comics` & `/comics/[slug]`)
1. **Graphic Novel Library (`/comics` — Primary Reference: Stitch Screen 05):**
   - "Enter the Comic World" hero featuring Issue Zero showcase.
   - Search & Character Filter ribbons.
   - Continue Reading bar with dynamic local progress.
   - Curated category shelves: Featured Graphic Novels, 13-Chapter Safari Saga, Fresh Off the Digital Press, Executive Favorites.
   - Canonical Omnibus Vol. 1 Collector's Edition banner.
2. **Comic Detail (`/comics/[slug]`):**
   - Cover art, story synopsis, character tags, page count, reading time.
   - "Start Reading" CTA opening `/reader/[slug]`.
   - Preview spreads carousel, executive transformation lessons, companion podcast link, and issue navigation.

---

### PHASE 5: Cinematic Comic Reader (`/reader/[slug]`)
- **Primary Reference: Stitch Screen 04.**
- **Reader Header:** Back button, issue title, spread indicator, reading progress bar, reading mode toggle, zoom controls, full-screen trigger.
- **Dual Reading Modes:**
  - *Mode 1 (Vertical Continuous Scroll):* Natural reading with page separators.
  - *Mode 2 (Page-by-Page Spread):* Dedicated double-spread canvas with smooth transitions, arrow button controls, and keyboard navigation.
- **Floating HUD Toolbar:** Zoom in/out, fit-to-screen, page jump slider.
- **Canon Debrief / Executive Debrief:** Post-reading section with strategic objectives, organizational drift audit, and companion podcast debrief CTA.

---

### PHASE 6: Council of 10 Animal Archetypes (`/characters` & `/characters/[slug]`)
- **Primary Reference: Stitch Screen 02.**
- **Council Gallery (`/characters`):** 10 detailed animal dossiers with individual high-resolution portraits, leadership philosophy, and executive remits.
- **Council Comparison Matrix:** Tabular comparison of all 10 animals across Corporate Role, AI Focus, Transformation Metric, and Risk Profile.
- **"Discover Which Archetype Leads Your Team":** Interactive assessment widget revealing team personas.
- **Individual Profile (`/characters/[slug]`):** Comprehensive dossier with deep strategic philosophy, responsibilities, companion podcast episodes, and comic appearances.

---

### PHASE 7: The 13-Chapter Safari Journey (`/safari`)
- **Primary Reference: Stitch Screen 01.**
- **Interactive Timeline Spine:** Central illuminated gradient spine alternating chapters left and right on desktop (collapsing cleanly to vertical on mobile).
- **Chapter Cards:** Canonical titles (01 The Seed of Silicon, 02 The Jungle Audit, etc.), KPI metrics, compute velocity readouts, archetype tags, and direct comic/podcast launch buttons.
- **Progress Matrix HUD:** Interactive volume filters (Vol. I Foundations, Vol. II Scaling, Vol. III Autonomous Horizons) with real-time completion counter.
- **Download Transformation Blueprint UI:** Gilded CTA modal for executive offline syllabus.

---

### PHASE 8: Verification & Delivery
- Responsive layout verification across Desktop (1440px), Laptop (1280px), Tablet (768px), and Mobile (390px).
- Strict TypeScript compile check (`tsc --noEmit`).
- Production build validation (`pnpm build`).
- Documentation and final audit report delivery.

