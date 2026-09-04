import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { siteConfig } from "@/lib/config";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: { absolute: "Pavel Veselov" },
  robots: { index: false, follow: true },
  alternates: { canonical: siteConfig.url },
};

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default function ProjectPage() {
  redirect("/");
}
