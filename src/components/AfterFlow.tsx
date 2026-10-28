"use client";

import { useEffect, useState } from "react";
import { mapsUrl, type AfterFlow } from "@/data/flows";

const STEP_MS = 1500;

export function AfterFlowPanel({
  flow,
  focusPlace,
}: {
  flow: AfterFlow;
  focusPlace?: string;
}) {
  const startIndex = Math.max(
    0,
    focusPlace ? flow.steps.findIndex((step) => step.place === focusPlace) : 0,
  );
  const [live, setLive] = useState(startIndex);

  useEffect(() => {
    const from = Math.max(
      0,
      focusPlace ? flow.steps.findIndex((step) => step.place === focusPlace) : 0,
    );
    setLive(from);
    const timers = flow.steps.slice(from).map((_, index) =>
      window.setTimeout(() => setLive(from + index), 280 + index * STEP_MS),
    );
    return () => timers.forEach((timer) => window.clearTimeout(timer));
  }, [flow.id, focusPlace, flow.steps]);

  return (
    <div className="flow-panel mt-4 overflow-hidden rounded-2xl border border-line bg-card px-4 py-5 sm:px-5">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-[11px] tracking-[0.2em] text-flare uppercase">
            {flow.tag}
            <span className="font-deva ml-2 normal-case tracking-normal">मग हे</span>
          </p>
          <p className="mt-1 font-display text-xl italic text-ink">{flow.label}</p>
          <p className="mt-1 max-w-xl text-sm text-mute">{flow.summary}</p>
        </div>
        <p className="text-xs text-mute">{flow.steps.length} stops · then, then, then</p>
      </div>

      <ol className="relative mt-6 space-y-0">
        <span className="flow-line pointer-events-none absolute top-3 bottom-3 left-[15px] w-px bg-line sm:left-[17px]" />
        {flow.steps.map((step, index) => {
          const active = index === live;
          const done = index < live;
          return (
            <li
              key={`${flow.id}-${step.place}`}
              className="flow-step relative flex gap-4 py-3 sm:gap-5"
              style={{ animationDelay: `${0.08 + index * 0.16}s` }}
            >
              <button
                type="button"
                onClick={() => setLive(index)}
                className={`relative z-10 mt-0.5 flex h-8 w-8 shrink-0 cursor-pointer items-center justify-center rounded-full text-xs font-semibold transition duration-300 ${
                  active
                    ? "flow-now bg-flare text-white"
                    : done
                      ? "bg-gold text-ink hover:scale-105"
                      : "border border-line bg-cream text-mute hover:border-flare hover:text-flare"
                }`}
                aria-label={`Step ${index + 1}`}
              >
                {index + 1}
              </button>
              <div className={`min-w-0 flex-1 pb-2 ${active ? "" : "opacity-70"}`}>
                <p className="text-[11px] tracking-[0.16em] text-mute uppercase">
                  {step.verb}
                  {index < flow.steps.length - 1 ? " →" : ""}
                </p>
                <a
                  href={mapsUrl(step.query)}
                  target="_blank"
                  rel="noreferrer"
                  className="ghost-link mt-0.5 block font-medium text-ink hover:text-flare"
                >
                  {step.place}
                </a>
                {step.dish ? (
                  <p className="mt-1 text-sm font-medium text-flare">
                    Order: {step.dish}
                    <span className="ml-2 rounded-full bg-cream px-2 py-0.5 text-[10px] tracking-wide text-mute uppercase">
                      {step.diet === "both" ? "veg + non-veg" : step.diet}
                    </span>
                  </p>
                ) : (
                  <p className="mt-1 text-[10px] tracking-wide text-mute uppercase">
                    {step.diet === "both" ? "veg + non-veg" : step.diet}
                  </p>
                )}
                <p className="mt-1 text-sm leading-relaxed text-mute">{step.note}</p>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export function AfterChips({
  flows,
  openId,
  onToggle,
}: {
  flows: AfterFlow[];
  openId: string | null;
  onToggle: (id: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {flows.map((flow) => (
        <button
          key={flow.id}
          type="button"
          onClick={() => onToggle(flow.id)}
          className={`chip cursor-pointer rounded-full px-3 py-1 text-xs font-medium ${
            openId === flow.id
              ? "bg-flare text-white"
              : "border border-line bg-card text-ink hover:border-flare hover:text-flare"
          }`}
        >
          {flow.label}
        </button>
      ))}
    </div>
  );
}
