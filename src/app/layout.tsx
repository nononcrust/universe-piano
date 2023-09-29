import { Header } from "@/components/layouts/header";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "유니버스 피아노",
  description: "유니버스 피아노 홈페이지",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head />
      <body className={cn("min-h-screen bg-background font-sans antialiased")}>
        <div className="flex flex-col">
          <Header />
          <div className="flex-1">{children}</div>
          <TailwindIndicator />
        </div>
      </body>
    </html>
  );
}
