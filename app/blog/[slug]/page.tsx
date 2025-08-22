import { notFound } from "next/navigation";

import { getPosts } from "@/lib/mdx-utils";
import styles from "./page.module.css";
import Link from "next/link";
import { CustomMDX } from "@/components/mdx";
import Image from "next/image";
import { twJoin } from "tailwind-merge";

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

  return {
    title: post.metadata.title,
    description: post.metadata.description,
    openGraph: {
      title: post.metadata.title,
      description: post.metadata.description,
      url: `https://example.com/blog/${slug}`,
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

  return (
    <>
      <header>
        <nav>
          <Link href="/blog">👈</Link>
        </nav>
      </header>
      <main className="max-w-3xl w-full">
        <div className="text-center leading-3 border-b-2 flex flex-col items-center justify-center">
          {post.metadata.img && (
            <Image
              src={post.metadata.img}
              alt={post.metadata.title}
              width={600}
              height={400}
              quality={100}
            />
          )}
          <h1 className={twJoin("text-center !font-bold")}>
            {post.metadata.title}
          </h1>
          {post.metadata.date && (
            <p className={`${styles.description} -mt-5 italic`}>
              Posted on {post.metadata.date}
            </p>
          )}
          {post.metadata.description && (
            <p className={styles.description}>{post.metadata.description}</p>
          )}
        </div>

        <article>
          <CustomMDX source={post.content} />
        </article>
      </main>
    </>
  );
}
