"use client";

import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import { Icon } from "../icon";

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
      className="group relative flex h-[320px] flex-1 cursor-pointer flex-col justify-between overflow-hidden rounded-2xl bg-white font-bold"
      onClick={() => setShowDescription(!showDescription)}
    >
      <Image
        className="object-cover brightness-[0.3]"
        priority
        fill
        src={image}
        alt=""
        sizes="320px"
      />
      <div
        className={cn(
          "z-10 flex justify-end",
          "whitespace-pre-wrap",
          showDescription && "hidden",
          !showDescription && "animate-fade-in",
        )}
      >
        <div className="m-6 rounded-full border-2 border-white p-1">
          <Icon.Plus className="text-white" />
        </div>
      </div>
      <div
        className={cn(
          "z-10 flex-1 bg-zinc-900 p-6 text-white",
          !showDescription && "hidden",
          showDescription && "animate-fade-in",
        )}
      >
        <p className={cn("mt-2 whitespace-pre-wrap")}>{description}</p>
      </div>
      <div
        className={cn(
          "z-10 p-6",
          showDescription && "hidden",
          !showDescription && "animate-fade-in",
        )}
      >
        <p className="text-xl text-white underline underline-offset-4">0{number}</p>
        <p className="mt-2 whitespace-pre text-2xl text-white">{title}</p>
      </div>
    </div>
  );
};
