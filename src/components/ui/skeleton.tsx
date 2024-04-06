import { cn } from "@/lib/utils";

export const Skeleton = ({ className, ...props }: React.ComponentPropsWithoutRef<"div">) => {
  return <div className={cn("animate-pulse rounded-sm bg-content", className)} {...props} />;
};
