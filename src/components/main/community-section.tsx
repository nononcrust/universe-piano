"use client";

import instagramIcon from "@/assets/icons/instagram.png";
import naverBlogIcon from "@/assets/icons/naver-blog.png";
import { ColoredIcon } from "@/components/common/colored-icon";
import { Icon } from "@/components/common/icon";
import { Card } from "@/components/main/card";
import { IconHeader } from "@/components/main/icon-header";
import { LandingSectionSubtitle } from "@/components/main/landing-section-subtitle";
import { LandingSectionTitle } from "@/components/main/landing-section-title";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/configs/site";
import Image from "next/image";
import Link from "next/link";

export const CommunitySection = () => {
  return (
    <section className="container pt-24">
      <LandingSectionTitle>유니버스 피아노 커뮤니티</LandingSectionTitle>
      <LandingSectionSubtitle>
        다양한 사람들과 정보를 나눌 수 있는 공간을 제공하고 있어요.
      </LandingSectionSubtitle>
      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
        <SnsCard />
        <BlogCard />
        <OfflineCard />
      </div>
    </section>
  );
};

const SnsCard = () => {
  return (
    <Card>
      <div className="mb-4 flex">
        <IconHeader>
          <ColoredIcon.Like className="h-6 w-6" />
        </IconHeader>
      </div>
      <Card.Title>SNS 커뮤니티</Card.Title>
      <Card.Subtitle>
        유니버스 피아노는 2019년부터 인스타그램을 기반으로 성장해 왔습니다.
      </Card.Subtitle>
      <div className="flex flex-1 items-end gap-2">
        <Link href={siteConfig.links.instagram} className="transition hover:-translate-y-1">
          <Image priority src={instagramIcon} className="h-10 w-10 rounded-[10px]" alt="" />
        </Link>
      </div>
    </Card>
  );
};

const BlogCard = () => {
  return (
    <Card>
      <div className="mb-4 flex">
        <IconHeader>
          <ColoredIcon.Chat className="h-6 w-6" />
        </IconHeader>
      </div>
      <Card.Title>미국 음대 입시 칼럼</Card.Title>
      <Card.Subtitle>대표가 직접 전하는 미국 음대 입시 이야기</Card.Subtitle>
      <div className="flex flex-1 items-end gap-2">
        <Link href={siteConfig.links.blog} className="transition hover:-translate-y-1">
          <Image priority src={naverBlogIcon} className="h-10 w-10 rounded-[10px]" alt="" />
        </Link>
      </div>
    </Card>
  );
};

const OfflineCard = () => {
  return (
    <Card>
      <div className="mb-4 flex">
        <IconHeader>
          <Icon.Zap className="h-6 w-6 fill-yellow-400 text-yellow-400" />
        </IconHeader>
      </div>
      <div className="flex items-center gap-2">
        <Card.Title>오프라인 모임</Card.Title>
        <Badge className="bg-white" variant="outline">
          준비중
        </Badge>
      </div>
      <Card.Subtitle>오프라인 모임을 통해 다양한 정보룰 공유하세요.</Card.Subtitle>
      <div className="flex flex-1 items-end gap-2 font-medium text-gray-400">준비중입니다.</div>
    </Card>
  );
};
