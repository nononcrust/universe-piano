import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, ...props }, ref) => {
    return (
      <button
        className={cn("hover:bg-content rounded-full p-2 transition", className)}
        ref={ref}
        {...props}
      />
    );
  },
);
IconButton.displayName = "IconButton";
