import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { JsonLd } from "@/components/library/JsonLd";
import { LibraryFooter } from "@/components/library/LibraryFooter";
import { siteConfig } from "@/lib/config";
import { tradingGuides, tradingMeta } from "@/lib/trading";

const pageUrl = `${siteConfig.url}${tradingMeta.path}`;

export const metadata: Metadata = {
  title: tradingMeta.title,
  description: tradingMeta.description,
  alternates: { canonical: pageUrl },
  openGraph: {
    title: tradingMeta.title,
    description: tradingMeta.description,
    url: pageUrl,
    type: "website",
  },
};

export default function TradingPage() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Pavel Veselov", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: tradingMeta.title, item: pageUrl },
    ],
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-white">
      <JsonLd data={breadcrumb} />
      <Navigation />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mx-auto max-w-3xl pt-16 pb-10 sm:pt-24">
          <p className="text-sm font-medium uppercase tracking-[0.22em] text-gray-500">Commodity trading</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">{tradingMeta.title}</h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Two guides for a physical book. First, how a CTRM and an ERP from two vendors exchange data: live, on a clock, or through a warehouse. Then the applications I would stand up if the firm were starting from an empty building.
          </p>
          <p className="mt-4 text-sm text-gray-500">
            By{" "}
            <Link href="/" className="font-medium text-gray-700 hover:underline dark:text-gray-300">
              Pavel Veselov
            </Link>{" "}
            · Updated <time dateTime={tradingMeta.updated}>{tradingMeta.updatedLabel}</time>
          </p>
        </header>
        <div className="mx-auto grid max-w-3xl gap-4 pb-20">
          {tradingGuides.map((guide, index) => (
            <Link
              key={guide.path}
              href={guide.path}
              className="rounded-2xl border border-gray-200 px-6 py-5 hover:border-gray-400 dark:border-gray-800 dark:hover:border-gray-600"
            >
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-gray-500">{index + 1}</p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight">{guide.title}</h2>
              <p className="mt-3 leading-7 text-gray-600 dark:text-gray-300">{guide.description}</p>
              <p className="mt-4 inline-flex items-center gap-2 text-sm font-semibold">
                Open the guide
                <ArrowRight className="h-4 w-4" />
              </p>
            </Link>
          ))}
        </div>
      </main>
      <LibraryFooter />
    </div>
  );
}
