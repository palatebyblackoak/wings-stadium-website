import { ImageResponse } from "next/og";

export const alt = "The Wings Stadium — Where McAllen Watches the Game";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const runtime = "edge";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#202020",
          backgroundImage:
            "radial-gradient(60% 80% at 50% 0%, rgba(245,140,61,0.4) 0%, transparent 60%), radial-gradient(40% 60% at 90% 70%, rgba(238,49,53,0.3) 0%, transparent 60%)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          color: "white",
          fontFamily: "system-ui",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontWeight: 900,
            fontSize: 36,
            letterSpacing: 2,
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 12,
              background: "linear-gradient(135deg,#ffd600,#f58c3d,#ee3135)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#202020",
              fontSize: 38,
              fontWeight: 900,
            }}
          >
            W
          </div>
          THE WINGS STADIUM
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 24, color: "#ffd600", letterSpacing: 8 }}>
            FOOD · FAMILY · FRIENDS
          </div>
          <div
            style={{
              fontSize: 96,
              fontWeight: 900,
              lineHeight: 1,
              marginTop: 16,
              letterSpacing: -2,
            }}
          >
            Where McAllen
          </div>
          <div
            style={{
              fontSize: 96,
              fontWeight: 900,
              lineHeight: 1,
              backgroundImage: "linear-gradient(90deg,#ffd600,#f58c3d,#ee3135)",
              backgroundClip: "text",
              color: "transparent",
              letterSpacing: -2,
            }}
          >
            watches the game.
          </div>
        </div>

        <div style={{ fontSize: 22, color: "rgba(255,255,255,0.7)" }}>
          5000 Pecan Blvd · McAllen, TX · (956) 322-5978
        </div>
      </div>
    ),
    size,
  );
}
