import { TailwindIndicator } from "@/components/tailwind-indicator";
import { Toaster } from "@/components/ui/toaster";
import { UserInfoFetcher } from "@/components/user-info-fetcher";
import { siteConfig } from "@/configs/site";
import { Providers } from "@/providers";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import "../styles/globals.css";

export const revalidate = 0;

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  openGraph: siteConfig.openGraph,
  icons: siteConfig.icons,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head />
      <body className="antialiased">
        <Providers>
          <UserInfoFetcher>
            {children}
            <TailwindIndicator />
          </UserInfoFetcher>
        </Providers>
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
