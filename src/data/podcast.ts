export interface PodcastChapter {
  id: string;
  timeInSeconds: number;
  timestamp: string;
  title: string;
  description: string;
}

export interface TranscriptEntry {
  id: string;
  timeInSeconds: number;
  timestamp: string;
  speaker: string;
  role: string;
  avatar: string;
  text: string;
}

export interface StrategicExtraction {
  id: string;
  principleNumber: string;
  title: string;
  directive: string;
  champion: string;
  badge: string;
}

export interface Dialogist {
  name: string;
  role: string;
  organization: string;
  avatar: string;
  bio: string;
}

export interface PodcastEpisode {
  id: string;
  slug: string;
  episodeNumber: string;
  season: string;
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  durationSeconds: number;
  publishDate: string;
  categories: string[];
  featured: boolean;
  ratingSample: string;
  ratingsCountSample: string;
  videoPoster: string;
  demoVideoUrl?: string;
  audioUrl?: string;
  dialogists: Dialogist[];
  chapters: PodcastChapter[];
  extractions: StrategicExtraction[];
  transcript: TranscriptEntry[];
  comicBridge: {
    title: string;
    issueNumber: string;
    narrativeConnection: string;
    coverImage: string;
    comicSlug: string;
    readerSlug: string;
  };
  relatedEpisodes: string[];
}

