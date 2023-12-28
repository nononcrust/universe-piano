"use client";

import { Icon } from "@/components/common/icon";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ROUTE } from "@/constants/route";
import { Row } from "@tanstack/react-table";
import { useRouter } from "next/navigation";

interface DataTableRowActionsProps<TData> {
  row: Row<TData>;
}

export const DataTableRowActions = <TData,>({ row }: DataTableRowActionsProps<TData>) => {
  const router = useRouter();

  const onEditButtonClick = () => {
    router.push(ROUTE.ADMIN.NOTICE.EDIT(row.getValue("id")));
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="flex h-8 w-8 p-0 data-[state=open]:bg-muted">
          <Icon.MoreHorizontal className="h-4 w-4" />
          <span className="sr-only">메뉴 열기</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[160px]">
        <DropdownMenuItem onClick={onEditButtonClick}>수정하기</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
