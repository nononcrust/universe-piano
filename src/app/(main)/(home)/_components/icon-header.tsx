import { cn } from "@/lib/utils";

interface IconHeaderProps {
  className?: string;
  children: React.ReactNode;
}

export const IconHeader = ({ children, className }: IconHeaderProps) => {
  return <div className={cn("rounded-full border bg-white p-2", className)}>{children}</div>;
};
