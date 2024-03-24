"use client";

import { PageTitle } from "@/components/layout/page-title";
import { Markdown } from "@/components/shared/markdown";
import { Button } from "@/components/ui/button";
import { ROUTE } from "@/constants/route";
import { useNoticeDetail } from "@/features/notice";
import { formatDate } from "@/lib/utils";
import Link from "next/link";
import { redirect, useParams } from "next/navigation";

export const NoticeDetail = () => {
  const params = useParams<{ id: string }>();

  const { data } = useNoticeDetail({ id: params.id });

  if (data === null) return redirect(ROUTE.NEWS.NOTICE.LIST);

  if (!data) return null;

  return (
    <main className="container pb-16">
      <PageTitle title="공지사항" />
      <div className="mt-12 border-b pb-8">
        <h2 className="text-lg font-medium md:text-2xl">{data.title}</h2>
        <p className="mt-4 text-sm text-sub">{formatDate(data.createdAt)}</p>
      </div>
      <div className="mt-8 flex break-all">
        <Markdown className="prose flex-1" content={data.content} />
      </div>
      <div className="mt-24">
        <Link href={ROUTE.NEWS.NOTICE.LIST}>
          <Button variant="secondary">목록으로</Button>
        </Link>
      </div>
    </main>
  );
};
