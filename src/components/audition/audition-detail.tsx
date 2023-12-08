"use client";

import { AuditionCommentItem } from "@/components/audition/audition-comment-item";
import { PageSubtitle } from "@/components/layout/page-subtitle";
import { Markdown } from "@/components/markdown";
import { CommentInput } from "@/components/notice/comment-input";
import { Button } from "@/components/ui/button";
import { ROUTE } from "@/constants/route";
import { useAuditionDetail } from "@/features/audition";
import { formatDate } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { redirect, useParams } from "next/navigation";
import { AccessControl } from "../access-control";
import { PageTitle } from "../layout/page-title";

export const AuditionDetail = () => {
  const params = useParams<{ id: string }>();

  const { data: audition } = useAuditionDetail({ id: params.id });

  if (audition === null) return redirect(ROUTE.NEWS.AUDITION.LIST);

  return (
    <main className="container pb-16">
      <PageTitle title="오디션 결과 발표" />
      {audition && (
        <>
          <div className="mt-12 border-b pb-8">
            <h2 className="text-lg font-medium md:text-2xl">{audition.title}</h2>
            <p className="mt-4 text-sm text-muted-foreground">{formatDate(audition.createdAt)}</p>
          </div>
          <div className="relative mt-8 flex max-w-full flex-col gap-4">
            {audition.images?.map((image) => (
              <Image
                className="rounded-2xl"
                key={image.id}
                width={500}
                height={500}
                src={image.url}
                alt="게시글 이미지"
              />
            ))}
          </div>
          <Markdown className="prose mt-8" content={audition.content} />
          <PageSubtitle className="mt-24" title={`댓글 ${audition._count.comments}`} />
          <AccessControl>
            <CommentInput className="mt-4" auditionId={audition.id} />
          </AccessControl>
          <ul className="mt-8 flex flex-col gap-8">
            {audition.comments.map((comment) => (
              <AuditionCommentItem key={comment.id} comment={comment} />
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
