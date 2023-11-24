"use client";

import { Markdown } from "@/components/markdown";
import { Button } from "@/components/ui/button";
import { ROUTE } from "@/constants/route";
import { useNoticeDetail } from "@/features/notice";
import { formatDate } from "@/lib/utils";
import Link from "next/link";
import { redirect, useParams } from "next/navigation";
import { PageTitle } from "../layout/page-title";

export const NoticeDetail = () => {
  const params = useParams<{ id: string }>();

  const id = Number(params.id);

  const { data } = useNoticeDetail(id);

  if (data === null) return redirect(ROUTE.NEWS.NOTICE.LIST);

  if (!data) return null;

  return (
    <main className="container py-16">
      <PageTitle title="공지사항" />
      <div className="mt-12 border-b pb-8">
        <h2 className="text-lg font-medium md:text-2xl">{data.title}</h2>
        <p className="mt-4 text-sm text-muted-foreground">{formatDate(data.createdAt)}</p>
      </div>
      <Markdown className="prose mt-8" content={data.content} />
      <div className="mt-24">
        <Link href={ROUTE.NEWS.NOTICE.LIST}>
          <Button variant="secondary">목록으로</Button>
        </Link>
      </div>
    </main>
  );
};
