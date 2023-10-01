"use client";

import { PageHeader } from "@/components/page-header";
import { TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tabs } from "@radix-ui/react-tabs";

export default function AboutPage() {
  return (
    <main className="flex-col">
      <PageHeader
        title="유니버스 피아노 소개"
        description="유니버스 피아노 소개 페이지 문구입니다."
      />
      <Tabs defaultValue="visitors">
        <TabsList className="h-14 border-b">
          <div className="container flex h-full p-0 md:px-8">
            <TabsTrigger className="flex-1 px-8 md:flex-initial" value="visitors">
              처음 오신 분들께
            </TabsTrigger>
            <TabsTrigger className="flex-1 px-8 md:flex-initial" value="greetings">
              대표의 인삿말
            </TabsTrigger>
          </div>
        </TabsList>
        <TabsContent className="container mb-16" value="visitors">
          <div className="md:px-0">
            <h1 className="mt-8 text-xl font-semibold">처음 오신 분들께 드리는 메시지</h1>
            <p className="mt-4 text-muted-foreground">
              유니버스 피아노는 모든 고객에게 최고의 컨설팅을 제공해드리기 위해 노력하고 있습니다.
            </p>
            <p className="mt-4 text-muted-foreground">
              모든 고객에게 최고의 컨설팅을 제공해드리기 위해 어쩌구 고객님의 요구에 항상 귀기울이는
              유니버스 피아노에서는 정말 다양한 종류의 서비스를 준비하고 있습니다.
            </p>
            <p className="mt-4 text-muted-foreground">
              끊임없이 진행되는 이벤트와 합리적인 가격 혜택을 통해, 고객님께서 더 만족 하실 수
              있도록 항상 고민하고 있습니다.
            </p>
          </div>
          {/* <div className="relative mt-8 h-[540px]">
            <AspectRatio ratio={16 / 9}>
              <Image src="/images/placeholder-image-1.jpg" alt="" fill />
            </AspectRatio>
          </div> */}
        </TabsContent>
        <TabsContent className="container px-4" value="greetings">
          <h1 className="mt-8 text-xl font-semibold">대표의 인삿말</h1>
          <p className="mt-4 text-muted-foreground">안녕하세요</p>
        </TabsContent>
      </Tabs>
    </main>
  );
}
