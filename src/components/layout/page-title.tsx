import { cn } from "@/lib/utils";

interface PageTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children?: React.ReactNode;
  title: string;
}

export const PageTitle = ({ children, title, className, ...props }: PageTitleProps) => {
  return (
    <h1
      className={cn(
        "mt-8 flex items-center text-2xl font-bold text-foreground md:mt-24 md:text-3xl",
        className,
      )}
      {...props}
    >
      {title}
      {children}
    </h1>
  );
};
