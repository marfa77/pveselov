import Image from "next/image";
import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { JsonLd } from "@/components/library/JsonLd";
import { LibraryFooter } from "@/components/library/LibraryFooter";
import { siteConfig } from "@/lib/config";
import { tradingMeta, type TradingGuide } from "@/lib/trading";

export function GuideArticle({ guide }: { guide: TradingGuide }) {
  const pageUrl = `${siteConfig.url}${guide.path}`;
  const sibling = guide.path.endsWith("/integration") ? "setup" : "integration";
  const other = sibling === "setup" ? "/trading/setup" : "/trading/integration";
  const otherLabel = sibling === "setup" ? "The setup from zero" : "The pipes between them";

  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.description,
    url: pageUrl,
    inLanguage: "en",
    datePublished: tradingMeta.updated,
    dateModified: tradingMeta.updated,
    author: { "@type": "Person", name: "Pavel Veselov", url: siteConfig.url },
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Pavel Veselov", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: tradingMeta.title, item: `${siteConfig.url}${tradingMeta.path}` },
      { "@type": "ListItem", position: 3, name: guide.shortTitle, item: pageUrl },
    ],
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-white">
      <JsonLd data={article} />
      <JsonLd data={breadcrumb} />
      <Navigation />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mx-auto max-w-3xl pt-16 pb-6 sm:pt-24">
          <p className="text-sm font-medium uppercase tracking-[0.22em] text-gray-500">
            <Link href={tradingMeta.path} className="hover:text-gray-950 dark:hover:text-white">
              {guide.kicker}
            </Link>
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">{guide.title}</h1>
          <div className="mt-6 space-y-4">
            {guide.lede.map((paragraph) => (
              <p key={paragraph} className="text-lg leading-8 text-gray-600 dark:text-gray-300">
                {paragraph}
              </p>
            ))}
          </div>
          <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
            By{" "}
            <Link href="/" className="font-medium text-gray-700 hover:underline dark:text-gray-300">
              Pavel Veselov
            </Link>{" "}
            · Updated <time dateTime={tradingMeta.updated}>{tradingMeta.updatedLabel}</time>
            {" · "}
            <Link href={other} className="font-medium text-gray-700 hover:underline dark:text-gray-300">
              {otherLabel}
            </Link>
          </p>
          <nav aria-label="Sections" className="mt-8 grid gap-2 sm:grid-cols-2">
            {guide.sections.map((section, index) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-700 hover:border-gray-400 dark:border-gray-800 dark:text-gray-300"
              >
                <span className="font-medium text-gray-950 dark:text-white">{index + 1}. </span>
                {section.title}
              </a>
            ))}
          </nav>
        </header>

        <div className="mx-auto max-w-3xl pb-20">
          {guide.sections.map((section) => (
            <article key={section.id} id={section.id} className="border-t border-gray-200 py-14 dark:border-gray-800">
              <h2 className="text-3xl font-semibold tracking-tight">{section.title}</h2>
              {section.figures?.map((figure) => (
                <figure key={figure.src} className="mt-6">
                  <Image
                    src={figure.src}
                    width={1080}
                    height={figure.height}
                    alt={figure.alt}
                    className="h-auto w-full rounded-2xl border border-gray-200 dark:border-gray-800"
                  />
                </figure>
              ))}
              {section.blocks.map((block, index) => {
                if (block.kind === "p") {
                  return (
                    <p key={index} className="mt-4 text-lg leading-8 text-gray-700 dark:text-gray-300">
                      {block.text}
                    </p>
                  );
                }
                if (block.kind === "list") {
                  return (
                    <ul key={index} className="mt-6 grid gap-3 sm:grid-cols-2">
                      {block.items.map((item) => {
                        const split = item.match(/^(.{2,48}?)\.\s+([\s\S]+)$/);
                        const title = split?.[1];
                        const body = split?.[2] ?? item;
                        return (
                          <li
                            key={item}
                            className="rounded-2xl border border-gray-200 px-4 py-4 dark:border-gray-800"
                          >
                            {title ? (
                              <>
                                <p className="font-medium text-gray-950 dark:text-white">{title}</p>
                                <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-300">{body}</p>
                              </>
                            ) : (
                              <p className="text-base leading-6 text-gray-700 dark:text-gray-300">{body}</p>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  );
                }
                return (
                  <div key={index} className="mt-6 overflow-x-auto">
                    <table className="w-full min-w-[720px] border-collapse text-left text-sm leading-6">
                      <thead>
                        <tr className="border-b border-gray-200 dark:border-gray-800">
                          {block.headers.map((header) => (
                            <th key={header} className="py-2 pr-4 align-bottom font-medium text-gray-950 dark:text-white">
                              {header}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {block.rows.map((row) => (
                          <tr key={row[0]} className="border-b border-gray-100 align-top dark:border-gray-900">
                            {row.map((cell, cellIndex) => (
                              <td
                                key={cellIndex}
                                className={
                                  cellIndex === 0
                                    ? "py-3 pr-4 font-medium text-gray-950 dark:text-white"
                                    : "py-3 pr-4 text-gray-600 dark:text-gray-300"
                                }
                              >
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                );
              })}
            </article>
          ))}
        </div>
      </main>
      <LibraryFooter />
    </div>
  );
}
