import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://pixid.studio'),
  title: {
    default: "PIXID Studio — Portfolio | AI-Powered Digital Products",
    template: "%s | PIXID Studio"
  },
  description: "PIXID Studio creates innovative digital products and solutions. AI-powered tools, educational platforms, automation services, and web applications. Explore our portfolio of live projects including PixID Studio, CIPLE A2 Master, CoinSpillX, SAT Navigator, and more.",
  keywords: [
    "PIXID Studio",
    "portfolio",
    "AI development",
    "web development",
    "digital products",
    "SaaS development",
    "EdTech platforms",
    "automation services",
    "Next.js development",
    "TypeScript development",
    "AI-powered tools",
    "Portuguese exam preparation",
    "crypto news bot",
    "real estate AI bot",
    "Chrome extension development"
  ],
  authors: [{ name: "PIXID Studio" }],
  creator: "PIXID Studio",
  publisher: "PIXID Studio",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pixid.studio",
    siteName: "PIXID Studio",
    title: "PIXID Studio — Portfolio | AI-Powered Digital Products",
    description: "Innovative digital products and solutions. AI-powered tools, educational platforms, and automation services.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "PIXID Studio Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PIXID Studio — Portfolio",
    description: "Innovative digital products and solutions. AI-powered tools, educational platforms, and automation services.",
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
        <link rel="canonical" href="https://pixid.studio" />
        <link rel="manifest" href="/manifest.json" />
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
