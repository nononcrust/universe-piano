import { cn } from "@/lib/utils";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckIcon } from "lucide-react";
import React, { useId } from "react";
import { Label } from "./label";

interface CheckboxProps
  extends Omit<
    React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>,
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
        <CheckboxPrimitive.Root
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
              "group-focus:border-primary-dark group-focus:ring-2 group-focus:ring-ring group-focus:ring-offset-1",
              "group-data-[state=checked]:border-primary-dark group-data-[state=checked]:bg-primary group-data-[state=checked]:hover:bg-primary",
              "group-disabled:opacity-50",
              error &&
                "border-error group-focus:border-error-dark group-focus:ring-error-lighter group-data-[state=checked]:border-error-dark group-data-[state=checked]:bg-error group-data-[state=checked]:hover:bg-error",
            )}
          >
            <CheckboxPrimitive.Indicator className="absolute inset-0 flex items-center justify-center">
              <CheckIcon className="h-[13px] w-[13px] stroke-[3px] text-white" />
            </CheckboxPrimitive.Indicator>
          </div>
        </CheckboxPrimitive.Root>
        <Label className="ml-2 text-sm" htmlFor={id}>
          {children}
        </Label>
      </div>
    );
  },
);
Checkbox.displayName = "Checkbox";
