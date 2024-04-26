import { Icon } from "@/components/shared/icon";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import * as CheckboxPrimitives from "@radix-ui/react-checkbox";
import React, { useId } from "react";

interface CheckboxProps
  extends Omit<
    React.ComponentPropsWithoutRef<typeof CheckboxPrimitives.Root>,
    "onChange" | "onCheckedChange" | "value"
  > {
  value?: string | boolean;
  onChange?: (checked: boolean) => void;
  error?: boolean;
}

export const Checkbox = React.forwardRef<HTMLButtonElement, CheckboxProps>(
  ({ className, children, onChange, value, error = false, ...props }, ref) => {
    const id = useId();

    return (
      <div className="flex items-center">
        <CheckboxPrimitives.Root
          className={cn(
            "group relative flex h-[20px] w-[20px] items-center justify-center rounded-[4px] focus-visible:outline-none",
            className,
          )}
          value={String(value)}
          onCheckedChange={onChange}
          id={id}
          ref={ref}
          {...props}
        >
          <div
            className={cn(
              "h-[15px] w-[15px] rounded-[4px] border border-border transition",
              "group-focus-visible:ring-2 group-focus-visible:ring-ring group-focus-visible:ring-offset-1",
              "group-data-[state=checked]:border-black group-data-[state=checked]:bg-black group-data-[state=checked]:hover:bg-black",
              "group-disabled:opacity-50",
              error &&
                "border-error group-focus-visible:border-error-dark group-focus-visible:ring-error-lighter group-data-[state=checked]:border-error-dark group-data-[state=checked]:bg-error group-data-[state=checked]:hover:bg-error",
            )}
          >
            <CheckboxPrimitives.Indicator className="absolute inset-0 flex items-center justify-center">
              <Icon.Check className="h-[13px] w-[13px] stroke-[3px] text-white" />
            </CheckboxPrimitives.Indicator>
          </div>
        </CheckboxPrimitives.Root>
        <Label className="ml-2 text-sm" htmlFor={id}>
          {children}
        </Label>
      </div>
    );
  },
);
Checkbox.displayName = "Checkbox";
