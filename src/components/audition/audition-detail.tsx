"use client";

import { AuditionCommentItem } from "@/components/audition/audition-comment-item";
import { AccessControl } from "@/components/common/access-control";
import { Markdown } from "@/components/common/markdown";
import { PageSubtitle } from "@/components/layout/page-subtitle";
import { PageTitle } from "@/components/layout/page-title";
import { CommentInput } from "@/components/notice/comment-input";
import { Button } from "@/components/ui/button";
import { ROUTE } from "@/constants/route";
import { useAuditionDetail } from "@/features/audition";
import { formatDate } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { redirect, useParams } from "next/navigation";

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
                priority
              />
            ))}
          </div>
          <div className="mt-8">
            <Markdown className="prose" content={audition.content} />
          </div>
          <PageSubtitle className="mt-24" title={`댓글 ${audition._count.comments}`} />
          <AccessControl>
            <CommentInput className="mt-4" auditionId={audition.id} />
          </AccessControl>
          <ul className="mt-8 flex flex-col gap-8">
            <AnimatePresence>
              {audition.comments.map((comment) => (
                <motion.div key={comment.id} layout>
                  <AuditionCommentItem comment={comment} />
                </motion.div>
              ))}
            </AnimatePresence>
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
