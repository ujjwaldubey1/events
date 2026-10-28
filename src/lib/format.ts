import type { Category, CityEvent, Cost, EventType } from "./types";

export const TIMEZONE = "Asia/Kolkata";

export const categoryLabels: Record<Category, string> = {
  ai: "AI",
  crypto: "Crypto",
  blockchain: "Blockchain",
  mixed: "AI × Crypto",
};

export const typeLabels: Record<EventType, string> = {
  conference: "Conference",
  meetup: "Meetup",
  hackathon: "Hackathon",
  workshop: "Workshop",
  mixer: "Mixer",
  summit: "Summit",
  residency: "Residency",
};

export const costLabels: Record<Cost, string> = {
  free: "Free",
  paid: "Paid",
  approval: "Approval",
};

const dayFmt = new Intl.DateTimeFormat("en-IN", {
  timeZone: TIMEZONE,
  weekday: "short",
  day: "2-digit",
  month: "short",
});

const monthDayFmt = new Intl.DateTimeFormat("en-IN", {
  timeZone: TIMEZONE,
  day: "2-digit",
  month: "short",
});

const weekdayFmt = new Intl.DateTimeFormat("en-IN", {
  timeZone: TIMEZONE,
  weekday: "short",
});

const timeFmt = new Intl.DateTimeFormat("en-IN", {
  timeZone: TIMEZONE,
  hour: "numeric",
  minute: "2-digit",
  hour12: true,
});

const longFmt = new Intl.DateTimeFormat("en-IN", {
  timeZone: TIMEZONE,
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
});

export function formatDay(iso: string) {
  return dayFmt.format(new Date(iso));
}

export function formatMonthDay(iso: string) {
  return monthDayFmt.format(new Date(iso));
}

export function formatWeekday(iso: string) {
  return weekdayFmt.format(new Date(iso));
}

export function formatTime(iso: string) {
  return timeFmt.format(new Date(iso));
}

export function formatLongDate(iso: string) {
  return longFmt.format(new Date(iso));
}

export function isSameDay(a: string, b: string) {
  return formatMonthDay(a) === formatMonthDay(b);
}

export function formatDateRange(event: CityEvent) {
  const start = formatDay(event.start);
  if (isSameDay(event.start, event.end)) {
    return `${start} · ${formatTime(event.start)} – ${formatTime(event.end)}`;
  }
  return `${start} – ${formatDay(event.end)}`;
}

export function formatTimeRange(event: CityEvent) {
  if (isSameDay(event.start, event.end)) {
    return `${formatTime(event.start)} – ${formatTime(event.end)} IST`;
  }
  return `${formatDay(event.start)}, ${formatTime(event.start)} – ${formatDay(event.end)}, ${formatTime(event.end)} IST`;
}

export function eventStatus(event: CityEvent, now = new Date()) {
  const start = new Date(event.start);
  const end = new Date(event.end);
  if (now > end) return "past" as const;
  if (now >= start && now <= end) return "live" as const;
  return "upcoming" as const;
}

export function isThisWeek(event: CityEvent, now = new Date()) {
  const weekEnd = new Date(now);
  weekEnd.setDate(now.getDate() + 7);
  const start = new Date(event.start);
  const end = new Date(event.end);
  return end >= now && start <= weekEnd;
}

export function compareEvents(a: CityEvent, b: CityEvent) {
  return new Date(a.start).getTime() - new Date(b.start).getTime();
}

export function formatBadge(event: CityEvent) {
  const start = new Date(event.start);
  const end = new Date(event.end);
  const day = new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    timeZone: TIMEZONE,
  });
  const month = new Intl.DateTimeFormat("en-GB", {
    month: "short",
    timeZone: TIMEZONE,
  });
  const startDay = day.format(start);
  const endDay = day.format(end);
  return {
    range: startDay === endDay ? startDay : `${startDay} – ${endDay}`,
    month: month.format(start).toUpperCase(),
  };
}

export function overlapsMonth(event: CityEvent, year: number, monthIndex: number) {
  const start = new Date(event.start);
  const end = new Date(event.end);
  const from = new Date(year, monthIndex, 1);
  const to = new Date(year, monthIndex + 1, 0, 23, 59, 59);
  return end >= from && start <= to;
}

const dayKeyFmt = new Intl.DateTimeFormat("en-CA", {
  timeZone: TIMEZONE,
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
});

const headingWeekdayFmt = new Intl.DateTimeFormat("en-GB", {
  timeZone: TIMEZONE,
  weekday: "long",
});

const headingDateFmt = new Intl.DateTimeFormat("en-GB", {
  timeZone: TIMEZONE,
  day: "numeric",
  month: "long",
});

export function dayKey(iso: string) {
  return dayKeyFmt.format(new Date(iso));
}

export function formatDayHeading(iso: string) {
  const weekday = headingWeekdayFmt.format(new Date(iso));
  const rest = headingDateFmt.format(new Date(iso));
  return `${weekday} (${rest})`;
}

export function groupByStartDay(items: CityEvent[]) {
  const map = new Map<string, CityEvent[]>();
  for (const event of [...items].sort(compareEvents)) {
    const key = dayKey(event.start);
    const list = map.get(key) ?? [];
    list.push(event);
    map.set(key, list);
  }
  return [...map.entries()].map(([, dayEvents]) => ({
    key: dayKey(dayEvents[0].start),
    label: formatDayHeading(dayEvents[0].start),
    pill: formatPill(dayEvents[0].start),
    events: dayEvents,
  }));
}

const pillWeekdayFmt = new Intl.DateTimeFormat("en-GB", {
  timeZone: TIMEZONE,
  weekday: "short",
});

const pillDayFmt = new Intl.DateTimeFormat("en-GB", {
  timeZone: TIMEZONE,
  day: "numeric",
});

export function formatPill(iso: string) {
  return `${pillWeekdayFmt.format(new Date(iso))} ${pillDayFmt.format(new Date(iso))}`;
}

export const dayPlaces: Record<string, string> = {
  "2026-11-01": "Gateway of India",
  "2026-11-02": "Marine Drive",
  "2026-11-03": "Bandra Worli Sea Link",
  "2026-11-04": "Chhatrapati Shivaji Terminus",
  "2026-11-05": "Bandra Kurla Complex",
  "2026-11-06": "Jio World Centre",
  "2026-11-07": "Bandra",
  "2026-11-08": "Worli",
};

export const WEEK_START_MS = Date.parse("2026-11-01T00:00:00+05:30");

