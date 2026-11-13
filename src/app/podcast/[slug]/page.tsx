"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PODCAST_EPISODES, PodcastEpisode } from "@/data/podcast";
import { AudioVisualizer } from "@/components/effects/AudioVisualizer";
import { BioluminescentParticles } from "@/components/effects/BioluminescentParticles";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  Bookmark,
  Share2,
  BookOpen,
  ArrowRight,
  Search,
  Clock,
  Radio,
  Star,
  CheckCircle2,
  FileText,
  Sparkles,
  ChevronRight,
} from "lucide-react";

interface PageProps {
  params: {
    slug: string;
  };
}

export default function PodcastEpisodeDetailPage({ params }: PageProps) {
  const episode = PODCAST_EPISODES.find((ep) => ep.slug === params.slug) || PODCAST_EPISODES[0];

  // Video / Audio Player Interactive State
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(episode.durationSeconds);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1);
  const [isMuted, setIsMuted] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [activeTab, setActiveTab] = useState<"transcript" | "notes">("transcript");
  const [transcriptSearch, setTranscriptSearch] = useState("");
  const [currentChapterIndex, setCurrentChapterIndex] = useState(0);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {
          setIsPlaying(!isPlaying);
        });
      }
    } else {
      setIsPlaying(!isPlaying);
    }
  };

  const handleSeek = (seconds: number) => {
    setCurrentTime(seconds);
    if (videoRef.current) {
      videoRef.current.currentTime = seconds;
    }
    // Find active chapter
    const chIdx = episode.chapters.findIndex((ch, idx) => {
      const nextCh = episode.chapters[idx + 1];
      if (!nextCh) return true;
      return seconds >= ch.timeInSeconds && seconds < nextCh.timeInSeconds;
    });
    if (chIdx !== -1) setCurrentChapterIndex(chIdx);
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const cur = videoRef.current.currentTime;
      setCurrentTime(cur);
      const chIdx = episode.chapters.findIndex((ch, idx) => {
        const nextCh = episode.chapters[idx + 1];
        if (!nextCh) return true;
        return cur >= ch.timeInSeconds && cur < nextCh.timeInSeconds;
      });
      if (chIdx !== -1 && chIdx !== currentChapterIndex) {
        setCurrentChapterIndex(chIdx);
      }
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current && videoRef.current.duration) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleSpeedChange = (spd: number) => {
    setPlaybackSpeed(spd);
    if (videoRef.current) {
      videoRef.current.playbackRate = spd;
    }
  };

  const toggleMute = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    if (videoRef.current) {
      videoRef.current.muted = nextMuted;
    }
  };

  const formatTime = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = Math.floor(totalSeconds % 60);
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const filteredTranscript = episode.transcript.filter(
    (t) =>
      t.text.toLowerCase().includes(transcriptSearch.toLowerCase()) ||
      t.speaker.toLowerCase().includes(transcriptSearch.toLowerCase())
  );

  return (
    <div className="w-full bg-background min-h-screen py-8 relative overflow-hidden">
      <BioluminescentParticles count={35} className="z-0 opacity-60" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 z-10">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs font-label uppercase tracking-widest text-editorial-muted">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/podcast" className="hover:text-primary transition-colors">
            Podcast
          </Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-secondary font-semibold">{episode.episodeNumber}</span>
        </nav>

        {/* Episode Header & Metadata */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-secondary/15 text-secondary border border-secondary/30 font-label text-xs uppercase tracking-widest font-semibold">
                {episode.episodeNumber} • {episode.season}
              </span>
              <span className="font-label text-xs text-editorial-muted">
                {episode.publishDate}
              </span>
            </div>

            {/* Save & Rating */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded bg-surface-container font-label text-xs text-primary border border-jungle-border">
                <Star className="w-3.5 h-3.5 fill-primary" />
                <span>{episode.ratingSample}</span>
                <span className="text-editorial-muted text-[10px]">
                  ({episode.ratingsCountSample})
                </span>
              </div>
              <button
                type="button"
                onClick={() => setIsSaved(!isSaved)}
                className={`p-2 rounded-lg border text-xs font-label uppercase tracking-wider flex items-center gap-1.5 transition-all ${
                  isSaved
                    ? "bg-primary text-background border-primary shadow-gold font-bold"
                    : "bg-surface-container border-jungle-border text-editorial-secondary hover:text-editorial-light"
                }`}
              >
                <Bookmark className={`w-4 h-4 ${isSaved ? "fill-background" : ""}`} />
                <span>{isSaved ? "Saved" : "Save Episode"}</span>
              </button>
            </div>
          </div>

          <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl text-editorial-light max-w-5xl leading-tight">
            {episode.title}
          </h1>
          <p className="font-label text-sm sm:text-base text-primary italic max-w-4xl">
            {episode.subtitle}
          </p>
          <p className="font-body text-sm sm:text-base text-editorial-secondary max-w-4xl leading-relaxed">
            {episode.description}
          </p>
        </div>

        {/* =========================================================================
            CINEMATIC VIDEO & AUDIO PLAYER COMPONENT
            ========================================================================= */}
        <div className="glass-panel rounded-2xl overflow-hidden p-3 sm:p-5 shadow-card border border-primary/30 space-y-4">
          {/* Main Visual Screen Canvas */}
          <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-black group">
            {episode.demoVideoUrl ? (
              <video
                ref={videoRef}
                src={episode.demoVideoUrl}
                poster={episode.videoPoster}
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
                onEnded={() => setIsPlaying(false)}
                playsInline
                className="w-full h-full object-cover"
              />
            ) : (
              <Image
                src={episode.videoPoster}
                alt={episode.title}
                fill
                className="object-cover"
              />
            )}
            
            {/* Cinematic Gradient Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

            {/* Play Overlay State */}
            {!isPlaying && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                <button
                  type="button"
                  onClick={togglePlay}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-primary text-background flex items-center justify-center shadow-gold-lg hover:scale-110 transition-transform"
                  aria-label="Play transmission"
                >
                  <Play className="w-10 h-10 fill-current ml-1" />
                </button>
              </div>
            )}

            {/* Player Top HUD Badges */}
            <div className="absolute top-4 inset-x-4 flex items-center justify-between pointer-events-none">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-black/70 backdrop-blur-md font-label text-xs text-secondary border border-secondary/30">
                <span className="w-2 h-2 rounded-full bg-secondary animate-ping" />
                <span>CANONICAL BROADCAST TRANSMISSION</span>
              </div>
              <div className="px-3 py-1 rounded bg-black/70 backdrop-blur-md font-label text-xs text-editorial-light border border-jungle-border">
                {formatTime(currentTime)} / {formatTime(duration)}
              </div>
            </div>

            {/* Active Chapter Watermark Overlay */}
            <div className="absolute bottom-4 left-4 pointer-events-none hidden sm:block">
              <p className="font-label text-[10px] text-editorial-muted uppercase tracking-widest">
                Active Chapter:
              </p>
              <p className="font-display text-lg text-editorial-light">
                {episode.chapters[currentChapterIndex]?.title}
              </p>
            </div>
          </div>

          {/* Interactive Player Controls HUD */}
          <div className="p-3 bg-surface-container/90 rounded-xl space-y-3">
            {/* Scrubber Progress Bar */}
            <div className="relative w-full h-2 rounded-full bg-surface-container-highest cursor-pointer group">
              <input
                type="range"
                min={0}
                max={duration}
                value={currentTime}
                onChange={(e) => handleSeek(Number(e.target.value))}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
              />
              <div
                className="h-full bg-gradient-to-r from-secondary to-primary rounded-full relative"
                style={{ width: `${(currentTime / duration) * 100}%` }}
              >
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-editorial-light shadow-gold" />
              </div>
            </div>

            {/* Control Buttons Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={togglePlay}
                  className="p-2.5 rounded-lg bg-primary text-background hover:bg-primary-fixed transition-colors shadow-gold hover:scale-105 active:scale-95"
                >
                  {isPlaying ? (
                    <Pause className="w-5 h-5 fill-current" />
                  ) : (
                    <Play className="w-5 h-5 fill-current ml-0.5" />
                  )}
                </button>

                <div className="flex items-center gap-2 text-xs font-label text-editorial-secondary">
                  <span>{formatTime(currentTime)}</span>
                  <span>/</span>
                  <span>{formatTime(duration)}</span>
                </div>

                {/* Animated Frequency Audio Visualizer */}
                <div className="hidden md:flex items-center pl-3 border-l border-jungle-border/50">
                  <AudioVisualizer isPlaying={isPlaying} barCount={18} height={22} colorScheme="dual" />
                </div>
              </div>

              {/* Speed & Volume Controls */}
              <div className="flex items-center gap-3">
                {/* Speed Selectors */}
                <div className="flex items-center rounded-lg bg-surface-container-highest p-0.5 text-xs font-label">
                  {[1, 1.25, 1.5, 2].map((spd) => (
                    <button
                      key={spd}
                      type="button"
                      onClick={() => handleSpeedChange(spd)}
                      className={`px-2 py-1 rounded ${
                        playbackSpeed === spd
                          ? "bg-primary text-background font-bold"
                          : "text-editorial-muted hover:text-editorial-light"
                      }`}
                    >
                      {spd}x
                    </button>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={toggleMute}
                  className="p-2 rounded-lg bg-surface-container-highest text-editorial-secondary hover:text-editorial-light"
                  title="Toggle Mute"
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>

                <button
                  type="button"
                  className="p-2 rounded-lg bg-surface-container-highest text-editorial-secondary hover:text-editorial-light"
                  title="Full Screen"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            INTERACTIVE CHAPTER TIMELINE
            ========================================================================= */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-primary" />
            <h3 className="font-label text-xs uppercase tracking-widest text-primary font-semibold">
              Broadcast Chapters & Timestamps (Click to Jump)
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {episode.chapters.map((ch, idx) => {
              const isSelected = idx === currentChapterIndex;
              return (
                <button
                  key={ch.id}
                  type="button"
                  onClick={() => handleSeek(ch.timeInSeconds)}
                  className={`p-4 rounded-xl text-left border transition-all flex flex-col justify-between ${
                    isSelected
                      ? "bg-surface-container-high border-primary text-editorial-light shadow-gold"
                      : "bg-surface-container border-jungle-border/50 text-editorial-secondary hover:border-primary/40 hover:text-editorial-light"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-label text-xs font-bold text-secondary">
                      {ch.timestamp}
                    </span>
                    {isSelected && (
                      <span className="text-[10px] px-2 py-0.5 rounded bg-primary text-background font-label font-bold uppercase">
                        Current
                      </span>
                    )}
                  </div>
                  <h4 className="font-display text-sm font-medium mb-1 text-editorial-light">
                    {ch.title}
                  </h4>
                  <p className="font-body text-xs text-editorial-muted line-clamp-2">
                    {ch.description}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* =========================================================================
            COMIC BRIDGE SECTION (DIRECT CONNECTION TO GRAPHIC NOVEL CHAPTER)
            ========================================================================= */}
        <div className="glass-panel-teal rounded-2xl p-6 sm:p-8 lg:p-10 border border-secondary/40 shadow-teal grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-4 relative aspect-[3/4] rounded-xl overflow-hidden shadow-2xl group">
            <Image
              src={episode.comicBridge.coverImage}
              alt={episode.comicBridge.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-black/80 font-label text-xs text-secondary font-bold">
              {episode.comicBridge.issueNumber}
            </div>
          </div>

          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/15 text-secondary font-label text-xs uppercase tracking-widest font-semibold">
              <BookOpen className="w-3.5 h-3.5" />
              Canonical Comic Bridge
            </div>
            <h2 className="font-display text-2xl sm:text-4xl text-editorial-light">
              {episode.comicBridge.title}
            </h2>
            <p className="font-body text-sm sm:text-base text-editorial-secondary leading-relaxed">
              {episode.comicBridge.narrativeConnection}
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href={`/reader/${episode.comicBridge.readerSlug}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-primary-container to-primary text-background font-label text-xs uppercase tracking-wider font-bold shadow-gold hover:bg-primary-fixed transition-all"
              >
                <BookOpen className="w-4 h-4" />
                <span>Open Full-Screen Comic Reader</span>
              </Link>

              <Link
                href={`/comics/${episode.comicBridge.comicSlug}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-surface-container-high border border-jungle-border text-editorial-light font-label text-xs uppercase tracking-wider hover:border-primary transition-all"
              >
                <span>Read Story Synopsis</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* =========================================================================
            STRATEGIC EXTRACTION CARDS (EXECUTIVE DIRECTIVES)
            ========================================================================= */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-primary" />
            <h3 className="font-label text-xs uppercase tracking-widest text-primary font-semibold">
              Strategic Extraction Directives for Enterprise Leaders
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {episode.extractions.map((ext) => (
              <div
                key={ext.id}
                className="glass-panel rounded-xl p-6 flex flex-col justify-between space-y-4 shadow-card hover:border-primary/50 transition-all"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-label text-xs font-bold text-primary">
                      DIRECTIVE {ext.principleNumber}
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-surface-container font-label uppercase text-secondary border border-secondary/30">
                      {ext.badge}
                    </span>
                  </div>
                  <h4 className="font-display text-lg text-editorial-light">
                    {ext.title}
                  </h4>
                  <p className="font-body text-xs text-editorial-secondary leading-relaxed">
                    {ext.directive}
                  </p>
                </div>
                <div className="pt-3 border-t border-jungle-border/50 font-label text-[10px] text-editorial-muted uppercase">
                  Champion: <span className="text-editorial-light font-semibold">{ext.champion}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* =========================================================================
            SEARCHABLE TRANSCRIPT & EXECUTIVE DISCUSSION NOTES
            ========================================================================= */}
        <div className="glass-panel rounded-2xl p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-jungle-border/60 pb-4">
            {/* Tabs */}
            <div className="flex items-center gap-3 font-label text-xs uppercase tracking-wider">
              <button
                type="button"
                onClick={() => setActiveTab("transcript")}
                className={`px-4 py-2 rounded-lg transition-all ${
                  activeTab === "transcript"
                    ? "bg-primary text-background font-bold shadow-gold"
                    : "text-editorial-secondary hover:text-editorial-light"
                }`}
              >
                Synchronized Transcript
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("notes")}
                className={`px-4 py-2 rounded-lg transition-all ${
                  activeTab === "notes"
                    ? "bg-primary text-background font-bold shadow-gold"
                    : "text-editorial-secondary hover:text-editorial-light"
                }`}
              >
                Executive Discussion Notes
              </button>
            </div>

            {/* Search Input for Transcript */}
            {activeTab === "transcript" && (
              <div className="relative w-full sm:w-64">
                <Search className="w-3.5 h-3.5 text-editorial-muted absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={transcriptSearch}
                  onChange={(e) => setTranscriptSearch(e.target.value)}
                  placeholder="Search transcript..."
                  className="w-full pl-8 pr-3 py-1.5 rounded-lg bg-surface-container border border-jungle-border text-xs text-editorial-light focus:outline-none focus:border-primary placeholder:text-editorial-muted font-body"
                />
              </div>
            )}
          </div>

          {/* Transcript Content Stream */}
          {activeTab === "transcript" ? (
            <div className="space-y-6 max-h-[500px] overflow-y-auto pr-2">
              {filteredTranscript.length === 0 ? (
                <p className="text-editorial-muted text-xs font-body py-8 text-center">
                  No matching transcript dialogue found.
                </p>
              ) : (
                filteredTranscript.map((entry) => (
                  <div
                    key={entry.id}
                    className="flex gap-4 p-3 rounded-xl hover:bg-surface-container/60 transition-colors group cursor-pointer"
                    onClick={() => handleSeek(entry.timeInSeconds)}
                  >
                    <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0 ring-1 ring-jungle-border">
                      <Image
                        src={entry.avatar}
                        alt={entry.speaker}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="space-y-1 flex-1">
                      <div className="flex items-center justify-between">
                        <span className="font-display text-sm font-semibold text-editorial-light">
                          {entry.speaker}
                        </span>
                        <span className="font-label text-[11px] text-secondary font-semibold group-hover:underline">
                          {entry.timestamp}
                        </span>
                      </div>
                      <p className="font-body text-xs sm:text-sm text-editorial-secondary leading-relaxed">
                        {entry.text}
                      </p>
                    </div>
                  </div>
                ))
              )}
            </div>
          ) : (
            /* Executive Discussion Notes */
            <div className="space-y-4 max-h-[500px] overflow-y-auto font-body text-sm text-editorial-secondary leading-relaxed pr-2">
              <h4 className="font-display text-lg text-primary">Executive Briefing Digest</h4>
              <p>
                In this transmission, Dr. Amit Khandelwal demonstrates how relying exclusively on external foundation model APIs creates critical corporate exposure. When foundation model vendors alter backend weights or rate-limit tokens, an enterprise&apos;s automated pipelines will silently degrade.
              </p>
              <h4 className="font-display text-lg text-primary pt-2">The Zero-Hallucination Gate</h4>
              <p>
                The dialogue establishes that data sanitization must precede agent orchestration. Using The Great Elephant as an architectural archetype, corporate data lakes must undergo semantic deduplication and vector alignment before ingestion into retrieval-augmented generation pipelines.
              </p>
            </div>
          )}
        </div>

        {/* =========================================================================
            FEATURED EPISODE DIALOGISTS
            ========================================================================= */}
        <div className="space-y-6">
          <h3 className="font-label text-xs uppercase tracking-widest text-primary font-semibold">
            Featured Broadcast Dialogists
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {episode.dialogists.map((d) => (
              <div
                key={d.name}
                className="glass-panel rounded-xl p-5 flex items-center gap-4 shadow-card"
              >
                <div className="relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 ring-2 ring-primary/40">
                  <Image src={d.avatar} alt={d.name} fill className="object-cover" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-display text-lg text-editorial-light font-medium">
                    {d.name}
                  </h4>
                  <p className="font-label text-[10px] text-secondary uppercase tracking-widest font-semibold">
                    {d.role} • {d.organization}
                  </p>
                  <p className="font-body text-xs text-editorial-muted line-clamp-2">
                    {d.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

