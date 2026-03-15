import { Project } from "@/lib/projects";
import { siteConfig } from "@/lib/config";

interface StructuredDataProps {
  type: "Organization" | "WebSite" | "ItemList" | "Project" | "Person";
  data?: any;
}

export function StructuredData({ type, data }: StructuredDataProps) {
  const getStructuredData = () => {
    switch (type) {
      case "Organization":
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          "@id": `${siteConfig.url}/#organization`,
          name: "PIXID Studio",
          alternateName: "PIXID",
          url: siteConfig.url,
          logo: {
            "@type": "ImageObject",
            url: `${siteConfig.url}/icon.svg`,
            width: 100,
            height: 100
          },
          description: "PIXID Studio is a leading software development company specializing in AI development, web development, and SaaS platform development. We build innovative digital products including AI-powered tools, educational platforms, automation services, and enterprise software.",
          foundingDate: "2025",
          numberOfEmployees: {
            "@type": "QuantitativeValue",
            value: "1-10"
          },
          areaServed: "Worldwide",
          knowsAbout: [
            "AI Development",
            "Web Development",
            "SaaS Development",
            "EdTech Development",
            "Automation Services",
            "Next.js",
            "React",
            "TypeScript",
            "Machine Learning",
            "Computer Vision"
          ],
          sameAs: [
            "https://www.linkedin.com/company/pixid-studio"
          ],
          contactPoint: {
            "@type": "ContactPoint",
            email: siteConfig.email,
            contactType: "customer service",
            availableLanguage: ["English"]
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "5",
            reviewCount: "8"
          }
        };
      
      case "Person":
        return {
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Pavel Veselov",
          url: siteConfig.url,
          email: siteConfig.email,
          image: `${siteConfig.url}/avatar.png`,
          description: siteConfig.description,
          sameAs: [
            siteConfig.links.linkedin,
            siteConfig.links.reddit,
            siteConfig.links.quora,
            siteConfig.links.github,
            siteConfig.links.tableau,
          ].filter(Boolean),
        };

      case "WebSite":
        return {
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: siteConfig.name,
          url: siteConfig.url,
          description: siteConfig.description,
          publisher: { "@type": "Person", name: "Pavel Veselov" },
        };
      
      case "ItemList":
        return {
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: data?.projects?.map((project: Project, index: number) => ({
            "@type": "ListItem",
            position: index + 1,
            item: {
              "@type": "SoftwareApplication",
              name: project.title,
              url: `${siteConfig.url}/projects/${project.id}`,
              description: project.description,
              applicationCategory: project.category,
              operatingSystem: "Web"
            }
          })) || []
        };
      
      case "Project":
        return {
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: data?.title,
          url: data?.url || `${siteConfig.url}/projects/${data?.id}`,
          description: data?.description,
          applicationCategory: data?.category,
          operatingSystem: "Web",
          offers: {
            "@type": "Offer",
            availability: "https://schema.org/InStock"
          },
          featureList: data?.features || []
        };
      
      default:
        return null;
    }
  };

  const structuredData = getStructuredData();

  if (!structuredData) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
