import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Husain Trivedi | Cloud Engineer & Full Stack Developer",
    template: "%s | Husain Trivedi"
  },
  description: "Portfolio of Husain Trivedi, a Cloud Engineer and Full Stack Developer specializing in DevOps, AI Automation, and Scalable Solutions.",
  keywords: ["Cloud Engineer", "DevOps", "Full Stack Developer", "AI Automation", "Husain Trivedi", "Web Development", "Next.js", "React"],
  authors: [{ name: "Husain Trivedi" }],
  creator: "Husain Trivedi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://husaintrivedi.com",
    title: "Husain Trivedi | Cloud Engineer & Full Stack Developer",
    description: "Cloud Engineering, DevOps, and AI-driven automation solutions.",
    siteName: "Husain Trivedi Portfolio",
    images: [
      {
        url: "/og-image.png", // Ensure this image exists in public folder
        width: 1200,
        height: 630,
        alt: "Husain Trivedi Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Husain Trivedi | Cloud Engineer & Full Stack Developer",
    description: "Cloud Engineering, DevOps, and AI-driven automation solutions.",
    creator: "@husaintrivedi", // Replace with actual handle if available
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Husain Trivedi",
  "url": "https://husaintrivedi.com",
  "jobTitle": "Cloud Engineer & Full Stack Developer",
  "sameAs": [
    "https://github.com/husaintrivedi52",
    "https://linkedin.com/in/husaintrivedi52",
    "https://www.instagram.com/techs.helps/"
  ]
};

import Cursor from "@/components/Cursor";
import Preloader from "@/components/Preloader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased scanline-move`}
      >
        <Preloader />
        <Cursor />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
