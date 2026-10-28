import type { Metadata } from "next";
import { Fraunces, Geist, Geist_Mono, Tiro_Devanagari_Hindi } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["SOFT", "WONK", "opsz"],
});

const tiro = Tiro_Devanagari_Hindi({
  variable: "--font-deva",
  subsets: ["devanagari", "latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Mumbai Circuit: Crypto, IBW, Devcon",
  description:
    "Mumbai-only crypto, blockchain, and AI events. India Blockchain Week, Devcon, and the rooms around them.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} ${tiro.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-cream text-ink">{children}</body>
    </html>
  );
}
