import { NoticeListItem } from "@/components/notice-list-item";
import { ROUTE } from "@/lib/constants/route";
import Link from "next/link";

const DUMMY_NOTICE_LIST = Array(10)
  .fill(0)
  .map(() => ({
    title: "공지사항 제목",
    createdAt: "2023.09.23",
  }));

export default function NoticePage() {
  return (
    <main className="container py-16">
      <h1 className="text-2xl font-bold text-foreground md:mt-8 md:text-3xl">공지사항</h1>
      <ul className="mt-8 flex flex-col divide-y">
        <Link href={ROUTE.NOTICE_DETAIL(String(0))}>
          <NoticeListItem title="유니버스 피아노 홈페이지 개설 안내" createdAt="2023.09.23" />
        </Link>
        {DUMMY_NOTICE_LIST.map((item, index) => (
          <Link key={index} href={ROUTE.NOTICE_DETAIL(String(index))}>
            <NoticeListItem title={item.title} createdAt={item.createdAt} />
          </Link>
        ))}
      </ul>
    </main>
  );
}
