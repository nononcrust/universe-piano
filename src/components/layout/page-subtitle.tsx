import { cn } from "@/lib/utils";

interface PageSubtitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  title: string;
}

export const PageSubtitle = ({ title, className, ...props }: PageSubtitleProps) => {
  return (
    <h2 className={cn("text-lg font-medium text-foreground md:text-xl", className)} {...props}>
      {title}
    </h2>
  );
};
