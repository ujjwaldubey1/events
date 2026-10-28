"use client";

import { useState } from "react";
import { AfterChips, AfterFlowPanel } from "@/components/AfterFlow";
import { flowsForNeighborhood } from "@/data/flows";

export function EventAfter({ neighborhood }: { neighborhood: string }) {
  const flows = flowsForNeighborhood(neighborhood);
  const [open, setOpen] = useState(false);
  const [openId, setOpenId] = useState<string | null>(null);
  const flow = flows.find((item) => item.id === openId);

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
            <AfterChips
              flows={flows}
              openId={openId}
              onToggle={(id) => setOpenId((current) => (current === id ? null : id))}
            />
            {flow ? <AfterFlowPanel flow={flow} /> : null}
          </div>
        </div>
      </div>
    </div>
  );
}
