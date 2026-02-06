import { redirect } from "next/navigation";

// Personal site: main page is the About. No separate About page.
export default function AboutPage() {
  redirect("/");
}
