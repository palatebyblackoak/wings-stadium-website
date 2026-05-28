import { hours } from "@/data/business";

export function HoursTable({ highlight }: { highlight?: keyof typeof hours }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] overflow-hidden">
      {Object.entries(hours).map(([key, h]) => {
        const isActive = key === highlight;
        return (
          <div
            key={key}
            className={`flex items-center justify-between px-5 py-3 border-b border-white/5 last:border-b-0 ${
              isActive ? "bg-heat text-ink" : "text-white"
            }`}
          >
            <span className={`font-label tracking-wider ${isActive ? "text-ink" : "text-white"}`}>
              {h.label}
            </span>
            <span className={`text-sm ${isActive ? "text-ink font-semibold" : "text-white/70"}`}>
              {h.open} – {h.close}
            </span>
          </div>
        );
      })}
    </div>
  );
}
