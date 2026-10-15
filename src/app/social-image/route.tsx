export const dynamic = "force-static";
import { ImageResponse } from "next/og";
const size = { width: 1200, height: 630 };
export function GET() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#090a0f",
        padding: "68px",
        color: "#f3f4f6",
        fontFamily: "sans-serif",
        borderBottom: "8px solid #10b981",
      }}
    >
      <div style={{ display: "flex", fontSize: 24, color: "#10b981" }}>
        mohamed.ehab_
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: 74,
          letterSpacing: -3,
          lineHeight: 1.08,
        }}
      >
        <span>Intelligent systems.</span>
        <span>Engineered for</span>
        <span style={{ color: "#10b981" }}>the real world.</span>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 21,
          color: "#9ca3af",
        }}
      >
        <span>ML ENGINEER · SOFTWARE & INFRASTRUCTURE</span>
        <span>CAIRO, EG</span>
      </div>
    </div>,
    size,
  );
}
