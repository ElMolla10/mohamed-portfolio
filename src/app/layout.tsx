import type { Metadata, Viewport } from "next";
import { Geist, JetBrains_Mono } from "next/font/google";
import { siteConfig, publicUrl } from "@/data/siteConfig";
import "./globals.css";
const sans = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});
const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});
const url = publicUrl();
export const metadata: Metadata = {
  metadataBase: url ? new URL(url) : undefined,
  title: "Mohamed Ehab — ML Engineer & IEEE Researcher",
  description: siteConfig.description,
  applicationName: "Mohamed Ehab Portfolio",
  keywords: [
    "Mohamed Ehab",
    "ML Engineer",
    "Cairo",
    "MLOps",
    "IEEE IMSA 2026",
    "Published research",
    "RAG",
    "React Native",
    "Infrastructure",
  ],
  alternates: url ? { canonical: url } : undefined,
  openGraph: {
    title: "Mohamed Ehab — Intelligent systems. Engineered for the real world.",
    description: siteConfig.description,
    type: "website",
    locale: "en_US",
    siteName: "Mohamed Ehab",
    ...(url
      ? {
          url,
          images: [{ url: `${url}/social-image`, width: 1200, height: 630 }],
        }
      : {}),
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohamed Ehab — ML Engineer",
    description: siteConfig.description,
    ...(url ? { images: [`${url}/social-image`] } : {}),
  },
  robots: { index: !!url, follow: !!url },
};
export const viewport: Viewport = {
  themeColor: "#090a0f",
  colorScheme: "dark",
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
