import { cn } from "@/lib/utils";
import { Icon } from "./icon";

interface RatingStarSelectProps {
  value: number;
  onChange: (value: number) => void;
}

export const RatingStarSelect = ({ value, onChange }: RatingStarSelectProps) => {
  return (
    <div className="flex gap-[2px]">
      {Array(5)
        .fill(0)
        .map((_, index) => (
          <button key={index} onClick={() => onChange(index + 1)} className="h-8 w-8" type="button">
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
};
