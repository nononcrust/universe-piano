import { defineDocumentType, defineNestedType, makeSource } from "contentlayer/source-files";

const PrivacyPolicy = defineDocumentType(() => ({
  name: "PrivacyPolicy",
  filePathPattern: "terms/privacy-policy.md",
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
  },
}));

const TermsOfService = defineDocumentType(() => ({
  name: "TermsOfService",
  filePathPattern: "terms/terms-of-service.md",
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
  },
}));

const Category = defineNestedType(() => ({
  name: "Category",
  filePathPattern: "categories/*.mdx",
  fields: {
    title: { type: "string", required: true },
  },
}));

/**
 * src/contents/[book]/[category]/[content].mdx
 * book: flattenPath.split("/")[1]
 * category: flattenPath.split("/")[2]
 * content: flattenPath.split("/")[3]
 * */

const Content = defineDocumentType(() => ({
  name: "Content",
  filePathPattern: "books/**/*.mdx",
  fields: {
    title: { type: "string", required: true },
    category: {
      type: "nested",
      of: Category,
    },
  },
  computedFields: {
    book: {
      type: "string",
      resolve: (doc) => {
        const urlPath = doc._raw.flattenedPath;
        const book = urlPath.split("/")[1];
        return book;
      },
    },
    category: {
      type: "string",
      resolve: (doc) => {
        const urlPath = doc._raw.flattenedPath;
        const category = urlPath.split("/")[2];
        return category;
      },
    },
  },
}));

export default makeSource({
  contentDirPath: "src/contents",
  documentTypes: [PrivacyPolicy, TermsOfService, Content],
});
