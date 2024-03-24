"use client";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import * as AlertDialogPrimitives from "@radix-ui/react-alert-dialog";
import React from "react";

const AlertDialogRoot = AlertDialogPrimitives.Root;

const AlertDialogTrigger = AlertDialogPrimitives.Trigger;

// TODO: 이슈가 해결된 후 any 제거
const AlertDialogPortal = ({ className, ...props }: any) => (
  <AlertDialogPrimitives.Portal className={cn(className)} {...props} />
);
AlertDialogPortal.displayName = AlertDialogPrimitives.Portal.displayName;

const AlertDialogOverlay = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitives.Overlay>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitives.Overlay>
>(({ className, children, ...props }, ref) => (
  <AlertDialogPrimitives.Overlay
    className={cn(
      "fixed inset-0 z-50 bg-black/50",
      "data-[state=open]:animate-in data-[state=closed]:animate-out",
      "data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0",
      className,
    )}
    {...props}
    ref={ref}
  />
));
AlertDialogOverlay.displayName = AlertDialogPrimitives.Overlay.displayName;

const AlertDialogContent = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitives.Content>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitives.Content>
>(({ className, ...props }, ref) => (
  <AlertDialogPortal>
    <AlertDialogOverlay />
    <AlertDialogPrimitives.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-[60%] max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 rounded-xl border bg-white p-6 shadow-lg duration-200",
        "data-[state=open]:animate-in data-[state=closed]:animate-out",
        "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
        "data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]",
        className,
      )}
      {...props}
    />
  </AlertDialogPortal>
));
AlertDialogContent.displayName = AlertDialogPrimitives.Content.displayName;

const AlertDialogHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col space-y-2 text-center sm:text-left", className)} {...props} />
);
AlertDialogHeader.displayName = "AlertDialogHeader";

const AlertDialogFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("flex flex-row-reverse items-center gap-2 sm:flex-row sm:justify-end", className)}
    {...props}
  />
);
AlertDialogFooter.displayName = "AlertDialogFooter";

const AlertDialogTitle = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitives.Title>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitives.Title>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitives.Title
    ref={ref}
    className={cn("text-lg font-medium", className)}
    {...props}
  />
));
AlertDialogTitle.displayName = AlertDialogPrimitives.Title.displayName;

const AlertDialogDescription = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitives.Description>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitives.Description>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitives.Description
    ref={ref}
    className={cn("text-sm text-sub", className)}
    {...props}
  />
));
AlertDialogDescription.displayName = AlertDialogPrimitives.Description.displayName;

const AlertDialogAction = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitives.Action>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitives.Action>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitives.Action
    ref={ref}
    className={cn(buttonVariants({ variant: "default" }), "flex-1 sm:flex-initial", className)}
    {...props}
  />
));
AlertDialogAction.displayName = AlertDialogPrimitives.Action.displayName;

const AlertDialogCancel = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitives.Cancel>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitives.Cancel>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitives.Cancel
    ref={ref}
    className={cn(buttonVariants({ variant: "ghost" }), "flex-1 sm:flex-initial", className)}
    {...props}
  />
));
AlertDialogCancel.displayName = AlertDialogPrimitives.Cancel.displayName;

export const AlertDialog = Object.assign(AlertDialogRoot, {
  Action: AlertDialogAction,
  Cancel: AlertDialogCancel,
  Content: AlertDialogContent,
  Description: AlertDialogDescription,
  Footer: AlertDialogFooter,
  Header: AlertDialogHeader,
  Title: AlertDialogTitle,
  Trigger: AlertDialogTrigger,
});
