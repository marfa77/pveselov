import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { JsonLd } from "@/components/library/JsonLd";
import { LibraryFooter } from "@/components/library/LibraryFooter";
import { siteConfig } from "@/lib/config";
import { getLibraryEntry, libraryEntries, libraryMeta } from "@/lib/library";
import {
  aiSectionMeta,
  getAllPlaybookSteps,
  playbookChangelog,
  playbookDisagreements,
  playbookMeta,
  playbookPhases,
  stepAnchor,
} from "@/lib/playbook";

const pageUrl = `${siteConfig.url}${playbookMeta.path}`;
const stepCount = getAllPlaybookSteps().length;
const description = `A living ${stepCount}-step checklist for CIOs building AI in the enterprise: diagnose spend and shadow AI, choose domains, redesign workflows, govern agents, measure P&L impact and scale. Every step cites the research behind it.`;

export const metadata: Metadata = {
  title: "Building AI in the Enterprise: A CIO's Playbook (Checklist)",
  description,
  alternates: { canonical: pageUrl },
  openGraph: { title: playbookMeta.title, description, url: pageUrl, type: "article" },
  twitter: { card: "summary_large_image", title: playbookMeta.title, description },
};

function SourceLinks({ slugs }: { slugs: string[] }) {
  return (
    <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
      <span className="font-medium text-gray-700 dark:text-gray-300">Sources: </span>
      {slugs.map((slug, index) => {
        const entry = getLibraryEntry(slug);
        if (!entry) return null;
        return (
          <span key={slug}>
            {index > 0 ? " · " : ""}
            <Link href={`${libraryMeta.path}/${slug}`} className="underline decoration-gray-300 underline-offset-2 hover:text-gray-950 dark:decoration-gray-600 dark:hover:text-white">
              {entry.shortTitle}
            </Link>
          </span>
        );
      })}
    </p>
  );
}

