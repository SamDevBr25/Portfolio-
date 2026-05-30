import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "./globals.css";

import { profile } from "@/content/site";
import { absoluteUrl, cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap"
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(absoluteUrl()),
  title: {
    default: "Samuel Pinto | SP Digital",
    template: "%s | SP Digital"
  },
  description:
    "Premium digital portfolio for Samuel Pinto and SP Digital: web development, UX/UI design, SEO, performance, and business-focused digital experiences from Portugal.",
  applicationName: "SP Digital",
  authors: [{ name: profile.name }],
  creator: profile.name,
  publisher: profile.brand,
  keywords: [
    "Samuel Pinto",
    "SP Digital",
    "Portugal web developer",
    "front-end developer",
    "full-stack developer",
    "UX UI designer",
    "portfolio website",
    "business websites",
    "Next.js developer",
    "freelance web developer Portugal"
  ],
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: absoluteUrl(),
    siteName: "SP Digital",
    title: "Samuel Pinto | SP Digital",
    description:
      "Premium websites, interfaces, and web applications built with taste, clarity, and reliable execution.",
    images: [
      {
        url: profile.ogImage,
        width: 1200,
        height: 1200,
        alt: "Samuel Pinto, founder of SP Digital"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Samuel Pinto | SP Digital",
    description:
      "Premium websites, interfaces, and web applications for brands that need trust and clarity.",
    images: [profile.ogImage]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f7f1e8",
  colorScheme: "light"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(inter.variable, display.variable, mono.variable)}>
      <body className="font-sans antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-graphite focus:px-4 focus:py-2 focus:text-sm focus:text-ivory"
        >
          Skip to content
        </a>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
