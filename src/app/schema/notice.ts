import { z } from "zod";

export const noticeRequestSchema = z.object({
  title: z.string().min(1).max(100),
  content: z.string().min(1).max(1000),
});

export type NoticeRequestSchema = z.infer<typeof noticeRequestSchema>;

export const noticeResponseSchema = z.object({
  id: z.number(),
  title: z.string(),
  content: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export type NoticeResponseSchema = z.infer<typeof noticeResponseSchema>;
