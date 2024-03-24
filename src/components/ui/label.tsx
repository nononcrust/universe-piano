import { cn } from "@/lib/utils";
import * as LabelPrimitives from "@radix-ui/react-label";
import React from "react";

export interface LabelProps extends React.ComponentPropsWithoutRef<typeof LabelPrimitives.Root> {}

export const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <LabelPrimitives.Root
        className={cn("inline-flex text-[13px] text-main", className)}
        ref={ref}
        {...props}
      >
        {children}
      </LabelPrimitives.Root>
    );
  },
);
Label.displayName = "Label";
