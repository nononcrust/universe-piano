import { Icon } from "./icon";

interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
  message: string;
}

export const EmptyState = ({ message }: EmptyStateProps) => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-4 p-24">
      <Icon.Search className="h-8 w-8 font-medium text-gray-200" strokeWidth={3} />
      <p className="font-medium text-gray-300">{message}</p>
    </div>
  );
};
