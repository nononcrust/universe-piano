import { Icon } from "@/components/shared/icon";
import { ROUTE } from "@/constants/route";
import {
  MDXContent,
  findContent,
  getNextContentTitleAndPath,
  getPreviousContentTitleAndPath,
  splitOrderAndTitle,
} from "@/lib/contentlayer";
import Link from "next/link";
import { notFound } from "next/navigation";

type Context = {
  params: {
    book: string;
    category: string;
    content: string;
  };
};

export default function BookContentPage(context: Context) {
  const { params } = context;

  const content = findContent(params.book, params.category, params.content);
  const previousContent = getPreviousContentTitleAndPath(
    params.book,
    params.category,
    params.content,
  );
  const nextContent = getNextContentTitleAndPath(params.book, params.category, params.content);

  if (!content) notFound();

  return (
    <div className="pb-32">
      <p className="mb-4 text-sm font-medium uppercase text-primary">
        {splitOrderAndTitle(content.category).title}
      </p>
      <h2 className="mb-8 text-2xl font-semibold">{content.title}</h2>
      <div className="prose max-w-none">
        <MDXContent code={content.body.code} />
      </div>
      <div className="mt-24 flex flex-col justify-between md:flex-row">
        {previousContent ? (
          <Link
            className="group flex flex-col md:items-end"
            href={ROUTE.BOOK.DETAIL(previousContent.url)}
          >
            <p className="text-[13px] text-primary">Previous</p>
            <div className="flex items-center">
              <Icon.ChevronLeft className="mr-1 h-5 w-5 text-primary transition-all group-hover:-translate-x-1" />
              <p className="translate-y-[1px]">{previousContent.title}</p>
            </div>
          </Link>
        ) : (
          <div />
        )}
        {nextContent ? (
          <Link
            className="group flex flex-col items-end md:items-start"
            href={ROUTE.BOOK.DETAIL(nextContent.url)}
          >
            <p className="text-[13px] text-primary">Next</p>
            <div className="flex items-center">
              <p className="translate-y-[1px]">{nextContent.title}</p>
              <Icon.ChevronRight className="ml-1 h-5 w-5 text-primary transition-all group-hover:translate-x-1" />
            </div>
          </Link>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}
