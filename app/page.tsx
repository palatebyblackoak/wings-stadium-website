import { HeroTonight } from "@/components/sections/HeroTonight";
import { Week } from "@/components/sections/Week";
import { Perks } from "@/components/sections/Perks";
import { Food } from "@/components/sections/Food";
import { Bar } from "@/components/sections/Bar";
import { Games } from "@/components/sections/Games";
import { Visit } from "@/components/sections/Visit";
import { WingsClubSignup } from "@/components/WingsClubSignup";
import { FloatingOpenPill } from "@/components/FloatingOpenPill";

export default function HomePage() {
  return (
    <>
      <HeroTonight />

      {/* Generous vertical rhythm per brand brief — 120px desktop, 80px mobile */}
      <div className="space-y-20 sm:space-y-32 py-20 sm:py-32">
        <Week />
        <Perks />
        <Food />
        <Bar />
        <Games />
        <Visit />
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <WingsClubSignup />
        </div>
      </div>

      <FloatingOpenPill />
    </>
  );
}
