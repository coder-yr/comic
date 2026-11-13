export interface ComicPanel {
  id: string;
  clipNumber: number;
  clipBadge: string;
  title: string;
  image: string;
  caption?: string;
  dialogueSnippet?: string;
  keyTakeaway?: string;
}

export interface ComicSpread {
  pageNumber: number;
  spreadTitle: string;
  image: string; // primary cover/spread preview image
  caption?: string;
  dialogueSnippet?: string;
  clipBadge?: string;
  keyTakeaway?: string;
  panels?: ComicPanel[]; // When present, page displays exactly 4 clips in a balanced, beautiful grid or vertical sequence
}

export interface TransformationLesson {
  number: string;
  title: string;
  takeaway: string;
}

export interface ComicIssue {
  id: string;
  slug: string;
  issueNumber: string;
  canonicalChapter: string;
  title: string;
  subtitle: string;
  series: string;
  volume: string;
  synopsis: string;
  coverImage: string;
  featuredCharacters: string[];
  pageCount: number;
  readingTime: string;
  publicationStatus: "Available Now" | "Coming Soon" | "Collector Edition";
  featured: boolean;
  category: "Foundations" | "Scaling" | "Autonomous" | "Innovation" | "Omnibus";
  spreads: ComicSpread[];
  transformationLessons: TransformationLesson[];
  companionPodcastSlug?: string;
  previousIssueSlug?: string;
  nextIssueSlug?: string;
}

