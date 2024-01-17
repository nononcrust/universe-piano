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

const Book = defineDocumentType(() => ({
  name: "Book",
  filePathPattern: "books/**/*.md",
  fields: {
    title: { type: "string", required: true },
  },
}));

export default makeSource({
  contentDirPath: "src/contents",
  documentTypes: [PrivacyPolicy, TermsOfService, Book],
});
