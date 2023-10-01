import { NavigationDrawer } from "@/components/admin/navigation-drawer";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-1">
      <NavigationDrawer />
      {children}
    </div>
  );
}
