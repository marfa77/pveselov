import { Metadata } from "next";
import { Navigation } from "@/components/Navigation";
import { ProjectCard } from "@/components/ProjectCard";
import { StructuredData } from "@/components/StructuredData";
import { siteConfig } from "@/lib/config";
import { projects, categories } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Independent projects built to solve very specific problems. Each has its own audience and documentation.",
  openGraph: {
    title: "Projects | Pavel Veselov",
    description: "Independent projects built to solve very specific problems.",
    url: `${siteConfig.url}/projects`,
  },
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <StructuredData type="ItemList" data={{ projects }} />
      <Navigation />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8 animate-fade-in">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Projects
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 max-w-xl">
              Independent projects built to solve very specific problems.
              Each has its own audience and documentation.
            </p>
          </div>

          {/* Categories */}
          <div className="mb-8 flex flex-wrap gap-2 justify-center">
            <button className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium">
              All
            </button>
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={project.id}
                style={{ animationDelay: `${index * 0.05}s` }}
                className="animate-fade-in"
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-gray-200 dark:border-gray-800 mt-20">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} PIXID Studio. All rights reserved.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
            <a 
              href="mailto:customer@pixid.studio" 
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              customer@pixid.studio
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
