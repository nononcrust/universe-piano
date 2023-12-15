import { cn } from "@/lib/utils";

interface SectionBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export const SectionBadge = ({ className, children, ...props }: SectionBadgeProps) => {
  return (
    <div
      className={cn(
        "rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 px-3 py-1 text-sm font-semibold text-white",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};
