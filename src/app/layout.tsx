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
    default: "Husain Trivedi - Freelance DevOps Engineer | AWS, Kubernetes, CI/CD Expert",
    template: "%s | Husain Trivedi"
  },
  description: "Hire Husain Trivedi, a freelance DevOps engineer specializing in AWS cloud infrastructure, Kubernetes, Docker, CI/CD pipelines, and Terraform automation. Available for remote projects worldwide.",
  keywords: [
    "freelance devops engineer",
    "aws consultant",
    "kubernetes expert",
    "ci/cd specialist",
    "terraform developer",
    "docker containerization",
    "cloud migration",
    "devops automation",
    "hire devops freelancer",
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
    title: "Husain Trivedi - Freelance DevOps Engineer | AWS, Kubernetes, CI/CD Expert",
    description: "Hire a freelance DevOps engineer specializing in AWS, Kubernetes, Docker, CI/CD pipelines, and cloud automation. Available for remote projects worldwide.",
    siteName: "Husain Trivedi - DevOps Portfolio",
    images: [
      {
        url: "https://husaintrivedi.site/og-image.png",
        width: 1200,
        height: 630,
        alt: "Husain Trivedi - Freelance DevOps Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Husain Trivedi - Freelance DevOps Engineer | AWS, Kubernetes, CI/CD",
    description: "Hire a freelance DevOps engineer specializing in AWS, Kubernetes, Docker, CI/CD pipelines, and cloud automation.",
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
      "jobTitle": "Freelance DevOps Engineer & Cloud Consultant",
      "description": "Freelance DevOps engineer specializing in AWS, Kubernetes, CI/CD, and cloud infrastructure automation",
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
      "@type": "ProfessionalService",
      "@id": "https://husaintrivedi.site/#service",
      "name": "Husain Trivedi - Freelance DevOps Services",
      "description": "Professional DevOps engineering services including AWS cloud infrastructure, Kubernetes orchestration, CI/CD pipeline implementation, and infrastructure automation",
      "url": "https://husaintrivedi.site",
      "telephone": "+91-7698379853",
      "email": "husaintrivedi@zohomail.in",
      "priceRange": "$50-$100",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Ahmedabad",
        "addressRegion": "Gujarat",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "23.0225",
        "longitude": "72.5714"
      },
      "areaServed": [
        {
          "@type": "Country",
          "name": "India"
        },
        {
          "@type": "Country",
          "name": "United States"
        },
        {
          "@type": "Country",
          "name": "United Kingdom"
        },
        "Worldwide"
      ],
      "serviceType": [
        "DevOps Engineering",
        "Cloud Infrastructure Setup",
        "CI/CD Pipeline Implementation",
        "Kubernetes Consulting",
        "Docker Containerization",
        "Terraform Infrastructure as Code",
        "AWS Cloud Migration",
        "DevOps Automation"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "DevOps Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "AWS Cloud Infrastructure Setup",
              "description": "Design and deploy scalable AWS infrastructure using EC2, S3, VPC, RDS, Lambda with Terraform"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "CI/CD Pipeline Implementation",
              "description": "Automated deployment pipelines with Jenkins, GitHub Actions, and GitLab CI"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Kubernetes & Docker Services",
              "description": "Container orchestration, cluster setup, and microservices deployment"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Infrastructure as Code",
              "description": "Terraform and Ansible automation for consistent infrastructure provisioning"
            }
          }
        ]
      },
      "provider": {
        "@id": "https://husaintrivedi.site/#person"
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://husaintrivedi.site/#website",
      "url": "https://husaintrivedi.site",
      "name": "Husain Trivedi - DevOps Portfolio",
      "description": "Freelance DevOps engineer portfolio showcasing AWS, Kubernetes, CI/CD, and cloud automation projects",
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
