"use client";

import { useEffect, useState } from "react";
import { weeklyByDay } from "@/data/specials";
import type { DayKey } from "@/data/business";
import { todayKey } from "@/lib/days";
import { SpecialCard } from "./SpecialCard";
import { SectionTag } from "./SectionTag";

export function TonightAtStadium() {
  // Server-render a neutral shell, then on mount swap in today's lineup from
  // the user's local timezone. Avoids SSR/CSR day-mismatch from the server
  // resolving Date() in UTC while the user is in CT.
  const [day, setDay] = useState<DayKey | null>(null);

  useEffect(() => {
    setDay(todayKey());
  }, []);

  const lineup = day ? weeklyByDay[day] : null;

  return (
    <section
      aria-labelledby="tonight-heading"
      className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-5 sm:p-8"
    >
      <div className="flex items-end justify-between gap-4 flex-wrap">
        <div>
          <SectionTag color="red" tilt={1.5} size="sm">Tonight at the Stadium</SectionTag>
          <h2
            id="tonight-heading"
            className="heading-display text-4xl sm:text-6xl text-white mt-4"
          >
            {lineup ? lineup.theme ?? lineup.label : "Tonight at the Stadium"}
          </h2>
        </div>
        {lineup?.liveDj && (
          <span className="font-display text-base tracking-wider text-ink bg-yellow-brand px-4 py-1.5 rounded-full">
            LIVE DJ
          </span>
        )}
      </div>

      <div className="mt-5" aria-live="polite">
        {lineup ? (
          <SpecialCard day={lineup} highlighted />
        ) : (
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6 font-body text-white/70 text-sm sm:text-base">
            Every night hits different. Tap{" "}
            <a href="/specials" className="text-yellow-brand hover:text-white underline underline-offset-4">
              Specials
            </a>{" "}
            to see the full week, or check back tonight for the live lineup.
          </div>
        )}
      </div>
    </section>
  );
}
