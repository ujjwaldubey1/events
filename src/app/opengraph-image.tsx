import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Mumbai Circuit: crypto, IBW, and Devcon events";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const hero = await readFile(
    join(process.cwd(), "public/images/hero-mumbai-monuments.jpg"),
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background: "#c4151d",
          color: "#fcf2e8",
        }}
      >
        <img
          src={`data:image/jpeg;base64,${hero.toString("base64")}`}
          width={1200}
          height={630}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 1200,
            height: 630,
            objectFit: "cover",
            objectPosition: "bottom",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            padding: "52px 64px",
            width: "100%",
            height: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 28,
              fontFamily: "Georgia, serif",
              fontStyle: "italic",
            }}
          >
            Circuit
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 36,
              fontSize: 18,
              letterSpacing: "0.22em",
              fontFamily: "system-ui, sans-serif",
              opacity: 0.88,
            }}
          >
            1 TO 8 NOVEMBER 2026 · MUMBAI
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 18,
              fontSize: 84,
              lineHeight: 0.9,
              fontFamily: "Georgia, serif",
            }}
          >
            Mumbai
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 84,
              fontStyle: "italic",
              lineHeight: 0.95,
              fontFamily: "Georgia, serif",
            }}
          >
            Circuit
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 22,
              maxWidth: 620,
              fontSize: 26,
              lineHeight: 1.35,
              fontFamily: "system-ui, sans-serif",
              opacity: 0.92,
            }}
          >
            Crypto, IBW, Devcon. Mumbai only.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
