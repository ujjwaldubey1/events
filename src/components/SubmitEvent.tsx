"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { ADDED_EVENT, slugFromTitle } from "@/lib/eventSlug";
import { saveLocalAdded } from "@/lib/localAdded";
import type { CityEvent, Cost, EventType } from "@/lib/types";

const neighborhoods = [
  "BKC",
  "Vile Parle",
  "Andheri",
  "Bandra",
  "Colaba",
  "Mumbai",
];

const kinds: { value: EventType; label: string }[] = [
  { value: "mixer", label: "Mixer" },
  { value: "meetup", label: "Meetup" },
  { value: "conference", label: "Conference" },
  { value: "workshop", label: "Workshop" },
  { value: "hackathon", label: "Hackathon" },
  { value: "summit", label: "Summit" },
];

const entries: { value: Cost; label: string }[] = [
  { value: "free", label: "Free" },
  { value: "paid", label: "Paid" },
  { value: "approval", label: "Invite only" },
];

function toIso(date: string, time: string) {
  const raw = time.trim();
  const match = raw.match(/^(\d{1,2}):(\d{2})(?::\d{2})?\s*(AM|PM)?$/i);
  if (!match) return `${date}T${raw}+05:30`;
  let hour = Number(match[1]);
  const minute = match[2];
  const meridian = match[3]?.toUpperCase();
  if (meridian === "PM" && hour < 12) hour += 12;
  if (meridian === "AM" && hour === 12) hour = 0;
  return `${date}T${String(hour).padStart(2, "0")}:${minute}:00+05:30`;
}

function Field({
  label,
  hint,
  className = "",
  children,
}: {
  label: string;
  hint?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <label className={`flex flex-col gap-2 ${className}`}>
      <span className="flex items-baseline justify-between gap-3">
        <span className="text-[11px] tracking-[0.18em] text-mute uppercase">{label}</span>
        {hint ? <span className="text-[11px] text-mute/80">{hint}</span> : null}
      </span>
      {children}
    </label>
  );
}

