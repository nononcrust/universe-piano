import { cn } from "@/lib/utils";

interface CardProps extends React.ComponentPropsWithoutRef<"div"> {
  half?: boolean;
}

export const Card = ({ className, half, ...props }: CardProps) => {
  return (
    <div
      className={cn(
        "row-span-2 flex max-h-[300px] min-h-[300px] flex-col rounded-3xl bg-white p-8 transition",
        half && "row-span-1 max-h-[142px] min-h-[142px]",
        className,
      )}
      {...props}
    ></div>
  );
};

interface CardTitleProps extends React.ComponentPropsWithoutRef<"h3"> {}

const CardTitle = ({ className, children, ...props }: CardTitleProps) => {
  return (
    <h3 className={cn("text-xl font-semibold", className)} {...props}>
      {children}
    </h3>
  );
};

interface CardSubtitleProps extends React.ComponentPropsWithoutRef<"p"> {}

const CardSubtitle = ({ className, children, ...props }: CardSubtitleProps) => {
  return (
    <p className={cn("mt-2 text-[15px] font-medium text-gray-400", className)} {...props}>
      {children}
    </p>
  );
};

Card.Title = CardTitle;
Card.Subtitle = CardSubtitle;
