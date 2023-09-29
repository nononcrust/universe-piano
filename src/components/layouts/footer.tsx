import { ROUTE } from "@/lib/constants/route";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="border-t">
      <div className="container py-8">
        <div className="flex gap-8">
          <Link href={ROUTE.HOME}>이용약관</Link>
          <Link className="underline" href={ROUTE.HOME}>
            개인정보취급방침
          </Link>
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
      </div>
    </footer>
  );
};
