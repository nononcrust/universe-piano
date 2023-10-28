import { EbookMobileHeader } from "@/components/ebook/mobile-header";
import { EbookNavigationDrawer } from "@/components/ebook/navigation-drawer";

export default function EbookLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      <EbookNavigationDrawer />
      <EbookMobileHeader />
      {children}
    </div>
  );
}
