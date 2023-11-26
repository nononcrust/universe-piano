import { TailwindIndicator } from "@/components/tailwind-indicator";
import { UserInfoFetcher } from "@/components/user-info-fetcher";
import { siteConfig } from "@/configs/site";
import { GoogleAnalytics } from "@/lib/google-analytics";
import { Providers } from "@/providers";
import type { Metadata, Viewport } from "next";
import { Toaster } from "sonner";
import "swiper/css";
import "swiper/css/pagination";
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
  icons: siteConfig.icons,
  ...(process.env.NODE_ENV === "production" && { openGraph: siteConfig.openGraph }),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="preload"
          as="style"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          as="style"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-jp-dynamic-subset.min.css"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-jp-dynamic-subset.min.css"
        />
        <GoogleAnalytics />
      </head>
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
