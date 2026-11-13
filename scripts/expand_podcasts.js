const fs = require('fs');

// Read existing podcast file
const podcastFile = 'src/data/podcast.ts';
let code = fs.readFileSync(podcastFile, 'utf8');

// List of 25 additional canonical episodes to bring the catalog to 28
const additionalEpisodes = [
  {
    id: "ep-02",
    slug: "ep-02-sensing-the-forest-floor",
    episodeNumber: "Episode 02",
    season: "Season 01",
    title: "Sensing the Forest Floor: Telemetry Beyond the Hype",
    subtitle: "Distinguishing Real Signals from Synthetic Noise in Corporate Landscapes",
    description: "Dr. Amit Khandelwal and The Agile Wolf examine distributed sensory feeds and enterprise event streaming, identifying operational bottlenecks before autonomous agent activation.",
    duration: "38:40",
    durationSeconds: 2320,
    publishDate: "November 2, 2026",
    categories: ["AI Strategy", "Operations", "Event Streaming"],
    featured: false,
    ratingSample: "4.92 / 5.0",
    ratingsCountSample: "890 Executive Reviews",
    videoPoster: "/assets/podcast/asset_04_0bb8543c.jpg",
    audioUrl: "/assets/sample/podcast-teaser-01.mp4",
    dialogists: [
      {
        name: "Dr. Amit Khandelwal",
        role: "Host & Author",
        organization: "The AI Jungle Media",
        avatar: "/assets/podcast/asset_01_8add66c3.jpg",
        bio: "Enterprise AI architect and creator of the 13-Chapter Safari transformation blueprint."
      },
      {
        name: "The Agile Wolf",
        role: "Chief Operating Officer",
        organization: "AI Jungle Executive Council",
        avatar: "/assets/podcast/asset_02_8ff26d0d.jpg",
        bio: "Operational swarm commander and high-velocity workflow architect."
      }
    ],
    chapters: [
      { id: "c1", timeInSeconds: 0, timestamp: "00:00", title: "Distributed Telemetry Setup", description: "Mapping physical and digital telemetry." },
      { id: "c2", timeInSeconds: 720, timestamp: "12:00", title: "Removing Algorithmic Noise", description: "Filtering hallucinations from enterprise telemetry." }
    ],
    extractions: [
      {
        id: "e1",
        principleNumber: "02",
        title: "Sensory Density Precedes Autonomous Decisions",
        directive: "Never trigger autonomous agents on aggregated quarterly indicators; wire low-latency telemetry to the cold edge.",
        champion: "The Agile Wolf",
        badge: "Operational Rule"
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
        text: "Welcome back to The AI Jungle. Today we ask: can an enterprise really sense reality when 80% of its data feeds are uncurated?"
      }
    ],
    comicBridge: {
      title: "Pack Instinct: High-Velocity MLOps",
      issueNumber: "Issue 03",
      narrativeConnection: "See The Agile Wolf align distributed squad telemetries in Chapter 03.",
      coverImage: "/assets/sample/comic_pages/page_02.jpg",
      comicSlug: "pack-instinct",
      readerSlug: "the-jungle-audit"
    },
    relatedEpisodes: ["ep-08-jungle-audit", "ep-03-chasing-high-yield-prey"]
  },
  {
    id: "ep-03",
    slug: "ep-03-chasing-high-yield-prey",
    episodeNumber: "Episode 03",
    season: "Season 01",
    title: "Chasing the High Yield Prey: Capital Allocation for Generative Compute",
    subtitle: "ROI Hurdle Rates for GPU Clusters and Enterprise Model Fine-Tuning",
    description: "The Sovereign Lion and Dr. Amit analyze where enterprise capital produces real margin expansion versus where compute expenditure turns into vanity expense.",
    duration: "42:15",
    durationSeconds: 2535,
    publishDate: "October 26, 2026",
    categories: ["AI Strategy", "Finance & ROI", "Executive Leadership"],
    featured: false,
    ratingSample: "4.95 / 5.0",
    ratingsCountSample: "1,120 Reviews",
    videoPoster: "/assets/podcast/asset_04_0bb8543c.jpg",
    audioUrl: "/assets/sample/podcast-teaser-02.mp4",
    dialogists: [
      {
        name: "Dr. Amit Khandelwal",
        role: "Host",
        organization: "The AI Jungle Media",
        avatar: "/assets/podcast/asset_01_8add66c3.jpg",
        bio: "Sovereign intelligence strategist and board advisor."
      },
      {
        name: "The Sovereign Lion",
        role: "King of Strategy",
        organization: "Executive Council",
        avatar: "/assets/podcast/asset_02_8ff26d0d.jpg",
        bio: "Commanding board-level sovereign intelligence."
      }
    ],
    chapters: [
      { id: "c1", timeInSeconds: 0, timestamp: "00:00", title: "CapEx vs OpEx in AI Infrastructure", description: "Analyzing cloud token costs versus on-prem cluster depreciation." }
    ],
    extractions: [
      {
        id: "e1",
        principleNumber: "03",
        title: "Compute Must Yield Sovereign Margins",
        directive: "Do not lease foundation model tokens when fine-tuned 8B parameters running on proprietary context outperform commercial APIs at 1/100th cost.",
        champion: "The Sovereign Lion",
        badge: "Boardroom Mandate"
      }
    ],
    transcript: [
      {
        id: "t1",
        timeInSeconds: 0,
        timestamp: "00:00",
        speaker: "The Sovereign Lion",
        role: "Co-Host",
        avatar: "/assets/podcast/asset_02_8ff26d0d.jpg",
        text: "Capital must stalk value with unrelenting focus. We do not burn compute for novelty."
      }
    ],
    comicBridge: {
      title: "The King's Treasury: Chapter 12",
      issueNumber: "Issue 05",
      narrativeConnection: "Witness the economic governance of sovereign compute in Chapter 12.",
      coverImage: "/assets/sample/comic_pages/page_03.jpg",
      comicSlug: "silent-eyes",
      readerSlug: "the-jungle-audit"
    },
    relatedEpisodes: ["ep-08-jungle-audit", "ep-04-carving-the-path"]
  },
  {
    id: "ep-04",
    slug: "ep-04-carving-the-path",
    episodeNumber: "Episode 04",
    season: "Season 01",
    title: "Carving the Path: Escaping the POC Graveyard",
    subtitle: "From Fragile Prototype to Mission-Critical Production Mesh",
    description: "The Swift Cheetah and Dr. Amit reveal the architectural discipline required to graduate agentic proofs-of-concept into 99.99% SLA production infrastructure.",
    duration: "45:10",
    durationSeconds: 2710,
    publishDate: "October 19, 2026",
    categories: ["Autonomous Agents", "MLOps", "Enterprise Transformation"],
    featured: false,
    ratingSample: "4.94 / 5.0",
    ratingsCountSample: "980 Reviews",
    videoPoster: "/assets/podcast/asset_04_0bb8543c.jpg",
    audioUrl: "/assets/sample/podcast-teaser-03.mp4",
    dialogists: [
      {
        name: "Dr. Amit Khandelwal",
        role: "Host",
        organization: "The AI Jungle Media",
        avatar: "/assets/podcast/asset_01_8add66c3.jpg",
        bio: "Global enterprise AI transformation strategist."
      },
      {
        name: "The Swift Cheetah",
        role: "Chief Technology Officer",
        organization: "Executive Council",
        avatar: "/assets/podcast/asset_02_8ff26d0d.jpg",
        bio: "Sub-millisecond latency automation commander."
      }
    ],
    chapters: [
      { id: "c1", timeInSeconds: 0, timestamp: "00:00", title: "The Prototype Mirage", description: "Why demos lie and production exposes edge cases." }
    ],
    extractions: [
      {
        id: "e1",
        principleNumber: "04",
        title: "Deterministic Guardrails Precede Autonomy",
        directive: "Never let an LLM agent write directly to production databases without deterministic verification.",
        champion: "The Swift Cheetah",
        badge: "Production Standard"
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
        text: "Ninety percent of corporate GenAI prototypes never reach production. Today we show you the engineering ladder that crosses the chasm."
      }
    ],
    comicBridge: {
      title: "The Velocity Gap: Automated Pipeline Scaling",
      issueNumber: "Issue 04",
      narrativeConnection: "See Cheetah accelerate autonomous micro-agents across the production bridge.",
      coverImage: "/assets/sample/comic_pages/page_02.jpg",
      comicSlug: "pack-instinct",
      readerSlug: "the-jungle-audit"
    },
    relatedEpisodes: ["ep-08-jungle-audit", "ep-05-the-eagle-eye"]
  },
  {
    id: "ep-05",
    slug: "ep-05-the-eagle-eye",
    episodeNumber: "Episode 05",
    season: "Season 01",
    title: "The Eagle Eye: Securing Sovereign Context & Model Weights",
    subtitle: "Zero-Trust Cybersecurity Against Adversarial Prompt Injections & Data Extraction",
    description: "The Sentinel Eagle details the defensive perimeter required to protect corporate intellectual property when enterprise multi-agent networks interface with public ecosystems.",
    duration: "40:50",
    durationSeconds: 2450,
    publishDate: "October 12, 2026",
    categories: ["Cybersecurity", "AI Governance", "Zero Trust"],
    featured: false,
    ratingSample: "4.96 / 5.0",
    ratingsCountSample: "1,040 Reviews",
    videoPoster: "/assets/podcast/asset_04_0bb8543c.jpg",
    audioUrl: "/assets/sample/podcast-teaser-01.mp4",
    dialogists: [
      {
        name: "Dr. Amit Khandelwal",
        role: "Host",
        organization: "The AI Jungle Media",
        avatar: "/assets/podcast/asset_01_8add66c3.jpg",
        bio: "Author & Sovereign Transformation Leader."
      },
      {
        name: "The Sentinel Eagle",
        role: "Chief Information Security Officer",
        organization: "Executive Council",
        avatar: "/assets/podcast/asset_02_8ff26d0d.jpg",
        bio: "Adversarial vulnerability detection and encrypted canopy defender."
      }
    ],
    chapters: [
      { id: "c1", timeInSeconds: 0, timestamp: "00:00", title: "Adversarial Threat Surfaces", description: "Analyzing prompt injection attack vectors." }
    ],
    extractions: [
      {
        id: "e1",
        principleNumber: "05",
        title: "Perimeter Isolation for Context Buffers",
        directive: "Sanitize external tool calls before passing responses into internal reasoning tokens.",
        champion: "The Sentinel Eagle",
        badge: "Security Mandate"
      }
    ],
    transcript: [
      {
        id: "t1",
        timeInSeconds: 0,
        timestamp: "00:00",
        speaker: "The Sentinel Eagle",
        role: "Co-Host",
        avatar: "/assets/podcast/asset_02_8ff26d0d.jpg",
        text: "The canopy is full of silent intrusions. The moment you give an agent access to your email and CRM, you have opened the gates of the sanctuary."
      }
    ],
    comicBridge: {
      title: "Zero-Trust Canopy: Cryptographic Perimeter",
      issueNumber: "Issue 05",
      narrativeConnection: "Eagle surveys the holographic cyber-barrier in Chapter 06.",
      coverImage: "/assets/sample/comic_pages/page_03.jpg",
      comicSlug: "silent-eyes",
      readerSlug: "the-jungle-audit"
    },
    relatedEpisodes: ["ep-08-jungle-audit", "ep-06-the-legal-canopy"]
  }
];

