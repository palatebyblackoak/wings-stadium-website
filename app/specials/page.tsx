import type { Metadata } from "next";
import { SpecialCard } from "@/components/SpecialCard";
import { HappyHourBanner } from "@/components/HappyHourBanner";
import { weekly, happyHour, lunch } from "@/data/specials";

export const metadata: Metadata = {
  title: "Weekly Specials — Wings, Drinks, Live DJ",
  description:
    "Mon-Sun specials. Happy Hour Mon-Fri 3-7PM. Wednesdays BOGO Wings + Live DJ. Texas Thursdays. Flashback Friday. Game Day weekends.",
  openGraph: { title: "Weekly Specials · The Wings Stadium" },
};

export default function SpecialsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-12 pb-16">
      <header className="mb-10">
        <div className="heading-label text-xs text-yellow-brand">Every Night Hits Different</div>
        <h1 className="heading-display text-5xl sm:text-7xl text-white mt-1">
          Weekly <span className="text-heat">Specials</span>
        </h1>
        <p className="font-body text-white/80 max-w-2xl mt-4 text-base sm:text-lg">
          The lineup that keeps McAllen coming back. Live DJ Wed–Fri. Game Day weekends.
        </p>
      </header>

      {/* HAPPY HOUR */}
      <section className="mb-10">
        <HappyHourBanner />
      </section>

      {/* $5 APPS + TEACHERS — pulled out of Happy Hour for visibility */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-12">
        <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-7">
          <div className="heading-label text-xs text-yellow-brand">{happyHour.apps.headline}</div>
          <h2 className="heading-display text-3xl sm:text-4xl text-white mt-1">
            $5 During Happy Hour
          </h2>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-white/85 font-body">
            {happyHour.apps.items.map((a) => (
              <li key={a} className="rounded-md border border-white/10 bg-white/[0.02] px-3 py-2">
                {a}
              </li>
            ))}
          </ul>
        </article>

        <article className="rounded-2xl border border-yellow-brand/40 bg-yellow-brand/[0.06] p-5 sm:p-7 relative overflow-hidden">
          <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-yellow-brand/20 blur-3xl" aria-hidden />
          <div className="heading-label text-xs text-yellow-brand">{happyHour.teachers.headline}</div>
          <h2 className="heading-display text-3xl sm:text-4xl text-white mt-1">
            Teachers Eat <span className="text-heat">Free</span>
          </h2>
          <p className="font-body text-white/85 mt-3">{happyHour.teachers.body}</p>
          <p className="font-body text-white/60 text-sm mt-2 italic">
            {happyHour.teachers.fineprint}
          </p>
        </article>
      </section>

      {/* LUNCH */}
      <section className="mb-12 rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <div className="heading-label text-xs text-yellow-brand">{lunch.days}</div>
          <h2 className="heading-display text-3xl sm:text-4xl text-white mt-1">
            {lunch.headline}
          </h2>
          <p className="font-body text-white/75 mt-1">{lunch.body}</p>
        </div>
        <span className="self-start sm:self-auto font-label text-xs text-ink bg-heat px-3 py-1.5 rounded-full">
          MON–FRI
        </span>
      </section>

      {/* WEEKLY GRID */}
      <section>
        <div className="mb-5">
          <div className="heading-label text-xs text-yellow-brand">The Week</div>
          <h2 className="heading-display text-3xl sm:text-4xl text-white">
            Mon → Sun
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {weekly.map((d) => (
            <SpecialCard key={d.key} day={d} />
          ))}
        </div>
      </section>

      <p className="mt-12 font-body text-xs text-white/50 italic max-w-2xl">
        Specials, prices, and availability subject to change. Cannot combine with
        other offers unless stated. Must be 21+ for alcohol. Drink responsibly.
      </p>
    </div>
  );
}
