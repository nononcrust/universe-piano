"use client";

import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";

interface WhyUniverseItemProps {
  number: number;
  title: string;
  description: string;
  image: StaticImageData;
}

export const WhyUniverseItem = ({ number, title, description, image }: WhyUniverseItemProps) => {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <div
      className="group relative flex h-[320px] flex-1 cursor-pointer flex-col justify-end overflow-hidden rounded-2xl border p-6 font-bold"
      onClick={() => setShowDescription(!showDescription)}
    >
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
      <Image
        className="absolute left-0 top-0 h-full brightness-[0.3] transition group-hover:scale-110"
        src={image}
        alt=""
        priority
      />
    </div>
  );
};
