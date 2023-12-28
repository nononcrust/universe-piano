import { Icon } from "@/components/common/icon";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface ReturnToListButtonProps {
  className?: string;
  href: string;
  label: string;
}

export const ReturnToListButton = ({ className, href, label }: ReturnToListButtonProps) => {
  return (
    <Link href={href}>
      <button
        className={cn(
          "group absolute -left-2.5 bottom-12 flex items-center rounded-xl py-1 pl-1 pr-3 text-sm text-muted-foreground transition hover:bg-content hover:text-accent-foreground",
          className,
        )}
      >
        <Icon.ChevronLeft
          className="h-5 w-5 text-muted-foreground group-hover:text-accent-foreground"
          strokeWidth={1}
        />
        {label}
      </button>
    </Link>
  );
};
