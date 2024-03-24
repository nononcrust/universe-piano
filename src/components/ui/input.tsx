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
          "peer flex h-9 w-full rounded-lg bg-secondary px-3 py-2 text-[13px] transition hover:bg-secondary-dark",
          "focus-visible:outline-none focus-visible:hover:bg-secondary",
          error && "border-error focus-visible:border-error focus-visible:ring-error-lighter",
          className,
          disabled && "pointer-events-none opacity-50",
        )}
        disabled={disabled}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";
