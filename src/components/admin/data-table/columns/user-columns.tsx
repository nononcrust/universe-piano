"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { ColumnDef } from "@tanstack/react-table";
import { z } from "zod";
import { DataTableRowActions } from "../data-table-row-actions";

export const userSchema = z.object({
  id: z.number(),
  name: z.string(),
  phone: z.string(),
  type: z.union([z.literal("admin"), z.literal("user")]),
});

export type User = z.infer<typeof userSchema>;

export const userColumns: ColumnDef<User>[] = [
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
    accessorKey: "name",
    header: "이름",
  },
  {
    accessorKey: "phone",
    header: "연락처",
  },
  {
    accessorKey: "type",
    header: "유형",
  },
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
];
