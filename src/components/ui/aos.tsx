"use client";

import { cn } from "@/lib/utils";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface AosProps {
  children: React.ReactNode;
}

export const Aos = ({ children }: AosProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      ref={ref}
      className={cn(
        "translate-y-20 opacity-0 transition duration-700 ease-out",
        isInView && "translate-y-0 opacity-100",
      )}
    >
      {children}
    </div>
  );
};
