import { AdminPageTitle } from "@/components/admin/admin-page-title";
import { AuditionForm } from "@/components/admin/audition-form";

export default async function AdminNoticeEditPage({ params }: { params: { id: string } }) {
  return (
    <main className="container">
      <AdminPageTitle title="오디션 결과 수정" />
      <AuditionForm mode="edit" auditionId={params.id} />
    </main>
  );
}
