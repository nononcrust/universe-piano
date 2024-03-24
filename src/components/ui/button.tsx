import { cn } from "@/lib/utils";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { VariantProps, cva } from "class-variance-authority";
import React from "react";

export const buttonVariants = cva(
  cn(
    "inline-flex items-center justify-center whitespace-nowrap rounded-lg transition font-medium border",
    "ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
    "disabled:pointer-events-none disabled:opacity-50",
    "hover:bg-primary-dark",
  ),
  {
    variants: {
      variant: {
        default: "bg-black text-white hover:bg-black/90 border-black hover:border-black/90",
        primary:
          "bg-primary text-white hover:bg-primary-dark border-primary hover:border-primary-dark",
        secondary: "bg-secondary text-main border-transparent hover:bg-secondary-dark",
        outlined: "bg-white border-border text-main hover:bg-gray-50",
        error: "bg-error text-white border-error hover:bg-error-dark",
        errorOutlined: "bg-white border-error text-error hover:bg-red-50",
        ghost: "bg-transparent text-main border-transparent hover:bg-secondary",
      },
      size: {
        small: "h-7 px-3 text-xs",
        medium: "h-9 px-4 text-[13px] leading-5",
        large: "h-10 px-8 text-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "medium",
    },
  },
);

export interface ButtonProps
  extends React.ComponentPropsWithoutRef<"button">,
    VariantProps<typeof buttonVariants> {
  startIcon?: React.ReactNode;
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      type = "button",
      asChild = false,
      children,
      startIcon,
      disabled,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        type={type}
        disabled={disabled}
        aria-disabled={disabled}
        {...props}
      >
        {startIcon && <Slot className="mr-2 w-4">{startIcon}</Slot>}
        <Slottable>{children}</Slottable>
      </Comp>
    );
  },
);
Button.displayName = "Button";
