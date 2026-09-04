import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <Navigation />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-20">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="mb-4 text-9xl font-bold text-gray-200 dark:text-gray-800">
            404
          </h1>
          <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
            Page Not Found
          </h2>
          <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-8 py-4 font-medium text-white transition-colors hover:bg-blue-700"
          >
            <Home className="h-5 w-5" />
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
