"use client";

import { cn } from "@/lib/utils";
import * as TabsPrimitives from "@radix-ui/react-tabs";
import React from "react";

const TabsImpl = TabsPrimitives.Root;

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitives.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitives.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitives.List
    ref={ref}
    className={cn("flex h-10 items-center text-sub", className)}
    {...props}
  />
));
TabsList.displayName = "Tabs.List";

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitives.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitives.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitives.Trigger
    ref={ref}
    className={cn(
      "border-foreground ring-offset-background data-[state=active]:text-foreground h-full items-center justify-center whitespace-nowrap px-3 py-1.5 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:border-b-2",
      className,
    )}
    {...props}
  />
));
TabsTrigger.displayName = "Tabs.Trigger";

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitives.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitives.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitives.Content
    ref={ref}
    className={cn(
      "ring-offset-background mt-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className,
    )}
    {...props}
  />
));
TabsContent.displayName = "Tabs.Content";

export const Tabs = Object.assign(TabsImpl, {
  List: TabsList,
  Trigger: TabsTrigger,
  Content: TabsContent,
});
