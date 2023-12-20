"use client";

import instagramIcon from "@/assets/icons/instagram.png";
import naverBlogIcon from "@/assets/icons/naver-blog.png";
import { cn } from "@/lib/utils";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import { ColoredIcon } from "../colored-icon";
import { Icon } from "../icon";
import { Button } from "../ui/button";

export const BentoSection = () => {
  return (
    <section className="container">
      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
        <Card className="bg-zinc-800 text-white md:col-span-2">
          <div className="mb-2 mt-4 flex">
            <p className="font-semibold text-primary">Create your universe.</p>
          </div>
          <Card.Title>미국 음대 입시를 위한 모든 것, 유니버스 피아노입니다</Card.Title>
          <Card.Subtitle>
            안녕하세요! 처음 오신 분들은 아래 버튼을 눌러서 서비스를 둘러보세요.
          </Card.Subtitle>
          <div className="mt-8">
            <Button className="h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-6">
              서비스 둘러보기
            </Button>
          </div>
        </Card>
        <LogoSliderCard />
        <Card>
          <div className="mb-4 flex">
            <IconHeader>
              <ColoredIcon.Chat />
            </IconHeader>
          </div>
          <Card.Title>미국 음대 입시 과외</Card.Title>
          <Card.Subtitle>
            한 달 딱 한 분에게만 주어지는 기회! 맞춤형 정보, 장학금 전략, 학교 선정까지 단기간에
            완성합니다.
          </Card.Subtitle>
          <div className="flex flex-1 items-end">
            <Button variant="outline">바로가기</Button>
          </div>
        </Card>
        <Card>
          <div className="mb-4 flex">
            <IconHeader>
              <ColoredIcon.Flag />
            </IconHeader>
          </div>
          <Card.Title>미국 음대 입시 컨설팅</Card.Title>
          <Card.Subtitle>
            입시 전체 과정 케어가 필요하신가요? 미국 음대 석사 과정 입시생을 위한 1:1 맞춤형
            컨설팅을 제공합니다.
          </Card.Subtitle>
          <div className="flex flex-1 items-end">
            <Button variant="outline">바로가기</Button>
          </div>
        </Card>
        <Card>
          <div className="mb-4 flex">
            <IconHeader>
              <ColoredIcon.Like />
            </IconHeader>
          </div>
          <Card.Title>영어 스터디</Card.Title>
          <Card.Subtitle>
            음대생을 위한 영어 스터디, 수준에 맞는 공부 방법으로 목표 점수 달성을 도와드립니다.
          </Card.Subtitle>
          <div className="flex flex-1 items-end">
            <Button variant="outline">바로가기</Button>
          </div>
        </Card>
        <Card>
          <div className="mb-4 flex">
            <IconHeader>
              <ColoredIcon.Medal />
            </IconHeader>
          </div>
          <Card.Title>독학 키트</Card.Title>
          <Card.Subtitle>
            혼자 준비하시면서, 부분적인 도움이 필요하신가요? 미국 음대 독학러에게 필요한 서비스를
            제공합니다.
          </Card.Subtitle>
          {/* <div className="flex flex-1 items-end">
            <Button variant="outline">자세히 보기</Button>
          </div> */}
          <div className="flex flex-1 items-end">
            <p className="font-medium text-muted-foreground">오픈 예정</p>
          </div>
        </Card>
        <Card>
          <div className="mb-4 flex">
            <IconHeader>
              <ColoredIcon.Like />
            </IconHeader>
          </div>
          <Card.Title>SNS 커뮤니티</Card.Title>
          <Card.Subtitle>
            유니버스 피아노는 2019년부터 인스타그램을 기반으로 성장해 왔습니다.
          </Card.Subtitle>
          <div className="flex flex-1 items-end gap-2">
            <Image priority src={instagramIcon} className="h-10 w-10 rounded-[10px]" alt="" />
            <Image priority src={naverBlogIcon} className="h-10 w-10 rounded-[10px]" alt="" />
          </div>
        </Card>
        <Card half>
          <div className="items-enter flex justify-between">
            <div className="flex items-center gap-2">
              <Icon.BookOpen className="h-5 w-5 fill-primary text-primary" />
              <Card.Title>장학금 증액 컨설팅</Card.Title>
            </div>
            <Icon.ArrowRight className="h-6 w-6 rounded-full bg-gray-200 p-1" />
          </div>
          <Card.Subtitle className="text-gray-400">
            광고, 조작 없음. 결과로 증명합니다. 최초 장학금 $30000까지 증액 성공!
          </Card.Subtitle>
        </Card>{" "}
        <Card half>
          <div className="flex items-center gap-2">
            <Icon.Leaf className="h-5 w-5 fill-primary text-primary" />
            <Card.Title>오디션 119 키트</Card.Title>
          </div>
          <Card.Subtitle>
            미국 음대 오디션 투어 꿀팁, 상황별 영어 표현, 체크리스트까지!
          </Card.Subtitle>
        </Card>
        <Card half>
          <div className="flex items-center gap-2">
            <Icon.Megaphone className="h-5 w-5 fill-primary text-primary" />
            <Card.Title>오디션 결과 발표</Card.Title>
          </div>
          <Card.Subtitle>로그인 후에 미국 음대 오디션 결과를 확인 하실 수 있습니다.</Card.Subtitle>
        </Card>
        <Card half>
          <div className="flex items-center gap-2">
            <Icon.BookOpen className="h-4 w-4 fill-primary text-primary" />
            <Card.Title>자주 묻는 질문</Card.Title>
          </div>
          <Card.Subtitle>
            궁금하신 부분이 있으신가요? 자주 묻는 질문을 통해 답변을 확인하세요.
          </Card.Subtitle>
        </Card>
        <Card half>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon.Zap className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              <Card.Title>오프라인 모임</Card.Title>
            </div>
            <Icon.ArrowRight className="h-6 w-6 rounded-full bg-gray-200 p-1" />
          </div>
          <Card.Subtitle>
            AI 기반 디자인 유틸리티를 사용하여 창의력을 발휘하고 아이디어에
          </Card.Subtitle>
        </Card>
      </div>
    </section>
  );
};

