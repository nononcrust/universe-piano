"use client";

import instagramIcon from "@/assets/icons/instagram.png";
import naverBlogIcon from "@/assets/icons/naver-blog.png";
import { SectionSubtitle } from "@/components/shared/section-subtitle";
import { SectionTitle } from "@/components/shared/section-title";
import { Aos } from "@/components/ui/aos";
import { Button } from "@/components/ui/button";
import { Dialog } from "@/components/ui/dialog";
import { siteConfig } from "@/configs/site";
import { data } from "@/contents/services/study";
import { useDialog } from "@/hooks/use-dialog";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

export const StudyReviewSection = () => {
  return (
    <Aos className="my-32">
      <section className="container">
        <SectionTitle>조작 없는 후기 시리즈</SectionTitle>
        <SectionSubtitle>유니버스 크루들이 직접 작성한 후기입니다.</SectionSubtitle>
        <div className="mt-12 flex flex-col gap-12 md:flex-row">
          {data.reviews.map((review, index) => (
            <StudyReviewItem
              key={index}
              labels={review.labels}
              title={review.title}
              description={review.description}
              image={review.image}
              kakaoImage={review.kakaoImage}
            />
          ))}
        </div>
        <div className="mt-12 flex flex-col items-center">
          <p className="font-semibold">
            더 많은 후기들은 네이버 블로그와 인스타그램에서 확인 하실 수 있습니다.
          </p>
          <div className="mt-4 flex gap-4">
            <Link
              className="rounded-[10px] transition-transform md:hover:scale-110"
              href={siteConfig.links.blog}
            >
              <Image src={naverBlogIcon} className="h-12 w-12 rounded-[10px]" alt="네이버 블로그" />
            </Link>
            <Link
              className="rounded-[10px] transition-transform md:hover:scale-110"
              href={siteConfig.links.instagram}
            >
              <Image
                src={instagramIcon}
                className="h-12 w-12 cursor-pointer rounded-[10px]"
                alt="인스타그램"
              />
            </Link>
          </div>
        </div>
      </section>
    </Aos>
  );
};

interface StudyReviewItemProps {
  labels: (typeof data.reviews)[number]["labels"];
  title: string;
  description: string;
  image: StaticImageData;
  kakaoImage: StaticImageData;
}

const StudyReviewItem = ({
  labels,
  title,
  description,
  kakaoImage,
  image,
}: StudyReviewItemProps) => {
  const dialog = useDialog();

  return (
    <div className="flex flex-1 flex-col">
      <div className="flex flex-1 flex-col overflow-hidden rounded-2xl border">
        <div className="flex justify-center">
          <div className="relative h-56 w-full">
            <Image className="object-cover" fill src={image} alt="" sizes="224px" />
            <div className="absolute bottom-0 left-0 right-0 top-0 z-10 bg-gradient-to-t from-white via-transparent to-transparent" />
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-2 px-4">
          <div className="flex gap-2">
            {labels.map((label, index) => (
              <div key={index} className="rounded-full bg-content px-3 py-1 text-sm font-semibold">
                {label}
              </div>
            ))}
          </div>
          <p className="text-lg font-semibold">{title}</p>
        </div>
        <div className="mt-4 h-[240px] overflow-y-auto whitespace-pre-wrap px-4 pb-4 font-medium leading-loose text-sub">
          {description}
        </div>
      </div>
      <div className="mt-4 flex justify-end">
        <Button variant="outlined" onClick={dialog.open}>
          후기 카톡 원본 확인
        </Button>
        <Dialog open={dialog.isOpen} onOpenChange={dialog.onOpenChange}>
          <Dialog.Content className="max-h-[80vh] overflow-y-auto">
            <Image src={kakaoImage} alt="" priority />
          </Dialog.Content>
        </Dialog>
      </div>
    </div>
  );
};
