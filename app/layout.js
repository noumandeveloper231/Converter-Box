import "./globals.css";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"
import Navbar from './components/Navbar';
import Script from "next/script";
import AnalyticsTracker from "./components/AnalyticsTracker";
import SelfPing from './components/SelfPing';

export const metadata = {
  title: "ConverterBox | Free YouTube to MP3 Converter Online - Fast & High Quality",
  description: "ConverterBox is the best free YouTube to MP3 converter online. Convert YouTube videos to high-quality MP3 files instantly. Fast, secure, and no registration required at converterbox.online.",
  keywords: "converterbox, converterbox online, converterbox.online, youtube to mp3, youtube converter, mp3 converter, youtube to mp3 converter, free youtube converter, youtube downloader, convert youtube to mp3, youtube mp3 download, yt to mp3 converter, yt to mp3 converter online, yt to mp3 converter free, yt to mp3 converter fast, yt to mp3 converter high quality",
  authors: [{ name: "ConverterBox" }],
  creator: "ConverterBox",
  publisher: "ConverterBox",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://converterbox.online'),
  alternates: {
    canonical: 'https://converterbox.online',
  },
  openGraph: {
    title: "ConverterBox | Best Free YouTube to MP3 Converter Online",
    description: "ConverterBox is the best free YouTube to MP3 converter online. Convert YouTube videos to high-quality MP3 files instantly at converterbox.online.",
    url: 'https://converterbox.online',
    siteName: 'ConverterBox',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ConverterBox - YouTube to MP3 Converter',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "ConverterBox | Best Free YouTube to MP3 Converter Online",
    description: "ConverterBox is the best free YouTube to MP3 converter online. Convert YouTube videos to high-quality MP3 files instantly.",
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'oWknk4LTXTWDT0MBYrRLgZTyWPclN4qeQkpJUehGQJQ',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link rel="preconnect" href="https://img.youtube.com" />

        {/* Optimized font loading */}
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Theme color */}
        <meta name="theme-color" content="#3B82F6" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "ConverterBox",
              "alternateName": ["Converter Box", "converterbox.online"],
              "url": "https://converterbox.online",
              "description": "ConverterBox is the best free YouTube to MP3 converter online. Convert YouTube videos to high-quality MP3 files instantly with our fast and secure converter.",
              "applicationCategory": "MultimediaApplication",
              "operatingSystem": "Any",
              "browserRequirements": "Requires JavaScript. Requires HTML5.",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "featureList": [
                "YouTube to MP3 conversion",
                "High-quality 128kbps audio output",
                "Fast processing",
                "No registration required",
                "Free to use",
                "Secure and private",
                "Works on all devices"
              ],
              "sameAs": [
                "https://converterbox.online"
              ]
            })
          }}
        />
      </head>
      <body className="antialiased font-poppins">
        <AnalyticsTracker />
        <SelfPing />
        <Navbar />
        {children}

        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-60HM2EMYCY"
        />
        <Script id="ga-script" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-60HM2EMYCY', {
              page_path: window.location.pathname,
            });
          `}
        </Script>

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}