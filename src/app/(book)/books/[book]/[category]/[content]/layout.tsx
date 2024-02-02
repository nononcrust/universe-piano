import { KitMobileHeader } from "@/components/book/mobile-header";
import { BookNavigationDrawer } from "@/components/book/navigation-drawer";

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
    <div className="flex max-h-screen min-h-screen flex-col overflow-hidden md:flex-row">
      <BookNavigationDrawer book={params.book} />
      <KitMobileHeader />
      <div className="flex-1 overflow-y-auto">
        <main className="container pt-16 md:pt-32">{children}</main>
      </div>
    </div>
  );
}
