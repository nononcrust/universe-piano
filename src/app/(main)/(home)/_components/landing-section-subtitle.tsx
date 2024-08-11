import { cn } from "@/lib/utils";

interface LandingSectionSubtitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}

export const LandingSectionSubtitle = ({
  className,
  children,
  ...props
}: LandingSectionSubtitleProps) => {
  return (
    <h2 className={cn("text-sub ml-2 mt-2 md:ml-0")} {...props}>
      {children}
    </h2>
  );
};
