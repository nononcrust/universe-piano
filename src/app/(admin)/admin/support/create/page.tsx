import { AdminPageTitle } from "@/components/admin/admin-page-title";
import { SupportForm } from "@/components/admin/support-form";

export default function AdminSupportCreatePage() {
  return (
    <main>
      <AdminPageTitle title="도움말 추가" />
      <SupportForm mode="create" />
    </main>
  );
}
