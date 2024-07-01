"use client";

import { KitMobileHeader } from "@/components/book/mobile-header";
import { BookNavigationDrawer } from "@/components/book/navigation-drawer";
import { ScrollArea } from "@/components/shared/scroll-area";
import { ROUTE } from "@/constants/route";
import { useSession } from "@/features/auth/use-session";
import { CREW_CONTENT_URL } from "@/middleware";
import { usePurchasedProductList } from "@/services/me";
import { redirect, usePathname } from "next/navigation";

// /books/checklist/checklist/intro -> /books/checklist
const getBookBasePath = (path: string) => {
  return path.split("/").slice(0, 3).join("/");
};

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
  const { session } = useSession();

  const pathname = usePathname();

  const bookBasePath = getBookBasePath(pathname);

  const { data: purchasedProducts } = usePurchasedProductList();

  const isCrewContent = CREW_CONTENT_URL.some((url) => bookBasePath === url);

  if (!session || !purchasedProducts) return null;

  const isPurchasedBook = purchasedProducts.some((product) => {
    const productBasePath = getBookBasePath(product.contentUrl);

    return productBasePath === bookBasePath;
  });

  if (!isPurchasedBook && !isCrewContent) return redirect(ROUTE.HOME);

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
