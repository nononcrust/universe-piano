import { TailwindIndicator } from "@/components/tailwind-indicator";
import { UserInfoFetcher } from "@/components/user-info-fetcher";
import { siteConfig } from "@/configs/site";
import { Providers } from "@/providers";
import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Toaster } from "sonner";
import "../styles/globals.css";

const pretendard = localFont({
  src: "../assets/fonts/pretendard-variable.woff2",
  display: "block",
});

export const revalidate = 0;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  openGraph: siteConfig.openGraph,
  icons: siteConfig.icons,
  ...(process.env.NODE_ENV === "development" && { metadataBase: new URL("http://localhost") }),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={pretendard.className}>
      <head />
      <body className="antialiased">
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
