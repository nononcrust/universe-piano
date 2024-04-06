"use client";

import { AuditionCommentItem } from "@/components/audition/audition-comment-item";
import { PageSubtitle } from "@/components/layout/page-subtitle";
import { PageTitle } from "@/components/layout/page-title";
import { CommentInput } from "@/components/notice/comment-input";
import { AccessControl } from "@/components/shared/access-control";
import { Markdown } from "@/components/shared/markdown";
import { Button } from "@/components/ui/button";
import { ROUTE } from "@/constants/route";
import { formatDate } from "@/lib/utils";
import { useAuditionDetail } from "@/services/audition";
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
            <p className="text-sub mt-4 text-sm">{formatDate(audition.createdAt)}</p>
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
              <Button variant="secondary" asChild>
                <Link href={ROUTE.NEWS.AUDITION.LIST}>목록으로</Link>
              </Button>
            </div>
          </ul>
        </>
      )}
    </main>
  );
};
