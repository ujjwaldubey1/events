import { events } from "@/data/events";
import { readAddedEvents, writeAddedEvent } from "@/lib/addedEvents";
import { slugFromTitle } from "@/lib/eventSlug";
import type { CityEvent } from "@/lib/types";
import { NextResponse } from "next/server";

function uniqueSlug(title: string, taken: Set<string>) {
  const base = slugFromTitle(title) || "mumbai-event";
  if (!taken.has(base)) return base;
  let n = 2;
  while (taken.has(`${base}-${n}`)) n += 1;
  return `${base}-${n}`;
}

export async function GET() {
  const added = await readAddedEvents();
  return NextResponse.json({ events: added });
}

export async function POST(request: Request) {
  try {
    const raw = await request.text();
    const body = (raw ? JSON.parse(raw) : {}) as Partial<CityEvent>;
    const title = String(body.title ?? "").trim();
    const event: CityEvent = {
      slug: uniqueSlug(title, new Set()),
      title,
      description: String(body.description ?? "").trim(),
      category:
        body.category === "ai" || body.category === "crypto" || body.category === "mixed"
          ? body.category
          : "blockchain",
      types: Array.isArray(body.types) && body.types.length ? body.types : ["meetup"],
      start: String(body.start ?? ""),
      end: String(body.end ?? body.start ?? ""),
      venue: String(body.venue ?? "").trim(),
      neighborhood: String(body.neighborhood ?? "Mumbai").trim(),
      hosts:
        Array.isArray(body.hosts) && body.hosts.length
          ? body.hosts.map(String)
          : ["Independent"],
      registrationUrl: String(body.registrationUrl ?? "").trim(),
      cost: body.cost === "paid" || body.cost === "approval" ? body.cost : "free",
    };

    if (!event.title || !event.start || !event.venue || !event.registrationUrl) {
      return NextResponse.json({ error: "Missing event details." }, { status: 400 });
    }

    const existing = await readAddedEvents();
    const already =
      events.some((item) => item.title === event.title && item.start === event.start) ||
      existing.some((item) => item.title === event.title && item.start === event.start);

    if (already) {
      const listed = existing.find(
        (item) => item.title === event.title && item.start === event.start,
      );
      return NextResponse.json({
        event: listed ?? event,
        events: existing,
        already: true,
      });
    }

    const taken = new Set([
      ...events.map((item) => item.slug),
      ...existing.map((item) => item.slug),
    ]);
    event.slug = uniqueSlug(event.title, taken);

    const added = await writeAddedEvent(event);
    return NextResponse.json({ event, events: added });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Could not add that event.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