// Append remaining episodes generator up to 28
const topics = [
  ["ep-06", "the-legal-canopy", "The Legal Canopy: AI Copyright, IP & Regulatory Enclaves", "The Vigilant Owl", "AI Governance"],
  ["ep-09", "weathering-the-storm", "Weathering the Storm: Algorithmic Drift and Failover Architecture", "The Agile Wolf", "MLOps"],
  ["ep-10", "the-kings-checklist", "The King's Checklist: 10 Non-Negotiable Enterprise AI Milestones", "The Sovereign Lion", "AI Strategy"],
  ["ep-11", "the-stakeholder-safari", "The Stakeholder Safari: Winning Board, Customer & Workforce Trust", "The Dazzling Peacock", "Change Management"],
  ["ep-12", "the-kings-treasury", "The King's Treasury: Balancing Model Capital Allocation & Unit Economics", "The Sovereign Lion", "Finance & ROI"],
  ["ep-13", "the-crown-of-ai", "The Crown of AI: Turning Sovereign Intelligence into Lasting Moats", "Dr. Amit Khandelwal", "Enterprise Transformation"],
  ["ep-14", "synthetic-data-foundries", "Synthetic Data Foundries: Training Small Models on Pristine Context", "The Great Elephant", "Data Strategy"],
  ["ep-15", "the-cunning-path", "The Cunning Path: Exploiting Competitor Algorithmic Inertia", "The Clever Fox", "Innovation"],
  ["ep-16", "the-ant-colony", "The Ant Colony: Workforce Upskilling and Autonomous Squad Deployment", "The Industrious Ant", "Workforce Transformation"],
  ["ep-17", "agentic-swarms-in-action", "Agentic Swarms in Action: Orchestrating 100+ Specialized LLMs", "The Swift Cheetah", "Autonomous Agents"],
  ["ep-18", "prompt-compiler-architectures", "Prompt Compiler Architectures: Deterministic Parsing for Enterprise", "The Vigilant Owl", "AI Governance"],
  ["ep-19", "the-monkey-revolution", "The Monkey Revolution: Turning Consumer GenAI into Structured Leverage", "The Curious Monkey", "Productivity"],
  ["ep-20", "quantum-ready-canopy", "Quantum-Ready Canopy: Long-Horizon Security for AI Model Weights", "The Sentinel Eagle", "Cybersecurity"],
  ["ep-21", "the-omnichannel-peacock", "The Omnichannel Peacock: Hyper-Personalized Enterprise Experience", "The Dazzling Peacock", "Marketing & CX"],
  ["ep-22", "vector-lakehouse-blueprints", "Vector Lakehouse Blueprints: Petabyte Context Windows in Production", "The Great Elephant", "Data Strategy"],
  ["ep-23", "multi-agent-conflict-resolution", "Multi-Agent Conflict Resolution: Arbitration Protocols for Swarms", "The Sovereign Lion", "Autonomous Agents"],
  ["ep-24", "the-sovereign-audit-playbook", "The Sovereign Audit Playbook: Preparing Your Board for Autonomous Operations", "Dr. Amit Khandelwal", "AI Strategy"],
  ["ep-25", "slashing-token-latency", "Slashing Token Latency: Sub-10ms Inference at the Network Edge", "The Swift Cheetah", "MLOps"],
  ["ep-26", "ethics-in-the-canopy", "Ethics in the Canopy: Preventing Algorithmic Bias in Corporate Decision Making", "The Vigilant Owl", "AI Governance"],
  ["ep-27", "the-autonomous-syndicate", "The Autonomous Syndicate: Cross-Enterprise Agentic Federation", "Dr. Amit Khandelwal", "Enterprise Transformation"],
  ["ep-28", "the-infinite-safari", "The Infinite Safari: Where Business and Artificial Intelligence Roar", "The Sovereign Lion", "AI Strategy"]
];

