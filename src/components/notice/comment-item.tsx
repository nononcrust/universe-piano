"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useSession } from "@/features/auth";
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
  const { data: session } = useSession();

  const deleteConfirmDialog = useDialog();

  const isMyComment = session?.user.id === authorId;

  const onDeleteButtonClick = () => {
    deleteConfirmDialog.open();
  };

  return (
    <div className="flex gap-3">
      <Avatar className="h-8 w-8">
        <AvatarImage src={profileImage} />
        <AvatarFallback />
      </Avatar>
      <div className="flex flex-1 flex-col gap-2">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <p className="text-sm font-medium">{nickname}</p>
            <p className="text-xs text-muted-foreground">{createdAt}</p>
          </div>
          {isMyComment && (
            <p
              className="cursor-pointer text-xs font-medium text-muted-foreground"
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
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>댓글을 삭제할까요?</AlertDialogTitle>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={onDelete}>삭제</AlertDialogAction>
            <AlertDialogCancel>취소</AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};
