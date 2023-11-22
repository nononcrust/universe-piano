"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Category = {
  title: string;
  href: string;
};

interface CategoryTabProps {
  categories: Category[];
}

export const CategoryTab = ({ categories }: CategoryTabProps) => {
  const pathname = usePathname();
  const isActive = (href: string) => pathname.startsWith(href);

  return (
    <div className="hidden h-12 items-center border-b md:flex">
      <div className="container flex h-full items-center gap-4">
        {categories.map((category, index) => (
          <Link
            key={index}
            href={category.href}
            className={cn(
              "flex h-full cursor-pointer items-center text-sm text-muted-foreground transition hover:font-medium hover:text-accent-foreground",
              isActive(category.href) && "font-medium text-accent-foreground",
            )}
          >
            {category.title}
          </Link>
        ))}
      </div>
    </div>
  );
};
