function PointIcon({ children }: { children: React.ReactNode }) {
  return (
    <div className="shrink-0 inline-flex items-center justify-center w-9 h-9 rounded-full bg-red-brand/15 text-red-brand">
      {children}
    </div>
  );
}

export function Games() {
  return (
    <section
      id="games"
      aria-labelledby="games-heading"
      className="max-w-6xl mx-auto px-4 sm:px-6"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <div className="font-label text-[10px] sm:text-xs tracking-[0.35em] text-red-brand">
            CATCH EVERY GAME
          </div>
          <h2
            id="games-heading"
            className="heading-stack text-white text-[clamp(40px,8vw,120px)] mt-3"
          >
            Every game. Every screen.
          </h2>
          <p className="mt-6 font-body text-base sm:text-lg text-white/85 max-w-xl">
            NFL, NBA, college football, soccer, fight nights. Walls of screens,
            real sound, and a crowd that actually cheers. The stadium energy
            without the ticket price.
          </p>

          <ul className="mt-8 space-y-4">
            <li className="flex items-start gap-4">
              <PointIcon>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <rect x="3" y="5" width="18" height="13" rx="2" />
                  <path d="M8 21h8M12 18v3" />
                </svg>
              </PointIcon>
              <div>
                <h3 className="font-display text-white text-lg uppercase tracking-wider">
                  Sightlines from every booth
                </h3>
                <p className="font-body text-sm text-white/70">
                  Multi-screen walls so no seat is the bad seat.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <PointIcon>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M11 5 6 9H2v6h4l5 4V5z" />
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
                </svg>
              </PointIcon>
              <div>
                <h3 className="font-display text-white text-lg uppercase tracking-wider">
                  Sound on for the marquee
                </h3>
                <p className="font-body text-sm text-white/70">
                  The big game plays loud. No squinting at captions.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <PointIcon>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M17 11h1a3 3 0 0 1 0 6h-1" />
                  <path d="M3 11h14v6a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4z" />
                  <line x1="6" y1="2" x2="6" y2="5" />
                  <line x1="10" y1="2" x2="10" y2="5" />
                  <line x1="14" y1="2" x2="14" y2="5" />
                </svg>
              </PointIcon>
              <div>
                <h3 className="font-display text-white text-lg uppercase tracking-wider">
                  Wings + drafts before kickoff
                </h3>
                <p className="font-body text-sm text-white/70">
                  Order on arrival; eat with both hands.
                </p>
              </div>
            </li>
          </ul>
        </div>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/photos/catch-every-game.jpg"
          alt="The crowd watching the game on the venue's screen wall"
          className="w-full aspect-[3/4] object-cover rounded-2xl"
          loading="lazy"
        />
      </div>
    </section>
  );
}
