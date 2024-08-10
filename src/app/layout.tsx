import "@/styles/globals.css";

import { FloatingKakaoButton } from "@/components/shared/floating-kakao-button";
import { TailwindIndicator } from "@/components/shared/tailwind-indicator";
import { UserInfoFetcher } from "@/components/shared/user-info-fetcher";
import { siteConfig } from "@/configs/site";
import { FacebookBusiness } from "@/lib/facbook-business";
import { GoogleAnalytics } from "@/lib/google-analytics";
import { cn } from "@/lib/utils";
import { Providers } from "@/providers";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Suspense } from "react";
import { Toaster } from "sonner";

const pretendard = localFont({
  src: [
    {
      path: "../assets/fonts/Pretendard-Regular.subset.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/Pretendard-Medium.subset.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/Pretendard-SemiBold.subset.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../assets/fonts/Pretendard-Bold.subset.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/fonts/Pretendard-ExtraBold.subset.woff2",
      weight: "800",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-pretendard",
});

const nanumSquareNeo = localFont({
  src: [
    {
      path: "../assets/fonts/NanumSquareNeo-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/fonts/NanumSquareNeo-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-nanum-square-neo",
});

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  icons: siteConfig.icons,
  ...(process.env.NODE_ENV === "production" && { openGraph: siteConfig.openGraph }),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={cn(pretendard.variable, nanumSquareNeo.variable)}>
      <head>
        <GoogleAnalytics />
        <FacebookBusiness />
      </head>
      <body className="tracking-tight antialiased">
        <Suspense>
          <Providers>
            <UserInfoFetcher>
              {children}
              <TailwindIndicator />
            </UserInfoFetcher>
          </Providers>
          <Toaster />
          <FloatingKakaoButton />
          <SpeedInsights />
        </Suspense>
      </body>
    </html>
  );
}
