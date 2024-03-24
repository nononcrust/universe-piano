import { cn } from "@/lib/utils";
import React from "react";

interface InputProps extends React.ComponentPropsWithoutRef<"input"> {
  error?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, error = false, disabled, ...props }, ref) => {
    return (
      <input
        className={cn(
          "peer flex h-9 w-full rounded-lg border border-border bg-gray-50 px-3 py-2 text-[13px] transition",
          "focus-visible:border-primary focus-visible:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
          error && "focus-visible:ring-error-lighter border-error focus-visible:border-error",
          className,
          disabled && "opacity-50",
        )}
        disabled={disabled}
        {...props}
        ref={ref}
      />
    );
  },
);
Input.displayName = "Input";
