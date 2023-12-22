import { cn } from "@/lib/utils";
import { ColoredIcon } from "../colored-icon";
import { Card } from "./card";

export const ChatCard = () => {
  return (
    <Card className="max-h-[400px] min-h-[400px] p-0">
      <div className="flex flex-col p-8">
        <ColoredIcon.Chat className="mb-2 h-12 w-12" />
        <Card.Title>1:1 채팅 상담</Card.Title>
        <Card.Subtitle>
          궁금한 점을 채팅으로 물어보시면 매니저가 친절히 답변해드릴게요.
        </Card.Subtitle>
      </div>
      <Mobile />
    </Card>
  );
};

const Mobile = () => {
  return (
    <div className="flex flex-1 justify-center">
      <div className="flex w-[180px] flex-col rounded-t-3xl bg-gray-100 p-3 pb-0">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-gray-200" />
          <div className="flex flex-col gap-1">
            <div className="h-3 w-[100px] rounded-full bg-gray-200" />
            <div className="h-3 w-[80px] rounded-full bg-gray-200" />
          </div>
        </div>
        <div className="mt-4 flex flex-col gap-2">
          <ChatItem direction="left">어떻게 도와드릴까요?</ChatItem>
          <ChatItem direction="right">안녕하세요!</ChatItem>
          <ChatItem direction="right">컨설팅 진행 과정이 궁금해요</ChatItem>
          <ChatItem direction="left">컨설팅 진행 과정은...</ChatItem>
        </div>
      </div>
    </div>
  );
};

interface ChatItemProps {
  direction?: "left" | "right";
  children?: React.ReactNode;
}

const ChatItem = ({ direction = "left", children }: ChatItemProps) => {
  return (
    <div className={cn("flex", direction === "right" && "justify-end")}>
      <div
        className={cn(
          "flex items-center justify-center rounded-full bg-white p-1 px-2 text-[10px]",
          direction === "left" && "rounded-tl-none",
          direction === "right" && "rounded-tr-none bg-primary text-white",
        )}
      >
        {children}
      </div>
    </div>
  );
};
