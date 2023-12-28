import { ColoredIcon } from "@/components/colored-icon";
import { Card } from "@/components/main/card";

export const ZoomCard = () => {
  return (
    <Card className="max-h-[400px] min-h-[400px] overflow-hidden p-0 md:col-span-2">
      <div className="p-8">
        <ColoredIcon.Conference className="mb-2 h-12 w-12" />
        <Card.Title>줌 화상회의</Card.Title>
        <Card.Subtitle>화상회의를 통한 실시간 소통이 가능합니다.</Card.Subtitle>
      </div>
      <div className="flex flex-1 justify-center px-8">
        <div className="flex h-full w-full rounded-t-3xl bg-gray-100 p-4 pb-0">
          <ZoomLeft />
          <ZoomRight />
        </div>
      </div>
    </Card>
  );
};

const ZoomLeft = () => {
  return (
    <div className="relative flex h-full w-full justify-center rounded-tl-2xl bg-gray-200">
      <div className="absolute bottom-4 left-1/2 flex h-8 w-[200px] -translate-x-1/2 items-center justify-center gap-3 rounded-xl bg-zinc-900 opacity-70">
        <div className="h-4 w-4 rounded-sm bg-gray-50" />
        <div className="h-4 w-4 rounded-sm bg-gray-50" />
        <div className="h-4 w-4 rounded-sm bg-gray-50" />
        <div className="h-4 w-4 rounded-sm bg-gray-50" />
        <div className="h-4 w-4 rounded-sm bg-gray-50" />
        <div className="h-4 w-4 rounded-sm bg-red-500" />
      </div>
      <div className="flex flex-col items-center">
        <div className="mt-4 h-20 w-20 rounded-full bg-white" />
        <div className="mt-4 w-32 flex-1 rounded-t-[40px] bg-white" />
      </div>
    </div>
  );
};

const ZoomRight = () => {
  return (
    <div className="flex h-full flex-col gap-2 rounded-r-2xl bg-gray-300 p-3">
      <SmallProfile />
      <SmallProfile />
      <SmallProfile />
      <SmallProfile />
    </div>
  );
};

const SmallProfile = () => {
  return (
    <div className="flex h-8 w-8 flex-col items-center gap-1 rounded-lg bg-gray-100">
      <div className="mt-1 h-3 w-3 rounded-full bg-white" />
      <div className="w-4 flex-1 rounded-t-sm bg-white" />
    </div>
  );
};
