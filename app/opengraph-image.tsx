import { ImageResponse } from "next/og";

export const alt =
  "The Wings Stadium — Where McAllen Watches the Game. 5000 Pecan Blvd, McAllen, TX. Open daily.";
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
              background: "#ee3135",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#ffffff",
              fontSize: 38,
              fontWeight: 900,
            }}
          >
            W
          </div>
          THE WINGS STADIUM
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 24, color: "#ee3135", letterSpacing: 8 }}>
            FOOD · FAMILY · FRIENDS
          </div>
          <div
            style={{
              fontSize: 110,
              fontWeight: 900,
              lineHeight: 0.9,
              marginTop: 16,
              letterSpacing: -3,
              textTransform: "uppercase",
            }}
          >
            Tonight at
          </div>
          <div
            style={{
              fontSize: 110,
              fontWeight: 900,
              lineHeight: 0.9,
              color: "#ee3135",
              letterSpacing: -3,
              textTransform: "uppercase",
            }}
          >
            The Wings Stadium.
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
