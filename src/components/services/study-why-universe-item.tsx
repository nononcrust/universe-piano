"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import { Icon } from "../icon";

interface WhyUniverseItemProps {
  number: number;
  title: string;
  description: string;
}

export const WhyUniverseItem = ({ number, title, description }: WhyUniverseItemProps) => {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <div
      className="group flex h-[320px] flex-1 cursor-pointer flex-col justify-between overflow-hidden rounded-2xl border bg-zinc-800 p-6 font-bold"
      onClick={() => setShowDescription(!showDescription)}
    >
      <div
        className={cn(
          "flex justify-end",
          "mt-2 whitespace-pre-wrap",
          showDescription && "hidden",
          !showDescription && "animate-fade-in",
        )}
      >
        <div className="rounded-full border-2 border-white">
          <Icon.Plus className="text-white" />
        </div>
      </div>
      <div className="z-10 text-white">
        <p
          className={cn(
            "mt-2 whitespace-pre-wrap",
            !showDescription && "hidden",
            showDescription && "animate-fade-in",
          )}
        >
          {description}
        </p>
        <div className={cn(showDescription && "hidden", !showDescription && "animate-fade-in")}>
          <p className="text-xl underline underline-offset-4">0{number}</p>
          <p className="mt-2 whitespace-pre text-xl">{title}</p>
        </div>
      </div>
    </div>
  );
};
