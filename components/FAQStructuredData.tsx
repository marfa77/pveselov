import { siteConfig } from "@/lib/config";

export function FAQStructuredData() {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What does Pavel Veselov help CEOs and CFOs with?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Pavel Veselov helps CEOs and CFOs with IT strategy, digital transformation, SAP and ERP programmes, CTRM and trading systems, CFO reporting, data platforms, vendor governance, and mission-critical IT operations."
        }
      },
      {
        "@type": "Question",
        name: "What industries does Pavel Veselov have experience in?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "His experience spans commodities trading, energy analytics, consulting, pharma, enterprise finance systems, infrastructure, and data-heavy international operations."
        }
      },
      {
        "@type": "Question",
        name: "Is Pavel Veselov available for advisory work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Pavel is available for selected executive roles, advisory engagements, and transformation partnerships where technology, finance, operations, vendors, and delivery risk need to be handled together."
        }
      },
      {
        "@type": "Question",
        name: "What is BenchEnergy?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "BenchEnergy is a professional proof point that turns commodities and energy market expertise into structured analytics, trading workflow tooling, expert commentary, and automated publishing."
        }
      },
      {
        "@type": "Question",
        name: "How can I contact Pavel Veselov?",
        acceptedAnswer: {
          "@type": "Answer",
          text: `You can contact Pavel Veselov via email at ${siteConfig.email} or through LinkedIn for selected executive, advisory, and transformation conversations.`
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
    />
  );
}
