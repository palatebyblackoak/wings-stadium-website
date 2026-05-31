import type { Metadata } from "next";
import Link from "next/link";
import { CTAButton } from "@/components/CTAButton";
import { SectionTag } from "@/components/SectionTag";
import { PageHeader } from "@/components/PageHeader";
import { SectionBox } from "@/components/SectionBox";
import { foodTeaser } from "@/data/foodTeaser";

export const metadata: Metadata = {
  title: "Menu — Food & Bar",
  description:
    "Download the full Food and Bar PDF menus. Wings, burgers, hot dogs, pizza, plus a full bar with cocktails, margaritas, drafts, and shots.",
  openGraph: { title: "Menu — Food & Bar · The Wings Stadium" },
};

export default function MenuHub() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12 pb-12 sm:pb-16">
      <PageHeader
        tag="The Menu"
        title={<>Pick Your <span className="text-heat">Side</span></>}
        description="Two menus, one mission. Eat loud, drink loud."
      />

      {/* TWO PATHS — PDF-only */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5">
        {/* FOOD */}
        <SectionBox className="p-6 sm:p-8">
          <SectionTag size="sm" tilt={-2}>Food</SectionTag>
          <h2 className="heading-display text-3xl sm:text-4xl text-white mt-5">
            The Food Menu
          </h2>
          <p className="font-body text-white/75 mt-3">
            Wings carry the building. Everything else is here to help.
          </p>

          <ul className="mt-5 grid grid-cols-2 gap-2.5">
            {foodTeaser.categories.map((c) => (
              <li
                key={c.name}
                className={`rounded-lg border ${
                  c.hero
                    ? "border-yellow-brand/60 bg-yellow-brand/10"
                    : "border-white/10 bg-white/[0.02]"
                } px-3 py-2`}
              >
                <div className="font-display text-white text-base">{c.name}</div>
                <div className="font-body text-xs text-white/60">{c.note}</div>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap gap-3">
            <CTAButton href="/menus/food-menu.pdf" external size="lg">
              View Food Menu (PDF)
            </CTAButton>
            <Link
              href="/specials"
              className="font-display uppercase tracking-wider text-white/70 hover:text-white px-3 py-3"
            >
              See Daily Specials →
            </Link>
          </div>
          <p className="mt-3 font-body text-xs text-white/50">
            Full PDF menu — opens in a new tab. Allergies? Ask your server.
          </p>
        </SectionBox>

        {/* BAR */}
        <div className="relative rounded-2xl border border-red-brand/30 bg-red-brand/5 p-6 sm:p-8">
          <SectionTag size="sm" color="red" tilt={1.5}>Bar</SectionTag>
          <h2 className="heading-display text-3xl sm:text-4xl text-white mt-5">
            The Bar Menu
          </h2>
          <p className="font-body text-white/75 mt-3">
            Home Court Drinks, margaritas, mezcal, drafts, bottles, seltzers,
            and a deep shot list. Full bar, full volume.
          </p>

          <ul className="mt-5 grid grid-cols-2 gap-2.5">
            {[
              "Cocktails",
              "Margaritas",
              "Martinis",
              "Classics",
              "Draft Beer",
              "Bottle Beer",
              "Seltzers",
              "Shots",
            ].map((s) => (
              <li
                key={s}
                className="rounded-lg border border-white/10 bg-white/[0.02] px-3 py-2 font-display text-white text-base"
              >
                {s}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap gap-3">
            <CTAButton href="/menus/bar-menu.pdf" external size="lg">
              View Bar Menu (PDF)
            </CTAButton>
          </div>
          <p className="mt-3 font-body text-xs text-white/50">
            Full PDF menu — opens in a new tab. Must be 21+ for alcohol.
          </p>
        </div>
      </section>
    </div>
  );
}
