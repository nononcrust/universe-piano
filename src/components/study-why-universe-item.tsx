"use client";

import { useState } from "react";

interface WhyUniverseItemProps {
  number: number;
  title: string;
  description: string;
}

export const WhyUniverseItem = ({ number, title, description }: WhyUniverseItemProps) => {
  const [showDescription, setShowDescription] = useState(false);

  if (showDescription) {
    return (
      <div
        className="flex h-[320px] flex-1 cursor-pointer flex-col justify-end rounded-2xl border bg-content p-6 font-semibold"
        onClick={() => setShowDescription(false)}
      >
        <p className="mt-2 whitespace-pre-wrap">{description}</p>
      </div>
    );
  }

  return (
    <div
      className="flex h-[320px] flex-1 cursor-pointer flex-col justify-end rounded-2xl border bg-content p-6 font-semibold"
      onClick={() => setShowDescription(true)}
    >
      <p className="text-xl underline underline-offset-4">0{number}</p>
      <p className="mt-2 whitespace-pre text-xl">{title}</p>
    </div>
  );
};
