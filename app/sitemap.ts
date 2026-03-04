import type { MetadataRoute } from "next";
import { getPosts, formatDateISO } from "@/lib/mdx-utils";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getPosts().map((post) => ({
    url: `https://jtlee.dev/blog/${post.slug}`,
    lastModified: post.metadata.date
      ? formatDateISO(post.metadata.date)
      : undefined,
  }));

  return [
    { url: "https://jtlee.dev" },
    { url: "https://jtlee.dev/projects" },
    { url: "https://jtlee.dev/blog" },
    ...posts,
  ];
}
