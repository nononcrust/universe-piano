"use client";

import { PageHeader } from "@/components/page-title";
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
          <div className="container flex h-full p-0 md:px-4">
            <TabsTrigger className="px-8" value="visitors">
              처음 오신 분들께
            </TabsTrigger>
            <TabsTrigger className="px-8" value="greetings">
              대표의 인삿말
            </TabsTrigger>
          </div>
        </TabsList>
        <TabsContent className="container px-4" value="visitors">
          <h1 className="mt-8 text-xl font-semibold">처음 오신 분들께 드리는 메시지</h1>
          <p className="mt-4 text-muted-foreground">
            유니버스 피아노는 모든 고객에게 최고의 컨설팅을 제공해드리기 위해 어쩌구
          </p>
        </TabsContent>
        <TabsContent className="container px-4" value="greetings">
          <h1 className="mt-8 text-xl font-semibold">대표의 인삿말</h1>
          <p className="mt-4 text-muted-foreground">안녕하세요</p>
        </TabsContent>
      </Tabs>
    </main>
  );
}
