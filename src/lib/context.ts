"use client";

import { createContext, useContext } from "react";

export const createContextFactory = <T>(name: string) => {
  const Context = createContext<T | null>(null);

  const useSafeContext = () => {
    const context = useContext(Context);

    if (!context) {
      throw new Error(`use${name}Context는 ${name}Provider 안에서만 사용할 수 있습니다.`);
    }

    return context;
  };

  return [Context, useSafeContext] as const;
};
