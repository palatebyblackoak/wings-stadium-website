import { weekly } from "@/data/specials";
import { SpecialCard } from "./SpecialCard";

// Homepage preview hides Sat/Sun (placeholder copy only). Full /specials
// page still renders the complete week.
const previewDays = weekly.filter((d) => d.key !== "sat" && d.key !== "sun");

export function SpecialsGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
      {previewDays.map((d) => (
        <SpecialCard key={d.key} day={d} />
      ))}
    </div>
  );
}
