import { clsx, type ClassValue } from "clsx";
import { format } from "date-fns";
import { twMerge } from "tailwind-merge";

export const noop = () => {};

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const formatDate = (date: string | Date) => {
  return format(new Date(date), "yyyy.MM.dd");
};

export const formatDateTime = (date: string | Date) => {
  return format(new Date(date), "yyyy.MM.dd HH:mm");
};

export const formatDateDistance = (date: string | Date) => {
  const start = new Date(date);
  const end = new Date();

  const seconds = Math.floor((end.getTime() - start.getTime()) / 1000);
  if (seconds < 60) return "방금 전";

  const minutes = seconds / 60;
  if (minutes < 60) return `${Math.floor(minutes)}분 전`;

  const hours = minutes / 60;
  if (hours < 24) return `${Math.floor(hours)}시간 전`;

  const days = hours / 24;
  if (days < 7) return `${Math.floor(days)}일 전`;

  return `${start.toLocaleDateString()}`;
};

export const formatPhoneNumberInput = (input: string) => {
  const cleaned = ("" + input).replace(/\D/g, "");

  const part1 = cleaned.slice(0, 3);
  const part2 = cleaned.slice(3, 7);
  const part3 = cleaned.slice(7, 11);

  if (cleaned.length > 7) {
    return `${part1}-${part2}-${part3}`;
  } else if (cleaned.length > 3) {
    return `${part1}-${part2}`;
  } else {
    return part1;
  }
};
