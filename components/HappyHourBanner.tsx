import { happyHour } from "@/data/specials";

export function HappyHourBanner({ compact = false }: { compact?: boolean }) {
  return (
    <section
      className={`relative overflow-hidden rounded-2xl ${compact ? "p-5" : "p-6 sm:p-8"} bg-heat text-ink ring-heat`}
    >
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-yellow-brand/40 blur-3xl" aria-hidden />
      <div className="relative flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <div className="heading-label text-xs sm:text-sm">{happyHour.label}</div>
          <div className="heading-display text-3xl sm:text-5xl">{happyHour.days}</div>
        </div>
        <div className="heading-display text-3xl sm:text-5xl">{happyHour.time}</div>
      </div>
      {!compact && (
        <ul className="relative mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2 text-ink/90">
          {happyHour.drinks.map((d) => (
            <li key={d.text} className="font-body">• {d.text}</li>
          ))}
        </ul>
      )}
    </section>
  );
}
