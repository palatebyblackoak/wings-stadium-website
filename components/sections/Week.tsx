"use client";

import { useEffect, useState } from "react";
import { weekly, type DayLineup } from "@/data/specials";
import { todayKey } from "@/lib/days";
import type { DayKey } from "@/data/business";

function DayCard({ day, isToday }: { day: DayLineup; isToday: boolean }) {
  return (
    <article
      className={`relative shrink-0 w-[78vw] sm:w-auto rounded-2xl p-5 sm:p-6 transition-transform ${
        isToday
          ? "scale-[1.02] bg-ink ring-1 ring-white/10"
          : "bg-white/[0.03] border border-white/10"
      }`}
      style={
        isToday
          ? {
              backgroundImage:
                "linear-gradient(var(--black), var(--black)), linear-gradient(90deg, var(--red), var(--orange))",
              backgroundOrigin: "border-box",
              backgroundClip: "content-box, border-box",
              border: "2px solid transparent",
            }
          : undefined
      }
    >
      {isToday && (
        <span className="absolute -top-3 left-5 inline-flex items-center font-label uppercase tracking-[0.2em] text-[10px] px-2.5 py-1 rounded-full text-white animate-pulse" style={{ backgroundImage: "linear-gradient(90deg, var(--red), var(--orange))" }}>
          Tonight
        </span>
      )}
      <header className="flex items-baseline justify-between gap-3">
        <div className="font-label tracking-widest text-yellow-brand text-xs">
          {day.shortLabel}
        </div>
        {day.liveDj && (
          <span className="font-label text-[10px] tracking-widest text-white/90 bg-red-brand px-2 py-0.5 rounded-full">
            LIVE DJ
          </span>
        )}
      </header>
      <h3 className="heading-display text-2xl sm:text-3xl text-white mt-2 leading-tight">
        {day.theme ?? day.label}
      </h3>
      {day.subtitle && (
        <p className="font-body text-xs text-white/60 mt-1">{day.subtitle}</p>
      )}
      {day.placeholder ? (
        <p className="font-body text-sm text-white/75 mt-4 leading-relaxed">
          {day.placeholder}
        </p>
      ) : (
        <ul className="mt-4 space-y-2">
          {day.specials.map((s, i) => (
            <li
              key={i}
              className="flex flex-wrap items-baseline gap-x-2 gap-y-1"
            >
              {s.price && (
                <span
                  className={`shrink-0 font-display text-sm px-2 py-0.5 rounded ${
                    s.emphasis
                      ? "bg-red-brand text-white"
                      : "border border-white/15 text-yellow-brand"
                  }`}
                >
                  {s.price}
                </span>
              )}
              <span className="font-body text-sm text-white/85">{s.text}</span>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}

export function Week() {
  const [day, setDay] = useState<DayKey | null>(null);
  useEffect(() => setDay(todayKey()), []);

  return (
    <section
      id="specials"
      aria-labelledby="week-heading"
      className="max-w-6xl mx-auto px-4 sm:px-6"
    >
      <header className="mb-8 sm:mb-10">
        <div className="font-label text-[10px] sm:text-xs tracking-[0.35em] text-red-brand">
          THE WEEK
        </div>
        <h2
          id="week-heading"
          className="heading-stack text-white text-[clamp(40px,7vw,96px)] mt-3"
        >
          Every Night Hits Different.
        </h2>
      </header>

      {/* Mobile: horizontal scroll. Desktop: 7-col grid. */}
      <div className="flex gap-4 overflow-x-auto -mx-4 px-4 pb-4 snap-x snap-mandatory sm:grid sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 sm:overflow-visible sm:px-0 sm:mx-0 sm:pb-0 sm:gap-3">
        {weekly.map((d) => (
          <div key={d.key} className="snap-start sm:w-auto">
            <DayCard day={d} isToday={day === d.key} />
          </div>
        ))}
      </div>
    </section>
  );
}
