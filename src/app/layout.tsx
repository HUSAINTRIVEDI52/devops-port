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
    default: "Husain Trivedi - DevOps Engineer | AWS, Kubernetes, CI/CD Expert",
    template: "%s | Husain Trivedi"
  },
  description: "Husain Trivedi, a DevOps engineer specializing in AWS cloud infrastructure, Kubernetes, Docker, CI/CD pipelines, and Terraform automation. Available for remote projects worldwide.",
  keywords: [
    "devops engineer",
    "aws consultant",
    "kubernetes expert",
    "ci/cd specialist",
    "terraform developer",
    "docker containerization",
    "cloud migration",
    "devops automation",
    "hire devops engineer",
    "remote devops engineer",
    "Cloud Engineer",
    "DevOps",
    "Full Stack Developer",
    "AI Automation",
    "Husain Trivedi",
    "Web Development",
    "Next.js",
    "React",
    "Jenkins",
    "GitHub Actions",
    "Infrastructure as Code",
    "Ahmedabad DevOps",
    "India DevOps Engineer"
  ],
  authors: [{ name: "Husain Trivedi" }],
  creator: "Husain Trivedi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://husaintrivedi.site",
    title: "Husain Trivedi - DevOps Engineer | AWS, Kubernetes, CI/CD Expert",
    description: "A DevOps engineer specializing in AWS, Kubernetes, Docker, CI/CD pipelines, and cloud automation. Available for remote projects worldwide.",
    siteName: "Husain Trivedi - DevOps Portfolio",
    images: [
      {
        url: "https://husaintrivedi.site/og-image.png",
        width: 1200,
        height: 630,
        alt: "Husain Trivedi - DevOps Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Husain Trivedi - DevOps Engineer | AWS, Kubernetes, CI/CD",
    description: "A DevOps engineer specializing in AWS, Kubernetes, Docker, CI/CD pipelines, and cloud automation.",
    creator: "@husaintrivedi",
    images: ["https://husaintrivedi.site/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://husaintrivedi.site",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://husaintrivedi.site/#person",
      "name": "Husain Trivedi",
      "url": "https://husaintrivedi.site",
      "jobTitle": "DevOps Engineer & Cloud Consultant",
      "description": "DevOps engineer specializing in AWS, Kubernetes, CI/CD, and cloud infrastructure automation",
      "email": "husaintrivedi@zohomail.in",
      "telephone": "+91-7698379853",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Ahmedabad",
        "addressRegion": "Gujarat",
        "addressCountry": "IN"
      },
      "sameAs": [
        "https://github.com/husaintrivedi52",
        "https://linkedin.com/in/husaintrivedi52",
        "https://www.instagram.com/techs.helps/"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://husaintrivedi.site/#website",
      "url": "https://husaintrivedi.site",
      "name": "Husain Trivedi - DevOps Portfolio",
      "description": "DevOps engineer portfolio showcasing AWS, Kubernetes, CI/CD, and cloud automation projects",
      "publisher": {
        "@id": "https://husaintrivedi.site/#person"
      },
      "inLanguage": "en-US"
    }
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
