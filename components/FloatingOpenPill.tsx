"use client";

import { useEffect, useState } from "react";
import { business } from "@/data/business";
import { getOpenStatus, type OpenStatus } from "@/lib/hours-status";

export function FloatingOpenPill() {
  const [status, setStatus] = useState<OpenStatus | null>(null);

  useEffect(() => {
    setStatus(getOpenStatus());
    // Re-check every 60 seconds so the pill flips state without a reload.
    const id = setInterval(() => setStatus(getOpenStatus()), 60_000);
    return () => clearInterval(id);
  }, []);

  if (!status) return null;

  const dot = status.isOpen ? "bg-emerald-400" : "bg-yellow-brand";
  const label = status.isOpen
    ? `Open Now · Get Directions →`
    : `${status.label} · Get Directions →`;

  return (
    <a
      href={business.directionsUrl}
      target="_blank"
      rel="noreferrer"
      aria-label={`${status.label}. Get directions to ${business.name}.`}
      className="hidden md:inline-flex fixed bottom-6 right-6 z-40 items-center gap-2.5 rounded-full bg-black/85 backdrop-blur ring-1 ring-white/15 px-5 py-3 text-sm font-label tracking-wider text-white hover:bg-black hover:ring-red-brand transition-colors"
    >
      <span className={`relative inline-block w-2 h-2 rounded-full ${dot}`}>
        {status.isOpen && (
          <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-60" />
        )}
      </span>
      {label}
    </a>
  );
}
