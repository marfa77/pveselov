import type { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { LibraryFooter } from "@/components/library/LibraryFooter";
import { siteConfig } from "@/lib/config";
import { podcastEpisodes, podcastMeta } from "@/lib/podcast";
import { playbookMeta } from "@/lib/playbook";

const pageUrl = `${siteConfig.url}${podcastMeta.path}`;
const feedUrl = `${siteConfig.url}${podcastMeta.feedPath}`;

export const metadata: Metadata = {
  title: "Podcast: Building AI in the Enterprise",
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
  return (
    <div className="min-h-screen bg-white text-gray-950 dark:bg-gray-950 dark:text-gray-50">
      <Navigation />
      <main className="mx-auto max-w-3xl px-6 pb-24 pt-16">
        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
          <Link href={playbookMeta.path} className="hover:text-gray-950 dark:hover:text-white">
            AI playbook
          </Link>
          {" / "}
          Podcast
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{podcastMeta.title}</h1>
        <p className="mt-4 text-lg leading-relaxed text-gray-600 dark:text-gray-300">{podcastMeta.description}</p>

        <div className="mt-8 flex flex-wrap gap-3 text-sm">
          <a
            href={feedUrl}
            className="rounded-full bg-gray-950 px-4 py-2 font-medium text-white hover:bg-gray-800 dark:bg-white dark:text-gray-950 dark:hover:bg-gray-200"
          >
            RSS feed
          </a>
          <Link
            href={playbookMeta.path}
            className="rounded-full border border-gray-300 px-4 py-2 font-medium hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-900"
          >
            Written checklist
          </Link>
        </div>

        <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">
          Feed URL for Apple Podcasts, Spotify, Overcast, and others:{" "}
          <a href={feedUrl} className="underline underline-offset-2">
            {feedUrl}
          </a>
        </p>

        <ol className="mt-12 space-y-8">
          {podcastEpisodes.map((ep) => {
            const audioSrc = `/podcast/audio/${ep.audioFile}`;
            return (
              <li key={ep.slug} id={ep.audioFile.replace(/\.mp3$/, "")} className="border-t border-gray-200 pt-8 dark:border-gray-800">
                <p className="text-sm text-gray-500">Episode {ep.number}</p>
                <h2 className="mt-1 text-xl font-semibold tracking-tight">{ep.title}</h2>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{ep.subtitle}</p>
                <p className="mt-3 text-gray-600 dark:text-gray-300">{ep.summary}</p>
                <audio className="mt-4 w-full" controls preload="none" src={audioSrc}>
                  <a href={audioSrc}>Download MP3</a>
                </audio>
                <p className="mt-2 text-sm">
                  <Link href={playbookMeta.path} className="underline underline-offset-2">
                    Open the playbook
                  </Link>
                </p>
              </li>
            );
          })}
        </ol>
      </main>
      <LibraryFooter />
    </div>
  );
}
