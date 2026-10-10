import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { JsonLd } from "@/components/library/JsonLd";
import { LibraryFooter } from "@/components/library/LibraryFooter";
import { siteConfig } from "@/lib/config";
import { getLibraryEntry, libraryEntries, libraryMeta } from "@/lib/library";
import { aiSectionMeta, getStepsCitingSource, playbookMeta, stepAnchor } from "@/lib/playbook";

export const dynamicParams = false;

export function generateStaticParams() {
  return libraryEntries.map((entry) => ({ slug: entry.slug }));
}

type PageProps = { params: { slug: string } };

export function generateMetadata({ params }: PageProps): Metadata {
  const entry = getLibraryEntry(params.slug);
  if (!entry) return {};
  const url = `${siteConfig.url}${libraryMeta.path}/${entry.slug}`;
  const title = `${entry.shortTitle}: Summary & Key Numbers`;
  const description = `${entry.oneLiner} ${entry.publisher}, ${entry.publishedLabel}. Summary, key numbers, who should read it and about the author.`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, type: "article" },
    twitter: { card: "summary_large_image", title, description },
  };
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-gray-200 pt-8 dark:border-gray-800">
      <h2 className="text-xl font-semibold tracking-tight text-gray-950 dark:text-white">{title}</h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 leading-7 text-gray-600 dark:text-gray-300">
          <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400 dark:bg-gray-500" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function LibraryEntryPage({ params }: PageProps) {
  const entry = getLibraryEntry(params.slug);
  if (!entry) notFound();

  const index = libraryEntries.findIndex((item) => item.slug === entry.slug);
  const previous = index > 0 ? libraryEntries[index - 1] : undefined;
  const next = index < libraryEntries.length - 1 ? libraryEntries[index + 1] : undefined;
  const url = `${siteConfig.url}${libraryMeta.path}/${entry.slug}`;
  const libraryUrl = `${siteConfig.url}${libraryMeta.path}`;
  const playbookSteps = getStepsCitingSource(entry.slug);
  const namedAuthors = entry.authors.filter((name) => !name.startsWith("et al."));

  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}#review`,
    headline: `${entry.title}: summary and reading notes`,
    description: entry.oneLiner,
    url,
    inLanguage: "en",
    dateModified: libraryMeta.lastReviewed,
    author: { "@id": `${siteConfig.url}/#person`, "@type": "Person", name: "Pavel Veselov", url: siteConfig.url },
    isPartOf: { "@id": `${libraryUrl}#collection` },
    about: {
      "@type": "CreativeWork",
      name: entry.title,
      url: entry.url,
      datePublished: entry.published,
      publisher: { "@type": "Organization", name: entry.publisher },
      author: namedAuthors.map((name) => ({ "@type": "Person", name })),
    },
    citation: entry.url,
    keywords: entry.topics.join(", "),
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Pavel Veselov", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: aiSectionMeta.title, item: `${siteConfig.url}${aiSectionMeta.path}` },
      { "@type": "ListItem", position: 3, name: libraryMeta.title, item: libraryUrl },
      { "@type": "ListItem", position: 4, name: entry.title, item: url },
    ],
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-white">
      <JsonLd data={article} />
      <JsonLd data={breadcrumb} />
      <Navigation />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8">
        <article className="mx-auto max-w-3xl pt-12 pb-16 sm:pt-16">
          <nav aria-label="Breadcrumb" className="text-sm text-gray-500 dark:text-gray-400">
            <Link href={aiSectionMeta.path} className="hover:text-gray-950 dark:hover:text-white">
              {aiSectionMeta.title}
            </Link>
            <span className="mx-2">/</span>
            <Link href={libraryMeta.path} className="hover:text-gray-950 dark:hover:text-white">
              {libraryMeta.title}
            </Link>
            <span className="mx-2">/</span>
            <span>{entry.topics.join(" · ")}</span>
          </nav>

          <header className="mt-6">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-gray-500 dark:text-gray-400">
              {entry.publisher} · {entry.format}
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-gray-950 dark:text-white sm:text-4xl">
              {entry.title}
            </h1>
            <p className="mt-5 text-lg leading-8 text-gray-600 dark:text-gray-300">{entry.oneLiner}</p>

            <dl className="mt-8 grid gap-x-8 gap-y-4 rounded-2xl bg-gray-50 p-6 text-sm dark:bg-gray-900/60 sm:grid-cols-2">
              <div>
                <dt className="font-medium text-gray-500 dark:text-gray-400">Published</dt>
                <dd className="mt-1 text-gray-950 dark:text-white">
                  <time dateTime={entry.published}>{entry.publishedLabel}</time>
                </dd>
              </div>
              <div>
                <dt className="font-medium text-gray-500 dark:text-gray-400">Reading time</dt>
                <dd className="mt-1 text-gray-950 dark:text-white">About {entry.readingTime}</dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="font-medium text-gray-500 dark:text-gray-400">Authors</dt>
                <dd className="mt-1 text-gray-950 dark:text-white">{entry.authors.join(", ")}</dd>
              </div>
            </dl>

            <a
              href={entry.url}
              target="_blank"
              rel="noopener"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-gray-950 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-800 dark:bg-white dark:text-gray-950 dark:hover:bg-gray-200"
            >
              Read the original
              <ExternalLink className="h-4 w-4" />
            </a>
            {entry.urlNote ? (
              <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">{entry.urlNote}</p>
            ) : null}
          </header>

          <div className="mt-12 space-y-10">
            <Section title="What is it about?">
              <div className="space-y-4 leading-7 text-gray-600 dark:text-gray-300">
                {entry.summary.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </Section>

            <Section title="Key numbers">
              <BulletList items={entry.keyNumbers} />
            </Section>

            <Section title="Why read it">
              <BulletList items={entry.whyRead} />
            </Section>

            <Section title="Who should read it">
              <BulletList items={entry.whoShouldRead} />
            </Section>

            <Section title={`About the author: ${entry.author.name}`}>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{entry.author.role}</p>
              <div className="mt-3 space-y-4 leading-7 text-gray-600 dark:text-gray-300">
                {entry.author.bio.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </Section>

            <Section title="Read it carefully: common misquotes">
              <BulletList items={entry.readCarefully} />
            </Section>

            {playbookSteps.length > 0 ? (
              <Section title="How it shapes the CIO's AI Playbook">
                <ul className="space-y-3">
                  {playbookSteps.map((step) => (
                    <li key={step.id} className="leading-7 text-gray-600 dark:text-gray-300">
                      <Link
                        href={`${playbookMeta.path}#${stepAnchor(step.id)}`}
                        className="font-medium text-gray-950 underline underline-offset-2 hover:text-blue-600 dark:text-white dark:hover:text-blue-400"
                      >
                        Step {step.id}: {step.title}
                      </Link>
                      <span className="text-gray-500 dark:text-gray-400"> · {step.phase.title}</span>
                    </li>
                  ))}
                </ul>
              </Section>
            ) : null}
          </div>

          <p className="mt-12 text-sm text-gray-500 dark:text-gray-400">
            Notes by{" "}
            <Link href="/" className="font-medium text-gray-700 hover:underline dark:text-gray-300">
              Pavel Veselov
            </Link>
            , last reviewed{" "}
            <time dateTime={libraryMeta.lastReviewed}>{libraryMeta.lastReviewedLabel}</time>. Summaries are
            my own; quotes and figures belong to the original authors.
          </p>

          <nav
            aria-label="More from the library"
            className="mt-10 grid gap-4 border-t border-gray-200 pt-8 dark:border-gray-800 sm:grid-cols-2"
          >
            {previous ? (
              <Link
                href={`${libraryMeta.path}/${previous.slug}`}
                className="rounded-2xl border border-gray-200 p-5 text-sm hover:border-gray-400 dark:border-gray-800 dark:hover:border-gray-600"
              >
                <span className="inline-flex items-center gap-1.5 text-gray-500 dark:text-gray-400">
                  <ArrowLeft className="h-4 w-4" /> Previous
                </span>
                <span className="mt-2 block font-semibold text-gray-950 dark:text-white">{previous.title}</span>
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link
                href={`${libraryMeta.path}/${next.slug}`}
                className="rounded-2xl border border-gray-200 p-5 text-right text-sm hover:border-gray-400 dark:border-gray-800 dark:hover:border-gray-600"
              >
                <span className="inline-flex items-center gap-1.5 text-gray-500 dark:text-gray-400">
                  Next <ArrowRight className="h-4 w-4" />
                </span>
                <span className="mt-2 block font-semibold text-gray-950 dark:text-white">{next.title}</span>
              </Link>
            ) : null}
          </nav>

          <Link
            href={libraryMeta.path}
            className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-gray-950 hover:text-blue-600 dark:text-white dark:hover:text-blue-400"
          >
            <ArrowLeft className="h-4 w-4" /> All {libraryEntries.length} sources in the CIO&apos;s AI Library
          </Link>
        </article>
      </main>

      <LibraryFooter />
    </div>
  );
}
