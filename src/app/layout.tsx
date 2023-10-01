import { TailwindIndicator } from "@/components/tailwind-indicator";
import { Providers } from "@/providers";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "유니버스 피아노 - 미국 음대 입시의 모든것",
  description: "유니버스 피아노 홈페이지",
  openGraph: {
    title: "유니버스 피아노",
    type: "website",
    locale: "ko_KR",
    url: "https://universe-piano.vercel.app",
    siteName: "유니버스 피아노",
    description: "미국 음대 입시의 모든것, 유니버스 피아노",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 628,
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head />
      <body>
        <Providers>
          {children}
          <TailwindIndicator />
        </Providers>
      </body>
    </html>
  );
}
