import { allContents } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import NextImage, { ImageProps } from "next/image";

const getTitleInfoFromSourceFileName = (sourceFileName: string) => {
  const flattenedFileName = sourceFileName.split(".")[0];
  const order = flattenedFileName.split("-")[0];
  const title = flattenedFileName.substring(order.length + 1);

  return { order, title };
};

// 100-intro -> { order: 100, title: intro }
export const splitOrderAndTitle = (fullTitle: string) => {
  const order = fullTitle.split("-")[0];
  const title = fullTitle.substring(order.length + 1);

  return { order, title };
};

export const findContent = (book: string, category: string, content: string) => {
  const found = allContents.find(
    (item) =>
      item.book === book &&
      splitOrderAndTitle(item.category).title === category &&
      getTitleInfoFromSourceFileName(item._raw.sourceFileName).title === content &&
      item.is_category === false,
  );

  return found;
};

export const getFormattedContentsByBook = (book: string) => {
  const contents = allContents.filter((item) => item.book === book && item.is_category === false);

  const categories = allContents.filter((item) => item.book === book && item.is_category === true);

  const categoriesIncludingContents = Array.from(
    new Set(contents.map((content) => content.category)),
  );

  categoriesIncludingContents.sort((a, b) => {
    const aOrder = Number(a.split("-")[0]);
    const bOrder = Number(b.split("-")[0]);

    return aOrder - bOrder;
  });

  const formatted = categoriesIncludingContents
    .map((category) => ({
      category,
      children: contents
        .filter((content) => content.category === category)
        .map((content) => ({
          ...content,
          url: getUrlFromFlattenedPath(content._raw.flattenedPath),
        }))
        .sort((a, b) => {
          const aOrder = Number(a.title.split("-")[0]);
          const bOrder = Number(b.title.split("-")[0]);

          return aOrder - bOrder;
        }),
    }))
    .map((content) => ({
      ...content,
      category: categories.find((item) => item.category === content.category)?.title,
    }));

  return formatted;
};

// books/kit/100-intro/100-intro -> /kit/intro/intro
export const getUrlFromFlattenedPath = (flattenedPath: string) => {
  const book = flattenedPath.split("/")[1];
  const category = flattenedPath.split("/")[2];
  const content = flattenedPath.split("/")[3];

  return `${book}/${category.substring(category.split("-")[0].length + 1)}/${content.substring(
    content.split("-")[0].length + 1,
  )}`;
};

const Image = (props: ImageProps) => {
  return <NextImage {...props} />;
};

interface MDXContentProps {
  code: string;
}

const components = {
  Image,
};

export const MDXContent = ({ code }: MDXContentProps) => {
  const Content = useMDXComponent(code);

  return <Content components={components} />;
};
