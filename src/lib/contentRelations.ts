import { PODCAST_EPISODES, PodcastEpisode } from "@/data/podcast";
import { COMIC_ISSUES, ComicIssue } from "@/data/comics";
import { SAFARI_CHAPTERS, SafariChapter } from "@/data/safari";
import { CHARACTERS, Character } from "@/data/characters";

export interface ContentHubItem {
  id: string;
  type: "podcast" | "comic" | "safari" | "character";
  title: string;
  subtitle?: string;
  description: string;
  slug: string;
  url: string;
  badge: string;
  image: string;
  meta: string;
}

export function getAllSearchableContent(): ContentHubItem[] {
  const items: ContentHubItem[] = [];

  // 1. Podcasts
  PODCAST_EPISODES.forEach((ep) => {
    items.push({
      id: ep.id,
      type: "podcast",
      title: ep.title,
      subtitle: ep.subtitle,
      description: ep.description,
      slug: ep.slug,
      url: `/podcast/${ep.slug}`,
      badge: `${ep.episodeNumber} • ${ep.season}`,
      image: ep.videoPoster,
      meta: `${ep.duration} • ${ep.categories.join(", ")}`,
    });
  });

  // 2. Comics
  COMIC_ISSUES.forEach((c) => {
    items.push({
      id: c.id,
      type: "comic",
      title: c.title,
      subtitle: c.subtitle,
      description: c.synopsis,
      slug: c.slug,
      url: `/comics/${c.slug}`,
      badge: `${c.issueNumber} • ${c.volume}`,
      image: c.coverImage,
      meta: `${c.pageCount} Pages • ${c.readingTime}`,
    });
  });

  // 3. Safari Chapters
  SAFARI_CHAPTERS.forEach((ch) => {
    items.push({
      id: ch.id,
      type: "safari",
      title: ch.title,
      subtitle: ch.subtitle,
      description: ch.description,
      slug: ch.slug,
      url: `/safari/${ch.slug}`,
      badge: ch.displayNumber,
      image: ch.artwork,
      meta: `${ch.featuredArchetype.name} • ${ch.kpiImpact.value}`,
    });
  });

  // 4. Characters
  CHARACTERS.forEach((char) => {
    items.push({
      id: char.id,
      type: "character",
      title: char.name,
      subtitle: `${char.role} · ${char.archetype}`,
      description: char.description,
      slug: char.slug,
      url: `/characters/${char.slug}`,
      badge: `Council Rank #${char.councilRank}`,
      image: char.portrait,
      meta: `${char.department} • Tier: ${char.maturityLevel}`,
    });
  });

  return items;
}

export function getCharacterRelatedContent(characterName: string) {
  const podcasts = PODCAST_EPISODES.filter((ep) =>
    ep.dialogists.some((d) => d.name.toLowerCase().includes(characterName.toLowerCase())) ||
    ep.title.toLowerCase().includes(characterName.toLowerCase()) ||
    ep.description.toLowerCase().includes(characterName.toLowerCase())
  );

  const comics = COMIC_ISSUES.filter((c) =>
    c.featuredCharacters.some((fc) => fc.toLowerCase().includes(characterName.toLowerCase())) ||
    c.synopsis.toLowerCase().includes(characterName.toLowerCase())
  );

  const safariChapters = SAFARI_CHAPTERS.filter((ch) =>
    ch.featuredArchetype.name.toLowerCase().includes(characterName.toLowerCase()) ||
    ch.description.toLowerCase().includes(characterName.toLowerCase())
  );

  return { podcasts, comics, safariChapters };
}

export function getSafariRelatedContent(chapter: SafariChapter) {
  const relatedComic = COMIC_ISSUES.find((c) => c.slug === chapter.relatedComicSlug) || COMIC_ISSUES[0];
  const relatedPodcast = PODCAST_EPISODES.find((ep) => ep.slug === chapter.relatedPodcastSlug) || PODCAST_EPISODES[0];
  const relatedCharacter = CHARACTERS.find((char) =>
    char.name.toLowerCase().includes(chapter.featuredArchetype.name.toLowerCase()) ||
    char.role.toLowerCase().includes(chapter.featuredArchetype.role.toLowerCase())
  ) || CHARACTERS[0];

  return { relatedComic, relatedPodcast, relatedCharacter };
}

