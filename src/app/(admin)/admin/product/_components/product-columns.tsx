"use client";

import { ROUTE } from "@/constants/route";
import { Product } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";

export const productColumns: ColumnDef<Product>[] = [
  {
    accessorKey: "name",
    header: "이름",
    cell: ({ row }) => (
      <Link className="hover:underline" href={ROUTE.ADMIN.PRODUCT.EDIT(row.original.id)}>
        {row.getValue("name")}
      </Link>
    ),
  },
  {
    accessorKey: "category.name",
    header: "카테고리",
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
