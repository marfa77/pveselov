import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { StructuredData } from "@/components/StructuredData";
import { siteConfig } from "@/lib/config";

export const metadata = {
  alternates: { canonical: siteConfig.url },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <StructuredData type="Person" />
      <Navigation />

      {/* 1. Hero */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 sm:pt-32 sm:pb-28">
        <div className="max-w-2xl mx-auto animate-fade-in">
          <div className="mb-8">
            <Image
              src="/avatar.png"
              alt="Pavel Veselov"
              width={120}
              height={120}
              className="rounded-full object-cover border-2 border-gray-200 dark:border-gray-700"
              priority
            />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Pavel Veselov
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            I build small, focused tools that solve very specific problems.
            Most of my work is around education, compliance, and automation.
          </p>
        </div>
      </section>

      {/* 2. What I'm working on */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-6">
            What I'm working on
          </h2>
          <ul className="space-y-6">
            <li>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-2">
                <span className="font-semibold text-gray-900 dark:text-white">PixID</span>
                <span className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                  Passport & visa photo compliance tool
                </span>
              </div>
              <a
                href="https://pixid.studio"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 mt-1 text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
              >
                <ArrowRight className="w-4 h-4" />
                pixid.studio
              </a>
            </li>
            <li>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-2">
                <span className="font-semibold text-gray-900 dark:text-white">Prep2Go</span>
                <span className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                  Exam preparation focused on real failure modes
                </span>
              </div>
              <a
                href="https://www.prep2go.study"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 mt-1 text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
              >
                <ArrowRight className="w-4 h-4" />
                prep2go.study
              </a>
            </li>
          </ul>
          <p className="mt-8">
            <Link
              href="/projects"
              className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
            >
              All projects →
            </Link>
          </p>
        </div>
      </section>

      {/* 3. How I think */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-6">
            How I think
          </h2>
          <div className="prose prose-gray dark:prose-invert max-w-none space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
            <p>
              I tend to work on problems where people fail not because they lack information,
              but because systems are rigid, automated, or poorly explained.
            </p>
            <p>
              Most tools try to add more content.
              I usually try to remove friction instead.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Background — data, systems, edge cases (no titles, no CV tone) */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-2xl mx-auto">
          <div className="prose prose-gray dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 leading-relaxed">
            <p>
              Before working on independent products, I spent years working with data-heavy systems and cross-functional teams.
              That experience shaped how I think about edge cases, automation, and why systems fail in practice.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Minimal credibility */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-2xl mx-auto">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Built and shipped multiple independent products used internationally.
          </p>
        </div>
      </section>

      {/* 6. Links (bottom) */}
      <footer className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-2xl mx-auto flex flex-wrap items-center gap-6 text-sm">
          <a
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={siteConfig.links.reddit}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            Reddit
          </a>
          <a
            href={siteConfig.links.quora}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            Quora
          </a>
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href={siteConfig.links.tableau}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            Tableau
          </a>
        </div>
        <div className="max-w-2xl mx-auto mt-6 pt-6 border-t border-gray-200 dark:border-gray-800 space-y-1">
          <p className="text-xs text-gray-400 dark:text-gray-500">
            <a href={`mailto:${siteConfig.email}`} className="hover:text-gray-600 dark:hover:text-gray-400 transition-colors">
              {siteConfig.email}
            </a>
          </p>
          <p className="text-xs text-gray-400 dark:text-gray-500">
            © {new Date().getFullYear()} Pavel Veselov
          </p>
        </div>
      </footer>
    </div>
  );
}
