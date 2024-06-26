"use client";

import { Icon } from "@/components/shared/icon";
import { Button } from "@/components/ui/button";
import { DropdownMenu } from "@/components/ui/dropdown-menu";
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
      <DropdownMenu.Trigger asChild>
        <Button variant="ghost" className="data-[state=open]:bg-muted flex h-8 w-8 p-0">
          <Icon.MoreHorizontal className="h-4 w-4" />
          <span className="sr-only">메뉴 열기</span>
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content align="end" className="w-[160px]">
        <DropdownMenu.Item onClick={onEditButtonClick}>수정하기</DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu>
  );
};
