import type { CityEvent } from "@/lib/types";

const KEY = "circuit-pending-events";
export const PENDING_EVENT = "circuit-pending";

export function readPendingEvents(): CityEvent[] {
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

export function addPendingEvent(event: CityEvent) {
  const next = [
    ...readPendingEvents().filter((item) => item.slug !== event.slug),
    event,
  ];
  window.localStorage.setItem(KEY, JSON.stringify(next));
  window.dispatchEvent(new Event(PENDING_EVENT));
}

export function slugFromTitle(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 60);
}
