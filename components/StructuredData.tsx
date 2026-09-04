import { Project } from "@/lib/projects";
import { siteConfig } from "@/lib/config";

interface StructuredDataProps {
  type: "Organization" | "WebSite" | "ItemList" | "Project" | "Person" | "ProfessionalService";
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
          name: "Pavel Veselov Advisory",
          alternateName: "Pavel Veselov",
          url: siteConfig.url,
          logo: {
            "@type": "ImageObject",
            url: `${siteConfig.url}/icon.svg`,
            width: 100,
            height: 100
          },
          description: siteConfig.description,
          numberOfEmployees: {
            "@type": "QuantitativeValue",
            value: "1"
          },
          areaServed: "Worldwide",
          knowsAbout: siteConfig.keywords,
          sameAs: [
            siteConfig.links.linkedin,
            siteConfig.links.github,
            siteConfig.links.tableau
          ],
          contactPoint: {
            "@type": "ContactPoint",
            email: siteConfig.email,
            contactType: "business inquiries",
            availableLanguage: ["English"]
          }
        };
      
      case "Person":
        return {
          "@context": "https://schema.org",
          "@type": "Person",
          "@id": `${siteConfig.url}/#person`,
          name: "Pavel Veselov",
          jobTitle: "Right Hand to the CIO / Head of IT / Fractional IT Lead",
          url: siteConfig.url,
          email: siteConfig.email,
          image: `${siteConfig.url}/avatar.png`,
          description: siteConfig.description,
          address: {
            "@type": "PostalAddress",
            addressLocality: "Dubai",
            addressCountry: "AE"
          },
          alumniOf: [
            {
              "@type": "CollegeOrUniversity",
              name: "Graduate School of Business, University of Cape Town",
              description: "MBA, Business Administration"
            },
            {
              "@type": "CollegeOrUniversity",
              name: "Moscow University of Cooperation"
            }
          ],
          hasCredential: [
            {
              "@type": "EducationalOccupationalCredential",
              name: "MBA",
              credentialCategory: "degree",
              recognizedBy: {
                "@type": "CollegeOrUniversity",
                name: "Graduate School of Business, University of Cape Town"
              }
            },
            {
              "@type": "EducationalOccupationalCredential",
              name: "PMP",
              credentialCategory: "professional certification",
              recognizedBy: {
                "@type": "Organization",
                name: "Project Management Institute"
              }
            }
          ],
          knowsLanguage: ["English", "Russian"],
          hasOccupation: {
            "@type": "Occupation",
            name: "Right Hand to the CIO and Head of IT",
            occupationLocation: {
              "@type": "Country",
              name: "United Arab Emirates"
            },
            skills: siteConfig.keywords
          },
          knowsAbout: [
            "Right hand to CIO",
            "Fractional CIO",
            "Client-side and integrator IT",
            "Second look at IT",
            "IT Strategy",
            "Digital Transformation",
            "Commodities Trading Systems",
            "CTRM",
            "SAP S/4HANA",
            "CFO Systems",
            "Enterprise Reporting",
            "Vendor Management",
            "Technology Advisory",
            "PMP Project Management",
            "MBA Business Administration"
          ],
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
          "@id": `${siteConfig.url}/#website`,
          name: siteConfig.name,
          url: siteConfig.url,
          description: siteConfig.description,
          inLanguage: "en",
          publisher: { "@id": `${siteConfig.url}/#person` },
        };

      case "ProfessionalService":
        return {
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id": `${siteConfig.url}/#advisory-service`,
          name: "CIO Support, Fractional IT Lead & Advisory",
          url: siteConfig.url,
          description:
            "Right-hand support to CIOs, fractional IT leadership, and independent second looks for CEOs/CFOs — from someone with both client-side Head of IT and integrator SAP experience.",
          provider: { "@id": `${siteConfig.url}/#person` },
          areaServed: ["United Arab Emirates", "Gulf Region", "Worldwide"],
          serviceType: [
            "Right Hand to the CIO",
            "Fractional CIO",
            "IT Advisory / Second Look",
            "Digital Transformation",
            "SAP and ERP Transformation",
            "Commodities Trading IT",
            "Vendor and Programme Governance"
          ],
          audience: [
            {
              "@type": "BusinessAudience",
              audienceType: "CEOs"
            },
            {
              "@type": "BusinessAudience",
              audienceType: "CFOs"
            }
          ],
          offers: {
            "@type": "Offer",
            availability: "https://schema.org/InStock",
            businessFunction: "https://schema.org/Consulting"
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
