export interface Character {
  id: string;
  slug: string;
  name: string;
  animal: string;
  executiveRole: string;
  category: "Leadership" | "Data & Operations" | "Governance & Security" | "Innovation & Growth";
  quote: string;
  description: string;
  strategicPhilosophy: string;
  keyResponsibilities: string[];
  algorithmicStrengths: string[];
  transformationMetrics: {
    kpi: string;
    target: string;
  };
  riskMitigated: string;
  portraitImage: string;
  bannerImage?: string;
  relatedEpisodes: string[];
  relatedComics: string[];
  relatedSafariChapters: string[];
}

export const CHARACTERS: Character[] = [
  {
    id: "archetype-01",
    slug: "sovereign-lion",
    name: "The Sovereign Lion",
    animal: "Lion",
    executiveRole: "Chief Executive Officer & AI Strategist",
    category: "Leadership",
    quote: "True sovereignty is never bought from external vendors; it is earned by owning your algorithmic destiny.",
    description: "Commanding the central executive boardroom, The Sovereign Lion drives top-down AI strategy, capital allocation, and macro transformation across global enterprise ecosystems.",
    strategicPhilosophy: "Autonomous enterprise survival demands unapologetic strategic focus. Machine intelligence must serve the sovereign business moat, not vendor lock-in.",
    keyResponsibilities: [
      "Enterprise Capital Allocation for Compute & Model Stacks",
      "Sovereign Moat Architecture & Boardroom Mandates",
      "Executive Alignment Across C-Suite AI Initiatives",
      "Host of The AI Jungle Broadcast Transmissions"
    ],
    algorithmicStrengths: [
      "Multi-Agent Macro Coordination",
      "Strategic Game-Theoretic Simulation",
      "High-Fidelity Decision Optimization"
    ],
    transformationMetrics: {
      kpi: "Legacy Drift Reduction",
      target: "Zero Legacy Drift (100% Alignment)"
    },
    riskMitigated: "Enterprise Strategic Paralysis & Vendor Subjugation",
    portraitImage: "/assets/characters/asset_06_636678a4.jpg",
    relatedEpisodes: ["ep-01", "ep-08"],
    relatedComics: ["issue-00", "issue-01"],
    relatedSafariChapters: ["ch-00", "ch-01", "ch-11"]
  },
  {
    id: "archetype-02",
    slug: "the-elephant",
    name: "The Great Elephant",
    animal: "Elephant",
    executiveRole: "Chief Data Officer (CDO)",
    category: "Data & Operations",
    quote: "Corrupted streams cannot nourish the canopy. If vector lakes are poisoned, all downstream agents hallucinate.",
    description: "Guardian of multi-petabyte institutional memory. The Great Elephant purifies enterprise data rivers, enforces vector hygiene, and constructs infallible retrieval-augmented generation (RAG) foundations.",
    strategicPhilosophy: "Data is the bedrock of corporate memory. Without pristine data pipelines, even the largest foundation models generate catastrophic hallucinations.",
    keyResponsibilities: [
      "Enterprise Vector Lake Sanitization & Pipeline Hygiene",
      "High-Density Context Window Optimization (2M+ Tokens)",
      "Multi-Modal Data Ingestion & Governance",
      "Legacy Silo Deconstruction & Knowledge Graph Synthesis"
    ],
    algorithmicStrengths: [
      "1.5B+ Dense Vector Embeddings",
      "High-Precision Semantic Retrieval",
      "Long-Horizon Episodic Memory Caching"
    ],
    transformationMetrics: {
      kpi: "Hallucination Mitigation",
      target: "-99.4% Retrieval Error Rate"
    },
    riskMitigated: "Poisoned RAG Vectors & Context Window Collapse",
    portraitImage: "/assets/characters/asset_05_0e8b5a3f.jpg",
    relatedEpisodes: ["ep-07", "ep-08"],
    relatedComics: ["issue-01", "issue-02"],
    relatedSafariChapters: ["ch-02"]
  },
  {
    id: "archetype-03",
    slug: "the-wolf",
    name: "The Agile Wolf",
    animal: "Wolf",
    executiveRole: "Chief Operating Officer & MLOps Leader",
    category: "Data & Operations",
    quote: "A lone algorithm starves; the coordinated pack hunts at production scale with relentless velocity.",
    description: "Master of collective CI/CD orchestration, model fine-tuning cohorts, and containerized operational swarms across distributed hybrid cloud infrastructure.",
    strategicPhilosophy: "Flawless execution beats theoretical brilliance. Engineering cohorts must operate with biological synchronization to deploy, evaluate, and self-heal.",
    keyResponsibilities: [
      "Continuous CI/CD Model Evaluation & Rollouts",
      "Distributed GPU Cluster Orchestration & Load Balancing",
      "Autonomous Agent Failover & Resilience Mesh",
      "Cross-Functional Squad Synchronization"
    ],
    algorithmicStrengths: [
      "High-Frequency Model Sharding",
      "Dynamic Weights Quantization",
      "Automated Canary Regression Checks"
    ],
    transformationMetrics: {
      kpi: "Pipeline Deployment Velocity",
      target: "42 Autonomous Deploys / Day"
    },
    riskMitigated: "Operational Drift & Stagnant Machine Learning Lifecycles",
    portraitImage: "/assets/characters/asset_04_8a0e394a.jpg",
    relatedEpisodes: ["ep-06"],
    relatedComics: ["issue-02"],
    relatedSafariChapters: ["ch-03"]
  },
  {
    id: "archetype-04",
    slug: "the-owl",
    name: "The Vigilant Owl",
    animal: "Owl",
    executiveRole: "Chief Ethics & Governance Officer (CEGO)",
    category: "Governance & Security",
    quote: "True sight pierces algorithmic darkness; compliance is not a cage, but the iron frame of longevity.",
    description: "Perched high on the encrypted canopy boughs, The Vigilant Owl inspects model explainability, enforces EU AI Act guardrails, and guarantees deterministic audits.",
    strategicPhilosophy: "Speed without guardrails is corporate suicide. Uncompromising oversight preserves public trust and inoculates the firm against regulatory penalties.",
    keyResponsibilities: [
      "EU AI Act & Global Regulatory Compliance Certifications",
      "Deterministic Bias & Hallucination Gatekeeping",
      "Model Transparency & Algorithmic Audit Logging",
      "Board-Level Ethical Risk Assessments"
    ],
    algorithmicStrengths: [
      "Differential Privacy Verification",
      "Red-Teaming Automated Frameworks",
      "Explainable AI (XAI) Attribution Heatmaps"
    ],
    transformationMetrics: {
      kpi: "Regulatory Readiness",
      target: "100% Deterministic Compliance"
    },
    riskMitigated: "Regulatory Sanctions, Bias Liability & Intellectual Property Leaks",
    portraitImage: "/assets/characters/asset_07_51e0a3a6.jpg",
    relatedEpisodes: ["ep-05"],
    relatedComics: ["issue-03"],
    relatedSafariChapters: ["ch-04"]
  },
  {
    id: "archetype-05",
    slug: "the-fox",
    name: "The Asymmetric Fox",
    animal: "Fox",
    executiveRole: "Chief Strategy Officer & Innovation Leader",
    category: "Innovation & Growth",
    quote: "When legacy behemoths move in straight lines, the sovereign innovator strikes where the map is unwritten.",
    description: "Agile, sharp, and relentlessly experimenting. The Fox turns emerging open-weights research into unfair commercial advantage within 48-hour prototyping sprints.",
    strategicPhilosophy: "Disruption favors the nimble. High-margin moats are carved by probing market blindspots before competitors even schedule committee meetings.",
    keyResponsibilities: [
      "Rapid Prototype Incubation (Concept to Demo in 48 Hours)",
      "Open-Source Foundation Model Evaluation",
      "Asymmetric Market Wedge Identification",
      "Venture AI Incubation & Spin-Out Strategy"
    ],
    algorithmicStrengths: [
      "Few-Shot Emergent Adaptation",
      "Synthetic Data Distillation",
      "Multi-Modal Creative Synthesis"
    ],
    transformationMetrics: {
      kpi: "Time-to-Market Innovation",
      target: "3.4x Faster Product Prototyping"
    },
    riskMitigated: "Corporate Inertia & Incumbent Disruption Blindspots",
    portraitImage: "/assets/characters/asset_03_67a41b13.jpg",
    relatedEpisodes: ["ep-04"],
    relatedComics: ["issue-04"],
    relatedSafariChapters: ["ch-05"]
  },
  {
    id: "archetype-06",
    slug: "the-cheetah",
    name: "The Velocity Cheetah",
    animal: "Cheetah",
    executiveRole: "Head of Automation & Inference Acceleration",
    category: "Data & Operations",
    quote: "In the algorithmic jungle, a millisecond is the chasm between dominating an auction and irrelevance.",
    description: "Pushes silicon inference hardware to physical extremes. Optimizes TensorRT compilation, custom kernels, and sub-10ms real-time agentic execution loops.",
    strategicPhilosophy: "Latency is the silent killer of user trust. High-frequency intelligence requires radical optimization from silicon registers to browser runtimes.",
    keyResponsibilities: [
      "Real-Time Sub-10ms Agentic Inference Latency",
      "Custom CUDA & Triton Kernel Compilation",
      "Edge-Device AI Deployment & Quantization (INT4/FP8)",
      "Hardware Acceleration Benchmark Optimization"
    ],
    algorithmicStrengths: [
      "Speculative Decoding Acceleration",
      "KV-Cache Compression",
      "Pipelined Asynchronous Tool Calling"
    ],
    transformationMetrics: {
      kpi: "Inference Throughput",
      target: "12,000 Tokens/sec / Node"
    },
    riskMitigated: "Inference Latency Choke points & Excessive Compute Overhead",
    portraitImage: "/assets/characters/asset_01_7bfcb18f.jpg",
    relatedEpisodes: ["ep-03"],
    relatedComics: ["issue-05"],
    relatedSafariChapters: ["ch-07"]
  },
  {
    id: "archetype-07",
    slug: "the-eagle",
    name: "The Sentinel Eagle",
    animal: "Eagle",
    executiveRole: "Chief Information Security Officer (CISO)",
    category: "Governance & Security",
    quote: "We scan the canopy from stratosphere to kernel. In a zero-trust realm, every token is guilty until authenticated.",
    description: "Soaring above the forest canopy, The Sentinel Eagle detects prompt injection, protects corporate weights, and constructs cryptographic defenses against adversarial attacks.",
    strategicPhilosophy: "Security cannot be an afterthought retrofitted to AI. The entire canopy perimeter must be cryptographic, zero-trust, and continuously red-teamed.",
    keyResponsibilities: [
      "Zero-Trust Architecture Across Autonomous Agentic Meshes",
      "Prompt Injection & Jailbreak Defense Shields",
      "Cryptographic Model Weights Enclaves",
      "Automated Attack Surface Vulnerability Remediation"
    ],
    algorithmicStrengths: [
      "Adversarial Robustness Verification",
      "Real-Time Token Flow Anomaly Detection",
      "Confidential Enclave Compute"
    ],
    transformationMetrics: {
      kpi: "Canopy Security Breach Rate",
      target: "0 Verified Adversarial Intrusions"
    },
    riskMitigated: "Model Extraction, Weights Theft & Indirect Injection Exploits",
    portraitImage: "/assets/characters/asset_08_323cc0f3.jpg",
    relatedEpisodes: ["ep-02"],
    relatedComics: ["issue-06"],
    relatedSafariChapters: ["ch-06"]
  },
  {
    id: "archetype-08",
    slug: "the-ant",
    name: "The Collective Ant",
    animal: "Ant",
    executiveRole: "Head of Workforce & Swarm Intelligence",
    category: "Leadership",
    quote: "A single worker moves grains; one billion synchronized agents reshape mountains before dawn.",
    description: "Directs organizational upskilling and massive multi-agent autonomous hierarchies. Transforms traditional corporate pyramids into emergent collective intelligence colonies.",
    strategicPhilosophy: "Human talent coupled with distributed micro-agents creates insurmountable scale. Democratize tool execution to empower every layer of the workforce.",
    keyResponsibilities: [
      "Enterprise Human-in-the-Loop Reskilling Programs",
      "Autonomous Multi-Agent Hierarchies & Task Decomposition",
      "Internal AI Tool Adoption & Cross-Functional Co-Pilots",
      "Decentralized Colony Intelligence Governance"
    ],
    algorithmicStrengths: [
      "Hierarchical Swarm Consensus",
      "Autonomous Sub-Task Routing",
      "Dynamic Role Allocation"
    ],
    transformationMetrics: {
      kpi: "Workforce Productivity Lift",
      target: "+280% Output across 50,000 Employees"
    },
    riskMitigated: "Workforce Disenfranchisement & Agentic Fragmentation",
    portraitImage: "/assets/characters/asset_10_d1f146f0.jpg",
    relatedEpisodes: ["ep-08"],
    relatedComics: ["issue-07"],
    relatedSafariChapters: ["ch-08"]
  },
  {
    id: "archetype-09",
    slug: "the-peacock",
    name: "The Resplendent Peacock",
    animal: "Peacock",
    executiveRole: "Chief Marketing Officer & Brand Sovereign",
    category: "Innovation & Growth",
    quote: "Prestige is not vanity; it is the visual luminescence that commands supreme market gravity.",
    description: "Crafts the multi-modal aesthetic signature, luxury brand positioning, and generative market narratives that captivate global executive audiences.",
    strategicPhilosophy: "Intellect without prestige goes unnoticed. The sovereign brand must inspire awe, projecting authority through bespoke craftsmanship and visual perfection.",
    keyResponsibilities: [
      "Global Multi-Modal Generative Brand Synthesis",
      "Executive Narrative Architecture & Narrative Positioning",
      "Generative Video & High-Fashion Marketing Campaigns",
      "Audience Trust & Luminescent Aesthetic Standards"
    ],
    algorithmicStrengths: [
      "Multi-Modal Diffusion Guidance",
      "Brand-Aligned Latent Space Conditioning",
      "Real-Time Sentiment Steering"
    ],
    transformationMetrics: {
      kpi: "Brand Resonance & Inbound Deal Flow",
      target: "4.8x Executive Inbound Velocity"
    },
    riskMitigated: "Brand Commoditization & Derivative AI Stigma",
    portraitImage: "/assets/characters/asset_02_35258088.jpg",
    relatedEpisodes: ["ep-09"],
    relatedComics: ["issue-08"],
    relatedSafariChapters: ["ch-09"]
  },
  {
    id: "archetype-10",
    slug: "the-monkey",
    name: "The Curious Monkey",
    animal: "Monkey",
    executiveRole: "Head of GenAI & Interactive Tool Execution",
    category: "Innovation & Growth",
    quote: "Curiosity is the ultimate catalyst; give an intelligent agent tool use, and watch it build worlds.",
    description: "The creative tinkerer and tool-use wizard. Champions recursive problem-solving, code synthesis, MCP tool integrations, and interactive productivity leaps.",
    strategicPhilosophy: "Playful iteration unlocks breakthrough discoveries. Give models hands, eyes, and API tools, and they will solve what committees debated for years.",
    keyResponsibilities: [
      "MCP (Model Context Protocol) Server & Tool Integration",
      "Recursive Code Synthesis & Self-Refining Workflows",
      "Interactive Sandbox Environments for Generative UI",
      "Serendipitous Capability Discovery & Experimentation"
    ],
    algorithmicStrengths: [
      "Autonomous Function Calling",
      "Tree-of-Thought Problem Decomposition",
      "Self-Correction & Reflection"
    ],
    transformationMetrics: {
      kpi: "Engineering Efficiency",
      target: "65% Autonomous Boilerplate Elimination"
    },
    riskMitigated: "Over-Rigid Planning & Lost Generative Potential",
    portraitImage: "/assets/characters/asset_09_daa5ecbc.jpg",
    relatedEpisodes: ["ep-10"],
    relatedComics: ["issue-09"],
    relatedSafariChapters: ["ch-10"]
  }
];

