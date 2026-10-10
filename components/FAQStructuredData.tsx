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
        name: "What does every side of the IT table mean?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Pavel has been Head of IT inside a multi-country commodity trading group, has led SAP S/4HANA finance programmes from the integrator side at BearingPoint, and has spent the past year hands-on with applied AI. He understands client ownership, SI delivery politics, and what AI really does in operations.",
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
          text: `Email ${siteConfig.email} or LinkedIn (${siteConfig.links.linkedin}). UAE Golden Visa holder, based between Dubai and Porto; available immediately.`,
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
