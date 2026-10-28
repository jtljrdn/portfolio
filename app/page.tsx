import Image from "next/image";
import Link from "next/link";
import Contributions from "@/components/contributions";
import SectionNav from "@/components/site/section-nav";
import SiteShell, { NavHeading } from "@/components/site/shell";
import { cn } from "@/lib/utils";
import { homeSections, monthYear, posts, siteLabel } from "@/lib/site";
import {
  education,
  experiences,
  projects,
  type Experience,
  type Project,
  type WorkImage,
} from "@/lib/content";

interface CompanyGroup {
  company: string;
  location: string;
  roles: Experience[];
}

function groupByCompany(items: Experience[]): CompanyGroup[] {
  const groups: CompanyGroup[] = [];
  for (const exp of items) {
    const last = groups[groups.length - 1];
    if (last && last.company === exp.company) last.roles.push(exp);
    else
      groups.push({
        company: exp.company,
        location: exp.location,
        roles: [exp],
      });
  }
  return groups;
}

function formatRange(start: string, end: string): string {
  if (end === "Present") return `${start} to now`;
  const [startMonth, startYear] = start.split(" ");
  const endYear = end.split(" ")[1];
  return startYear === endYear
    ? `${startMonth} to ${end}`
    : `${start} to ${end}`;
}

const experienceGroups = groupByCompany(experiences);
const FEATURED_PROJECTS = 4;

