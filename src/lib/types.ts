export const categories = ["ai", "crypto", "blockchain", "mixed"] as const;
export type Category = (typeof categories)[number];

export const eventTypes = [
  "conference",
  "meetup",
  "hackathon",
  "workshop",
  "mixer",
  "summit",
  "residency",
] as const;
export type EventType = (typeof eventTypes)[number];

export const costTypes = ["free", "paid", "approval"] as const;
export type Cost = (typeof costTypes)[number];

export type CityEvent = {
  slug: string;
  title: string;
  subtitle?: string;
  description: string;
  category: Category;
  types: EventType[];
  start: string;
  end: string;
  venue: string;
  neighborhood: string;
  address?: string;
  hosts: string[];
  registrationUrl: string;
  cost: Cost;
  featured?: boolean;
  highlights?: string[];
  image?: string;
};
