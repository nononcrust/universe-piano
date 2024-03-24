import { PageSubtitle } from "@/components/layout/page-subtitle";
import { PageTitle } from "@/components/layout/page-title";
import { EmptyState } from "@/components/shared/empty-state";

export default function MyAcitivtyPage() {
  return (
    <main className="container pb-16">
      <PageTitle title="활동" />
      <PageSubtitle className="mt-8" title="작성한 댓글" />
      <EmptyState message="작성한 댓글이 없어요." />
    </main>
  );
}
