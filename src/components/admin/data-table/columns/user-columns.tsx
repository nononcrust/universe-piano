"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { TIER_LABEL } from "@/constants/enum";
import { User } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import { DataTableRowActions } from "../data-table-row-actions";

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
    accessorKey: "nickname",
    header: "이름",
    cell: ({ row }) => row.getValue("nickname"),
  },
  {
    accessorKey: "phone",
    header: "연락처",
  },
  {
    accessorKey: "email",
    header: "이메일",
  },
  {
    accessorKey: "tier",
    header: "등급",
    cell: ({ row }) => TIER_LABEL[row.getValue("tier") as keyof typeof TIER_LABEL],
  },
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
];
