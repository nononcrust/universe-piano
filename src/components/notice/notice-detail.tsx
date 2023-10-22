"use client";

import { ROUTE } from "@/constants/route";
import { Notice, useNoticeById } from "@/features/notice";
import { formatDate } from "@/lib/utils";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Button } from "../ui/button";

interface NoticeDetailProps {
  initialData: Notice;
}

export const NoticeDetail = ({ initialData }: NoticeDetailProps) => {
  const { noticeId } = useParams();

  const { data } = useNoticeById(Number(noticeId), initialData);

  return (
    <main className="container py-16">
      <h1 className="text-2xl font-bold text-foreground md:mt-8 md:text-3xl">공지사항</h1>
      <div className="mt-12 border-b pb-8">
        <h2 className="text-lg font-semibold md:text-2xl">{data?.title}</h2>
        <p className="mt-4 text-sm text-muted-foreground">{formatDate(data?.createdAt)}</p>
      </div>
      <div className="mt-8 whitespace-pre">{data?.content}</div>
      <div className="mt-24">
        <Link href={ROUTE.NOTICE.LIST}>
          <Button variant="secondary">목록으로</Button>
        </Link>
      </div>
    </main>
  );
};
