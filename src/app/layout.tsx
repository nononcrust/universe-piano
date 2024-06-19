import "@/styles/globals.css";

import { TailwindIndicator } from "@/components/shared/tailwind-indicator";
import { UserInfoFetcher } from "@/components/shared/user-info-fetcher";
import { siteConfig } from "@/configs/site";
import { GoogleAnalytics } from "@/lib/google-analytics";
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

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  icons: siteConfig.icons,
  ...(process.env.NODE_ENV === "production" && { openGraph: siteConfig.openGraph }),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={pretendard.variable}>
      <head>
        <GoogleAnalytics />
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
          <SpeedInsights />
        </Suspense>
      </body>
    </html>
  );
}
