import { cn } from "@/lib/utils";

interface SectionTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}

export const SectionTitle = ({ children, className, ...props }: SectionTitleProps) => {
  return (
    <h1
      className={cn("text-center text-2xl font-bold md:text-[36px] md:leading-[52px]", className)}
      {...props}
    >
      {children}
    </h1>
  );
};
