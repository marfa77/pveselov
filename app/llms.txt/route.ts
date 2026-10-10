import { siteConfig } from "@/lib/config";
import { libraryEntries, libraryMeta, readingPath } from "@/lib/library";
import { playbookMeta, playbookPhases } from "@/lib/playbook";

export const dynamic = "force-static";

export function GET() {
  const playbookUrl = `${siteConfig.url}${playbookMeta.path}`;
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
    ...playbookPhases.map(
      (phase, index) =>
        `- Phase ${index + 1}, ${phase.title}: ${phase.steps.map((step) => `${step.id} ${step.title}`).join("; ")}.`,
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
