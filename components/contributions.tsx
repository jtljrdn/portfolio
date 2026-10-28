const USER = "jtljrdn";

const LEVEL_CLASS = [
  "bg-zinc-900",
  "bg-contrib-1",
  "bg-contrib-2",
  "bg-contrib-3",
  "bg-contrib-4",
];

const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

interface Day {
  date: string;
  level: number;
  row: number;
  col: number;
  label: string;
}

function attr(tag: string, name: string): string | undefined {
  return new RegExp(`${name}="([^"]*)"`).exec(tag)?.[1];
}


async function getContributions(): Promise<{ days: Day[]; total: string } | null> {
  try {
    const res = await fetch(`https://github.com/users/${USER}/contributions`, {
      next: { revalidate: 86400 },
    });
    if (!res.ok) return null;
    const html = await res.text();

    const tips = new Map<string, string>();
    for (const [, id, text] of html.matchAll(
      /<tool-tip[^>]*for="([^"]+)"[^>]*>([^<]*)<\/tool-tip>/g,
    )) {
      tips.set(id, text.trim());
    }

    const days: Day[] = [];
    for (const [tag] of html.matchAll(/<td[^>]*ContributionCalendar-day[^>]*>/g)) {
      const date = attr(tag, "data-date");
      const id = attr(tag, "id");
      const pos = id && /-(\d+)-(\d+)$/.exec(id);
      if (!date || !pos) continue;
      days.push({
        date,
        level: Number(attr(tag, "data-level") ?? 0),
        row: Number(pos[1]),
        col: Number(pos[2]),
        label: tips.get(id) ?? date,
      });
    }
    if (!days.length) return null;

    const total = /([\d,]+)\s+contributions/.exec(html)?.[1] ?? "";
    return { days, total };
  } catch {
    return null;
  }
}

export default async function Contributions() {
  const data = await getContributions();
  if (!data) return null;

  const { days, total } = data;
  const weeks = Math.max(...days.map((d) => d.col)) + 1;

  const firstOfCol = new Map<number, string>();
  for (const d of days) if (!firstOfCol.has(d.col)) firstOfCol.set(d.col, d.date);

  const labels: { col: number; name: string }[] = [];
  for (let col = 0; col < weeks; col++) {
    const date = firstOfCol.get(col);
    if (!date) continue;
    const month = new Date(`${date}T00:00:00`).getMonth();
    if (labels[labels.length - 1]?.name !== MONTHS[month]) {
      labels.push({ col, name: MONTHS[month] });
    }
  }

  // Drop a leading partial month like GitHub does.
  if (labels.length > 1 && labels[1].col < 3) labels.shift();

  const cols = { gridTemplateColumns: `repeat(${weeks}, minmax(0, 1fr))` };

  return (
    <a
      href={`https://github.com/${USER}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${total} GitHub contributions in the last year`}
      className="group mt-8 block"
    >
      <div
        className="grid gap-[2px] font-mono text-[10px] text-zinc-600"
        style={cols}
        aria-hidden
      >
        {labels.map((m, i) => (
          <span
            key={m.col}
            style={{ gridColumnStart: m.col + 1 }}
            className={`pb-1.5 ${i % 2 ? "hidden sm:block" : ""}`}
          >
            {m.name}
          </span>
        ))}
      </div>

      <div className="grid gap-px sm:gap-[2px]" style={cols} aria-hidden>
        {days.map((d) => (
          <span
            key={d.date}
            title={d.label}
            style={{ gridRowStart: d.row + 1, gridColumnStart: d.col + 1 }}
            className={`aspect-square rounded-[2px] ${LEVEL_CLASS[d.level] ?? LEVEL_CLASS[0]}`}
          />
        ))}
      </div>

      <div className="mt-2.5 flex items-center justify-between font-mono text-[11px] text-zinc-500">
        <span className="transition-colors group-hover:text-zinc-300">
          {total} contributions in the last year ↗
        </span>
        <span className="hidden items-center gap-[3px] sm:flex" aria-hidden>
          <span className="mr-1">less</span>
          {LEVEL_CLASS.map((c) => (
            <span key={c} className={`size-2 rounded-[2px] ${c}`} />
          ))}
          <span className="ml-1">more</span>
        </span>
      </div>
    </a>
  );
}
