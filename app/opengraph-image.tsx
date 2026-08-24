import { ImageResponse } from "next/og";

export const alt = "NexGen Data Lab — practical AI, data science and research for African communities";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ display: "flex", width: "100%", height: "100%", position: "relative", overflow: "hidden", background: "#00102B", color: "white", padding: "72px", fontFamily: "Arial, sans-serif" }}>
      <div style={{ display: "flex", position: "absolute", width: 420, height: 420, borderRadius: 999, background: "#1264E8", opacity: 0.22, top: -180, right: -80 }} />
      <div style={{ display: "flex", position: "absolute", width: 320, height: 320, borderRadius: 999, background: "#FF6500", opacity: 0.18, bottom: -190, left: 200 }} />
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 64, height: 64, borderRadius: 16, background: "#FF6500", fontSize: 36, fontWeight: 800 }}>N</div>
          <div style={{ display: "flex", fontSize: 28, fontWeight: 700 }}>NexGen Data Lab</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 940 }}>
          <div style={{ display: "flex", color: "#FF8B3D", fontSize: 22, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase" }}>Learn · Research · Build</div>
          <div style={{ display: "flex", marginTop: 20, fontSize: 60, lineHeight: 1.08, fontWeight: 800 }}>Practical AI and data science for African communities.</div>
          <div style={{ display: "flex", marginTop: 24, color: "#CBD5E1", fontSize: 25 }}>Training, mentorship, collaborative research and responsible datasets.</div>
        </div>
      </div>
    </div>,
    size,
  );
}
