import { Markdown } from "@/components/common/markdown";
import { allPrivacyPolicies } from "contentlayer/generated";

export default function PrivacyPolicyPage() {
  const content = allPrivacyPolicies[0].body.raw;

  return (
    <main className="container pb-16">
      <Markdown className="prose mt-8 max-w-none md:mt-24" content={content} />
    </main>
  );
}
