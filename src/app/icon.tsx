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
          fontSize: 18,
          background: "linear-gradient(135deg, #7C3AED 0%, #4C1D95 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          borderRadius: 8,
          fontWeight: 800,
          border: "1px solid rgba(167, 139, 250, 0.4)",
        }}
      >
        G
      </div>
    ),
    {
      ...size,
    }
  );
}
