"use client";

import { cn } from "@/lib/utils";
import * as DrawerPrimitives from "@radix-ui/react-dialog";
import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

export const Drawer = DrawerPrimitives.Root;

export const DrawerTrigger = DrawerPrimitives.Trigger;

export const DrawerClose = DrawerPrimitives.Close;

const DrawerPortal = ({ className, ...props }: DrawerPrimitives.DialogPortalProps) => (
  <DrawerPrimitives.Portal className={cn(className)} {...props} />
);

const DrawerOverlay = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitives.Overlay>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitives.Overlay>
>(({ className, ...props }, ref) => (
  <DrawerPrimitives.Overlay
    className={cn(
      "fixed inset-0 z-50 bg-black/50",
      "data-[state=open]:animate-in data-[state=closed]:animate-out",
      "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className,
    )}
    {...props}
    ref={ref}
  />
));
DrawerOverlay.displayName = "Drawer.Overlay";

const DrawerVariants = cva(
  cn(
    "fixed z-50 gap-4 bg-white p-6 shadow-lg transition ease-in-out",
    "data-[state=open]:animate-in data-[state=closed]:animate-out",
    "data-[state=closed]:duration-300 data-[state=open]:duration-500",
  ),
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom:
          "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right:
          "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
      },
    },
    defaultVariants: {
      side: "right",
    },
  },
);

interface DrawerContentProps
  extends React.ComponentPropsWithoutRef<typeof DrawerPrimitives.Content>,
    VariantProps<typeof DrawerVariants> {}

export const DrawerContent = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitives.Content>,
  DrawerContentProps
>(({ side = "right", className, children, ...props }, ref) => (
  <DrawerPortal>
    <DrawerOverlay />
    <DrawerPrimitives.Content
      ref={ref}
      className={cn(DrawerVariants({ side }), className)}
      {...props}
    >
      {children}
      {/* <DrawerPrimitives.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </DrawerPrimitives.Close> */}
    </DrawerPrimitives.Content>
  </DrawerPortal>
));
DrawerContent.displayName = "Drawer.Content";

export const DrawerHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col space-y-2 text-center sm:text-left", className)} {...props} />
);
DrawerHeader.displayName = "Drawer.Header";

export const DrawerFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)}
    {...props}
  />
);
DrawerFooter.displayName = "Drawer.Footer";

export const DrawerTitle = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitives.Title>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitives.Title>
>(({ className, ...props }, ref) => (
  <DrawerPrimitives.Title
    ref={ref}
    className={cn("text-foreground text-lg font-medium", className)}
    {...props}
  />
));
DrawerTitle.displayName = "Drawer.Title";

export const DrawerDescription = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitives.Description>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitives.Description>
>(({ className, ...props }, ref) => (
  <DrawerPrimitives.Description
    ref={ref}
    className={cn("text-sm text-sub", className)}
    {...props}
  />
));
DrawerDescription.displayName = "Drawer.Description";
