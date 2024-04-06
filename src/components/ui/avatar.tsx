"use client";

import { cn } from "@/lib/utils";
import * as AvatarPrimitives from "@radix-ui/react-avatar";
import { motion } from "framer-motion";
import React from "react";

const AvatarImpl = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitives.Root>
>(({ className, ...props }, ref) => (
  <AvatarPrimitives.Root
    ref={ref}
    className={cn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className)}
    {...props}
  />
));
AvatarImpl.displayName = "Avatar";

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitives.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitives.Image>
>(({ className, ...props }, ref) => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
    <AvatarPrimitives.Image
      ref={ref}
      className={cn("aspect-square h-full w-full", className)}
      {...props}
    />
  </motion.div>
));
AvatarImage.displayName = "Avatar.Image";

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitives.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitives.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitives.Fallback
    ref={ref}
    className={cn(
      "bg-muted flex h-full w-full items-center justify-center rounded-full",
      className,
    )}
    {...props}
  />
));
AvatarFallback.displayName = "Avatar.Fallback";

export const Avatar = Object.assign(AvatarImpl, {
  Image: AvatarImage,
  Fallback: AvatarFallback,
});
