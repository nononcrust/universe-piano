import { cn } from "@/lib/utils";
import React from "react";
import { Icon } from "./icon";

interface RatingStarSelectProps {
  value: number;
  onChange: (value: number) => void;
}

export const RatingStarSelect = React.forwardRef<HTMLDivElement, RatingStarSelectProps>(
  ({ value, onChange }, ref) => {
    return (
      <div className="flex gap-[2px]" ref={ref}>
        {Array(5)
          .fill(0)
          .map((_, index) => (
            <button
              key={index}
              onClick={() => onChange(index + 1)}
              className="h-8 w-8"
              type="button"
            >
              <Icon.Star
                className={cn(
                  "h-8 w-8",
                  value > index ? "fill-yellow-400 text-yellow-400" : "fill-gray-300 text-gray-300",
                )}
              />
            </button>
          ))}
      </div>
    );
  },
);
RatingStarSelect.displayName = "RatingStarSelect";
