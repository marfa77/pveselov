import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { JsonLd } from "@/components/library/JsonLd";
import { LibraryFooter } from "@/components/library/LibraryFooter";
import { siteConfig } from "@/lib/config";
import { getSecuritySource, securitySources } from "@/lib/security-sources";
import {
  getAllSecuritySteps,
  securityChangelog,
  securityDisagreements,
  securityPlaybookMeta,
  securityPlaybookPhases,
  securitySectionMeta,
  securityStepAnchor,
} from "@/lib/security-playbook";

const pageUrl = `${siteConfig.url}${securityPlaybookMeta.path}`;
const stepCount = getAllSecuritySteps().length;
const description = `A ${stepCount}-step working checklist for Heads of IT without a separate CISO: govern, identity, endpoints, email, ransomware-ready backups, cloud, apps, detection, response and board proof. Each step says what to do, when it is done, and which attack classes it reduces.`;

export const metadata: Metadata = {
  title: "Securing the Enterprise: A Head of IT Playbook (Checklist)",
  description,
  alternates: { canonical: pageUrl },
  openGraph: { title: securityPlaybookMeta.title, description, url: pageUrl, type: "article" },
  twitter: { card: "summary_large_image", title: securityPlaybookMeta.title, description },
};

function SourceLinks({ slugs }: { slugs: string[] }) {
  return (
    <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
      <span className="font-medium text-gray-700 dark:text-gray-300">Sources: </span>
      {slugs.map((slug, index) => {
        const entry = getSecuritySource(slug);
        if (!entry) return null;
        return (
          <span key={slug}>
            {index > 0 ? " · " : ""}
            <a
              href={entry.url}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-gray-300 underline-offset-2 hover:text-gray-950 dark:decoration-gray-600 dark:hover:text-white"
            >
              {entry.shortTitle}
            </a>
          </span>
        );
      })}
    </p>
  );
}

