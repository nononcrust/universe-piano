import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

const badgeVariants = cva(
  cn(
    "inline-flex items-center rounded-lg leading-9 border px-2 py-0.5 text-xs font-medium transition-colors",
    "focus-visible:focus-ring",
  ),
  {
    variants: {
      variant: {
        primary: "border-transparent bg-primary text-white",
        default: "border-transparent bg-black text-white",
        secondary: "border-transparent bg-secondary text-secondary-foreground",
        error: "border-transparent bg-error text-white",
        outlined: "text-main",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps
  extends React.ComponentPropsWithoutRef<"div">,
    VariantProps<typeof badgeVariants> {}

export const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant, ...props }, ref) => {
    return <div className={cn(badgeVariants({ variant }), className)} ref={ref} {...props} />;
  },
);
Badge.displayName = "Badge";
