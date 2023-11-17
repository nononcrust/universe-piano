import { AdminPageTitle } from "@/components/admin/admin-page-title";
import { AuditionForm } from "@/components/admin/audition-form";

export default function AdminAuditionCreatePage() {
  return (
    <main className="container">
      <AdminPageTitle title="오디션 결과 추가" />
      <AuditionForm mode="create" />
    </main>
  );
}
