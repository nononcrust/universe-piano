import { TailwindIndicator } from "@/components/tailwind-indicator";
import { UserInfoFetcher } from "@/components/user-info-fetcher";
import { siteConfig } from "@/configs/site";
import { Providers } from "@/providers";
import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Toaster } from "sonner";
import "../styles/globals.css";

const pretendard = localFont({
  src: [
    {
      path: "../assets/fonts/Pretendard-ExtraLight.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../assets/fonts/Pretendard-Thin.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../assets/fonts/Pretendard-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/fonts/Pretendard-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/Pretendard-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/Pretendard-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../assets/fonts/Pretendard-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/fonts/Pretendard-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../assets/fonts/Pretendard-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
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
