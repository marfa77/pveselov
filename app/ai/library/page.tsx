import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { JsonLd } from "@/components/library/JsonLd";
import { LibraryFooter } from "@/components/library/LibraryFooter";
import { siteConfig } from "@/lib/config";
import { aiSectionMeta, playbookMeta } from "@/lib/playbook";
import {
  getLibraryEntry,
  libraryEntries,
  libraryFaq,
  libraryMeta,
  readingPath,
  type LibraryEntry,
} from "@/lib/library";

const pageUrl = `${siteConfig.url}${libraryMeta.path}`;
const description =
  "The research behind the CIO's AI Playbook: a curated, regularly reviewed reading list on building AI in the enterprise, with summaries, publication dates, why each piece matters, who should read it, and who wrote it.";

export const metadata: Metadata = {
  title: "The CIO's AI Library: What to Read to Build AI in a Company",
  description,
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "The CIO's AI Library — what to read to build AI in the enterprise",
    description,
    url: pageUrl,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The CIO's AI Library — what to read to build AI in the enterprise",
    description,
  },
};

function EntryCard({ entry }: { entry: LibraryEntry }) {
  return (
    <article className="rounded-2xl border border-gray-200 p-6 transition-colors hover:border-gray-400 dark:border-gray-800 dark:hover:border-gray-600">
      <p className="text-xs font-medium uppercase tracking-[0.18em] text-gray-500 dark:text-gray-400">
        {entry.publisher} · {entry.format} ·{" "}
        <time dateTime={entry.published}>{entry.publishedLabel}</time>
      </p>
      <h3 className="mt-2 text-lg font-semibold text-gray-950 dark:text-white">
        <Link href={`${libraryMeta.path}/${entry.slug}`} className="hover:underline">
          {entry.title}
        </Link>
      </h3>
      <p className="mt-3 leading-7 text-gray-600 dark:text-gray-300">{entry.oneLiner}</p>
      <p className="mt-3 text-sm leading-6 text-gray-500 dark:text-gray-400">
        <span className="font-medium text-gray-700 dark:text-gray-300">For: </span>
        {entry.whoShouldRead.join(" · ")}
      </p>
      <Link
        href={`${libraryMeta.path}/${entry.slug}`}
        className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-gray-950 hover:text-blue-600 dark:text-white dark:hover:text-blue-400"
      >
        Summary, why read it, about the author
        <ArrowRight className="h-4 w-4" />
      </Link>
    </article>
  );
}

export default function LibraryPage() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Pavel Veselov", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: aiSectionMeta.title, item: `${siteConfig.url}${aiSectionMeta.path}` },
      { "@type": "ListItem", position: 3, name: libraryMeta.title, item: pageUrl },
    ],
  };

  const collection = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${pageUrl}#collection`,
    name: libraryMeta.title,
    description,
    url: pageUrl,
    inLanguage: "en",
    dateModified: libraryMeta.lastReviewed,
    author: { "@id": `${siteConfig.url}/#person`, "@type": "Person", name: "Pavel Veselov" },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: libraryEntries.length,
      itemListElement: libraryEntries.map((entry, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${pageUrl}/${entry.slug}`,
        name: entry.title,
      })),
    },
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: libraryFaq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-white">
      <JsonLd data={breadcrumb} />
      <JsonLd data={collection} />
      <JsonLd data={faq} />
      <Navigation />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mx-auto max-w-4xl pt-16 pb-10 sm:pt-24">
          <p className="text-sm font-medium uppercase tracking-[0.22em] text-gray-500 dark:text-gray-400">
            {libraryMeta.title}
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-gray-950 dark:text-white sm:text-5xl">
            What to read to build AI inside a company
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            The research behind the{" "}
            <Link href={playbookMeta.path} className="font-medium text-gray-950 underline underline-offset-2 dark:text-white">
              CIO&apos;s AI Playbook
            </Link>
            . Each entry gives a plain-English summary, the publication date,
            why it is worth a CIO&apos;s time, who should read it, who wrote it,
            the ways it is most often misquoted, and which playbook steps it
            shapes. Every number was checked against the original source.
          </p>
          <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
            Curated by{" "}
            <Link href="/" className="font-medium text-gray-700 hover:underline dark:text-gray-300">
              Pavel Veselov
            </Link>{" "}
            · {libraryEntries.length} essential reads · Last reviewed{" "}
            <time dateTime={libraryMeta.lastReviewed}>{libraryMeta.lastReviewedLabel}</time>
          </p>
        </header>

        <div className="mx-auto max-w-4xl space-y-16 pb-16">
          {readingPath.map((group, index) => (
            <section key={group.title} aria-labelledby={`reading-path-${index + 1}`}>
              <h2
                id={`reading-path-${index + 1}`}
                className="text-2xl font-semibold tracking-tight text-gray-950 dark:text-white"
              >
                {group.title}
              </h2>
              <p className="mt-3 max-w-3xl leading-7 text-gray-600 dark:text-gray-300">
                {group.intro}
              </p>
              <div className="mt-6 grid gap-5">
                {group.slugs.map((slug) => {
                  const entry = getLibraryEntry(slug);
                  return entry ? <EntryCard key={slug} entry={entry} /> : null;
                })}
              </div>
            </section>
          ))}

          <section aria-labelledby="library-faq" className="border-t border-gray-200 pt-12 dark:border-gray-800">
            <h2
              id="library-faq"
              className="text-2xl font-semibold tracking-tight text-gray-950 dark:text-white"
            >
              Questions this library answers
            </h2>
            <div className="mt-6 space-y-8">
              {libraryFaq.map((item) => (
                <div key={item.question}>
                  <h3 className="text-lg font-semibold text-gray-950 dark:text-white">
                    {item.question}
                  </h3>
                  <p className="mt-2 leading-7 text-gray-600 dark:text-gray-300">{item.answer}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <LibraryFooter />
    </div>
  );
}
