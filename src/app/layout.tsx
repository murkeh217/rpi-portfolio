import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import VisitTracker from "../components/VisitTracker";
import NoCache from "../components/NoCache";
import IframeBreaker from "../components/IframeBreaker";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MK - Portfolio",
  description: "Full-stack developer passionate about creating amazing web experiences. Showcasing my projects and skills in React, Next.js, and modern web technologies.",
  keywords: "portfolio, web developer, full-stack, React, Next.js, JavaScript, TypeScript",
  authors: [{ name: "MK" }],
  creator: "MK",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "MK - Portfolio",
    description: "Full-stack developer passionate about creating amazing web experiences.",
    siteName: "MK Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "MK - Portfolio",
    description: "Full-stack developer passionate about creating amazing web experiences.",
    creator: "@yourusername",
  },
  // Add no-cache meta tags
  other: {
    'cache-control': 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0',
    'pragma': 'no-cache',
    'expires': '0',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <IframeBreaker />
        <NoCache />
        <VisitTracker />
        {children}
      </body>
    </html>
  );
}
