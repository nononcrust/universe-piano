import { AlertDialog } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

interface DeletConfirmDialogProps {
  onDelete: () => void;
}

export const DeleteConfirmDialog = ({ onDelete }: DeletConfirmDialogProps) => {
  return (
    <AlertDialog>
      <AlertDialog.Trigger asChild>
        <Button className="flex-1 md:flex-initial" variant="error">
          삭제
        </Button>
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
