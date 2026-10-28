"use client";

import { useEffect, useState } from "react";
import NavItem from "@/components/site/nav-item";
import type { NavSection } from "@/lib/site";

export default function SectionNav({ sections }: { sections: NavSection[] }) {
  const [active, setActive] = useState(sections[0]?.id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((e) => e.isIntersecting);
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-25% 0px -70% 0px" },
    );
    for (const { id } of sections) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [sections]);

  return (
    <ul>
      {sections.map((s) => (
        <NavItem
          key={s.id}
          href={`#${s.id}`}
          label={s.label}
          count={s.count}
          active={active === s.id}
        />
      ))}
    </ul>
  );
}
