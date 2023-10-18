import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

interface PaginationProps {
  className?: string;
  currentPage: number;
  totalPage: number;
  onClick: (page: number) => void;
}

export const Pagination = ({ className, currentPage, totalPage, onClick }: PaginationProps) => {
  const renderPagination = () => {
    if (totalPage <= 5) {
      return Array(totalPage)
        .fill(0)
        .map((_, index) => (
          <PaginationButton
            page={index + 1}
            key={index}
            isActive={currentPage === index + 1}
            onClick={() => onClick(index + 1)}
          />
        ));
    }

    if (currentPage <= 4) {
      return (
        <>
          {Array(5)
            .fill(0)
            .map((_, index) => (
              <PaginationButton
                page={index + 1}
                key={index}
                isActive={currentPage === index + 1}
                onClick={() => onClick(index + 1)}
              />
            ))}
          <PaginationEllipsis />
          <PaginationButton
            page={totalPage}
            isActive={currentPage === totalPage}
            onClick={() => onClick(totalPage)}
          />
        </>
      );
    }

    if (currentPage > 4 && currentPage + 2 < totalPage) {
      return (
        <>
          <PaginationButton page={1} isActive={currentPage === 1} onClick={() => onClick(1)} />
          <PaginationEllipsis />
          {Array(3)
            .fill(0)
            .map((_, index) => (
              <PaginationButton
                page={currentPage - 2 + index}
                key={index}
                isActive={currentPage === currentPage - 1 + index}
                onClick={() => onClick(currentPage - 1 + index)}
              />
            ))}
          {currentPage + 2 < totalPage && <PaginationEllipsis />}
          {currentPage + 2 < totalPage && (
            <PaginationButton
              page={totalPage}
              isActive={currentPage === totalPage}
              onClick={() => onClick(totalPage)}
            />
          )}
        </>
      );
    }

    if (currentPage > totalPage - 4) {
      return (
        <>
          <PaginationButton page={1} isActive={currentPage === 1} onClick={() => onClick(1)} />
          <PaginationEllipsis />
          {Array(5)
            .fill(0)
            .map((_, index) => (
              <PaginationButton
                page={totalPage - 4 + index}
                key={index}
                isActive={currentPage === totalPage - 4 + index}
                onClick={() => onClick(totalPage - 4 + index)}
              />
            ))}
        </>
      );
    }
  };

  return <div className={cn("flex gap-1", className)}>{renderPagination()}</div>;
};

interface PaginationButtonProps {
  page: number;
  isActive: boolean;
  onClick: () => void;
}

const PaginationButton = ({ page, isActive, onClick }: PaginationButtonProps) => {
  return (
    <Button className="h-8 w-8" variant={isActive ? "default" : "link"} onClick={onClick}>
      {page}
    </Button>
  );
};

export const PaginationEllipsis = () => {
  return <div className="flex h-8 w-8 items-center justify-center">...</div>;
};