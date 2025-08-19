import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import PageTransition from "./PageTransition";
import CustomCursor from "./components/CustomCursor";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";




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

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#000000',
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
  colorScheme: 'dark',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="canonical" href="https://faultainment.com" />
        
        <meta name="format-detection" content="telephone=no" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Faultainment*" />
        <meta name="theme-color" content="#000000" />
        
        {/* Preload critical assets */}
        <link
          rel="preload"
          href="/_next/static/media/your-font-file.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        
        {/* Structured Data */}
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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white flex flex-col min-h-screen`}>
        <CustomCursor />
        
        {/* Skip to main content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:bg-black focus:text-white focus:py-2 focus:px-4 focus:z-50"
        >
          Skip to main content
        </a>
        
        <Header />
        
        <main id="main-content" className="flex-grow">
          <PageTransition>{children}</PageTransition>
        </main>
        
        <Footer />
        
        {/* Loading indicator for route transitions */}
        <div id="page-transition" className="fixed inset-0 bg-black z-[9999] pointer-events-none opacity-0 transition-opacity duration-300" />
      </body>
    </html>
  );
}
