import { Footer } from "@/components/layouts/footer";
import { Header } from "@/components/layouts/header";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { cn } from "@/lib/utils";
import { Providers } from "@/providers";
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
      <body>
        <Providers>
          <div className={cn("flex flex-col justify-between bg-background font-sans antialiased")}>
            <div className="flex min-h-screen flex-col">
              <Header />
              <div className="flex flex-1 flex-col">{children}</div>
            </div>
            <Footer />
            <TailwindIndicator />
          </div>
        </Providers>
      </body>
    </html>
  );
}
