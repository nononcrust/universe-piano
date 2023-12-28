import image1 from "@/assets/images/consulting/consulting-package-1.png";
import image2 from "@/assets/images/consulting/consulting-package-2.png";
import { Icon } from "@/components/common/icon";
import { SectionSubtitle } from "@/components/common/section-subtitle";
import { SectionTitle } from "@/components/common/section-title";
import { Aos } from "@/components/ui/aos";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import Image from "next/image";

export const ConsultingPackageSection = () => {
  return (
    <section className="bg-content py-32">
      <Aos className="container">
        <SectionTitle>컨설팅 패키지</SectionTitle>
        <SectionSubtitle>입시 전체 과정을 대표가 직접 관리합니다.</SectionSubtitle>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-3xl bg-white p-8">
            <div className="flex justify-between">
              <div className="flex flex-col">
                <p className="font-medium md:text-lg">입시 전체 과정을 함께하는</p>
                <p className="mt-2 text-xl font-semibold text-primary md:text-4xl">전체 컨설팅</p>
              </div>
              <Image
                src={image1}
                alt=""
                width={80}
                height={80}
                className="h-16 w-16 md:h-20 md:w-20"
              />
            </div>
            <Separator className="mt-8" />
            <ul className="mt-8 flex flex-col gap-4 rounded-3xl bg-white">
              <ListItem>월 1회 zoom 상담</ListItem>
              <ListItem>학교 및 교수님 추천</ListItem>
              <ListItem>지원 학교 수 최대 10개</ListItem>
              <ListItem>학교별 원서 작성 필요 목록 정보 안내</ListItem>
              <ListItem>서류 준비</ListItem>
              <ListItem>공인 성적표 발급 및 추천서 관련 문제 해결</ListItem>
              <ListItem>학교 홈페이지 내 원서 작성 대행</ListItem>
              <ListItem>영문 이메일 작성 대행</ListItem>
              <ListItem>실시간 상황 공유</ListItem>
              <ListItem>레슨 컨택</ListItem>
              <ListItem>미국 현지 오디션 케어</ListItem>
              <ListItem>오디션 투어 플랜 제공</ListItem>
              <ListItem>룸메이트 연결</ListItem>
              <ListItem>지역별 연습실 및 숙소 정보 안내</ListItem>
              <ListItem>장학금 증액</ListItem>
            </ul>
          </div>
          <div className="rounded-3xl bg-white p-8">
            <div className="flex justify-between">
              <div className="flex flex-col">
                <p className="font-medium md:text-lg">유니버스 피아노의 최상위 케어</p>
                <p className="mt-2 text-xl font-semibold text-primary md:text-4xl">
                  유니버스 컨설팅
                </p>
              </div>
              <Image
                src={image2}
                alt=""
                width={80}
                height={80}
                className="h-16 w-16 md:h-20 md:w-20"
              />
            </div>
            <Separator className="mt-8" />
            <ul className="mt-8 flex flex-col gap-4 rounded-3xl bg-white">
              <ListItem highlight>전체 컨설팅에서 제공 하는 모든 서비스</ListItem>
              <ListItem>원서 내 prescreening 영상 업로드</ListItem>
              <ListItem>
                추가 서비스 <span className="text-primary">택 1</span>: 영어 스터디 무료 참여 OR
                공인 성적표 발급 비용 면제 (40만원 상당)
              </ListItem>
            </ul>
          </div>
        </div>
      </Aos>
    </section>
  );
};

interface ListItemProps {
  children: React.ReactNode;
  highlight?: boolean;
}

const ListItem = ({ children, highlight }: ListItemProps) => {
  return (
    <li className="flex">
      <Icon.Check className="mr-4 mt-[2px] h-6 w-6 rounded-full bg-content p-1" />
      <p className={cn("flex-1 text-lg font-medium", highlight && "font-semibold text-primary")}>
        {children}
      </p>
    </li>
  );
};
