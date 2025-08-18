import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import PageTransition from "./PageTransition";
import CustomCursor from "./components/CustomCursor";
import Link from "next/link";
import Header from "@/app/components/Header";




const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FAULTAINMENT* - Fashion Meets Digital Art",
  description: "Exclusive fashion drops with glitch aesthetics. Limited collections, underground shows, and digital art fusion. Experience the void.",
  keywords: "fashion, streetwear, glitch art, exclusive drops, underground fashion, digital art, limited edition",
  authors: [{ name: "Faultainment*" }],
  creator: "Faultainment*",
  publisher: "Faultainment*",
  robots: "index, follow",
  openGraph: {
    title: "FAULTAINMENT* - Fashion Meets Digital Art",
    description: "Exclusive fashion drops with glitch aesthetics. Limited collections, underground shows, and digital art fusion.",
    type: "website",
    locale: "en_US",
    siteName: "Faultainment*",
  },
  twitter: {
    card: "summary_large_image",
    title: "FAULTAINMENT* - Fashion Meets Digital Art",
    description: "Exclusive fashion drops with glitch aesthetics. Limited collections, underground shows, and digital art fusion.",
    creator: "@faultainment",
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#000000',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="canonical" href="https://faultainment.com" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Faultainment*" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Faultainment*",
              "description": "Exclusive fashion drops with glitch aesthetics",
              "url": "https://faultainment.com",
              "logo": "https://faultainment.com/logo.png",
              "sameAs": [
                "https://instagram.com/faultainment",
                "https://twitter.com/faultainment"
              ]
            })
          }}
        />
      </head>
      <body
  className={`${geistSans.variable} ${geistMono.variable} antialiased`}
>
  <CustomCursor />
  {/* Header */}
  <Header />

  <PageTransition>{children}</PageTransition>
</body>
    </html>
  );
}
