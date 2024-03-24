import { SectionSubtitle } from "@/components/shared/section-subtitle";
import { SectionTitle } from "@/components/shared/section-title";
import { Aos } from "@/components/ui/aos";

export const ConsultingInfoSection = () => {
  return (
    <section className="bg-zinc-900 py-32 text-white">
      <Aos className="container">
        <SectionTitle className="text-left">컨설팅 상세정보</SectionTitle>
        <SectionSubtitle className="text-left text-gray-300">
          {"더 자세한 내용은 채널톡으로 문의해주세요."}
        </SectionSubtitle>
        <div className="mt-12 flex flex-col gap-8 md:flex-row">
          <div className="w-full rounded-2xl bg-zinc-800 p-8">
            <p className="text-lg font-bold md:text-2xl">컨설팅 절차</p>
            <ul className="ml-4 list-decimal">
              <li className="mt-4 font-medium text-gray-300">대표와 1:1 상담</li>
              <li className="mt-4 font-medium text-gray-300">컨설팅 신청</li>
              <li className="mt-4 font-medium text-gray-300">계약서 작성 및 계약금 입금</li>
              <li className="mt-4 font-medium text-gray-300">컨설팅 시작</li>
            </ul>
          </div>
          <div className="w-full rounded-2xl bg-zinc-800 p-8">
            <p className="text-lg font-bold md:text-2xl">컨설팅 비용</p>
            <ul className="ml-4 list-disc">
              <li className="mt-4 font-medium text-gray-300">
                홈페이지 채널톡 또는 카톡 오픈채팅 유니버스 피아노로 연락 주시면, 비용 안내 파일
                보내드리겠습니다.
              </li>
            </ul>
          </div>
        </div>
      </Aos>
    </section>
  );
};
