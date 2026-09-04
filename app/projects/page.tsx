import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: { absolute: "Pavel Veselov" },
  robots: { index: false, follow: true },
  alternates: { canonical: siteConfig.url },
};

export default function ProjectsPage() {
  redirect("/");
}
