import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export const CommentItem = () => {
  return (
    <div className="flex gap-2">
      <Avatar className="h-10 w-10">
        <AvatarImage />
        <AvatarFallback />
      </Avatar>
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <p className="flex items-center gap-2">
            <span className="font-bold">노논</span>
            <span className="text-xs text-muted-foreground">1시간 전</span>
          </p>
          <p className="cursor-pointer text-xs font-medium text-muted-foreground">삭제</p>
        </div>
        <p>
          오예스로 만든 루돌프네요! 넘 귀여워요ㅎㅎ 오예스로 만든 루돌프네요! 넘 귀여워요ㅎㅎ
          오예스로 만든 루돌프네요! 넘 귀여워요ㅎㅎ 오예스로 만든 루돌프네요! 넘 귀여워요ㅎㅎ
        </p>
      </div>
    </div>
  );
};
