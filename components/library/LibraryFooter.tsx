import Link from "next/link";
import { siteConfig } from "@/lib/config";

export function LibraryFooter() {
  return (
    <footer className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-4xl flex-col gap-4 border-t border-gray-200 pt-8 text-sm text-gray-500 dark:border-gray-800 dark:text-gray-400 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()}{" "}
          <Link href="/" className="hover:text-gray-950 dark:hover:text-white">
            Pavel Veselov
          </Link>
        </p>
        <div className="flex flex-wrap gap-5">
          <Link href="/ai" className="hover:text-gray-950 dark:hover:text-white">
            The CIO&apos;s AI Playbook
          </Link>
          <Link href="/ai/library" className="hover:text-gray-950 dark:hover:text-white">
            AI Library
          </Link>
          <a
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-950 dark:hover:text-white"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
