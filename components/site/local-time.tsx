"use client";

import { useSyncExternalStore } from "react";

const formatter = new Intl.DateTimeFormat("en-US", {
  timeZone: "America/Chicago",
  hour: "numeric",
  minute: "2-digit",
});

function subscribe(onChange: () => void) {
  const id = setInterval(onChange, 15_000);
  return () => clearInterval(id);
}

function getSnapshot(): string {
  return formatter.format(new Date()).toLowerCase();
}

function getServerSnapshot(): null {
  return null;
}

export default function LocalTime() {
  const time = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  return <span>{time ? `${time} local` : " "}</span>;
}
