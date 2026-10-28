"use client";

import { useEffect, useMemo, useState, type ReactNode } from "react";
import { AfterChips, AfterFlowPanel } from "@/components/AfterFlow";
import { hubs, mapsUrl, type Hub, type Spot } from "@/data/around";
import { flowsByHub, type AfterFlow, type FlowStep } from "@/data/flows";

const PREVIEW = 3;

function eveningFromSpot(spot: Spot, hub: Hub, kind: "eat" | "try" | "see"): AfterFlow {
  const nextTry = hub.try.find((item) => item.name !== spot.name) ?? hub.try[0];
  const nextSee = hub.see.find((item) => item.name !== spot.name) ?? hub.see[0];
  const nextEat = hub.eat.find((item) => item.name !== spot.name) ?? hub.eat[0];

  const start: FlowStep = {
    verb: kind === "see" ? "Go first to" : "Start at",
    place: spot.name,
    diet: "both",
    note: spot.note,
    query: spot.query,
  };

  const second: FlowStep =
    kind === "eat"
      ? {
          verb: "Then try",
          place: nextTry.name,
          diet: "both",
          note: nextTry.note,
          query: nextTry.query,
        }
      : {
          verb: "Then sit at",
          place: nextEat.name,
          diet: "both",
          note: nextEat.note,
          query: nextEat.query,
        };

  const third: FlowStep = {
    verb: "End at",
    place: nextSee.name,
    diet: "both",
    note: nextSee.note,
    query: nextSee.query,
  };

  return {
    id: `spot-${hub.id}-${spot.name}`,
    label: spot.name,
    tag: kind === "see" ? "Walk" : "Dishes",
    summary: `From ${spot.name}: do this, then this, then this.`,
    steps: [start, second, third],
  };
}

function placesFromFlows(flows: AfterFlow[]) {
  const seen = new Set<string>();
  const veg: FlowStep[] = [];
  const nonveg: FlowStep[] = [];
  for (const flow of flows) {
    for (const step of flow.steps) {
      if (!step.dish || seen.has(step.place)) continue;
      seen.add(step.place);
      if (step.diet === "nonveg") nonveg.push(step);
      else veg.push(step);
    }
  }
  return { veg, nonveg };
}

function PlaceButton({
  step,
  onOpen,
}: {
  step: FlowStep;
  onOpen: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="lift w-full cursor-pointer rounded-xl border border-line bg-cream px-4 py-3 text-left"
    >
      <span className="font-medium text-ink">{step.place}</span>
      {step.dish ? (
        <span className="mt-1 block text-sm text-flare">{step.dish}</span>
      ) : null}
      <span className="mt-1 line-clamp-2 block text-xs leading-relaxed text-mute">
        {step.note}
      </span>
    </button>
  );
}

function SeeMoreList<T>({
  items,
  render,
}: {
  items: T[];
  render: (item: T) => ReactNode;
}) {
  const [more, setMore] = useState(false);
  const shown = more ? items : items.slice(0, PREVIEW);
  const extra = items.length - PREVIEW;

  return (
    <>
      <div className="mt-4 flex min-h-[13.5rem] flex-1 flex-col gap-3">{shown.map(render)}</div>
      {extra > 0 ? (
        <button
          type="button"
          onClick={() => setMore((current) => !current)}
          className="ghost-link mt-4 cursor-pointer text-left text-xs font-medium text-flare"
        >
          {more ? "See less" : `See more · ${extra} more`}
        </button>
      ) : (
        <span className="mt-4 h-4" />
      )}
    </>
  );
}

function HubColumn({
  label,
  hindi,
  items,
  onOpen,
}: {
  label: string;
  hindi: string;
  items: Spot[];
  onOpen: (spot: Spot) => void;
}) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-line bg-card px-5 py-5">
      <p className="text-[11px] tracking-[0.2em] text-flare uppercase">{label}</p>
      <p className="font-deva mt-1 text-lg text-ink">{hindi}</p>
      <SeeMoreList
        items={items}
        render={(spot) => (
          <div key={spot.name}>
            <button
              type="button"
              onClick={() => onOpen(spot)}
              className="ghost-link cursor-pointer text-left font-medium text-ink hover:text-flare"
            >
              {spot.name}
            </button>
            <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-mute">{spot.note}</p>
            <a
              href={mapsUrl(spot.query)}
              target="_blank"
              rel="noreferrer"
              className="ghost-link mt-1 inline-block cursor-pointer text-xs text-flare"
            >
              Maps
            </a>
          </div>
        )}
      />
    </article>
  );
}

