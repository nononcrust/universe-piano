import { Card } from "@/components/main/card";
import { ColoredIcon } from "@/components/shared/colored-icon";

export const HelpCenterCard = () => {
  return (
    <Card className="max-h-[400px] min-h-[400px] overflow-hidden p-0">
      <div className="p-8">
        <ColoredIcon.Support className="mb-2 h-12 w-12" />
        <Card.Title>실시간 문의</Card.Title>
        <Card.Subtitle>
          전문 매니저가 실시간으로 소통하며 비즈니스 상황에 맞는 맞춤 지원을 해드려요.
        </Card.Subtitle>
      </div>
      <div className="ml-8 flex h-full flex-col gap-5 overflow-hidden rounded-tl-3xl bg-gray-100 p-8">
        <ChatItem />
        <ChatItem />
        <ChatItem />
      </div>
    </Card>
  );
};

const ChatItem = () => {
  return (
    <div className="flex gap-4">
      <div className="min-w-12 h-12 rounded-full bg-gray-200" />
      <div className="flex flex-col justify-center gap-2">
        <div className="h-4 w-56 rounded-full bg-gray-200" />
        <div className="h-4 w-32 rounded-full bg-gray-200" />
      </div>
    </div>
  );
};
