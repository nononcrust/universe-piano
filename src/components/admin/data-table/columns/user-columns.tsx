"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { TIER_LABEL } from "@/constants/enum";
import { ROUTE } from "@/constants/route";
import { User } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";

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
    cell: () => null,
  },
  {
    accessorKey: "nickname",
    header: "이름",
    cell: ({ row }) => (
      <Link className="hover:underline" href={ROUTE.ADMIN.USER.EDIT(row.getValue("id"))}>
        {row.getValue("nickname")}
      </Link>
    ),
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
];
