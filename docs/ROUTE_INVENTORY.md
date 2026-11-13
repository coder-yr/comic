# THE AI JUNGLE – ROUTE INVENTORY

| URL Path | Type | Dynamic Param | Primary Data Source | Status |
| :--- | :--- | :--- | :--- | :--- |
| `/` | Static | None | Multiple (`PODCAST_EPISODES`, `COMIC_ISSUES`, `SAFARI_CHAPTERS`, `CHARACTERS`) | Active |
| `/podcast` | Static | None | `PODCAST_EPISODES` | Active |
| `/podcast/[slug]` | Dynamic | `slug` | `PODCAST_EPISODES` | Active |
| `/comics` | Static | None | `COMIC_ISSUES` | Active |
| `/comics/[slug]` | Dynamic | `slug` | `COMIC_ISSUES` | Active |
| `/reader/[slug]` | Dynamic | `slug` | `COMIC_ISSUES` | Active |
| `/safari` | Static | None | `SAFARI_CHAPTERS` | Active |
| `/safari/[slug]` | Dynamic | `slug` | `SAFARI_CHAPTERS` | **New (Phase 2)** |
| `/characters` | Static | None | `CHARACTERS` | Active |
| `/characters/[slug]` | Dynamic | `slug` | `CHARACTERS` | Active |
| `/about` | Static | None | `BRAND_INFO`, Dr. Amit Khandelwal Bio | Active |
| `/search` | Static | Query (`?q=`) | Unified search index across all 4 data domains | **New (Phase 2)** |
| `/membership` | Static | None | Tier models (`Free`, `Executive Member`, `Enterprise Council`) | **New (Phase 2)** |
| `/library` | Static | None | `useUserStore` (localStorage bookmarks, reading/listening history) | **New (Phase 2)** |
| `/account` | Static | None | `useUserStore` (User profile, active tier, display preferences) | **New (Phase 2)** |
| `/_not-found` | Static | None | Luxury Graphic Novel 404 error page | **New (Phase 2)** |
