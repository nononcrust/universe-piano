import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function TutoringListPage() {
  return (
    <main className="flex flex-col">
      <section className="bg-gray-100">
        <div className="container mt-16 flex flex-col items-center gap-8">
          <div className="flex flex-1 flex-col items-center gap-4">
            <Badge>미국 음대 입시 과외</Badge>
            <h1 className="text-center text-2xl font-bold leading-tight md:text-4xl">
              입시 경험자들이 직접
              <br />
              과외를 진행합니다
            </h1>
          </div>
          {/* <div className="aspect-square w-full rounded-xl bg-gray-200 md:max-w-[260px]" /> */}
        </div>
        <div className="flex justify-center">
          <Image src="/images/3d-star.png" width={300} height={300} alt="별" />
        </div>
      </section>
    </main>
  );
}
