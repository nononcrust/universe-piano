import { Icon } from "@/components/shared/icon";

export const ServicePreparingFallback = () => {
  return (
    <main className="flex flex-col items-center justify-center gap-4">
      <Icon.Construction className="mt-80 text-gray-400" size={48} />
      <h1 className="text-lg text-gray-400">서비스 준비중입니다.</h1>
    </main>
  );
};
