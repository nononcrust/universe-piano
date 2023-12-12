import { cn } from "@/lib/utils";

interface SectionSubtitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  title: string;
}

export const SectionSubtitle = ({ title, className, ...props }: SectionSubtitleProps) => {
  return (
    <h2
      className={cn(
        "mt-4 text-center text-lg font-medium text-muted-foreground md:text-xl",
        className,
      )}
      {...props}
    >
      {title}
    </h2>
  );
};
