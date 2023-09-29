"use client";

import { noticeApi } from "@/api/notice";
import { Button } from "@/components/ui/button";
import { ROUTE } from "@/lib/constants/route";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function NoticeDetailPage() {
  const { noticeId } = useParams();

  const { data } = useQuery({
    queryFn: () => noticeApi.getNoticeById(Number(noticeId)),
    queryKey: ["notice", "detail", noticeId],
  });

  console.log("@공지사항 상세", data);

  return (
    <main className="container py-16">
      <h1 className="text-2xl font-bold text-foreground md:mt-8 md:text-3xl">공지사항</h1>
      {data && (
        <>
          <div className="mt-12 border-b pb-8">
            <h2 className="text-lg font-semibold md:text-2xl">{data.title}</h2>
            <p className="mt-4 text-sm text-muted-foreground"></p>
          </div>
          <div className="mt-8">{data.content}</div>
          <div className="mt-24">
            <Link href={ROUTE.NOTICE}>
              <Button variant="secondary">목록으로</Button>
            </Link>
          </div>
        </>
      )}
    </main>
  );
}
