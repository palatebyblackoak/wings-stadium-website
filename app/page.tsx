import { CTAButton } from "@/components/CTAButton";
import { GoogleBadge } from "@/components/GoogleBadge";
import { HappyHourBanner } from "@/components/HappyHourBanner";
import { CatchEveryGame } from "@/components/CatchEveryGame";
import { TonightAtStadium } from "@/components/TonightAtStadium";
import { SpecialsGrid } from "@/components/SpecialsGrid";
import { LocationStrip } from "@/components/LocationStrip";
import { SectionTag } from "@/components/SectionTag";

export default function HomePage() {
  return (
    <>
      {/* HERO — full-bleed venue photo, stacked all-caps headline */}
      <section className="relative min-h-[88vh] sm:min-h-[92vh] overflow-hidden flex items-end">
        {/* Background photo */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/photos/storefront.jpg"
          alt="The Wings Stadium — 5000 Pecan Blvd, McAllen"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Legibility gradient — dark at bottom, lighter at top */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.30) 0%, rgba(0,0,0,0.15) 40%, rgba(0,0,0,0.85) 100%)",
          }}
          aria-hidden
        />

        {/* Foreground */}
        <div className="relative max-w-6xl mx-auto w-full px-4 sm:px-6 pb-14 sm:pb-20 animate-riseIn">
          <h1
            className="heading-stack text-white text-[clamp(56px,13vw,180px)]"
            aria-label="Where McAllen watches the game"
          >
            <span className="block">Where</span>
            <span className="block">McAllen</span>
            <span className="block text-heat">Watches</span>
            <span className="block">the Game.</span>
          </h1>

          {/* Specifics ticker */}
          <ul className="mt-6 sm:mt-8 flex flex-wrap items-center gap-x-4 sm:gap-x-6 gap-y-2 font-label text-[11px] sm:text-sm text-white/85 tracking-[0.18em]">
            <li>WALL-TO-WALL SCREENS</li>
            <li aria-hidden className="text-yellow-brand">•</li>
            <li>EVERY GAME, EVERY NIGHT</li>
            <li aria-hidden className="text-yellow-brand">•</li>
            <li>WINGS + COLD DRAFTS</li>
            <li aria-hidden className="text-yellow-brand">•</li>
            <li>11AM&nbsp;–&nbsp;LATE</li>
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <CTAButton href="/menu" size="lg" variant="heat">
              See the Menu
            </CTAButton>
            <CTAButton href="/specials" size="lg" variant="outline">
              Tonight's Specials
            </CTAButton>
            <CTAButton href="/visit" size="lg" variant="ghost">
              Visit →
            </CTAButton>
          </div>
          <div className="mt-6">
            <GoogleBadge />
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

        {/* TONIGHT AT THE STADIUM */}
        <TonightAtStadium />

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

        {/* LOCATION STRIP */}
        <LocationStrip />
      </div>
    </>
  );
}
