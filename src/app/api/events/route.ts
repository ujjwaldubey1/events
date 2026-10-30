import { events } from "@/data/events";
import { readAddedEvents, writeAddedEvent } from "@/lib/addedEvents";
import { slugFromTitle } from "@/lib/eventSlug";
import type { CityEvent } from "@/lib/types";
import { NextResponse } from "next/server";

export async function GET() {
  const added = await readAddedEvents();
  return NextResponse.json({ events: added });
}

export async function POST(request: Request) {
  const body = (await request.json()) as Partial<CityEvent>;
  const event: CityEvent = {
    slug: slugFromTitle(String(body.title ?? "")) || "mumbai-event",
    title: String(body.title ?? "").trim(),
    description: String(body.description ?? "").trim(),
    category: body.category === "ai" || body.category === "crypto" || body.category === "mixed"
      ? body.category
      : "blockchain",
    types: Array.isArray(body.types) && body.types.length ? body.types : ["meetup"],
    start: String(body.start ?? ""),
    end: String(body.end ?? ""),
    venue: String(body.venue ?? "").trim(),
    neighborhood: String(body.neighborhood ?? "Mumbai").trim(),
    hosts: Array.isArray(body.hosts) && body.hosts.length ? body.hosts.map(String) : ["Independent"],
    registrationUrl: String(body.registrationUrl ?? "").trim(),
    cost: body.cost === "paid" || body.cost === "approval" ? body.cost : "free",
  };

  if (!event.slug || !event.title || !event.start || !event.venue || !event.registrationUrl) {
    return NextResponse.json({ error: "Missing event details." }, { status: 400 });
  }

  const existing = await readAddedEvents();
  const taken = new Set([
    ...events.map((item) => item.slug),
    ...existing.map((item) => item.slug),
  ]);
  if (
    events.some((item) => item.title === event.title && item.start === event.start) ||
    existing.some((item) => item.title === event.title && item.start === event.start)
  ) {
    return NextResponse.json({ error: "That event is already on Circuit." }, { status: 409 });
  }
  let n = 2;
  while (taken.has(event.slug)) {
    event.slug = `${slugFromTitle(event.title) || "mumbai-event"}-${n}`;
    n += 1;
  }

  const added = await writeAddedEvent(event);
  return NextResponse.json({ event, events: added });
}
