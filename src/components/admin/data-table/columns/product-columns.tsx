"use client";

import { ROUTE } from "@/constants/route";
import { Product } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";

export const productColumns: ColumnDef<Product>[] = [
  {
    accessorKey: "name",
    header: "제목",
    cell: ({ row }) => (
      <Link className="hover:underline" href={ROUTE.ADMIN.NOTICE.EDIT(row.original.id)}>
        {row.getValue("name")}
      </Link>
    ),
  },
  {
    accessorKey: "price",
    header: "가격",
    accessorFn: (row) => `${row.price.toLocaleString()}원`,
  },
  {
    accessorKey: "description",
    header: "설명",
  },
];
