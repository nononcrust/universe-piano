import { cn } from "@/lib/utils";

interface LandingSectionSubtitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}

export const LandingSectionSubtitle = ({
  className,
  children,
  ...props
}: LandingSectionSubtitleProps) => {
  return (
    <h2 className={cn("mt-2 text-center text-muted-foreground md:text-left")} {...props}>
      {children}
    </h2>
  );
};
