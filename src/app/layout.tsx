import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Growthive Media — Modern Digital Growth & Creative Engine",
  description: "Next-generation digital growth platform engineered by Nitin Bharwad. Scaling modern brands through AI automation, precision marketing, and elite web experiences.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="min-h-screen bg-background text-foreground antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
