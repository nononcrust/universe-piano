import { ColoredIcon } from "../colored-icon";
import { Card } from "./card";

export const FaqCard = () => {
  return (
    <Card className="max-h-[192px] min-h-[192px] p-0" half>
      <div className="flex flex-col p-8">
        <ColoredIcon.Question className="mb-2 h-12 w-12" />
        <Card.Title>자주 묻는 질문</Card.Title>
        <Card.Subtitle>궁금한 점을 미리 확인해보세요.</Card.Subtitle>
      </div>
    </Card>
  );
};
