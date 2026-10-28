import Link from "next/link";
import { cn } from "@/lib/utils";

export default function NavItem({
  href,
  label,
  count,
  active,
}: {
  href: string;
  label: string;
  count?: number;
  active: boolean;
}) {
  return (
    <li>
      <Link
        href={href}
        aria-current={active ? "location" : undefined}
        className={cn(
          "relative flex justify-between gap-2 py-1 transition-colors hover:text-zinc-200",
          active ? "text-zinc-50" : "text-zinc-500",
        )}
      >
        {active && (
          <span
            aria-hidden
            className="absolute top-1/2 -left-3 size-1 -translate-y-1/2 rounded-full bg-green-400"
          />
        )}
        <span className="truncate">{label}</span>
        {count !== undefined && (
          <span className="text-zinc-700">{count}</span>
        )}
      </Link>
    </li>
  );
}
