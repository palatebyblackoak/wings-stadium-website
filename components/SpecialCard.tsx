import type { DayLineup } from "@/data/specials";

/* Decorate the high-energy DJ nights with a hand-gesture sticker, echoing the
   printed menu's use of brush illustrations as section accents. */
function gestureFor(day: DayLineup): { src: string; alt: string } | null {
  if (day.key === "wed") return { src: "/marketing/gesture-fist.png", alt: "Fist gesture" };
  if (day.key === "thu") return { src: "/marketing/gesture-peace.png", alt: "Peace gesture" };
  if (day.key === "fri") return { src: "/marketing/gesture-rock.png", alt: "Rock-on hand gesture" };
  return null;
}

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
  const gesture = gestureFor(day);

  return (
    <article
      className={`group relative rounded-2xl border ${
        isHero ? "border-yellow-brand/60" : "border-white/10"
      } bg-white/[0.03] hover:bg-white/[0.05] transition-colors p-5 sm:p-6 overflow-hidden ${className}`}
    >
      {isHero && (
        <div
          className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-red-brand/20 blur-3xl"
          aria-hidden
        />
      )}

      {gesture && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={gesture.src}
          alt={gesture.alt}
          className="pointer-events-none absolute -right-4 -bottom-4 w-28 sm:w-32 rotate-[14deg]"
        />
      )}

      <div className="relative flex items-start justify-between gap-3">
        <div>
          <span className="inline-block font-display text-sm tracking-widest bg-yellow-brand text-ink px-2.5 py-0.5 rounded-md">
            {day.shortLabel}
          </span>
          <h3 className="heading-display text-3xl sm:text-4xl text-white mt-3">
            {day.theme ?? day.label}
          </h3>
          {day.subtitle && (
            <p className="font-body text-sm text-white/65 mt-1">{day.subtitle}</p>
          )}
        </div>
        {day.liveDj && (
          <span className="shrink-0 text-xs font-display tracking-widest text-ink bg-yellow-brand px-3 py-1.5 rounded-full">
            LIVE DJ
          </span>
        )}
      </div>

      {day.placeholder ? (
        <p className="relative mt-4 font-body text-white/70 italic">{day.placeholder}</p>
      ) : (
        <ul className="relative mt-4 space-y-2">
          {day.specials.map((s, i) => (
            <li
              key={i}
              className={`flex flex-wrap items-baseline gap-x-3 gap-y-1 ${
                s.emphasis ? "text-white" : "text-white/85"
              }`}
            >
              {s.price && (
                <span
                  className={`shrink-0 font-display text-base sm:text-lg px-2.5 py-0.5 rounded ${
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