export default function PlaybookPage() {
  const steps = getAllPlaybookSteps();

  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${pageUrl}#playbook`,
    headline: playbookMeta.title,
    description,
    url: pageUrl,
    inLanguage: "en",
    version: playbookMeta.version,
    datePublished: "2026-10-10",
    dateModified: playbookMeta.lastUpdated,
    author: { "@id": `${siteConfig.url}/#person`, "@type": "Person", name: "Pavel Veselov", url: siteConfig.url },
    citation: libraryEntries.map((entry) => ({
      "@type": "CreativeWork",
      name: entry.title,
      url: entry.url,
      datePublished: entry.published,
    })),
  };

  const howTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: playbookMeta.title,
    description,
    step: steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.title,
      text: `${step.action} Done when: ${step.doneWhen}`,
      url: `${pageUrl}#${stepAnchor(step.id)}`,
    })),
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Pavel Veselov", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: aiSectionMeta.title, item: pageUrl },
    ],
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-white">
      <JsonLd data={article} />
      <JsonLd data={howTo} />
      <JsonLd data={breadcrumb} />
      <Navigation />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mx-auto max-w-4xl pt-16 pb-10 sm:pt-24">
          <p className="text-sm font-medium uppercase tracking-[0.22em] text-gray-500 dark:text-gray-400">
            {aiSectionMeta.title} · Playbook v{playbookMeta.version}
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-gray-950 dark:text-white sm:text-5xl">
            {playbookMeta.title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            A working checklist for the CIO who has been asked to “do something
            with AI”, written from the CIO&apos;s side of the table. Each step
            says what to do, how you know it is done, and which research it
            rests on. When new research changes a step, the step and the
            changelog say so.
          </p>
          <p className="mt-4 text-base leading-7 text-gray-500 dark:text-gray-400">
            I wrote it the way I would run it as a CIO&apos;s right hand: after
            years as Head of IT and as an SAP integrator, and a year hands-on
            building with applied AI.
          </p>
          <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
            By{" "}
            <Link href="/" className="font-medium text-gray-700 hover:underline dark:text-gray-300">
              Pavel Veselov
            </Link>{" "}
            · {stepCount} steps in {playbookPhases.length} phases · Built on{" "}
            <Link href={libraryMeta.path} className="font-medium text-gray-700 hover:underline dark:text-gray-300">
              {libraryEntries.length} sources
            </Link>{" "}
            · Updated <time dateTime={playbookMeta.lastUpdated}>{playbookMeta.lastUpdatedLabel}</time>
          </p>

          <nav aria-label="Phases" className="mt-8 grid gap-2 sm:grid-cols-2">
            {playbookPhases.map((phase, index) => (
              <a
                key={phase.id}
                href={`#${phase.id}`}
                className="rounded-xl border border-gray-200 px-4 py-3 text-sm font-medium text-gray-700 hover:border-gray-400 dark:border-gray-800 dark:text-gray-300 dark:hover:border-gray-600"
              >
                {index + 1}. {phase.title}
              </a>
            ))}
          </nav>

          <figure className="mt-10">
            <a href="/playbook-map.png" className="block overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800">
              <Image
                src="/playbook-map.png"
                width={2000}
                height={1882}
                alt="Map of the playbook: six phases in order, Diagnose, Choose, Redesign, Govern, Measure, Fund and scale, with dashed links where an earlier step feeds a later one."
                className="h-auto w-full"
                priority
              />
            </a>
            <figcaption className="mt-3 text-sm leading-6 text-gray-500 dark:text-gray-400">
              How the steps connect. The retention curve from 1.3 feeds the renewal check in 2.4 and is tracked
              again in 5.3; the baseline set in 2.1 and 3.1 is what 5.1 measures against; pilots that survive 1.4
              fold into one program in 6.1; an agent that 3.3 justifies gets autonomy only after the six controls
              in 4.1; and cost per transaction (5.2) and token budgets (5.4) answer the scale gate in 6.2.
            </figcaption>
          </figure>
        </header>

        <div className="mx-auto max-w-4xl space-y-16 pb-16">
          {playbookPhases.map((phase, index) => (
            <section key={phase.id} id={phase.id} className="scroll-mt-20" aria-labelledby={`${phase.id}-title`}>
              <h2 id={`${phase.id}-title`} className="text-2xl font-semibold tracking-tight text-gray-950 dark:text-white">
                Phase {index + 1}. {phase.title}
              </h2>
              <p className="mt-3 max-w-3xl leading-7 text-gray-600 dark:text-gray-300">{phase.goal}</p>
              <div className="mt-6 space-y-5">
                {phase.steps.map((step) => (
                  <article
                    key={step.id}
                    id={stepAnchor(step.id)}
                    className="scroll-mt-20 rounded-2xl border border-gray-200 p-6 dark:border-gray-800"
                  >
                    <h3 className="text-lg font-semibold text-gray-950 dark:text-white">
                      <span className="mr-2 text-gray-400 dark:text-gray-500">{step.id}</span>
                      {step.title}
                    </h3>
                    <dl className="mt-4 space-y-3 leading-7">
                      <div>
                        <dt className="inline font-medium text-gray-950 dark:text-white">Do: </dt>
                        <dd className="inline text-gray-600 dark:text-gray-300">{step.action}</dd>
                      </div>
                      <div>
                        <dt className="inline font-medium text-gray-950 dark:text-white">Done when: </dt>
                        <dd className="inline text-gray-600 dark:text-gray-300">{step.doneWhen}</dd>
                      </div>
                      <div>
                        <dt className="inline font-medium text-gray-950 dark:text-white">Why: </dt>
                        <dd className="inline text-gray-600 dark:text-gray-300">{step.evidence}</dd>
                      </div>
                    </dl>
                    <SourceLinks slugs={step.sources} />
                  </article>
                ))}
              </div>
            </section>
          ))}

          <section aria-labelledby="disagreements" className="border-t border-gray-200 pt-12 dark:border-gray-800">
            <h2 id="disagreements" className="text-2xl font-semibold tracking-tight text-gray-950 dark:text-white">
              Where the sources disagree
            </h2>
            <p className="mt-3 max-w-3xl leading-7 text-gray-600 dark:text-gray-300">
              Good research contradicts itself. These are the open questions and
              how the playbook resolves them for now.
            </p>
            <div className="mt-6 space-y-8">
              {playbookDisagreements.map((item) => (
                <div key={item.question}>
                  <h3 className="text-lg font-semibold text-gray-950 dark:text-white">{item.question}</h3>
                  <ul className="mt-3 space-y-2">
                    {item.positions.map((position) => {
                      const entry = getLibraryEntry(position.source);
                      return (
                        <li key={position.text} className="flex gap-3 leading-7 text-gray-600 dark:text-gray-300">
                          <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400 dark:bg-gray-500" />
                          <span>
                            {position.text}{" "}
                            {entry ? (
                              <Link href={`${libraryMeta.path}/${entry.slug}`} className="text-sm text-gray-500 underline underline-offset-2 hover:text-gray-950 dark:text-gray-400 dark:hover:text-white">
                                {entry.shortTitle}
                              </Link>
                            ) : null}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                  <p className="mt-3 leading-7 text-gray-950 dark:text-white">
                    <span className="font-medium">Playbook position: </span>
                    {item.take}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section aria-labelledby="changelog" className="border-t border-gray-200 pt-12 dark:border-gray-800">
            <h2 id="changelog" className="text-2xl font-semibold tracking-tight text-gray-950 dark:text-white">
              How this playbook stays current
            </h2>
            <p className="mt-3 max-w-3xl leading-7 text-gray-600 dark:text-gray-300">
              I read new research on enterprise AI every week. A piece joins the{" "}
              <Link href={libraryMeta.path} className="underline underline-offset-2">
                library
              </Link>{" "}
              only if it should change a decision. Then every step is checked
              against it: does it confirm the step, contradict it, or add a new
              one? Changes are logged here with the source.
            </p>
            <div className="mt-6 space-y-6">
              {playbookChangelog.map((release) => (
                <div key={release.version}>
                  <h3 className="font-semibold text-gray-950 dark:text-white">
                    v{release.version} · <time dateTime={release.date}>{release.dateLabel}</time>
                  </h3>
                  <ul className="mt-2 space-y-2">
                    {release.changes.map((change) => (
                      <li key={change} className="flex gap-3 leading-7 text-gray-600 dark:text-gray-300">
                        <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400 dark:bg-gray-500" />
                        <span>{change}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-3xl bg-gray-50 p-8 dark:bg-gray-900/60">
            <h2 className="text-2xl font-semibold tracking-tight text-gray-950 dark:text-white">
              Need a second set of hands to run this?
            </h2>
            <p className="mt-3 max-w-3xl leading-7 text-gray-600 dark:text-gray-300">
              I work as a right hand to the CIO: I can own the AI workstream
              (spend audit, portfolio, vendor claims, governance, the business
              case) while the CIO stays on strategy and stakeholders.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href={`mailto:${siteConfig.email}?subject=AI%20playbook%20%2F%20right%20hand%20to%20the%20CIO`}
                className="inline-flex items-center gap-2 rounded-full bg-gray-950 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-800 dark:bg-white dark:text-gray-950 dark:hover:bg-gray-200"
              >
                <Mail className="h-4 w-4" />
                Discuss your AI agenda
              </a>
              <Link
                href={libraryMeta.path}
                className="inline-flex items-center gap-2 text-sm font-semibold text-gray-950 hover:text-blue-600 dark:text-white dark:hover:text-blue-400"
              >
                Read the {libraryEntries.length} sources
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </section>
        </div>
      </main>

      <LibraryFooter />
    </div>
  );
}
