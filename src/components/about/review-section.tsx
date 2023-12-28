import instagramIcon from "@/assets/icons/instagram.png";
import naverBlogIcon from "@/assets/icons/naver-blog.png";
import { Icon } from "@/components/icon";
import { SectionSubtitle } from "@/components/section-subtitle";
import { SectionTitle } from "@/components/section-title";
import { Aos } from "@/components/ui/aos";
import { siteConfig } from "@/configs/site";
import Image from "next/image";
import Link from "next/link";

export const ReviewSection = () => {
  return (
    <section className="bg-content py-32">
      <Aos>
        <div className="container">
          <SectionTitle className="mt-0">유니버스 피아노 크루들의 솔직한 리뷰</SectionTitle>
          <SectionSubtitle>유니버스 피아노 크루들의 솔직한 리뷰를 확인해보세요.</SectionSubtitle>
        </div>
        <div className="container mt-8 flex gap-6 overflow-auto py-4 scrollbar-hide">
          <ReviewItem
            name="LSA5931"
            label="영어 스터디"
            content="저는 너무 크게 도움 받았고 제가 꼭 장학금 컨설팅 뿐만 아니라 질문이 많았는데도 친절히 답해주셔서 너무 감사하고 든든했어요! 도움이 필요하신 분은 꼭 연락 해보시길 바랍니다."
          />
          <ReviewItem
            name="GHJ5699"
            label="전체 컨설팅"
            content="대표님 덕분에 다시 한번 굳건히 마음잡고 갈 수 있는 힘을 얻었어요! 결과는 나와봐야 알 수 있는 부분인데 너무 겁먹었던 것 같아요. 상담 때도 느꼈지만, 수속 과정들이 진행될수록 좋은 분이 함께해 주셔서 참 다행이고 또 감사해요. 대표님과 인연이 된 건 정말 큰 행운이에요:)"
          />
          <ReviewItem
            name="LSY7747"
            label="학교 선정 | 서류 대행 | 영어 스터디"
            content="정말 긴 여정이었습니다… 제가 혼자 하려고 했다면 정말 해내지 못했을 거에요. 중간에 정말 포기 하고 싶었는데, 할 수 있다고 응원해주시고 진심으로 조언과 걱정을 해주시는 게 느껴져서 힘을 낼 수 있었어요. 대표님의 따뜻한 마음과 열정이 느껴져서 믿고 할 수 있었던 것 같아요. 정말 감사드려요."
          />
        </div>
        <div className="container mt-4 flex flex-col items-center justify-center">
          <p className="font-medium text-muted-foreground">
            더 많은 후기는 유니버스 피아노 네이버 블로그와 인스타그램 계정에서 확인 가능합니다.
          </p>
          <div className="mt-4 flex gap-4">
            <Link href={siteConfig.links.blog}>
              <Image
                src={naverBlogIcon}
                className="h-12 w-12 cursor-pointer rounded-[10px] transition md:hover:scale-110"
                alt="네이버 블로그"
              />
            </Link>
            <Link href={siteConfig.links.instagram}>
              <Image
                src={instagramIcon}
                className="h-12 w-12 cursor-pointer rounded-[10px] transition md:hover:scale-110"
                alt="인스타그램"
              />
            </Link>
          </div>
        </div>
      </Aos>
    </section>
  );
};

interface ReviewItemProps {
  name: string;
  label: string;
  content: string;
}

const ReviewItem = ({ name, label, content }: ReviewItemProps) => {
  return (
    <div className="h-[280px] flex-1 rounded-2xl bg-white p-6 max-md:min-w-[320px]">
      <p className="text-xl font-semibold">
        {name}
        <span className="ml-2 mt-2 text-sm font-normal text-muted-foreground">{label}</span>
      </p>
      <div className="mt-1 flex gap-[2px]">
        <Icon.Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
        <Icon.Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
        <Icon.Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
        <Icon.Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
        <Icon.Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
      </div>
      <p className="mt-6 text-muted-foreground">{content}</p>
    </div>
  );
};
