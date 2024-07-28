import { cn } from "@/lib/utils";

interface PageTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children?: React.ReactNode;
  title: string;
}

export const PageTitle = ({ children, title, className, ...props }: PageTitleProps) => {
  return (
    <h1
      className={cn(
        "text-foreground font-nanum mt-8 flex items-center text-xl font-extrabold md:mt-24 md:text-2xl",
        className,
      )}
      {...props}
    >
      {title}
      {children}
    </h1>
  );
};
