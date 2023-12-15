import { Button } from "./ui/button";

export const ServiceFloatingButton = () => {
  return (
    <div className="fixed bottom-4 z-50 hidden w-full flex-col items-center justify-center md:flex">
      <div className="flex w-full max-w-[560px] items-center justify-between gap-12 rounded-2xl border bg-white p-4 pl-6 font-semibold shadow-md">
        <p>더 자세한 내용을 알고 싶으신가요?</p>
        <Button>상담하기</Button>
      </div>
    </div>
  );
};
