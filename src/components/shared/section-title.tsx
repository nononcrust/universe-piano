import { cn } from "@/lib/utils";

interface SectionTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}

export const SectionTitle = ({ children, className, ...props }: SectionTitleProps) => {
  return (
    <h1
      className={cn(
        "font-nanum text-center text-xl font-extrabold md:text-[36px] md:leading-[52px]",
        className,
      )}
      {...props}
    >
      {children}
    </h1>
  );
};
