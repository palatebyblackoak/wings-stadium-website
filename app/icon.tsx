import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";
export const runtime = "edge";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg,#ffd600 0%,#f58c3d 55%,#ee3135 100%)",
          color: "#202020",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: 900,
          fontSize: 44,
          fontFamily: "system-ui",
          letterSpacing: -2,
        }}
      >
        W
      </div>
    ),
    size,
  );
}
