import { MDXContent, findContent } from "@/lib/contentlayer";
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

  if (!content) notFound();

  return (
    <main className="prose">
      <h2>{content.title}</h2>
      <MDXContent code={content.body.code} />
    </main>
  );
}
