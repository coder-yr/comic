# THE AI JUNGLE – IMPLEMENTATION ROADMAP

## Execution Phases

1. **Data Model Enrichment**:
   - Add `slug` and rich narrative fields to all 13 chapters in `src/data/safari.ts`.
   - Expand `src/data/podcast.ts` to include the full 28-episode canonical broadcast series across Seasons 01 & 02.
   - Establish cross-content relationship utility `src/lib/contentRelations.ts` connecting Episodes, Comics, Safari Chapters, and Animal Archetypes.

2. **Persistent Global Player (Phase 3)**:
   - Create `src/store/usePlayerStore.ts` (Zustand) with audio playback state, queue, speed (0.5x–2x), seek, volume, and sleep timer.
   - Build `src/components/player/GlobalMiniPlayer.tsx` with a persistent HTMLAudioElement mounted in `RootLayout`.
   - Wire play triggers from homepage, podcast library, and episode pages so audio continues uninterrupted across routes.

3. **User State & Personalization Store (Phase 7)**:
   - Create `src/store/useUserStore.ts` (Zustand + `localStorage`) with bookmarks, reading/listening progress, recent searches, and demo membership tier.

4. **Missing Routes Implementation (Phase 2)**:
   - Build `/safari/[slug]` for deep-dive transformation blueprint exploration.
   - Build `/search` with live cross-domain filtering (Podcasts, Comics, Safari, Characters).
   - Build `/membership` showcasing Free, Executive Member, and Enterprise Council tiers with instant demo activation.
   - Build `/library` displaying real-time reading progress, bookmarks, and continue-listening cards.
   - Build `/account` featuring executive credentials, tier controls, display preferences, and session resets.
   - Build `src/app/not-found.tsx` styled as a lost expedition spread.

5. **Navigation & Global Refinement (Phase 1 & 4)**:
   - Update `Navbar.tsx` and `Footer.tsx` with the new routes (`Search`, `Membership`, `Library`, `Account`).
   - Refine buttons, card proportions, and typography using Cormorant Garamond, Cinzel, and Inter.

6. **Quality Assurance & Verification (Phases 8-10)**:
   - Verify `pnpm build` passes with zero errors.
   - Validate responsive viewports (1440px, 1280px, 768px, 390px).
   - Generate complete final delivery reports.
