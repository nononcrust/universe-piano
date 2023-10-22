"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { ROUTE } from "@/constants/route";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";
import { z } from "zod";
import { DataTableRowActions } from "../data-table-row-actions";

export const noticeSchema = z.object({
  id: z.number(),
  title: z.string(),
  createdAt: z.string(),
});

export type Notice = z.infer<typeof noticeSchema>;

export const noticeColumns: ColumnDef<Notice>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        className="translate-y-[2px]"
      />
    ),
  },
  {
    accessorKey: "id",
    header: "ID",
    cell: ({ row }) => <div className="w-[80px]">{row.getValue("id")}</div>,
  },
  {
    accessorKey: "title",
    header: "제목",
    cell: ({ row }) => (
      <Link className="hover:underline" href={ROUTE.ADMIN.NOTICE.EDIT(row.getValue("id"))}>
        {row.getValue("title")}
      </Link>
    ),
  },
  {
    accessorKey: "createdAt",
    header: "작성일",
  },
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
];
