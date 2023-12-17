"use client";

export default function GlobalErrorPage({ error }: { error: Error & { digest?: string } }) {
  return (
    <main className="flex min-h-screen w-full items-center justify-center">
      에러가 발생했습니다. 새로고침 해주세요.
    </main>
  );
}
