import { CTAButton } from "@/components/CTAButton";
import { HappyHourBanner } from "@/components/HappyHourBanner";
import { CatchEveryGame } from "@/components/CatchEveryGame";
import { SpecialsGrid } from "@/components/SpecialsGrid";
import { LocationStrip } from "@/components/LocationStrip";
import { SectionTag } from "@/components/SectionTag";
import { WingsClubSignup } from "@/components/WingsClubSignup";

export default function HomePage() {
  return (
    <>
      {/* HERO — full-bleed venue photo, stacked all-caps headline */}
      <section className="relative min-h-[75vh] sm:min-h-[88vh] md:min-h-[92vh] overflow-hidden flex items-end">
        {/* Background photo */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/photos/storefront.jpg"
          alt="The Wings Stadium — 5000 Pecan Blvd, McAllen"
          className="absolute inset-0 w-full h-full object-cover object-center"
          fetchPriority="high"
        />
        {/* Legibility scrim — flat dark overlay, no gradient. */}
        <div className="absolute inset-0 bg-black/55" aria-hidden />

        {/* Foreground */}
        <div className="relative max-w-6xl mx-auto w-full px-4 sm:px-6 pb-14 sm:pb-20 animate-riseIn">
          <h1
            className="heading-stack flex flex-col text-white text-[clamp(56px,13vw,180px)]"
            aria-label="An experience like no other in McAllen"
          >
            <span style={{ display: "block" }}>An</span>
            <span style={{ display: "block" }} className="text-red-brand">Experience</span>
            <span style={{ display: "block" }}>Like No Other</span>
            <span style={{ display: "block" }}>in McAllen.</span>
          </h1>

          {/* Specifics ticker — single inline strip with dot separators */}
          <p className="mt-6 sm:mt-8 font-label text-[11px] sm:text-sm text-white/85 tracking-[0.18em] leading-relaxed">
            WALL-TO-WALL SCREENS
            <span aria-hidden className="text-yellow-brand mx-2 sm:mx-3">•</span>
            EVERY GAME, EVERY NIGHT
            <span aria-hidden className="text-yellow-brand mx-2 sm:mx-3">•</span>
            WINGS + COLD DRAFTS
            <span aria-hidden className="text-yellow-brand mx-2 sm:mx-3">•</span>
            11AM&nbsp;–&nbsp;LATE
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <CTAButton href="/menu" size="lg" variant="heat">
              See the Menu
            </CTAButton>
            <CTAButton href="/specials" size="lg" variant="outline">
              Tonight's Specials
            </CTAButton>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-16 sm:space-y-24 -mt-10 relative">
        {/* HAPPY HOUR BANNER */}
        <div className="animate-riseIn">
          <HappyHourBanner />
        </div>

        {/* CATCH EVERY GAME */}
        <CatchEveryGame />

        {/* WEEKLY SPECIALS SNAPSHOT */}
        <section>
          <div className="flex items-end justify-between gap-4 flex-wrap mb-8">
            <div>
              <SectionTag size="md" tilt={-1.5}>The Week</SectionTag>
              <h2 className="heading-display text-5xl sm:text-6xl text-white mt-5">
                Every Night Hits Different
              </h2>
            </div>
            <CTAButton href="/specials" variant="outline">
              Full Specials →
            </CTAButton>
          </div>
          <SpecialsGrid />
        </section>

        {/* WINGS CLUB SIGNUP */}
        <WingsClubSignup />

        {/* LOCATION STRIP */}
        <LocationStrip />
      </div>
    </>
  );
}
