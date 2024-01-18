import { allContents } from "contentlayer/generated";

type Context = {
  params: {
    book: string;
    content: string;
  };
};

export default function BookContentPage(context: Context) {
  const { params } = context;

  const currentBookContent = allContents.filter((content) => content.book === params.book);

  console.log(currentBookContent);

  return <div>굿</div>;
}
