import { KitMobileHeader } from "@/components/kit/mobile-header";
import { KitNavigationDrawer } from "@/components/kit/navigation-drawer";

export default function KitLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      <KitNavigationDrawer />
      <KitMobileHeader />
      {children}
    </div>
  );
}
