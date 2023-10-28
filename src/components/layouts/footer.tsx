"use client";

import { footerNav, siteConfig } from "@/configs/site";
import { ASSET } from "@/constants/asset";
import { ROUTE } from "@/constants/route";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Footer = () => {
  const pathname = usePathname();

  const isAdminPage = pathname.startsWith(ROUTE.ADMIN.HOME);

  if (isAdminPage) return null;

  return (
    <footer className="border-t">
      <div className="container py-8">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {Object.values(footerNav).map((section, index) => (
            <div key={index} className="flex flex-col">
              <p className="font-medium">{section.title}</p>
              <div className="mt-2">
                {section.children.map((item) => (
                  <p
                    key={item.title}
                    className="mt-1 text-sm text-muted-foreground transition hover:text-accent-foreground"
                  >
                    <Link href={item.href}>{item.title}</Link>
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-sm text-muted-foreground">
          <p>
            (주)유니버스 피아노 | 대표이사: 김원붕 | 사업자번호: 120-39-190283 | 통신판매업
            신고번호: 제 2023-용인기흥-2730
          </p>
          <p>
            경기도 용인시 성복 2로 220 304 | nononcrust@gmail.com | 개인정보책임관리자: 김원붕 |
            문의: 채널톡
          </p>
        </div>
        <SocialIconList />
      </div>
    </footer>
  );
};

const SocialIconList = () => {
  return (
    <div className="mt-4 flex gap-2">
      <Link
        href={siteConfig.links.instagram}
        target="_blank"
        className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-400 transition hover:bg-gray-500"
      >
        <Image
          src={ASSET.SOCIAL.INSTAGRAM}
          width={18}
          height={18}
          alt="instagram"
          className="h-auto"
        />
      </Link>
      <Link
        href={siteConfig.links.kakao}
        target="_blank"
        className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-gray-400 transition hover:bg-gray-500"
      >
        <Image
          src={ASSET.SOCIAL.KAKAO}
          width={18}
          height={18}
          alt="kakao"
          className="translate-y-[0.5px]"
        />
      </Link>
      <Link
        href={siteConfig.links.blog}
        target="_blank"
        className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-400 transition hover:bg-gray-500"
      >
        <Image
          src={ASSET.SOCIAL.NAVER_BLOG}
          width={16}
          height={16}
          alt="naver-blog"
          className="translate-y-[0.5px]"
        />
      </Link>
      <Link
        href={siteConfig.links.cafe}
        target="_blank"
        className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-400 transition hover:bg-gray-500"
      >
        <Image
          src={ASSET.SOCIAL.NAVER_CAFE}
          width={16}
          height={16}
          alt="naver-cafe"
          className="translate-x-[1px]"
        />
      </Link>
    </div>
  );
};
