import type { Metadata } from "next";
import { Syne, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { profile } from "@/data/profile";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import { CustomCursor } from "@/components/motion/CustomCursor";
import "./globals.css";

const syne = Syne({ subsets: ["latin"], weight: ["700", "800"], variable: "--font-syne", display: "swap" });
const space = Space_Grotesk({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-space-grotesk", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500", "700"], variable: "--font-jetbrains", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://vikasmaurya.dev"),
  title: { default: `${profile.name} — ${profile.roleLine}`, template: `%s — ${profile.name}` },
  description: profile.heroIntro,
  keywords: ["Vikas Maurya", "cybersecurity researcher", "full-stack developer", "penetration testing", "digital forensics", "OSINT", "Mumbai"],
  authors: [{ name: profile.name }],
  openGraph: {
    title: `${profile.name} — ${profile.roleLine}`,
    description: profile.heroIntro,
    type: "website",
    locale: "en_IN",
    siteName: profile.name,
  },
  twitter: { card: "summary_large_image", title: `${profile.name} — ${profile.roleLine}`, description: profile.heroIntro },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.roleLine,
    email: `mailto:${profile.email}`,
    url: "https://vikasmaurya.dev",
    sameAs: [profile.github, profile.linkedin],
    address: { "@type": "PostalAddress", addressLocality: "Mira-Bhayandar", addressRegion: "Maharashtra", addressCountry: "IN" },
  };
  return (
    <html lang="en" className={`${syne.variable} ${space.variable} ${mono.variable}`}>
      <body className="font-body grain">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <SmoothScroll />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
