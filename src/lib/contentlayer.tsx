import { Icon } from "@/components/shared/icon";
import { allContents } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import NextImage, { ImageProps } from "next/image";
import React from "react";
import { cn } from "./utils";

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

export const getPreviousContentTitleAndPath = (book: string, category: string, content: string) => {
  const contents = allContents.filter((item) => item.book === book && item.is_category === false);

  const found = contents.find(
    (item) =>
      item.book === book &&
      splitOrderAndTitle(item.category).title === category &&
      getTitleInfoFromSourceFileName(item._raw.sourceFileName).title === content,
  );

  if (!found) return null;

  const index = contents.indexOf(found);

  if (index === 0) return null;

  const previousContent = contents[index - 1];

  return {
    title: previousContent.title,
    url: getUrlFromFlattenedPath(previousContent._raw.flattenedPath),
  };
};

export const getNextContentTitleAndPath = (book: string, category: string, content: string) => {
  const contents = allContents.filter((item) => item.book === book && item.is_category === false);

  const found = contents.find(
    (item) =>
      item.book === book &&
      splitOrderAndTitle(item.category).title === category &&
      getTitleInfoFromSourceFileName(item._raw.sourceFileName).title === content,
  );

  if (!found) return null;

  const index = contents.indexOf(found);

  if (index === contents.length - 1) return null;

  const nextContent = contents[index + 1];

  return {
    title: nextContent.title,
    url: getUrlFromFlattenedPath(nextContent._raw.flattenedPath),
  };
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

const Image = ({ className, ...props }: ImageProps) => {
  return (
    <NextImage
      width={600}
      height={600}
      className={cn("rounded-2xl border max-md:w-full md:w-[400px]", className)}
      {...props}
    />
  );
};

const EnglishSnippet = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mb-2 flex flex-col whitespace-pre-wrap rounded-lg bg-gray-50 p-2 px-4">
      {children}
    </div>
  );
};

const Snippet = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mb-2 flex whitespace-pre-wrap rounded-lg bg-gray-50 p-2 px-4">{children}</div>
  );
};

interface BoxProps extends React.ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode;
}

const Box = ({ children, className }: BoxProps) => {
  return (
    <div className={cn("my-5 flex justify-center rounded-lg bg-gray-50 px-4 py-2", className)}>
      {children}
    </div>
  );
};

const SequenceList = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex flex-col items-center gap-4 md:flex-row">{children}</div>;
};

interface SequenceListItemProps {
  title: string;
  content: string;
}

const SequenceListArrow = () => {
  return (
    <>
      <Icon.ArrowBigRight className="hidden size-8 min-w-8 fill-primary stroke-primary md:flex" />
      <Icon.ArrowBigDown className="size-8 min-w-8 fill-primary stroke-primary md:hidden" />
    </>
  );
};

const SequenceListItem = ({ title, content }: SequenceListItemProps) => {
  return (
    <div className="flex w-full gap-2 rounded-xl border border-primary p-4 md:max-w-[240px]">
      <div className="flex w-full flex-col">
        <div className="text-center font-semibold text-main md:text-start">{title}</div>
        <div className="text-center font-medium text-sub md:text-start">{content}</div>
      </div>
    </div>
  );
};

SequenceList.Item = SequenceListItem;
SequenceList.Arrow = SequenceListArrow;

const ArrowBox = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box className="justify-start">
      <Icon.ArrowBigRight className="mr-2 fill-primary stroke-primary" />
      {children}
    </Box>
  );
};

const Quote = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-center bg-gray-50 p-4">
      <Icon.MessageCircle className="mr-2 size-6 fill-gray-300 stroke-gray-300" />
      {children}
    </div>
  );
};

interface MobileTableProps extends React.ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode;
}

const MobileTable = ({ className, children, ...props }: MobileTableProps) => {
  return (
    <div className={cn("flex flex-col gap-4", className)} {...props}>
      {children}
    </div>
  );
};

interface MobileTableRowProps {
  title: string;
  children: React.ReactNode;
}

const MobileTableRow = ({ title, children }: MobileTableRowProps) => {
  return (
    <div className="flex flex-col rounded-xl bg-content p-4 px-6">
      <span className="mb-2 text-lg font-semibold text-primary">{title}</span>
      {children}
    </div>
  );
};

interface MobileTableColumnProps {
  title: string;
  children: React.ReactNode;
}

const MobileTableColumn = ({ title, children }: MobileTableColumnProps) => {
  return (
    <div className="flex gap-2">
      <span className="font-medium">{title}:</span>
      <span className="text-sub">{children}</span>
    </div>
  );
};

MobileTable.Row = MobileTableRow;
MobileTable.Column = MobileTableColumn;

interface TableProps {
  children: React.ReactNode;
  className?: string;
}

const TableRoot = ({ children, className }: TableProps) => {
  return <table className={cn("w-full table-auto max-md:hidden", className)}>{children}</table>;
};

const TableHead = ({ children, className }: TableProps) => {
  return <thead className={cn("bg-gray-50 font-semibold text-main", className)}>{children}</thead>;
};

const TableBody = ({ children, className }: TableProps) => {
  return <tbody className={cn(className)}>{children}</tbody>;
};

const TableRow = ({ children, className }: TableProps) => {
  return <tr className={cn(className)}>{children}</tr>;
};

interface TableCellProps extends React.ComponentPropsWithoutRef<"td"> {
  header?: boolean;
}

const TableCell = ({ children, className, header }: TableCellProps) => {
  return (
    <td
      className={cn("border px-4 py-2", header && "bg-gray-50 font-semibold text-main", className)}
    >
      {children}
    </td>
  );
};

const Table = Object.assign(TableRoot, {
  Head: TableHead,
  Body: TableBody,
  Row: TableRow,
  Cell: TableCell,
});

const UnderlinedHeading = ({ children }: { children: React.ReactNode }) => {
  return (
    <h1 className="underline decoration-primary decoration-[7px] underline-offset-[6px]">
      {children}
    </h1>
  );
};

interface MDXContentProps {
  code: string;
}

const components = {
  Image,
  EnglishSnippet,
  Snippet,
  Box,
  ArrowBox,
  UnderlinedHeading,
  Quote,
  SequenceList,
  Table,
  MobileTable,
};

export const MDXContent = ({ code }: MDXContentProps) => {
  const Content = useMDXComponent(code);

  return <Content components={components} />;
};