export default function SecurityPlaybookPage() {
  const steps = getAllSecuritySteps();

  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${pageUrl}#playbook`,
    headline: securityPlaybookMeta.title,
    description,
    url: pageUrl,
    inLanguage: "en",
    version: securityPlaybookMeta.version,
    datePublished: "2026-11-15",
    dateModified: securityPlaybookMeta.lastUpdated,
    author: { "@id": `${siteConfig.url}/#person`, "@type": "Person", name: "Pavel Veselov", url: siteConfig.url },
    citation: securitySources.map((entry) => ({
      "@type": "CreativeWork",
      name: entry.title,
      url: entry.url,
    })),
  };

  const howTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: securityPlaybookMeta.title,
    description,
    step: steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.title,
      text: `${step.action} Done when: ${step.doneWhen}`,
      url: `${pageUrl}#${securityStepAnchor(step.id)}`,
    })),
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Pavel Veselov", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: securitySectionMeta.title, item: pageUrl },
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
            {securitySectionMeta.title} · Playbook v{securityPlaybookMeta.version}
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-gray-950 dark:text-white sm:text-5xl">
            {securityPlaybookMeta.title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            A working checklist for the Head of IT who owns cybersecurity because there is no
            separate CISO — or security sits inside IT. Each step says what to do, how you know it
            is done, which attack classes it reduces, and which public frameworks it rests on.
          </p>
          <p className="mt-4 text-base leading-7 text-gray-500 dark:text-gray-400">
            I am not writing this as a product vendor. Tools change; attackers reuse the same paths:
            stolen credentials, phishing and BEC, ransomware, misconfigured cloud, weak remote
            access, untested backups, and quiet privilege creep. What I bring is eighteen years of
            running IT on the client side and in consulting — including the unglamorous controls that
            actually decide whether a bad Monday becomes an existential week.
          </p>
          <p className="mt-4 text-base leading-7 text-gray-500 dark:text-gray-400">
            Honest scope: this is operational readiness against the common enterprise attack classes,
            mapped through NIST CSF 2.0, CIS Controls, MITRE ATT&CK, and CISA baselines. It does not
            promise immunity to every zero-day. It does promise a clear job for the Head of IT: know
            what you own, harden identity and the estate, detect, rehearse recovery, and prove it to
            the board.
          </p>
          <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
            By{" "}
            <Link href="/" className="font-medium text-gray-700 hover:underline dark:text-gray-300">
              Pavel Veselov
            </Link>{" "}
            · {stepCount} steps in {securityPlaybookPhases.length} phases · Built on{" "}
            {securitySources.length} sources · Updated{" "}
            <time dateTime={securityPlaybookMeta.lastUpdated}>{securityPlaybookMeta.lastUpdatedLabel}</time>
          </p>
          <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
            Also useful:{" "}
            <Link href="/ai" className="font-medium text-gray-950 underline underline-offset-2 hover:no-underline dark:text-white">
              AI playbook for CIOs
            </Link>
          </p>

          <nav aria-label="Phases" className="mt-8 grid gap-2 sm:grid-cols-2">
            {securityPlaybookPhases.map((phase, index) => (
              <a
                key={phase.id}
                href={`#${phase.id}`}
                className="rounded-xl border border-gray-200 px-4 py-3 text-sm font-medium text-gray-700 hover:border-gray-400 dark:border-gray-800 dark:text-gray-300 dark:hover:border-gray-600"
              >
                {index + 1}. {phase.title}
              </a>
            ))}
          </nav>
        </header>

        <div className="mx-auto max-w-4xl space-y-16 pb-16">
          {securityPlaybookPhases.map((phase, index) => (
            <section key={phase.id} id={phase.id} className="scroll-mt-20" aria-labelledby={`${phase.id}-title`}>
              <h2 id={`${phase.id}-title`} className="text-2xl font-semibold tracking-tight text-gray-950 dark:text-white">
                Phase {index + 1}. {phase.title}
              </h2>
              <p className="mt-3 max-w-3xl leading-7 text-gray-600 dark:text-gray-300">{phase.goal}</p>
              <div className="mt-6 space-y-5">
                {phase.steps.map((step) => (
                  <article
                    key={step.id}
                    id={securityStepAnchor(step.id)}
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
                      <div>
                        <dt className="inline font-medium text-gray-950 dark:text-white">Against: </dt>
                        <dd className="inline text-gray-600 dark:text-gray-300">{step.against.join(" · ")}</dd>
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
              Frameworks pull in different directions. These are the open tensions and how this
              playbook resolves them for a Head of IT without a CISO office.
            </p>
            <div className="mt-6 space-y-8">
              {securityDisagreements.map((item) => (
                <div key={item.question}>
                  <h3 className="text-lg font-semibold text-gray-950 dark:text-white">{item.question}</h3>
                  <ul className="mt-3 space-y-2">
                    {item.positions.map((position) => {
                      const entry = getSecuritySource(position.source);
                      return (
                        <li key={position.text} className="flex gap-3 leading-7 text-gray-600 dark:text-gray-300">
                          <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400 dark:bg-gray-500" />
                          <span>
                            {position.text}{" "}
                            {entry ? (
                              <a
                                href={entry.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-gray-500 underline underline-offset-2 hover:text-gray-950 dark:text-gray-400 dark:hover:text-white"
                              >
                                {entry.shortTitle}
                              </a>
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
              When CISA, CIS, NIST, or major incident patterns should change a decision, the step and
              this changelog update. Tell me if a step does not match what you see in your estate.
            </p>
            <div className="mt-6 space-y-6">
              {securityChangelog.map((release) => (
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
              I work as a right hand to the CIO / Head of IT: I can drive the security workstream
              (baseline, identity, ransomware readiness, vendors, board metrics) while you stay on
              the business and the stakeholders.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href={`mailto:${siteConfig.email}?subject=Security%20playbook%20%2F%20Head%20of%20IT`}
                className="inline-flex items-center gap-2 rounded-full bg-gray-950 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-800 dark:bg-white dark:text-gray-950 dark:hover:bg-gray-200"
              >
                <Mail className="h-4 w-4" />
                Discuss your security agenda
              </a>
              <Link
                href="/ai"
                className="inline-flex items-center gap-2 text-sm font-semibold text-gray-950 hover:text-blue-600 dark:text-white dark:hover:text-blue-400"
              >
                See the AI playbook
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
