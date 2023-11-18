import { useState } from "react";

export const useDialog = () => {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);

  const close = () => setIsOpen(false);

  const onOpenChange = (isOpen: boolean) => {
    isOpen ? open() : close();
  };

  return { isOpen, open, close, onOpenChange };
};
