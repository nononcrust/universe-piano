"use client";

import { AlertDialog } from "@/components/ui/alert-dialog";
import { Avatar } from "@/components/ui/avatar";
import { useSession } from "@/features/auth/use-session";
import { useDialog } from "@/hooks/use-dialog";

interface CommentItemProps {
  authorId: string;
  profileImage: string;
  nickname: string;
  content: string;
  createdAt: string;
  onDelete: () => void;
}

export const CommentItem = ({
  authorId,
  profileImage,
  nickname,
  content,
  createdAt,
  onDelete,
}: CommentItemProps) => {
  const { session } = useSession();

  const deleteConfirmDialog = useDialog();

  const isMyComment = session?.user.id === authorId;

  const onDeleteButtonClick = () => {
    deleteConfirmDialog.open();
  };

  return (
    <div className="flex gap-3">
      <Avatar className="h-8 w-8">
        <Avatar.Image src={profileImage} />
        <Avatar.Fallback />
      </Avatar>
      <div className="flex flex-1 flex-col gap-2">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <p className="text-sm font-medium">{nickname}</p>
            <p className="text-xs text-sub">{createdAt}</p>
          </div>
          {isMyComment && (
            <p
              className="cursor-pointer text-xs font-medium text-sub"
              onClick={onDeleteButtonClick}
            >
              삭제
            </p>
          )}
        </div>
        <p>{content}</p>
      </div>
      <AlertDialog
        open={deleteConfirmDialog.isOpen}
        onOpenChange={deleteConfirmDialog.onOpenChange}
      >
        <AlertDialog.Content>
          <AlertDialog.Header>
            <AlertDialog.Title>댓글을 삭제할까요?</AlertDialog.Title>
          </AlertDialog.Header>
          <AlertDialog.Footer>
            <AlertDialog.Action onClick={onDelete}>삭제</AlertDialog.Action>
            <AlertDialog.Cancel>취소</AlertDialog.Cancel>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog>
    </div>
  );
};
