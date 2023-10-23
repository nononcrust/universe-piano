import { TailwindIndicator } from "@/components/tailwind-indicator";
import { Toaster } from "@/components/ui/toaster";
import { siteConfig } from "@/configs/site";
import { UserInfoFetcher } from "@/features/auth";
import { Providers } from "@/providers";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  openGraph: siteConfig.openGraph,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head />
      <body>
        <Providers>
          <UserInfoFetcher>
            {children}
            <TailwindIndicator />
          </UserInfoFetcher>
        </Providers>
        <Toaster />
      </body>
    </html>
  );
}
