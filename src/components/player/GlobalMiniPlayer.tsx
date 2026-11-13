"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { usePlayerStore } from "@/store/usePlayerStore";
import { useUserStore } from "@/store/useUserStore";
import {
  Play,
  Pause,
  RotateCcw,
  RotateCw,
  Volume2,
  VolumeX,
  ChevronUp,
  ChevronDown,
  X,
  SkipForward,
  SkipBack,
  Bookmark,
  Radio,
  Clock,
  Sparkles,
  ExternalLink,
} from "lucide-react";

export function GlobalMiniPlayer() {
  const pathname = usePathname();
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const {
    currentEpisode,
    isPlaying,
    currentTime,
    duration,
    volume,
    playbackSpeed,
    isMuted,
    isExpanded,
    sleepTimerMinutes,
    sleepTimerRemaining,
    togglePlay,
    pause,
    resume,
    seek,
    setCurrentTime,
    setDuration,
    setVolume,
    setPlaybackSpeed,
    toggleMute,
    toggleExpanded,
    skipForward,
    skipBackward,
    nextEpisode,
    prevEpisode,
    setSleepTimer,
    decrementSleepTimer,
  } = usePlayerStore();

  const { bookmarkedEpisodes, toggleBookmarkEpisode, updateListeningProgress } = useUserStore();

  // Hide mini player on full-screen comic reader pages to keep pure reading immersion
  const isReaderPage = pathname.startsWith("/reader/");

  // Sync Audio Element on audio source changes
  useEffect(() => {
    if (!audioRef.current || !currentEpisode) return;
    const mediaSrc = currentEpisode.audioUrl || currentEpisode.demoVideoUrl || "/assets/sample/podcast-teaser-01.mp4";
    if (audioRef.current.src !== window.location.origin + mediaSrc && !audioRef.current.src.endsWith(mediaSrc)) {
      audioRef.current.src = mediaSrc;
      if (isPlaying) {
        audioRef.current.play().catch(() => pause());
      }
    }
  }, [currentEpisode, isPlaying, pause]);

  // Sync play/pause state
  useEffect(() => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.play().catch(() => {});
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  // Sync volume and speed
  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.volume = isMuted ? 0 : volume;
    audioRef.current.playbackRate = playbackSpeed;
  }, [volume, isMuted, playbackSpeed]);

  // Sleep timer interval
  useEffect(() => {
    if (sleepTimerRemaining === null || !isPlaying) return;
    const interval = setInterval(() => {
      decrementSleepTimer();
    }, 1000);
    return () => clearInterval(interval);
  }, [sleepTimerRemaining, isPlaying, decrementSleepTimer]);

  // Sync audio progress with store & localStorage
  const handleTimeUpdate = () => {
    if (!audioRef.current || !currentEpisode) return;
    const cur = audioRef.current.currentTime;
    setCurrentTime(cur);
    if (Math.floor(cur) % 5 === 0) {
      updateListeningProgress(currentEpisode.slug, currentEpisode.title, cur, audioRef.current.duration || currentEpisode.durationSeconds);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current && audioRef.current.duration) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleSeek = (newTime: number) => {
    seek(newTime);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
    }
  };

  if (!currentEpisode || isReaderPage) {
    return <audio ref={audioRef} onTimeUpdate={handleTimeUpdate} onLoadedMetadata={handleLoadedMetadata} onEnded={nextEpisode} />;
  }

  const isBookmarked = bookmarkedEpisodes.includes(currentEpisode.slug);

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  return (
    <>
      <audio
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={nextEpisode}
      />

      {/* Floating Bottom Mini-Player Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 pointer-events-auto transition-transform duration-300">
        {/* Scrubber Progress Bar on Top Lip */}
        <div className="relative w-full h-1 bg-[#11140F] cursor-pointer group">
          <input
            type="range"
            min={0}
            max={duration || currentEpisode.durationSeconds || 1800}
            value={currentTime}
            onChange={(e) => handleSeek(Number(e.target.value))}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
          />
          <div
            className="h-full bg-gradient-to-r from-[#3C988C] to-[#D6AF60] transition-all"
            style={{ width: `${(currentTime / (duration || currentEpisode.durationSeconds || 1800)) * 100}%` }}
          />
        </div>

        {/* Player Main Surface */}
        <div className="w-full bg-[#090D0A]/95 backdrop-blur-xl border-t border-[#D6AF60]/20 px-4 sm:px-8 py-2.5 sm:py-3 shadow-[0_-10px_30px_rgba(0,0,0,0.85)]">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
            {/* Left: Episode Artwork & Title */}
            <div className="flex items-center gap-3 min-w-0 flex-1 sm:flex-initial">
              <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-lg overflow-hidden border border-[#D6AF60]/30 shrink-0">
                <Image
                  src={currentEpisode.videoPoster || "/assets/podcast/asset_04_0bb8543c.jpg"}
                  alt={currentEpisode.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="min-w-0">
                <p className="font-cinzel text-[10px] text-[#3C988C] uppercase tracking-wider font-semibold truncate">
                  {currentEpisode.episodeNumber} · {currentEpisode.season}
                </p>
                <Link
                  href={`/podcast/${currentEpisode.slug}`}
                  className="font-display text-xs sm:text-sm text-[#EAE2D1] hover:text-[#D6AF60] transition-colors line-clamp-1 font-medium"
                >
                  {currentEpisode.title}
                </Link>
                <p className="text-[10px] text-[#A9A18E] truncate hidden md:block">
                  {currentEpisode.dialogists.map((d) => d.name).join(" & ")}
                </p>
              </div>
            </div>

            {/* Center: Controls (Play, Skip, Timestamps) */}
            <div className="flex flex-col items-center gap-1 shrink-0">
              <div className="flex items-center gap-2 sm:gap-4">
                <button
                  type="button"
                  onClick={prevEpisode}
                  className="text-[#A9A18E] hover:text-[#D6AF60] transition-colors p-1"
                  title="Previous Transmission"
                >
                  <SkipBack className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={() => skipBackward(15)}
                  className="text-[#A9A18E] hover:text-[#D6AF60] transition-colors p-1"
                  title="Rewind 15 seconds"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={togglePlay}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#D6AF60] text-[#090D0A] flex items-center justify-center hover:scale-105 active:scale-95 shadow-md transition-all font-bold"
                  aria-label={isPlaying ? "Pause" : "Play"}
                >
                  {isPlaying ? (
                    <Pause className="w-4 h-4 fill-current" />
                  ) : (
                    <Play className="w-4 h-4 fill-current ml-0.5" />
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => skipForward(15)}
                  className="text-[#A9A18E] hover:text-[#D6AF60] transition-colors p-1"
                  title="Fast-forward 15 seconds"
                >
                  <RotateCw className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={nextEpisode}
                  className="text-[#A9A18E] hover:text-[#D6AF60] transition-colors p-1"
                  title="Next Transmission"
                >
                  <SkipForward className="w-4 h-4" />
                </button>
              </div>

              {/* Time display */}
              <div className="text-[10px] font-mono text-[#A9A18E]">
                <span>{formatTime(currentTime)}</span>
                <span className="mx-1">/</span>
                <span>{formatTime(duration || currentEpisode.durationSeconds || 1800)}</span>
              </div>
            </div>

            {/* Right: Volume, Speed, Bookmark, Sleep Timer & Expand */}
            <div className="hidden lg:flex items-center gap-3 shrink-0">
              {/* Speed Switcher */}
              <button
                type="button"
                onClick={() => {
                  const speeds = [0.75, 1, 1.25, 1.5, 2];
                  const nextIdx = (speeds.indexOf(playbackSpeed) + 1) % speeds.length;
                  setPlaybackSpeed(speeds[nextIdx]);
                }}
                className="px-2 py-1 rounded bg-[#111610] border border-[#D6AF60]/20 text-[11px] font-mono text-[#D6AF60] hover:border-[#D6AF60] transition-colors"
                title="Playback Speed"
              >
                {playbackSpeed}x
              </button>

              {/* Volume Slider */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={toggleMute}
                  className="text-[#A9A18E] hover:text-[#EAE2D1] transition-colors"
                >
                  {isMuted || volume === 0 ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
                <input
                  type="range"
                  min={0}
                  max={1}
                  step={0.05}
                  value={isMuted ? 0 : volume}
                  onChange={(e) => setVolume(Number(e.target.value))}
                  className="w-16 h-1 bg-[#111610] rounded-lg accent-[#D6AF60] cursor-pointer"
                />
              </div>

              {/* Sleep Timer */}
              <button
                type="button"
                onClick={() => {
                  const options = [null, 15, 30, 45, 60];
                  const nextIdx = (options.indexOf(sleepTimerMinutes) + 1) % options.length;
                  setSleepTimer(options[nextIdx]);
                }}
                className={`p-1.5 rounded hover:bg-[#111610] transition-colors flex items-center gap-1 text-[11px] font-mono ${
                  sleepTimerMinutes ? "text-[#3C988C] font-bold" : "text-[#A9A18E]"
                }`}
                title="Sleep Timer"
              >
                <Clock className="w-3.5 h-3.5" />
                {sleepTimerRemaining !== null && (
                  <span>{Math.ceil(sleepTimerRemaining / 60)}m</span>
                )}
              </button>

              {/* Bookmark Toggle */}
              <button
                type="button"
                onClick={() => toggleBookmarkEpisode(currentEpisode.slug)}
                className={`p-1.5 rounded hover:bg-[#111610] transition-colors ${
                  isBookmarked ? "text-[#D6AF60]" : "text-[#A9A18E]"
                }`}
                title="Bookmark Episode"
              >
                <Bookmark className={`w-4 h-4 ${isBookmarked ? "fill-[#D6AF60]" : ""}`} />
              </button>

              {/* Link to Full Episode Page */}
              <Link
                href={`/podcast/${currentEpisode.slug}`}
                className="p-1.5 text-[#A9A18E] hover:text-[#D6AF60] transition-colors"
                title="Open Transmission Page"
              >
                <ExternalLink className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

