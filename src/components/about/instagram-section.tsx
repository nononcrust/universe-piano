import mobileImage from "@/assets/images/about/about-company-mobile.png";
import { Instagram } from "@/components/shared/instagram";
import { SectionTitle } from "@/components/shared/section-title";
import { Aos } from "@/components/ui/aos";
import { siteConfig } from "@/configs/site";
import Image from "next/image";
import Link from "next/link";

export const InstagramSection = () => {
  return (
    <Aos className="my-32">
      <section className="container flex flex-col items-center gap-8 overflow-hidden md:flex-row md:gap-32">
        <div className="flex flex-col justify-between gap-16 md:flex-row">
          <div className="flex items-center justify-center">
            <div className="flex flex-col">
              <SectionTitle className="mt-16 whitespace-pre-wrap text-center md:mt-0 md:text-left md:leading-normal">
                {"유학 준비도 트렌디 하게,\nMZ 대표의 소통 방식"}
              </SectionTitle>
              <p className="mt-4 whitespace-pre-wrap text-center font-medium text-sub md:text-left">
                {
                  "유니버스 피아노는 인스타그램을 주요 기반으로 성장해왔습니다.\n대표와 크루들의 최신 소식은 인스타그램 계정에서 확인 하실 수 있습니다."
                }
              </p>
              <div className="flex flex-1 justify-center md:justify-start">
                <Link
                  className="focus-visible:focus-ring mt-2 rounded-lg transition-transform hover:scale-110 md:-translate-x-2"
                  href={siteConfig.links.instagram}
                >
                  <Instagram className="h-16 w-16" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex h-[400px] w-full flex-1 items-end justify-center gap-4 overflow-hidden rounded-[40px] bg-content">
          <Image
            priority
            className="min-w-[200px] translate-y-16 md:min-w-[240px] md:translate-y-32"
            width={200}
            src={mobileImage}
            alt=""
          />
        </div>
      </section>
    </Aos>
  );
};
