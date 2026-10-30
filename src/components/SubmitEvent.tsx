"use client";

import { useState, type FormEvent } from "react";
import { events } from "@/data/events";
import { addPendingEvent, slugFromTitle } from "@/lib/pendingEvents";
import type { Cost, EventType } from "@/lib/types";

const neighborhoods = [
  "BKC",
  "Vile Parle",
  "Andheri",
  "Bandra",
  "Colaba",
  "Mumbai",
];

const ISSUE_URL = "https://github.com/ujjwaldubey1/events/issues/new";

function toIso(date: string, time: string) {
  return `${date}T${time}:00+05:30`;
}

export function SubmitEvent() {
  const [sent, setSent] = useState(false);
  const [title, setTitle] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const eventTitle = String(form.get("title") ?? "").trim();
    const hosts = String(form.get("hosts") ?? "")
      .split(",")
      .map((host) => host.trim())
      .filter(Boolean);
    const date = String(form.get("date") ?? "");
    const startTime = String(form.get("start") ?? "");
    const endTime = String(form.get("end") ?? "");
    const venue = String(form.get("venue") ?? "").trim();
    const neighborhood = String(form.get("neighborhood") ?? "Mumbai");
    const registrationUrl = String(form.get("link") ?? "").trim();
    const description = String(form.get("description") ?? "").trim();
    const cost = (String(form.get("cost") ?? "free") as Cost) || "free";
    const type = (String(form.get("type") ?? "meetup") as EventType) || "meetup";

    if (!eventTitle || !date || !startTime || !venue || !registrationUrl) return;

    const slugBase = slugFromTitle(eventTitle) || "mumbai-event";
    const taken = new Set([
      ...events.map((item) => item.slug),
    ]);
    let slug = slugBase;
    let n = 2;
    while (taken.has(slug)) {
      slug = `${slugBase}-${n}`;
      n += 1;
    }

    const listing = {
      slug,
      title: eventTitle,
      description:
        description ||
        `${eventTitle}${hosts.length ? ` by ${hosts.join(", ")}` : ""} in ${neighborhood}.`,
      category: "blockchain" as const,
      types: [type],
      start: toIso(date, startTime),
      end: toIso(date, endTime || startTime),
      venue,
      neighborhood,
      hosts: hosts.length ? hosts : ["Independent"],
      registrationUrl,
      cost,
    };

    addPendingEvent(listing);
    setTitle(eventTitle);
    setSent(true);

    const body = [
      `Title: ${listing.title}`,
      `Hosts: ${listing.hosts.join(", ")}`,
      `When: ${listing.start} → ${listing.end}`,
      `Where: ${listing.venue}, ${listing.neighborhood}`,
      `Link: ${listing.registrationUrl}`,
      `Cost: ${listing.cost}`,
      `Type: ${type}`,
      "",
      listing.description,
    ].join("\n");

    window.open(
      `${ISSUE_URL}?title=${encodeURIComponent(`List event: ${listing.title}`)}&body=${encodeURIComponent(body)}`,
      "_blank",
      "noopener,noreferrer",
    );

    event.currentTarget.reset();
  }

  return (
    <section id="list-event" className="border-t border-line bg-cream px-5 py-16">
      <div className="mx-auto max-w-3xl">
        <p className="text-xs tracking-[0.28em] text-mute uppercase">
          Running a room
          <span className="font-deva ml-2 normal-case tracking-normal">· कार्यक्रम जोडा</span>
        </p>
        <h2 className="mt-3 font-display text-4xl italic tracking-tight text-ink sm:text-5xl">
          Add your event
        </h2>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-mute">
          Mixer, meetup, side room, or sundowner this week in Mumbai. Send the
          time, place, and link. It shows on this page, and we get a request to
          list it for everyone.
        </p>

        {sent ? (
          <p className="mt-8 rounded-2xl border border-line bg-card px-5 py-4 text-sm leading-relaxed text-ink">
            <span className="font-medium">{title}</span> is on your list below.
            Finish the request tab so we can add it for everyone.
            <button
              type="button"
              className="ghost-link ml-2 text-flare"
              onClick={() => setSent(false)}
            >
              Add another
            </button>
          </p>
        ) : null}

        <form
          onSubmit={onSubmit}
          className="mt-8 grid gap-4 rounded-2xl border border-line bg-card px-5 py-6 sm:grid-cols-2"
        >
          <label className="sm:col-span-2">
            <span className="text-[11px] tracking-[0.18em] text-mute uppercase">
              Event name
            </span>
            <input
              name="title"
              required
              placeholder="Devcon Builders Evening"
              className="field mt-1.5"
            />
          </label>
          <label className="sm:col-span-2">
            <span className="text-[11px] tracking-[0.18em] text-mute uppercase">
              Hosts
            </span>
            <input
              name="hosts"
              placeholder="Canton Foundation, Ledger, OpenZeppelin"
              className="field mt-1.5"
            />
          </label>
          <label>
            <span className="text-[11px] tracking-[0.18em] text-mute uppercase">
              Date
            </span>
            <input
              name="date"
              type="date"
              required
              min="2026-11-01"
              max="2026-11-08"
              defaultValue="2026-11-05"
              className="field mt-1.5"
            />
          </label>
          <label>
            <span className="text-[11px] tracking-[0.18em] text-mute uppercase">
              Neighbourhood
            </span>
            <select name="neighborhood" defaultValue="BKC" className="field mt-1.5">
              {neighborhoods.map((area) => (
                <option key={area} value={area}>
                  {area}
                </option>
              ))}
            </select>
          </label>
          <label>
            <span className="text-[11px] tracking-[0.18em] text-mute uppercase">
              Starts
            </span>
            <input name="start" type="time" required defaultValue="16:00" className="field mt-1.5" />
          </label>
          <label>
            <span className="text-[11px] tracking-[0.18em] text-mute uppercase">
              Ends
            </span>
            <input name="end" type="time" defaultValue="19:00" className="field mt-1.5" />
          </label>
          <label>
            <span className="text-[11px] tracking-[0.18em] text-mute uppercase">
              Venue
            </span>
            <input name="venue" required placeholder="Bandra Kurla Complex" className="field mt-1.5" />
          </label>
          <label>
            <span className="text-[11px] tracking-[0.18em] text-mute uppercase">
              Kind
            </span>
            <select name="type" defaultValue="mixer" className="field mt-1.5">
              <option value="mixer">Mixer</option>
              <option value="meetup">Meetup</option>
              <option value="conference">Conference</option>
              <option value="workshop">Workshop</option>
              <option value="hackathon">Hackathon</option>
              <option value="summit">Summit</option>
            </select>
          </label>
          <label className="sm:col-span-2">
            <span className="text-[11px] tracking-[0.18em] text-mute uppercase">
              Registration link
            </span>
            <input
              name="link"
              type="url"
              required
              placeholder="https://luma.com/…"
              className="field mt-1.5"
            />
          </label>
          <label>
            <span className="text-[11px] tracking-[0.18em] text-mute uppercase">
              Entry
            </span>
            <select name="cost" defaultValue="approval" className="field mt-1.5">
              <option value="free">Free</option>
              <option value="paid">Paid</option>
              <option value="approval">Invite / approval</option>
            </select>
          </label>
          <label className="sm:col-span-2">
            <span className="text-[11px] tracking-[0.18em] text-mute uppercase">
              What it is
            </span>
            <textarea
              name="description"
              rows={3}
              placeholder="Invite-only sundowner. Food, drinks, builders."
              className="field mt-1.5 min-h-[5.5rem] resize-y"
            />
          </label>
          <div className="sm:col-span-2">
            <button
              type="submit"
              className="gold-btn cursor-pointer rounded-full px-5 py-2.5 text-sm font-semibold text-ink"
            >
              Add to Circuit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
