"use client";

import { footerNav, siteConfig } from "@/configs/site";
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
              <div className="mt-2 flex flex-col">
                {section.children.map((item) => (
                  <Link
                    key={item.title}
                    className="focus-visible:focus-ring mt-1 w-auto self-start text-sm text-sub transition-colors hover:text-main"
                    href={item.href}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-sm text-sub">
          <p>
            {`${siteConfig.businessName} | 대표이사: ${siteConfig.ceo} | 사업자번호: ${siteConfig.bin} | 통신판매업
            신고번호: 제 ${siteConfig.mailOrderBusinessNumber}`}
          </p>
          <p>
            {`${siteConfig.address} | 전화: ${siteConfig.links.mobile} | 이메일: ${siteConfig.email} | 개인정보책임관리자: ${siteConfig.isa} |
            문의: 채널톡`}
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
        className="focus-visible:focus-ring flex h-8 w-8 items-center justify-center rounded-full bg-gray-400 transition-colors hover:bg-gray-500"
      >
        <Image
          src="/socials/instagram.svg"
          width={18}
          height={18}
          alt="인스타그램 아이콘"
          className="h-auto"
        />
      </Link>
      <Link
        href={siteConfig.links.kakao}
        target="_blank"
        className="focus-visible:focus-ring flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-gray-400 transition-colors hover:bg-gray-500"
      >
        <Image
          src="/socials/kakao.svg"
          width={18}
          height={18}
          alt="카카오 아이콘"
          className="translate-y-[0.5px]"
        />
      </Link>
      <Link
        href={siteConfig.links.blog}
        target="_blank"
        className="focus-visible:focus-ring flex h-8 w-8 items-center justify-center rounded-full bg-gray-400 transition-colors hover:bg-gray-500"
      >
        <Image
          src="/socials/naver-blog.svg"
          width={16}
          height={16}
          alt="네이버 블로그 아이콘"
          className="translate-y-[0.5px]"
        />
      </Link>
      <Link
        href={siteConfig.links.cafe}
        target="_blank"
        className="focus-visible:focus-ring flex h-8 w-8 items-center justify-center rounded-full bg-gray-400 transition-colors hover:bg-gray-500"
      >
        <Image
          src="/socials/naver-cafe.svg"
          width={16}
          height={16}
          alt="네이버 카페 아이콘"
          className="translate-x-[1px]"
        />
      </Link>
    </div>
  );
};
