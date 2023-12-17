import { Markdown } from "@/components/markdown";
import fs from "fs";

export default function TermsPrivacyPage() {
  const content = fs.readFileSync("src/contents/policies/terms-of-service.md", "utf8");

  return (
    <main className="container pb-16">
      <Markdown className="prose mt-8 max-w-none md:mt-24" content={content} />
    </main>
  );
}
