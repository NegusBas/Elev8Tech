import { ImageResponse } from "next/og"

// Route segment config
export const runtime = "edge"

// Image metadata
export const alt = "Elev8Tech - Web & Mobile Development Solutions"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

// Image generation
export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        fontSize: 48,
        background: "linear-gradient(135deg, #7c4dff 0%, #8bc34a 100%)",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        padding: 32,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: 24,
        }}
      >
        <div
          style={{
            fontSize: 72,
            background: "#b39b80",
            width: 120,
            height: 120,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            borderRadius: "50%",
            fontWeight: "bold",
            marginRight: 24,
          }}
        >
          E8
        </div>
        <div style={{ fontSize: 64, fontWeight: "bold" }}>ELEV8TECH</div>
      </div>
      <div style={{ fontSize: 36, opacity: 0.9 }}>Web & Mobile Development Solutions</div>
    </div>,
    { ...size },
  )
}
