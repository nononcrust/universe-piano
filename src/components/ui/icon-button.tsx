import { cn } from "@/lib/utils";
import React, { forwardRef } from "react";

interface IconButtonProps extends React.ComponentPropsWithoutRef<"button"> {}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, ...props }, ref) => {
    return (
      <button
        className={cn("rounded-full p-2 transition hover:bg-content", className)}
        ref={ref}
        {...props}
      />
    );
  },
);
IconButton.displayName = "IconButton";
