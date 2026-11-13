import { create } from "zustand";

export interface ReadingProgressItem {
  slug: string;
  title: string;
  pageIndex: number;
  totalPages: number;
  percentage: number;
  lastReadAt: string;
}

export interface ListeningProgressItem {
  slug: string;
  title: string;
  currentTime: number;
  duration: number;
  percentage: number;
  lastListenedAt: string;
}

interface UserState {
  // Membership
  membershipTier: "Free" | "Executive Member" | "Enterprise Council";
  setMembershipTier: (tier: "Free" | "Executive Member" | "Enterprise Council") => void;

  // Bookmarks
  bookmarkedComics: string[]; // slugs
  bookmarkedEpisodes: string[]; // slugs
  toggleBookmarkComic: (slug: string) => void;
  toggleBookmarkEpisode: (slug: string) => void;

  // Reading History & Progress
  readingProgress: Record<string, ReadingProgressItem>; // key: slug
  updateReadingProgress: (slug: string, title: string, pageIndex: number, totalPages: number) => void;

  // Listening History & Progress
  listeningProgress: Record<string, ListeningProgressItem>; // key: slug
  updateListeningProgress: (slug: string, title: string, currentTime: number, duration: number) => void;

  // Search History
  recentSearches: string[];
  addRecentSearch: (query: string) => void;
  clearRecentSearches: () => void;

  // Display Preferences
  fontSize: "standard" | "large";
  highContrast: boolean;
  toggleHighContrast: () => void;
  setFontSize: (size: "standard" | "large") => void;
}

const STORAGE_KEY = "ai_jungle_user_state_v1";

const getInitialState = () => {
  if (typeof window === "undefined") {
    return {
      membershipTier: "Executive Member" as const,
      bookmarkedComics: ["the-jungle-audit"],
      bookmarkedEpisodes: ["ep-08-jungle-audit"],
      readingProgress: {
        "the-jungle-audit": {
          slug: "the-jungle-audit",
          title: "The Jungle Audit: Clean Waters of the Data Lake",
          pageIndex: 0,
          totalPages: 5,
          percentage: 20,
          lastReadAt: new Date().toISOString(),
        },
      },
      listeningProgress: {
        "ep-08-jungle-audit": {
          slug: "ep-08-jungle-audit",
          title: "The Jungle Audit: Executive Survival in the Machine Epoch",
          currentTime: 420,
          duration: 2778,
          percentage: 15,
          lastListenedAt: new Date().toISOString(),
        },
      },
      recentSearches: ["Vector Sanitization", "Sovereign Lion", "The Great Elephant", "Zero Hallucination"],
      fontSize: "standard" as const,
      highContrast: false,
    };
  }

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch {}

  return {
    membershipTier: "Executive Member" as const,
    bookmarkedComics: ["the-jungle-audit"],
    bookmarkedEpisodes: ["ep-08-jungle-audit"],
    readingProgress: {
      "the-jungle-audit": {
        slug: "the-jungle-audit",
        title: "The Jungle Audit: Clean Waters of the Data Lake",
        pageIndex: 0,
        totalPages: 5,
        percentage: 20,
        lastReadAt: new Date().toISOString(),
      },
    },
    listeningProgress: {
      "ep-08-jungle-audit": {
        slug: "ep-08-jungle-audit",
        title: "The Jungle Audit: Executive Survival in the Machine Epoch",
        currentTime: 420,
        duration: 2778,
        percentage: 15,
        lastListenedAt: new Date().toISOString(),
      },
    },
    recentSearches: ["Vector Sanitization", "Sovereign Lion", "The Great Elephant", "Zero Hallucination"],
    fontSize: "standard" as const,
    highContrast: false,
  };
};

export const useUserStore = create<UserState>((set, get) => ({
  ...getInitialState(),

  setMembershipTier: (tier) => {
    set({ membershipTier: tier });
    save(get());
  },

  toggleBookmarkComic: (slug) => {
    const { bookmarkedComics } = get();
    const updated = bookmarkedComics.includes(slug)
      ? bookmarkedComics.filter((s) => s !== slug)
      : [...bookmarkedComics, slug];
    set({ bookmarkedComics: updated });
    save(get());
  },

  toggleBookmarkEpisode: (slug) => {
    const { bookmarkedEpisodes } = get();
    const updated = bookmarkedEpisodes.includes(slug)
      ? bookmarkedEpisodes.filter((s) => s !== slug)
      : [...bookmarkedEpisodes, slug];
    set({ bookmarkedEpisodes: updated });
    save(get());
  },

  updateReadingProgress: (slug, title, pageIndex, totalPages) => {
    const { readingProgress } = get();
    const percentage = Math.round(((pageIndex + 1) / totalPages) * 100);
    const updated = {
      ...readingProgress,
      [slug]: {
        slug,
        title,
        pageIndex,
        totalPages,
        percentage,
        lastReadAt: new Date().toISOString(),
      },
    };
    set({ readingProgress: updated });
    save(get());
  },

  updateListeningProgress: (slug, title, currentTime, duration) => {
    const { listeningProgress } = get();
    const percentage = Math.round((currentTime / (duration || 1)) * 100);
    const updated = {
      ...listeningProgress,
      [slug]: {
        slug,
        title,
        currentTime,
        duration,
        percentage,
        lastListenedAt: new Date().toISOString(),
      },
    };
    set({ listeningProgress: updated });
    save(get());
  },

  addRecentSearch: (query) => {
    if (!query.trim()) return;
    const { recentSearches } = get();
    const filtered = recentSearches.filter((s) => s.toLowerCase() !== query.toLowerCase());
    const updated = [query.trim(), ...filtered].slice(0, 8);
    set({ recentSearches: updated });
    save(get());
  },

  clearRecentSearches: () => {
    set({ recentSearches: [] });
    save(get());
  },

  toggleHighContrast: () => {
    set((state) => ({ highContrast: !state.highContrast }));
    save(get());
  },

  setFontSize: (fontSize) => {
    set({ fontSize });
    save(get());
  },
}));

function save(state: UserState) {
  if (typeof window !== "undefined") {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {}
  }
}

