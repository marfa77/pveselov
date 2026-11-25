import type { Metadata } from "next";
import { GuideArticle } from "@/components/trading/GuideArticle";
import { siteConfig } from "@/lib/config";
import { integrationGuide } from "@/lib/trading";

const pageUrl = `${siteConfig.url}${integrationGuide.path}`;

export const metadata: Metadata = {
  title: integrationGuide.shortTitle,
  description: integrationGuide.description,
  alternates: { canonical: pageUrl },
  openGraph: {
    title: integrationGuide.title,
    description: integrationGuide.description,
    url: pageUrl,
    type: "article",
  },
};

export default function IntegrationGuidePage() {
  return <GuideArticle guide={integrationGuide} />;
}
