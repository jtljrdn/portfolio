import NavItem from "@/components/site/nav-item";
import { NavHeading } from "@/components/site/shell";
import { homeSections, posts } from "@/lib/site";

export default function BlogNav({ activeSlug }: { activeSlug?: string }) {
  return (
    <>
      <NavHeading>ME</NavHeading>
      <ul>
        {homeSections.map((s) =>
          s.id === "writing" ? (
            <NavItem
              key={s.id}
              href="/blog"
              label={s.label}
              count={s.count}
              active={!activeSlug}
            />
          ) : (
            <NavItem
              key={s.id}
              href={`/#${s.id}`}
              label={s.label}
              count={s.count}
              active={false}
            />
          ),
        )}
      </ul>

      <NavHeading>POSTS</NavHeading>
      <ul>
        {posts.map((p) => (
          <NavItem
            key={p.slug}
            href={`/blog/${p.slug}`}
            label={p.metadata.title.toLowerCase()}
            active={p.slug === activeSlug}
          />
        ))}
      </ul>
    </>
  );
}