export const PODCAST_EPISODES: PodcastEpisode[] = [
  {
    id: "ep-08",
    slug: "ep-08-jungle-audit",
    episodeNumber: "Episode 08",
    season: "Season 01",
    title: "The Jungle Audit: Executive Survival in the Machine Epoch",
    subtitle: "Sovereign AI Strategy, Vector Hygiene & Zero-Hallucination Architectures",
    description: "In this broadcast transmission, Dr. Amit Khandelwal and The Sovereign Lion dissect the fatal mistake 90% of global enterprises make: mistaking third-party API subscriptions for sovereign corporate intelligence. Discover the mathematical prerequisites of the Zero-Hallucination Gate, why data hygiene precedes model selection, and how to construct unbreakable enterprise moats.",
    duration: "46:18",
    durationSeconds: 2778,
    publishDate: "November 12, 2026",
    categories: ["AI Strategy", "Enterprise Transformation", "AI Governance", "Autonomous Agents"],
    featured: true,
    ratingSample: "4.98 / 5.0",
    ratingsCountSample: "1,420 Executive Reviews (Sample Data)",
    videoPoster: "/assets/podcast/asset_04_0bb8543c.jpg",
    demoVideoUrl: "/assets/sample/podcast-episode-full.mp4",
    audioUrl: "/assets/sample/podcast-teaser-01.mp4",
    dialogists: [
      {
        name: "Dr. Amit Khandelwal",
        role: "Creator, Author & Host",
        organization: "The AI Jungle Media",
        avatar: "/assets/podcast/asset_01_8add66c3.jpg",
        bio: "Enterprise AI strategist, author of The AI Jungle graphic novel series, and advisor to Global 2000 C-suites on sovereign intelligence transition."
      },
      {
        name: "The Sovereign Lion",
        role: "King of Strategy & Co-Host",
        organization: "Executive Council of the AI Jungle",
        avatar: "/assets/podcast/asset_02_8ff26d0d.jpg",
        bio: "Sovereign intelligence archetype commanding board-level capital allocation and macro enterprise transformation."
      }
    ],
    chapters: [
      {
        id: "ch-1",
        timeInSeconds: 0,
        timestamp: "00:00",
        title: "Prologue: The Awakening of Corporate Silicon",
        description: "Assessing legacy paralysis and why modern boards fail to grasp algorithmic depreciation."
      },
      {
        id: "ch-2",
        timeInSeconds: 435,
        timestamp: "07:15",
        title: "The Illusion of Vendor Sovereignty",
        description: "Why renting model APIs without weights ownership is a perilous corporate vulnerability."
      },
      {
        id: "ch-3",
        timeInSeconds: 880,
        timestamp: "14:40",
        title: "Deconstructing the Zero-Hallucination Gate",
        description: "The mathematical and deterministic safeguards necessary before deploying agentic swarms."
      },
      {
        id: "ch-4",
        timeInSeconds: 1390,
        timestamp: "23:10",
        title: "Enterprise Data Hygiene: The Great Elephant's Decree",
        description: "Purging legacy siloes, vector sanitization, and structured context window memory."
      },
      {
        id: "ch-5",
        timeInSeconds: 1975,
        timestamp: "32:55",
        title: "Pack Instinct: Orchestrating Continuous CI/CD",
        description: "How MLOps squads deploy, monitor, and fail-over 40+ production models daily."
      },
      {
        id: "ch-6",
        timeInSeconds: 2480,
        timestamp: "41:20",
        title: "The Comic Bridge: Enter The Jungle Audit Graphic Novel",
        description: "Bridging the broadcast discussion directly into the illustrated double-page spread of Chapter 01."
      }
    ],
    extractions: [
      {
        id: "ext-1",
        principleNumber: "01",
        title: "Strategic Sovereignty Precedes Model Selection",
        directive: "Never contract out your core enterprise intelligence. Model weights are commodities; sovereign context and decision rights are your indelible moat.",
        champion: "The Sovereign Lion",
        badge: "Boardroom Mandate"
      },
      {
        id: "ext-2",
        principleNumber: "02",
        title: "Clean Waters: Vector Sanitization Eliminates Hallucination",
        directive: "93% of agentic failure is upstream data rot. If vector lakes contain dirty legacy siloes, downstream autonomous agents will compound inaccuracies exponentially.",
        champion: "The Great Elephant",
        badge: "Data Architecture"
      },
      {
        id: "ext-3",
        principleNumber: "03",
        title: "Algorithmic Drift is Organizational Drift",
        directive: "Autonomous systems drift without constant observability. Executive telemetry requires non-negotiable canary failover and deterministic guardrails.",
        champion: "The Agile Wolf",
        badge: "MLOps Protocol"
      }
    ],
    transcript: [
      {
        id: "tr-1",
        timeInSeconds: 0,
        timestamp: "00:00",
        speaker: "Dr. Amit Khandelwal",
        role: "Host",
        avatar: "/assets/podcast/asset_01_8add66c3.jpg",
        text: "Welcome to The AI Jungle. I am Dr. Amit Khandelwal. Today, in Episode 08, we confront the single most dangerous misconception sweeping modern boardrooms: the illusion of vendor sovereignty."
      },
      {
        id: "tr-2",
        timeInSeconds: 28,
        timestamp: "00:28",
        speaker: "The Sovereign Lion",
        role: "Co-Host",
        avatar: "/assets/podcast/asset_02_8ff26d0d.jpg",
        text: "Indeed, Amit. Corporate leaders celebrate signing nine-figure contracts with commercial model providers, believing they have bought an AI strategy. They have bought nothing more than an expensive utility subscription."
      },
      {
        id: "tr-3",
        timeInSeconds: 75,
        timestamp: "01:15",
        speaker: "Dr. Amit Khandelwal",
        role: "Host",
        avatar: "/assets/podcast/asset_01_8add66c3.jpg",
        text: "When you rely entirely on an external API, your intellectual property evaporates into someone else's training cluster. You have no control over latency spikes, rate limits, or fundamental weights changes that can silently alter your decision logic overnight."
      },
      {
        id: "tr-4",
        timeInSeconds: 140,
        timestamp: "02:20",
        speaker: "The Sovereign Lion",
        role: "Co-Host",
        avatar: "/assets/podcast/asset_02_8ff26d0d.jpg",
        text: "In our graphic novel chapter, 'The Jungle Audit', we portray this exact moment. The Sovereign Lion stands in the twilight boardroom alongside The Great Elephant, gazing out over a polluted algorithmic river. If the water is toxic, the pride starves. The first mandate is data sanitization."
      },
      {
        id: "tr-5",
        timeInSeconds: 215,
        timestamp: "03:35",
        speaker: "Dr. Amit Khandelwal",
        role: "Host",
        avatar: "/assets/podcast/asset_01_8add66c3.jpg",
        text: "Let's turn to the Zero-Hallucination Gate. In enterprise financial and clinical environments, a 95% accurate model is completely unusable. The remaining 5% error margin is where lawsuits, regulatory fines, and reputational collapse live."
      },
      {
        id: "tr-6",
        timeInSeconds: 310,
        timestamp: "05:10",
        speaker: "The Sovereign Lion",
        role: "Co-Host",
        avatar: "/assets/podcast/asset_02_8ff26d0d.jpg",
        text: "Which is why we enforce deterministic verification layers. Every agentic output must pass through programmatic policy checks governed by The Vigilant Owl before reaching executive decision makers or external customers."
      },
      {
        id: "tr-7",
        timeInSeconds: 435,
        timestamp: "07:15",
        speaker: "Dr. Amit Khandelwal",
        role: "Host",
        avatar: "/assets/podcast/asset_01_8add66c3.jpg",
        text: "For all our listeners, you can explore the visual companion to this discussion in Chapter 01 of our digital graphic novel series. Notice how the panels illustrate the exact contrast between the clean cybernetic streams and legacy sludge."
      }
    ],
    comicBridge: {
      title: "The Jungle Audit: Clean Waters of the Data Lake",
      issueNumber: "Issue 01",
      narrativeConnection: "Experience Episode 08 brought to life in full-bleed graphic novel spreads. See Dr. Amit Khandelwal and The Sovereign Lion audit the corrupted algorithmic canopy and unleash The Great Elephant across legacy data siloes.",
      coverImage: "/assets/sample/comic-cover-sovereign.jpg",
      comicSlug: "the-jungle-audit",
      readerSlug: "the-jungle-audit"
    },
    relatedEpisodes: ["ep-01", "ep-06", "ep-07"]
  },
  {
    id: "ep-01",
    slug: "pilot-seed-of-silicon",
    episodeNumber: "Episode 01",
    season: "Season 01",
    title: "The Seed of Silicon: Planting Sovereign AI Architecture",
    subtitle: "Enterprise Diagnostics, Legacy Inertia & The Sovereign Moat",
    description: "The founding transmission of The AI Jungle. Dr. Amit Khandelwal and The Sovereign Lion map out the 13-chapter transformation safari, examining how Fortune 500 boards can navigate the initial shockwave of generative artificial intelligence.",
    duration: "52:40",
    durationSeconds: 3160,
    publishDate: "October 14, 2026",
    categories: ["AI Strategy", "Enterprise Transformation"],
    featured: false,
    ratingSample: "4.95 / 5.0",
    ratingsCountSample: "890 Executive Reviews (Sample Data)",
    videoPoster: "/assets/safari/asset_01_f377b05e.jpg",
    dialogists: [
      {
        name: "Dr. Amit Khandelwal",
        role: "Creator & Host",
        organization: "The AI Jungle Media",
        avatar: "/assets/podcast/asset_01_8add66c3.jpg",
        bio: "Enterprise AI author and executive transformation architect."
      },
      {
        name: "The Sovereign Lion",
        role: "King of Strategy",
        organization: "Executive Council of the AI Jungle",
        avatar: "/assets/podcast/asset_02_8ff26d0d.jpg",
        bio: "Sovereign intelligence archetype commanding enterprise capital allocation."
      }
    ],
    chapters: [
      { id: "c1", timeInSeconds: 0, timestamp: "00:00", title: "Opening Remarks & The AI Paradigm Shift", description: "Why traditional software metrics fail when applied to neural architectures." },
      { id: "c2", timeInSeconds: 600, timestamp: "10:00", title: "The Sovereign Moat Framework", description: "Identifying core data assets that cannot be commoditized." },
      { id: "c3", timeInSeconds: 1500, timestamp: "25:00", title: "The 13-Chapter Safari Overview", description: "A high-level map of the enterprise transformation roadmap." }
    ],
    extractions: [
      {
        id: "e1",
        principleNumber: "01",
        title: "Capital Allocation to Compute Must Compound",
        directive: "Do not invest in AI as an operational expense; treat weights training as a capital expenditure that creates permanent intellectual property.",
        champion: "The Sovereign Lion",
        badge: "Capital Strategy"
      }
    ],
    transcript: [
      {
        id: "t1",
        timeInSeconds: 0,
        timestamp: "00:00",
        speaker: "Dr. Amit Khandelwal",
        role: "Host",
        avatar: "/assets/podcast/asset_01_8add66c3.jpg",
        text: "The jungle is not coming; it is already here. Welcome to the pilot broadcast of The AI Jungle."
      }
    ],
    comicBridge: {
      title: "The Silicon Canopy: Awakening of the Sovereign Pride",
      issueNumber: "Issue 00",
      narrativeConnection: "Explore the graphic novel prelude detailing the first encounter between Dr. Amit Khandelwal and The Sovereign Lion in the high-tech jungle boardroom.",
      coverImage: "/assets/comics/asset_12_d8f7c718.jpg",
      comicSlug: "the-silicon-canopy",
      readerSlug: "the-silicon-canopy"
    },
    relatedEpisodes: ["ep-08"]
  },
  {
    id: "ep-07",
    slug: "ep-07-data-hygiene",
    episodeNumber: "Episode 07",
    season: "Season 01",
    title: "The Great Trunk: Clean Waters of Institutional Memory",
    subtitle: "Context Windows, RAG Embeddings & Knowledge Graph Hygiene",
    description: "Dr. Amit Khandelwal interviews The Great Elephant on vector database sanitization, multi-million token context caching, and eliminating retrieval rot in mission-critical applications.",
    duration: "41:15",
    durationSeconds: 2475,
    publishDate: "November 04, 2026",
    categories: ["Data & Analytics", "Enterprise Transformation"],
    featured: false,
    ratingSample: "4.96 / 5.0",
    ratingsCountSample: "1,120 Executive Reviews (Sample Data)",
    videoPoster: "/assets/safari/asset_07_a9db2ebb.jpg",
    dialogists: [
      {
        name: "Dr. Amit Khandelwal",
        role: "Creator & Host",
        organization: "The AI Jungle Media",
        avatar: "/assets/podcast/asset_01_8add66c3.jpg",
        bio: "Enterprise AI author and executive strategist."
      },
      {
        name: "The Great Elephant",
        role: "Chief Data Officer",
        organization: "Council of the AI Jungle",
        avatar: "/assets/characters/asset_05_0e8b5a3f.jpg",
        bio: "Guardian of institutional memory and vector sanitization."
      }
    ],
    chapters: [
      { id: "c1", timeInSeconds: 0, timestamp: "00:00", title: "The Data Sanitation Imperative", description: "Why raw data lakes poisoned early generative AI rollouts." },
      { id: "c2", timeInSeconds: 900, timestamp: "15:00", title: "Vector Embedding Architectures", description: "Optimizing dense and sparse retrieval in hybrid search." }
    ],
    extractions: [
      {
        id: "e1",
        principleNumber: "02",
        title: "Clean Waters Eliminate Hallucination",
        directive: "Sanitize vector embeddings before scaling autonomous agents. Dirty data destroys model inference.",
        champion: "The Great Elephant",
        badge: "Data Architecture"
      }
    ],
    transcript: [
      {
        id: "t1",
        timeInSeconds: 0,
        timestamp: "00:00",
        speaker: "Dr. Amit Khandelwal",
        role: "Host",
        avatar: "/assets/podcast/asset_01_8add66c3.jpg",
        text: "Today we sit down with The Great Elephant to discuss the unglamorous yet foundational core of all machine intelligence: vector hygiene."
      }
    ],
    comicBridge: {
      title: "The Great Trunk: Clean Waters of the Data Lake",
      issueNumber: "Issue 01",
      narrativeConnection: "See The Great Elephant purge poisoned legacy streams in Issue 01 of the digital graphic novel.",
      coverImage: "/assets/comics/asset_07_79aaf0cc.jpg",
      comicSlug: "the-great-trunk",
      readerSlug: "the-great-trunk"
    },
    relatedEpisodes: ["ep-08"]
  }
];

