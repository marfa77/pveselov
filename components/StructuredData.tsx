import { Project } from "@/lib/projects";

interface StructuredDataProps {
  type: "Organization" | "WebSite" | "ItemList" | "Project";
  data?: any;
}

export function StructuredData({ type, data }: StructuredDataProps) {
  const getStructuredData = () => {
    switch (type) {
      case "Organization":
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "PIXID Studio",
          url: "https://pixid.studio",
          logo: "https://pixid.studio/icon.svg",
          description: "PIXID Studio is a leading software development company specializing in AI development, web development, and SaaS platform development. We build innovative digital products including AI-powered tools, educational platforms, automation services, and enterprise software.",
          sameAs: [
            "https://www.linkedin.com/company/pixid-studio"
          ],
          contactPoint: {
            "@type": "ContactPoint",
            email: "customer@pixid.studio",
            contactType: "customer service"
          }
        };
      
      case "WebSite":
        return {
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "PIXID Studio Portfolio",
          url: "https://pixid.studio",
          description: "Portfolio of innovative digital products and solutions by PIXID Studio",
          potentialAction: {
            "@type": "SearchAction",
            target: "https://pixid.studio/projects?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
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
              url: `https://pixid.studio/projects/${project.id}`,
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
          url: data?.url || `https://pixid.studio/projects/${data?.id}`,
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
