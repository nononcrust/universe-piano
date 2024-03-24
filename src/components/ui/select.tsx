"use client";

import { useOutsideClick } from "@/hooks/use-outside-click";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import React, { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import colors from "tailwindcss/colors";

interface SelectContextValue {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  value: string;
  onChange: (value: string) => void;
  focusedIndex: number;
  setFocusedIndex: React.Dispatch<React.SetStateAction<number>>;
  placeholder: string;
  labels: { [key: string]: string };
  options: string[];
  triggerRef: React.RefObject<HTMLButtonElement>;
  error: boolean;
  disabled: boolean;
}

const SelectContext = createContext<SelectContextValue | null>(null);

const useSelectContext = () => {
  const context = useContext(SelectContext);
  if (!context) {
    throw new Error("useSelectContext는 Select 컴포넌트 안에서만 사용할 수 있습니다.");
  }
  return context;
};

export const SelectTrigger = React.forwardRef<HTMLButtonElement>(({ ...props }, ref) => {
  const {
    value,
    labels,
    isOpen,
    setIsOpen,
    onChange,
    placeholder,
    error,
    options,
    setFocusedIndex,
    focusedIndex,
    disabled,
  } = useSelectContext();

  const onClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    setIsOpen(!isOpen);
  };

  const onKeyDown: React.KeyboardEventHandler<HTMLButtonElement> = (event) => {
    if (event.key === "Tab") {
      if (isOpen) {
        event.preventDefault();
      }
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      event.stopPropagation();

      const isFirstItem = focusedIndex === 0;

      if (isFirstItem) {
        setFocusedIndex(options.length - 1);
      } else {
        setFocusedIndex(focusedIndex - 1);
      }
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();
      event.stopPropagation();

      const isLastItem = focusedIndex === options.length - 1;

      if (isLastItem) {
        setFocusedIndex(0);
      } else {
        setFocusedIndex(focusedIndex + 1);
      }
    }

    if (event.key === "Escape") {
      setIsOpen(false);
    }

    if (event.key === "Enter" || event.key === " " || event.key === "Spacebar") {
      if (!isOpen) return;

      event.preventDefault();
      setIsOpen(false);
      setFocusedIndex(focusedIndex);
      onChange(options[focusedIndex]);
    }
  };

  const label = labels[value];

  return (
    <button
      className={cn(
        "relative flex h-9 w-full items-center justify-between rounded-lg bg-secondary px-3 pr-9 text-[13px] font-medium transition",
        "focus:outline-none",
        label ? "text-gray-900" : "text-gray-400",
        error && "border-error focus:border-error focus:ring-error-lighter",
        disabled && "opacity-50",
        !isOpen && "hover:bg-secondary-dark",
      )}
      role="combobox"
      aria-label="select"
      aria-controls="select"
      aria-expanded={isOpen ? "true" : "false"}
      type="button"
      ref={ref}
      onClick={onClick}
      onKeyDown={onKeyDown}
      disabled={disabled}
      {...props}
    >
      {label || placeholder}
      <ChevronDown className="absolute right-3 h-4 w-4" />
    </button>
  );
});
SelectTrigger.displayName = "SelectTrigger";

interface SelectContentProps {
  children: React.ReactNode;
}

export const SelectContent = ({ children }: SelectContentProps) => {
  const { isOpen, setIsOpen, value, setFocusedIndex } = useSelectContext();

  const ref = useRef<HTMLUListElement>(null);

  const onOutsideClick = useCallback(() => {
    if (!isOpen) return;

    setIsOpen(false);
  }, [isOpen, setIsOpen]);

  useOutsideClick(ref, onOutsideClick);

  const currentValueIndex = children
    ? (React.Children.toArray(children) as React.ReactElement[]).findIndex(
        (child) => child.props.value === value,
      )
    : 0;

  useEffect(() => {
    if (isOpen) {
      setFocusedIndex(currentValueIndex);
    }
  }, [isOpen, setFocusedIndex, currentValueIndex]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="absolute top-10 z-50 min-w-full animate-dropdown-open overflow-hidden rounded-lg border bg-white shadow-md">
      <ul
        className="flex max-h-[200px] flex-col gap-0.5 overflow-y-auto border-border p-1"
        ref={ref}
        style={{
          scrollbarWidth: "thin",
          scrollbarColor: `${colors.gray[200]} ${colors.white}`,
        }}
      >
        {children}
      </ul>
    </div>
  );
};

interface SelectItemProps {
  children: React.ReactNode;
  value: string;
}

export const SelectItem = ({ children, value }: SelectItemProps) => {
  const {
    value: selectedValue,
    onChange,
    setIsOpen,
    options,
    focusedIndex,
    setFocusedIndex,
  } = useSelectContext();

  const itemRef = useRef<HTMLLIElement>(null);

  const currentIndex = options.findIndex((option) => option === value);

  const onClick = () => {
    onChange(value);
    setIsOpen(false);
    setFocusedIndex(currentIndex);
  };

  const selected = value === selectedValue;
  const focused = currentIndex === focusedIndex;

  useEffect(() => {
    if (focused) {
      itemRef.current?.scrollIntoView({
        block: "nearest",
        inline: "nearest",
      });
    }
  }, [focused]);

  return (
    <li role="option" aria-selected={selected} ref={itemRef}>
      <button
        tabIndex={-1}
        className={cn(
          "flex h-9 w-full cursor-pointer items-center whitespace-nowrap rounded-md p-1 px-2 text-[13px] hover:bg-gray-50",
          selected && "font-semibold text-black",
          focused && "bg-gray-50",
        )}
        onClick={onClick}
      >
        {children}
      </button>
    </li>
  );
};

interface SelectProps {
  value: string;
  onChange: (value: string) => void;
  children: React.ReactNode;
  placeholder?: string;
  error?: boolean;
  disabled?: boolean;
}

export const SelectComp = React.forwardRef<HTMLButtonElement, SelectProps>(
  ({ children, value, onChange, placeholder = "", disabled = false, error = false }, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const [focusedIndex, setFocusedIndex] = useState(0);

    const triggerRef = useRef<HTMLButtonElement>(null);

    const childrenArray = React.Children.toArray(children) as React.ReactElement[];

    const labels = Object.fromEntries(
      childrenArray.map((child) => [child.props.value, child.props.children]),
    ) as { [key: string]: string };

    const options = childrenArray.map((child) => child.props.value);

    return (
      <SelectContext.Provider
        value={{
          isOpen,
          setIsOpen,
          value,
          onChange,
          focusedIndex,
          setFocusedIndex,
          placeholder,
          labels,
          triggerRef: (ref ?? triggerRef) as React.RefObject<HTMLButtonElement>,
          error,
          options,
          disabled,
        }}
      >
        <div className="relative">
          <SelectTrigger ref={ref || triggerRef} />
          <SelectContent>{children}</SelectContent>
        </div>
      </SelectContext.Provider>
    );
  },
);
SelectComp.displayName = "Select";

export const Select = Object.assign(SelectComp, {
  Item: SelectItem,
});
