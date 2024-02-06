import { KitMobileHeader } from "@/components/book/mobile-header";
import { BookNavigationDrawer } from "@/components/book/navigation-drawer";
import { ScrollArea } from "@/components/common/scroll-area";

export default function BookLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {
    book: string;
    content: string;
  };
}) {
  return (
    <div className="flex max-h-screen min-h-screen flex-col overflow-y-hidden md:flex-row">
      <BookNavigationDrawer book={params.book} />
      <KitMobileHeader book={params.book} />
      <ScrollArea className="flex-1 max-md:mt-16">
        <main className="container pt-16 md:pt-32">{children}</main>
      </ScrollArea>
    </div>
  );
}
