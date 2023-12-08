import { useEffect, useState } from "react";

export const useAnimateOnLoad = ({
  isLoading,
  duration = 1000,
}: {
  isLoading: boolean;
  duration?: number;
}) => {
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    if (isLoading) {
      setAnimating(true);
    }

    if (!isLoading) {
      setTimeout(() => {
        setAnimating(false);
      }, duration);
    }
  }, [isLoading, duration]);

  return { animating };
};
