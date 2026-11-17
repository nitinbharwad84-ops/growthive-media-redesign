import type { Metadata, Viewport } from "next";
import "./globals.css";
import { siteConfig } from "@/lib/site-config";

export const viewport: Viewport = {
  themeColor: "#08080C",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "GrowthiveMedia — AI & Technology Influencer Marketing Agency",
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.domain),
  keywords: [
    "GrowthiveMedia",
    "Influencer Marketing Agency",
    "AI Marketing",
    "Tech Influencer Campaigns",
    "YouTube Integrations",
    "Developer Marketing",
    "Tech Creators",
  ],
  authors: [{ name: "GrowthiveMedia" }, { name: "Nitin Bharwad" }],
  openGraph: {
    title: "GrowthiveMedia — The next big thing has a creator behind it.",
    description: siteConfig.description,
    url: siteConfig.domain,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GrowthiveMedia — AI & Tech Influencer Marketing",
    description: siteConfig.description,
  },
  icons: {
    icon: "/images/logo-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
