/* Renders the brand's sport-ball stickers as a horizontal row.
   Source PNGs are the brand's brown-on-cream stickers, designed to read
   on a light surface — render them on a cream pill so they show in their
   native form (no inversion, no recolor). */

const SPORTS = [
  { src: "/marketing/sport-football.png", label: "Football" },
  { src: "/marketing/sport-basketball.png", label: "Basketball" },
  { src: "/marketing/sport-soccer.png", label: "Soccer" },
  { src: "/marketing/sport-baseball.png", label: "Baseball" },
];

export function SportIconsRow({
  size = 56,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <ul
      className={`inline-flex items-center gap-5 sm:gap-7 bg-paper rounded-full px-5 sm:px-7 py-2.5 sm:py-3 shadow-[0_10px_30px_-10px_rgba(238,49,53,0.45)] ring-1 ring-black/5 ${className}`}
      aria-label="Sports we broadcast"
    >
      {SPORTS.map((s) => (
        <li key={s.label} className="group">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={s.src}
            alt={s.label}
            width={size}
            height={size}
            style={{ width: size, height: size }}
            className="group-hover:scale-110 transition-transform duration-200"
          />
        </li>
      ))}
    </ul>
  );
}
