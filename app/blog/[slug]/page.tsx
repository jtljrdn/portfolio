import { notFound } from "next/navigation";

import { getPosts, formatDateISO } from "@/lib/mdx-utils";
import Link from "next/link";
import { CustomMDX } from "@/components/mdx";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <header>
        <nav>
          <Button variant="ghost" size="sm" asChild>
            <Link
              href="/blog"
              className="gap-2 text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </Link>
          </Button>
        </nav>
      </header>
      <main className="max-w-3xl w-full">
        <div className="border-b pb-8 mb-8">
          {post.metadata.img && (
            <div className="mb-6 rounded-lg overflow-hidden">
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
            <p className="text-xs uppercase tracking-widest text-muted-foreground">
              Posted on {post.metadata.date}
            </p>
          )}

          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight font-serif ">
            {post.metadata.title}
          </h1>

          {post.metadata.description && (
            <p className="text-muted-foreground text-lg leading-relaxed">
              {post.metadata.description}
            </p>
          )}
        </div>

        <article>
          <CustomMDX source={post.content} />
        </article>
      </main>
    </>
  );
}
