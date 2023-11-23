import { useRef, useState } from "react";

export const useInput = (initialValue?: string) => {
  const [value, setValue] = useState(initialValue ?? "");

  const ref = useRef<HTMLInputElement>(null);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const reset = () => setValue("");

  return { value, onChange, reset, setValue, ref };
};
