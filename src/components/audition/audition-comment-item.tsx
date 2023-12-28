"use client";

import { CommentItem } from "@/components/notice/comment-item";
import { AuditionComment, useDeleteAuditionComment } from "@/features/audition";
import { formatDateDistance } from "@/lib/utils";

interface AuditionCommentItemProps {
  comment: AuditionComment;
}

export const AuditionCommentItem = ({ comment }: AuditionCommentItemProps) => {
  const deleteAuditionCommentMutation = useDeleteAuditionComment();

  const onCommentDelete = (commentId: string) => {
    if (deleteAuditionCommentMutation.isPending) return;

    deleteAuditionCommentMutation.mutate({ params: { id: commentId } });
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
