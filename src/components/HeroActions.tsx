"use client";

import { events } from "@/data/events";
import { WEEK_START_MS } from "@/lib/format";

function icsStamp(iso: string) {
  return new Date(iso)
    .toISOString()
    .replace(/[-:]/g, "")
    .replace(/\.\d{3}Z$/, "Z");
}

function weekIcs() {
  const week = events.filter((event) => Date.parse(event.start) >= WEEK_START_MS);
  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Mumbai Circuit//EN",
    "CALSCALE:GREGORIAN",
  ];
  for (const event of week) {
    lines.push(
      "BEGIN:VEVENT",
      `UID:${event.slug}@mumbaicircuit`,
      `DTSTAMP:${icsStamp(event.start)}`,
      `DTSTART:${icsStamp(event.start)}`,
      `DTEND:${icsStamp(event.end)}`,
      `SUMMARY:${event.title.replace(/,/g, "\\,")}`,
      `LOCATION:${`${event.venue}, ${event.neighborhood}, Mumbai`.replace(/,/g, "\\,")}`,
      `URL:${event.registrationUrl}`,
      "END:VEVENT",
    );
  }
  lines.push("END:VCALENDAR");
  return lines.join("\r\n");
}

export function HeroActions() {
  function addToCalendar() {
    const blob = new Blob([weekIcs()], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "mumbai-circuit-november-2026.ics";
    link.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="mt-8 flex flex-wrap gap-3">
      <a href="#week" className="gold-btn cursor-pointer rounded-full px-5 py-2.5 text-sm font-semibold text-ink">
        Browse the week
      </a>
      <button
        type="button"
        onClick={addToCalendar}
        className="chip cursor-pointer rounded-full border border-white px-5 py-2.5 text-sm font-medium text-white hover:bg-white hover:text-flare"
      >
        Add to calendar
      </button>
    </div>
  );
}
