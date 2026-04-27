import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink, Mail } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { StructuredData } from "@/components/StructuredData";
import { siteConfig } from "@/lib/config";
import { profile } from "@/lib/profile";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "IT & Digital Transformation Leader / Advisory Partner",
  description:
    "Pavel Veselov helps CEOs and CFOs build, run, and transform IT for trading, finance, SAP/CTRM, enterprise reporting, and data-heavy operations.",
  keywords: [
    "IT advisory partner for CEOs and CFOs",
    "IT Director Dubai",
    "Digital Transformation Leader Dubai",
    "Commodities Trading IT",
    "CTRM and SAP Finance",
    "CFO systems transformation",
    "Enterprise reporting and data warehouse",
    "Technology advisor Dubai",
    "BenchEnergy",
  ],
  alternates: { canonical: siteConfig.url },
  openGraph: {
    title: "Pavel Veselov | IT & Digital Transformation Leader / Advisory Partner",
    description:
      "Executive IT leadership and advisory for CEOs/CFOs in trading, finance, SAP/CTRM, enterprise reporting, and data-heavy businesses.",
    url: siteConfig.url,
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pavel Veselov | IT & Digital Transformation Leader / Advisory Partner",
    description:
      "Executive IT leadership and advisory for CEOs/CFOs in trading, finance, SAP/CTRM, enterprise reporting, and data-heavy businesses.",
  },
};