interface IconHeaderProps {
  className?: string;
  children: React.ReactNode;
}

const IconHeader = ({ children, className }: IconHeaderProps) => {
  return <div className={cn("rounded-full border bg-white p-2", className)}>{children}</div>;
};

interface CardProps extends React.ComponentPropsWithoutRef<"div"> {
  half?: boolean;
}

export const Card = ({ className, half, ...props }: CardProps) => {
  return (
    <div
      className={cn(
        "row-span-2 flex max-h-[300px] min-h-[300px] flex-col rounded-3xl border bg-content-light p-8 transition",
        half && "row-span-1 max-h-[142px] min-h-[142px]",
        className,
      )}
      {...props}
    ></div>
  );
};

interface CardTitleProps extends React.ComponentPropsWithoutRef<"h3"> {}

const CardTitle = ({ className, children, ...props }: CardTitleProps) => {
  return (
    <h3 className={cn("text-xl font-semibold", className)} {...props}>
      {children}
    </h3>
  );
};

interface CardSubtitleProps extends React.ComponentPropsWithoutRef<"p"> {}

const CardSubtitle = ({ className, children, ...props }: CardSubtitleProps) => {
  return (
    <p className={cn("mt-2 text-[15px] font-medium text-gray-400", className)} {...props}>
      {children}
    </p>
  );
};

Card.Title = CardTitle;
Card.Subtitle = CardSubtitle;

export const LogoSliderCard = () => {
  return (
    <Card className="p-0">
      <div className="p-8 pb-4">
        <Card.Title>함께하는 기업</Card.Title>
        <Card.Subtitle>
          AI 기반 디자인 유틸리티를 사용하여 창의력을 발휘하고 아이디어에
        </Card.Subtitle>
      </div>
      <LogoSlider direction="left" />
      <LogoSlider className="mt-2" direction="right" />
    </Card>
  );
};

const logos = Array(10).fill(0);

const animation = {
  duration: 25000,
  easing: (t: number) => t,
};

interface LogoSliderProps extends React.ComponentPropsWithoutRef<"div"> {
  direction?: "left" | "right";
}

export const LogoSlider = ({ className, direction = "left", ...props }: LogoSliderProps) => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "precision",
    drag: false,
    slides: { perView: "auto" },
    created(s) {
      s.moveToIdx(direction === "left" ? 5 : -5, true, animation);
    },
    updated(s) {
      s.moveToIdx(
        direction === "left" ? s.track.details.abs + 5 : s.track.details.abs - 5,
        true,
        animation,
      );
    },
    animationEnded(s) {
      s.moveToIdx(
        direction === "left" ? s.track.details.abs + 5 : s.track.details.abs - 5,
        true,
        animation,
      );
    },
  });

  return (
    <div ref={sliderRef} className={cn("keen-slider", className)} {...props}>
      {logos.map((_, index) => (
        <div
          key={index}
          className="keen-slider__slide"
          style={{ minWidth: 80, maxWidth: 80, height: 64 }}
        >
          <div className="h-16 w-16 rounded-full bg-gray-200" />
        </div>
      ))}
    </div>
  );
};
