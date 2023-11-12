import { ROUTE } from "@/constants/route";

const categories = [
  {
    title: "입시 상담",
    href: ROUTE.HOME,
  },
  {
    title: "오디션 참가",
    href: ROUTE.HOME,
  },
  {
    title: "합격자 후기",
    href: ROUTE.HOME,
  },
  {
    title: "독학 키트",
    href: ROUTE.HOME,
  },
  {
    title: "리뷰",
    href: ROUTE.HOME,
  },
] as const;

export default function CategorySection() {
  return (
    <section className="container grid grid-cols-4 md:grid-cols-5">
      {categories.map((category, index) => (
        <Category key={index} {...category} />
      ))}
    </section>
  );
}

interface CategoryProps {
  title: string;
  href: string;
}

const Category = ({ title, href }: CategoryProps) => {
  return (
    <div className="flex flex-col items-center justify-center pt-16">
      <div className="aspect-square w-12 rounded-lg bg-gray-100" />
      <p className="mt-2 text-sm font-medium">{title}</p>
    </div>
  );
};
