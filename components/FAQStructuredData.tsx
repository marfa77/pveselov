import { siteConfig } from "@/lib/config";

export function FAQStructuredData() {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How does Pavel Veselov work with a CIO?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "As a right hand: he takes a real slice of the CIO agenda — programmes, vendors, SAP/CTRM delivery, operating rhythm, or a turnaround workstream — so the CIO stays on strategy and stakeholders. He is not competing for the CIO title.",
        },
      },
      {
        "@type": "Question",
        name: "What does both sides of IT mean?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Pavel has been Head of IT inside a multi-country commodity trading group and has led SAP S/4HANA finance programmes from the integrator side at BearingPoint. He understands client ownership and SI delivery politics.",
        },
      },
      {
        "@type": "Question",
        name: "Does Pavel also take full-time Head of IT roles?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Selected Head of IT / CIO and fractional leadership roles in trading, industrial, and multi-entity groups, alongside advisory and CIO-support mandates.",
        },
      },
      {
        "@type": "Question",
        name: "How can I contact Pavel Veselov?",
        acceptedAnswer: {
          "@type": "Answer",
          text: `Email ${siteConfig.email} or LinkedIn (${siteConfig.links.linkedin}). Dubai resident; available immediately.`,
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
    />
  );
}
