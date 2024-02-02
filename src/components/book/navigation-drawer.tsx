import { ROUTE } from "@/constants/route";
import { getFormattedContentsByBook } from "@/lib/contentlayer";
import Link from "next/link";

const drawer = [
  {
    title: "들어가기 전에",
    href: "/ebook/1",
  },
  {
    title: "피아노의 구성",
    href: "/ebook/2",
  },
  {
    title: "피아노의 구성",
    href: "/ebook/3",
  },
  {
    title: "피아노의 구성",
    href: "/ebook/4",
  },
  {
    title: "피아노의 구성",
    href: "/ebook/5",
  },
  {
    title: "피아노의 구성",
    href: "/ebook/6",
  },
  {
    title: "피아노의 구성",
    href: "/ebook/7",
  },
  {
    title: "피아노의 구성",
    href: "/ebook/8",
  },
  {
    title: "피아노의 구성",
    href: "/ebook/9",
  },
];

interface BookNavigationDrawerProps {
  book: string;
}

export const BookNavigationDrawer = ({ book }: BookNavigationDrawerProps) => {
  const contents = getFormattedContentsByBook(book);

  return (
    <nav className="hidden w-[320px] flex-col overflow-y-auto border-r pt-16 md:flex">
      {contents.map((item, index) => (
        <div key={index}>
          <DrawerSubtitle title={item.category!} />
          <div className="flex flex-col">
            {item.children.map((content, index) => (
              <DrawerItem key={index} title={content.title} href={content.url} />
            ))}
          </div>
        </div>
      ))}
    </nav>
  );
};

interface DrawerSubtitleProps {
  title: string;
}

const DrawerSubtitle = ({ title }: DrawerSubtitleProps) => {
  return <div>{title}</div>;
};

interface DrawerItemProps {
  title: string;
  href: string;
}

const DrawerItem = ({ title, href }: DrawerItemProps) => {
  return (
    <Link
      href={ROUTE.BOOK.DETAIL(href)}
      className="p-4 text-muted-foreground transition hover:text-accent-foreground"
    >
      {title}
    </Link>
  );
};
