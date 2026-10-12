import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 20,
          background: "linear-gradient(135deg, #0b0f19, #030712)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#38bdf8",
          borderRadius: "7px",
          border: "1.5px solid #38bdf8",
          fontWeight: 900,
          fontFamily: "system-ui, sans-serif",
          textShadow: "0 0 6px rgba(56,189,248,0.8)",
        }}
      >
        U
      </div>
    ),
    {
      ...size,
    }
  );
}
