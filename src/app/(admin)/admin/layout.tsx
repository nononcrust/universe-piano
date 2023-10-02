import { NavigationDrawer } from "@/components/admin/navigation-drawer";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-1">
      <NavigationDrawer />
      <div className="flex-1 p-8 pb-16">{children}</div>
    </div>
  );
}