function Chips<T extends string>({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: T;
  options: { value: T; label: string }[];
  onChange: (value: T) => void;
}) {
  return (
    <fieldset className="min-w-0">
      <legend className="text-[11px] tracking-[0.18em] text-mute uppercase">{label}</legend>
      <div className="mt-2 flex flex-wrap gap-2">
        {options.map((option) => (
          <button
            key={option.value}
            type="button"
            onClick={() => onChange(option.value)}
            className={`chip cursor-pointer rounded-full px-3.5 py-1.5 text-sm font-medium ${
              option.value === value
                ? "bg-flare text-white"
                : "border border-line bg-cream text-ink hover:border-flare hover:text-flare"
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>
    </fieldset>
  );
}

export function SubmitEvent() {
  const [sent, setSent] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [title, setTitle] = useState("");
  const [neighborhood, setNeighborhood] = useState("BKC");
  const [type, setType] = useState<EventType>("mixer");
  const [cost, setCost] = useState<Cost>("approval");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const eventTitle = String(data.get("title") ?? "").trim();
    const hosts = String(data.get("hosts") ?? "")
      .split(",")
      .map((host) => host.trim())
      .filter(Boolean);
    const date = String(data.get("date") ?? "");
    const startTime = String(data.get("start") ?? "");
    const endTime = String(data.get("end") ?? "");
    const venue = String(data.get("venue") ?? "").trim();
    const registrationUrl = String(data.get("link") ?? "").trim();
    const description = String(data.get("description") ?? "").trim();

    if (!eventTitle || !date || !startTime || !venue || !registrationUrl) return;

    setSaving(true);
    setError("");

    const listing: CityEvent = {
      slug: slugFromTitle(eventTitle) || "mumbai-event",
      title: eventTitle,
      description:
        description ||
        `${eventTitle}${hosts.length ? ` by ${hosts.join(", ")}` : ""} in ${neighborhood}.`,
      category: "blockchain",
      types: [type],
      start: toIso(date, startTime),
      end: toIso(date, endTime || startTime),
      venue,
      neighborhood,
      hosts: hosts.length ? hosts : ["Independent"],
      registrationUrl,
      cost,
    };

    saveLocalAdded(listing);

    try {
      await fetch("/api/events", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(listing),
      });
    } catch {
      // Live hosting cannot write files. The event is already on this browser's list.
    }

    window.dispatchEvent(new Event(ADDED_EVENT));
    setTitle(eventTitle);
    setSent(true);
    form.reset();
    setSaving(false);
  }

  return (
    <section id="list-event" className="border-t border-line bg-cream px-5 py-16">
      <div className="mx-auto max-w-5xl">
        <p className="text-xs tracking-[0.28em] text-mute uppercase">
          Running a room
          <span className="font-deva ml-2 normal-case tracking-normal">· कार्यक्रम जोडा</span>
        </p>
        <h2 className="mt-3 font-display text-4xl italic tracking-tight text-ink sm:text-5xl">
          Add your event
        </h2>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-mute">
          Mixer, meetup, side room, or sundowner this week in Mumbai. Send the
          time, place, and link. Add to Circuit puts it on the week list.
        </p>

        {sent ? (
          <div className="mt-8 flex flex-col gap-3 rounded-2xl border border-line bg-card px-5 py-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm leading-relaxed text-ink">
              <span className="font-medium">{title}</span> is on the week list.
            </p>
            <div className="flex flex-wrap gap-2">
              <a
                href="#week"
                className="chip rounded-full border border-flare px-3.5 py-1.5 text-sm text-flare hover:bg-flare hover:text-white"
              >
                See it in the week
              </a>
              <button
                type="button"
                className="chip rounded-full border border-line px-3.5 py-1.5 text-sm text-ink hover:border-flare hover:text-flare"
                onClick={() => setSent(false)}
              >
                Add another
              </button>
            </div>
          </div>
        ) : null}

        <form
          onSubmit={onSubmit}
          className="mt-8 overflow-hidden rounded-[1.6rem] border border-line bg-card"
        >
          <div className="border-b border-line bg-cream/70 px-5 py-4 sm:px-8">
            <p className="font-display text-xl italic text-flare">This week only</p>
            <p className="mt-1 text-sm text-mute">1–8 November 2026 · Mumbai · IST</p>
          </div>

          <div className="grid gap-6 px-5 py-7 sm:px-8 sm:py-8">
            <div className="grid gap-6 sm:grid-cols-2">
              <Field label="Event name" hint="Required">
                <input
                  name="title"
                  required
                  placeholder="Enter event name"
                  className="field"
                />
              </Field>
              <Field label="Hosts">
                <input
                  name="hosts"
                  placeholder="Enter hosts"
                  className="field"
                />
              </Field>
            </div>

            <div className="grid gap-6 sm:grid-cols-3">
              <Field label="Date" hint="1–8 Nov">
                <input
                  name="date"
                  type="date"
                  required
                  min="2026-11-01"
                  max="2026-11-08"
                  defaultValue="2026-11-03"
                  className="field"
                />
              </Field>
              <Field label="Starts">
                <input
                  name="start"
                  type="time"
                  required
                  defaultValue="11:30"
                  className="field"
                />
              </Field>
              <Field label="Ends">
                <input name="end" type="time" defaultValue="12:00" className="field" />
              </Field>
            </div>

            <Field label="Venue" hint="Required">
              <input
                name="venue"
                required
                placeholder="Enter venue"
                className="field"
              />
            </Field>

            <Chips
              label="Neighbourhood"
              value={neighborhood}
              options={neighborhoods.map((area) => ({ value: area, label: area }))}
              onChange={setNeighborhood}
            />
            <Chips label="Kind" value={type} options={kinds} onChange={setType} />
            <Chips label="Entry" value={cost} options={entries} onChange={setCost} />

            <Field label="Registration link" hint="Required">
              <input
                name="link"
                type="url"
                required
                placeholder="Enter registration link"
                className="field"
              />
            </Field>

            <Field label="What it is">
              <textarea
                name="description"
                rows={4}
                placeholder="Enter what this event is"
                className="field min-h-[7rem] resize-y"
              />
            </Field>
          </div>

          <div className="flex flex-col gap-3 border-t border-line bg-cream/60 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
            <p className={`text-sm ${error ? "text-flare" : "text-mute"}`}>
              {error || "Adds it to the week list straight away."}
            </p>
            <button
              type="submit"
              disabled={saving}
              className="gold-btn cursor-pointer rounded-full px-6 py-2.5 text-sm font-semibold text-ink disabled:opacity-60"
            >
              {saving ? "Adding…" : "Add to Circuit"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
