"use client";

import { useMemo, useState } from "react";
import { AfterChips, AfterFlowPanel } from "@/components/AfterFlow";
import { hubByNeighborhood, hubs, type HubOrigin } from "@/data/around";
import { flowsForNeighborhood } from "@/data/flows";

export function EventAfter({
  neighborhood,
  from,
}: {
  neighborhood: string;
  from?: HubOrigin;
}) {
  const hub =
    hubs.find((item) => item.id === (hubByNeighborhood[neighborhood] ?? "colaba")) ??
    hubs[0];
  const flows = flowsForNeighborhood(neighborhood);
  const origin = from ?? hub.origin;
  const [open, setOpen] = useState(false);
  const [openId, setOpenId] = useState<string | null>(null);
  const flow = useMemo(
    () => flows.find((item) => item.id === openId),
    [flows, openId],
  );

  if (flows.length === 0) return null;

  return (
    <div className="pb-4">
      <button
        type="button"
        onClick={() => {
          setOpen((current) => !current);
          setOpenId(null);
        }}
        className="ghost-link cursor-pointer text-xs font-medium text-flare"
      >
        {open ? "Close" : "Things to do after this"}
        <span className="font-deva ml-1.5 font-normal text-mute">
          {open ? "" : "· नंतर काय"}
        </span>
      </button>

      <div className={`reveal ${open ? "open" : ""}`}>
        <div>
          <div className="mt-3">
            <p className="mb-3 text-xs text-mute">
              From {origin.name}: veg, non-veg, dishes, a walk. Each stop has
              how to go.
            </p>
            <AfterChips
              flows={flows}
              openId={openId}
              onToggle={(id) => setOpenId((current) => (current === id ? null : id))}
            />
            {flow ? (
              <AfterFlowPanel flow={flow} hub={hub} origin={origin} />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
