import Link from "next/link";
import { getPosts } from "@/lib/mdx-utils";
import { ArrowRight } from "lucide-react";

export default function Home() {
  const posts = getPosts();

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex flex-col items-center justify-center p-8 pb-20 gap-12 sm:p-20">
        <div className="w-full max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight font-serif">Ramblings</h1>
          <p className="text-muted-foreground mt-3">
            A collection of my thoughts, ideas, and projects. I write about
            software development, technology, and anything else that comes to
            mind.
          </p>
        </div>

        <div className="w-full max-w-2xl divide-y divide-border">
          {posts.map((post) => (
            <Link
              href={`/blog/${post.slug}`}
              key={post.slug}
              className="group block py-6 first:pt-0 last:pb-0"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1.5">
                    {post.metadata.date}
                  </p>
                  <h2 className="text-lg font-semibold leading-snug font-serif group-hover:text-muted-foreground transition-colors duration-200">
                    {post.metadata.title}
                  </h2>
                  {post.metadata.description && (
                    <p className="text-muted-foreground text-sm mt-1.5 line-clamp-2">
                      {post.metadata.description}
                    </p>
                  )}
                </div>
                <ArrowRight className="w-4 h-4 mt-6 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 shrink-0" />
              </div>
            </Link>
          ))}
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <Link href={"./"} className="text-muted-foreground">
          <p>Me</p>
        </Link>
        <Link href={"./projects"} className="text-muted-foreground ">
          <p>My Projects</p>
        </Link>
        <Link href={"./blog"} className="text-muted-foreground ">
          <p>My Blog</p>
        </Link>
      </footer>
    </div>
  );
}
