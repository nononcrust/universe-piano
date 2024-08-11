import { SupportForm } from "@/app/(admin)/admin/support/create/_components/support-form";
import { AdminPageTitle } from "@/components/admin/admin-page-title";

export default function AdminSupportCreatePage() {
  return (
    <main className="container">
      <AdminPageTitle title="도움말 추가" />
      <SupportForm mode="create" />
    </main>
  );
}
