export interface SafariChapter {
  id: string;
  number: string;
  slug: string;
  displayNumber: string;
  volume: "Volume I: Foundations" | "Volume II: Scaling & MLOps" | "Volume III: Autonomous Horizons";
  volumeKey: "vol-1" | "vol-2" | "vol-3";
  title: string;
  subtitle: string;
  description: string;
  status: "Mastered" | "In Progress" | "Reserved";
  featuredArchetype: {
    name: string;
    role: string;
  };
  kpiImpact: {
    label: string;
    value: string;
  };
  computeVelocity: {
    label: string;
    value: string;
  };
  artwork: string;
  relatedComicSlug?: string;
  relatedPodcastSlug?: string;
  curriculumLessons: string[];
}

export const SAFARI_CHAPTERS: SafariChapter[] = [
  {
    id: "ch-00",
    slug: "the-seed-of-silicon",
    number: "00",
    displayNumber: "PROLOGUE • CHAPTER 00",
    volume: "Volume I: Foundations",
    volumeKey: "vol-1",
    title: "The Seed of Silicon",
    subtitle: "Algorithmic Diagnostics & Strategic Soul-Searching",
    description: "Assessing legacy inertia before planting autonomous neural architectures. Establishing executive governance and determining where true corporate sovereignty resides.",
    status: "Mastered",
    featuredArchetype: {
      name: "The Sovereign Lion",
      role: "Sovereign Strategist"
    },
    kpiImpact: {
      label: "Core KPI Impact",
      value: "Zero Legacy Drift"
    },
    computeVelocity: {
      label: "Compute Velocity",
      value: "100 TFLOPS Sovereign"
    },
    artwork: "/assets/safari/asset_01_f377b05e.jpg",
    relatedComicSlug: "the-silicon-canopy",
    relatedPodcastSlug: "pilot-seed-of-silicon",
    curriculumLessons: [
      "Legacy compute audit vs true operating leverage",
      "Executive alignment on sovereign model moats",
      "Identifying high-value agentic opportunities"
    ]
  },
  {
    id: "ch-01",
    slug: "the-jungle-audit",
    number: "01",
    displayNumber: "FOUNDATIONS • CHAPTER 01",
    volume: "Volume I: Foundations",
    volumeKey: "vol-1",
    title: "The Jungle Audit",
    subtitle: "Sovereign Readiness & Hallucination Mitigation",
    description: "Rigorous diagnostic of poisoned legacy data pipelines. Establishing the Zero-Hallucination Gate and auditing compute cost curves against verifiable enterprise margin returns.",
    status: "Mastered",
    featuredArchetype: {
      name: "The Sentinel Eagle",
      role: "Perimeter Auditor"
    },
    kpiImpact: {
      label: "Hallucination Mitigation",
      value: "-99.4% Drift"
    },
    computeVelocity: {
      label: "Syllabus Sync",
      value: "Boardroom Grade"
    },
    artwork: "/assets/safari/asset_03_cfc0b12b.jpg",
    relatedComicSlug: "the-jungle-audit",
    relatedPodcastSlug: "ep-08-jungle-audit",
    curriculumLessons: [
      "Sanitizing legacy data siloes before RAG integration",
      "Preventing compound algorithmic drift across agent chains",
      "Establishing strict vendor risk scorecards"
    ]
  },
  {
    id: "ch-02",
    slug: "the-great-trunk",
    number: "02",
    displayNumber: "FOUNDATIONS • CHAPTER 02",
    volume: "Volume I: Foundations",
    volumeKey: "vol-1",
    title: "The Great Trunk",
    subtitle: "Vector Sanitization & Institutional Memory",
    description: "Constructing multi-petabyte context windows and pristine knowledge graphs. How The Great Elephant washes polluted legacy streams to feed clean embeddings to agentic swarms.",
    status: "Mastered",
    featuredArchetype: {
      name: "The Great Elephant",
      role: "Institutional Memory"
    },
    kpiImpact: {
      label: "RAG Embedding Depth",
      value: "1.5B Vectors"
    },
    computeVelocity: {
      label: "Context Window",
      value: "2M Tokens Raw"
    },
    artwork: "/assets/safari/asset_07_a9db2ebb.jpg",
    relatedComicSlug: "the-great-trunk",
    relatedPodcastSlug: "ep-07-data-hygiene",
    curriculumLessons: [
      "Vector database sharding and semantic partitioning",
      "Hybrid dense-sparse retrieval architectures",
      "Preventing episodic memory decay in long-horizon agents"
    ]
  },
  {
    id: "ch-03",
    slug: "pack-instinct",
    number: "03",
    displayNumber: "FOUNDATIONS • CHAPTER 03",
    volume: "Volume I: Foundations",
    volumeKey: "vol-1",
    title: "Pack Instinct",
    subtitle: "High-Velocity MLOps & CI/CD Mesh",
    description: "Syncing engineering cohorts to continuously fine-tune models without service regression. Establishing automated canary rollouts and distributed GPU resilience.",
    status: "Mastered",
    featuredArchetype: {
      name: "The Agile Wolf",
      role: "MLOps Swarm"
    },
    kpiImpact: {
      label: "Pipeline Velocity",
      value: "42 Deploys / Day"
    },
    computeVelocity: {
      label: "Orchestrator",
      value: "Autonomous CI/CD"
    },
    artwork: "/assets/safari/asset_12_35c37a2e.jpg",
    relatedComicSlug: "pack-instinct",
    relatedPodcastSlug: "ep-06-pack-instinct",
    curriculumLessons: [
      "Automated canary deployment gates for model weights",
      "Dynamic INT4/FP8 quantization under live traffic",
      "Multi-agent task failover and state machine self-healing"
    ]
  },
  {
    id: "ch-04",
    slug: "silent-eyes",
    number: "04",
    displayNumber: "FOUNDATIONS • CHAPTER 04",
    volume: "Volume I: Foundations",
    volumeKey: "vol-1",
    title: "Silent Eyes",
    subtitle: "Ethical Perimeters & Deterministic Guardrails",
    description: "Implementing unbreakable EU AI Act compliance, legal observability, and differential privacy shields without stifling generative creativity or inference throughput.",
    status: "In Progress",
    featuredArchetype: {
      name: "The Vigilant Owl",
      role: "Chief Ethics Officer"
    },
    kpiImpact: {
      label: "EU AI Act Readiness",
      value: "100% Deterministic"
    },
    computeVelocity: {
      label: "Red-Line Guardrails",
      value: "Zero-Drift SLA"
    },
    artwork: "/assets/safari/asset_10_9ca55566.jpg",
    relatedComicSlug: "silent-eyes",
    relatedPodcastSlug: "ep-05-governance",
    curriculumLessons: [
      "Building verifiable algorithmic audit trails",
      "Mitigating prompt injection and unintended data leakage",
      "Human-in-the-loop escalation criteria"
    ]
  },
  {
    id: "ch-05",
    slug: "the-innovation-sprint",
    number: "05",
    displayNumber: "FOUNDATIONS • CHAPTER 05",
    volume: "Volume I: Foundations",
    volumeKey: "vol-1",
    title: "The Innovation Sprint",
    subtitle: "Asymmetric Prototyping & Agile Disruption",
    description: "Proving corporate agility against incumbent inertia. How cross-functional strike teams ship customer-facing generative AI prototypes from scratch in 48 hours.",
    status: "Reserved",
    featuredArchetype: {
      name: "The Asymmetric Fox",
      role: "Asymmetric Innovator"
    },
    kpiImpact: {
      label: "Prototype Latency",
      value: "48h Concept-to-Demo"
    },
    computeVelocity: {
      label: "Market Advantage",
      value: "3.4x Velocity"
    },
    artwork: "/assets/safari/asset_08_d9660fae.jpg",
    relatedComicSlug: "innovation-sprint",
    relatedPodcastSlug: "ep-04-innovation",
    curriculumLessons: [
      "Rapid model benchmarking and few-shot evaluation",
      "Synthetic data bootstrapping for niche domains",
      "Failing fast before capital expenditure commitments"
    ]
  },
  {
    id: "ch-06",
    slug: "zero-trust-canopy",
    number: "06",
    displayNumber: "SCALING • CHAPTER 06",
    volume: "Volume II: Scaling & MLOps",
    volumeKey: "vol-2",
    title: "Zero-Trust Canopy",
    subtitle: "Cryptographic Protection & Weights Defense",
    description: "Defending corporate weights and proprietary fine-tunes against model extraction, prompt inversion, and adversarial attacks across untrusted edge environments.",
    status: "Reserved",
    featuredArchetype: {
      name: "The Sentinel Eagle",
      role: "Cryptographic Guardian"
    },
    kpiImpact: {
      label: "Perimeter Integrity",
      value: "100% Zero-Trust"
    },
    computeVelocity: {
      label: "Threat Detection",
      value: "Sub-Second Alert"
    },
    artwork: "/assets/safari/asset_02_ad779968.jpg",
    relatedComicSlug: "zero-trust-canopy",
    relatedPodcastSlug: "ep-02-security",
    curriculumLessons: [
      "Securing confidential compute enclaves for proprietary weights",
      "Real-time token entropy anomaly monitoring",
      "Indirect prompt injection mitigation across external APIs"
    ]
  },
  {
    id: "ch-07",
    slug: "the-velocity-gap",
    number: "07",
    displayNumber: "SCALING • CHAPTER 07",
    volume: "Volume II: Scaling & MLOps",
    volumeKey: "vol-2",
    title: "The Velocity Gap",
    subtitle: "Inference Latency & Kernel Optimization",
    description: "Closing the gap between model intelligence and real-time execution. Compiling custom Triton kernels to achieve sub-10ms response loops in high-stakes environments.",
    status: "Reserved",
    featuredArchetype: {
      name: "The Velocity Cheetah",
      role: "Kernel Accelerator"
    },
    kpiImpact: {
      label: "Latency Reduction",
      value: "-85% p99 Response"
    },
    computeVelocity: {
      label: "Hardware Saturation",
      value: "96% Tensor Utility"
    },
    artwork: "/assets/safari/asset_11_0b581f35.jpg",
    relatedComicSlug: "the-velocity-gap",
    relatedPodcastSlug: "ep-03-velocity",
    curriculumLessons: [
      "Speculative decoding across tiered foundation models",
      "Paged attention memory management",
      "Edge runtime compilation with ONNX and TensorRT"
    ]
  },
  {
    id: "ch-08",
    slug: "colony-intelligence",
    number: "08",
    displayNumber: "SCALING • CHAPTER 08",
    volume: "Volume II: Scaling & MLOps",
    volumeKey: "vol-2",
    title: "Colony Intelligence",
    subtitle: "Human-in-the-Loop Workforce Transformation",
    description: "Transforming 50,000 corporate workers into an augmented, synchronized intelligence collective. Embedding agentic co-pilots into daily operational routines.",
    status: "Reserved",
    featuredArchetype: {
      name: "The Collective Ant",
      role: "Workforce Commander"
    },
    kpiImpact: {
      label: "Productivity Lift",
      value: "+280% Output"
    },
    computeVelocity: {
      label: "Adoption Index",
      value: "91% Daily Active"
    },
    artwork: "/assets/safari/asset_09_35f30cff.jpg",
    relatedComicSlug: "colony-intelligence",
    relatedPodcastSlug: "ep-08-jungle-audit",
    curriculumLessons: [
      "Overcoming cultural resistance through intuitive agent tooling",
      "Measuring actual productivity lift versus vanity prompts",
      "Decentralized governance frameworks for employee-built agents"
    ]
  },
  {
    id: "ch-09",
    slug: "prestige-brand-synthesis",
    number: "09",
    displayNumber: "SCALING • CHAPTER 09",
    volume: "Volume II: Scaling & MLOps",
    volumeKey: "vol-2",
    title: "Prestige & Brand Synthesis",
    subtitle: "Multi-Modal Narrative & Visual Gravity",
    description: "Commanding luxury market perception. Employing generative diffusion and high-fashion aesthetic standards to elevate enterprise storytelling above generic noise.",
    status: "Reserved",
    featuredArchetype: {
      name: "The Resplendent Peacock",
      role: "Brand Sovereign"
    },
    kpiImpact: {
      label: "Market Inbound Lift",
      value: "4.8x Deal Gravity"
    },
    computeVelocity: {
      label: "Diffusion Quality",
      value: "8K Cinematic"
    },
    artwork: "/assets/safari/asset_13_eb087d0f.jpg",
    relatedComicSlug: "prestige-brand-synthesis",
    relatedPodcastSlug: "ep-09-brand-prestige",
    curriculumLessons: [
      "Fine-tuning generative diffusion for brand-consistent aesthetics",
      "Storytelling frameworks that resonate with Fortune 500 boards",
      "Avoiding the cheap synthetic uncanny valley"
    ]
  },
  {
    id: "ch-10",
    slug: "curiosity-engine",
    number: "10",
    displayNumber: "AUTONOMOUS • CHAPTER 10",
    volume: "Volume III: Autonomous Horizons",
    volumeKey: "vol-3",
    title: "Curiosity Engine",
    subtitle: "MCP Tool Use & Autonomous Synthesis",
    description: "Unlocking recursive agentic tool discovery. Allowing models to dynamically discover, compose, and execute MCP tool interfaces to solve undefined business problems.",
    status: "Reserved",
    featuredArchetype: {
      name: "The Curious Monkey",
      role: "Tool Wizard"
    },
    kpiImpact: {
      label: "Autonomous Task Solve",
      value: "92% First-Try"
    },
    computeVelocity: {
      label: "Tool Discovery",
      value: "Dynamic MCP"
    },
    artwork: "/assets/safari/asset_04_176eb6de.jpg",
    relatedComicSlug: "curiosity-engine",
    relatedPodcastSlug: "ep-10-agentic-tools",
    curriculumLessons: [
      "Model Context Protocol (MCP) server deployment and security",
      "Recursive self-reflection loops for complex workflows",
      "Sandboxed environment execution and safe side-effect handling"
    ]
  },
  {
    id: "ch-11",
    slug: "the-sovereign-moat",
    number: "11",
    displayNumber: "AUTONOMOUS • CHAPTER 11",
    volume: "Volume III: Autonomous Horizons",
    volumeKey: "vol-3",
    title: "The Sovereign Moat",
    subtitle: "Compounding Intellectual Property & Defensibility",
    description: "Securing an impenetrable competitive advantage. Converting corporate data assets and operational history into proprietary model weights that cannot be replicated.",
    status: "Reserved",
    featuredArchetype: {
      name: "The Sovereign Lion",
      role: "Moat Architect"
    },
    kpiImpact: {
      label: "Moat Longevity",
      value: "Decade Defensible"
    },
    computeVelocity: {
      label: "Weights Ownership",
      value: "100% On-Premise"
    },
    artwork: "/assets/safari/asset_06_2738113b.jpg",
    relatedComicSlug: "the-sovereign-moat",
    relatedPodcastSlug: "ep-11-sovereign-moat",
    curriculumLessons: [
      "Transforming day-to-day operations into proprietary training tokens",
      "Escaping the commodity API pricing trap",
      "Valuation premiums for sovereignly owned AI IP"
    ]
  },
  {
    id: "ch-12",
    slug: "autonomous-apex",
    number: "12",
    displayNumber: "AUTONOMOUS • CHAPTER 12",
    volume: "Volume III: Autonomous Horizons",
    volumeKey: "vol-3",
    title: "Autonomous Apex",
    subtitle: "Self-Sovereign Multi-Agent Ecosystems",
    description: "The apex culmination of enterprise AI. Self-monitoring, self-healing multi-agent swarms governing supply chains, customer touchpoints, and strategic forecasting in real time.",
    status: "Reserved",
    featuredArchetype: {
      name: "The Apex Council",
      role: "Autonomous Swarm"
    },
    kpiImpact: {
      label: "Autonomous Operations",
      value: "Full Ecosystem Mesh"
    },
    computeVelocity: {
      label: "Decision Latency",
      value: "Real-Time Adaptive"
    },
    artwork: "/assets/safari/asset_05_ae0a32ce.jpg",
    relatedComicSlug: "autonomous-apex",
    relatedPodcastSlug: "ep-12-autonomous-apex",
    curriculumLessons: [
      "Designing multi-agent consensus algorithms for executive decisions",
      "Black-swan scenario automated simulation and response",
      "The role of human leadership in an apex autonomous enterprise"
    ]
  }
];

