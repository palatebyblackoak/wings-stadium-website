import type { BarSection } from "@/data/barMenu";

export function BarMenuSection({ section }: { section: BarSection }) {
  return (
    <section id={section.id} className="scroll-mt-24">
      <header className="mb-5 flex items-baseline justify-between gap-3 flex-wrap">
        <div>
          <h2 className="heading-display text-3xl sm:text-5xl text-white">
            {section.title}
          </h2>
          {section.subtitle && (
            <div className="heading-label text-xs sm:text-sm text-yellow-brand mt-1">
              {section.subtitle}
            </div>
          )}
        </div>
        {section.note && (
          <p className="font-body text-xs text-white/60 italic max-w-sm">
            {section.note}
          </p>
        )}
      </header>

      {/* CARDS — detailed items with descriptions */}
      {section.layout === "cards" && section.items && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {section.items.map((it) => (
            <div
              key={it.name}
              className="rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.05] transition-colors p-4 sm:p-5"
            >
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="font-label text-white text-base sm:text-lg uppercase tracking-wider">
                  {it.name}
                </h3>
                {it.price && (
                  <span className="font-label text-sm text-yellow-brand shrink-0">
                    {it.price}
                  </span>
                )}
              </div>
              {it.description && (
                <p className="font-body text-white/70 text-sm mt-1.5 leading-relaxed">
                  {it.description}
                </p>
              )}
            </div>
          ))}
        </div>
      )}

      {/* LIST — compact name + price rows */}
      {section.layout === "list" && section.items && (
        <ul className="rounded-xl border border-white/10 bg-white/[0.03] divide-y divide-white/5">
          {section.items.map((it) => (
            <li
              key={it.name}
              className="flex items-baseline justify-between gap-3 px-4 sm:px-5 py-3"
            >
              <div>
                <span className="font-label text-white text-base uppercase tracking-wider">
                  {it.name}
                </span>
                {it.description && (
                  <span className="font-body text-white/55 text-xs ml-2">
                    ({it.description})
                  </span>
                )}
              </div>
              {it.price && (
                <span className="font-label text-yellow-brand shrink-0">{it.price}</span>
              )}
            </li>
          ))}
        </ul>
      )}

      {/* PILLS — name-only tag list */}
      {section.layout === "pills" && section.names && (
        <ul className="flex flex-wrap gap-2">
          {section.names.map((n) => (
            <li
              key={n}
              className="rounded-full border border-white/15 bg-white/[0.04] px-3.5 py-1.5 text-sm text-white/90 font-body"
            >
              {n}
            </li>
          ))}
        </ul>
      )}

      {/* TWOCOL — grouped tag columns (e.g. Bottle Beer Domestic/Import) */}
      {section.layout === "twoCol" && section.groups && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {section.groups.map((g) => (
            <div
              key={g.heading}
              className="rounded-xl border border-white/10 bg-white/[0.03] p-4 sm:p-5"
            >
              <div className="heading-label text-xs text-yellow-brand">{g.heading}</div>
              <ul className="mt-3 space-y-1.5">
                {g.names.map((n) => (
                  <li key={n} className="font-body text-white/85 text-sm">
                    {n}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
