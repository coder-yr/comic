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
,
{
    "id": "ep-02",
    "slug": "ep-02-sensing-the-forest-floor",
    "episodeNumber": "Episode 02",
    "season": "Season 01",
    "title": "Sensing the Forest Floor: Telemetry Beyond the Hype",
    "subtitle": "Distinguishing Real Signals from Synthetic Noise in Corporate Landscapes",
    "description": "Dr. Amit Khandelwal and The Agile Wolf examine distributed sensory feeds and enterprise event streaming, identifying operational bottlenecks before autonomous agent activation.",
    "duration": "38:40",
    "durationSeconds": 2320,
    "publishDate": "November 2, 2026",
    "categories": [
      "AI Strategy",
      "Operations",
      "Event Streaming"
    ],
    "featured": false,
    "ratingSample": "4.92 / 5.0",
    "ratingsCountSample": "890 Executive Reviews",
    "videoPoster": "/assets/podcast/asset_04_0bb8543c.jpg",
    "audioUrl": "/assets/sample/podcast-teaser-01.mp4",
    "dialogists": [
      {
        "name": "Dr. Amit Khandelwal",
        "role": "Host & Author",
        "organization": "The AI Jungle Media",
        "avatar": "/assets/podcast/asset_01_8add66c3.jpg",
        "bio": "Enterprise AI architect and creator of the 13-Chapter Safari transformation blueprint."
      },
      {
        "name": "The Agile Wolf",
        "role": "Chief Operating Officer",
        "organization": "AI Jungle Executive Council",
        "avatar": "/assets/podcast/asset_02_8ff26d0d.jpg",
        "bio": "Operational swarm commander and high-velocity workflow architect."
      }
    ],
    "chapters": [
      {
        "id": "c1",
        "timeInSeconds": 0,
        "timestamp": "00:00",
        "title": "Distributed Telemetry Setup",
        "description": "Mapping physical and digital telemetry."
      },
      {
        "id": "c2",
        "timeInSeconds": 720,
        "timestamp": "12:00",
        "title": "Removing Algorithmic Noise",
        "description": "Filtering hallucinations from enterprise telemetry."
      }
    ],
    "extractions": [
      {
        "id": "e1",
        "principleNumber": "02",
        "title": "Sensory Density Precedes Autonomous Decisions",
        "directive": "Never trigger autonomous agents on aggregated quarterly indicators; wire low-latency telemetry to the cold edge.",
        "champion": "The Agile Wolf",
        "badge": "Operational Rule"
      }
    ],
    "transcript": [
      {
        "id": "t1",
        "timeInSeconds": 0,
        "timestamp": "00:00",
        "speaker": "Dr. Amit Khandelwal",
        "role": "Host",
        "avatar": "/assets/podcast/asset_01_8add66c3.jpg",
        "text": "Welcome back to The AI Jungle. Today we ask: can an enterprise really sense reality when 80% of its data feeds are uncurated?"
      }
    ],
    "comicBridge": {
      "title": "Pack Instinct: High-Velocity MLOps",
      "issueNumber": "Issue 03",
      "narrativeConnection": "See The Agile Wolf align distributed squad telemetries in Chapter 03.",
      "coverImage": "/assets/sample/comic_pages/page_02.jpg",
      "comicSlug": "pack-instinct",
      "readerSlug": "the-jungle-audit"
    },
    "relatedEpisodes": [
      "ep-08-jungle-audit",
      "ep-03-chasing-high-yield-prey"
    ]
  },
  {
    "id": "ep-03",
    "slug": "ep-03-chasing-high-yield-prey",
    "episodeNumber": "Episode 03",
    "season": "Season 01",
    "title": "Chasing the High Yield Prey: Capital Allocation for Generative Compute",
    "subtitle": "ROI Hurdle Rates for GPU Clusters and Enterprise Model Fine-Tuning",
    "description": "The Sovereign Lion and Dr. Amit analyze where enterprise capital produces real margin expansion versus where compute expenditure turns into vanity expense.",
    "duration": "42:15",
    "durationSeconds": 2535,
    "publishDate": "October 26, 2026",
    "categories": [
      "AI Strategy",
      "Finance & ROI",
      "Executive Leadership"
    ],
    "featured": false,
    "ratingSample": "4.95 / 5.0",
    "ratingsCountSample": "1,120 Reviews",
    "videoPoster": "/assets/podcast/asset_04_0bb8543c.jpg",
    "audioUrl": "/assets/sample/podcast-teaser-02.mp4",
    "dialogists": [
      {
        "name": "Dr. Amit Khandelwal",
        "role": "Host",
        "organization": "The AI Jungle Media",
        "avatar": "/assets/podcast/asset_01_8add66c3.jpg",
        "bio": "Sovereign intelligence strategist and board advisor."
      },
      {
        "name": "The Sovereign Lion",
        "role": "King of Strategy",
        "organization": "Executive Council",
        "avatar": "/assets/podcast/asset_02_8ff26d0d.jpg",
        "bio": "Commanding board-level sovereign intelligence."
      }
    ],
    "chapters": [
      {
        "id": "c1",
        "timeInSeconds": 0,
        "timestamp": "00:00",
        "title": "CapEx vs OpEx in AI Infrastructure",
        "description": "Analyzing cloud token costs versus on-prem cluster depreciation."
      }
    ],
    "extractions": [
      {
        "id": "e1",
        "principleNumber": "03",
        "title": "Compute Must Yield Sovereign Margins",
        "directive": "Do not lease foundation model tokens when fine-tuned 8B parameters running on proprietary context outperform commercial APIs at 1/100th cost.",
        "champion": "The Sovereign Lion",
        "badge": "Boardroom Mandate"
      }
    ],
    "transcript": [
      {
        "id": "t1",
        "timeInSeconds": 0,
        "timestamp": "00:00",
        "speaker": "The Sovereign Lion",
        "role": "Co-Host",
        "avatar": "/assets/podcast/asset_02_8ff26d0d.jpg",
        "text": "Capital must stalk value with unrelenting focus. We do not burn compute for novelty."
      }
    ],
    "comicBridge": {
      "title": "The King's Treasury: Chapter 12",
      "issueNumber": "Issue 05",
      "narrativeConnection": "Witness the economic governance of sovereign compute in Chapter 12.",
      "coverImage": "/assets/sample/comic_pages/page_03.jpg",
      "comicSlug": "silent-eyes",
      "readerSlug": "the-jungle-audit"
    },
    "relatedEpisodes": [
      "ep-08-jungle-audit",
      "ep-04-carving-the-path"
    ]
  },
  {
    "id": "ep-04",
    "slug": "ep-04-carving-the-path",
    "episodeNumber": "Episode 04",
    "season": "Season 01",
    "title": "Carving the Path: Escaping the POC Graveyard",
    "subtitle": "From Fragile Prototype to Mission-Critical Production Mesh",
    "description": "The Swift Cheetah and Dr. Amit reveal the architectural discipline required to graduate agentic proofs-of-concept into 99.99% SLA production infrastructure.",
    "duration": "45:10",
    "durationSeconds": 2710,
    "publishDate": "October 19, 2026",
    "categories": [
      "Autonomous Agents",
      "MLOps",
      "Enterprise Transformation"
    ],
    "featured": false,
    "ratingSample": "4.94 / 5.0",
    "ratingsCountSample": "980 Reviews",
    "videoPoster": "/assets/podcast/asset_04_0bb8543c.jpg",
    "audioUrl": "/assets/sample/podcast-teaser-03.mp4",
    "dialogists": [
      {
        "name": "Dr. Amit Khandelwal",
        "role": "Host",
        "organization": "The AI Jungle Media",
        "avatar": "/assets/podcast/asset_01_8add66c3.jpg",
        "bio": "Global enterprise AI transformation strategist."
      },
      {
        "name": "The Swift Cheetah",
        "role": "Chief Technology Officer",
        "organization": "Executive Council",
        "avatar": "/assets/podcast/asset_02_8ff26d0d.jpg",
        "bio": "Sub-millisecond latency automation commander."
      }
    ],
    "chapters": [
      {
        "id": "c1",
        "timeInSeconds": 0,
        "timestamp": "00:00",
        "title": "The Prototype Mirage",
        "description": "Why demos lie and production exposes edge cases."
      }
    ],
    "extractions": [
      {
        "id": "e1",
        "principleNumber": "04",
        "title": "Deterministic Guardrails Precede Autonomy",
        "directive": "Never let an LLM agent write directly to production databases without deterministic verification.",
        "champion": "The Swift Cheetah",
        "badge": "Production Standard"
      }
    ],
    "transcript": [
      {
        "id": "t1",
        "timeInSeconds": 0,
        "timestamp": "00:00",
        "speaker": "Dr. Amit Khandelwal",
        "role": "Host",
        "avatar": "/assets/podcast/asset_01_8add66c3.jpg",
        "text": "Ninety percent of corporate GenAI prototypes never reach production. Today we show you the engineering ladder that crosses the chasm."
      }
    ],
    "comicBridge": {
      "title": "The Velocity Gap: Automated Pipeline Scaling",
      "issueNumber": "Issue 04",
      "narrativeConnection": "See Cheetah accelerate autonomous micro-agents across the production bridge.",
      "coverImage": "/assets/sample/comic_pages/page_02.jpg",
      "comicSlug": "pack-instinct",
      "readerSlug": "the-jungle-audit"
    },
    "relatedEpisodes": [
      "ep-08-jungle-audit",
      "ep-05-the-eagle-eye"
    ]
  },
  {
    "id": "ep-05",
    "slug": "ep-05-the-eagle-eye",
    "episodeNumber": "Episode 05",
    "season": "Season 01",
    "title": "The Eagle Eye: Securing Sovereign Context & Model Weights",
    "subtitle": "Zero-Trust Cybersecurity Against Adversarial Prompt Injections & Data Extraction",
    "description": "The Sentinel Eagle details the defensive perimeter required to protect corporate intellectual property when enterprise multi-agent networks interface with public ecosystems.",
    "duration": "40:50",
    "durationSeconds": 2450,
    "publishDate": "October 12, 2026",
    "categories": [
      "Cybersecurity",
      "AI Governance",
      "Zero Trust"
    ],
    "featured": false,
    "ratingSample": "4.96 / 5.0",
    "ratingsCountSample": "1,040 Reviews",
    "videoPoster": "/assets/podcast/asset_04_0bb8543c.jpg",
    "audioUrl": "/assets/sample/podcast-teaser-01.mp4",
    "dialogists": [
      {
        "name": "Dr. Amit Khandelwal",
        "role": "Host",
        "organization": "The AI Jungle Media",
        "avatar": "/assets/podcast/asset_01_8add66c3.jpg",
        "bio": "Author & Sovereign Transformation Leader."
      },
      {
        "name": "The Sentinel Eagle",
        "role": "Chief Information Security Officer",
        "organization": "Executive Council",
        "avatar": "/assets/podcast/asset_02_8ff26d0d.jpg",
        "bio": "Adversarial vulnerability detection and encrypted canopy defender."
      }
    ],
    "chapters": [
      {
        "id": "c1",
        "timeInSeconds": 0,
        "timestamp": "00:00",
        "title": "Adversarial Threat Surfaces",
        "description": "Analyzing prompt injection attack vectors."
      }
    ],
    "extractions": [
      {
        "id": "e1",
        "principleNumber": "05",
        "title": "Perimeter Isolation for Context Buffers",
        "directive": "Sanitize external tool calls before passing responses into internal reasoning tokens.",
        "champion": "The Sentinel Eagle",
        "badge": "Security Mandate"
      }
    ],
    "transcript": [
      {
        "id": "t1",
        "timeInSeconds": 0,
        "timestamp": "00:00",
        "speaker": "The Sentinel Eagle",
        "role": "Co-Host",
        "avatar": "/assets/podcast/asset_02_8ff26d0d.jpg",
        "text": "The canopy is full of silent intrusions. The moment you give an agent access to your email and CRM, you have opened the gates of the sanctuary."
      }
    ],
    "comicBridge": {
      "title": "Zero-Trust Canopy: Cryptographic Perimeter",
      "issueNumber": "Issue 05",
      "narrativeConnection": "Eagle surveys the holographic cyber-barrier in Chapter 06.",
      "coverImage": "/assets/sample/comic_pages/page_03.jpg",
      "comicSlug": "silent-eyes",
      "readerSlug": "the-jungle-audit"
    },
    "relatedEpisodes": [
      "ep-08-jungle-audit",
      "ep-06-the-legal-canopy"
    ]
  },
  {
    "id": "ep-06",
    "slug": "ep-06-the-legal-canopy",
    "episodeNumber": "Episode 06",
    "season": "Season 01",
    "title": "The Legal Canopy: AI Copyright, IP & Regulatory Enclaves",
    "subtitle": "A Masterclass Transmission on Enterprise AI Sovereignty",
    "description": "Executive discussion featuring Dr. Amit Khandelwal, The Vigilant Owl and global transformation pioneers.",
    "duration": "35:45",
    "durationSeconds": 2145,
    "publishDate": "October 1, 2026",
    "categories": [
      "AI Governance",
      "AI Strategy",
      "Enterprise Transformation"
    ],
    "featured": true,
    "ratingSample": "4.90 / 5.0",
    "ratingsCountSample": "700 Executive Reviews",
    "videoPoster": "/assets/podcast/asset_04_0bb8543c.jpg",
    "audioUrl": "/assets/sample/podcast-teaser-01.mp4",
    "dialogists": [
      {
        "name": "Dr. Amit Khandelwal",
        "role": "Author & Host",
        "organization": "The AI Jungle Media",
        "avatar": "/assets/podcast/asset_01_8add66c3.jpg",
        "bio": "Sovereign AI transformation leader with 28 years of enterprise experience."
      },
      {
        "name": "The Vigilant Owl",
        "role": "Executive Council",
        "organization": "The AI Jungle Syndicate",
        "avatar": "/assets/podcast/asset_02_8ff26d0d.jpg",
        "bio": "Canonical archetype commanding enterprise transformation domains."
      }
    ],
    "chapters": [
      {
        "id": "c1",
        "timeInSeconds": 0,
        "timestamp": "00:00",
        "title": "Strategic Briefing",
        "description": "Foundational breakdown of the operational mandate."
      },
      {
        "id": "c2",
        "timeInSeconds": 600,
        "timestamp": "10:00",
        "title": "Execution Architecture",
        "description": "Deploying resilient mechanisms across the enterprise mesh."
      }
    ],
    "extractions": [
      {
        "id": "e1",
        "principleNumber": "06",
        "title": "The Legal Canopy",
        "directive": "Never compromise sovereign strategic context; orchestrate autonomous mechanisms with deterministic safeguards.",
        "champion": "The Vigilant Owl",
        "badge": "Executive Directive"
      }
    ],
    "transcript": [
      {
        "id": "tr-1",
        "timeInSeconds": 0,
        "timestamp": "00:00",
        "speaker": "Dr. Amit Khandelwal",
        "role": "Host",
        "avatar": "/assets/podcast/asset_01_8add66c3.jpg",
        "text": "Welcome to Episode 6 of The AI Jungle. Today we confront The Legal Canopy: AI Copyright, IP & Regulatory Enclaves."
      }
    ],
    "comicBridge": {
      "title": "The AI Jungle Graphic Novel: Episode Companion",
      "issueNumber": "Issue 01",
      "narrativeConnection": "Explore how this strategic dilemma is visualized in graphic novel spreads.",
      "coverImage": "/assets/sample/comic_pages/page_01.jpg",
      "comicSlug": "the-jungle-audit",
      "readerSlug": "the-jungle-audit"
    },
    "relatedEpisodes": [
      "ep-08-jungle-audit",
      "ep-01-the-seed-of-silicon"
    ]
  },
  {
    "id": "ep-09",
    "slug": "ep-09-weathering-the-storm",
    "episodeNumber": "Episode 07",
    "season": "Season 01",
    "title": "Weathering the Storm: Algorithmic Drift and Failover Architecture",
    "subtitle": "A Masterclass Transmission on Enterprise AI Sovereignty",
    "description": "Executive discussion featuring Dr. Amit Khandelwal, The Agile Wolf and global transformation pioneers.",
    "duration": "36:45",
    "durationSeconds": 2205,
    "publishDate": "October 2, 2026",
    "categories": [
      "MLOps",
      "AI Strategy",
      "Enterprise Transformation"
    ],
    "featured": false,
    "ratingSample": "4.91 / 5.0",
    "ratingsCountSample": "740 Executive Reviews",
    "videoPoster": "/assets/podcast/asset_04_0bb8543c.jpg",
    "audioUrl": "/assets/sample/podcast-teaser-02.mp4",
    "dialogists": [
      {
        "name": "Dr. Amit Khandelwal",
        "role": "Author & Host",
        "organization": "The AI Jungle Media",
        "avatar": "/assets/podcast/asset_01_8add66c3.jpg",
        "bio": "Sovereign AI transformation leader with 28 years of enterprise experience."
      },
      {
        "name": "The Agile Wolf",
        "role": "Executive Council",
        "organization": "The AI Jungle Syndicate",
        "avatar": "/assets/podcast/asset_02_8ff26d0d.jpg",
        "bio": "Canonical archetype commanding enterprise transformation domains."
      }
    ],
    "chapters": [
      {
        "id": "c1",
        "timeInSeconds": 0,
        "timestamp": "00:00",
        "title": "Strategic Briefing",
        "description": "Foundational breakdown of the operational mandate."
      },
      {
        "id": "c2",
        "timeInSeconds": 600,
        "timestamp": "10:00",
        "title": "Execution Architecture",
        "description": "Deploying resilient mechanisms across the enterprise mesh."
      }
    ],
    "extractions": [
      {
        "id": "e1",
        "principleNumber": "07",
        "title": "Weathering the Storm",
        "directive": "Never compromise sovereign strategic context; orchestrate autonomous mechanisms with deterministic safeguards.",
        "champion": "The Agile Wolf",
        "badge": "Executive Directive"
      }
    ],
    "transcript": [
      {
        "id": "tr-1",
        "timeInSeconds": 0,
        "timestamp": "00:00",
        "speaker": "Dr. Amit Khandelwal",
        "role": "Host",
        "avatar": "/assets/podcast/asset_01_8add66c3.jpg",
        "text": "Welcome to Episode 7 of The AI Jungle. Today we confront Weathering the Storm: Algorithmic Drift and Failover Architecture."
      }
    ],
    "comicBridge": {
      "title": "The AI Jungle Graphic Novel: Episode Companion",
      "issueNumber": "Issue 02",
      "narrativeConnection": "Explore how this strategic dilemma is visualized in graphic novel spreads.",
      "coverImage": "/assets/sample/comic_pages/page_02.jpg",
      "comicSlug": "the-jungle-audit",
      "readerSlug": "the-jungle-audit"
    },
    "relatedEpisodes": [
      "ep-08-jungle-audit",
      "ep-01-the-seed-of-silicon"
    ]
  },
  {
    "id": "ep-10",
    "slug": "ep-10-the-kings-checklist",
    "episodeNumber": "Episode 08",
    "season": "Season 01",
    "title": "The King's Checklist: 10 Non-Negotiable Enterprise AI Milestones",
    "subtitle": "A Masterclass Transmission on Enterprise AI Sovereignty",
    "description": "Executive discussion featuring Dr. Amit Khandelwal, The Sovereign Lion and global transformation pioneers.",
    "duration": "37:45",
    "durationSeconds": 2265,
    "publishDate": "October 3, 2026",
    "categories": [
      "AI Strategy",
      "AI Strategy",
      "Enterprise Transformation"
    ],
    "featured": false,
    "ratingSample": "4.92 / 5.0",
    "ratingsCountSample": "780 Executive Reviews",
    "videoPoster": "/assets/podcast/asset_04_0bb8543c.jpg",
    "audioUrl": "/assets/sample/podcast-teaser-03.mp4",
    "dialogists": [
      {
        "name": "Dr. Amit Khandelwal",
        "role": "Author & Host",
        "organization": "The AI Jungle Media",
        "avatar": "/assets/podcast/asset_01_8add66c3.jpg",
        "bio": "Sovereign AI transformation leader with 28 years of enterprise experience."
      },
      {
        "name": "The Sovereign Lion",
        "role": "Executive Council",
        "organization": "The AI Jungle Syndicate",
        "avatar": "/assets/podcast/asset_02_8ff26d0d.jpg",
        "bio": "Canonical archetype commanding enterprise transformation domains."
      }
    ],
    "chapters": [
      {
        "id": "c1",
        "timeInSeconds": 0,
        "timestamp": "00:00",
        "title": "Strategic Briefing",
        "description": "Foundational breakdown of the operational mandate."
      },
      {
        "id": "c2",
        "timeInSeconds": 600,
        "timestamp": "10:00",
        "title": "Execution Architecture",
        "description": "Deploying resilient mechanisms across the enterprise mesh."
      }
    ],
    "extractions": [
      {
        "id": "e1",
        "principleNumber": "08",
        "title": "The King's Checklist",
        "directive": "Never compromise sovereign strategic context; orchestrate autonomous mechanisms with deterministic safeguards.",
        "champion": "The Sovereign Lion",
        "badge": "Executive Directive"
      }
    ],
    "transcript": [
      {
        "id": "tr-1",
        "timeInSeconds": 0,
        "timestamp": "00:00",
        "speaker": "Dr. Amit Khandelwal",
        "role": "Host",
        "avatar": "/assets/podcast/asset_01_8add66c3.jpg",
        "text": "Welcome to Episode 8 of The AI Jungle. Today we confront The King's Checklist: 10 Non-Negotiable Enterprise AI Milestones."
      }
    ],
    "comicBridge": {
      "title": "The AI Jungle Graphic Novel: Episode Companion",
      "issueNumber": "Issue 03",
      "narrativeConnection": "Explore how this strategic dilemma is visualized in graphic novel spreads.",
      "coverImage": "/assets/sample/comic_pages/page_03.jpg",
      "comicSlug": "the-jungle-audit",
      "readerSlug": "the-jungle-audit"
    },
    "relatedEpisodes": [
      "ep-08-jungle-audit",
      "ep-01-the-seed-of-silicon"
    ]
  },
  {
    "id": "ep-11",
    "slug": "ep-11-the-stakeholder-safari",
    "episodeNumber": "Episode 09",
    "season": "Season 01",
    "title": "The Stakeholder Safari: Winning Board, Customer & Workforce Trust",
    "subtitle": "A Masterclass Transmission on Enterprise AI Sovereignty",
    "description": "Executive discussion featuring Dr. Amit Khandelwal, The Dazzling Peacock and global transformation pioneers.",
    "duration": "38:45",
    "durationSeconds": 2325,
    "publishDate": "October 4, 2026",
    "categories": [
      "Change Management",
      "AI Strategy",
      "Enterprise Transformation"
    ],
    "featured": false,
    "ratingSample": "4.93 / 5.0",
    "ratingsCountSample": "820 Executive Reviews",
    "videoPoster": "/assets/podcast/asset_04_0bb8543c.jpg",
    "audioUrl": "/assets/sample/podcast-teaser-01.mp4",
    "dialogists": [
      {
        "name": "Dr. Amit Khandelwal",
        "role": "Author & Host",
        "organization": "The AI Jungle Media",
        "avatar": "/assets/podcast/asset_01_8add66c3.jpg",
        "bio": "Sovereign AI transformation leader with 28 years of enterprise experience."
      },
      {
        "name": "The Dazzling Peacock",
        "role": "Executive Council",
        "organization": "The AI Jungle Syndicate",
        "avatar": "/assets/podcast/asset_02_8ff26d0d.jpg",
        "bio": "Canonical archetype commanding enterprise transformation domains."
      }
    ],
    "chapters": [
      {
        "id": "c1",
        "timeInSeconds": 0,
        "timestamp": "00:00",
        "title": "Strategic Briefing",
        "description": "Foundational breakdown of the operational mandate."
      },
      {
        "id": "c2",
        "timeInSeconds": 600,
        "timestamp": "10:00",
        "title": "Execution Architecture",
        "description": "Deploying resilient mechanisms across the enterprise mesh."
      }
    ],
    "extractions": [
      {
        "id": "e1",
        "principleNumber": "09",
        "title": "The Stakeholder Safari",
        "directive": "Never compromise sovereign strategic context; orchestrate autonomous mechanisms with deterministic safeguards.",
        "champion": "The Dazzling Peacock",
        "badge": "Executive Directive"
      }
    ],
    "transcript": [
      {
        "id": "tr-1",
        "timeInSeconds": 0,
        "timestamp": "00:00",
        "speaker": "Dr. Amit Khandelwal",
        "role": "Host",
        "avatar": "/assets/podcast/asset_01_8add66c3.jpg",
        "text": "Welcome to Episode 9 of The AI Jungle. Today we confront The Stakeholder Safari: Winning Board, Customer & Workforce Trust."
      }
    ],
    "comicBridge": {
      "title": "The AI Jungle Graphic Novel: Episode Companion",
      "issueNumber": "Issue 04",
      "narrativeConnection": "Explore how this strategic dilemma is visualized in graphic novel spreads.",
      "coverImage": "/assets/sample/comic_pages/page_04.jpg",
      "comicSlug": "the-jungle-audit",
      "readerSlug": "the-jungle-audit"
    },
    "relatedEpisodes": [
      "ep-08-jungle-audit",
      "ep-01-the-seed-of-silicon"
    ]
  },
  {
    "id": "ep-12",
    "slug": "ep-12-the-kings-treasury",
    "episodeNumber": "Episode 10",
    "season": "Season 01",
    "title": "The King's Treasury: Balancing Model Capital Allocation & Unit Economics",
    "subtitle": "A Masterclass Transmission on Enterprise AI Sovereignty",
    "description": "Executive discussion featuring Dr. Amit Khandelwal, The Sovereign Lion and global transformation pioneers.",
    "duration": "39:45",
    "durationSeconds": 2385,
    "publishDate": "October 5, 2026",
    "categories": [
      "Finance & ROI",
      "AI Strategy",
      "Enterprise Transformation"
    ],
    "featured": false,
    "ratingSample": "4.94 / 5.0",
    "ratingsCountSample": "860 Executive Reviews",
    "videoPoster": "/assets/podcast/asset_04_0bb8543c.jpg",
    "audioUrl": "/assets/sample/podcast-teaser-02.mp4",
    "dialogists": [
      {
        "name": "Dr. Amit Khandelwal",
        "role": "Author & Host",
        "organization": "The AI Jungle Media",
        "avatar": "/assets/podcast/asset_01_8add66c3.jpg",
        "bio": "Sovereign AI transformation leader with 28 years of enterprise experience."
      },
      {
        "name": "The Sovereign Lion",
        "role": "Executive Council",
        "organization": "The AI Jungle Syndicate",
        "avatar": "/assets/podcast/asset_02_8ff26d0d.jpg",
        "bio": "Canonical archetype commanding enterprise transformation domains."
      }
    ],
    "chapters": [
      {
        "id": "c1",
        "timeInSeconds": 0,
        "timestamp": "00:00",
        "title": "Strategic Briefing",
        "description": "Foundational breakdown of the operational mandate."
      },
      {
        "id": "c2",
        "timeInSeconds": 600,
        "timestamp": "10:00",
        "title": "Execution Architecture",
        "description": "Deploying resilient mechanisms across the enterprise mesh."
      }
    ],
    "extractions": [
      {
        "id": "e1",
        "principleNumber": "10",
        "title": "The King's Treasury",
        "directive": "Never compromise sovereign strategic context; orchestrate autonomous mechanisms with deterministic safeguards.",
        "champion": "The Sovereign Lion",
        "badge": "Executive Directive"
      }
    ],
    "transcript": [
      {
        "id": "tr-1",
        "timeInSeconds": 0,
        "timestamp": "00:00",
        "speaker": "Dr. Amit Khandelwal",
        "role": "Host",
        "avatar": "/assets/podcast/asset_01_8add66c3.jpg",
        "text": "Welcome to Episode 10 of The AI Jungle. Today we confront The King's Treasury: Balancing Model Capital Allocation & Unit Economics."
      }
    ],
    "comicBridge": {
      "title": "The AI Jungle Graphic Novel: Episode Companion",
      "issueNumber": "Issue 05",
      "narrativeConnection": "Explore how this strategic dilemma is visualized in graphic novel spreads.",
      "coverImage": "/assets/sample/comic_pages/page_01.jpg",
      "comicSlug": "the-jungle-audit",
      "readerSlug": "the-jungle-audit"
    },
    "relatedEpisodes": [
      "ep-08-jungle-audit",
      "ep-01-the-seed-of-silicon"
    ]
  },
  {
    "id": "ep-13",
    "slug": "ep-13-the-crown-of-ai",
    "episodeNumber": "Episode 11",
    "season": "Season 01",
    "title": "The Crown of AI: Turning Sovereign Intelligence into Lasting Moats",
    "subtitle": "A Masterclass Transmission on Enterprise AI Sovereignty",
    "description": "Executive discussion featuring Dr. Amit Khandelwal, Dr. Amit Khandelwal and global transformation pioneers.",
    "duration": "40:45",
    "durationSeconds": 2445,
    "publishDate": "October 6, 2026",
    "categories": [
      "Enterprise Transformation",
      "AI Strategy",
      "Enterprise Transformation"
    ],
    "featured": false,
    "ratingSample": "4.95 / 5.0",
    "ratingsCountSample": "900 Executive Reviews",
    "videoPoster": "/assets/podcast/asset_04_0bb8543c.jpg",
    "audioUrl": "/assets/sample/podcast-teaser-03.mp4",
    "dialogists": [
      {
        "name": "Dr. Amit Khandelwal",
        "role": "Author & Host",
        "organization": "The AI Jungle Media",
        "avatar": "/assets/podcast/asset_01_8add66c3.jpg",
        "bio": "Sovereign AI transformation leader with 28 years of enterprise experience."
      },
      {
        "name": "Dr. Amit Khandelwal",
        "role": "Executive Council",
        "organization": "The AI Jungle Syndicate",
        "avatar": "/assets/podcast/asset_02_8ff26d0d.jpg",
        "bio": "Canonical archetype commanding enterprise transformation domains."
      }
    ],
    "chapters": [
      {
        "id": "c1",
        "timeInSeconds": 0,
        "timestamp": "00:00",
        "title": "Strategic Briefing",
        "description": "Foundational breakdown of the operational mandate."
      },
      {
        "id": "c2",
        "timeInSeconds": 600,
        "timestamp": "10:00",
        "title": "Execution Architecture",
        "description": "Deploying resilient mechanisms across the enterprise mesh."
      }
    ],
    "extractions": [
      {
        "id": "e1",
        "principleNumber": "11",
        "title": "The Crown of AI",
        "directive": "Never compromise sovereign strategic context; orchestrate autonomous mechanisms with deterministic safeguards.",
        "champion": "Dr. Amit Khandelwal",
        "badge": "Executive Directive"
      }
    ],
    "transcript": [
      {
        "id": "tr-1",
        "timeInSeconds": 0,
        "timestamp": "00:00",
        "speaker": "Dr. Amit Khandelwal",
        "role": "Host",
        "avatar": "/assets/podcast/asset_01_8add66c3.jpg",
        "text": "Welcome to Episode 11 of The AI Jungle. Today we confront The Crown of AI: Turning Sovereign Intelligence into Lasting Moats."
      }
    ],
    "comicBridge": {
      "title": "The AI Jungle Graphic Novel: Episode Companion",
      "issueNumber": "Issue 01",
      "narrativeConnection": "Explore how this strategic dilemma is visualized in graphic novel spreads.",
      "coverImage": "/assets/sample/comic_pages/page_02.jpg",
      "comicSlug": "the-jungle-audit",
      "readerSlug": "the-jungle-audit"
    },
    "relatedEpisodes": [
      "ep-08-jungle-audit",
      "ep-01-the-seed-of-silicon"
    ]
  },
  {
    "id": "ep-14",
    "slug": "ep-14-synthetic-data-foundries",
    "episodeNumber": "Episode 12",
    "season": "Season 01",
    "title": "Synthetic Data Foundries: Training Small Models on Pristine Context",
    "subtitle": "A Masterclass Transmission on Enterprise AI Sovereignty",
    "description": "Executive discussion featuring Dr. Amit Khandelwal, The Great Elephant and global transformation pioneers.",
    "duration": "41:45",
    "durationSeconds": 2505,
    "publishDate": "October 7, 2026",
    "categories": [
      "Data Strategy",
      "AI Strategy",
      "Enterprise Transformation"
    ],
    "featured": false,
    "ratingSample": "4.96 / 5.0",
    "ratingsCountSample": "940 Executive Reviews",
    "videoPoster": "/assets/podcast/asset_04_0bb8543c.jpg",
    "audioUrl": "/assets/sample/podcast-teaser-01.mp4",
    "dialogists": [
      {
        "name": "Dr. Amit Khandelwal",
        "role": "Author & Host",
        "organization": "The AI Jungle Media",
        "avatar": "/assets/podcast/asset_01_8add66c3.jpg",
        "bio": "Sovereign AI transformation leader with 28 years of enterprise experience."
      },
      {
        "name": "The Great Elephant",
        "role": "Executive Council",
        "organization": "The AI Jungle Syndicate",
        "avatar": "/assets/podcast/asset_02_8ff26d0d.jpg",
        "bio": "Canonical archetype commanding enterprise transformation domains."
      }
    ],
    "chapters": [
      {
        "id": "c1",
        "timeInSeconds": 0,
        "timestamp": "00:00",
        "title": "Strategic Briefing",
        "description": "Foundational breakdown of the operational mandate."
      },
      {
        "id": "c2",
        "timeInSeconds": 600,
        "timestamp": "10:00",
        "title": "Execution Architecture",
        "description": "Deploying resilient mechanisms across the enterprise mesh."
      }
    ],
    "extractions": [
      {
        "id": "e1",
        "principleNumber": "12",
        "title": "Synthetic Data Foundries",
        "directive": "Never compromise sovereign strategic context; orchestrate autonomous mechanisms with deterministic safeguards.",
        "champion": "The Great Elephant",
        "badge": "Executive Directive"
      }
    ],
    "transcript": [
      {
        "id": "tr-1",
        "timeInSeconds": 0,
        "timestamp": "00:00",
        "speaker": "Dr. Amit Khandelwal",
        "role": "Host",
        "avatar": "/assets/podcast/asset_01_8add66c3.jpg",
        "text": "Welcome to Episode 12 of The AI Jungle. Today we confront Synthetic Data Foundries: Training Small Models on Pristine Context."
      }
    ],
    "comicBridge": {
      "title": "The AI Jungle Graphic Novel: Episode Companion",
      "issueNumber": "Issue 02",
      "narrativeConnection": "Explore how this strategic dilemma is visualized in graphic novel spreads.",
      "coverImage": "/assets/sample/comic_pages/page_03.jpg",
      "comicSlug": "the-jungle-audit",
      "readerSlug": "the-jungle-audit"
    },
    "relatedEpisodes": [
      "ep-08-jungle-audit",
      "ep-01-the-seed-of-silicon"
    ]
  },
  {
    "id": "ep-15",
    "slug": "ep-15-the-cunning-path",
    "episodeNumber": "Episode 13",
    "season": "Season 01",
    "title": "The Cunning Path: Exploiting Competitor Algorithmic Inertia",
    "subtitle": "A Masterclass Transmission on Enterprise AI Sovereignty",
    "description": "Executive discussion featuring Dr. Amit Khandelwal, The Clever Fox and global transformation pioneers.",
    "duration": "42:45",
    "durationSeconds": 2565,
    "publishDate": "October 8, 2026",
    "categories": [
      "Innovation",
      "AI Strategy",
      "Enterprise Transformation"
    ],
    "featured": false,
    "ratingSample": "4.97 / 5.0",
    "ratingsCountSample": "980 Executive Reviews",
    "videoPoster": "/assets/podcast/asset_04_0bb8543c.jpg",
    "audioUrl": "/assets/sample/podcast-teaser-02.mp4",
    "dialogists": [
      {
        "name": "Dr. Amit Khandelwal",
        "role": "Author & Host",
        "organization": "The AI Jungle Media",
        "avatar": "/assets/podcast/asset_01_8add66c3.jpg",
        "bio": "Sovereign AI transformation leader with 28 years of enterprise experience."
      },
      {
        "name": "The Clever Fox",
        "role": "Executive Council",
        "organization": "The AI Jungle Syndicate",
        "avatar": "/assets/podcast/asset_02_8ff26d0d.jpg",
        "bio": "Canonical archetype commanding enterprise transformation domains."
      }
    ],
    "chapters": [
      {
        "id": "c1",
        "timeInSeconds": 0,
        "timestamp": "00:00",
        "title": "Strategic Briefing",
        "description": "Foundational breakdown of the operational mandate."
      },
      {
        "id": "c2",
        "timeInSeconds": 600,
        "timestamp": "10:00",
        "title": "Execution Architecture",
        "description": "Deploying resilient mechanisms across the enterprise mesh."
      }
    ],
    "extractions": [
      {
        "id": "e1",
        "principleNumber": "13",
        "title": "The Cunning Path",
        "directive": "Never compromise sovereign strategic context; orchestrate autonomous mechanisms with deterministic safeguards.",
        "champion": "The Clever Fox",
        "badge": "Executive Directive"
      }
    ],
    "transcript": [
      {
        "id": "tr-1",
        "timeInSeconds": 0,
        "timestamp": "00:00",
        "speaker": "Dr. Amit Khandelwal",
        "role": "Host",
        "avatar": "/assets/podcast/asset_01_8add66c3.jpg",
        "text": "Welcome to Episode 13 of The AI Jungle. Today we confront The Cunning Path: Exploiting Competitor Algorithmic Inertia."
      }
    ],
    "comicBridge": {
      "title": "The AI Jungle Graphic Novel: Episode Companion",
      "issueNumber": "Issue 03",
      "narrativeConnection": "Explore how this strategic dilemma is visualized in graphic novel spreads.",
      "coverImage": "/assets/sample/comic_pages/page_04.jpg",
      "comicSlug": "the-jungle-audit",
      "readerSlug": "the-jungle-audit"
    },
    "relatedEpisodes": [
      "ep-08-jungle-audit",
      "ep-01-the-seed-of-silicon"
    ]
  },
  {
    "id": "ep-16",
    "slug": "ep-16-the-ant-colony",
    "episodeNumber": "Episode 14",
    "season": "Season 02",
    "title": "The Ant Colony: Workforce Upskilling and Autonomous Squad Deployment",
    "subtitle": "A Masterclass Transmission on Enterprise AI Sovereignty",
    "description": "Executive discussion featuring Dr. Amit Khandelwal, The Industrious Ant and global transformation pioneers.",
    "duration": "43:45",
    "durationSeconds": 2625,
    "publishDate": "October 9, 2026",
    "categories": [
      "Workforce Transformation",
      "AI Strategy",
      "Enterprise Transformation"
    ],
    "featured": false,
    "ratingSample": "4.98 / 5.0",
    "ratingsCountSample": "1020 Executive Reviews",
    "videoPoster": "/assets/podcast/asset_04_0bb8543c.jpg",
    "audioUrl": "/assets/sample/podcast-teaser-03.mp4",
    "dialogists": [
      {
        "name": "Dr. Amit Khandelwal",
        "role": "Author & Host",
        "organization": "The AI Jungle Media",
        "avatar": "/assets/podcast/asset_01_8add66c3.jpg",
        "bio": "Sovereign AI transformation leader with 28 years of enterprise experience."
      },
      {
        "name": "The Industrious Ant",
        "role": "Executive Council",
        "organization": "The AI Jungle Syndicate",
        "avatar": "/assets/podcast/asset_02_8ff26d0d.jpg",
        "bio": "Canonical archetype commanding enterprise transformation domains."
      }
    ],
    "chapters": [
      {
        "id": "c1",
        "timeInSeconds": 0,
        "timestamp": "00:00",
        "title": "Strategic Briefing",
        "description": "Foundational breakdown of the operational mandate."
      },
      {
        "id": "c2",
        "timeInSeconds": 600,
        "timestamp": "10:00",
        "title": "Execution Architecture",
        "description": "Deploying resilient mechanisms across the enterprise mesh."
      }
    ],
    "extractions": [
      {
        "id": "e1",
        "principleNumber": "14",
        "title": "The Ant Colony",
        "directive": "Never compromise sovereign strategic context; orchestrate autonomous mechanisms with deterministic safeguards.",
        "champion": "The Industrious Ant",
        "badge": "Executive Directive"
      }
    ],
    "transcript": [
      {
        "id": "tr-1",
        "timeInSeconds": 0,
        "timestamp": "00:00",
        "speaker": "Dr. Amit Khandelwal",
        "role": "Host",
        "avatar": "/assets/podcast/asset_01_8add66c3.jpg",
        "text": "Welcome to Episode 14 of The AI Jungle. Today we confront The Ant Colony: Workforce Upskilling and Autonomous Squad Deployment."
      }
    ],
    "comicBridge": {
      "title": "The AI Jungle Graphic Novel: Episode Companion",
      "issueNumber": "Issue 04",
      "narrativeConnection": "Explore how this strategic dilemma is visualized in graphic novel spreads.",
      "coverImage": "/assets/sample/comic_pages/page_01.jpg",
      "comicSlug": "the-jungle-audit",
      "readerSlug": "the-jungle-audit"
    },
    "relatedEpisodes": [
      "ep-08-jungle-audit",
      "ep-01-the-seed-of-silicon"
    ]
  },
  {
    "id": "ep-17",
    "slug": "ep-17-agentic-swarms-in-action",
    "episodeNumber": "Episode 15",
    "season": "Season 02",
    "title": "Agentic Swarms in Action: Orchestrating 100+ Specialized LLMs",
    "subtitle": "A Masterclass Transmission on Enterprise AI Sovereignty",
    "description": "Executive discussion featuring Dr. Amit Khandelwal, The Swift Cheetah and global transformation pioneers.",
    "duration": "44:45",
    "durationSeconds": 2685,
    "publishDate": "October 10, 2026",
    "categories": [
      "Autonomous Agents",
      "AI Strategy",
      "Enterprise Transformation"
    ],
    "featured": false,
    "ratingSample": "4.90 / 5.0",
    "ratingsCountSample": "1060 Executive Reviews",
    "videoPoster": "/assets/podcast/asset_04_0bb8543c.jpg",
    "audioUrl": "/assets/sample/podcast-teaser-01.mp4",
    "dialogists": [
      {
        "name": "Dr. Amit Khandelwal",
        "role": "Author & Host",
        "organization": "The AI Jungle Media",
        "avatar": "/assets/podcast/asset_01_8add66c3.jpg",
        "bio": "Sovereign AI transformation leader with 28 years of enterprise experience."
      },
      {
        "name": "The Swift Cheetah",
        "role": "Executive Council",
        "organization": "The AI Jungle Syndicate",
        "avatar": "/assets/podcast/asset_02_8ff26d0d.jpg",
        "bio": "Canonical archetype commanding enterprise transformation domains."
      }
    ],
    "chapters": [
      {
        "id": "c1",
        "timeInSeconds": 0,
        "timestamp": "00:00",
        "title": "Strategic Briefing",
        "description": "Foundational breakdown of the operational mandate."
      },
      {
        "id": "c2",
        "timeInSeconds": 600,
        "timestamp": "10:00",
        "title": "Execution Architecture",
        "description": "Deploying resilient mechanisms across the enterprise mesh."
      }
    ],
    "extractions": [
      {
        "id": "e1",
        "principleNumber": "15",
        "title": "Agentic Swarms in Action",
        "directive": "Never compromise sovereign strategic context; orchestrate autonomous mechanisms with deterministic safeguards.",
        "champion": "The Swift Cheetah",
        "badge": "Executive Directive"
      }
    ],
    "transcript": [
      {
        "id": "tr-1",
        "timeInSeconds": 0,
        "timestamp": "00:00",
        "speaker": "Dr. Amit Khandelwal",
        "role": "Host",
        "avatar": "/assets/podcast/asset_01_8add66c3.jpg",
        "text": "Welcome to Episode 15 of The AI Jungle. Today we confront Agentic Swarms in Action: Orchestrating 100+ Specialized LLMs."
      }
    ],
    "comicBridge": {
      "title": "The AI Jungle Graphic Novel: Episode Companion",
      "issueNumber": "Issue 05",
      "narrativeConnection": "Explore how this strategic dilemma is visualized in graphic novel spreads.",
      "coverImage": "/assets/sample/comic_pages/page_02.jpg",
      "comicSlug": "the-jungle-audit",
      "readerSlug": "the-jungle-audit"
    },
    "relatedEpisodes": [
      "ep-08-jungle-audit",
      "ep-01-the-seed-of-silicon"
    ]
  },
  {
    "id": "ep-18",
    "slug": "ep-18-prompt-compiler-architectures",
    "episodeNumber": "Episode 16",
    "season": "Season 02",
    "title": "Prompt Compiler Architectures: Deterministic Parsing for Enterprise",
    "subtitle": "A Masterclass Transmission on Enterprise AI Sovereignty",
    "description": "Executive discussion featuring Dr. Amit Khandelwal, The Vigilant Owl and global transformation pioneers.",
    "duration": "45:45",
    "durationSeconds": 2745,
    "publishDate": "October 11, 2026",
    "categories": [
      "AI Governance",
      "AI Strategy",
      "Enterprise Transformation"
    ],
    "featured": false,
    "ratingSample": "4.91 / 5.0",
    "ratingsCountSample": "1100 Executive Reviews",
    "videoPoster": "/assets/podcast/asset_04_0bb8543c.jpg",
    "audioUrl": "/assets/sample/podcast-teaser-02.mp4",
    "dialogists": [
      {
        "name": "Dr. Amit Khandelwal",
        "role": "Author & Host",
        "organization": "The AI Jungle Media",
        "avatar": "/assets/podcast/asset_01_8add66c3.jpg",
        "bio": "Sovereign AI transformation leader with 28 years of enterprise experience."
      },
      {
        "name": "The Vigilant Owl",
        "role": "Executive Council",
        "organization": "The AI Jungle Syndicate",
        "avatar": "/assets/podcast/asset_02_8ff26d0d.jpg",
        "bio": "Canonical archetype commanding enterprise transformation domains."
      }
    ],
    "chapters": [
      {
        "id": "c1",
        "timeInSeconds": 0,
        "timestamp": "00:00",
        "title": "Strategic Briefing",
        "description": "Foundational breakdown of the operational mandate."
      },
      {
        "id": "c2",
        "timeInSeconds": 600,
        "timestamp": "10:00",
        "title": "Execution Architecture",
        "description": "Deploying resilient mechanisms across the enterprise mesh."
      }
    ],
    "extractions": [
      {
        "id": "e1",
        "principleNumber": "16",
        "title": "Prompt Compiler Architectures",
        "directive": "Never compromise sovereign strategic context; orchestrate autonomous mechanisms with deterministic safeguards.",
        "champion": "The Vigilant Owl",
        "badge": "Executive Directive"
      }
    ],
    "transcript": [
      {
        "id": "tr-1",
        "timeInSeconds": 0,
        "timestamp": "00:00",
        "speaker": "Dr. Amit Khandelwal",
        "role": "Host",
        "avatar": "/assets/podcast/asset_01_8add66c3.jpg",
        "text": "Welcome to Episode 16 of The AI Jungle. Today we confront Prompt Compiler Architectures: Deterministic Parsing for Enterprise."
      }
    ],
    "comicBridge": {
      "title": "The AI Jungle Graphic Novel: Episode Companion",
      "issueNumber": "Issue 01",
      "narrativeConnection": "Explore how this strategic dilemma is visualized in graphic novel spreads.",
      "coverImage": "/assets/sample/comic_pages/page_03.jpg",
      "comicSlug": "the-jungle-audit",
      "readerSlug": "the-jungle-audit"
    },
    "relatedEpisodes": [
      "ep-08-jungle-audit",
      "ep-01-the-seed-of-silicon"
    ]
  },
  {
    "id": "ep-19",
    "slug": "ep-19-the-monkey-revolution",
    "episodeNumber": "Episode 17",
    "season": "Season 02",
    "title": "The Monkey Revolution: Turning Consumer GenAI into Structured Leverage",
    "subtitle": "A Masterclass Transmission on Enterprise AI Sovereignty",
    "description": "Executive discussion featuring Dr. Amit Khandelwal, The Curious Monkey and global transformation pioneers.",
    "duration": "46:45",
    "durationSeconds": 2805,
    "publishDate": "October 12, 2026",
    "categories": [
      "Productivity",
      "AI Strategy",
      "Enterprise Transformation"
    ],
    "featured": false,
    "ratingSample": "4.92 / 5.0",
    "ratingsCountSample": "1140 Executive Reviews",
    "videoPoster": "/assets/podcast/asset_04_0bb8543c.jpg",
    "audioUrl": "/assets/sample/podcast-teaser-03.mp4",
    "dialogists": [
      {
        "name": "Dr. Amit Khandelwal",
        "role": "Author & Host",
        "organization": "The AI Jungle Media",
        "avatar": "/assets/podcast/asset_01_8add66c3.jpg",
        "bio": "Sovereign AI transformation leader with 28 years of enterprise experience."
      },
      {
        "name": "The Curious Monkey",
        "role": "Executive Council",
        "organization": "The AI Jungle Syndicate",
        "avatar": "/assets/podcast/asset_02_8ff26d0d.jpg",
        "bio": "Canonical archetype commanding enterprise transformation domains."
      }
    ],
    "chapters": [
      {
        "id": "c1",
        "timeInSeconds": 0,
        "timestamp": "00:00",
        "title": "Strategic Briefing",
        "description": "Foundational breakdown of the operational mandate."
      },
      {
        "id": "c2",
        "timeInSeconds": 600,
        "timestamp": "10:00",
        "title": "Execution Architecture",
        "description": "Deploying resilient mechanisms across the enterprise mesh."
      }
    ],
    "extractions": [
      {
        "id": "e1",
        "principleNumber": "17",
        "title": "The Monkey Revolution",
        "directive": "Never compromise sovereign strategic context; orchestrate autonomous mechanisms with deterministic safeguards.",
        "champion": "The Curious Monkey",
        "badge": "Executive Directive"
      }
    ],
    "transcript": [
      {
        "id": "tr-1",
        "timeInSeconds": 0,
        "timestamp": "00:00",
        "speaker": "Dr. Amit Khandelwal",
        "role": "Host",
        "avatar": "/assets/podcast/asset_01_8add66c3.jpg",
        "text": "Welcome to Episode 17 of The AI Jungle. Today we confront The Monkey Revolution: Turning Consumer GenAI into Structured Leverage."
      }
    ],
    "comicBridge": {
      "title": "The AI Jungle Graphic Novel: Episode Companion",
      "issueNumber": "Issue 02",
      "narrativeConnection": "Explore how this strategic dilemma is visualized in graphic novel spreads.",
      "coverImage": "/assets/sample/comic_pages/page_04.jpg",
      "comicSlug": "the-jungle-audit",
      "readerSlug": "the-jungle-audit"
    },
    "relatedEpisodes": [
      "ep-08-jungle-audit",
      "ep-01-the-seed-of-silicon"
    ]
  },
  {
    "id": "ep-20",
    "slug": "ep-20-quantum-ready-canopy",
    "episodeNumber": "Episode 18",
    "season": "Season 02",
    "title": "Quantum-Ready Canopy: Long-Horizon Security for AI Model Weights",
    "subtitle": "A Masterclass Transmission on Enterprise AI Sovereignty",
    "description": "Executive discussion featuring Dr. Amit Khandelwal, The Sentinel Eagle and global transformation pioneers.",
    "duration": "47:45",
    "durationSeconds": 2865,
    "publishDate": "October 13, 2026",
    "categories": [
      "Cybersecurity",
      "AI Strategy",
      "Enterprise Transformation"
    ],
    "featured": false,
    "ratingSample": "4.93 / 5.0",
    "ratingsCountSample": "1180 Executive Reviews",
    "videoPoster": "/assets/podcast/asset_04_0bb8543c.jpg",
    "audioUrl": "/assets/sample/podcast-teaser-01.mp4",
    "dialogists": [
      {
        "name": "Dr. Amit Khandelwal",
        "role": "Author & Host",
        "organization": "The AI Jungle Media",
        "avatar": "/assets/podcast/asset_01_8add66c3.jpg",
        "bio": "Sovereign AI transformation leader with 28 years of enterprise experience."
      },
      {
        "name": "The Sentinel Eagle",
        "role": "Executive Council",
        "organization": "The AI Jungle Syndicate",
        "avatar": "/assets/podcast/asset_02_8ff26d0d.jpg",
        "bio": "Canonical archetype commanding enterprise transformation domains."
      }
    ],
    "chapters": [
      {
        "id": "c1",
        "timeInSeconds": 0,
        "timestamp": "00:00",
        "title": "Strategic Briefing",
        "description": "Foundational breakdown of the operational mandate."
      },
      {
        "id": "c2",
        "timeInSeconds": 600,
        "timestamp": "10:00",
        "title": "Execution Architecture",
        "description": "Deploying resilient mechanisms across the enterprise mesh."
      }
    ],
    "extractions": [
      {
        "id": "e1",
        "principleNumber": "18",
        "title": "Quantum-Ready Canopy",
        "directive": "Never compromise sovereign strategic context; orchestrate autonomous mechanisms with deterministic safeguards.",
        "champion": "The Sentinel Eagle",
        "badge": "Executive Directive"
      }
    ],
    "transcript": [
      {
        "id": "tr-1",
        "timeInSeconds": 0,
        "timestamp": "00:00",
        "speaker": "Dr. Amit Khandelwal",
        "role": "Host",
        "avatar": "/assets/podcast/asset_01_8add66c3.jpg",
        "text": "Welcome to Episode 18 of The AI Jungle. Today we confront Quantum-Ready Canopy: Long-Horizon Security for AI Model Weights."
      }
    ],
    "comicBridge": {
      "title": "The AI Jungle Graphic Novel: Episode Companion",
      "issueNumber": "Issue 03",
      "narrativeConnection": "Explore how this strategic dilemma is visualized in graphic novel spreads.",
      "coverImage": "/assets/sample/comic_pages/page_01.jpg",
      "comicSlug": "the-jungle-audit",
      "readerSlug": "the-jungle-audit"
    },
    "relatedEpisodes": [
      "ep-08-jungle-audit",
      "ep-01-the-seed-of-silicon"
    ]
  },
  {
    "id": "ep-21",
    "slug": "ep-21-the-omnichannel-peacock",
    "episodeNumber": "Episode 19",
    "season": "Season 02",
    "title": "The Omnichannel Peacock: Hyper-Personalized Enterprise Experience",
    "subtitle": "A Masterclass Transmission on Enterprise AI Sovereignty",
    "description": "Executive discussion featuring Dr. Amit Khandelwal, The Dazzling Peacock and global transformation pioneers.",
    "duration": "48:45",
    "durationSeconds": 2925,
    "publishDate": "October 14, 2026",
    "categories": [
      "Marketing & CX",
      "AI Strategy",
      "Enterprise Transformation"
    ],
    "featured": false,
    "ratingSample": "4.94 / 5.0",
    "ratingsCountSample": "1220 Executive Reviews",
    "videoPoster": "/assets/podcast/asset_04_0bb8543c.jpg",
    "audioUrl": "/assets/sample/podcast-teaser-02.mp4",
    "dialogists": [
      {
        "name": "Dr. Amit Khandelwal",
        "role": "Author & Host",
        "organization": "The AI Jungle Media",
        "avatar": "/assets/podcast/asset_01_8add66c3.jpg",
        "bio": "Sovereign AI transformation leader with 28 years of enterprise experience."
      },
      {
        "name": "The Dazzling Peacock",
        "role": "Executive Council",
        "organization": "The AI Jungle Syndicate",
        "avatar": "/assets/podcast/asset_02_8ff26d0d.jpg",
        "bio": "Canonical archetype commanding enterprise transformation domains."
      }
    ],
    "chapters": [
      {
        "id": "c1",
        "timeInSeconds": 0,
        "timestamp": "00:00",
        "title": "Strategic Briefing",
        "description": "Foundational breakdown of the operational mandate."
      },
      {
        "id": "c2",
        "timeInSeconds": 600,
        "timestamp": "10:00",
        "title": "Execution Architecture",
        "description": "Deploying resilient mechanisms across the enterprise mesh."
      }
    ],
    "extractions": [
      {
        "id": "e1",
        "principleNumber": "19",
        "title": "The Omnichannel Peacock",
        "directive": "Never compromise sovereign strategic context; orchestrate autonomous mechanisms with deterministic safeguards.",
        "champion": "The Dazzling Peacock",
        "badge": "Executive Directive"
      }
    ],
    "transcript": [
      {
        "id": "tr-1",
        "timeInSeconds": 0,
        "timestamp": "00:00",
        "speaker": "Dr. Amit Khandelwal",
        "role": "Host",
        "avatar": "/assets/podcast/asset_01_8add66c3.jpg",
        "text": "Welcome to Episode 19 of The AI Jungle. Today we confront The Omnichannel Peacock: Hyper-Personalized Enterprise Experience."
      }
    ],
    "comicBridge": {
      "title": "The AI Jungle Graphic Novel: Episode Companion",
      "issueNumber": "Issue 04",
      "narrativeConnection": "Explore how this strategic dilemma is visualized in graphic novel spreads.",
      "coverImage": "/assets/sample/comic_pages/page_02.jpg",
      "comicSlug": "the-jungle-audit",
      "readerSlug": "the-jungle-audit"
    },
    "relatedEpisodes": [
      "ep-08-jungle-audit",
      "ep-01-the-seed-of-silicon"
    ]
  },
  {
    "id": "ep-22",
    "slug": "ep-22-vector-lakehouse-blueprints",
    "episodeNumber": "Episode 20",
    "season": "Season 02",
    "title": "Vector Lakehouse Blueprints: Petabyte Context Windows in Production",
    "subtitle": "A Masterclass Transmission on Enterprise AI Sovereignty",
    "description": "Executive discussion featuring Dr. Amit Khandelwal, The Great Elephant and global transformation pioneers.",
    "duration": "49:45",
    "durationSeconds": 2985,
    "publishDate": "October 15, 2026",
    "categories": [
      "Data Strategy",
      "AI Strategy",
      "Enterprise Transformation"
    ],
    "featured": false,
    "ratingSample": "4.95 / 5.0",
    "ratingsCountSample": "1260 Executive Reviews",
    "videoPoster": "/assets/podcast/asset_04_0bb8543c.jpg",
    "audioUrl": "/assets/sample/podcast-teaser-03.mp4",
    "dialogists": [
      {
        "name": "Dr. Amit Khandelwal",
        "role": "Author & Host",
        "organization": "The AI Jungle Media",
        "avatar": "/assets/podcast/asset_01_8add66c3.jpg",
        "bio": "Sovereign AI transformation leader with 28 years of enterprise experience."
      },
      {
        "name": "The Great Elephant",
        "role": "Executive Council",
        "organization": "The AI Jungle Syndicate",
        "avatar": "/assets/podcast/asset_02_8ff26d0d.jpg",
        "bio": "Canonical archetype commanding enterprise transformation domains."
      }
    ],
    "chapters": [
      {
        "id": "c1",
        "timeInSeconds": 0,
        "timestamp": "00:00",
        "title": "Strategic Briefing",
        "description": "Foundational breakdown of the operational mandate."
      },
      {
        "id": "c2",
        "timeInSeconds": 600,
        "timestamp": "10:00",
        "title": "Execution Architecture",
        "description": "Deploying resilient mechanisms across the enterprise mesh."
      }
    ],
    "extractions": [
      {
        "id": "e1",
        "principleNumber": "20",
        "title": "Vector Lakehouse Blueprints",
        "directive": "Never compromise sovereign strategic context; orchestrate autonomous mechanisms with deterministic safeguards.",
        "champion": "The Great Elephant",
        "badge": "Executive Directive"
      }
    ],
    "transcript": [
      {
        "id": "tr-1",
        "timeInSeconds": 0,
        "timestamp": "00:00",
        "speaker": "Dr. Amit Khandelwal",
        "role": "Host",
        "avatar": "/assets/podcast/asset_01_8add66c3.jpg",
        "text": "Welcome to Episode 20 of The AI Jungle. Today we confront Vector Lakehouse Blueprints: Petabyte Context Windows in Production."
      }
    ],
    "comicBridge": {
      "title": "The AI Jungle Graphic Novel: Episode Companion",
      "issueNumber": "Issue 05",
      "narrativeConnection": "Explore how this strategic dilemma is visualized in graphic novel spreads.",
      "coverImage": "/assets/sample/comic_pages/page_03.jpg",
      "comicSlug": "the-jungle-audit",
      "readerSlug": "the-jungle-audit"
    },
    "relatedEpisodes": [
      "ep-08-jungle-audit",
      "ep-01-the-seed-of-silicon"
    ]
  },
  {
    "id": "ep-23",
    "slug": "ep-23-multi-agent-conflict-resolution",
    "episodeNumber": "Episode 21",
    "season": "Season 02",
    "title": "Multi-Agent Conflict Resolution: Arbitration Protocols for Swarms",
    "subtitle": "A Masterclass Transmission on Enterprise AI Sovereignty",
    "description": "Executive discussion featuring Dr. Amit Khandelwal, The Sovereign Lion and global transformation pioneers.",
    "duration": "35:45",
    "durationSeconds": 2145,
    "publishDate": "October 16, 2026",
    "categories": [
      "Autonomous Agents",
      "AI Strategy",
      "Enterprise Transformation"
    ],
    "featured": false,
    "ratingSample": "4.96 / 5.0",
    "ratingsCountSample": "1300 Executive Reviews",
    "videoPoster": "/assets/podcast/asset_04_0bb8543c.jpg",
    "audioUrl": "/assets/sample/podcast-teaser-01.mp4",
    "dialogists": [
      {
        "name": "Dr. Amit Khandelwal",
        "role": "Author & Host",
        "organization": "The AI Jungle Media",
        "avatar": "/assets/podcast/asset_01_8add66c3.jpg",
        "bio": "Sovereign AI transformation leader with 28 years of enterprise experience."
      },
      {
        "name": "The Sovereign Lion",
        "role": "Executive Council",
        "organization": "The AI Jungle Syndicate",
        "avatar": "/assets/podcast/asset_02_8ff26d0d.jpg",
        "bio": "Canonical archetype commanding enterprise transformation domains."
      }
    ],
    "chapters": [
      {
        "id": "c1",
        "timeInSeconds": 0,
        "timestamp": "00:00",
        "title": "Strategic Briefing",
        "description": "Foundational breakdown of the operational mandate."
      },
      {
        "id": "c2",
        "timeInSeconds": 600,
        "timestamp": "10:00",
        "title": "Execution Architecture",
        "description": "Deploying resilient mechanisms across the enterprise mesh."
      }
    ],
    "extractions": [
      {
        "id": "e1",
        "principleNumber": "21",
        "title": "Multi-Agent Conflict Resolution",
        "directive": "Never compromise sovereign strategic context; orchestrate autonomous mechanisms with deterministic safeguards.",
        "champion": "The Sovereign Lion",
        "badge": "Executive Directive"
      }
    ],
    "transcript": [
      {
        "id": "tr-1",
        "timeInSeconds": 0,
        "timestamp": "00:00",
        "speaker": "Dr. Amit Khandelwal",
        "role": "Host",
        "avatar": "/assets/podcast/asset_01_8add66c3.jpg",
        "text": "Welcome to Episode 21 of The AI Jungle. Today we confront Multi-Agent Conflict Resolution: Arbitration Protocols for Swarms."
      }
    ],
    "comicBridge": {
      "title": "The AI Jungle Graphic Novel: Episode Companion",
      "issueNumber": "Issue 01",
      "narrativeConnection": "Explore how this strategic dilemma is visualized in graphic novel spreads.",
      "coverImage": "/assets/sample/comic_pages/page_04.jpg",
      "comicSlug": "the-jungle-audit",
      "readerSlug": "the-jungle-audit"
    },
    "relatedEpisodes": [
      "ep-08-jungle-audit",
      "ep-01-the-seed-of-silicon"
    ]
  },
  {
    "id": "ep-24",
    "slug": "ep-24-the-sovereign-audit-playbook",
    "episodeNumber": "Episode 22",
    "season": "Season 02",
    "title": "The Sovereign Audit Playbook: Preparing Your Board for Autonomous Operations",
    "subtitle": "A Masterclass Transmission on Enterprise AI Sovereignty",
    "description": "Executive discussion featuring Dr. Amit Khandelwal, Dr. Amit Khandelwal and global transformation pioneers.",
    "duration": "36:45",
    "durationSeconds": 2205,
    "publishDate": "October 17, 2026",
    "categories": [
      "AI Strategy",
      "AI Strategy",
      "Enterprise Transformation"
    ],
    "featured": false,
    "ratingSample": "4.97 / 5.0",
    "ratingsCountSample": "1340 Executive Reviews",
    "videoPoster": "/assets/podcast/asset_04_0bb8543c.jpg",
    "audioUrl": "/assets/sample/podcast-teaser-02.mp4",
    "dialogists": [
      {
        "name": "Dr. Amit Khandelwal",
        "role": "Author & Host",
        "organization": "The AI Jungle Media",
        "avatar": "/assets/podcast/asset_01_8add66c3.jpg",
        "bio": "Sovereign AI transformation leader with 28 years of enterprise experience."
      },
      {
        "name": "Dr. Amit Khandelwal",
        "role": "Executive Council",
        "organization": "The AI Jungle Syndicate",
        "avatar": "/assets/podcast/asset_02_8ff26d0d.jpg",
        "bio": "Canonical archetype commanding enterprise transformation domains."
      }
    ],
    "chapters": [
      {
        "id": "c1",
        "timeInSeconds": 0,
        "timestamp": "00:00",
        "title": "Strategic Briefing",
        "description": "Foundational breakdown of the operational mandate."
      },
      {
        "id": "c2",
        "timeInSeconds": 600,
        "timestamp": "10:00",
        "title": "Execution Architecture",
        "description": "Deploying resilient mechanisms across the enterprise mesh."
      }
    ],
    "extractions": [
      {
        "id": "e1",
        "principleNumber": "22",
        "title": "The Sovereign Audit Playbook",
        "directive": "Never compromise sovereign strategic context; orchestrate autonomous mechanisms with deterministic safeguards.",
        "champion": "Dr. Amit Khandelwal",
        "badge": "Executive Directive"
      }
    ],
    "transcript": [
      {
        "id": "tr-1",
        "timeInSeconds": 0,
        "timestamp": "00:00",
        "speaker": "Dr. Amit Khandelwal",
        "role": "Host",
        "avatar": "/assets/podcast/asset_01_8add66c3.jpg",
        "text": "Welcome to Episode 22 of The AI Jungle. Today we confront The Sovereign Audit Playbook: Preparing Your Board for Autonomous Operations."
      }
    ],
    "comicBridge": {
      "title": "The AI Jungle Graphic Novel: Episode Companion",
      "issueNumber": "Issue 02",
      "narrativeConnection": "Explore how this strategic dilemma is visualized in graphic novel spreads.",
      "coverImage": "/assets/sample/comic_pages/page_01.jpg",
      "comicSlug": "the-jungle-audit",
      "readerSlug": "the-jungle-audit"
    },
    "relatedEpisodes": [
      "ep-08-jungle-audit",
      "ep-01-the-seed-of-silicon"
    ]
  },
  {
    "id": "ep-25",
    "slug": "ep-25-slashing-token-latency",
    "episodeNumber": "Episode 23",
    "season": "Season 02",
    "title": "Slashing Token Latency: Sub-10ms Inference at the Network Edge",
    "subtitle": "A Masterclass Transmission on Enterprise AI Sovereignty",
    "description": "Executive discussion featuring Dr. Amit Khandelwal, The Swift Cheetah and global transformation pioneers.",
    "duration": "37:45",
    "durationSeconds": 2265,
    "publishDate": "October 18, 2026",
    "categories": [
      "MLOps",
      "AI Strategy",
      "Enterprise Transformation"
    ],
    "featured": false,
    "ratingSample": "4.98 / 5.0",
    "ratingsCountSample": "1380 Executive Reviews",
    "videoPoster": "/assets/podcast/asset_04_0bb8543c.jpg",
    "audioUrl": "/assets/sample/podcast-teaser-03.mp4",
    "dialogists": [
      {
        "name": "Dr. Amit Khandelwal",
        "role": "Author & Host",
        "organization": "The AI Jungle Media",
        "avatar": "/assets/podcast/asset_01_8add66c3.jpg",
        "bio": "Sovereign AI transformation leader with 28 years of enterprise experience."
      },
      {
        "name": "The Swift Cheetah",
        "role": "Executive Council",
        "organization": "The AI Jungle Syndicate",
        "avatar": "/assets/podcast/asset_02_8ff26d0d.jpg",
        "bio": "Canonical archetype commanding enterprise transformation domains."
      }
    ],
    "chapters": [
      {
        "id": "c1",
        "timeInSeconds": 0,
        "timestamp": "00:00",
        "title": "Strategic Briefing",
        "description": "Foundational breakdown of the operational mandate."
      },
      {
        "id": "c2",
        "timeInSeconds": 600,
        "timestamp": "10:00",
        "title": "Execution Architecture",
        "description": "Deploying resilient mechanisms across the enterprise mesh."
      }
    ],
    "extractions": [
      {
        "id": "e1",
        "principleNumber": "23",
        "title": "Slashing Token Latency",
        "directive": "Never compromise sovereign strategic context; orchestrate autonomous mechanisms with deterministic safeguards.",
        "champion": "The Swift Cheetah",
        "badge": "Executive Directive"
      }
    ],
    "transcript": [
      {
        "id": "tr-1",
        "timeInSeconds": 0,
        "timestamp": "00:00",
        "speaker": "Dr. Amit Khandelwal",
        "role": "Host",
        "avatar": "/assets/podcast/asset_01_8add66c3.jpg",
        "text": "Welcome to Episode 23 of The AI Jungle. Today we confront Slashing Token Latency: Sub-10ms Inference at the Network Edge."
      }
    ],
    "comicBridge": {
      "title": "The AI Jungle Graphic Novel: Episode Companion",
      "issueNumber": "Issue 03",
      "narrativeConnection": "Explore how this strategic dilemma is visualized in graphic novel spreads.",
      "coverImage": "/assets/sample/comic_pages/page_02.jpg",
      "comicSlug": "the-jungle-audit",
      "readerSlug": "the-jungle-audit"
    },
    "relatedEpisodes": [
      "ep-08-jungle-audit",
      "ep-01-the-seed-of-silicon"
    ]
  },
  {
    "id": "ep-26",
    "slug": "ep-26-ethics-in-the-canopy",
    "episodeNumber": "Episode 24",
    "season": "Season 02",
    "title": "Ethics in the Canopy: Preventing Algorithmic Bias in Corporate Decision Making",
    "subtitle": "A Masterclass Transmission on Enterprise AI Sovereignty",
    "description": "Executive discussion featuring Dr. Amit Khandelwal, The Vigilant Owl and global transformation pioneers.",
    "duration": "38:45",
    "durationSeconds": 2325,
    "publishDate": "October 19, 2026",
    "categories": [
      "AI Governance",
      "AI Strategy",
      "Enterprise Transformation"
    ],
    "featured": false,
    "ratingSample": "4.90 / 5.0",
    "ratingsCountSample": "1420 Executive Reviews",
    "videoPoster": "/assets/podcast/asset_04_0bb8543c.jpg",
    "audioUrl": "/assets/sample/podcast-teaser-01.mp4",
    "dialogists": [
      {
        "name": "Dr. Amit Khandelwal",
        "role": "Author & Host",
        "organization": "The AI Jungle Media",
        "avatar": "/assets/podcast/asset_01_8add66c3.jpg",
        "bio": "Sovereign AI transformation leader with 28 years of enterprise experience."
      },
      {
        "name": "The Vigilant Owl",
        "role": "Executive Council",
        "organization": "The AI Jungle Syndicate",
        "avatar": "/assets/podcast/asset_02_8ff26d0d.jpg",
        "bio": "Canonical archetype commanding enterprise transformation domains."
      }
    ],
    "chapters": [
      {
        "id": "c1",
        "timeInSeconds": 0,
        "timestamp": "00:00",
        "title": "Strategic Briefing",
        "description": "Foundational breakdown of the operational mandate."
      },
      {
        "id": "c2",
        "timeInSeconds": 600,
        "timestamp": "10:00",
        "title": "Execution Architecture",
        "description": "Deploying resilient mechanisms across the enterprise mesh."
      }
    ],
    "extractions": [
      {
        "id": "e1",
        "principleNumber": "24",
        "title": "Ethics in the Canopy",
        "directive": "Never compromise sovereign strategic context; orchestrate autonomous mechanisms with deterministic safeguards.",
        "champion": "The Vigilant Owl",
        "badge": "Executive Directive"
      }
    ],
    "transcript": [
      {
        "id": "tr-1",
        "timeInSeconds": 0,
        "timestamp": "00:00",
        "speaker": "Dr. Amit Khandelwal",
        "role": "Host",
        "avatar": "/assets/podcast/asset_01_8add66c3.jpg",
        "text": "Welcome to Episode 24 of The AI Jungle. Today we confront Ethics in the Canopy: Preventing Algorithmic Bias in Corporate Decision Making."
      }
    ],
    "comicBridge": {
      "title": "The AI Jungle Graphic Novel: Episode Companion",
      "issueNumber": "Issue 04",
      "narrativeConnection": "Explore how this strategic dilemma is visualized in graphic novel spreads.",
      "coverImage": "/assets/sample/comic_pages/page_03.jpg",
      "comicSlug": "the-jungle-audit",
      "readerSlug": "the-jungle-audit"
    },
    "relatedEpisodes": [
      "ep-08-jungle-audit",
      "ep-01-the-seed-of-silicon"
    ]
  },
  {
    "id": "ep-27",
    "slug": "ep-27-the-autonomous-syndicate",
    "episodeNumber": "Episode 25",
    "season": "Season 02",
    "title": "The Autonomous Syndicate: Cross-Enterprise Agentic Federation",
    "subtitle": "A Masterclass Transmission on Enterprise AI Sovereignty",
    "description": "Executive discussion featuring Dr. Amit Khandelwal, Dr. Amit Khandelwal and global transformation pioneers.",
    "duration": "39:45",
    "durationSeconds": 2385,
    "publishDate": "October 20, 2026",
    "categories": [
      "Enterprise Transformation",
      "AI Strategy",
      "Enterprise Transformation"
    ],
    "featured": false,
    "ratingSample": "4.91 / 5.0",
    "ratingsCountSample": "1460 Executive Reviews",
    "videoPoster": "/assets/podcast/asset_04_0bb8543c.jpg",
    "audioUrl": "/assets/sample/podcast-teaser-02.mp4",
    "dialogists": [
      {
        "name": "Dr. Amit Khandelwal",
        "role": "Author & Host",
        "organization": "The AI Jungle Media",
        "avatar": "/assets/podcast/asset_01_8add66c3.jpg",
        "bio": "Sovereign AI transformation leader with 28 years of enterprise experience."
      },
      {
        "name": "Dr. Amit Khandelwal",
        "role": "Executive Council",
        "organization": "The AI Jungle Syndicate",
        "avatar": "/assets/podcast/asset_02_8ff26d0d.jpg",
        "bio": "Canonical archetype commanding enterprise transformation domains."
      }
    ],
    "chapters": [
      {
        "id": "c1",
        "timeInSeconds": 0,
        "timestamp": "00:00",
        "title": "Strategic Briefing",
        "description": "Foundational breakdown of the operational mandate."
      },
      {
        "id": "c2",
        "timeInSeconds": 600,
        "timestamp": "10:00",
        "title": "Execution Architecture",
        "description": "Deploying resilient mechanisms across the enterprise mesh."
      }
    ],
    "extractions": [
      {
        "id": "e1",
        "principleNumber": "25",
        "title": "The Autonomous Syndicate",
        "directive": "Never compromise sovereign strategic context; orchestrate autonomous mechanisms with deterministic safeguards.",
        "champion": "Dr. Amit Khandelwal",
        "badge": "Executive Directive"
      }
    ],
    "transcript": [
      {
        "id": "tr-1",
        "timeInSeconds": 0,
        "timestamp": "00:00",
        "speaker": "Dr. Amit Khandelwal",
        "role": "Host",
        "avatar": "/assets/podcast/asset_01_8add66c3.jpg",
        "text": "Welcome to Episode 25 of The AI Jungle. Today we confront The Autonomous Syndicate: Cross-Enterprise Agentic Federation."
      }
    ],
    "comicBridge": {
      "title": "The AI Jungle Graphic Novel: Episode Companion",
      "issueNumber": "Issue 05",
      "narrativeConnection": "Explore how this strategic dilemma is visualized in graphic novel spreads.",
      "coverImage": "/assets/sample/comic_pages/page_04.jpg",
      "comicSlug": "the-jungle-audit",
      "readerSlug": "the-jungle-audit"
    },
    "relatedEpisodes": [
      "ep-08-jungle-audit",
      "ep-01-the-seed-of-silicon"
    ]
  },
  {
    "id": "ep-28",
    "slug": "ep-28-the-infinite-safari",
    "episodeNumber": "Episode 26",
    "season": "Season 02",
    "title": "The Infinite Safari: Where Business and Artificial Intelligence Roar",
    "subtitle": "A Masterclass Transmission on Enterprise AI Sovereignty",
    "description": "Executive discussion featuring Dr. Amit Khandelwal, The Sovereign Lion and global transformation pioneers.",
    "duration": "40:45",
    "durationSeconds": 2445,
    "publishDate": "October 21, 2026",
    "categories": [
      "AI Strategy",
      "AI Strategy",
      "Enterprise Transformation"
    ],
    "featured": false,
    "ratingSample": "4.92 / 5.0",
    "ratingsCountSample": "1500 Executive Reviews",
    "videoPoster": "/assets/podcast/asset_04_0bb8543c.jpg",
    "audioUrl": "/assets/sample/podcast-teaser-03.mp4",
    "dialogists": [
      {
        "name": "Dr. Amit Khandelwal",
        "role": "Author & Host",
        "organization": "The AI Jungle Media",
        "avatar": "/assets/podcast/asset_01_8add66c3.jpg",
        "bio": "Sovereign AI transformation leader with 28 years of enterprise experience."
      },
      {
        "name": "The Sovereign Lion",
        "role": "Executive Council",
        "organization": "The AI Jungle Syndicate",
        "avatar": "/assets/podcast/asset_02_8ff26d0d.jpg",
        "bio": "Canonical archetype commanding enterprise transformation domains."
      }
    ],
    "chapters": [
      {
        "id": "c1",
        "timeInSeconds": 0,
        "timestamp": "00:00",
        "title": "Strategic Briefing",
        "description": "Foundational breakdown of the operational mandate."
      },
      {
        "id": "c2",
        "timeInSeconds": 600,
        "timestamp": "10:00",
        "title": "Execution Architecture",
        "description": "Deploying resilient mechanisms across the enterprise mesh."
      }
    ],
    "extractions": [
      {
        "id": "e1",
        "principleNumber": "26",
        "title": "The Infinite Safari",
        "directive": "Never compromise sovereign strategic context; orchestrate autonomous mechanisms with deterministic safeguards.",
        "champion": "The Sovereign Lion",
        "badge": "Executive Directive"
      }
    ],
    "transcript": [
      {
        "id": "tr-1",
        "timeInSeconds": 0,
        "timestamp": "00:00",
        "speaker": "Dr. Amit Khandelwal",
        "role": "Host",
        "avatar": "/assets/podcast/asset_01_8add66c3.jpg",
        "text": "Welcome to Episode 26 of The AI Jungle. Today we confront The Infinite Safari: Where Business and Artificial Intelligence Roar."
      }
    ],
    "comicBridge": {
      "title": "The AI Jungle Graphic Novel: Episode Companion",
      "issueNumber": "Issue 01",
      "narrativeConnection": "Explore how this strategic dilemma is visualized in graphic novel spreads.",
      "coverImage": "/assets/sample/comic_pages/page_01.jpg",
      "comicSlug": "the-jungle-audit",
      "readerSlug": "the-jungle-audit"
    },
    "relatedEpisodes": [
      "ep-08-jungle-audit",
      "ep-01-the-seed-of-silicon"
    ]
  }
];

