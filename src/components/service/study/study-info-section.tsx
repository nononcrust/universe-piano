import { SectionSubtitle } from "@/components/shared/section-subtitle";
import { SectionTitle } from "@/components/shared/section-title";
import { Aos } from "@/components/ui/aos";

export const StudyInfoSection = () => {
  return (
    <section className="bg-zinc-900 py-32 text-white">
      <Aos className="container">
        <SectionTitle className="text-left">
          스터디 신청 및 <span className="text-primary">월별 커리큘럼 </span>확인
        </SectionTitle>
        <SectionSubtitle className="text-left text-gray-300">
          {
            "스터디 신청 방법 및 월별 커리큘럼은 홈페이지 우측 하단 채팅 창에서 확인 하실 수 있습니다."
          }
        </SectionSubtitle>
        <div className="mt-20 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
          <div className="rounded-2xl bg-zinc-800 p-8">
            <p className="text-2xl font-bold">스터디 모집 기간 및 비용</p>
            <ul className="ml-4 list-disc">
              <li className="mt-4 font-medium text-gray-300">모집 기간: 매월 20일 - 29일</li>
              <li className="mt-4 font-medium text-gray-300">월 190,000</li>
              <li className="mt-4 font-medium text-gray-300">
                스터디 비용과 스터디 벌금은 별도입니다.
              </li>
            </ul>
          </div>
          <div className="rounded-2xl bg-zinc-800 p-8">
            <p className="text-2xl font-bold">스터디 벌금</p>
            <ul className="ml-4 list-disc">
              <li className="mt-4 font-medium text-gray-300">인증 기준 미달 시, 벌금 부과</li>
              <li className="mt-4 font-medium text-gray-300">
                모여진 벌금은 월말에 가장 성실하게 공부하신 분께 전액 수여합니다.
              </li>
            </ul>
          </div>
        </div>
      </Aos>
    </section>
  );
};
