import { Icon } from "@/components/icon";
import { cn } from "@/lib/utils";

interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
  message: string;
  action?: React.ReactNode;
}

export const EmptyState = ({ className, message, action, ...props }: EmptyStateProps) => {
  return (
    <div
      className={cn("flex w-full flex-col items-center justify-center gap-4 p-24", className)}
      {...props}
    >
      <Icon.Search className="h-8 w-8 font-medium text-gray-200" strokeWidth={3} />
      <p className="font-medium text-gray-300">{message}</p>
      {action}
    </div>
  );
};
