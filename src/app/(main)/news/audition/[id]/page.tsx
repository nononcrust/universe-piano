"use client";

import { Markdown } from "@/components/markdown";
import { CommentInput } from "@/components/notice/comment-input";
import { CommentItem } from "@/components/notice/comment-item";
import { Button } from "@/components/ui/button";
import { ROUTE } from "@/constants/route";
import { useAuditionDetail, useDeleteAuditionComment } from "@/features/audition";
import { AccessControl } from "@/lib/acl";
import { formatDate, formatDateDistance } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function AuditionDetailPage() {
  const { id } = useParams();

  const { data } = useAuditionDetail(Number(id));

  const { mutate, isPending } = useDeleteAuditionComment();

  const onCommentDelete = (commentId: number) => {
    if (isPending) return;

    mutate(commentId);
  };

  return (
    <main className="container py-16">
      <h1 className="text-2xl font-bold text-foreground md:mt-8 md:text-3xl">오디션 결과 발표</h1>
      {data && (
        <>
          <div className="mt-12 border-b pb-8">
            <h2 className="text-lg font-semibold md:text-2xl">{data.title}</h2>
            <p className="mt-4 text-sm text-muted-foreground">{formatDate(data.createdAt)}</p>
          </div>
          <div className="relative mt-8 flex max-w-full">
            {data.image && <Image width={500} height={400} src={data.image} alt="" />}
          </div>
          <Markdown className="prose mt-8" content={data.content} />
          <h1 className="mt-24 text-xl font-bold text-foreground md:text-2xl">
            댓글 {data._count.comments}
          </h1>
          <AccessControl>
            <CommentInput className="mt-8" auditionId={Number(id)} />
          </AccessControl>
          <ul className="mt-8 flex flex-col gap-8">
            {data.comments.map((comment) => (
              <CommentItem
                key={comment.id}
                authorId={comment.user.id}
                profileImage={comment.user.profileImage}
                nickname={comment.user.nickname}
                content={comment.content}
                createdAt={formatDateDistance(comment.createdAt)}
                onDelete={() => onCommentDelete(comment.id)}
              />
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
}
