"use client";

import { useState } from "react";
import { EventAfter } from "@/components/EventAfter";
import { events } from "@/data/events";
import { dayPlaces, formatTime, groupByStartDay, WEEK_START_MS } from "@/lib/format";

export function DayList() {
  const days = groupByStartDay(
    events.filter((event) => Date.parse(event.start) >= WEEK_START_MS),
  );
  const [active, setActive] = useState(days[0]?.key ?? "");
  const [flash, setFlash] = useState<string | null>(null);

  function goToDay(key: string) {
    setActive(key);
    setFlash(null);
    const target = document.getElementById(`day-${key}`);
    if (!target) return;
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => setFlash(key));
    });
  }

  return (
    <section id="week" className="bg-cream px-5 pb-10 pt-10">
      <div className="mx-auto max-w-3xl">
        <div className="sticky top-0 z-20 -mx-5 bg-cream/90 px-5 py-3 backdrop-blur-md">
          <div className="flex flex-wrap gap-2">
            {days.map((day) => (
              <button
                key={day.key}
                type="button"
                onClick={() => goToDay(day.key)}
                className={`chip cursor-pointer rounded-full px-3.5 py-1.5 text-sm font-medium ${
                  active === day.key
                    ? "bg-flare text-white"
                    : "border border-line bg-card text-ink hover:border-flare hover:text-flare"
                }`}
              >
                {day.pill}
              </button>
            ))}
          </div>
        </div>

        <p className="mt-5 text-sm text-mute">
          All times are shown in Indian Standard Time
          <span className="font-deva ml-2">· भारतीय प्रमाण वेळ</span>
        </p>

        <div className="mt-10 space-y-14">
          {days.map((day, index) => (
            <div
              key={day.key}
              id={`day-${day.key}`}
              className={`scroll-mt-20 rounded-2xl px-3 py-3 -mx-3 ${
                flash === day.key ? "day-focus" : ""
              }`}
            >
              <div
                className="day-block"
                style={{ animationDelay: `${0.12 + index * 0.06}s` }}
              >
                <p className="text-[11px] tracking-[0.22em] text-mute uppercase">
                  Day {index + 1}
                  {dayPlaces[day.key] ? ` · ${dayPlaces[day.key]}` : ""}
                </p>
                <h2 className="mt-1 font-display text-3xl italic text-flare sm:text-4xl">
                  {day.label}
                </h2>
                <ul className="mt-5 divide-y divide-line border-y border-line">
                  {day.events.map((event) => (
                    <li key={event.slug}>
                      <div className="event-row flex items-center justify-between gap-4 py-4">
                        <span className="flex min-w-0 flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-8">
                          <time className="w-24 shrink-0 text-sm text-mute">
                            {formatTime(event.start)}
                          </time>
                          <span className="min-w-0">
                            <span className="block font-medium leading-snug text-ink">
                              {event.title}
                            </span>
                            <span className="mt-0.5 block text-xs text-mute">
                              {event.venue} · {event.neighborhood}
                            </span>
                          </span>
                        </span>
                        <a
                          href={event.registrationUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="chip shrink-0 cursor-pointer rounded-full border border-flare px-3.5 py-1.5 text-sm text-flare hover:bg-flare hover:text-white"
                        >
                          View Event
                        </a>
                      </div>
                      {event.featured ? (
                        <EventAfter neighborhood={event.neighborhood} />
                      ) : null}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
