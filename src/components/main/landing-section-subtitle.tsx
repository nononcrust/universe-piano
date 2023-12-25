import { cn } from "@/lib/utils";

interface LandingSectionSubtitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}

export const LandingSectionSubtitle = ({
  className,
  children,
  ...props
}: LandingSectionSubtitleProps) => {
  return (
    <h2 className={cn("ml-2 mt-2 text-muted-foreground md:ml-0 md:text-lg")} {...props}>
      {children}
    </h2>
  );
};
