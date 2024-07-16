import { SectionSubtitle } from "@/components/shared/section-subtitle";
import { SectionTitle } from "@/components/shared/section-title";
import { Aos } from "@/components/ui/aos";

export const TutoringInfoSection = () => {
  return (
    <section className="bg-zinc-900 py-32 text-white">
      <Aos className="container">
        <SectionTitle className="text-left">과외 상세정보</SectionTitle>
        <SectionSubtitle className="text-left text-gray-300">
          자세한 정보는 홈페이지 우측 하단 채팅 창에서 확인 하실 수 있습니다.
        </SectionSubtitle>
        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
          <div className="row-span-2 rounded-2xl bg-zinc-800 p-8">
            <p className="text-lg font-bold md:text-2xl">과외 절차</p>
            <ul className="ml-4 list-decimal">
              <li className="mt-4 font-medium text-gray-300">과외 신청서 작성</li>
              <li className="mt-4 font-medium text-gray-300">멘토와 1:1 미팅</li>
              <li className="mt-4 font-medium text-gray-300">과외 진행 여부 확정</li>
              <li className="mt-4 font-medium text-gray-300">과외 일정 조율 & 계약서 작성</li>
              <li className="mt-4 font-medium text-gray-300">과외 시작</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-zinc-800 p-8">
            <p className="text-lg font-bold md:text-2xl">과외 비용</p>
            <ul className="ml-4 list-disc">
              <li className="mt-4 font-medium text-gray-300">790,000</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-zinc-800 p-8">
            <p className="text-lg font-bold md:text-2xl">과외 신청서 작성 방법</p>
            <ul className="ml-4 list-disc">
              <li className="mt-4 font-medium text-gray-300">
                채널톡에서 과외 신청서 링크 확인하실 수 있습니다.
              </li>
            </ul>
          </div>
        </div>
      </Aos>
    </section>
  );
};
