/* Renders the brand's sport-ball stickers as a horizontal row.
   Source PNGs are dark brown on transparent — the CSS filter inverts them
   to white so they sit cleanly on the dark stadium background. */

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
      className={`flex items-center gap-5 sm:gap-8 ${className}`}
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
            style={{
              width: size,
              height: size,
              filter:
                "brightness(0) invert(1) drop-shadow(0 6px 14px rgba(245,140,61,0.35))",
            }}
            className="opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-transform duration-200"
          />
        </li>
      ))}
    </ul>
  );
}