export const COMIC_ISSUES: ComicIssue[] = [
  {
    id: "comic-01",
    slug: "the-jungle-audit",
    issueNumber: "Issue 01",
    canonicalChapter: "Chapter 01",
    title: "The Jungle Audit: Clean Waters of the Data Lake",
    subtitle: "A High-Stakes Sovereign AI Graphic Novel Spread",
    series: "The AI Jungle Graphic Novel Saga",
    volume: "Volume I: Foundations",
    synopsis: "In an ancient misty cybernetic jungle, Dr. Amit Khandelwal and The Sovereign Lion stand inside a futuristic holographic executive boardroom amidst glowing teal neural circuits and gold data streams. When legacy systems begin to hallucinate under corrupted data streams, The Great Elephant rises to wash clean the poisoned algorithmic river.",
    coverImage: "/assets/sample/comic-cover-sovereign.jpg",
    featuredCharacters: ["The Sovereign Lion", "The Great Elephant", "The Agile Wolf", "The Impulsive Monkey", "Dr. Amit Khandelwal"],
    pageCount: 32,
    readingTime: "12 min read",
    publicationStatus: "Available Now",
    featured: true,
    category: "Foundations",
    spreads: [
      {
        pageNumber: 1,
        spreadTitle: "Act I: Executive AI Readiness & Operational Diagnosis",
        image: "/assets/sample/comic_pages/page_01.jpg",
        clipBadge: "PAGE 01 • 4 CLIPS",
        caption: "Clips 01–04: The Changing Jungle, Engine Readiness, Operations Reality & Data Siloes",
        dialogueSnippet: "LION: 'Every beast knows how to run. But do you know where you're running? Companies rush to buy AI, but forget the first question: Are we ready?'",
        keyTakeaway: "Upstream operational clarity and vector data hygiene must precede compute cluster procurement."
      },
      {
        pageNumber: 2,
        spreadTitle: "Act II: The 4-Pillar Audit & Process Optimization",
        image: "/assets/sample/comic_pages/page_02.jpg",
        clipBadge: "PAGE 02 • 4 CLIPS",
        caption: "Clips 05–08: The Jungle Audit, Business Alignment, Operational Simplification & Data Governance",
        dialogueSnippet: "LION: 'We measure the organization across People, Data, Operations and Business before we prescribe technology. What value are we creating?'",
        keyTakeaway: "Conduct holistic organizational telemetry across all 4 pillars before launching agentic swarms."
      },
      {
        pageNumber: 3,
        spreadTitle: "Act III: Human Capability, Scorecard & The Sovereign Mandate",
        image: "/assets/sample/comic_pages/page_03.jpg",
        clipBadge: "PAGE 03 • 4 CLIPS",
        caption: "Clips 09–12: The Monkey's Banana Problem, Workforce Capability, The Maturity Scorecard & The King's Message",
        dialogueSnippet: "LION: 'AI Tool ≠ AI Transformation. Don't compete to deploy AI first. Compete to be ready. AI with strategy creates advantage.'",
        keyTakeaway: "Sovereign enterprise leadership commands the strategy before the model executes."
      },
      {
        pageNumber: 4,
        spreadTitle: "Act IV: The Canonical Frameworks & Corporate Sovereignty",
        image: "/assets/sample/comic_pages/page_04.jpg",
        clipBadge: "PAGE 04 • 4 CLIPS",
        caption: "Canonical Spreads: The Hook, The Elephant, The 5 Questions & Sovereign Boardroom",
        dialogueSnippet: "Dr. Amit: 'A real AI strategy starts with the business problem. The neural network is evolving... we must ensure its thoughts are our own.'",
        keyTakeaway: "Connecting strategic corporate philosophy to autonomous multi-agent execution."
      },
      {
        pageNumber: 5,
        spreadTitle: "Act V: The Great Elephant Restores Algorithmic Order",
        image: "/assets/comics/asset_02_506b9cda.jpg",
        clipBadge: "DOUBLE SPREAD",
        caption: "The Subterranean Data Lake & Vector Sanitization",
        dialogueSnippet: "Narration: 'In the heart of the AI Jungle, the Great Elephant of Data Strategy rises to restore order. With a torrent of clean, structured data, it purges corrupted algorithms.'",
        keyTakeaway: "Vector database sanitization guarantees deterministic outputs."
      }
    ],
    transformationLessons: [
      {
        number: "01",
        title: "Strategic Sovereignty Precedes Model Selection",
        takeaway: "The Lion's Directive: Never contract out your enterprise intuition. Model weights are commodities; sovereign context and decision rights are your indelible moat."
      },
      {
        number: "02",
        title: "Clean Waters: Vector Sanitization Eliminates Hallucination",
        takeaway: "The Elephant's Rule: 93% of model failures start upstream. If vector databases ingest dirty legacy siloes, autonomous downstream agents simply hallucinate with compounding velocity."
      },
      {
        number: "03",
        title: "Algorithmic Drift is Organizational Drift",
        takeaway: "The Jungle responds dynamically. Executive telemetry requires constant canary verification; without autonomous guardrails, legacy policies will silently poison predictions."
      }
    ],
    companionPodcastSlug: "ep-08-jungle-audit",
    previousIssueSlug: "the-silicon-canopy",
    nextIssueSlug: "the-great-trunk"
  },
  {
    id: "comic-00",
    slug: "the-silicon-canopy",
    issueNumber: "Issue 00",
    canonicalChapter: "Prologue",
    title: "The Silicon Canopy: Awakening of the Sovereign Pride",
    subtitle: "The Genesis of The AI Jungle Universe",
    series: "The AI Jungle Graphic Novel Saga",
    volume: "Volume I: Foundations",
    synopsis: "Before autonomous swarms walked the canopy, an algorithmic diagnosis revealed the true state of corporate legacy systems. Witness the first meeting of the executive pride in an ancient mist-veiled redwood boardroom.",
    coverImage: "/assets/sample/comic-cover-sovereign.jpg",
    featuredCharacters: ["The Sovereign Lion", "The 10 Archetypes", "Dr. Amit Khandelwal"],
    pageCount: 28,
    readingTime: "10 min read",
    publicationStatus: "Available Now",
    featured: false,
    category: "Foundations",
    spreads: [
      {
        pageNumber: 1,
        spreadTitle: "Council of 10 Animal Archetypes: The Executive Pride",
        image: "/assets/sample/panels/safari-archetypes-lineup.jpg",
        clipBadge: "BLUEPRINT ACT I",
        caption: "Data, Digital & AI Transformation Blueprint",
        dialogueSnippet: "Dr. Amit Khandelwal: '10 Archetypes. 13 Chapters. Endless Insights. Real Transformation.'",
        keyTakeaway: "Elephant (Data), Owl (Governance), Wolf (Operations), Fox (Innovation), Lion (CEO Strategy), Cheetah (Automation), Eagle (Cybersecurity), Ant (Workforce), Peacock (Marketing), Monkey (GenAI)."
      },
      {
        pageNumber: 2,
        spreadTitle: "The Complete 13-Chapter Transformation Journey",
        image: "/assets/sample/panels/safari-journey-table.jpg",
        clipBadge: "BLUEPRINT ACT II",
        caption: "Strategic Questions From Audit to Sovereign Crown",
        dialogueSnippet: "Are we ready? Where is real ROI? How to govern? How to turn AI into sustainable moat?",
        keyTakeaway: "The 13 transformation questions map directly across the executive lifecycle."
      },
      {
        pageNumber: 3,
        spreadTitle: "Now Live On Global Channels: Think Strategically, Then Let AI Roar",
        image: "/assets/sample/panels/safari-channels-footer.jpg",
        clipBadge: "BLUEPRINT ACT III",
        caption: "Clients Happy • Teams Empowered • Business Value Delivered • ROI Created",
        dialogueSnippet: "Dr. Amit Khandelwal: 'Think strategically. Then let AI roar.'",
        keyTakeaway: "The AI Jungle syndicate broadcast on LinkedIn, YouTube, Instagram, and X."
      },
      {
        pageNumber: 4,
        spreadTitle: "The Sovereign Awakening",
        image: "/assets/comics/asset_01_70b94e1f.jpg",
        clipBadge: "CANON PROLOGUE",
        caption: "The Genesis of the Sovereign Council",
        dialogueSnippet: "The lion surveys the glowing data lines flowing through the forest.",
        keyTakeaway: "Corporate sovereignty requires ownership of context windows."
      }
    ],
    transformationLessons: [
      {
        number: "01",
        title: "Diagnose Legacy Inertia Early",
        takeaway: "Before spending capital on compute clusters, audit the structural readiness of your human and data architecture."
      }
    ],
    companionPodcastSlug: "pilot-seed-of-silicon",
    nextIssueSlug: "the-jungle-audit"
  },
  {
    id: "comic-02",
    slug: "the-great-trunk",
    issueNumber: "Issue 02",
    canonicalChapter: "Chapter 02",
    title: "The Great Trunk: Clean Waters of the Data Lake",
    subtitle: "Sanitizing Multi-Petabyte Enterprise Knowledge",
    series: "The AI Jungle Graphic Novel Saga",
    volume: "Volume I: Foundations",
    synopsis: "The Great Elephant descends into the deepest subterranean data vaults to purge decades of corrupt table schemas and fragmented customer records, establishing the golden vector repository.",
    coverImage: "/assets/comics/asset_07_79aaf0cc.jpg",
    featuredCharacters: ["The Great Elephant", "The Sovereign Lion"],
    pageCount: 36,
    readingTime: "14 min read",
    publicationStatus: "Available Now",
    featured: true,
    category: "Foundations",
    spreads: [
      {
        pageNumber: 1,
        spreadTitle: "The Great Trunk Sprays Pure Context",
        image: "/assets/comics/asset_02_506b9cda.jpg",
        caption: "Washing the corrupted legacy streams",
        dialogueSnippet: "With a torrent of clean, structured data, the elephant purges corrupted algorithms."
      }
    ],
    transformationLessons: [
      {
        number: "01",
        title: "Embeddings Are Not Static Tables",
        takeaway: "Maintain active context caches and dynamic knowledge graph hygiene to prevent episodic hallucination."
      }
    ],
    companionPodcastSlug: "ep-07-data-hygiene",
    previousIssueSlug: "the-jungle-audit",
    nextIssueSlug: "pack-instinct"
  },
  {
    id: "comic-03",
    slug: "pack-instinct",
    issueNumber: "Issue 03",
    canonicalChapter: "Chapter 03",
    title: "Pack Instinct: The Agile Wolfpack Deployment",
    subtitle: "Orchestrating High-Velocity MLOps Swarms",
    series: "The AI Jungle Graphic Novel Saga",
    volume: "Volume I: Foundations",
    synopsis: "In a stormy night above the high-tech cloud canopy, The Agile Wolf leads an elite cohort of containerized deployment micro-agents through continuous canary rollouts and automated regression tests.",
    coverImage: "/assets/comics/asset_03_42ebfef0.jpg",
    featuredCharacters: ["The Agile Wolf"],
    pageCount: 30,
    readingTime: "11 min read",
    publicationStatus: "Available Now",
    featured: false,
    category: "Scaling",
    spreads: [
      {
        pageNumber: 1,
        spreadTitle: "The Wolfpack Scans the Pipeline",
        image: "/assets/comics/asset_01_70b94e1f.jpg",
        caption: "Automated Canary Rollouts under live load"
      }
    ],
    transformationLessons: [
      {
        number: "01",
        title: "Deploy Daily or Decay Silently",
        takeaway: "Model iteration velocity is the ultimate indicator of operational maturity."
      }
    ],
    previousIssueSlug: "the-great-trunk",
    nextIssueSlug: "silent-eyes"
  },
  {
    id: "comic-04",
    slug: "silent-eyes",
    issueNumber: "Issue 04",
    canonicalChapter: "Chapter 04",
    title: "Silent Eyes: Algorithmic Guardrails & Ethical Perimeters",
    subtitle: "Enforcing EU AI Act & Deterministic Verification",
    series: "The AI Jungle Graphic Novel Saga",
    volume: "Volume I: Foundations",
    synopsis: "Perched atop the ancient observation tower under a glowing full moon, The Vigilant Owl inspects model explainability and erects cryptographic guardrails against bias and liability.",
    coverImage: "/assets/comics/asset_13_162a4bed.jpg",
    featuredCharacters: ["The Vigilant Owl"],
    pageCount: 34,
    readingTime: "13 min read",
    publicationStatus: "Available Now",
    featured: false,
    category: "Scaling",
    spreads: [
      {
        pageNumber: 1,
        spreadTitle: "The Owl's Cryptographic Perimeter",
        image: "/assets/comics/asset_01_70b94e1f.jpg",
        caption: "Deterministic audit gates in action"
      }
    ],
    transformationLessons: [
      {
        number: "01",
        title: "Compliance as a Competitive Shield",
        takeaway: "Rigorous governance enables enterprise clients to deploy mission-critical agents without fear of legal reprisal."
      }
    ],
    previousIssueSlug: "pack-instinct",
    nextIssueSlug: "innovation-sprint"
  },
  {
    id: "comic-05",
    slug: "innovation-sprint",
    issueNumber: "Issue 05",
    canonicalChapter: "Chapter 05",
    title: "The Innovation Sprint: Asymmetric AI Prototyping",
    subtitle: "How Lean Strike Teams Beat Tech Giants in 48 Hours",
    series: "The AI Jungle Graphic Novel Saga",
    volume: "Volume I: Foundations",
    synopsis: "The Asymmetric Fox races through a glowing laboratory clutching a golden quantum container, outmaneuvering slow-moving legacy monoliths through rapid few-shot model experimentation.",
    coverImage: "/assets/comics/asset_02_bb6092a3.jpg",
    featuredCharacters: ["The Asymmetric Fox"],
    pageCount: 26,
    readingTime: "9 min read",
    publicationStatus: "Available Now",
    featured: false,
    category: "Innovation",
    spreads: [
      {
        pageNumber: 1,
        spreadTitle: "The 48-Hour Sprint",
        image: "/assets/comics/asset_02_506b9cda.jpg",
        caption: "Asymmetric market prototyping"
      }
    ],
    transformationLessons: [
      {
        number: "01",
        title: "Build the Demo, Skip the Slide Deck",
        takeaway: "Executive buy-in happens when leaders touch a functional generative prototype, not a 60-page PDF."
      }
    ],
    previousIssueSlug: "silent-eyes"
  }
];

export const CANONICAL_OMNIBUS = {
  title: "The AI Jungle: Canonical Omnibus Vol. I (Chapters 01 – 13)",
  subtitle: "The Complete Collector's Hardcover Illustrated Graphic Novel",
  description: "The complete definitive collection chronicling the 13-chapter transformation journey of global enterprises into sovereign AI powerhouses. Includes full illustrated double-page spreads, exclusive executive debriefs by Dr. Amit Khandelwal, and the complete Council of 10 archetype dossier archive.",
  coverImage: "/assets/comics/asset_10_c55f36da.jpg",
  totalSpreads: 360,
  totalPages: 720,
  binding: "Gold-Embossed Midnight Leatherette",
  releaseDate: "December 2026",
  status: "Collector Edition"
};
