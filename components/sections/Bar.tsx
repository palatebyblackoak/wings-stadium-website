"use client";

import { useState } from "react";
import { barMenu, type BarSection } from "@/data/barMenu";

function ItemRow({
  name,
  price,
  description,
}: {
  name: string;
  price?: string;
  description?: string;
}) {
  return (
    <div className="flex items-baseline justify-between gap-4 py-3 border-b border-white/5 last:border-0">
      <div className="min-w-0">
        <div className="font-display text-white text-base sm:text-lg uppercase tracking-wider">
          {name}
        </div>
        {description && (
          <p className="font-body text-white/55 text-xs sm:text-sm mt-0.5">
            {description}
          </p>
        )}
      </div>
      {price && (
        <span className="shrink-0 font-display text-yellow-brand text-base sm:text-lg">
          {price}
        </span>
      )}
    </div>
  );
}

function SectionBody({ section }: { section: BarSection }) {
  if (section.layout === "cards" || section.layout === "list") {
    return (
      <div className="rounded-xl bg-white/[0.02] border border-white/10 px-4 sm:px-5">
        {section.items?.map((it) => (
          <ItemRow key={it.name} {...it} />
        ))}
      </div>
    );
  }
  if (section.layout === "pills") {
    return (
      <ul className="flex flex-wrap gap-2">
        {section.names?.map((n) => (
          <li
            key={n}
            className="rounded-full border border-white/15 bg-white/[0.04] px-3.5 py-1.5 text-sm text-white/90 font-body font-semibold"
          >
            {n}
          </li>
        ))}
      </ul>
    );
  }
  if (section.layout === "twoCol") {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {section.groups?.map((g) => (
          <div
            key={g.heading}
            className="rounded-xl border border-white/10 bg-white/[0.03] p-4"
          >
            <div className="font-label text-[10px] tracking-[0.25em] text-yellow-brand">
              {g.heading.toUpperCase()}
            </div>
            <ul className="mt-2 space-y-1.5">
              {g.names.map((n) => (
                <li
                  key={n}
                  className="font-body text-white/85 text-sm"
                >
                  {n}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }
  return null;
}

export function Bar() {
  const [active, setActive] = useState(barMenu[0].id);

  return (
    <section
      id="bar"
      aria-labelledby="bar-heading"
      className="max-w-6xl mx-auto px-4 sm:px-6"
    >
      <header>
        <div className="font-label text-[10px] sm:text-xs tracking-[0.35em] text-red-brand">
          THE BAR
        </div>
        <h2
          id="bar-heading"
          className="heading-stack text-white text-[clamp(40px,8vw,120px)] mt-3"
        >
          Full bar. Full volume.
        </h2>
      </header>

      {/* Mobile: tabbed view to keep the page scannable. Tabs scroll
          horizontally; only the active section's body renders. */}
      <div className="lg:hidden mt-8">
        <div
          role="tablist"
          aria-label="Bar menu sections"
          className="flex gap-2 overflow-x-auto -mx-4 px-4 pb-2"
        >
          {barMenu.map((s) => (
            <button
              key={s.id}
              role="tab"
              aria-selected={active === s.id}
              onClick={() => setActive(s.id)}
              className={`shrink-0 px-3.5 py-1.5 rounded-full text-sm font-label tracking-wider uppercase transition ${
                active === s.id
                  ? "bg-red-brand text-white"
                  : "bg-white/[0.04] text-white/70 border border-white/10"
              }`}
            >
              {s.title}
            </button>
          ))}
        </div>
        {barMenu
          .filter((s) => s.id === active)
          .map((s) => (
            <div key={s.id} className="mt-5">
              {s.subtitle && (
                <div className="font-body text-sm text-white/60 mb-3">
                  {s.subtitle}
                </div>
              )}
              <SectionBody section={s} />
              {s.note && (
                <p className="mt-3 text-xs italic text-white/55">{s.note}</p>
              )}
            </div>
          ))}
      </div>

      {/* Desktop: every section stacked, two columns so the menu reads
          like a printed back-bar card. */}
      <div className="hidden lg:grid mt-10 grid-cols-2 gap-x-10 gap-y-12">
        {barMenu.map((s) => (
          <div key={s.id}>
            <header className="mb-4 flex items-baseline justify-between gap-3">
              <h3 className="heading-display text-white text-3xl uppercase tracking-wide">
                {s.title}
              </h3>
              {s.subtitle && (
                <span className="font-body text-sm text-white/60">
                  {s.subtitle}
                </span>
              )}
            </header>
            <SectionBody section={s} />
            {s.note && (
              <p className="mt-3 text-xs italic text-white/55">{s.note}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
