"use client";

import { ROUTE } from "@/constants/route";
import { formatDate } from "@/lib/utils";
import { Audition } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";

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
