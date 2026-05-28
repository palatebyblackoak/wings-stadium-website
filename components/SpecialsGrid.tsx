import { weekly } from "@/data/specials";
import { SpecialCard } from "./SpecialCard";

export function SpecialsGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {weekly.map((d) => (
        <SpecialCard key={d.key} day={d} />
      ))}
    </div>
  );
}
