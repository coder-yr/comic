import { create } from "zustand";
import { PodcastEpisode, PODCAST_EPISODES } from "@/data/podcast";

interface PlayerState {
  currentEpisode: PodcastEpisode | null;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  volume: number;
  playbackSpeed: number;
  isMuted: boolean;
  isExpanded: boolean;
  queue: PodcastEpisode[];
  sleepTimerMinutes: number | null;
  sleepTimerRemaining: number | null; // seconds
  
  // Actions
  playEpisode: (episode: PodcastEpisode) => void;
  togglePlay: () => void;
  pause: () => void;
  resume: () => void;
  seek: (seconds: number) => void;
  setCurrentTime: (seconds: number) => void;
  setDuration: (seconds: number) => void;
  setVolume: (volume: number) => void;
  setPlaybackSpeed: (speed: number) => void;
  toggleMute: () => void;
  toggleExpanded: () => void;
  skipForward: (seconds?: number) => void;
  skipBackward: (seconds?: number) => void;
  nextEpisode: () => void;
  prevEpisode: () => void;
  setSleepTimer: (minutes: number | null) => void;
  decrementSleepTimer: () => void;
}

export const usePlayerStore = create<PlayerState>((set, get) => ({
  currentEpisode: null,
  isPlaying: false,
  currentTime: 0,
  duration: 0,
  volume: 0.85,
  playbackSpeed: 1,
  isMuted: false,
  isExpanded: false,
  queue: PODCAST_EPISODES,
  sleepTimerMinutes: null,
  sleepTimerRemaining: null,

  playEpisode: (episode: PodcastEpisode) => {
    set({
      currentEpisode: episode,
      isPlaying: true,
      currentTime: 0,
      duration: episode.durationSeconds || 1800,
    });
  },

  togglePlay: () => {
    const { currentEpisode, isPlaying } = get();
    if (!currentEpisode && PODCAST_EPISODES.length > 0) {
      set({ currentEpisode: PODCAST_EPISODES[0], isPlaying: true });
    } else {
      set({ isPlaying: !isPlaying });
    }
  },

  pause: () => set({ isPlaying: false }),
  resume: () => set({ isPlaying: true }),

  seek: (seconds: number) => {
    set({ currentTime: Math.max(0, Math.min(seconds, get().duration)) });
  },

  setCurrentTime: (seconds: number) => set({ currentTime: seconds }),
  setDuration: (seconds: number) => set({ duration: seconds }),
  setVolume: (volume: number) => set({ volume: Math.max(0, Math.min(1, volume)) }),
  setPlaybackSpeed: (playbackSpeed: number) => set({ playbackSpeed }),

  toggleMute: () => set((state) => ({ isMuted: !state.isMuted })),
  toggleExpanded: () => set((state) => ({ isExpanded: !state.isExpanded })),

  skipForward: (seconds = 15) => {
    const { currentTime, duration } = get();
    set({ currentTime: Math.min(duration, currentTime + seconds) });
  },

  skipBackward: (seconds = 15) => {
    const { currentTime } = get();
    set({ currentTime: Math.max(0, currentTime - seconds) });
  },

  nextEpisode: () => {
    const { currentEpisode, queue } = get();
    if (!currentEpisode) return;
    const currentIndex = queue.findIndex((ep) => ep.id === currentEpisode.id);
    if (currentIndex !== -1 && currentIndex < queue.length - 1) {
      const nextEp = queue[currentIndex + 1];
      set({ currentEpisode: nextEp, currentTime: 0, isPlaying: true });
    }
  },

  prevEpisode: () => {
    const { currentEpisode, queue } = get();
    if (!currentEpisode) return;
    const currentIndex = queue.findIndex((ep) => ep.id === currentEpisode.id);
    if (currentIndex > 0) {
      const prevEp = queue[currentIndex - 1];
      set({ currentEpisode: prevEp, currentTime: 0, isPlaying: true });
    }
  },

  setSleepTimer: (minutes: number | null) => {
    set({
      sleepTimerMinutes: minutes,
      sleepTimerRemaining: minutes ? minutes * 60 : null,
    });
  },

  decrementSleepTimer: () => {
    const { sleepTimerRemaining } = get();
    if (sleepTimerRemaining !== null && sleepTimerRemaining > 0) {
      if (sleepTimerRemaining <= 1) {
        set({ isPlaying: false, sleepTimerMinutes: null, sleepTimerRemaining: null });
      } else {
        set({ sleepTimerRemaining: sleepTimerRemaining - 1 });
      }
    }
  },
}));

