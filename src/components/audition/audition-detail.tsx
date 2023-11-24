"use client";

import { AuditionComment } from "@/components/audition/audition-comment";
import { PageSubtitle } from "@/components/layout/page-subtitle";
import { Markdown } from "@/components/markdown";
import { CommentInput } from "@/components/notice/comment-input";
import { Button } from "@/components/ui/button";
import { ROUTE } from "@/constants/route";
import { useAuditionDetail } from "@/features/audition";
import { AccessControl } from "@/lib/acl";
import { formatDate } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { redirect, useParams } from "next/navigation";

export const AuditionDetail = () => {
  const params = useParams<{ id: string }>();

  const { data } = useAuditionDetail(Number(params.id));

  if (data === null) return redirect(ROUTE.NEWS.AUDITION.LIST);

  return (
    <main className="container py-16">
      <h1 className="text-2xl font-medium text-foreground md:mt-8 md:text-3xl">오디션 결과 발표</h1>
      {data && (
        <>
          <div className="mt-12 border-b pb-8">
            <h2 className="text-lg font-medium md:text-2xl">{data.title}</h2>
            <p className="mt-4 text-sm text-muted-foreground">{formatDate(data.createdAt)}</p>
          </div>
          <div className="relative mt-8 flex max-w-full">
            {data.image && <Image width={500} height={400} src={data.image} alt="" />}
          </div>
          <Markdown className="prose mt-8" content={data.content} />
          <PageSubtitle className="mt-24" title={`댓글 ${data._count.comments}`} />
          <AccessControl>
            <CommentInput className="mt-4" auditionId={data.id} />
          </AccessControl>
          <ul className="mt-8 flex flex-col gap-8">
            {data.comments.map((comment) => (
              <AuditionComment key={comment.id} comment={comment} />
            ))}
            <div className="mt-8">
              <Link href={ROUTE.NEWS.AUDITION.LIST}>
                <Button variant="secondary">목록으로</Button>
              </Link>
            </div>
          </ul>
        </>
      )}
    </main>
  );
};
