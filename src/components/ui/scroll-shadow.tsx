import { cn } from "@/lib/utils";

interface ScrollShadowProps {
  children?: React.ReactNode;
  size?: number;
  orientation?: "vertical" | "horizontal";
  hideScrollbar?: boolean;
  className?: string;
}

export const ScrollShadow = ({
  size = 40,
  orientation = "horizontal",
  children,
  className,
}: ScrollShadowProps) => {
  return (
    <div className={cn("relative", className)}>
      <div
        className={cn(
          "absolute from-white/0 to-white",
          orientation === "horizontal" && `left-0 h-full w-[${size}px] bg-gradient-to-l`,
          orientation === "vertical" && `bg-gradient-to-t h-[${size}px] w-full] top-0`,
        )}
      />
      <div
        className={cn(
          "absolute from-white/0 to-white",
          orientation === "horizontal" && `bg-gradient-to-r w-[${size}px] right-0 h-full`,
          orientation === "vertical" && `bg-gradient-to-b h-[${size}px] bottom-0 w-full`,
        )}
      />
      {children}
    </div>
  );
};
