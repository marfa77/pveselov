export function FAQStructuredData() {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What services does PIXID Studio offer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "PIXID Studio offers AI development, web development, SaaS platform development, EdTech solutions, automation services, and enterprise software development. We specialize in Next.js, React, TypeScript, NestJS, and AI-powered applications."
        }
      },
      {
        "@type": "Question",
        name: "What technologies does PIXID Studio use?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We use modern technologies including Next.js 14, React 18, TypeScript, NestJS, PostgreSQL, Prisma, Supabase, OpenAI, TensorFlow.js, and various AI/ML frameworks for computer vision and natural language processing."
        }
      },
      {
        "@type": "Question",
        name: "How many projects has PIXID Studio completed?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "PIXID Studio has completed 8 projects, with 6 live products currently in production. Our portfolio includes AI-powered tools, educational platforms, automation services, trading bots, and enterprise software."
        }
      },
      {
        "@type": "Question",
        name: "What types of AI applications does PIXID Studio build?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We build various AI applications including computer vision systems (visa photo processing, face detection), natural language processing tools, automation bots (crypto news, real estate AI), speech-to-text systems, and machine learning models for educational platforms."
        }
      },
      {
        "@type": "Question",
        name: "How can I contact PIXID Studio?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can contact PIXID Studio via email at customer@pixid.studio for inquiries about our development services, project consultations, or collaboration opportunities."
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
