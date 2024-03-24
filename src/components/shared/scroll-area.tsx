"use client";

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useRef } from "react";

interface ScrollAreaProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const ScrollArea = ({ children, className, ...props }: ScrollAreaProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const pathname = usePathname();

  return (
    <div key={pathname} className={cn("overflow-y-auto", className)} ref={ref} {...props}>
      {children}
    </div>
  );
};
