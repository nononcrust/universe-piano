import { Skeleton } from "../ui/skeleton";

interface NoticeListItemProps {
  title: string;
  createdAt: string;
}

export const NoticeListItem = ({ title, createdAt }: NoticeListItemProps) => {
  return (
    <li className="flex cursor-pointer flex-col py-4 transition md:hover:translate-x-2">
      <p className="text-lg font-medium">{title}</p>
      <p className="text-sm text-muted-foreground">{createdAt}</p>
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
