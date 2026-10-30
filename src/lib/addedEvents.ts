import { readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import type { CityEvent } from "@/lib/types";

const FILE = join(process.cwd(), "src/data/added-events.json");

export async function readAddedEvents(): Promise<CityEvent[]> {
  try {
    const raw = await readFile(FILE, "utf8");
    const parsed = JSON.parse(raw) as CityEvent[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export async function writeAddedEvent(event: CityEvent): Promise<CityEvent[]> {
  const current = await readAddedEvents();
  const next = [...current.filter((item) => item.slug !== event.slug), event];
  await writeFile(FILE, `${JSON.stringify(next, null, 2)}\n`, "utf8");
  return next;
}
