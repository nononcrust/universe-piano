import { cn } from "@/lib/utils";

interface LandingSectionTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}

export const LandingSectionTitle = ({
  className,
  children,
  ...props
}: LandingSectionTitleProps) => {
  return (
    <h1 className={cn("ml-2 text-2xl font-semibold md:ml-0")} {...props}>
      {children}
    </h1>
  );
};
