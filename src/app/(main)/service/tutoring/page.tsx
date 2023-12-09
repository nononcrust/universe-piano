import { ServiceFloatingButton } from "@/components/service-floating-button";
import Image from "next/image";

export default function TutoringListPage() {
  return (
    <main className="flex flex-col items-center">
      <Image src="/images/tutoring/tutoring-1.jpg" width={860} height={1000} alt="" />
      <Image src="/images/tutoring/tutoring-2.jpg" width={860} height={1100} alt="" />
      <Image src="/images/tutoring/tutoring-3.jpg" width={860} height={1100} alt="" />
      <Image src="/images/tutoring/tutoring-4.jpg" width={860} height={600} alt="" />
      <Image src="/images/tutoring/tutoring-5.jpg" width={860} height={830} alt="" />
      <Image src="/images/tutoring/tutoring-6.jpg" width={860} height={1100} alt="" />
      <Image src="/images/tutoring/tutoring-7.jpg" width={860} height={1000} alt="" />
      <Image src="/images/tutoring/tutoring-8.jpg" width={860} height={250} alt="" />
      <ServiceFloatingButton />
    </main>
  );
}
