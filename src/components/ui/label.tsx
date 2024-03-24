import { cn } from "@/lib/utils";
import * as LabelPrimitive from "@radix-ui/react-label";
import React from "react";

export interface LabelProps extends React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> {}

export const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <LabelPrimitive.Root
        className={cn("text-main inline-flex text-[13px]", className)}
        ref={ref}
        {...props}
      >
        {children}
      </LabelPrimitive.Root>
    );
  },
);
Label.displayName = "Label";
