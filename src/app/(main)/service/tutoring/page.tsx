import { ServiceFloatingButton } from "@/components/service-floating-button";
import Image from "next/image";

export default function TutoringListPage() {
  return (
    <main className="flex flex-col">
      {/* <section className="bg-gray-50">
        <Aos>
          <div className="container mt-16 flex flex-col items-center gap-8 py-16">
            <div className="flex flex-1 flex-col items-center gap-4">
              <Badge>입시 컨설팅</Badge>
              <h1 className="text-center text-2xl font-bold leading-tight md:text-4xl">
                1:1 입시 컨설팅으로
                <br />
                미국 음대 입시 준비를 시작하세요
              </h1>
            </div>
            <div className="flex justify-center">
              <Image src="/images/3d-star.png" width={300} height={300} alt="별" />
            </div>
          </div>
        </Aos>
      </section> */}
      <section className="flex flex-col items-center">
        <Image src="/images/tutoring/tutoring-1.jpg" width={860} height={1000} alt="" />
        <Image src="/images/tutoring/tutoring-2.jpg" width={860} height={1100} alt="" />
        <Image src="/images/tutoring/tutoring-3.jpg" width={860} height={1100} alt="" />
        <Image src="/images/tutoring/tutoring-4.jpg" width={860} height={600} alt="" />
        <Image src="/images/tutoring/tutoring-5.jpg" width={860} height={830} alt="" />
        <Image src="/images/tutoring/tutoring-6.jpg" width={860} height={1100} alt="" />
        <Image src="/images/tutoring/tutoring-7.jpg" width={860} height={1000} alt="" />
        <Image src="/images/tutoring/tutoring-8.jpg" width={860} height={250} alt="" />
        <ServiceFloatingButton />
      </section>
    </main>
  );
}
