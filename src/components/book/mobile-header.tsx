import { BookMobileNavigationDrawer } from "@/components/book/mobile-navigation-drawer";

interface KitMobileHeaderProps {
  book: string;
}

export const KitMobileHeader = ({ book }: KitMobileHeaderProps) => {
  return (
    <header className="fixed top-0 z-40 flex h-16 w-full items-center justify-between border-b bg-background px-4 md:hidden">
      <div />
      <BookMobileNavigationDrawer book={book} />
    </header>
  );
};
