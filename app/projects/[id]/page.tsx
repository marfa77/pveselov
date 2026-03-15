import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github, Calendar, Tag, CheckCircle2 } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { StructuredData } from "@/components/StructuredData";
import { siteConfig } from "@/lib/config";
import { getProjectById, projects } from "@/lib/projects";
import { cn } from "@/lib/utils";

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const project = getProjectById(params.id);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  const canonicalUrl = `${siteConfig.url}/projects/${project.id}`;
  const metaDescription = (project.longDescription || project.description).slice(0, 160);

  return {
    title: `${project.title} | Pavel Veselov`,
    description: metaDescription,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: `${project.title} | Pavel Veselov`,
      description: metaDescription,
      url: canonicalUrl,
      type: "website",
      images: project.image ? [`${siteConfig.url}${project.image}`] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Pavel Veselov`,
      description: metaDescription,
    },
  };
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = getProjectById(params.id);

  if (!project) {
    notFound();
  }

  const statusColors = {
    live: "bg-green-500/10 text-green-500 border-green-500/20",
    development: "bg-blue-500/10 text-blue-500 border-blue-500/20",
    completed: "bg-gray-500/10 text-gray-500 border-gray-500/20",
    coming: "bg-purple-500/10 text-purple-500 border-purple-500/20",
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <StructuredData type="Project" data={project} />
      <Navigation />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-20">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>

          {/* Header */}
          <div className="mb-8 animate-fade-in">
            <div className="flex items-center gap-3 mb-4">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">
                {project.title}
              </h1>
              <span
                className={cn(
                  "px-3 py-1 text-sm font-medium rounded-full border",
                  statusColors[project.status]
                )}
              >
                {project.status}
              </span>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              {project.description}
            </p>
          </div>

          {/* Meta Info */}
          <div className="flex flex-wrap gap-6 mb-12 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {project.year}
            </div>
            <div className="flex items-center gap-2">
              <Tag className="w-4 h-4" />
              {project.category}
            </div>
          </div>

          {/* Links */}
          {(project.url || project.github) && (
            <div className="flex flex-wrap gap-4 mb-12">
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                  {project.url.includes("apps.apple.com") ? "App Store" : "Website"}
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white rounded-xl font-medium hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
                >
                  <Github className="w-5 h-5" />
                  View Code
                </a>
              )}
            </div>
          )}

          {/* Description */}
          <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {project.longDescription}
            </p>
          </div>

          {/* Features */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800"
                >
                  <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Tech Stack
            </h2>
            <div className="flex flex-wrap gap-3">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-lg bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Related Projects */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Related Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {projects
                .filter((p) => p.id !== project.id && p.category === project.category)
                .slice(0, 2)
                .map((relatedProject) => (
                  <Link
                    key={relatedProject.id}
                    href={`/projects/${relatedProject.id}`}
                    className="p-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
                  >
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                      {relatedProject.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                      {relatedProject.description}
                    </p>
                  </Link>
                ))}
            </div>
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