export function AroundTown() {
  const [active, setActive] = useState(hubs[0].id);
  const [openId, setOpenId] = useState<string | null>(null);
  const [custom, setCustom] = useState<AfterFlow | null>(null);
  const [focusPlace, setFocusPlace] = useState<string | undefined>();

  const hub = hubs.find((item) => item.id === active) ?? hubs[0];
  const flows = flowsByHub[hub.id] ?? [];
  const tables = useMemo(() => placesFromFlows(flows), [flows]);
  const selected = custom ?? flows.find((item) => item.id === openId);

  useEffect(() => {
    function syncFromHash() {
      const id = window.location.hash.replace(/^#around-?/, "");
      if (!hubs.some((item) => item.id === id)) return;
      setActive(id);
      setOpenId(null);
      setCustom(null);
      document.getElementById("around")?.scrollIntoView({ behavior: "smooth" });
    }
    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, []);

  function openFlow(id: string) {
    setCustom(null);
    setFocusPlace(undefined);
    setOpenId((current) => (current === id ? null : id));
  }

  function openPlace(step: FlowStep) {
    const match = flows.find((flow) =>
      flow.steps.some((item) => item.place === step.place),
    );
    if (match) {
      setCustom(null);
      setFocusPlace(step.place);
      setOpenId(match.id);
      return;
    }
    const generated = eveningFromSpot(
      { name: step.place, note: step.note, query: step.query },
      hub,
      "eat",
    );
    setOpenId(null);
    setFocusPlace(step.place);
    setCustom(generated);
  }

  function openSpot(spot: Spot, kind: "eat" | "try" | "see") {
    const match = flows.find((flow) =>
      flow.steps.some(
        (item) =>
          item.place.toLowerCase().includes(spot.name.toLowerCase().split(",")[0]!) ||
          spot.name.toLowerCase().includes(item.place.toLowerCase().split(",")[0]!),
      ),
    );
    if (match) {
      setCustom(null);
      setFocusPlace(match.steps[0]?.place);
      setOpenId(match.id);
      return;
    }
    setOpenId(null);
    setFocusPlace(spot.name);
    setCustom(eveningFromSpot(spot, hub, kind));
  }

  return (
    <section id="around" className="border-t border-line bg-cream px-5 py-16">
      <div className="mx-auto max-w-5xl">
        <p className="text-xs tracking-[0.28em] text-mute uppercase">
          Between sessions
          <span className="font-deva ml-2 normal-case tracking-normal">· नंतर काय</span>
        </p>
        <h2 className="mt-3 font-display text-4xl italic tracking-tight text-ink sm:text-5xl">
          After the room
        </h2>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-mute">
          Pick a trail: veg, non-veg, famous dishes, a walk. Each one plays as
          a sequence: this, then this, then this. Click any table to start from
          there.
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {hubs.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => {
                setActive(item.id);
                setOpenId(null);
                setCustom(null);
                window.history.replaceState(null, "", `#around-${item.id}`);
              }}
              className={`chip cursor-pointer rounded-full px-3.5 py-1.5 text-sm font-medium ${
                item.id === active
                  ? "bg-flare text-white"
                  : "border border-line bg-card text-ink hover:border-flare hover:text-flare"
              }`}
            >
              {item.pill}
            </button>
          ))}
        </div>

        <p className="mt-8 text-[11px] tracking-[0.22em] text-mute uppercase">
          {hub.area}
          <span className="font-deva ml-2 normal-case tracking-normal">{hub.hindi}</span>
        </p>
        <h3 className="mt-1 font-display text-2xl italic text-flare sm:text-3xl">
          {hub.after}
        </h3>
        <p className="mt-2 text-sm text-mute">{hub.forEvents}</p>

        <div className="mt-6">
          <AfterChips flows={flows} openId={openId} onToggle={openFlow} />
        </div>

        {selected ? <AfterFlowPanel flow={selected} focusPlace={focusPlace} /> : null}

        <div className="mt-10 grid items-stretch gap-4 sm:grid-cols-2">
          <article className="flex h-full flex-col rounded-2xl border border-line bg-card px-5 py-5">
            <p className="text-[11px] tracking-[0.2em] text-flare uppercase">Veg</p>
            <p className="font-deva mt-1 text-lg text-ink">शाकाहारी</p>
            <SeeMoreList
              items={tables.veg}
              render={(step) => (
                <PlaceButton
                  key={step.place}
                  step={step}
                  onOpen={() => openPlace(step)}
                />
              )}
            />
          </article>
          <article className="flex h-full flex-col rounded-2xl border border-line bg-card px-5 py-5">
            <p className="text-[11px] tracking-[0.2em] text-flare uppercase">Non-veg</p>
            <p className="font-deva mt-1 text-lg text-ink">मांसाहारी</p>
            <SeeMoreList
              items={tables.nonveg}
              render={(step) => (
                <PlaceButton
                  key={step.place}
                  step={step}
                  onOpen={() => openPlace(step)}
                />
              )}
            />
          </article>
        </div>

        <div key={hub.id} className="mt-4 grid items-stretch gap-4 sm:grid-cols-3">
          <HubColumn
            label="Eat"
            hindi="खाणे"
            items={hub.eat}
            onOpen={(spot) => openSpot(spot, "eat")}
          />
          <HubColumn
            label="Try"
            hindi="चाखणे"
            items={hub.try}
            onOpen={(spot) => openSpot(spot, "try")}
          />
          <HubColumn
            label="See"
            hindi="पाहणे"
            items={hub.see}
            onOpen={(spot) => openSpot(spot, "see")}
          />
        </div>
      </div>
    </section>
  );
}
