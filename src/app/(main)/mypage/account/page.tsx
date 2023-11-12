import { PageTitle } from "@/components/layout/page-title";

export default function AccountPage() {
  return (
    <main className="container pb-16">
      <PageTitle title="계정 설정" />
      <button className="mt-8 text-sm font-medium text-destructive underline">탈퇴하기</button>
    </main>
  );
}
