"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight, Github, Sparkles } from "lucide-react";
import { Project } from "@/lib/projects";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const router = useRouter();
  const statusColors = {
    live: "bg-green-500/10 text-green-500 border-green-500/20",
    development: "bg-blue-500/10 text-blue-500 border-blue-500/20",
    completed: "bg-gray-500/10 text-gray-500 border-gray-500/20",
    coming: "bg-purple-500/10 text-purple-500 border-purple-500/20",
  };

  const handleCardClick = () => {
    router.push(`/projects/${project.id}`);
  };

  return (
    <div className="group relative">
      <div 
        className="relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] animate-fade-in cursor-pointer"
        onClick={handleCardClick}
      >
        {/* Status Badge */}
        <div className="absolute top-4 right-4">
          <span
            className={cn(
              "px-2.5 py-1 text-xs font-medium rounded-full border",
              statusColors[project.status]
            )}
          >
            {project.status}
          </span>
        </div>

        {/* Content */}
        <div className="space-y-4">
          {/* Title and Icon */}
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                {project.category} • {project.year}
              </p>
            </div>
            <Sparkles className="w-5 h-5 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>

          {/* Description + audience (where to go next) */}
          <p className="text-gray-600 dark:text-gray-300">
            {project.description}
          </p>
          {project.audience && (
            <p className="text-sm text-gray-500 dark:text-gray-400 italic">
              {project.audience}
            </p>
          )}

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {project.techStack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-xs font-medium rounded-md bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 4 && (
              <span className="px-2.5 py-1 text-xs font-medium rounded-md bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                +{project.techStack.length - 4}
              </span>
            )}
          </div>

          {/* Links — clear "where to go" (navigation, not selling) */}
          <div 
            className="flex items-center gap-4 pt-2 border-t border-gray-200 dark:border-gray-800"
            onClick={(e) => e.stopPropagation()}
          >
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
              >
                <ArrowRight className="w-4 h-4" />
                → {project.url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")}
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-400 hover:underline"
              >
                <Github className="w-4 h-4" />
                Code
              </a>
            )}
          </div>
        </div>

        {/* Hover Effect Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 transition-all duration-300 rounded-2xl pointer-events-none" />
      </div>
    </div>
  );
}