topics.forEach((t, i) => {
  additionalEpisodes.push({
    id: t[0],
    slug: t[0] + "-" + t[1],
    episodeNumber: "Episode " + (i + 6 < 10 ? "0" + (i + 6) : (i + 6)),
    season: i < 8 ? "Season 01" : "Season 02",
    title: t[2],
    subtitle: "A Masterclass Transmission on Enterprise AI Sovereignty",
    description: "Executive discussion featuring Dr. Amit Khandelwal, " + t[3] + " and global transformation pioneers.",
    duration: (35 + (i % 15)) + ":45",
    durationSeconds: (35 + (i % 15)) * 60 + 45,
    publishDate: "October " + (1 + (i % 25)) + ", 2026",
    categories: [t[4], "AI Strategy", "Enterprise Transformation"],
    featured: i === 0,
    ratingSample: "4.9" + (i % 9) + " / 5.0",
    ratingsCountSample: (700 + i * 40) + " Executive Reviews",
    videoPoster: "/assets/podcast/asset_04_0bb8543c.jpg",
    audioUrl: "/assets/sample/podcast-teaser-0" + ((i % 3) + 1) + ".mp4",
    dialogists: [
      {
        name: "Dr. Amit Khandelwal",
        role: "Author & Host",
        organization: "The AI Jungle Media",
        avatar: "/assets/podcast/asset_01_8add66c3.jpg",
        bio: "Sovereign AI transformation leader with 28 years of enterprise experience."
      },
      {
        name: t[3],
        role: "Executive Council",
        organization: "The AI Jungle Syndicate",
        avatar: "/assets/podcast/asset_02_8ff26d0d.jpg",
        bio: "Canonical archetype commanding enterprise transformation domains."
      }
    ],
    chapters: [
      { id: "c1", timeInSeconds: 0, timestamp: "00:00", title: "Strategic Briefing", description: "Foundational breakdown of the operational mandate." },
      { id: "c2", timeInSeconds: 600, timestamp: "10:00", title: "Execution Architecture", description: "Deploying resilient mechanisms across the enterprise mesh." }
    ],
    extractions: [
      {
        id: "e1",
        principleNumber: (i + 6 < 10 ? "0" + (i + 6) : "" + (i + 6)),
        title: t[2].split(":")[0],
        directive: "Never compromise sovereign strategic context; orchestrate autonomous mechanisms with deterministic safeguards.",
        champion: t[3],
        badge: "Executive Directive"
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
        text: "Welcome to Episode " + (i + 6) + " of The AI Jungle. Today we confront " + t[2] + "."
      }
    ],
    comicBridge: {
      title: "The AI Jungle Graphic Novel: Episode Companion",
      issueNumber: "Issue 0" + ((i % 5) + 1),
      narrativeConnection: "Explore how this strategic dilemma is visualized in graphic novel spreads.",
      coverImage: "/assets/sample/comic_pages/page_0" + ((i % 4) + 1) + ".jpg",
      comicSlug: "the-jungle-audit",
      readerSlug: "the-jungle-audit"
    },
    relatedEpisodes: ["ep-08-jungle-audit", "ep-01-the-seed-of-silicon"]
  });
});

// Splice additional episodes right before the end of the PODCAST_EPISODES array in code
const epIndex = code.lastIndexOf('];');
if (epIndex !== -1) {
  const jsonStr = JSON.stringify(additionalEpisodes, null, 2);
  // remove opening and closing square brackets
  const cleanJson = jsonStr.slice(1, -1).trim();
  const updatedCode = code.slice(0, epIndex) + ',\n' + cleanJson + '\n' + code.slice(epIndex);
  fs.writeFileSync(podcastFile, updatedCode, 'utf8');
  console.log('Successfully expanded PODCAST_EPISODES to 28 episodes!');
}
