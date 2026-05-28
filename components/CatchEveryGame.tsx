import { PhotoSlot } from "./PhotoSlot";
import { SportIconsRow } from "./SportIconsRow";

export function CatchEveryGame() {
  return (
    <section className="relative grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center">
      <div>
        <div className="heading-label text-xs text-yellow-brand">Catch Every Game</div>
        <h2 className="heading-display text-4xl sm:text-6xl text-white mt-2">
          Every game.<br />
          <span className="text-heat">Every screen.</span>
        </h2>
        <p className="mt-5 font-body text-white/80 text-base sm:text-lg leading-relaxed max-w-xl">
          NFL, NBA, college football, soccer, fight nights — if it's on, it's on here.
          Walls of screens, real sound, and a crowd that actually cheers. The stadium
          energy without the ticket price.
        </p>

        <SportIconsRow size={52} className="mt-7" />

        <ul className="mt-7 space-y-2 text-white/80">
          <li>• Multi-screen sightlines from every booth</li>
          <li>• Sound on for the marquee game</li>
          <li>• Wings + drafts in your hand before kickoff</li>
        </ul>
      </div>
      <PhotoSlot
        label="Crowd watching the game — multi-screen wall"
        filePath="/public/photos/catch-every-game.jpg"
        aspect="aspect-[5/4]"
      />
    </section>
  );
}
