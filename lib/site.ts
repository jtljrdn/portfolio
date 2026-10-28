import type { CommandItem } from "@/components/site/command-menu";
import { experiences, projects } from "@/lib/content";
import { getPosts } from "@/lib/mdx-utils";

export interface NavSection {
  id: string;
  label: string;
  count?: number;
}

export function hostname(url: string): string {
  return new URL(url).hostname.replace(/^www\./, "");
}

export function siteLabel(url: string): string {
  const host = hostname(url);
  return host.endsWith(".vercel.app") ? "live" : host;
}

export const monthYear = new Intl.DateTimeFormat("en-US", {
  month: "short",
  year: "numeric",
});

export const fullDate = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
});

export const posts = getPosts()
  .map((post) => ({ ...post, time: new Date(post.metadata.date ?? 0) }))
  .sort((a, b) => b.time.getTime() - a.time.getTime());

export const socials = [
  { href: "https://www.github.com/jtljrdn", label: "github", hint: "↗" },
  { href: "https://x.com/jtljrdn", label: "x", hint: "↗" },
  {
    href: "https://www.linkedin.com/in/jordan-lee-2bb996296/",
    label: "linkedin",
    hint: "↗",
  },
  { href: "/Lee-Jordan-Resume.pdf", label: "resume", hint: "pdf" },
];

export const homeSections: NavSection[] = [
  { id: "about", label: "about" },
  { id: "experience", label: "experience", count: experiences.length },
  { id: "projects", label: "projects", count: projects.length },
  { id: "writing", label: "writing", count: posts.length },
];

function capitalize(s: string): string {
  return s[0].toUpperCase() + s.slice(1);
}

export const commandItems: CommandItem[] = [
  ...homeSections.map((s) => ({
    group: "Sections",
    label: capitalize(s.label),
    hint: "jump",
    href: `/#${s.id}`,
  })),
  ...projects.map((p) => ({
    group: "Projects",
    label: p.name,
    hint: p.live ? siteLabel(p.live) : "github",
    href: p.live ?? p.github ?? "/#projects",
  })),
  ...posts.map((p) => ({
    group: "Writing",
    label: p.metadata.title,
    hint: monthYear.format(p.time),
    href: `/blog/${p.slug}`,
  })),
  ...socials.map((s) => ({
    group: "Links",
    label: capitalize(s.label),
    hint: s.hint,
    href: s.href,
  })),
];
