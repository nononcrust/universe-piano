import { cn } from "@/lib/utils";
import * as NavigationMenuPrimitives from "@radix-ui/react-navigation-menu";
import React from "react";

const NavigationMenuImpl = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitives.Root>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitives.Root
    ref={ref}
    className={cn("relative z-10 flex max-w-max flex-1 items-center justify-center", className)}
    {...props}
  >
    {children}
    <NavigationMenuViewport />
  </NavigationMenuPrimitives.Root>
));
NavigationMenuImpl.displayName = "NavigationMenu";

const NavigationMenuList = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitives.List>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitives.List>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitives.List
    ref={ref}
    className={cn("group flex flex-1 items-center justify-center space-x-1", className)}
    {...props}
  />
));
NavigationMenuList.displayName = "NavigationMenu.List";

const NavigationMenuItem = NavigationMenuPrimitives.Item;

const NavigationMenuTrigger = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitives.Trigger>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitives.Trigger>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitives.Trigger
    ref={ref}
    className={cn(
      "group inline-flex w-max items-center justify-center text-sm font-medium transition-colors",
      "focus:text-main focus:outline-none",
      "disabled:pointer-events-none disabled:opacity-50",
      className,
    )}
    {...props}
  >
    {children}
  </NavigationMenuPrimitives.Trigger>
));
NavigationMenuTrigger.displayName = "NavigationMenu.Trigger";

const NavigationMenuContent = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitives.Content>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitives.Content>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitives.Content
    ref={ref}
    className={cn(
      "left-0 top-0 w-full",
      "data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out",
      "data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out",
      "data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52",
      "data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52",
      "md:absolute md:w-auto",
      className,
    )}
    {...props}
  />
));
NavigationMenuContent.displayName = "NavigationMenu.Content";

const NavigationMenuLink = NavigationMenuPrimitives.Link;

const NavigationMenuViewport = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitives.Viewport>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitives.Viewport>
>(({ className, ...props }, ref) => (
  <div className={cn("absolute left-0 top-full flex justify-center")}>
    <NavigationMenuPrimitives.Viewport
      className={cn(
        "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-lg border bg-white text-main shadow-lg",
        "data-[state=open]:animate-in data-[state=closed]:animate-out",
        "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90",
        "md:w-[var(--radix-navigation-menu-viewport-width)]",
        className,
      )}
      ref={ref}
      {...props}
    />
  </div>
));
NavigationMenuViewport.displayName = "NavigationMenu.Viewport";

const NavigationMenuIndicator = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitives.Indicator>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitives.Indicator>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitives.Indicator
    ref={ref}
    className={cn(
      "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden",
      "data-[state=visible]:animate-in data-[state=hidden]:animate-out",
      "data-[state=hidden]:fade-out data-[state=visible]:fade-in",
      className,
    )}
    {...props}
  >
    <div className="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" />
  </NavigationMenuPrimitives.Indicator>
));
NavigationMenuIndicator.displayName = "NavigationMenu.Indicator";

export const NavigationMenu = Object.assign(NavigationMenuImpl, {
  List: NavigationMenuList,
  Item: NavigationMenuItem,
  Trigger: NavigationMenuTrigger,
  Content: NavigationMenuContent,
  Link: NavigationMenuLink,
  Viewport: NavigationMenuViewport,
  Indicator: NavigationMenuIndicator,
});
