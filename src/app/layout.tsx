import { TailwindIndicator } from "@/components/tailwind-indicator";
import { UserInfoFetcher } from "@/components/user-info-fetcher";
import { siteConfig } from "@/configs/site";
import { GoogleAnalytics } from "@/lib/google-analytics";
import { Providers } from "@/providers";
import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Toaster } from "sonner";
import "swiper/css";
import "swiper/css/pagination";
import "../styles/globals.css";

export const revalidate = 0;

const pretendard = localFont({
  src: [
    {
      path: "../../public/fonts/Pretendard-Regular.subset.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Pretendard-Medium.subset.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Pretendard-SemiBold.subset.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/Pretendard-Bold.subset.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

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
    <html lang="ko" className={pretendard.className}>
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
