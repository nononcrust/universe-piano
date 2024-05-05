"use client";

import { USER_ROLE_LABEL } from "@/constants/enum";
import { ROUTE } from "@/constants/route";
import { Role, User } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";

export const userColumns: ColumnDef<User>[] = [
  {
    accessorKey: "name",
    header: "이름",
    cell: ({ row }) => (
      <Link className="hover:underline" href={ROUTE.ADMIN.USER.EDIT(row.original.id)}>
        {row.getValue("name")}
      </Link>
    ),
  },
  {
    accessorKey: "nickname",
    header: "닉네임",
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
    accessorKey: "role",
    header: "등급",
    cell: ({ row }) => USER_ROLE_LABEL[row.getValue("role") as keyof typeof Role],
  },
];
