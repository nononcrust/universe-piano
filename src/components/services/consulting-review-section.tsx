"use client";

import { siteConfig } from "@/configs/site";
import { data } from "@/contents/services/consulting";
import { useDialog } from "@/hooks/use-dialog";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Instagram } from "../instagram";
import { SectionSubtitle } from "../section-subtitle";
import { SectionTitle } from "../section-title";
import { Aos } from "../ui/aos";
import { Button } from "../ui/button";
import { Dialog, DialogContent } from "../ui/dialog";

export const ConsultingReviewSection = () => {
  return (
    <section className="py-32">
      <Aos className="container">
        <SectionTitle>조작 없는 후기 시리즈</SectionTitle>
        <SectionSubtitle>유니버스 크루들이 직접 작성한 후기입니다.</SectionSubtitle>
        <div className="mt-12 flex flex-col gap-12 md:flex-row">
          {data.reviews.map((review, index) => (
            <ConsultingReviewItem
              key={index}
              label={review.label}
              title={review.title}
              description={review.description}
              imageSrc={review.imageSrc}
            />
          ))}
        </div>
        <div className="mt-12 flex flex-col items-center">
          <p className="font-semibold">
            더 많은 후기와 크루들의 근황은 유니버스 피아노 네이버 블로그와 인스타그램에서 확인 하실
            수 있습니다.
          </p>
          <div className="mt-4 flex gap-4">
            <Link href={siteConfig.links.instagram}>
              <Instagram className="h-16 w-16 cursor-pointer transition hover:scale-110" />
            </Link>
          </div>
        </div>
      </Aos>
    </section>
  );
};

interface ConsultingReviewItemProps {
  label: string;
  title: string;
  description: string;
  imageSrc: StaticImageData;
}

const ConsultingReviewItem = ({
  label,
  title,
  description,
  imageSrc,
}: ConsultingReviewItemProps) => {
  const dialog = useDialog();

  return (
    <div>
      <div className="flex flex-1 flex-col overflow-hidden rounded-2xl border">
        <div className="flex justify-center">
          <div className="h-32 w-full bg-gradient-to-b from-gray-200 to-white" />
        </div>
        <div className="mt-8 flex flex-col gap-2 px-4">
          <div className="flex">
            <div className="rounded-full bg-primary px-3 py-1 text-sm font-semibold text-white">
              {label}
            </div>
          </div>
          <p className="text-lg font-semibold">{title}</p>
        </div>
        <div className="mt-4 h-[240px] overflow-y-auto whitespace-pre-wrap px-4 pb-4 font-medium leading-loose text-muted-foreground">
          {description}
        </div>
      </div>
      <div className="mt-4 flex justify-end">
        <Button variant="secondary" onClick={dialog.open}>
          후기 카톡 원본 확인
        </Button>
        <Dialog open={dialog.isOpen} onOpenChange={dialog.onOpenChange}>
          <DialogContent className="max-h-[80vh] overflow-y-auto">
            <Image src={imageSrc} alt="" priority />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};
