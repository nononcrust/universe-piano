"use client";

import { AdminPageTitle } from "@/components/admin/admin-page-title";
import { DataTable } from "@/components/admin/data-table/data-table";
import { ROUTE } from "@/constants/route";
import { formatDate } from "@/lib/utils";
import { useAuditionList } from "@/services/audition";
import { Audition } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";

export default function AdminAuditionListPage() {
  const { data } = useAuditionList();

  if (!data) return null;

  return (
    <main>
      <AdminPageTitle title="오디션 결과 목록" />
      <DataTable
        columns={auditionColumns}
        data={data}
        searchColumnKey="title"
        searchInputPlaceholder="제목으로 검색"
      />
    </main>
  );
}

export const auditionColumns: ColumnDef<Audition>[] = [
  {
    accessorKey: "title",
    header: "제목",
    cell: ({ row }) => (
      <Link className="hover:underline" href={ROUTE.ADMIN.AUDITION.EDIT(row.original.id)}>
        {row.getValue("title")}
      </Link>
    ),
  },
  {
    accessorKey: "createdAt",
    header: "작성일",
    accessorFn: (row) => formatDate(row.createdAt),
  },
];
