import { ColoredIcon } from "../colored-icon";
import { Card } from "./card";

export const NoticeCard = () => {
  return (
    <Card className="max-h-[192px] min-h-[192px] p-0" half>
      <div className="flex flex-col p-8">
        <ColoredIcon.Notice className="mb-2 h-12 w-12" />
        <Card.Title>공지사항</Card.Title>
        <Card.Subtitle>유니버스 피아노의 새로운 소식을 확인하세요.</Card.Subtitle>
      </div>
    </Card>
  );
};
