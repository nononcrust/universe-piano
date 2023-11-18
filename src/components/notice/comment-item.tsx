"use client";

import { useUserInfo } from "@/features/auth";
import { useDialog } from "@/hooks/use-dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "../ui/alert-dialog";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

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
  const { data: user } = useUserInfo();

  const deleteConfirmDialog = useDialog();

  const isMyComment = user?.id === authorId;

  const onDeleteButtonClick = () => {
    deleteConfirmDialog.open();
  };

  return (
    <div className="flex gap-2">
      <Avatar className="h-10 w-10">
        <AvatarImage src={profileImage} />
        <AvatarFallback />
      </Avatar>
      <div className="flex flex-1 flex-col gap-2">
        <div className="flex items-center justify-between">
          <p className="flex items-center gap-2">
            <span className="font-bold">{nickname}</span>
            <span className="text-xs text-muted-foreground">{createdAt}</span>
          </p>
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
