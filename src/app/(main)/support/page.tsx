"use client";

import { PageTitle } from "@/components/layout/page-title";
import { Pagination } from "@/components/pagination";
import { SupportList } from "@/components/support/support-list";
import { Button } from "@/components/ui/button";
import { usePagination } from "@/hooks/use-pagination";
import { useState } from "react";

const DUMMY_SUPPORT_LIST = [
  {
    title: "계정을 분실했어요. 어떻게 해야 하나요?",
    content: `계정을 분실하셨다면, 고객센터로 문의해주세요.
    
고객센터로 문의 시, 아래의 내용을 포함하여 문의해주세요.

- 계정에 연결된 이메일 주소
- 계정에 연결된 휴대폰 번호
- 계정에 연결된 닉네임

고객센터로 문의하러 가기
    `,
  },
  {
    title: "회원탈퇴를 하고 나서 다시 회원가입 할 수 있나요?",
    content: "회원탈퇴를 하고 나면 30일 후에 다시 회원가입을 할 수 있습니다.",
  },
];

const TAB_LIST = {
  all: "전체",
  subscription: "구독",
  register: "가입",
  account: "계정",
} as const;

type Tab = keyof typeof TAB_LIST;

export default function SupportPage() {
  const [tab, setTab] = useState<Tab>("all");
  const pagination = usePagination();

  return (
    <main className="container pb-16">
      <PageTitle title="자주 묻는 질문" />
      <div className="mt-8 flex gap-2 overflow-x-auto">
        {Object.entries(TAB_LIST).map(([value, label], index) => (
          <Button
            key={index}
            size="sm"
            className="rounded-full px-4"
            variant={tab === value ? "default" : "outline"}
            onClick={() => setTab(value as keyof typeof TAB_LIST)}
          >
            {label}
          </Button>
        ))}
      </div>
      {/* <Input placeholder="검색어를 입력해주세요." className="mt-4" /> */}
      {/* <Tabs className="mt-4 overflow-x-auto border-b" defaultValue="all">
        <TabsList>
          {Object.entries(TAB_LIST).map(([value, label], index) => (
            <TabsTrigger key={index} className="px-6" value={value}>
              {label}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs> */}
      <div className="mt-8">
        <SupportList initialData={DUMMY_SUPPORT_LIST} />
      </div>
      <Pagination
        className="mt-8"
        currentPage={pagination.current}
        totalPage={1}
        onChange={pagination.onChange}
      />
    </main>
  );
}
