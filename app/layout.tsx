import type { Metadata } from "next";
import Script from "next/script";
import { siteConfig } from "@/lib/config";
import { PixidOrganizationSchema } from "@/components/PixidOrganizationSchema";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  title: {
    default: "Pavel Veselov | IT & Digital Transformation Leader / Advisory Partner",
    template: "%s | Pavel Veselov",
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  manifest: "/manifest.json",
  authors: [{ name: "Pavel Veselov" }],
  creator: "Pavel Veselov",
  publisher: "Pavel Veselov",
  alternates: {
    canonical: siteConfig.url,
  },
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Pavel Veselov | IT & Digital Transformation Leader / Advisory Partner",
    description: siteConfig.description,
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Pavel Veselov",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pavel Veselov | IT & Digital Transformation Leader / Advisory Partner",
    description: siteConfig.description,
    images: ["/og-image.svg"],
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
  icons: {
    icon: '/icon.svg',
    apple: '/icon.svg',
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="ai:description" content={siteConfig.description} />
        <meta name="ai:contact" content={siteConfig.email} />
        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="ZeNKdZVrESRS+mu6E/R9Mg"
          strategy="beforeInteractive"
          async
        />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        <PixidOrganizationSchema />
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-46B86TE9LK"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-46B86TE9LK');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
