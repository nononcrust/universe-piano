import { TailwindIndicator } from "@/components/common/tailwind-indicator";
import { UserInfoFetcher } from "@/components/common/user-info-fetcher";
import { siteConfig } from "@/configs/site";
import { GoogleAnalytics } from "@/lib/google-analytics";
import { Providers } from "@/providers";
import "@/styles/globals.css";
import type { Metadata, Viewport } from "next";
import { Toaster } from "sonner";
import "swiper/css";
import "swiper/css/pagination";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  icons: siteConfig.icons,
  ...(process.env.NODE_ENV === "production" && { openGraph: siteConfig.openGraph }),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <GoogleAnalytics />
      </head>
      <body className="tracking-tight antialiased">
        <Providers>
          <UserInfoFetcher>
            {children}
            <TailwindIndicator />
          </UserInfoFetcher>
        </Providers>
        <Toaster richColors />
      </body>
    </html>
  );
}
