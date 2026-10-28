import { notFound } from "next/navigation";

import { getPosts, formatDateISO } from "@/lib/mdx-utils";
import Link from "next/link";
import { CustomMDX } from "@/components/mdx";
import Image from "next/image";
import BlogNav from "@/components/site/blog-nav";
import SiteShell from "@/components/site/shell";
import { fullDate, posts } from "@/lib/site";

export function generateStaticParams() {
  const posts = getPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPosts().find((post) => post.slug === slug);

  if (!post) {
    return {
      title: "Post not found",
    };
  }

  const publishedTime = post.metadata.date
    ? formatDateISO(post.metadata.date)
    : undefined;

  return {
    title: post.metadata.title,
    description: post.metadata.description,
    keywords: post.metadata.keywords,
    authors: [{ name: "Jordan Lee" }],
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      title: post.metadata.title,
      description: post.metadata.description,
      url: `https://jtlee.dev/blog/${slug}`,
      type: "article",
      publishedTime,
      images: post.metadata.img ? [post.metadata.img] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: post.metadata.title,
      description: post.metadata.description,
      images: post.metadata.img ? [post.metadata.img] : [],
    },
  };
}

export default async function Blog({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPosts().find((post) => post.slug === slug);

  if (!post) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.metadata.title,
    author: { "@type": "Person", name: "Jordan Lee" },
    datePublished: post.metadata.date
      ? formatDateISO(post.metadata.date)
      : undefined,
    keywords: post.metadata.keywords,
    url: `https://jtlee.dev/blog/${slug}`,
  };

  const index = posts.findIndex((p) => p.slug === slug);
  const older = posts[index + 1];

  return (
    <SiteShell
      path={[
        { label: "jordan", href: "/" },
        { label: "writing", href: "/blog" },
        { label: slug, href: `/blog/${slug}` },
      ]}
      nav={<BlogNav activeSlug={slug} />}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="pt-10">
        <header className="max-w-2xl border-b border-zinc-900 pb-8">
          {post.metadata.img && (
            <div className="mb-8 overflow-hidden rounded-lg border border-zinc-800">
              <Image
                src={post.metadata.img}
                alt={post.metadata.title}
                width={600}
                height={400}
                quality={100}
                className="w-full object-cover"
              />
            </div>
          )}

          {post.metadata.date && (
            <p className="font-mono text-[11px] text-zinc-600">
              {fullDate.format(new Date(post.metadata.date))}
            </p>
          )}

          <h1 className="mt-3 text-2xl leading-tight font-semibold tracking-tight text-balance text-zinc-50 sm:text-3xl">
            {post.metadata.title}
          </h1>

          {post.metadata.description && (
            <p className="mt-4 text-[15px] leading-relaxed text-pretty text-zinc-400">
              {post.metadata.description}
            </p>
          )}
        </header>

        <div className="mt-4">
          <CustomMDX source={post.content} />
        </div>
      </article>

      <nav
        aria-label="More writing"
        className="mt-16 flex flex-wrap justify-between gap-4 border-t border-zinc-900 pt-5 font-mono text-[11px] text-zinc-500"
      >
        <Link href="/blog" className="transition-colors hover:text-zinc-200">
          ← all writing
        </Link>
        {older && (
          <Link
            href={`/blog/${older.slug}`}
            className="truncate transition-colors hover:text-green-400"
          >
            older: {older.metadata.title.toLowerCase()} →
          </Link>
        )}
      </nav>
    </SiteShell>
  );
}
