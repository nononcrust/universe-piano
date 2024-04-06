"use client";

import { ORDER_STATUS_LABEL } from "@/constants/enum";
import { ROUTE } from "@/constants/route";
import { OrderList } from "@/services/order";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";

export const orderColumns: ColumnDef<OrderList[number]>[] = [
  {
    header: "주문번호",
    accessorKey: "number",
    cell: ({ row }) => (
      <Link className="hover:underline" href={ROUTE.ADMIN.ORDER.EDIT(row.original.id)}>
        {row.original.number}
      </Link>
    ),
  },
  {
    accessorFn: (row) => row.user.name,
    header: "이름",
  },
  {
    accessorFn: (row) => row.user.nickname,
    header: "닉네임",
  },
  {
    accessorFn: (row) => row.user.phone,
    header: "연락처",
  },
  {
    accessorFn: (row) => row.user.email,
    header: "이메일",
  },
  {
    accessorFn: (row) => ORDER_STATUS_LABEL[row.status],
    header: "주문 상태",
  },
];
