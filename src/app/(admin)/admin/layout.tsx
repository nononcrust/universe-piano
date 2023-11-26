import { MobileHeader } from "@/components/admin/mobile-header";
import { NavigationDrawer } from "@/components/admin/navigation-drawer";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <NavigationDrawer />
      <MobileHeader />
      <div className="flex-1 overflow-y-auto p-8 pb-16">{children}</div>
    </div>
  );
}
