import { defineDocumentType, makeSource } from "contentlayer/source-files";

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

const Content = defineDocumentType(() => ({
  name: "Content",
  filePathPattern: "books/**/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    is_category: { type: "boolean", default: false },
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
