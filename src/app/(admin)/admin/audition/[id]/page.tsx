"use client";

import { AdminPageTitle } from "@/components/admin/admin-page-title";
import { AuditionForm } from "@/components/admin/audition-form";
import { ROUTE } from "@/constants/route";
import { useAuditionDetail } from "@/services/audition";
import { redirect, useParams } from "next/navigation";

export default function AdminAuditionEditPage() {
  const params = useParams<{ id: string }>();

  const { data: audition } = useAuditionDetail({ id: params.id });

  if (audition === null) redirect(ROUTE.ADMIN.AUDITION.LIST);

  if (!audition) return null;

  const defaultValues = {
    title: audition.title,
    content: audition.content,
  };

  return (
    <main className="container">
      <AdminPageTitle title="오디션 결과 수정" />
      <AuditionForm mode="edit" auditionId={params.id} defaultValues={defaultValues} />
    </main>
  );
}
