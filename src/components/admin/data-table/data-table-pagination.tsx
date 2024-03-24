import { Icon } from "@/components/shared/icon";
import { Button } from "@/components/ui/button";
import { Select, SelectItem } from "@/components/ui/select";
import { Table } from "@tanstack/react-table";

interface DataTablePaginationProps<TData> {
  table: Table<TData>;
}

export const DataTablePagination = <TData,>({ table }: DataTablePaginationProps<TData>) => {
  return (
    <div className="flex items-center justify-between px-2">
      <div className="flex-1 text-sm text-sub">
        {table.getFilteredRowModel().rows.length}개 중{" "}
        {table.getFilteredSelectedRowModel().rows.length}개 선택됨
      </div>
      <div className="flex items-center space-x-6 lg:space-x-8">
        <div className="flex items-center space-x-2">
          <Select
            placeholder={String(table.getState().pagination.pageSize)}
            value={`${table.getState().pagination.pageSize}`}
            onChange={(value) => {
              table.setPageSize(Number(value));
            }}
          >
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <SelectItem key={pageSize} value={`${pageSize}`}>
                {pageSize}
              </SelectItem>
            ))}
          </Select>
          <p className="text-sm font-medium">개 씩</p>
        </div>
        <div className="flex w-[100px] items-center justify-center text-sm font-medium">
          {table.getState().pagination.pageIndex + 1} / {table.getPageCount()} 페이지
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="outlined"
            className="hidden h-8 w-8 p-0 lg:flex"
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
          >
            <span className="sr-only">첫 페이지로 이동</span>
            <Icon.ChevronsLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outlined"
            className="h-8 w-8 p-0"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <span className="sr-only">Go to previous page</span>
            <Icon.ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outlined"
            className="h-8 w-8 p-0"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <span className="sr-only">다음 페이지로 이동</span>
            <Icon.ChevronRight className="h-4 w-4" />
          </Button>
          <Button
            variant="outlined"
            className="hidden h-8 w-8 p-0 lg:flex"
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
          >
            <span className="sr-only">마지막 페이지로 이동</span>
            <Icon.ChevronsRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};
