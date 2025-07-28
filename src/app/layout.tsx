import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import VisitTracker from "../components/VisitTracker";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <VisitTracker />
        {children}
      </body>
    </html>
  );
}
