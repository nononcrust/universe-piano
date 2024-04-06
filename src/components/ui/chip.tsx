import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { forwardRef } from "react";

const chipVariants = cva("flex justify-center items-center rounded-md font-medium", {
  variants: {
    size: {
      sm: "h-5 px-1.5 text-xs",
      default: "h-6 px-2 text-sm",
    },
    color: {
      green: "bg-green-50 text-green-600",
      red: "bg-red-50 text-red-600",
      blue: "bg-blue-50 text-blue-600",
      primary: "bg-primary-content text-primary",
    },
  },
  defaultVariants: {
    color: "primary",
    size: "default",
  },
});

interface ChipProps
  extends Omit<React.ComponentPropsWithoutRef<"div">, "color">,
    VariantProps<typeof chipVariants> {}

export const Chip = forwardRef<HTMLDivElement, ChipProps>(({ className, color, ...props }, ref) => (
  <div className={cn(chipVariants({ color, className }))} ref={ref} {...props} />
));

Chip.displayName = "Chip";
