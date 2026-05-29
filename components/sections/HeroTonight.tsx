"use client";

import { useEffect, useState } from "react";
import { business, type DayKey } from "@/data/business";
import { todayKey } from "@/lib/days";
import { getOpenStatus, type OpenStatus } from "@/lib/hours-status";

/**
 * Day-of-week headline. Three lines each so the stacked Anton banner
 * always reads as a vertical block, regardless of the day. Edit copy
 * here — these are the customer-facing hooks, not the data file's
 * structured offers.
 */
const HEADLINES: Record<DayKey, [string, string, string]> = {
  mon: ["Monday Night.", "70¢ Boneless Wings.", "Every Screen On."],
  tue: ["Tuesday.", "$2.50 Bottles.", "Pull Up."],
  wed: ["Wednesdays We Wear Pink.", "BOGO Wings.", "Live DJ."],
  thu: ["Texas Thursdays.", "Country Night.", "$5 Tito's."],
  fri: ["Flashback Friday.", "90s & 2000s.", "$5 Martinis + Margs."],
  sat: ["College Saturdays.", "Every Game.", "Every Screen."],
  sun: ["NFL Sundays.", "Every Game, All Day.", "Wings + Cold Drafts."],
};

// Server-render uses Sunday's headline as a stable neutral. The real day
// swaps in on mount — avoids SSR/CSR mismatch if the server timezone
// differs from the user's local clock.
const SSR_FALLBACK: DayKey = "sun";

export function HeroTonight() {
  const [day, setDay] = useState<DayKey>(SSR_FALLBACK);
  const [status, setStatus] = useState<OpenStatus | null>(null);

  useEffect(() => {
    setDay(todayKey());
    setStatus(getOpenStatus());
  }, []);

  const [line1, line2, line3] = HEADLINES[day];

  const openLine = status?.isOpen
    ? `Open until ${status.closesAt}`
    : status?.label ?? "Open daily";

  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative min-h-[100svh] overflow-hidden flex items-end"
    >
      {/* HERO PHOTO SLOT — on-brand placeholder until /photos/hero-tonight.jpg
          lands. To go live: drop the file and remove this placeholder block,
          replace with: <img src="/photos/hero-tonight.jpg" alt="Bar at peak
          energy — screens lit, beers up" className="absolute inset-0 w-full
          h-full object-cover" /> */}
      <div className="absolute inset-0 bg-ink" aria-hidden>
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <div className="max-w-xl">
            <div className="font-label text-xs sm:text-sm tracking-[0.35em] text-red-brand">
              HERO PHOTO SLOT
            </div>
            <p className="heading-display text-xl sm:text-2xl text-white/70 mt-3">
              Bar at peak energy — screens lit, beers up,
              wings hitting the table.
            </p>
            <p className="font-body text-xs text-white/40 mt-3">
              Drop in: <code className="text-red-brand">/public/photos/hero-tonight.jpg</code>
            </p>
          </div>
        </div>
      </div>

      {/* Legibility scrim — flat, top 30% darker, bottom 60% darker via
          two stacked solid overlays (not gradients). */}
      <div className="absolute inset-0 bg-black/30" aria-hidden />
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-black/45" aria-hidden />

      {/* FOREGROUND */}
      <div
        id="tonight"
        className="relative max-w-6xl mx-auto w-full px-4 sm:px-6 pb-14 sm:pb-20 pt-32"
      >
        <div className="font-label text-[10px] sm:text-xs tracking-[0.35em] text-white/85 animate-riseIn">
          TONIGHT AT THE WINGS STADIUM
        </div>

        <h1
          id="hero-heading"
          aria-label={`${line1} ${line2} ${line3}`}
          className="heading-stack flex flex-col text-white mt-4 sm:mt-6 text-[clamp(56px,13vw,200px)] animate-riseIn"
        >
          <span style={{ display: "block" }}>{line1}</span>
          <span style={{ display: "block", color: "var(--red)" }}>{line2}</span>
          <span style={{ display: "block" }}>{line3}</span>
        </h1>

        <p className="mt-6 font-body text-base sm:text-lg text-white/85 max-w-2xl">
          {business.address.street} · {openLine}
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <a
            href={business.directionsUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center font-label uppercase tracking-wider rounded-md px-7 py-4 text-base sm:text-lg text-white hover:brightness-110 transition-all duration-200"
            style={{
              backgroundImage:
                "linear-gradient(90deg, var(--red) 0%, var(--orange) 100%)",
            }}
          >
            Get Directions
          </a>
          <a
            href="#menu"
            className="inline-flex items-center justify-center font-label uppercase tracking-wider rounded-md border-2 border-white/80 text-white px-7 py-4 text-base sm:text-lg hover:bg-white hover:text-ink transition"
          >
            See the Menu
          </a>
        </div>
      </div>
    </section>
  );
}
