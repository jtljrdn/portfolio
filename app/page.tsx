import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Reveal from "@/components/reveal";
import {
  education,
  experiences,
  projects,
  type Experience,
  type Project,
  type WorkImage,
} from "@/lib/content";

config.autoAddCss = false;

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
    else groups.push({ company: exp.company, location: exp.location, roles: [exp] });
  }
  return groups;
}

const experienceGroups = groupByCompany(experiences);

const socials = [
  {
    href: "https://www.linkedin.com/in/jordan-lee-2bb996296/",
    label: "LinkedIn",
    icon: faLinkedinIn,
  },
  { href: "https://www.github.com/jtljrdn", label: "GitHub", icon: faGithub },
  { href: "/Lee-Jordan-Resume.pdf", label: "Resume", icon: faFile },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />

      <main className="mx-auto max-w-2xl px-6 pb-28">
        <Section title="Experience">
          {experienceGroups.map((group) => (
            <CompanyBlock key={group.company} group={group} />
          ))}
        </Section>

        <Section title="Projects">
          {projects.map((project) => (
            <ProjectBlock key={project.name} project={project} />
          ))}
        </Section>

        <Section title="Education">
          {education.map((ed) => (
            <Reveal key={ed.degree} className="py-7 first:pt-0">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <div>
                  <h3 className="text-lg font-medium">{ed.degree}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {ed.school}
                    {ed.location ? ` · ${ed.location}` : ""}
                  </p>
                </div>
                <p className="text-sm whitespace-nowrap text-muted-foreground">
                  {ed.start} — {ed.end}
                </p>
              </div>
            </Reveal>
          ))}
        </Section>
      </main>

      <footer className="mx-auto flex max-w-2xl items-center justify-center gap-8 px-6 pb-16 text-sm text-muted-foreground">
        <Link href="/" className="transition-colors hover:text-foreground">
          Me
        </Link>
        <Link href="/blog" className="transition-colors hover:text-foreground">
          Blog
        </Link>
      </footer>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <div>
        <h1 className="font-serif text-6xl tracking-tight sm:text-7xl">
          Jordan Lee
        </h1>
        <p className="mt-4 text-muted-foreground">
          Software Engineer · Full Stack Developer
        </p>
        <div className="mt-7 flex items-center justify-center gap-6 text-muted-foreground">
          {socials.map((s) => (
            <Link
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              title={s.label}
              aria-label={s.label}
              className="transition-colors hover:text-foreground"
            >
              <FontAwesomeIcon icon={s.icon} className="h-5 w-5" />
            </Link>
          ))}
        </div>
      </div>

      <ChevronDown
        aria-hidden
        className="animate-nudge absolute bottom-10 h-5 w-5 text-muted-foreground/50"
      />
    </section>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-20 first:mt-0">
      <Reveal>
        <h2 className="border-b border-border pb-3 text-sm font-medium text-muted-foreground">
          {title}
        </h2>
      </Reveal>
      <div className="mt-2 divide-y divide-border/70">{children}</div>
    </section>
  );
}

function TechLine({ tech }: { tech: string[] }) {
  return (
    <p className="mt-4 text-sm text-muted-foreground">{tech.join(" · ")}</p>
  );
}

function Gallery({ images }: { images: WorkImage[] }) {
  return (
    <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
      {images.map((img) => (
        <div
          key={img.src}
          className="relative aspect-[4/3] overflow-hidden rounded-md border border-border"
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

function ExternalLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-sm text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground"
    >
      {children}
    </Link>
  );
}

function RoleBody({ exp }: { exp: Experience }) {
  return (
    <>
      <p className="mt-4 leading-relaxed">{exp.summary}</p>
      <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-border">
        {exp.highlights.map((h) => (
          <li key={h}>{h}</li>
        ))}
      </ul>
      <TechLine tech={exp.tech} />
      {exp.images?.length ? <Gallery images={exp.images} /> : null}
    </>
  );
}

function CompanyBlock({ group }: { group: CompanyGroup }) {
  if (group.roles.length === 1) {
    const exp = group.roles[0];
    return (
      <Reveal className="py-7 first:pt-0">
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <div>
            <h3 className="text-lg font-medium">{exp.role}</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              {exp.company} · {exp.location}
            </p>
          </div>
          <p className="text-sm whitespace-nowrap text-muted-foreground">
            {exp.start} — {exp.end}
          </p>
        </div>
        <RoleBody exp={exp} />
      </Reveal>
    );
  }

  const latest = group.roles[0];
  const earliest = group.roles[group.roles.length - 1];

  return (
    <Reveal className="py-7 first:pt-0">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="text-lg font-medium">{group.company}</h3>
        <p className="text-sm whitespace-nowrap text-muted-foreground">
          {earliest.start} — {latest.end}
        </p>
      </div>
      <p className="mt-1 text-sm text-muted-foreground">{group.location}</p>

      <div className="relative mt-6 space-y-7 pl-6">
        <span
          aria-hidden
          className="absolute bottom-2 left-[3px] top-2 w-px bg-border"
        />
        {group.roles.map((role) => (
          <div key={role.role + role.start} className="relative">
            <span
              aria-hidden
              className="absolute -left-6 top-[7px] h-[7px] w-[7px] rounded-full border border-border bg-background"
            />
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h4 className="font-medium">{role.role}</h4>
              <p className="text-sm whitespace-nowrap text-muted-foreground">
                {role.start} — {role.end}
              </p>
            </div>
            <RoleBody exp={role} />
          </div>
        ))}
      </div>
    </Reveal>
  );
}

function ProjectBlock({ project }: { project: Project }) {
  return (
    <Reveal className="py-7 first:pt-0">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="text-lg font-medium">{project.name}</h3>
        <div className="flex items-center gap-4">
          {project.live && <ExternalLink href={project.live}>Visit</ExternalLink>}
          {project.github && (
            <ExternalLink href={project.github}>Code</ExternalLink>
          )}
        </div>
      </div>

      <p className="mt-2 leading-relaxed text-muted-foreground">
        {project.description}
      </p>

      {project.tech?.length ? <TechLine tech={project.tech} /> : null}
      {project.images?.length ? <Gallery images={project.images} /> : null}
    </Reveal>
  );
}
