import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { LibraryFooter } from "@/components/library/LibraryFooter";
import { JsonLd } from "@/components/library/JsonLd";
import { siteConfig } from "@/lib/config";
import { securityExplainedMeta, securityExplainedParts } from "@/lib/security-explained";

const pageUrl = `${siteConfig.url}${securityExplainedMeta.path}`;

export const metadata: Metadata = {
  title: "Security Explained: ten pictures of the Head of IT playbook",
  description: securityExplainedMeta.description,
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Security Explained",
    description: securityExplainedMeta.description,
    url: pageUrl,
    type: "article",
  },
};

export default function SecurityExplainedPage() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Pavel Veselov", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "The Head of IT Security Playbook", item: `${siteConfig.url}/security` },
      { "@type": "ListItem", position: 3, name: securityExplainedMeta.title, item: pageUrl },
    ],
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-white">
      <JsonLd data={breadcrumb} />
      <Navigation />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mx-auto max-w-3xl pt-16 pb-6 sm:pt-24">
          <p className="text-sm font-medium uppercase tracking-[0.22em] text-gray-500">
            <Link href="/security" className="hover:text-gray-950 dark:hover:text-white">
              The Head of IT Security Playbook
            </Link>
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">Security Explained</h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Ten short parts. Each one starts with a sentence you have already heard, shows one picture, and leaves one distinction. The full checklist, with every source, stays on the{" "}
            <Link href="/security" className="font-medium text-gray-950 underline underline-offset-2 dark:text-white">
              playbook
            </Link>
            .
          </p>
          <nav aria-label="Parts" className="mt-8 grid gap-2 sm:grid-cols-2">
            {securityExplainedParts.map((part) => (
              <a
                key={part.id}
                href={`#${part.id}`}
                className="rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-700 hover:border-gray-400 dark:border-gray-800 dark:text-gray-300"
              >
                <span className="font-medium text-gray-950 dark:text-white">{part.n}. </span>
                {part.open}
              </a>
            ))}
          </nav>
        </header>

        <div className="mx-auto max-w-3xl pb-20">
          {securityExplainedParts.map((part) => (
            <article key={part.id} id={part.id} className="border-t border-gray-200 py-14 dark:border-gray-800">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-gray-500">Part {part.n}</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight">{part.open}</h2>
              {part.paragraphs.map((paragraph) => (
                <p key={paragraph} className="mt-4 text-lg leading-8 text-gray-700 dark:text-gray-300">
                  {paragraph}
                </p>
              ))}
              <div className="mt-8 space-y-8">
                {part.cards.map((card) => (
                  <figure key={card.src}>
                    <Image
                      src={card.src}
                      width={1080}
                      height={card.height ?? 700}
                      alt={card.alt}
                      className="h-auto w-full rounded-2xl border border-gray-200 dark:border-gray-800"
                    />
                    <figcaption className="mt-2 text-sm text-gray-500">{card.source}</figcaption>
                  </figure>
                ))}
              </div>
            </article>
          ))}
        </div>
      </main>
      <LibraryFooter />
    </div>
  );
}
