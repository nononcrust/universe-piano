import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";

interface CommentInputProps {
  className?: string;
}

export const CommentInput = ({ className }: CommentInputProps) => {
  return (
    <div className={cn("flex flex-col", className)}>
      <Textarea placeholder="댓글로 내 생각을 알려주세요." />
      <div className="flex flex-col justify-end md:flex-row">
        <Button className="mt-4">댓글 달기</Button>
      </div>
    </div>
  );
};
