import { Skeleton } from "@/components/ui/skeleton";

interface NoticeListItemProps {
  title: string;
  createdAt: string;
}

export const NoticeListItem = ({ title, createdAt }: NoticeListItemProps) => {
  return (
    <li className="flex cursor-pointer flex-col py-4 transition">
      <p className="font-medium md:text-lg">{title}</p>
      <p className="text-sub text-sm">{createdAt}</p>
    </li>
  );
};

const NoticeListItemSkeleton = () => {
  return (
    <div className="py-4">
      <Skeleton className="h-[28px] w-full md:w-96" />
      <Skeleton className="mt-1 h-[16px] w-32" />
    </div>
  );
};

NoticeListItem.Skeleton = NoticeListItemSkeleton;
