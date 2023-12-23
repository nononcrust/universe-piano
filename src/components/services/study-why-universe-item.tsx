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
      className="group flex h-[320px] flex-1 cursor-pointer flex-col justify-between overflow-hidden rounded-3xl bg-white font-bold"
      onClick={() => setShowDescription(!showDescription)}
    >
      <div
        className={cn(
          "flex justify-end",
          "whitespace-pre-wrap",
          showDescription && "hidden",
          !showDescription && "animate-fade-in",
        )}
      >
        <div className="m-6 rounded-full bg-content p-2">
          <Icon.Plus />
        </div>
      </div>
      <div
        className={cn(
          "z-10 flex-1 bg-gray-600 p-6 text-white",
          !showDescription && "hidden",
          showDescription && "animate-fade-in",
        )}
      >
        <p className={cn("mt-2 whitespace-pre-wrap")}>{description}</p>
      </div>
      <div
        className={cn("p-6", showDescription && "hidden", !showDescription && "animate-fade-in")}
      >
        <p className="text-xl text-primary underline underline-offset-4">0{number}</p>
        <p className="mt-2 whitespace-pre text-2xl">{title}</p>
      </div>
    </div>
  );
};
