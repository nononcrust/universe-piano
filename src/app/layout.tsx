import { TailwindIndicator } from "@/components/tailwind-indicator";
import { UserInfoFetcher } from "@/components/user-info-fetcher";
import { siteConfig } from "@/configs/site";
import { Providers } from "@/providers";
import type { Metadata, Viewport } from "next";
import { Toaster } from "sonner";
import "swiper/css";
import "swiper/css/pagination";
import "../styles/font.css";
import "../styles/globals.css";

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
    <html lang="ko">
      <head />
      <body className="tracking-tight antialiased">
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