export default function Home() {
  return (
    <SiteShell
      path={[{ label: "jordan", href: "/" }]}
      nav={
        <>
          <NavHeading>ME</NavHeading>
          <SectionNav sections={homeSections} />
        </>
      }
    >
      <section id="about" className="scroll-mt-8 pt-8">
        <p className="max-w-xl text-[15px] leading-relaxed text-pretty text-zinc-200 sm:text-base">
          Software Engineer at Room2Room Movers. Software engineering student at
          Auburn University.{" "}
          <span className="text-zinc-500">
            I build developer tools on the side and write about working
            with AI agents. I focus on building great products and user experiences.
          </span>
        </p>
        <Contributions />
      </section>

      <Section id="experience" title="Experience">
        {experienceGroups.map((group) => (
          <CompanyBlock key={group.company} group={group} />
        ))}
      </Section>

      <Section id="projects" title="Projects" count={projects.length}>
        <ProjectGrid items={projects.slice(0, FEATURED_PROJECTS)} />
        {projects.length > FEATURED_PROJECTS && (
          <details className="group/more">
            <summary className="mt-3 inline-block cursor-pointer list-none font-mono text-[11px] text-zinc-500 transition-colors group-open/more:hidden hover:text-zinc-200 [&::-webkit-details-marker]:hidden">
              + {projects.length - FEATURED_PROJECTS} more
            </summary>
            <ProjectGrid items={projects.slice(FEATURED_PROJECTS)} />
          </details>
        )}
      </Section>

      <Section id="writing" title="Writing" count={posts.length}>
        <ul>
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group grid grid-cols-[72px_minmax(0,1fr)] items-baseline gap-4 border-b border-zinc-900/70 py-3"
              >
                <span className="font-mono text-[11px] text-zinc-600">
                  {monthYear.format(post.time)}
                </span>
                <span className="text-sm font-medium text-zinc-200 transition-colors group-hover:text-green-400">
                  {post.metadata.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="education" title="Education">
        {education.map((ed) => (
          <div
            key={ed.degree}
            className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 py-3"
          >
            <div>
              <p className="text-sm font-medium text-zinc-200">
                {ed.degree}
              </p>
              <p className="mt-1 text-[13px] text-zinc-500">{ed.school}</p>
            </div>
            <span className="font-mono text-[11px] text-zinc-600">
              {formatRange(ed.start, ed.end)}
            </span>
          </div>
        ))}
      </Section>
    </SiteShell>
  );
}

function Section({
  id,
  title,
  count,
  children,
}: {
  id: string;
  title: string;
  count?: number;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mt-14 scroll-mt-8">
      <h2 className="flex justify-between border-b border-zinc-900 pb-2.5 font-mono text-[11px] tracking-[0.08em] text-zinc-500 uppercase">
        <span>{title}</span>
        {count !== undefined && (
          <span className="tracking-normal text-zinc-700">{count}</span>
        )}
      </h2>
      {children}
    </section>
  );
}

function CompanyBlock({ group }: { group: CompanyGroup }) {
  return (
    <div className="grid gap-x-6 gap-y-3 border-b border-zinc-900/70 py-5 last:border-0 sm:grid-cols-[150px_minmax(0,1fr)]">
      <div>
        <h3 className="text-sm font-medium text-zinc-50">{group.company}</h3>
        <p className="mt-1 font-mono text-[11px] text-zinc-600 lowercase">
          {group.location}
        </p>
      </div>
      <ol className="space-y-4">
        {group.roles.map((role, i) => (
          <Role
            key={role.role + role.start}
            exp={role}
            connected={i < group.roles.length - 1}
          />
        ))}
      </ol>
    </div>
  );
}

function Role({ exp, connected }: { exp: Experience; connected: boolean }) {
  return (
    <li className="relative pl-5">
      <span
        aria-hidden
        className={cn(
          "absolute top-[7px] left-0.5 size-[7px] rounded-full border",
          exp.current
            ? "border-green-400 bg-green-400 shadow-[0_0_0_3px_rgb(74_222_128/0.12)]"
            : "border-zinc-700 bg-zinc-950",
        )}
      />
      {connected && (
        <span
          aria-hidden
          className="absolute top-[18px] -bottom-[14px] left-[5px] w-px bg-zinc-800"
        />
      )}
      <details className="group/role">
        <summary className="block cursor-pointer list-none [&::-webkit-details-marker]:hidden">
          <span className="flex flex-wrap items-baseline justify-between gap-x-4">
            <span className="text-sm font-medium text-zinc-200">
              {exp.role}
            </span>
            <span className="font-mono text-[11px] whitespace-nowrap text-zinc-600">
              {formatRange(exp.start, exp.end)}
            </span>
          </span>
          <span className="mt-1 block text-[13px] leading-relaxed text-zinc-400">
            {exp.summary}
          </span>
          <span className="mt-1.5 block font-mono text-[11px] text-zinc-700 transition-colors group-hover/role:text-zinc-400">
            <span className="group-open/role:hidden">+ details</span>
            <span className="hidden group-open/role:inline">− less</span>
          </span>
        </summary>
        <ul className="mt-3 list-disc space-y-1.5 pl-4 text-[13px] leading-relaxed text-zinc-400 marker:text-zinc-700">
          {exp.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
        <p className="mt-3 font-mono text-[11px] text-zinc-600">
          {exp.tech.join(" · ")}
        </p>
        {exp.images?.length ? <Gallery images={exp.images} /> : null}
      </details>
    </li>
  );
}

function ProjectGrid({ items }: { items: Project[] }) {
  return (
    <div className="grid gap-x-8 sm:grid-cols-2">
      {items.map((p) => (
        <ProjectCard key={p.name} project={p} />
      ))}
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="border-b border-zinc-900/70 py-4">
      <div className="flex items-baseline justify-between gap-3">
        <h3 className="text-sm font-medium text-zinc-50">{project.name}</h3>
        <div className="flex gap-3 font-mono text-[11px] text-zinc-600">
          {project.live && (
            <ProjectLink href={project.live}>
              {siteLabel(project.live)} ↗
            </ProjectLink>
          )}
          {project.github && (
            <ProjectLink href={project.github}>code ↗</ProjectLink>
          )}
        </div>
      </div>
      <p className="mt-1 text-[13px] leading-relaxed text-zinc-400">
        {project.description}
      </p>
      {project.images?.length ? <Gallery images={project.images} /> : null}
    </div>
  );
}

function ProjectLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="whitespace-nowrap transition-colors hover:text-green-400"
    >
      {children}
    </a>
  );
}

function Gallery({ images }: { images: WorkImage[] }) {
  return (
    <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
      {images.map((img) => (
        <div
          key={img.src}
          className="relative aspect-[4/3] overflow-hidden rounded-md border border-zinc-800"
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            sizes="(max-width: 640px) 50vw, 200px"
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}
