import { happyHour, lunch } from "@/data/specials";

const RED_BORDER = "border border-red-brand/30 bg-red-brand/5";
const NEUTRAL = "border border-white/10 bg-white/[0.03]";

function PerkCard({
  label,
  title,
  children,
  className = NEUTRAL,
}: {
  label: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <article className={`rounded-2xl p-5 sm:p-6 ${className}`}>
      <div className="font-label text-[10px] tracking-[0.3em] text-red-brand">
        {label}
      </div>
      <h3 className="heading-display text-2xl sm:text-3xl text-white mt-2">
        {title}
      </h3>
      <div className="mt-3 font-body text-sm sm:text-base text-white/85 leading-relaxed">
        {children}
      </div>
    </article>
  );
}

export function Perks() {
  return (
    <section
      aria-labelledby="perks-heading"
      className="max-w-6xl mx-auto px-4 sm:px-6"
    >
      <h2 id="perks-heading" className="sr-only">
        Daily perks
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <PerkCard
          label="HAPPY HOUR"
          title={`${happyHour.days} · ${happyHour.time}`}
          className={RED_BORDER}
        >
          <ul className="space-y-1.5">
            {happyHour.drinks.map((d) => (
              <li key={d.text}>• {d.text}</li>
            ))}
          </ul>
        </PerkCard>

        <PerkCard label="$5 APPS" title="During Happy Hour">
          <ul className="grid grid-cols-2 gap-x-3 gap-y-1.5">
            {happyHour.apps.items.map((a) => (
              <li key={a}>• {a}</li>
            ))}
          </ul>
        </PerkCard>

        <PerkCard label="TEACHERS" title="Teachers Eat Free">
          <p>{happyHour.teachers.body}</p>
          <p className="text-xs text-white/55 mt-2 italic">
            {happyHour.teachers.fineprint}
          </p>
        </PerkCard>

        <PerkCard
          label="LUNCH"
          title={`${lunch.headline} · ${lunch.days}`}
        >
          <p>{lunch.body}</p>
          <p className="text-xs text-white/55 mt-2">11AM – 3PM</p>
        </PerkCard>
      </div>
    </section>
  );
}
