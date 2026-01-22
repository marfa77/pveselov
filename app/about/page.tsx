import { Metadata } from "next";
import { Navigation } from "@/components/Navigation";
import { StructuredData } from "@/components/StructuredData";
import { siteConfig } from "@/lib/config";
import { Sparkles, Code, Zap, Brain, Target, Users } from "lucide-react";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "About Us | PIXID Studio",
  description: "Learn about PIXID Studio - building innovative digital products and solutions. We specialize in AI-powered tools, educational platforms, automation services, and web development.",
  openGraph: {
    title: "About Us | PIXID Studio",
    description: "Learn about PIXID Studio - building innovative digital products and solutions.",
    url: `${siteConfig.url}/about`,
  },
};

export default function AboutPage() {
  const liveProjects = projects.filter(p => p.status === "live").length;
  const totalFeatures = projects.reduce((acc, p) => acc + p.features.length, 0);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <StructuredData type="Organization" />
      <Navigation />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-20">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 mb-8">
              <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                About PIXID
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Building the Future,
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                One Project at a Time
              </span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              PIXID Studio specializes in creating innovative digital products that solve
              real-world problems using cutting-edge technology.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="text-center p-6 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {projects.length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Projects</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {liveProjects}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Live Products</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {totalFeatures}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Features</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                150+
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Countries</div>
            </div>
          </div>

          {/* Mission */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Our Mission
            </h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                At PIXID Studio, we believe in the power of technology to transform lives
                and solve complex problems. We create products that are not just functional,
                but also intuitive, beautiful, and impactful.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                From AI-powered photo processing to educational platforms and automation
                tools, we build solutions that make a difference. Our focus is on quality,
                innovation, and user experience.
              </p>
            </div>
          </div>

          {/* Expertise */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Our Expertise
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
                <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  AI & Machine Learning
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Computer vision, natural language processing, speech recognition, and
                  intelligent automation systems.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
                <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900 flex items-center justify-center mb-4">
                  <Code className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Web Development
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Modern web applications built with Next.js, React, TypeScript, and
                  cutting-edge frontend technologies.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
                <div className="w-12 h-12 rounded-xl bg-green-100 dark:bg-green-900 flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Automation
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Intelligent bots, workflow automation, and systems that work 24/7 to
                  streamline operations.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
                <div className="w-12 h-12 rounded-xl bg-orange-100 dark:bg-orange-900 flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Educational Technology
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Learning platforms, exam preparation tools, and personalized educational
                  experiences powered by AI.
                </p>
              </div>
            </div>
          </div>

          {/* Values */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Our Values
            </h2>
            <div className="space-y-4">
              <div className="p-6 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Innovation First
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We stay at the forefront of technology, constantly exploring new
                  possibilities and pushing boundaries.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  User-Centric Design
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Every product we build starts with understanding user needs and ends with
                  exceptional user experience.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Quality & Reliability
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We build products that are robust, scalable, and maintainable, ensuring
                  long-term success.
                </p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 border border-blue-200 dark:border-blue-800 text-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Let's Work Together
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Have a project in mind? We'd love to hear from you.
            </p>
            <a
              href="mailto:customer@pixid.studio"
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
