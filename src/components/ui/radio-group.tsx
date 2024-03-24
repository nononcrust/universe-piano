"use client";

import { cn } from "@/lib/utils";
import * as RadioGroupPrimitives from "@radix-ui/react-radio-group";
import { Circle } from "lucide-react";
import React from "react";

const RadioGroupRoot = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitives.Root>
>(({ className, ...props }, ref) => {
  return <RadioGroupPrimitives.Root className={cn("grid gap-2", className)} {...props} ref={ref} />;
});
RadioGroupRoot.displayName = RadioGroupPrimitives.Root.displayName;

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitives.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitives.Item>
>(({ className, children, ...props }, ref) => {
  return (
    <RadioGroupPrimitives.Item
      ref={ref}
      className={cn(
        "border-foreground text-foreground ring-offset-background aspect-square h-4 w-4 rounded-full border focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    >
      <RadioGroupPrimitives.Indicator className="flex items-center justify-center">
        <Circle className="h-2.5 w-2.5 fill-current text-current" />
      </RadioGroupPrimitives.Indicator>
    </RadioGroupPrimitives.Item>
  );
});
RadioGroupItem.displayName = RadioGroupPrimitives.Item.displayName;

export const RadioGroup = Object.assign(RadioGroupRoot, {
  Item: RadioGroupItem,
});
