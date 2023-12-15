import { cn } from "@/lib/utils";

interface SectionTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}

export const SectionTitle = ({ children, className, ...props }: SectionTitleProps) => {
  return (
    <h1 className={cn("mt-32 text-center text-2xl font-bold md:text-4xl", className)} {...props}>
      {children}
    </h1>
  );
};
