"use client";

import { Icon } from "@/components/shared/icon";
import { AlertDialog } from "@/components/ui/alert-dialog";
import { IconButton } from "@/components/ui/icon-button";
import { ReviewList, useDeleteReview } from "@/services/review";
import { ColumnDef } from "@tanstack/react-table";

export const reviewColumns: ColumnDef<ReviewList[number]>[] = [
  {
    accessorKey: "user.name",
    header: "작성자",
    // cell: ({ row }) => (
    //   <Link className="hover:underline" href={ROUTE.ADMIN.REVIEW.EDIT(row.original.id)}>
    //     {row.original.user.name}
    //   </Link>
    // ),
  },
  {
    accessorKey: "product.name",
    header: "상품명",
  },
  {
    accessorKey: "rating",
    header: "평점",
  },
  {
    accessorKey: "content",
    header: "내용",
  },
  {
    id: "action",
    cell: ({ row }) => <DeleteButton id={row.original.id} />,
  },
];

interface DeleteButtonProps {
  id: string;
}

const DeleteButton = ({ id }: DeleteButtonProps) => {
  const deleteMutation = useDeleteReview();

  const onDelete = () => {
    if (deleteMutation.isPending) return;

    deleteMutation.mutate({ params: { id } });
  };

  return (
    <AlertDialog>
      <AlertDialog.Trigger asChild>
        <IconButton className="rounded-lg border">
          <Icon.Trash2 className="size-4" />
        </IconButton>
      </AlertDialog.Trigger>
      <AlertDialog.Content>
        <AlertDialog.Header>
          <AlertDialog.Title>정말로 삭제하시겠습니까?</AlertDialog.Title>
          <AlertDialog.Description>
            삭제된 데이터는 복구할 수 없습니다. 신중히 결정해주세요.
          </AlertDialog.Description>
        </AlertDialog.Header>
        <AlertDialog.Footer>
          <AlertDialog.Cancel>취소</AlertDialog.Cancel>
          <AlertDialog.Action onClick={onDelete}>삭제</AlertDialog.Action>
        </AlertDialog.Footer>
      </AlertDialog.Content>
    </AlertDialog>
  );
};
