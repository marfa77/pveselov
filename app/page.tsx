import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, ExternalLink, Mail } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { StructuredData } from "@/components/StructuredData";
import { FAQStructuredData } from "@/components/FAQStructuredData";
import { siteConfig } from "@/lib/config";
import { profile } from "@/lib/profile";

export const metadata: Metadata = {
  title: "Right Hand to the CIO | IT Leader Dubai — Both Sides",
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  alternates: { canonical: siteConfig.url },
  openGraph: {
    title: "Pavel Veselov | Right hand to the CIO — both sides of IT",
    description: siteConfig.description,
    url: siteConfig.url,
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pavel Veselov | Right hand to the CIO — both sides of IT",
    description: siteConfig.description,
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-white">
      <StructuredData type="Person" />
      <StructuredData type="WebSite" />
      <StructuredData type="ProfessionalService" />
      <FAQStructuredData />
      <Navigation />

      <main>
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 sm:pt-28 sm:pb-24">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_320px] lg:items-end">
            <div className="animate-fade-in">
              <p className="mb-3 text-2xl font-semibold tracking-tight text-gray-950 dark:text-white sm:text-3xl">
                {profile.brandLine}
              </p>
              <p className="mb-5 text-sm font-medium uppercase tracking-[0.22em] text-gray-500 dark:text-gray-400">
                {profile.locationLine}
              </p>
              <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-gray-950 dark:text-white sm:text-5xl lg:text-6xl">
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
                  href={`mailto:${siteConfig.email}?subject=Right%20hand%20to%20CIO%20%2F%20IT%20leadership`}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gray-950 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-800 dark:bg-white dark:text-gray-950 dark:hover:bg-gray-200"
                >
                  <Mail className="h-4 w-4" />
                  Discuss how I can help
                </a>
                <a
                  href="#how-i-engage"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-800 transition-colors hover:border-gray-900 hover:text-gray-950 dark:border-gray-700 dark:text-gray-200 dark:hover:border-gray-300 dark:hover:text-white"
                >
                  How I engage
                  <ArrowRight className="h-4 w-4" />
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
                  Inside: Head of IT for a multi-country commodity trading
                  group. Outside: BearingPoint SAP S/4HANA programmes. Plus a
                  $100M Norilsk Nickel portfolio.
                </p>
                <p>
                  Useful to a CIO who needs capacity without politics — or to a
                  CEO/CFO who wants someone who has sat on both sides of the SI
                  table.
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

        <section
          id="how-i-engage"
          className="container mx-auto scroll-mt-20 px-4 py-16 sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <p className="text-sm font-medium uppercase tracking-[0.22em] text-gray-500 dark:text-gray-400">
                How I engage
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-gray-950 dark:text-white">
                Three ways CIOs and CEOs use me.
              </h2>
              <p className="mt-4 leading-7 text-gray-600 dark:text-gray-300">
                Same person. Different mandate — from clearing a CIO’s backlog
                to owning the function when the seat is empty.
              </p>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {profile.engagementModels.map((model) => (
                <article
                  key={model.title}
                  className="rounded-2xl border border-gray-200 p-6 dark:border-gray-800"
                >
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-gray-500 dark:text-gray-400">
                    {model.subtitle}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-gray-950 dark:text-white">
                    {model.title}
                  </h3>
                  <p className="mt-3 leading-7 text-gray-600 dark:text-gray-300">
                    {model.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="where-i-help"
          className="border-t border-gray-200 dark:border-gray-800"
        >
          <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-6xl">
              <div className="max-w-2xl">
                <p className="text-sm font-medium uppercase tracking-[0.22em] text-gray-500 dark:text-gray-400">
                  Where I help
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-gray-950 dark:text-white">
                  Technology leadership when the stakes are commercial.
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
          </div>
        </section>

        <section
          id="experience"
          className="border-t border-gray-200 dark:border-gray-800"
        >
          <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-6xl">
              <div className="grid gap-10 lg:grid-cols-[280px_1fr]">
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.22em] text-gray-500 dark:text-gray-400">
                    Selected experience
                  </p>
                  <h2 className="mt-3 text-3xl font-semibold tracking-tight text-gray-950 dark:text-white">
                    Trading IT, SAP programmes, and delivery at scale.
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

        <section
          id="contact"
          className="border-t border-gray-200 dark:border-gray-800"
        >
          <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-6xl rounded-3xl bg-gray-50 p-8 dark:bg-gray-900/60 sm:p-10">
              <p className="text-sm font-medium uppercase tracking-[0.22em] text-gray-500 dark:text-gray-400">
                Contact
              </p>
              <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-gray-950 dark:text-white">
                CIO needs capacity — or the business needs someone who has
                owned both sides of IT?
              </h2>
              <p className="mt-4 max-w-3xl leading-7 text-gray-600 dark:text-gray-300">
                Best fit: a CIO who wants a senior operator on programmes and
                vendors, or a CEO/CFO who wants a second look without a
                consulting theatre. Dubai resident. Available immediately.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={`mailto:${siteConfig.email}?subject=Right%20hand%20to%20CIO`}
                  className="inline-flex items-center gap-2 rounded-full bg-gray-950 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-800 dark:bg-white dark:text-gray-950 dark:hover:bg-gray-200"
                >
                  <Mail className="h-4 w-4" />
                  {siteConfig.email}
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
        <div className="mx-auto flex max-w-6xl flex-col gap-4 border-t border-gray-200 pt-8 text-sm text-gray-500 dark:border-gray-800 dark:text-gray-400">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
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
        </div>
      </footer>
    </div>
  );
}