export default function Home() {
  const benchEnergy = projects.find((project) => project.id === "bench-energy");
  const sideProjects = projects
    .filter((project) => project.id !== "bench-energy")
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-white">
      <StructuredData type="Person" />
      <StructuredData type="WebSite" />
      <StructuredData type="ProfessionalService" />
      <Navigation />

      <main>
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 sm:pt-28 sm:pb-24">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_320px] lg:items-end">
            <div className="animate-fade-in">
              <p className="mb-5 text-sm font-medium uppercase tracking-[0.24em] text-gray-500 dark:text-gray-400">
                Pavel Veselov · Dubai
              </p>
              <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-gray-950 dark:text-white sm:text-6xl">
                {profile.headline}
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600 dark:text-gray-300 sm:text-xl">
                {profile.summary}
              </p>
              <p className="mt-4 max-w-2xl text-base leading-7 text-gray-500 dark:text-gray-400">
                {profile.availability}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {profile.credentials.map((credential) => (
                  <span
                    key={credential}
                    className="rounded-full border border-gray-200 px-3 py-1.5 text-sm font-medium text-gray-700 dark:border-gray-800 dark:text-gray-300"
                  >
                    {credential}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={`mailto:${siteConfig.email}?subject=Executive%20or%20advisory%20conversation`}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gray-950 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-800 dark:bg-white dark:text-gray-950 dark:hover:bg-gray-200"
                >
                  <Mail className="h-4 w-4" />
                  Discuss an engagement
                </a>
                <a
                  href={siteConfig.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-800 transition-colors hover:border-gray-900 hover:text-gray-950 dark:border-gray-700 dark:text-gray-200 dark:hover:border-gray-300 dark:hover:text-white"
                >
                  LinkedIn
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>

            <aside className="rounded-3xl border border-gray-200 bg-gray-50 p-6 dark:border-gray-800 dark:bg-gray-900/50">
              <Image
                src="/avatar.png"
                alt="Pavel Veselov"
                width={96}
                height={96}
                className="rounded-full border-2 border-white object-cover shadow-sm dark:border-gray-800"
                priority
              />
              <div className="mt-6 space-y-4 text-sm leading-6 text-gray-600 dark:text-gray-300">
                <p>
                  Senior IT leader with an MBA, PMP, and 18+ years across
                  commodities trading, consulting, enterprise finance systems,
                  and digital transformation.
                </p>
                <p>
                  Useful when the problem sits between business ownership,
                  technology execution, vendors, finance, and operational risk.
                </p>
              </div>
            </aside>
          </div>
        </section>

        <section className="border-y border-gray-200 bg-gray-50/70 dark:border-gray-800 dark:bg-gray-900/30">
          <div className="container mx-auto px-4 py-10 sm:px-6 lg:px-8">
            <div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-5">
              {profile.metrics.map((metric) => (
                <div key={metric.value} className="animate-fade-in">
                  <p className="text-3xl font-semibold tracking-tight text-gray-950 dark:text-white">
                    {metric.value}
                  </p>
                  <p className="mt-2 text-sm leading-5 text-gray-500 dark:text-gray-400">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <p className="text-sm font-medium uppercase tracking-[0.22em] text-gray-500 dark:text-gray-400">
                Where I help
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-gray-950 dark:text-white">
                Technology leadership for moments when the stakes are high.
              </h2>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {profile.focusAreas.map((area) => (
                <article
                  key={area.title}
                  className="rounded-2xl border border-gray-200 p-6 transition-colors hover:border-gray-300 dark:border-gray-800 dark:hover:border-gray-700"
                >
                  <h3 className="text-lg font-semibold text-gray-950 dark:text-white">
                    {area.title}
                  </h3>
                  <p className="mt-3 leading-7 text-gray-600 dark:text-gray-300">
                    {area.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-gray-200 dark:border-gray-800">
          <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-6xl">
              <div className="grid gap-10 lg:grid-cols-[280px_1fr]">
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.22em] text-gray-500 dark:text-gray-400">
                    Selected experience
                  </p>
                  <h2 className="mt-3 text-3xl font-semibold tracking-tight text-gray-950 dark:text-white">
                    Enterprise delivery, trading systems, and CFO-facing
                    transformation.
                  </h2>
                </div>
                <div className="space-y-8">
                  {profile.experience.map((item) => (
                    <article
                      key={`${item.company}-${item.role}`}
                      className="border-b border-gray-200 pb-8 last:border-b-0 last:pb-0 dark:border-gray-800"
                    >
                      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                        <h3 className="text-xl font-semibold text-gray-950 dark:text-white">
                          {item.role}
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {item.period}
                        </p>
                      </div>
                      <p className="mt-1 font-medium text-gray-700 dark:text-gray-300">
                        {item.company}
                      </p>
                      <p className="mt-4 leading-7 text-gray-600 dark:text-gray-300">
                        {item.description}
                      </p>
                      <ul className="mt-4 space-y-2 text-sm leading-6 text-gray-500 dark:text-gray-400">
                        {item.outcomes.map((outcome) => (
                          <li key={outcome} className="flex gap-3">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400 dark:bg-gray-500" />
                            <span>{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {benchEnergy && (
          <section className="border-t border-gray-200 bg-gray-950 text-white dark:border-gray-800">
            <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
              <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_360px] lg:items-center">
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.22em] text-gray-400">
                    Professional proof point
                  </p>
                  <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                    BenchEnergy turns energy market knowledge into structured
                    analytics and trading workflow tooling.
                  </h2>
                  <p className="mt-5 max-w-3xl leading-8 text-gray-300">
                    BenchEnergy is where domain expertise in commodities,
                    trading operations, freight workflows, and market
                    intelligence becomes a working product: closed tender
                    workflows, industry analytics, expert commentary, and
                    automated publishing for energy professionals.
                  </p>
                  <a
                    href={benchEnergy.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-gray-950 transition-colors hover:bg-gray-200"
                  >
                    Visit bench.energy
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                  <p className="text-sm font-medium text-gray-400">
                    Built around
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {benchEnergy.features.slice(0, 7).map((feature) => (
                      <span
                        key={feature}
                        className="rounded-full border border-white/10 px-3 py-1.5 text-sm text-gray-200"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        <section className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm font-medium uppercase tracking-[0.22em] text-gray-500 dark:text-gray-400">
                  Side ventures
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-gray-950 dark:text-white">
                  Independent SaaS projects that show hands-on execution.
                </h2>
                <p className="mt-4 leading-7 text-gray-600 dark:text-gray-300">
                  These products are not the main professional identity; they
                  demonstrate product thinking, automation, AI workflows, and
                  the ability to ship independently.
                </p>
              </div>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-sm font-semibold text-gray-950 hover:text-blue-600 dark:text-white dark:hover:text-blue-400"
              >
                All projects
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {sideProjects.map((project) => (
                <article
                  key={project.id}
                  className="rounded-2xl border border-gray-200 p-6 transition-colors hover:border-gray-300 dark:border-gray-800 dark:hover:border-gray-700"
                >
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                    <h3 className="text-lg font-semibold text-gray-950 dark:text-white">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {project.category}
                    </p>
                  </div>
                  <p className="mt-3 leading-7 text-gray-600 dark:text-gray-300">
                    {project.description}
                  </p>
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:underline dark:text-blue-400"
                    >
                      {project.url
                        .replace(/^https?:\/\/(www\.)?/, "")
                        .replace(/\/$/, "")}
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-gray-200 dark:border-gray-800">
          <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-6xl rounded-3xl bg-gray-50 p-8 dark:bg-gray-900/60 sm:p-10">
              <p className="text-sm font-medium uppercase tracking-[0.22em] text-gray-500 dark:text-gray-400">
                Contact
              </p>
              <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-gray-950 dark:text-white">
                Open to selected executive, advisory, and transformation
                conversations.
              </h2>
              <p className="mt-4 max-w-3xl leading-7 text-gray-600 dark:text-gray-300">
                The best fit is a CEO/CFO agenda where technology, finance,
                operations, vendors, and delivery risk need to be handled
                together.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-gray-950 hover:text-blue-600 dark:text-white dark:hover:text-blue-400"
                >
                  {siteConfig.email}
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href={siteConfig.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-gray-950 hover:text-blue-600 dark:text-white dark:hover:text-blue-400"
                >
                  LinkedIn
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 border-t border-gray-200 pt-8 text-sm text-gray-500 dark:border-gray-800 dark:text-gray-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Pavel Veselov</p>
          <div className="flex flex-wrap gap-5">
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-950 dark:hover:text-white"
            >
              GitHub
            </a>
            <a
              href={siteConfig.links.tableau}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-950 dark:hover:text-white"
            >
              Tableau
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
