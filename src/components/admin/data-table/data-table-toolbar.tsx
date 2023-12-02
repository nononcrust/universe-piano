"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table } from "@tanstack/react-table";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
  searchInputPlaceholder: string;
  searchColumnKey: string;
}

export const DataTableToolbar = <TData,>({
  table,
  searchInputPlaceholder,
  searchColumnKey,
}: DataTableToolbarProps<TData>) => {
  const isFiltered = table.getState().columnFilters.length > 0;

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder={searchInputPlaceholder}
          value={(table.getColumn(searchColumnKey)?.getFilterValue() as string) ?? ""}
          onChange={(event) => table.getColumn(searchColumnKey)?.setFilterValue(event.target.value)}
          className="h-8 w-[150px] lg:w-[250px]"
        />
        {isFiltered && (
          <Button
            variant="secondary"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            필터 초기화
          </Button>
        )}
      </div>
    </div>
  );
};
