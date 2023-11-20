import * as React from "react";

import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";

const textareaVariants = cva(
  "flex min-h-[80px] w-full resize-none px-4 py-3 text-sm placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-gray-100 rounded-xl",
        outline:
          "rounded-md focus-visible:ring-ring focus-visible:ring-1 ring-offset-background border border-input bg-background",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textareaVariants> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ variant, className, ...props }, ref) => {
    return (
      <textarea className={cn(textareaVariants({ variant, className }))} ref={ref} {...props} />
    );
  },
);
Textarea.displayName = "Textarea";

export { Textarea };
