import { CTAButton } from "@/components/CTAButton";
import { GoogleBadge } from "@/components/GoogleBadge";
import { HappyHourBanner } from "@/components/HappyHourBanner";
import { CatchEveryGame } from "@/components/CatchEveryGame";
import { TonightAtStadium } from "@/components/TonightAtStadium";
import { SpecialsGrid } from "@/components/SpecialsGrid";
import { LocationStrip } from "@/components/LocationStrip";
import { Logo } from "@/components/Logo";
import { PhotoSlot } from "@/components/PhotoSlot";

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative stadium-bg grain overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-14 pb-20 sm:pt-20 sm:pb-28 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 animate-riseIn">
            <div className="mb-8">
              <Logo variant="dark" height={120} className="max-w-[420px] sm:max-w-[520px]" />
            </div>
            <h1 className="heading-display text-white text-[44px] sm:text-[72px] lg:text-[96px] mt-2">
              Where McAllen
              <br />
              <span className="text-heat">watches the game.</span>
            </h1>
            <p className="mt-5 font-body text-white/85 text-base sm:text-lg max-w-xl leading-relaxed">
              Loud. Hungry. All in. Wings, drafts, and every game on screen —
              the stadium energy without the ticket price.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
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
            <div className="mt-7">
              <GoogleBadge />
            </div>
          </div>

          <div className="lg:col-span-5">
            <PhotoSlot
              label="Hero shot — wings, drafts, and a game on the wall"
              filePath="/public/photos/hero.jpg"
              aspect="aspect-[4/5]"
            />
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
          <div className="flex items-end justify-between gap-4 flex-wrap mb-6">
            <div>
              <div className="heading-label text-xs text-yellow-brand">The Week</div>
              <h2 className="heading-display text-4xl sm:text-5xl text-white">
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
