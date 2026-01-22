import type { Metadata } from "next";
import Script from "next/script";
import { siteConfig } from "@/lib/config";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "PIXID Studio — Portfolio | AI-Powered Digital Products",
    template: "%s | PIXID Studio"
  },
  description: "PIXID Studio - Expert AI development and web development services. We build innovative SaaS platforms, EdTech solutions, automation tools, and digital products. Specializing in Next.js, TypeScript, AI-powered applications, and enterprise software. View our portfolio of successful projects including visa photo tools, exam preparation platforms, crypto bots, and more.",
  keywords: [
    "AI development company",
    "web development services",
    "SaaS development",
    "EdTech development",
    "Next.js developers",
    "TypeScript development",
    "AI-powered applications",
    "digital product development",
    "automation services",
    "custom software development",
    "Portuguese exam preparation",
    "visa photo tool",
    "crypto news bot",
    "real estate AI",
    "Chrome extension development",
    "B2B SaaS platform",
    "freight tender platform",
    "enterprise software",
    "React development",
    "NestJS development",
    "PIXID Studio",
    "software development portfolio"
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
    url: siteConfig.url,
    siteName: "PIXID Studio",
    title: "PIXID Studio — Expert AI & Web Development Services | Portfolio",
    description: "Professional AI development and web development services. We build innovative SaaS platforms, EdTech solutions, automation tools, and enterprise software. Specializing in Next.js, TypeScript, and AI-powered applications.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "PIXID Studio - AI Development and Web Development Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PIXID Studio — Expert AI & Web Development Services",
    description: "Professional AI development and web development services. We build innovative SaaS platforms, EdTech solutions, and automation tools.",
    images: ["/og-image.png"],
    creator: "@pixidstudio",
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
        {/* AI Search Engine Meta Tags */}
        <meta name="ai:description" content="PIXID Studio is a software development company specializing in AI development, web development, and SaaS platform creation. We build AI-powered applications, EdTech platforms, automation tools, and enterprise software using Next.js, TypeScript, React, and modern technologies." />
        <meta name="ai:category" content="Software Development, AI Development, Web Development, SaaS Development" />
        <meta name="ai:services" content="AI Development, Web Development, SaaS Development, EdTech Development, Automation Services, Enterprise Software, Custom Software Development" />
        <meta name="ai:technologies" content="Next.js, React, TypeScript, NestJS, PostgreSQL, Prisma, Supabase, OpenAI, TensorFlow.js, Machine Learning, Computer Vision" />
        <meta name="ai:expertise" content="AI-powered applications, educational platforms, automation bots, real estate AI, crypto news automation, visa photo processing, exam preparation platforms, freight tender platforms" />
        <meta name="ai:contact" content={siteConfig.email} />
        <meta name="ai:location" content="Global" />
        <meta name="ai:year-established" content="2024" />
        <meta name="ai:projects-count" content="8" />
        <meta name="ai:live-products" content="6" />
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
