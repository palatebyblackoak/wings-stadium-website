import type { Metadata } from "next";
import { SpecialCard } from "@/components/SpecialCard";
import { HappyHourBanner } from "@/components/HappyHourBanner";
import { SectionTag } from "@/components/SectionTag";
import { PageHeader } from "@/components/PageHeader";
import { SectionBox } from "@/components/SectionBox";
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
      <PageHeader
        tag="Every Night Hits Different"
        title={<>Weekly <span className="text-heat">Specials</span></>}
        description="The lineup that keeps McAllen coming back. Live DJ Wed–Fri. Game Day weekends."
      />

      {/* HAPPY HOUR */}
      <section className="mb-10">
        <HappyHourBanner />
      </section>

      {/* $5 APPS + TEACHERS */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 mb-12">
        <SectionBox className="p-5 sm:p-7">
          <SectionTag size="sm" tilt={-1.5}>{happyHour.apps.headline}</SectionTag>
          <h2 className="heading-display text-3xl sm:text-4xl text-white mt-5">
            $5 During Happy Hour
          </h2>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-white/90 font-body font-semibold">
            {happyHour.apps.items.map((a) => (
              <li
                key={a}
                className="rounded-md border border-white/10 bg-white/[0.02] px-3 py-2"
              >
                {a}
              </li>
            ))}
          </ul>
        </SectionBox>

        <article className="relative rounded-2xl border border-yellow-brand/40 bg-yellow-brand/[0.06] p-5 sm:p-7 overflow-hidden">
          <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-yellow-brand/20 blur-3xl" aria-hidden />
          <SectionTag size="sm" tilt={1.5}>{happyHour.teachers.headline}</SectionTag>
          <h2 className="heading-display text-3xl sm:text-4xl text-white mt-5">
            Teachers Eat <span className="text-heat">Free</span>
          </h2>
          <p className="font-body text-white/90 mt-3">{happyHour.teachers.body}</p>
          <p className="font-body text-white/60 text-sm mt-2 italic">
            {happyHour.teachers.fineprint}
          </p>
        </article>
      </section>

      {/* LUNCH */}
      <section className="mb-12 rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-0 sm:gap-6 items-center">
        <div className="p-5 sm:p-7 flex flex-col justify-center">
          <SectionTag size="sm" color="red" tilt={-1}>{lunch.days}</SectionTag>
          <h2 className="heading-display text-3xl sm:text-4xl text-white mt-5">
            {lunch.headline}
          </h2>
          <p className="font-body text-white/75 mt-1">{lunch.body}</p>
          <span className="mt-4 self-start font-display text-base text-ink bg-heat px-4 py-1.5 rounded-full">
            MON–FRI · 11AM–3PM
          </span>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/photos/specials-mix-match.jpg"
          alt="Mix & Match Lunch — burger, chicken quesadilla, cobb salad, fries with sides for $8.49–$9.99"
          loading="lazy"
          decoding="async"
          className="w-full sm:w-56 lg:w-64 aspect-[4/5] object-contain self-stretch sm:self-center"
        />
      </section>

      {/* WEEKLY GRID */}
      <section>
        <div className="mb-6">
          <SectionTag size="md" tilt={-1.5}>The Week</SectionTag>
          <h2 className="heading-display text-3xl sm:text-4xl text-white mt-5">
            Mon → Sun
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
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
