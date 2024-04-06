import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import React from "react";

const textareaVariants = cva(
  "flex min-h-[80px] w-full transition px-4 py-3 text-sm placeholder:text-sub focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 resize-y",
  {
    variants: {
      variant: {
        default: "bg-content rounded-xl hover:bg-gray-200 focus-visible:bg-content",
        outline: "rounded-md border border-input bg-white",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface TextareaProps
  extends React.ComponentPropsWithoutRef<"textarea">,
    VariantProps<typeof textareaVariants> {
  error?: boolean;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ variant, className, error = false, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          textareaVariants({ variant, className }),
          error && "border-error ring-error-lighter focus-visible:border-error",
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Textarea.displayName = "Textarea";
