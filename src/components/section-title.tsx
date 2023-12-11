import { cn } from "@/lib/utils";

interface SectionTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  title: string;
}

export const SectionTitle = ({ title, className, ...props }: SectionTitleProps) => {
  return (
    <h1 className={cn("mt-32 text-center text-3xl font-bold md:text-4xl", className)} {...props}>
      {title}
    </h1>
  );
};
