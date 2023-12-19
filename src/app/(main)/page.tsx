import bannerImage from "@/assets/images/landing/landing-banner.png";
import { CardSection } from "@/components/main/card-section";
import CategorySection from "@/components/main/category-section";
import { ReviewSection } from "@/components/main/review-section";
import { ROUTE } from "@/constants/route";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col pb-32">
      {/* <CarouselSection /> */}
      <IntroSection />
      <CategorySection />
      {/* <BannerSection /> */}
      <CardSection />
      <ReviewSection />
    </main>
  );
}

const IntroSection = () => {
  return (
    <section className="container mt-12">
      <h1 className="whitespace-pre-wrap text-xl font-bold md:text-3xl">
        {"안녕하세요!\n미국 음대 입시의 모든 것, "}
        <span className="text-primary">유니버스 피아노</span>입니다.
      </h1>
    </section>
  );
};

const BannerSection = () => {
  return (
    <section className="container mt-10 flex flex-col">
      <Link
        href={ROUTE.ABOUT.COMPANY}
        className="relative flex flex-col gap-1 rounded-2xl bg-content p-6 text-lg"
      >
        <p className="font-semibold">처음 오신 분들께,</p>
        <p className="font-semibold">유니버스 피아노를 소개합니다.</p>
        <Image
          className="absolute right-2 top-1/2 -translate-y-1/2"
          src={bannerImage}
          alt="thunder"
          width={120}
        />
      </Link>
    </section>
  );
};
