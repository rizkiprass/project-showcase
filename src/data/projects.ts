export interface ProjectLink {
  label: string;
  url: string;
}

export interface Challenge {
  title: string;
  description: string;
  bullets: string[];
}

export interface Project {
  slug: string;
  title: string;
  overview: string;
  techStack: string[];
  challenges: Challenge[];
  architecture: string;
  impact: string[];
  links: ProjectLink[];
}

type RawProjectModule = Record<string, string>;

const markdownFiles = import.meta.glob(
  ["../../projects/*.md", "!../../projects/example-project.md"],
  {
    eager: true,
    query: "?raw",
    import: "default",
  },
) as RawProjectModule;

const sectionAliases = {
  overview: ["overview", "ringkasan"],
  techStack: ["tech stack", "technology stack", "teknologi"],
  challenges: [
    "tantangan & solusi",
    "tantangan dan solusi",
    "challenges & solutions",
    "challenges and solutions",
  ],
  architecture: ["arsitektur", "architecture"],
  impact: ["hasil / impact", "hasil", "impact", "results / impact", "outcomes"],
  links: ["links", "tautan"],
} as const;

type SectionKey = keyof typeof sectionAliases;

interface ParsedSections {
  title: string;
  sections: Map<string, string>;
}

function getFileName(path: string): string {
  return path.split(/[\\/]/).pop() ?? path;
}

function toSlug(fileName: string): string {
  return fileName.replace(/\.md$/i, "");
}

function normalizeHeading(value: string): string {
  return value.trim().toLowerCase().replace(/\s+/g, " ");
}

function stripMarkdown(value: string): string {
  return value
    .replace(/\*\*(.*?)\*\*/g, "$1")
    .replace(/_(.*?)_/g, "$1")
    .replace(/`(.*?)`/g, "$1")
    .replace(/\[(.*?)\]\((.*?)\)/g, "$1")
    .trim();
}

function splitMarkdown(markdown: string): ParsedSections {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const sections = new Map<string, string>();
  let title = "Untitled Project";
  let currentHeading = "";
  let currentBody: string[] = [];

  function commitSection() {
    if (currentHeading) {
      sections.set(normalizeHeading(currentHeading), currentBody.join("\n").trim());
    }
  }

  for (const line of lines) {
    const titleMatch = line.match(/^#\s+(.+)$/);
    if (titleMatch && !currentHeading) {
      title = stripMarkdown(titleMatch[1]);
      continue;
    }

    const headingMatch = line.match(/^##\s+(.+)$/);
    if (headingMatch) {
      commitSection();
      currentHeading = headingMatch[1];
      currentBody = [];
      continue;
    }

    if (currentHeading) {
      currentBody.push(line);
    }
  }

  commitSection();
  return { title, sections };
}

function getSection(sections: Map<string, string>, key: SectionKey): string {
  for (const alias of sectionAliases[key]) {
    const content = sections.get(normalizeHeading(alias));
    if (content) {
      return content;
    }
  }

  return "";
}

function toParagraph(raw: string): string {
  return raw
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map(stripMarkdown)
    .join(" ");
}

function toBullets(raw: string): string[] {
  return raw
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => /^[-*]\s+/.test(line))
    .map((line) => stripMarkdown(line.replace(/^[-*]\s+/, "")));
}

function toLinks(raw: string): ProjectLink[] {
  return raw
    .split("\n")
    .map((line) => line.trim())
    .map((line) => line.match(/^[-*]\s+\[(.+?)\]\((.+?)\)/))
    .filter((match): match is RegExpMatchArray => Boolean(match))
    .map((match) => ({
      label: stripMarkdown(match[1]),
      url: match[2].trim(),
    }));
}

function toChallenges(raw: string): Challenge[] {
  const challenges: Challenge[] = [];
  let current: Challenge | null = null;

  function commitChallenge() {
    if (current && (current.title || current.description || current.bullets.length)) {
      challenges.push({
        ...current,
        description: current.description.trim(),
      });
    }
  }

  for (const line of raw.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed) {
      continue;
    }

    const headingMatch = trimmed.match(/^\*\*(?:\d+\.\s*)?(.+?)\*\*$/);
    if (headingMatch) {
      commitChallenge();
      current = {
        title: stripMarkdown(headingMatch[1]),
        description: "",
        bullets: [],
      };
      continue;
    }

    if (!current) {
      current = {
        title: "Delivery challenge",
        description: "",
        bullets: [],
      };
    }

    if (/^[-*]\s+/.test(trimmed)) {
      current.bullets.push(stripMarkdown(trimmed.replace(/^[-*]\s+/, "")));
    } else {
      current.description = `${current.description} ${stripMarkdown(trimmed)}`.trim();
    }
  }

  commitChallenge();
  return challenges;
}

function parseProject(path: string, markdown: string): Project {
  const { title, sections } = splitMarkdown(markdown);

  return {
    slug: toSlug(getFileName(path)),
    title,
    overview: toParagraph(getSection(sections, "overview")),
    techStack: toBullets(getSection(sections, "techStack")),
    challenges: toChallenges(getSection(sections, "challenges")),
    architecture: toParagraph(getSection(sections, "architecture")),
    impact: toBullets(getSection(sections, "impact")),
    links: toLinks(getSection(sections, "links")),
  };
}

export const projects: Project[] = Object.entries(markdownFiles)
  .map(([path, markdown]) => parseProject(path, markdown))
  .sort((a, b) => a.title.localeCompare(b.title));
