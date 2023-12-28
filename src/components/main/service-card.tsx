import { ColoredIcon } from "@/components/colored-icon";
import { Card } from "@/components/main/card";

export const ServiceCard = () => {
  return (
    <Card className="max-h-[400px] min-h-[400px] p-0">
      <div className="p-8">
        <ColoredIcon.Flag className="mb-2 h-12 w-12" />
        <Card.Title>루틴, 기상알림</Card.Title>
        <Card.Subtitle>스마트한 방법으로 루틴을 시작해보세요.</Card.Subtitle>
      </div>
      <div className="flex justify-center gap-4 overflow-hidden">
        <div className="h-[180px] min-w-[150px] rounded-3xl bg-gray-100 p-4"></div>
        <div className="flex h-[180px] min-w-[150px] flex-col gap-4 rounded-3xl bg-gray-100 p-6">
          <div className="h-4 w-full rounded-full bg-gray-200" />
          <div className="h-4 w-full rounded-full bg-gray-200" />
          <div className="h-4 w-full rounded-full bg-gray-200" />
          <div className="h-4 w-full rounded-full bg-gray-200" />
          <div className="h-4 w-full rounded-full bg-gray-200" />
        </div>
        <div className="h-[180px] min-w-[150px] rounded-3xl bg-gray-100"></div>
      </div>
    </Card>
  );
};
