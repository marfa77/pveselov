import type { Metadata } from "next";
import { GuideArticle } from "@/components/trading/GuideArticle";
import { siteConfig } from "@/lib/config";
import { setupGuide } from "@/lib/trading";

const pageUrl = `${siteConfig.url}${setupGuide.path}`;

export const metadata: Metadata = {
  title: setupGuide.shortTitle,
  description: setupGuide.description,
  alternates: { canonical: pageUrl },
  openGraph: {
    title: setupGuide.title,
    description: setupGuide.description,
    url: pageUrl,
    type: "article",
  },
};

export default function SetupGuidePage() {
  return <GuideArticle guide={setupGuide} />;
}
