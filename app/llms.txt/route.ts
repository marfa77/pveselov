import { siteConfig } from "@/lib/config";
import { libraryEntries, libraryMeta, readingPath } from "@/lib/library";
import { playbookMeta, playbookPhases } from "@/lib/playbook";
import {
  getAllSecuritySteps,
  securityPlaybookMeta,
  securityPlaybookPhases,
} from "@/lib/security-playbook";
import { securitySources } from "@/lib/security-sources";
import { aiExplainedMeta } from "@/lib/ai-explained";
import { securityExplainedMeta } from "@/lib/security-explained";
import { tradingGuides, tradingMeta } from "@/lib/trading";

export const dynamic = "force-static";

export function GET() {
  const playbookUrl = `${siteConfig.url}${playbookMeta.path}`;
  const securityUrl = `${siteConfig.url}${securityPlaybookMeta.path}`;
  const securityStepCount = getAllSecuritySteps().length;
  const lines = [
    "# Pavel Veselov",
    "",
    `> ${siteConfig.description}`,
    "",
    "## Profile",
    "",
    `- [Pavel Veselov — right hand to the CIO](${siteConfig.url}/): experience, engagement models and contact.`,
    "",
    `## ${playbookMeta.title}`,
    "",
    `- [${playbookMeta.shortTitle}](${playbookUrl}): living checklist for CIOs building AI in the enterprise, version ${playbookMeta.version}, updated ${playbookMeta.lastUpdatedLabel}. Every step cites its research.`,
    `- [${aiExplainedMeta.title}](${siteConfig.url}${aiExplainedMeta.path}): ${aiExplainedMeta.description}`,
    ...playbookPhases.map(
      (phase, index) =>
        `- Phase ${index + 1}, ${phase.title}: ${phase.steps.map((step) => `${step.id} ${step.title}`).join("; ")}.`,
    ),
    "",
    `## ${securityPlaybookMeta.title}`,
    "",
    `- [${securityPlaybookMeta.shortTitle}](${securityUrl}): ${securityStepCount}-step checklist for Heads of IT without a separate CISO, version ${securityPlaybookMeta.version}, updated ${securityPlaybookMeta.lastUpdatedLabel}. Built on ${securitySources.length} public frameworks (NIST, CIS, MITRE ATT&CK, CISA, and others).`,
    `- [${securityExplainedMeta.title}](${siteConfig.url}${securityExplainedMeta.path}): ${securityExplainedMeta.description}`,
    ...securityPlaybookPhases.map(
      (phase, index) =>
        `- Phase ${index + 1}, ${phase.title}: ${phase.steps.map((step) => `${step.id} ${step.title}`).join("; ")}.`,
    ),
    "",
    `## ${tradingMeta.title}`,
    "",
    `- [${tradingMeta.title}](${siteConfig.url}${tradingMeta.path}): ${tradingMeta.description}`,
    ...tradingGuides.map(
      (guide) => `- [${guide.shortTitle}](${siteConfig.url}${guide.path}): ${guide.description}`,
    ),
    "",
    `## ${libraryMeta.title}`,
    "",
    `- [${libraryMeta.title}](${siteConfig.url}${libraryMeta.path}): the research behind the playbook. Last reviewed ${libraryMeta.lastReviewedLabel}.`,
    "",
    ...readingPath.flatMap((group) => [
      `### ${group.title.replace(/^\d+\.\s*/, "")}`,
      "",
      ...group.slugs.map((slug) => {
        const entry = libraryEntries.find((item) => item.slug === slug)!;
        return `- [${entry.title}](${siteConfig.url}${libraryMeta.path}/${entry.slug}): ${entry.publisher}, ${entry.publishedLabel}. ${entry.oneLiner}`;
      }),
      "",
    ]),
  ];

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
