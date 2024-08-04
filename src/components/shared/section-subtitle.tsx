import { cn } from "@/lib/utils";

interface SectionSubtitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}

export const SectionSubtitle = ({ children, className, ...props }: SectionSubtitleProps) => {
  return (
    <h2
      className={cn("mt-4 text-center text-lg font-semibold text-sub md:text-xl", className)}
      {...props}
    >
      {children}
    </h2>
  );
};
