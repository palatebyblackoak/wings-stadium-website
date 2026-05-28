import type { DayLineup } from "@/data/specials";

export function SpecialCard({
  day,
  highlighted = false,
  className = "",
}: {
  day: DayLineup;
  highlighted?: boolean;
  className?: string;
}) {
  const isHero = day.highPriority || highlighted;

  return (
    <article
      className={`group relative rounded-2xl border ${
        isHero ? "border-yellow-brand/60" : "border-white/10"
      } bg-white/[0.03] hover:bg-white/[0.05] transition-colors p-5 sm:p-6 overflow-hidden ${className}`}
    >
      {isHero && (
        <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-red-brand/20 blur-3xl" aria-hidden />
      )}
      <div className="relative flex items-start justify-between gap-3">
        <div>
          <div className="heading-label text-xs text-yellow-brand">{day.shortLabel}</div>
          <h3 className="heading-display text-2xl sm:text-3xl text-white mt-1">
            {day.theme ?? day.label}
          </h3>
          {day.subtitle && (
            <p className="font-body text-sm text-white/60 mt-1">{day.subtitle}</p>
          )}
        </div>
        {day.liveDj && (
          <span className="shrink-0 text-[10px] sm:text-xs font-label tracking-widest text-ink bg-yellow-brand px-2.5 py-1 rounded-full">
            LIVE DJ
          </span>
        )}
      </div>

      {day.placeholder ? (
        <p className="relative mt-4 font-body text-white/70 italic">{day.placeholder}</p>
      ) : (
        <ul className="relative mt-4 space-y-1.5">
          {day.specials.map((s, i) => (
            <li
              key={i}
              className={`flex items-baseline gap-2 ${
                s.emphasis ? "text-white" : "text-white/85"
              }`}
            >
              {s.price && (
                <span
                  className={`font-label text-sm sm:text-base px-2 py-0.5 rounded ${
                    s.emphasis
                      ? "bg-heat text-ink"
                      : "border border-white/15 text-yellow-brand"
                  }`}
                >
                  {s.price}
                </span>
              )}
              <span className="font-body text-sm sm:text-base">{s.text}</span>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}
