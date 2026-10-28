"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

export interface CommandItem {
  group: string;
  label: string;
  hint: string;
  href: string;
}

export default function CommandMenu({ items }: { items: CommandItem[] }) {
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);

  const q = query.trim().toLowerCase();
  const results = q
    ? items.filter((i) => `${i.label} ${i.group}`.toLowerCase().includes(q))
    : items;

  function changeOpen(next: boolean) {
    setOpen(next);
    if (!next) {
      setQuery("");
      setActive(0);
    }
  }

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key.toLowerCase() === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((o) => !o);
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  function select(item: CommandItem) {
    changeOpen(false);
    const target =
      item.href.startsWith("/#") && pathname === "/"
        ? document.getElementById(item.href.slice(2))
        : null;
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      history.replaceState(null, "", item.href);
    } else if (/^https?:|\.pdf$/.test(item.href)) {
      window.open(item.href, "_blank", "noopener,noreferrer");
    } else {
      router.push(item.href);
    }
  }

  function onInputKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      const step = e.key === "ArrowDown" ? 1 : -1;
      setActive((a) => (a + step + results.length) % Math.max(results.length, 1));
    } else if (e.key === "Enter" && results[active]) {
      e.preventDefault();
      select(results[active]);
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={() => changeOpen(true)}
        className="flex items-center gap-2 rounded-md border border-zinc-800 py-1 pr-1.5 pl-2.5 text-zinc-500 transition-colors hover:border-zinc-700 hover:text-zinc-300"
      >
        search
        <kbd className="rounded border border-zinc-800 bg-zinc-900 px-1.5 text-[10px] text-zinc-400">
          ⌘K
        </kbd>
      </button>

      <Dialog open={open} onOpenChange={changeOpen}>
        <DialogContent
          showCloseButton={false}
          className="top-[18%] translate-y-0 gap-0 overflow-hidden rounded-xl border-zinc-800 bg-[#141417] p-0 font-ui text-zinc-300 shadow-2xl shadow-black/60 sm:max-w-md"
        >
          <DialogTitle className="sr-only">Search</DialogTitle>
          <DialogDescription className="sr-only">
            Jump to a section, project, post, or link.
          </DialogDescription>
          <div className="flex items-center justify-between border-b border-zinc-800/80 px-4">
            <input
              autoFocus
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setActive(0);
              }}
              onKeyDown={onInputKeyDown}
              placeholder="Search or jump to…"
              aria-label="Search"
              className="h-11 flex-1 bg-transparent text-sm text-zinc-50 outline-none placeholder:text-zinc-600"
            />
            <span className="font-mono text-[11px] text-zinc-600">esc</span>
          </div>

          <ul className="max-h-80 overflow-y-auto py-1.5" role="listbox">
            {results.length === 0 && (
              <li className="px-4 py-6 text-center text-sm text-zinc-600">
                No results
              </li>
            )}
            {results.map((item, i) => (
              <li key={`${item.group}-${item.label}`} role="presentation">
                {item.group !== results[i - 1]?.group && (
                  <p className="px-4 pt-2.5 pb-1 font-mono text-[10px] tracking-[0.08em] text-zinc-600 uppercase">
                    {item.group}
                  </p>
                )}
                <button
                  type="button"
                  role="option"
                  aria-selected={i === active}
                  onMouseMove={() => setActive(i)}
                  onClick={() => select(item)}
                  className={cn(
                    "flex w-full items-center justify-between px-4 py-1.5 text-left text-[13px]",
                    i === active ? "bg-zinc-800/60 text-zinc-50" : "text-zinc-300",
                  )}
                >
                  <span>{item.label}</span>
                  <span className="font-mono text-[11px] text-zinc-600">
                    {item.hint}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </DialogContent>
      </Dialog>
    </>
  );
}
