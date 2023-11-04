import { Skeleton } from "../ui/skeleton";

export const NoticeListSkeleton = () => {
  return (
    <div className="py-4">
      <Skeleton className="h-[28px] w-full md:w-96" />
      <Skeleton className="mt-1 h-[16px] w-32" />
    </div>
  );
};
