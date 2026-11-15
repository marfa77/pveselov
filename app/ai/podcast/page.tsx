import type { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { LibraryFooter } from "@/components/library/LibraryFooter";

export const metadata: Metadata = {
  title: "Podcast moved",
  robots: { index: false },
  alternates: { canonical: "https://pveselov.space/podcast" },
};

/** Legacy URL — hub is now /podcast (AI + Security). */
export default function AiPodcastLegacyPage() {
  return (
    <div className="min-h-screen bg-white text-gray-950 dark:bg-gray-950 dark:text-gray-50">
      <Navigation />
      <main className="mx-auto max-w-xl px-6 py-24 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">Podcast hub moved</h1>
        <p className="mt-4 text-gray-600 dark:text-gray-300">
          AI and Security seasons now live together at{" "}
          <Link href="/podcast" className="font-medium underline underline-offset-2">
            pveselov.space/podcast
          </Link>
          . Same RSS feed.
        </p>
        <p className="mt-8">
          <Link
            href="/podcast"
            className="inline-block rounded-full bg-gray-950 px-5 py-3 text-sm font-semibold text-white dark:bg-white dark:text-gray-950"
          >
            Go to the podcast
          </Link>
        </p>
      </main>
      <LibraryFooter />
    </div>
  );
}
