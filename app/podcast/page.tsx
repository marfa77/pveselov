import type { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { LibraryFooter } from "@/components/library/LibraryFooter";
import { siteConfig } from "@/lib/config";
import { podcastEpisodes, podcastMeta } from "@/lib/podcast";

const pageUrl = `${siteConfig.url}${podcastMeta.path}`;
const feedUrl = `${siteConfig.url}${podcastMeta.feedPath}`;

export const metadata: Metadata = {
  title: podcastMeta.title,
  description: podcastMeta.description,
  alternates: { canonical: pageUrl },
  openGraph: {
    title: podcastMeta.title,
    description: podcastMeta.description,
    url: pageUrl,
    type: "website",
  },
};

export default function PodcastHubPage() {
  const ai = podcastEpisodes.filter((e) => e.series === "ai");
  const security = podcastEpisodes.filter((e) => e.series === "security");

  return (
    <div className="min-h-screen bg-white text-gray-950 dark:bg-gray-950 dark:text-gray-50">
      <Navigation />
      <main className="mx-auto max-w-3xl px-6 pb-24 pt-16">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">{podcastMeta.title}</h1>
        <p className="mt-4 text-lg leading-relaxed text-gray-600 dark:text-gray-300">{podcastMeta.description}</p>

        <div className="mt-8 flex flex-wrap gap-3 text-sm">
          <a
            href={feedUrl}
            className="rounded-full bg-gray-950 px-4 py-2 font-medium text-white hover:bg-gray-800 dark:bg-white dark:text-gray-950 dark:hover:bg-gray-200"
          >
            RSS feed
          </a>
          <Link
            href="/ai"
            className="rounded-full border border-gray-300 px-4 py-2 font-medium hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-900"
          >
            AI checklist
          </Link>
          <Link
            href="/security"
            className="rounded-full border border-gray-300 px-4 py-2 font-medium hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-900"
          >
            Security checklist
          </Link>
        </div>

        <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">
          Feed URL:{" "}
          <a href={feedUrl} className="underline underline-offset-2">
            {feedUrl}
          </a>
        </p>

        <section className="mt-14">
          <h2 className="text-2xl font-semibold tracking-tight">Season 1 — Building AI in the Enterprise</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Companion to the{" "}
            <Link href="/ai" className="underline underline-offset-2">
              AI playbook
            </Link>
            .
          </p>
          <EpisodeList episodes={ai} />
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-semibold tracking-tight">Season 2 — Securing the Enterprise</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Companion to the{" "}
            <Link href="/security" className="underline underline-offset-2">
              security playbook
            </Link>{" "}
            for Heads of IT without a separate CISO.
          </p>
          <EpisodeList episodes={security} />
        </section>
      </main>
      <LibraryFooter />
    </div>
  );
}

function EpisodeList({ episodes }: { episodes: typeof podcastEpisodes }) {
  return (
    <ol className="mt-8 space-y-8">
      {episodes.map((ep) => {
        const stem = ep.audioFile.replace(/\.mp3$/, "");
        const audioSrc = `/podcast/audio/${ep.audioFile}${ep.number === 1 ? "?v=2026-11-25" : ""}`;
        return (
          <li key={ep.audioFile} id={stem} className="border-t border-gray-200 pt-8 dark:border-gray-800">
            <p className="text-sm text-gray-500">
              S{ep.season}E{String(ep.seasonEpisode).padStart(2, "0")}
            </p>
            <h3 className="mt-1 text-xl font-semibold tracking-tight">{ep.title}</h3>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{ep.subtitle}</p>
            <p className="mt-3 text-gray-600 dark:text-gray-300">{ep.summary}</p>
            <audio className="mt-4 w-full" controls preload="none" src={audioSrc}>
              <a href={audioSrc}>Download MP3</a>
            </audio>
            <p className="mt-2 text-sm">
              <Link href={ep.playbookPath} className="underline underline-offset-2">
                Open the written playbook
              </Link>
            </p>
          </li>
        );
      })}
    </ol>
  );
}
