"use client";

import { Icon } from "@/components/shared/icon";
import { cn } from "@/lib/utils";
import * as DialogPrimitives from "@radix-ui/react-dialog";
import React from "react";

const DialogRoot = DialogPrimitives.Root;

const DialogTrigger = DialogPrimitives.Trigger;

const DialogPortal = ({ className, ...props }: DialogPrimitives.DialogPortalProps) => (
  <DialogPrimitives.Portal className={cn(className)} {...props} />
);

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitives.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitives.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitives.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-black/50",
      "data-[state=open]:animate-in data-[state=closed]:animate-out",
      "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className,
    )}
    {...props}
  />
));
DialogOverlay.displayName = "Dialog.Overlay";

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitives.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitives.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitives.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid max-h-[100%] w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-white p-6 shadow-lg duration-200 sm:rounded-lg md:max-h-[90%] md:w-full",
        "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        "data-[state=open]:animate-in data-[state=closed]:animate-out",
        "data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]",
        "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
        className,
      )}
      {...props}
    >
      {children}
      <DialogPrimitives.Close
        className={cn(
          "absolute right-3 top-3 rounded-full p-2 disabled:pointer-events-none",
          "data-[state=open]:text-sub",
        )}
      >
        <Icon.X className="h-5 w-5" />
        <span className="sr-only">Close</span>
      </DialogPrimitives.Close>
    </DialogPrimitives.Content>
  </DialogPortal>
));
DialogContent.displayName = "Dialog.Content";

const DialogHeader = ({ className, ...props }: React.ComponentPropsWithoutRef<"div">) => (
  <div className={cn("flex flex-col space-y-1.5 text-center sm:text-left", className)} {...props} />
);

const DialogFooter = ({ className, ...props }: React.ComponentPropsWithoutRef<"div">) => (
  <div
    className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)}
    {...props}
  />
);

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitives.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitives.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitives.Title
    ref={ref}
    className={cn("text-lg font-medium leading-none tracking-tight", className)}
    {...props}
  />
));
DialogTitle.displayName = "Dialog.Title";

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitives.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitives.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitives.Description
    ref={ref}
    className={cn("text-sm text-sub", className)}
    {...props}
  />
));
DialogDescription.displayName = "Dialog.Description";

export const Dialog = Object.assign(DialogRoot, {
  Trigger: DialogTrigger,
  Portal: DialogPortal,
  Overlay: DialogOverlay,
  Content: DialogContent,
  Header: DialogHeader,
  Footer: DialogFooter,
  Title: DialogTitle,
  Description: DialogDescription,
});
