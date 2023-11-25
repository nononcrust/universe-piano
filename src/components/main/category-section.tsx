import { ROUTE } from "@/constants/route";

const categories = [
  {
    title: "입시 컨설팅",
    href: ROUTE.HOME,
  },
  {
    title: "1:1 과외",
    href: ROUTE.HOME,
  },
  {
    title: "독학 키트",
    href: ROUTE.HOME,
  },
  {
    title: "수강생 후기",
    href: ROUTE.HOME,
  },
  {
    title: "공지사항",
    href: ROUTE.HOME,
  },
  {
    title: "상담하기",
    href: ROUTE.HOME,
  },
] as const;

export default function CategorySection() {
  return (
    <section className="grid-row-gap-7 container mt-16 grid grid-cols-3 gap-y-8 md:grid-flow-col md:grid-cols-none">
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
    <div className="flex cursor-pointer flex-col items-center justify-center">
      <div className="aspect-square w-16 rounded-2xl border bg-gray-100" />
      <p className="mt-2 text-sm font-medium">{title}</p>
    </div>
  );
};
