export interface NavLink {
  label: string;
  href: string;
  badge?: string;
}

export const MAIN_NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Podcast", href: "/podcast" },
  { label: "Comics", href: "/comics" },
  { label: "Safari Journey", href: "/safari", badge: "13 Chapters" },
  { label: "Characters", href: "/characters", badge: "Council of 10" },
  { label: "About", href: "/about" },
];

export const FOOTER_COLUMNS = [
  {
    title: "Media Universe",
    links: [
      { label: "Podcast Transmissions (28)", href: "/podcast" },
      { label: "Digital Comics Library (6)", href: "/comics" },
      { label: "Graphic Novel Reader", href: "/reader/the-jungle-audit" },
      { label: "Omni-Search Index", href: "/search" },
      { label: "Executive Library", href: "/library" },
    ],
  },
  {
    title: "Curriculum & Council",
    links: [
      { label: "13-Chapter Safari Journey", href: "/safari" },
      { label: "Council of 10 Animal Archetypes", href: "/characters" },
      { label: "Council Comparison Matrix", href: "/characters#matrix" },
      { label: "Discover Your Archetype", href: "/characters#discover" },
      { label: "Demonstration Membership", href: "/membership" },
    ],
  },
  {
    title: "Leadership & Enterprise",
    links: [
      { label: "About Dr. Amit Khandelwal", href: "/about" },
      { label: "Executive Account & Settings", href: "/account" },
      { label: "Sovereign AI Strategy Advisory", href: "/about#advisory" },
      { label: "Executive Debrief Series", href: "/podcast" },
      { label: "Zero-Hallucination Framework", href: "/safari" },
    ],
  },
];

export const BRAND_INFO = {
  name: "THE AI JUNGLE",
  tagline: "THINK STRATEGICALLY. THEN LET AI ROAR.",
  supportingTagline: "WHERE BUSINESS MEETS ARTIFICIAL INTELLIGENCE.",
  creator: "Dr. Amit Khandelwal",
  copyright: `© ${new Date().getFullYear()} The AI Jungle Media. All rights reserved.`,
  socialLinks: [
    { name: "YouTube", href: "https://youtube.com", icon: "youtube" },
    { name: "Spotify", href: "https://spotify.com", icon: "spotify" },
    { name: "Apple Podcasts", href: "https://apple.com", icon: "podcast" },
    { name: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
    { name: "X (Twitter)", href: "https://x.com", icon: "twitter" },
  ],
};
