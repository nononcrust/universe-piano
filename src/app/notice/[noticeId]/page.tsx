import { Button } from "@/components/ui/button";
import { ROUTE } from "@/lib/constants/route";
import Link from "next/link";

export default function NoticeDetailPage() {
  return (
    <main className="container py-16">
      <h1 className="text-2xl font-bold text-foreground md:mt-8 md:text-3xl">공지사항</h1>
      <div className="mt-12 border-b pb-8">
        <h2 className="text-lg font-semibold md:text-2xl">유니버스 피아노 홈페이지 개설 안내</h2>
        <p className="mt-4 text-sm text-muted-foreground">2023.09.23</p>
      </div>
      <div className="mt-8">
        <p>안녕하세요, 유니버스 피아노 사이트 관리자입니다.</p>
        <br />
        <p>유니버스 피아노의 홈페이지가 새로 개설되었다는 점을 알려드립니다. 감사합니다.</p>
      </div>
      <div className="mt-24">
        <Link href={ROUTE.NOTICE}>
          <Button variant="secondary">목록으로</Button>
        </Link>
      </div>
    </main>
  );
}
