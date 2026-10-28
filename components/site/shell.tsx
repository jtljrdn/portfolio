import { Fragment } from "react";
import Link from "next/link";
import CommandMenu from "@/components/site/command-menu";
import LocalTime from "@/components/site/local-time";
import { commandItems, socials } from "@/lib/site";

export interface Crumb {
  label: string;
  href: string;
}

export function NavHeading({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-6 mb-1.5 text-[10px] tracking-[0.08em] text-zinc-700">
      {children}
    </p>
  );
}

export default function SiteShell({
  path,
  nav,
  children,
}: {
  path: Crumb[];
  nav: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="theme-terminal min-h-screen bg-zinc-950 font-ui text-zinc-300">
      <div className="mx-auto max-w-5xl md:grid md:grid-cols-[180px_minmax(0,1fr)]">
        <Sidebar nav={nav} />

        <main className="min-w-0 px-6 pb-28 md:px-10">
          <div className="flex items-center justify-between gap-4 border-b border-zinc-900 py-4 font-mono text-xs text-zinc-600">
            <span className="truncate">
              ~
              {path.map((crumb, i) => (
                <Fragment key={crumb.href}>
                  /
                  <Link
                    href={crumb.href}
                    className={
                      i === path.length - 1
                        ? "text-zinc-400 hover:text-zinc-200"
                        : "hover:text-zinc-300"
                    }
                  >
                    {crumb.label}
                  </Link>
                </Fragment>
              ))}
            </span>
            <CommandMenu items={commandItems} />
          </div>

          {children}
        </main>
      </div>
    </div>
  );
}

function Sidebar({ nav }: { nav: React.ReactNode }) {
  return (
    <aside className="flex flex-col px-6 pt-8 font-mono text-xs md:sticky md:top-0 md:h-screen md:overflow-y-auto md:border-r md:border-zinc-900 md:px-5 md:py-6">
      <Link href="/" className="text-zinc-50">
        jordan lee
      </Link>
      <p className="mt-0.5 text-[11px] text-zinc-600">
        full stack software engineer
      </p>

      <nav aria-label="Site" className="hidden md:block">
        {nav}
      </nav>

      <div className="hidden md:block">
        <NavHeading>SOCIALS</NavHeading>
      </div>
      <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1 md:mt-0 md:block">
        {socials.map((s) => (
          <li key={s.label}>
            <a
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-between py-1 text-zinc-500 transition-colors hover:text-zinc-200"
            >
              <span>{s.label}</span>
              <span className="ml-1.5 text-zinc-700">{s.hint}</span>
            </a>
          </li>
        ))}
      </ul>

      <div className="mt-auto hidden pt-6 text-[11px] leading-relaxed text-zinc-700 md:block">
        <p>auburn, al</p>
        <LocalTime />
      </div>
    </aside>
  );
}
