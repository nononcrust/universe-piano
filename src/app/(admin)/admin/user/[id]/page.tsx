"use client";

import { AdminPageTitle } from "@/components/admin/admin-page-title";
import { UserForm } from "@/components/admin/user-form";
import { useUserDetail } from "@/services/user";
import { useParams } from "next/navigation";

export default function AdminUserEditPage() {
  const params = useParams() as { id: string };

  const { data: user } = useUserDetail({ id: params.id });

  if (!user) return null;

  return (
    <main className="container">
      <AdminPageTitle title="유저 수정" />
      <UserForm user={user} />
    </main>
  );
}
