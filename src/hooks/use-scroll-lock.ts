import { useEffect } from "react";

export const useScrollLock = (enabled?: boolean) => {
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;

    if (enabled) document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, [enabled]);
};
