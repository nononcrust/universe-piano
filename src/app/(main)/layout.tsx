import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { cn } from "@/lib/utils";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={cn("flex flex-col justify-between bg-background font-sans antialiased")}>
      <div className="flex min-h-screen flex-col">
        <Header />
        <div className="flex flex-1 flex-col">{children}</div>
      </div>
      <Footer />
    </div>
  );
}
