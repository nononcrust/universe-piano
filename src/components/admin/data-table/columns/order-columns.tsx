"use client";

import { TIER_LABEL } from "@/constants/enum";
import { ROUTE } from "@/constants/route";
import { Order } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";

export const orderColumns: ColumnDef<Order>[] = [
  {
    accessorKey: "nickname",
    header: "이름",
    cell: ({ row }) => (
      <Link className="hover:underline" href={ROUTE.ADMIN.USER.EDIT(row.original.id)}>
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
