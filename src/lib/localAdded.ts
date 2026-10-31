import type { CityEvent } from "@/lib/types";

const KEY = "circuit-added-events";

export function readLocalAdded(): CityEvent[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as CityEvent[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function saveLocalAdded(event: CityEvent) {
  const next = [
    ...readLocalAdded().filter((item) => item.slug !== event.slug),
    event,
  ];
  window.localStorage.setItem(KEY, JSON.stringify(next));
  return next;
}

export function mergeAdded(server: CityEvent[], local: CityEvent[]) {
  const bySlug = new Map<string, CityEvent>();
  for (const event of [...server, ...local]) {
    bySlug.set(event.slug, event);
  }
  return [...bySlug.values()];
}
