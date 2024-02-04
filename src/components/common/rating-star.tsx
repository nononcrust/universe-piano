"use client";

import { cn } from "@/lib/utils";
import { Icon } from "./icon";

interface RatingStarProps extends React.HTMLAttributes<HTMLDivElement> {
  rating: number;
}

export const RatingStar = ({ rating, className, ...props }: RatingStarProps) => {
  return (
    <div className="flex gap-[2px]" {...props}>
      {Array(5)
        .fill(0)
        .map((_, index) => (
          <Icon.Star
            key={index}
            className={cn(
              "h-4 w-4",
              rating > index ? "fill-yellow-400 text-yellow-400" : "fill-gray-300 text-gray-300",
              className,
            )}
          />
        ))}
    </div>
  );
};
