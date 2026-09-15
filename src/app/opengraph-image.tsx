import { ImageResponse } from "next/og";
import { SITE_NAME } from "@/shared/config/site";

export const alt = SITE_NAME;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(135deg, #3a72c7 0%, #4a92ff 60%, #574ba6 100%)",
          color: "#ffffff",
          fontSize: 64,
          fontWeight: 900,
          textAlign: "center",
          padding: "0 80px",
        }}
      >
        <div style={{ display: "flex", fontSize: 36, fontWeight: 700, opacity: 0.85, marginBottom: 24 }}>2026</div>
        <div style={{ display: "flex", lineHeight: 1.25 }}>전남광주</div>
        <div style={{ display: "flex", lineHeight: 1.25 }}>AI·SW체험한마당</div>
      </div>
    ),
    { ...size }
  );
}
