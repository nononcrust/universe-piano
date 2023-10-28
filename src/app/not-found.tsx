import { NotFoundFallback } from "@/components/layout/not-found-fallback";

export default function NotFoundPage() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <NotFoundFallback />
    </main>
  );
}
