import Link from "next/link";
import BlogNav from "@/components/site/blog-nav";
import SiteShell from "@/components/site/shell";
import { fullDate, posts } from "@/lib/site";

export default function Blog() {
  return (
    <SiteShell
      path={[
        { label: "jordan", href: "/" },
        { label: "writing", href: "/blog" },
      ]}
      nav={<BlogNav />}
    >
      <div className="max-w-xl pt-8 text-[15px] leading-relaxed text-pretty sm:text-base">
        <h1 className="inline text-zinc-200">Ramblings.</h1>{" "}
        <p className="inline text-zinc-500">
          A collection of my thoughts, ideas, and projects. I write about
          software development, technology, and anything else that comes to
          mind.
        </p>
      </div>

      <section className="mt-12">
        <h2 className="flex justify-between border-b border-zinc-900 pb-2.5 font-mono text-[11px] tracking-[0.08em] text-zinc-500 uppercase">
          <span>Posts</span>
          <span className="tracking-normal text-zinc-700">{posts.length}</span>
        </h2>
        <ul>
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group grid gap-x-4 gap-y-1 border-b border-zinc-900/70 py-4 sm:grid-cols-[96px_minmax(0,1fr)]"
              >
                <span className="pt-0.5 font-mono text-[11px] text-zinc-600">
                  {fullDate.format(post.time)}
                </span>
                <span>
                  <span className="block text-sm font-medium text-zinc-200 transition-colors group-hover:text-green-400">
                    {post.metadata.title}
                  </span>
                  {post.metadata.description && (
                    <span className="mt-1 line-clamp-2 block text-[13px] leading-relaxed text-zinc-500">
                      {post.metadata.description}
                    </span>
                  )}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </SiteShell>
  );
}
