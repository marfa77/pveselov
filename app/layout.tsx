import type { Metadata } from "next";
import Script from "next/script";
import { siteConfig } from "@/lib/config";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Pavel Veselov — Independent products (education, compliance, automation)",
    template: "%s | Pavel Veselov",
  },
  description: "I build small, focused tools that solve very specific problems. Most of my work is around education, compliance, and automation. Portfolio and links.",
  authors: [{ name: "Pavel Veselov" }],
  creator: "Pavel Veselov",
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
    title: "Pavel Veselov — Independent products (education, compliance, automation)",
    description: "I build small, focused tools that solve very specific problems. Most of my work is around education, compliance, and automation. Portfolio and links.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Pavel Veselov",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pavel Veselov — Independent products (education, compliance, automation)",
    description: "I build small, focused tools that solve very specific problems. Most of my work is around education, compliance, and automation.",
    images: ["/og-image.png"],
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
    google: 'your-google-verification-code', // Замените на реальный код из Google Search Console
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
        <link rel="canonical" href={siteConfig.url} />
        <link rel="manifest" href="/manifest.json" />
        <meta name="ai:description" content={siteConfig.description} />
        <meta name="ai:contact" content={siteConfig.email} />
        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="icftG/jsH1c1x8gPh06fxQ"
          strategy="beforeInteractive"
          async
        />
      </head>
      <body className="antialiased" suppressHydrationWarning>
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
