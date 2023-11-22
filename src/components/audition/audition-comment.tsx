"use client";

import { GetAuditionByIdResponse, useDeleteAuditionComment } from "@/features/audition";
import { formatDateDistance } from "@/lib/utils";
import { CommentItem } from "../notice/comment-item";

interface AuditionCommentProps {
  comment: GetAuditionByIdResponse["comments"][0];
}

export const AuditionComment = ({ comment }: AuditionCommentProps) => {
  const { mutate, isPending } = useDeleteAuditionComment();

  const onCommentDelete = (commentId: number) => {
    if (isPending) return;

    mutate({ id: commentId });
  };

  return (
    <CommentItem
      key={comment.id}
      authorId={comment.user.id}
      profileImage={comment.user.profileImage}
      nickname={comment.user.nickname}
      content={comment.content}
      createdAt={formatDateDistance(comment.createdAt)}
      onDelete={() => onCommentDelete(comment.id)}
    />
  );
};
