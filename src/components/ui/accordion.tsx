"use client";

import { Icon } from "@/components/shared/icon";
import { cn } from "@/lib/utils";
import * as AccordionPrimitives from "@radix-ui/react-accordion";
import React from "react";

const AccordionRoot = AccordionPrimitives.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitives.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitives.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitives.Item ref={ref} className={cn("border-b", className)} {...props} />
));
AccordionItem.displayName = "Accordion.Item";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitives.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitives.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitives.Header className="flex">
    <AccordionPrimitives.Trigger
      ref={ref}
      className={cn(
        "focus-visible:focus-ring flex flex-1 items-center justify-between py-4 font-medium transition-transform [&[data-state=open]>svg]:rotate-180",
        className,
      )}
      {...props}
    >
      {children}
      <Icon.ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
    </AccordionPrimitives.Trigger>
  </AccordionPrimitives.Header>
));
AccordionTrigger.displayName = "Accordion.Trigger";

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitives.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitives.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitives.Content
    ref={ref}
    className={cn(
      "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
      className,
    )}
    {...props}
  >
    <div className="pb-4 pt-0">{children}</div>
  </AccordionPrimitives.Content>
));
AccordionContent.displayName = "Accordion.Content";

export const Accordion = Object.assign(AccordionRoot, {
  Item: AccordionItem,
  Trigger: AccordionTrigger,
  Content: AccordionContent,
});
