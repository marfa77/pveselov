import Link from "next/link";
import { ArrowRight, Sparkles, Code, Zap, Brain } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { ProjectCard } from "@/components/ProjectCard";
import { StructuredData } from "@/components/StructuredData";
import { FAQStructuredData } from "@/components/FAQStructuredData";
import { projects } from "@/lib/projects";

export default function Home() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <StructuredData type="Organization" />
      <StructuredData type="WebSite" />
      <StructuredData type="ItemList" data={{ projects }} />
      <FAQStructuredData />
      <Navigation />

      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 mb-8">
            <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
              PIXID Studio
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            Expert AI Development & Web Development Services
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Innovative Digital Products
            </span>
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            PIXID Studio specializes in AI development, web development, and SaaS platform creation. We build cutting-edge digital products including EdTech solutions, automation tools, enterprise software, and AI-powered applications using Next.js, TypeScript, and modern technologies.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors"
            >
              View All Projects
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white rounded-xl font-medium hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              {projects.length}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Projects
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              {projects.filter(p => p.status === "live").length}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Live Products
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              150+
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Countries Supported
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              100+
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Features
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Featured Projects
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Our latest and most impactful work
              </p>
            </div>
            <Link
              href="/projects"
              className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
            >
              View all
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <div
                key={project.id}
                style={{ animationDelay: `${index * 0.1}s` }}
                className="animate-fade-in"
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              What We Do
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              We specialize in building innovative solutions across multiple domains
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                AI & Machine Learning
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Computer vision, NLP, speech recognition, and intelligent automation
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900 flex items-center justify-center mb-4">
                <Code className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Web Development
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Modern web applications with Next.js, React, and TypeScript
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <div className="w-12 h-12 rounded-xl bg-green-100 dark:bg-green-900 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Automation & Bots
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Intelligent bots and automation systems for social media and workflows
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Professional Software Development Services
          </h2>
          
          <div className="prose prose-lg dark:prose-invert max-w-none space-y-6 text-gray-700 dark:text-gray-300">
            <p>
              <strong>PIXID Studio</strong> is a leading software development company specializing in <strong>AI development</strong>, <strong>web development</strong>, and <strong>SaaS platform development</strong>. Our team of expert developers creates innovative digital products that solve real-world business problems.
            </p>
            
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              Our Development Services
            </h3>
            
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>AI Development:</strong> We build AI-powered applications using machine learning, computer vision, natural language processing, and automation technologies.</li>
              <li><strong>Web Development:</strong> Modern web applications built with Next.js, React, TypeScript, and cutting-edge frontend frameworks.</li>
              <li><strong>SaaS Development:</strong> Scalable Software-as-a-Service platforms with subscription management, user authentication, and payment integration.</li>
              <li><strong>EdTech Solutions:</strong> Educational platforms for exam preparation, language learning, and personalized learning experiences.</li>
              <li><strong>Enterprise Software:</strong> B2B platforms, automation tools, and custom business solutions.</li>
              <li><strong>Mobile & Browser Extensions:</strong> Cross-platform mobile apps and Chrome extensions for enhanced productivity.</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              Technologies We Use
            </h3>
            
            <p>
              Our development stack includes <strong>Next.js 14</strong>, <strong>React 18</strong>, <strong>TypeScript</strong>, <strong>NestJS</strong>, <strong>PostgreSQL</strong>, <strong>Prisma</strong>, <strong>Supabase</strong>, <strong>OpenAI</strong>, <strong>TensorFlow.js</strong>, and other modern technologies. We follow best practices for code quality, performance optimization, and SEO.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              Why Choose PIXID Studio?
            </h3>
            
            <ul className="list-disc pl-6 space-y-2">
              <li>Proven track record with <strong>{projects.length} successful projects</strong> and <strong>{projects.filter(p => p.status === "live").length} live products</strong></li>
              <li>Expertise in <strong>AI development</strong> and <strong>machine learning</strong> integration</li>
              <li>Full-stack development capabilities from frontend to backend</li>
              <li>Focus on <strong>SEO optimization</strong>, performance, and user experience</li>
              <li>Agile development methodology with rapid iteration</li>
              <li>Comprehensive support and maintenance services</li>
            </ul>

            <p className="mt-8">
              Explore our <Link href="/projects" className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">portfolio of projects</Link> to see examples of our work, or <Link href="/about" className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">learn more about our services</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section for AI Search */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                What services does PIXID Studio offer?
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                PIXID Studio offers AI development, web development, SaaS platform development, EdTech solutions, automation services, and enterprise software development. We specialize in Next.js, React, TypeScript, NestJS, and AI-powered applications.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                What technologies does PIXID Studio use?
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                We use modern technologies including Next.js 14, React 18, TypeScript, NestJS, PostgreSQL, Prisma, Supabase, OpenAI, TensorFlow.js, and various AI/ML frameworks for computer vision and natural language processing.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                How many projects has PIXID Studio completed?
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                PIXID Studio has completed {projects.length} projects, with {projects.filter(p => p.status === "live").length} live products currently in production. Our portfolio includes AI-powered tools, educational platforms, automation services, and enterprise software.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                What types of AI applications does PIXID Studio build?
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                We build various AI applications including computer vision systems (visa photo processing, face detection), natural language processing tools, automation bots (crypto news, real estate AI), speech-to-text systems, and machine learning models for educational platforms.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                How can I contact PIXID Studio?
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                You can contact PIXID Studio via email at <a href="mailto:customer@pixid.studio" className="text-blue-600 dark:text-blue-400 hover:underline">customer@pixid.studio</a> for inquiries about our development services, project consultations, or collaboration opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} PIXID Studio. All rights reserved.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
            Building the future, one project at a time.
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
