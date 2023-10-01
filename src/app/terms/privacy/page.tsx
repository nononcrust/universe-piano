import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function TermsPrivacyPage() {
  return (
    <main className="container pb-16">
      <h1 className="text-2xl font-bold text-foreground md:mt-24 md:text-3xl">개인정보 처리방침</h1>
      <Tabs className="mt-8">
        <TabsList className="h-14 border-b">
          <div className="container flex h-full p-0">
            <TabsTrigger value="1">서비스 이용약관</TabsTrigger>
            <TabsTrigger value="2">개인정보 처리방침</TabsTrigger>
          </div>
        </TabsList>
      </Tabs>
    </main>
  );
}
