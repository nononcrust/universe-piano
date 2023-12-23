import { cn } from "@/lib/utils";

interface LandingSectionTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}

export const LandingSectionTitle = ({
  className,
  children,
  ...props
}: LandingSectionTitleProps) => {
  return (
    <h1 className={cn("text-center text-2xl font-bold md:text-left md:text-3xl")} {...props}>
      {children}
    </h1>
  );
};
